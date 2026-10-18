"""Snapshot of a page's SEO + server-rendered copy (no JavaScript) for regression checks.
Usage: python seo_snapshot.py <url> <out.json>    |    python seo_snapshot.py --diff a.json b.json"""
import html, json, re, ssl, sys, urllib.request

BLOCK_RE = re.compile(r'<(p|li|td|th|figcaption|summary|a)\b[^>]*>(.*?)</\1>', re.S)
SCRIPT_RE = re.compile(r'<(script|style)\b.*?</\1>', re.S)
HEAD_RE = re.compile(r'<h([1-3])\b[^>]*>(.*?)</h\1>', re.S)


def fetch(url):
    ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url + ('&' if '?' in url else '?') + 'nc=snapshot', headers={'User-Agent': 'Mozilla/5.0 gd-qa'})
    return urllib.request.urlopen(req, context=ctx, timeout=60).read().decode('utf-8')


def text(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()


def snapshot(url):
    h = fetch(url)
    meta = lambda pat: (re.search(pat, h, re.S) or [None, None])[1]
    graph = []
    for blk in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        d = json.loads(blk)
        for n in d.get('@graph', [d]):
            graph.append({k: v for k, v in n.items() if k not in ('dateModified', 'uploadDate')})
    pid = re.search(r'page-id-(\d+)', h).group(1)
    start = h.index('data-elementor-id="%s"' % pid)
    end = h.find('<footer', start)
    page = h[start:end if end > 0 else len(h)]
    page = SCRIPT_RE.sub(' ', page)
    return {
        'title': meta(r'<title>(.*?)</title>'),
        'description': meta(r'<meta name="description" content="([^"]*)"'),
        'canonical': meta(r'<link rel="canonical" href="([^"]*)"'),
        'robots': meta(r'<meta name="robots" content="([^"]*)"'),
        'og_title': meta(r'<meta property="og:title" content="([^"]*)"'),
        'breadcrumb': text(meta(r'(<nav aria-label="breadcrumbs" class="rank-math-breadcrumb">.*?</nav>)') or ''),
        'schema': sorted(json.dumps(n, sort_keys=True) for n in graph),
        'headings': [[lvl, text(t)] for lvl, t in HEAD_RE.findall(page)],
        'copy': [text(t) for _, t in BLOCK_RE.findall(page) if text(t)],
    }


if __name__ == '__main__':
    if sys.argv[1] == '--diff':
        a, b = (json.load(open(f, encoding='utf-8')) for f in sys.argv[2:4])
        same = True
        for k in a:
            if a[k] != b[k]:
                same = False
                if isinstance(a[k], list):
                    print(f'DIFF {k}: removed={[x for x in a[k] if x not in b[k]][:5]} added={[x for x in b[k] if x not in a[k]][:5]}')
                else:
                    print(f'DIFF {k}: {a[k]!r} -> {b[k]!r}')
        print('IDENTICAL' if same else 'DIFFERENCES FOUND')
    else:
        s = snapshot(sys.argv[1])
        json.dump(s, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(sys.argv[2], {k: (len(v) if isinstance(v, list) else v) for k, v in s.items()})
