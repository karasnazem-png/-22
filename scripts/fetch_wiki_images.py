#!/usr/bin/env python3
import re
import json
import urllib.parse
import urllib.request
import time

DATA_FILE = 'pope-data.js'
BACKUP_FILE = 'pope-data.js.bak'

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    src = f.read()

# extract sharedPopeImage value
m = re.search(r"const sharedPopeImage\s*=\s*'([^']*)'", src)
shared_image = m.group(1) if m else ''

# extract sourceUrls
m = re.search(r"const sourceUrls\s*=\s*\[([\s\S]*?)\];", src)
if not m:
    print('sourceUrls not found')
    exit(1)
urls_block = m.group(1)
source_urls = re.findall(r"'([^']*)'", urls_block)
print(f'Found {len(source_urls)} source URLs')

# extract popes array raw block
m = re.search(r"const popes\s*=\s*\[([\s\S]*?)\];", src)
if not m:
    print('popes array not found')
    exit(1)
popes_block = m.group(1)

# find pope objects
pope_objs = re.findall(r"\{([\s\S]*?)\}\s*,?", popes_block)
print(f'Found {len(pope_objs)} pope objects')

popes = []
for obj_text in pope_objs:
    # extract id and name
    id_m = re.search(r"id\s*:\s*(\d+)", obj_text)
    name_m = re.search(r"name\s*:\s*'([^']*)'", obj_text)
    if not id_m or not name_m:
        continue
    pid = int(id_m.group(1))
    name = name_m.group(1)
    # store original object text to reuse later
    popes.append({'id': pid, 'name': name, 'raw': obj_text})

# helper to query wikipedia for pageimage
WIKI_API = 'https://en.wikipedia.org/w/api.php'

def query_pageimage(title):
    params = {
        'action': 'query',
        'format': 'json',
        'prop': 'pageimages',
        'piprop': 'original',
        'titles': title,
        'redirects': 1
    }
    url = WIKI_API + '?' + urllib.parse.urlencode(params)
    # set a User-Agent header to avoid 403
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (compatible; FetchScript/1.0; +https://example.org)'
    })
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.load(resp)
            pages = data.get('query', {}).get('pages', {})
            for pid, page in pages.items():
                if 'original' in page:
                    return page['original']['source']
    except Exception as e:
        print('pageimage query failed for', title, e)
    return None


def search_wikipedia(term):
    params = {
        'action': 'query',
        'format': 'json',
        'list': 'search',
        'srsearch': term,
        'srlimit': 3
    }
    url = WIKI_API + '?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (compatible; FetchScript/1.0; +https://example.org)'
    })
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.load(resp)
            results = data.get('query', {}).get('search', [])
            return [r['title'] for r in results]
    except Exception as e:
        print('search failed for', term, e)
    return []

# For each pope, derive an English title from source_urls if possible
image_map = {}
for i, pope in enumerate(popes):
    idx = pope['id'] - 1
    title = None
    if idx < len(source_urls):
        su = source_urls[idx]
        # get last path segment
        last = su.rstrip('/').split('/')[-1]
        # remove extension
        last = last.split('.')[0]
        # attempt to find substring after 'Pope-'
        m = re.search(r'Pope[-_](.+)', last, re.IGNORECASE)
        if m:
            slug = m.group(1)
            # replace underscores and multiple hyphens with spaces
            slug = slug.replace('_', ' ').replace('-', ' ')
            # remove repeated spaces
            slug = re.sub(r'\s+', ' ', slug).strip()
            title = slug
    if not title:
        title = pope['name']
    print(f"Searching image for {pope['id']}: {pope['name']}  (title: {title})")

    # try direct pageimage query with title
    img = query_pageimage(title)
    if img:
        image_map[pope['id']] = img
        print(' -> found image via direct title')
    else:
        # try search to find candidate titles
        candidates = search_wikipedia(title)
        found = False
        for cand in candidates:
            img = query_pageimage(cand)
            if img:
                image_map[pope['id']] = img
                print(' -> found image via search candidate:', cand)
                found = True
                break
        if not found:
            print(' -> no image found; using placeholder')
            image_map[pope['id']] = shared_image
    time.sleep(0.6)  # polite delay

# Now produce updated popes block text by injecting image: 'URL', after name line
new_popes_text = ''
for obj_text in pope_objs:
    id_m = re.search(r"id\s*:\s*(\d+)", obj_text)
    if not id_m:
        new_popes_text += '{' + obj_text + '},\n'
        continue
    pid = int(id_m.group(1))
    lines = obj_text.split('\n')
    # find the line with name:
    out_lines = []
    inserted = False
    for line in lines:
        out_lines.append(line)
        if (not inserted) and re.search(r"name\s*:\s*'([^']*)'", line):
            img_url = image_map.get(pid, shared_image)
            # add image line
            out_lines.append(f"    image: '{img_url}',")
            inserted = True
    new_obj = '{' + '\n'.join(out_lines) + '\n  }'
    new_popes_text += new_obj + ',\n'

# replace old popes block with new one
new_src = re.sub(r"const popes\s*=\s*\[[\s\S]*?\];", 'const popes = [\n' + new_popes_text + '];', src)

# backup and write
with open(BACKUP_FILE, 'w', encoding='utf-8') as f:
    f.write(src)
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.write(new_src)

print('Updated', DATA_FILE, 'and backed up original to', BACKUP_FILE)
print('Images found for', sum(1 for v in image_map.values() if v and v != shared_image), 'popes (others use placeholder).')
