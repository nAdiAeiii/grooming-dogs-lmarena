"""Automated QA over the 22 rendered drafts (admin preview)."""
import asyncio, json, re, html, os, glob
from playwright.async_api import async_playwright
BASE = os.path.dirname(os.path.abspath(__file__))
name, val = open(os.path.join(BASE, '.authcookie')).read().strip().split('\t')
man = json.load(open(os.path.join(BASE, 'out', 'manifest.json'), encoding='utf-8'))
IDS = {'GD-00': 38, 'GD-01': 39, 'GD-02': 40, 'GD-03': 41, 'GD-04': 42, 'GD-05': 43, 'GD-06': 44, 'GD-07': 45, 'GD-08': 46, 'GD-09': 47,
       'GD-10': 48, 'GD-11': 49, 'GD-12': 50, 'GD-13': 51, 'GD-14': 52, 'GD-15': 53, 'GD-16': 54, 'GD-17': 55, 'GD-18': 56, 'GD-19': 57,
       'GD-20': 58, 'GD-21': 3}
SLUGS = {m['slug']: m['pid'] for m in man}
PROD = r'C:\Users\Nadia\grooming-dogs-lmarena\PRODUCTION'

def outline(pid):
    f = glob.glob(os.path.join(PROD, pid + '-*.md'))[0]
    t = open(f, encoding='utf-8').read()
    m = re.search(r'### Page outline\n(.*?)(?:\n---|\n## )', t, re.S)
    if not m:
        return None
    return [re.sub(r'\s*\(`#.*$|\s*\(\d+ entries\)|\s*\(\d+\)$|\s*\(`.*`\)$', '', x).strip() for x in re.findall(r'^- \*\*H2:\*\* (.+)$', m.group(1), re.M)]

async def main():
    report, ids_by_page = [], {}
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        await ctx.add_cookies([{'name': name, 'value': val, 'domain': 'grooming-dogs.com', 'path': '/', 'secure': True}])
        pg = await ctx.new_page()
        pages = {}
        for m in man:
            pid = m['pid']
            await pg.goto(f'https://grooming-dogs.com/?page_id={IDS[pid]}&preview=true', wait_until='domcontentloaded')
            d = await pg.evaluate("""() => {
              const main = document.querySelector('[data-elementor-type="wp-page"]') || document.body;
              const hs = [...main.querySelectorAll('h1,h2,h3')].map(h => [h.tagName, h.innerText.trim()]);
              const links = [...main.querySelectorAll('a[href]')].map(a => a.getAttribute('href'));
              const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
              const imgs = [...main.querySelectorAll('img')].map(i => [i.getAttribute('src'), i.getAttribute('alt')]);
              const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => s.textContent);
              const title = document.title;
              const desc = (document.querySelector('meta[name=description]') || {}).content || '';
              const text = main.innerText;
              return {hs, links, ids, imgs, ld, title, desc, text};
            }""")
            pages[pid] = d
            ids_by_page[m['slug']] = set(d['ids'])
        await b.close()
    issues_total = 0
    for m in man:
        pid, d = m['pid'], pages[m['pid']]
        issues = []
        h1 = [t for tag, t in d['hs'] if tag == 'H1']
        h2 = [t for tag, t in d['hs'] if tag == 'H2']
        if len(h1) != 1: issues.append(f'H1 count {len(h1)}')
        exp = outline(pid)
        if exp is not None:
            norm = lambda s: re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()
            if [norm(x) for x in h2] != [norm(x) for x in exp]:
                issues.append(f'H2 mismatch: page={h2} record={exp}')
        # links
        for href in d['links']:
            if href.startswith('#'):
                if href[1:] and href[1:] not in d['ids']: issues.append(f'missing anchor {href}')
                continue
            mm = re.match(r'^(?:https://grooming-dogs\.com)?(/[^#?]*)?(?:#(.*))?$', href)
            if href.startswith('http') and 'grooming-dogs.com' not in href: continue
            if href.startswith('mailto:'): issues.append(f'mailto link {href}'); continue
            if not mm: issues.append(f'odd link {href}'); continue
            path, frag = (mm.group(1) or '/'), mm.group(2)
            slug = path.strip('/')
            if slug.startswith('wp-content'): continue
            if slug == 'guides' or slug.startswith('guides/'): issues.append(f'link to /guides/ {href}')
            elif slug not in SLUGS: issues.append(f'link to non-launch URL {href}')
            elif frag and frag not in ids_by_page.get(slug, set()): issues.append(f'missing target anchor {href}')
        for src, alt in d['imgs']:
            if not alt: issues.append(f'image without alt {src}')
        # SEO
        if m['seo_title'] and m['seo_title'] not in d['title']: issues.append(f'title tag "{d["title"]}" != record')
        if m['meta'] and html.unescape(d['desc']) != m['meta']: issues.append('meta description differs')
        # schema
        types = []
        for s in d['ld']:
            types += re.findall(r'"@type"\s*:\s*"([A-Za-z]+)"', s)
        if 'Person' in types: issues.append('Person schema present')
        faq = types.count('FAQPage')
        if faq > 1: issues.append(f'FAQPage x{faq}')
        has_faq_section = any(t.lower() == 'common questions' for t in h2)
        if has_faq_section and faq != 1: issues.append(f'FAQ section but FAQPage x{faq}')
        if not has_faq_section and faq: issues.append('FAQPage without FAQ section')
        want = {'GD-18': 'AboutPage', 'GD-20': 'ContactPage'}.get(pid)
        if want and want not in types: issues.append(f'{want} missing')
        if pid not in ('GD-00', 'GD-18', 'GD-19', 'GD-20', 'GD-21') and 'Article' not in types: issues.append('Article missing')
        if pid in ('GD-00', 'GD-18', 'GD-19', 'GD-20', 'GD-21') and 'Article' in types: issues.append('Article on site page')
        # content leaks
        for pat in ['[rank_math', '{{', '*[', '**', 'Lorem', 'Builder']:
            if pat in d['text']: issues.append(f'text contains {pat!r}')
        fills = d['text'].count('⟦')
        report.append((pid, len(h1), len(h2), len(d['links']), sorted(set(types)), fills, issues))
        issues_total += len(issues)
    for pid, n1, n2, nl, types, fills, issues in report:
        print(f'{pid} H1={n1} H2={n2} links={nl} fill-ins={fills} schema={types}')
        for i in issues[:12]: print('    !', i)
    print('TOTAL ISSUES', issues_total)
asyncio.run(main())
