"""Post-publish QA as an anonymous visitor (deployment checklist H, steps 13–19)."""
import asyncio, json, re, sys, time
from playwright.async_api import async_playwright
man = json.load(open('out/manifest.json', encoding='utf-8'))
SITE = 'https://grooming-dogs.com'
REDIRECTS = {'/home-b/': (301, '/'), '/team/': (301, '/about/'), '/services/': (301, '/choosing-a-dog-groomer/'),
             '/services-detail/': (301, '/choosing-a-dog-groomer/'), '/pricing/': (301, '/dog-grooming-cost/'), '/faq/': (410, None),
             '/blog/': (301, '/how-to-groom-your-dog-at-home/'), '/404-2/': (410, None),
             '/top-dog-grooming-tips-for-a-happy-healthy-pup/': (301, '/how-to-groom-your-dog-at-home/'),
             '/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/': (301, '/how-to-groom-your-dog-at-home/'),
             '/locations.kml': (410, None)}
TOKEN = sys.argv[1] if len(sys.argv) > 1 else None

async def main():
    issues, types_all = [], {}
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        pg = await ctx.new_page()
        urls = []
        for m in man:
            url = SITE + '/' + (m['slug'] + '/' if m['slug'] and m['pid'] != 'GD-00' else '')
            urls.append((m['pid'], url))
            r = await pg.goto(url, wait_until='networkidle')
            html = await pg.content()
            canon = await pg.evaluate("document.querySelector('link[rel=canonical]')?.href")
            h1 = await pg.evaluate("[...document.querySelectorAll('h1')].map(h=>h.innerText.trim())")
            robots = await pg.evaluate("document.querySelector('meta[name=robots]')?.content || ''")
            title = await pg.title()
            types = set()
            for blk in re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S):
                try:
                    d = json.loads(blk)
                except Exception:
                    issues.append(f"{m['pid']} bad JSON-LD"); continue
                for n in (d.get('@graph', [d]) if isinstance(d, dict) else d):
                    t = n.get('@type'); types.update(t if isinstance(t, list) else [t])
            types_all[m['pid']] = sorted(x for x in types if x)
            ok = r.status == 200 and canon == url and len(h1) == 1 and 'noindex' not in robots
            if not ok: issues.append(f"{m['pid']} status={r.status} canon={canon} h1={len(h1)} robots={robots}")
            if 'Person' in types: issues.append(f"{m['pid']} has Person schema")
            print(f"{m['pid']} {r.status} h1={len(h1)} canon={'ok' if canon == url else canon} robots={robots or '-'} | {title[:50]} | {','.join(types_all[m['pid']])}")
        cookies = await ctx.cookies()
        print('COOKIES after 22 anonymous page loads:', [c['name'] for c in cookies] or 'none')
        if cookies: issues.append('cookies set: ' + ', '.join(c['name'] for c in cookies))
        # schema expectations
        for pid, t in types_all.items():
            n = int(pid[3:])
            if 1 <= n <= 17 and not ({'Article', 'BlogPosting', 'NewsArticle'} & set(t)): issues.append(f'{pid} no Article')
            if pid == 'GD-18' and 'AboutPage' not in t: issues.append('GD-18 no AboutPage')
            if pid == 'GD-20' and 'ContactPage' not in t: issues.append('GD-20 no ContactPage')
            if 'Organization' not in t: issues.append(f'{pid} no Organization')
        # redirects (no following)
        api = await p.request.new_context(ignore_https_errors=True)
        for src, (code, dest) in REDIRECTS.items():
            r = await api.get(SITE + src, max_redirects=0)
            loc = r.headers.get('location', '')
            good = r.status == code and (dest is None or loc.rstrip('/') == (SITE + dest).rstrip('/'))
            chain = ''
            if good and dest:
                r2 = await api.get(loc, max_redirects=0); chain = f' -> {r2.status}'
                good = r2.status == 200
            print(f'REDIRECT {src} {r.status} {loc}{chain} {"OK" if good else "FAIL"}')
            if not good: issues.append(f'redirect {src} {r.status} {loc}{chain}')
        # sitemap
        r = await api.get(SITE + '/sitemap_index.xml'); idx = await r.text()
        maps = re.findall(r'<loc>([^<]+)</loc>', idx); locs = []
        for sm in maps:
            locs += re.findall(r'<loc>([^<]+)</loc>', await (await api.get(sm)).text())
        page_locs = sorted(l for l in locs if not re.search(r'\.(jpe?g|png|webp)$', l))
        expect = sorted(u for _, u in urls)
        print(f'SITEMAP index={r.status} maps={[m.split("/")[-1] for m in maps]} urls={len(page_locs)}')
        if page_locs != expect:
            issues.append(f'sitemap mismatch: extra={sorted(set(page_locs) - set(expect))} missing={sorted(set(expect) - set(page_locs))}')
        # overflow at 3 widths
        for wd in (1366, 820, 390):
            c2 = await b.new_context(viewport={'width': wd, 'height': 900}, ignore_https_errors=True); p2 = await c2.new_page(); bad = []
            for pid, u in urls:
                await p2.goto(u, wait_until='networkidle')
                if await p2.evaluate('document.documentElement.scrollWidth > window.innerWidth'): bad.append(pid)
                if pid in ('GD-00', 'GD-04') : await p2.screenshot(path=f'shots-live-{pid}-{wd}.png', full_page=False)
            print(f'OVERFLOW {wd}px:', bad or 'none'); issues += [f'overflow {wd} {x}' for x in bad]; await c2.close()
        # anonymous form submission
        if TOKEN:
            await pg.goto(SITE + '/contact/', wait_until='networkidle')
            await pg.locator('#wpforms-88-field_1').select_option(index=1)
            await pg.fill('#wpforms-88-field_3', f'Post-publish anonymous delivery test ({TOKEN}). No reply needed.')
            await pg.check('#wpforms-88-field_5_1'); await pg.wait_for_timeout(4000)
            await pg.click('#wpforms-submit-88')
            await pg.wait_for_selector('.wpforms-confirmation-container-full, .wpforms-error', timeout=30000)
            res = (await pg.locator('.wpforms-confirmation-container-full, .wpforms-error').first.inner_text()).strip()
            print('FORM anonymous:', res); print('COOKIES after form:', [c['name'] for c in await ctx.cookies()] or 'none')
            if 'sent' not in res: issues.append('anonymous form failed: ' + res)
        await b.close()
    print('\nISSUES', len(issues)); [print(' !', i) for i in issues]
asyncio.run(main())
