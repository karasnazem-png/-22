#!/usr/bin/env python3
import json
import re
import subprocess
from pathlib import Path


DATA_FILE = Path('/workspaces/-22/pope-data.js')


def clean_story(lines, name):
    title_index = next(
        (index for index, line in enumerate(lines) if name in line and 'بابا' in line),
        0,
    )
    end_index = next(
        (
            index
            for index, line in enumerate(lines[title_index + 1:], title_index + 1)
            if 'St-Takla.org Divider' in line or 'البطريرك التإلى لهذا البابا' in line
        ),
        len(lines),
    )
    story = ' '.join(line.strip() for line in lines[title_index:end_index])
    story = re.sub(r'\s+', ' ', story).strip()
    return story


source = DATA_FILE.read_text(encoding='utf-8')
source_urls_match = re.search(r'const sourceUrls = \[(.*?)\];', source, re.S)
source_urls = re.findall(r"'([^']+)'", source_urls_match.group(1))
source_urls = [
    url.replace('OrOrthodox', 'Orthodox')
    .replace('OrThodox', 'Orthodox')
    .replace('Orثodox', 'Orthodox')
    for url in source_urls
]

entries = list(re.finditer(r'\{\s*id:\s*(\d+),([\s\S]*?)\n\s*\},', source))
updated = source
imported = 0

for entry in entries:
    pope_id = int(entry.group(1))
    block = entry.group(0)
    name_match = re.search(r"name:\s*'([^']+)'", block)
    url_match = re.search(r"source:\s*'([^']+)'", block)
    if not name_match:
        continue

    url = url_match.group(1) if url_match else source_urls[pope_id - 1]
    url = (
        url.replace('OrOrthodox', 'Orthodox')
        .replace('OrThodox', 'Orthodox')
        .replace('Orثodox', 'Orthodox')
    )
    try:
        result = subprocess.run(
            ['lynx', '-dump', '-nolist', url],
            check=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
        print(f'Unable to import pope {pope_id}')
        continue

    story = clean_story(result.stdout.splitlines(), name_match.group(1))
    if len(story) < 120:
        print(f'Skipping short story for pope {pope_id}')
        continue

    replacement = json.dumps(story, ensure_ascii=False)
    updated, count = re.subn(
        rf'(\{{\s*id:\s*{pope_id},[\s\S]*?\n\s*story:\s*)\'[^\']*\'',
        rf'\1{replacement}',
        updated,
        count=1,
    )
    if count:
        imported += 1

DATA_FILE.write_text(updated, encoding='utf-8')
print(f'Imported {imported} full stories')