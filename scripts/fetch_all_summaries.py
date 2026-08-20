#!/usr/bin/env python3
import re, json, urllib.parse, urllib.request, time
from pathlib import Path

DATA_FILE = '/workspaces/-22/pope-data.js'
BACKUP = '/workspaces/-22/pope-data.js.summaries.bak'
OUT_LOG = '/workspaces/-22/scripts/summaries_results.json'

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    src = f.read()

m = re.search(r"const popes\s*=\s*\[([\s\S]*?)\];", src)
if not m:
    print('popes block not found')
    raise SystemExit(1)
body = m.group(1)
objs = re.findall(r"\{([\s\S]*?)\}\s*,?", body)

popes = []
for o in objs:
    id_m = re.search(r"id\s*:\s*(\d+)", o)
    name_m = re.search(r"name\s*:\s*'([^']*)'", o)
    src_m = re.search(r"source\s*:\s*'([^']*)'", o)
    if id_m and name_m:
        popes.append({'id': int(id_m.group(1)), 'name': name_m.group(1), 'raw': o, 'source': src_m.group(1) if src_m else ''})

print(f'Found {len(popes)} popes')

BASE = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
headers = {'User-Agent': 'Mozilla/5.0 (compatible; FetchSummaries/1.0; +https://example.org)'}

results = {}

for pope in popes:
    pid = pope['id']
    name = pope['name']
    source = pope['source']
    candidates = []
    # derive candidate from source
    if source:
        slug = source.rstrip('/').split('/')[-1].split('.')[0]
        slug = re.sub(r'^(Life-of-Coptic-Pope-\d+-Pope-|Life-of-Coptic-Pope-\d+-|Pope-|-)', ' ', slug, flags=re.I).strip()
        slug = slug.replace('_',' ').replace('-', ' ')
        candidates.append(slug)
        candidates.append('Pope ' + slug)
        candidates.append(slug.title())
    # use name stripped of Arabic prefix
    arabic_name = re.sub(r'^البابا\s*', '', name)
    candidates.append(arabic_name)
    candidates.append(arabic_name.replace('البابا','').strip())
    found = None
    tried = set()
    for cand in candidates:
        if not cand: continue
        cand_norm = cand.strip()
        if cand_norm in tried: continue
        tried.add(cand_norm)
        title = urllib.parse.quote(cand_norm.replace(' ', '_'))
        url = BASE + title
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.load(resp)
                if 'originalimage' in data and data['originalimage'].get('source'):
                    img = data['originalimage']['source']
                    if 'upload.wikimedia.org' in img:
                        found = img
                        print(f'Found for id={pid} cand="{cand_norm}" -> {img}')
                        break
        except Exception as e:
            # print('no summary for', cand_norm, e)
            pass
        time.sleep(0.2)
    results[pid] = found
    time.sleep(0.4)

# backup and update file
Path(BACKUP).write_text(src, encoding='utf-8')
new_body = ''
for o in objs:
    id_m = re.search(r"id\s*:\s*(\d+)", o)
    pid = int(id_m.group(1)) if id_m else None
    lines = o.splitlines()
    out = []
    image_handled = False
    for line in lines:
        if re.match(r"\s*image\s*:\s*'", line):
            if results.get(pid):
                out.append("    image: '%s'," % results[pid])
            else:
                out.append(line)
            image_handled = True
        else:
            out.append(line)
    if not image_handled and results.get(pid):
        # insert image after name
        new_lines = []
        inserted=False
        for ln in out:
            new_lines.append(ln)
            if (not inserted) and re.search(r"name\s*:\s*'([^']*)'", ln):
                new_lines.append("    image: '%s'," % results[pid])
                inserted=True
        out=new_lines
    new_body += '{' + '\n'.join(out) + '\n  },\n'

new_src = re.sub(r"const popes\s*=\s*\[([\s\S]*?)\];", 'const popes = [\n' + new_body + '];', src)
Path(DATA_FILE).write_text(new_src, encoding='utf-8')
Path(OUT_LOG).write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
print('done, results written to', OUT_LOG)
