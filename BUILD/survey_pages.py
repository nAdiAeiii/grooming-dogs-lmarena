"""Read-only survey of the 22 live pages: structure relevant to the guide roll-out."""
import json, re, ssl, urllib.request, html as H

man = json.load(open('out/manifest.json', encoding='utf-8'))
ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE


def get(u):
    return urllib.request.urlopen(urllib.request.Request(u + '?nc=survey', headers={'User-Agent': 'Mozilla/5.0 gd-qa'}), context=ctx, timeout=60).read().decode('utf-8')


for m in man:
    url = 'https://grooming-dogs.com/' + (m['slug'] + '/' if m['pid'] != 'GD-00' else '')
    h = get(url)
    pid = re.search(r'page-id-(\d+)', h).group(1)
    body = h[h.index('data-elementor-id="%s"' % pid):]
    body = body[:body.find('<footer')]
    lists = re.findall(r'<ul class="gd-sources">(.*?)</ul>', body, re.S)
    li_ids = re.findall(r'<li id="([^"]+)"', ''.join(lists))
    cites = re.findall(r'<sup><a href="#([^"]+)"', body)
    h2 = len(re.findall(r'<h2\b', body))
    byline = bool(re.search(r'<p>By Grooming Dogs', body))
    tables = body.count('gd-table-wrap')
    faq = body.count('elementor-accordion-item')
    tmpl = re.search(r'<body[^>]*class="([^"]*)"', h).group(1)
    tmpl = [c for c in tmpl.split() if 'template' in c]
    print(f"{m['pid']} id={pid:>2} h2={h2:>2} byline={'Y' if byline else '-'} sourceLists={len(lists)} sources={len(li_ids)} "
          f"cites={len(cites)} citeTargets={sorted(set(cites) - set(li_ids)) or 'ok'} tables={tables} faq={faq} {tmpl}")
h = get('https://grooming-dogs.com/bathing-your-dog/')
i = h.index('<body')
print('\nBODY START:', re.sub(r'\s+', ' ', h[i:i + 700]))
print('\n<main> present:', '<main' in h, '| id="content":', 'id="content"' in h, '| skip-link:', 'skip-link' in h)
for blk in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
    for n in json.loads(blk).get('@graph', []):
        if 'datePublished' in n or 'dateModified' in n:
            print('schema', n.get('@type'), n.get('datePublished'), n.get('dateModified'))
print('og:updated_time', re.findall(r'property="(?:og:updated_time|article:modified_time)" content="([^"]+)"', h))
