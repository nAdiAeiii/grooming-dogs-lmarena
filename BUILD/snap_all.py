"""Snapshot (or diff) SEO + server-rendered copy for all 22 launch pages.
Usage: python snap_all.py snap <dir>   |   python snap_all.py diff <dirA> <dirB>"""
import json, os, sys
from seo_snapshot import snapshot

man = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out', 'manifest.json'), encoding='utf-8'))
URLS = {m['pid']: 'https://grooming-dogs.com/' + (m['slug'] + '/' if m['pid'] != 'GD-00' else '') for m in man}

if sys.argv[1] == 'snap':
    os.makedirs(sys.argv[2], exist_ok=True)
    for pid, u in URLS.items():
        s = snapshot(u)
        json.dump(s, open(os.path.join(sys.argv[2], pid + '.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(pid, len(s['copy']), 'blocks', len(s['headings']), 'headings', len(s['schema']), 'schema nodes')
else:
    a, b = sys.argv[2], sys.argv[3]; bad = 0
    for pid in URLS:
        x = json.load(open(os.path.join(a, pid + '.json'), encoding='utf-8'))
        y = json.load(open(os.path.join(b, pid + '.json'), encoding='utf-8'))
        diffs = [k for k in x if x[k] != y[k]]
        bad += bool(diffs)
        print(pid, 'IDENTICAL' if not diffs else 'DIFF in ' + ', '.join(diffs))
        for k in diffs:
            if isinstance(x[k], list):
                print('   removed:', [v for v in x[k] if v not in y[k]][:3]); print('   added:  ', [v for v in y[k] if v not in x[k]][:3])
            else:
                print('   ', repr(x[k])[:120], '->', repr(y[k])[:120])
    print('ALL IDENTICAL' if not bad else f'{bad} PAGES DIFFER')
