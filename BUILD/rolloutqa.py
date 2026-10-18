"""Browser regression suite for the guide roll-out (anonymous visitor), all 22 pages.
Writes screenshots for focus pages to qa-rollout/."""
import asyncio, json, os
from playwright.async_api import async_playwright

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(BASE, 'qa-rollout') + os.sep
man = json.load(open(os.path.join(BASE, 'out', 'manifest.json'), encoding='utf-8'))
PAGES = [(m['pid'], 'https://grooming-dogs.com/' + (m['slug'] + '/' if m['pid'] != 'GD-00' else '')) for m in man]
GUIDES = {p for p, _ in PAGES if 1 <= int(p[3:]) <= 17}
SHOTS = {'GD-00', 'GD-04', 'GD-10', 'GD-16', 'GD-17', 'GD-21'}
R = []


def check(pid, name, ok, detail=''):
    R.append((pid, name, bool(ok), detail))
    if not ok:
        print(f'FAIL {pid} {name} | {detail}')


CONTRAST = r"""(sel) => {
  const L = c => { const m = c.match(/[\d.]+/g).map(Number); const [r,g,b] = m.slice(0,3).map(v => { v/=255; return v<=.03928? v/12.92 : Math.pow((v+.055)/1.055,2.4); }); return [.2126*r+.7152*g+.0722*b, m[3]===undefined?1:m[3]]; };
  const e = document.querySelector(sel); if (!e) return null;
  let bgEl = e, bg = 'rgba(0, 0, 0, 0)';
  while (bgEl) { bg = getComputedStyle(bgEl).backgroundColor; if (!/rgba\(0, 0, 0, 0\)|transparent/.test(bg)) break; bgEl = bgEl.parentElement; }
  if (!bgEl) bg = 'rgb(255, 252, 247)';
  const cs = getComputedStyle(e); let [fl, fa] = L(cs.color); const [bl] = L(bg); const op = parseFloat(cs.opacity) * fa;
  if (op < 1) fl = fl * op + bl * (1 - op);
  const hi = Math.max(fl, bl), lo = Math.min(fl, bl); return Math.round(((hi + .05) / (lo + .05)) * 100) / 100;
}"""

STATE = r"""() => {
  const q = s => document.querySelectorAll(s).length;
  const lis = [...document.querySelectorAll('.gd-sources li[id]')];
  const h2 = [...document.querySelectorAll('.elementor[data-elementor-type="wp-page"] h2')];
  const secWithCites = [...document.querySelectorAll('.elementor[data-elementor-type="wp-page"] > .e-con')].filter(s => s.querySelector('h2') && s.querySelector('.gd-cite')).length;
  const links = [...document.querySelectorAll('.gd-cited a, .gd-secsrc a, .gd-toc a')].map(a => a.getAttribute('href').slice(1));
  return {sources: lis.length, cites: q('.gd-cite'), cited: q('.gd-cited'), secsrc: q('.gd-secsrc'), secWithCites, h2: h2.length, anchors: q('.gd-anchor'),
          toc: q('.elementor[data-elementor-type="wp-page"] > .gd-toc'), tocM: q('.gd-toc-m'), pop: q('#gd-pop'),
          readinfo: (document.querySelector('.gd-readinfo')?.textContent || '').split(String.fromCharCode(160)).join(' '),
          unresolved: links.filter(id => !document.getElementById(id)),
          footerV2: q('.gd-footer--v2'), skip: q('a.hfe-skip-link[href="#content"]'), main: q('main#content'),
          guideClass: document.body.classList.contains('gd-guide')};
}"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        # ---------- every page × 3 widths ----------
        for wd, ht in ((1366, 900), (820, 1100), (390, 844)):
            ctx = await b.new_context(viewport={'width': wd, 'height': ht}, ignore_https_errors=True)
            pg = await ctx.new_page()
            for pid, url in PAGES:
                errs, hosts, assets = [], set(), []
                h1 = lambda e: errs.append(str(e)); h2 = lambda m: errs.append(m.text) if m.type == 'error' else None
                h3 = lambda r: (hosts.add(r.url.split('/')[2]), assets.append(r.url) if '/gd-guide/' in r.url else None)
                pg.on('pageerror', h1); pg.on('console', h2); pg.on('request', h3)
                r = await pg.goto(url, wait_until='networkidle')
                g = pid in GUIDES
                st = await pg.evaluate(STATE)
                check(pid, f'{wd} status 200', r.status == 200, r.status)
                check(pid, f'{wd} no overflow', not await pg.evaluate('document.documentElement.scrollWidth > innerWidth'))
                check(pid, f'{wd} no JS errors', not errs, errs[:2])
                check(pid, f'{wd} own host only', hosts == {'grooming-dogs.com'}, sorted(hosts))
                check(pid, f'{wd} guide assets only on guides', (len(assets) == 2) == g and st['guideClass'] == g, (len(assets), st['guideClass']))
                check(pid, f'{wd} footer v2, skip link, one main', st['footerV2'] == 1 and st['skip'] == 1 and st['main'] == 1, st)
                if g:
                    toc_d = await pg.evaluate("getComputedStyle(document.querySelector('.elementor[data-elementor-type=\"wp-page\"] > .gd-toc')).display")
                    toc_m = await pg.evaluate("(()=>{const e=document.querySelector('.gd-toc-m');return e?getComputedStyle(e).display:'absent'})()")
                    own = pid == 'GD-17'  # has its own jump list under the short answer: no duplicate collapsed list
                    check(pid, f'{wd} contents column on wide / collapsed list otherwise',
                          (toc_d != 'none' and toc_m in ('none', 'absent')) if wd >= 1100 else (toc_d == 'none' and ((toc_m == 'absent') if own else (toc_m not in ('none', 'absent')))), (toc_d, toc_m))
                else:
                    check(pid, f'{wd} no guide UI on non-guide page', st['toc'] == 0 and st['anchors'] == 0 and st['cites'] == 0 and not st['readinfo'], st)
                if wd == 1366:
                    if g:
                        check(pid, 'copy-link on every H2 and only there', st['anchors'] == st['h2'], (st['anchors'], st['h2']))
                        check(pid, 'all contents/back/section links resolve', not st['unresolved'], st['unresolved'][:3])
                        if st['sources']:
                            check(pid, 'every cited marker enhanced', st['cites'] > 0, st['cites'])
                            check(pid, 'source count in byline = sources listed', f"{st['sources']} source" in st['readinfo'], st['readinfo'])
                            check(pid, 'section-source line only where a section cites', st['secsrc'] == st['secWithCites'], (st['secsrc'], st['secWithCites']))
                            check(pid, 'cited-in lines present', st['cited'] > 0, st['cited'])
                        else:
                            check(pid, 'no source UI where no sources', st['cites'] == 0 and st['secsrc'] == 0 and st['cited'] == 0 and st['pop'] == 0 and 'source' not in st['readinfo'], st)
                        check(pid, 'reading time present', 'min read' in st['readinfo'], st['readinfo'])
                        for sel, name in (('.gd-toc a', 'contents'), ('.gd-readinfo', 'reading info'), ('.gd-secsrc', 'section sources'), ('.gd-cited', 'cited-in')):
                            c = await pg.evaluate(CONTRAST, sel)
                            if c is not None:
                                check(pid, f'contrast {name} >= 4.5', c >= 4.5, c)
                    for sel, name in (('.gd-footer--v2 .gd-flabel', 'footer heading'), ('.gd-footer--v2 .gd-fsmall', 'footer small'), ('.gd-footer--v2 a', 'footer link')):
                        c = await pg.evaluate(CONTRAST, sel)
                        check(pid, f'contrast {name} >= 4.5', c and c >= 4.5, c)
                    check(pid, 'no cookies', not await ctx.cookies(), [c['name'] for c in await ctx.cookies()])
                if pid in SHOTS:
                    await pg.screenshot(path=f'{OUT}{pid}-top-{wd}.png')
                    if g:
                        await pg.evaluate("(document.querySelectorAll('.elementor[data-elementor-type=\"wp-page\"] h2')[2]||document.body).scrollIntoView(); scrollBy(0,-80)")
                        await pg.wait_for_timeout(250); await pg.screenshot(path=f'{OUT}{pid}-mid-{wd}.png')
                    await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.wait_for_timeout(200)
                    await pg.screenshot(path=f'{OUT}{pid}-end-{wd}.png')
                pg.remove_listener('pageerror', h1); pg.remove_listener('console', h2); pg.remove_listener('request', h3)
            await ctx.close()

        # ---------- keyboard + copy-link on every guide (desktop) ----------
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        await ctx.grant_permissions(['clipboard-read', 'clipboard-write'], origin='https://grooming-dogs.com')
        pg = await ctx.new_page()
        for pid, url in PAGES:
            if pid not in GUIDES:
                continue
            await pg.goto(url, wait_until='networkidle')
            if await pg.evaluate("!!document.querySelector('.gd-cite')"):
                await pg.focus('#gd-c1'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(120)
                same = await pg.evaluate("""(()=>{const a=document.querySelector('#gd-c1');const li=document.getElementById(a.getAttribute('href').slice(1)).cloneNode(true);
                    li.querySelectorAll('.gd-cited').forEach(n=>n.remove());const t=document.querySelector('.gd-pop__text');
                    return !document.getElementById('gd-pop').hidden && a.getAttribute('aria-expanded')==='true' && t && t.textContent.trim()===li.textContent.trim()})()""")
                check(pid, 'Enter opens preview with the exact source text', same)
                await pg.keyboard.press('Tab'); await pg.wait_for_timeout(60)
                check(pid, 'Tab enters preview', await pg.evaluate("document.getElementById('gd-pop').contains(document.activeElement)"))
                await pg.keyboard.press('Escape'); await pg.wait_for_timeout(60)
                check(pid, 'Escape closes, focus back on marker', await pg.evaluate("document.getElementById('gd-pop').hidden && document.activeElement.id==='gd-c1'"))
                await pg.keyboard.press(' '); await pg.wait_for_timeout(60)
                check(pid, 'Space opens preview', await pg.evaluate("!document.getElementById('gd-pop').hidden"))
                await pg.mouse.click(5, 450); await pg.wait_for_timeout(60)
                check(pid, 'click outside closes', await pg.evaluate("document.getElementById('gd-pop').hidden"))
                # collapsible sources list
                st0 = await pg.evaluate("(()=>{const d=document.getElementById('sources');return d&&d.tagName==='DETAILS'?{open:d.open,label:d.querySelector('summary').textContent,n:document.querySelectorAll('.gd-sources li[id]').length}:null})()")
                check(pid, 'sources list collapsed by default with correct count', st0 and not st0['open'] and st0['label'] == f"Sources ({st0['n']})", st0)
                await pg.focus('#sources > summary'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(80)
                o1 = await pg.evaluate("document.getElementById('sources').open")
                await pg.keyboard.press('Enter'); await pg.wait_for_timeout(80)
                check(pid, 'keyboard opens and closes the sources list', o1 and not await pg.evaluate("document.getElementById('sources').open"))
                await pg.click('#gd-c1'); await pg.wait_for_timeout(100); await pg.click('.gd-pop__actions a'); await pg.wait_for_timeout(500)
                tgt = await pg.evaluate("document.querySelector('#gd-c1').getAttribute('href').slice(1)")
                ok = await pg.evaluate(f"(()=>{{const r=document.getElementById('{tgt}').getBoundingClientRect();return document.getElementById('sources').open&&r.height>0&&r.top>=0&&r.top<innerHeight}})()")
                check(pid, 'See all sources opens the list at that source', ok, tgt)
                for sel, name in (('.gd-secsrc a', 'section-source link'), ('.gd-toc a[data-id="sources"]', 'contents Sources link'), ('.gd-readinfo a', 'byline source count')):
                    await pg.evaluate("document.getElementById('sources').open=false; scrollTo(0,0)")
                    await pg.evaluate(f"document.querySelector('{sel}').scrollIntoView({{block:'center'}})"); await pg.wait_for_timeout(100)
                    await pg.click(sel); await pg.wait_for_timeout(400)
                    check(pid, f'{name} opens the sources list', await pg.evaluate("document.getElementById('sources').open"))
                faq = await pg.evaluate("[...document.querySelectorAll('.gd-cited a')].find(a=>a.textContent==='Common questions')?.getAttribute('data-gd-jump')")
                await pg.evaluate("document.getElementById('sources').open=true")
                if faq:
                    await pg.click(f'.gd-cited a[data-gd-jump="{faq}"]'); await pg.wait_for_timeout(1100)
                    ok = await pg.evaluate(f"(()=>{{const r=document.getElementById('{faq}').getBoundingClientRect();return r.height>0&&r.top>=0&&r.bottom<=innerHeight&&document.activeElement.id==='{faq}'}})()")
                    check(pid, 'back-link into closed FAQ opens it and focuses marker', ok, faq)
                else:
                    first = await pg.evaluate("document.querySelector('.gd-cited a')?.getAttribute('data-gd-jump')")
                    await pg.click(f'.gd-cited a[data-gd-jump="{first}"]'); await pg.wait_for_timeout(1000)
                    check(pid, 'back-link focuses its marker', await pg.evaluate(f"document.activeElement.id==='{first}'"), first)
            await pg.evaluate('scrollTo(0,0)')
            await pg.focus('.gd-anchor'); await pg.wait_for_timeout(250)
            vis = float(await pg.evaluate("getComputedStyle(document.querySelector('.gd-anchor')).opacity"))
            await pg.keyboard.press('Enter'); await pg.wait_for_timeout(250)
            clip = await pg.evaluate('navigator.clipboard.readText()')
            exp = await pg.evaluate("location.origin+location.pathname+'#'+document.querySelector('.gd-h2wrap').id")
            check(pid, 'copy-link visible on focus and copies canonical#section', vis > .9 and clip == exp, (vis, clip))
            await pg.evaluate("document.getElementById('sources') && (document.getElementById('sources').open=true)")
            for sel in ('.gd-toc a', 'a.gd-totop', '.gd-footer--v2 a') + (('.gd-cite', '.gd-secsrc a', '.gd-cited a', '#sources > summary') if await pg.evaluate("!!document.querySelector('.gd-cite')") else ()):
                await pg.focus(sel)
                check(pid, f'focus visible {sel}', await pg.evaluate(f"getComputedStyle(document.querySelector('{sel}')).outlineStyle") != 'none')
            await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.focus('a.gd-totop'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(1100)
            check(pid, 'Back to top: scrolls up, focus to header', await pg.evaluate("scrollY<5 && !!document.activeElement.closest('.gd-header')"))
        await ctx.close()

        # ---------- touch on every guide (390px) ----------
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, ignore_https_errors=True)
        pg = await ctx.new_page()
        for pid, url in PAGES:
            if pid not in GUIDES:
                continue
            await pg.goto(url, wait_until='networkidle')
            if pid != 'GD-17':
                await pg.tap('.gd-toc-m summary'); await pg.wait_for_timeout(100)
                check(pid, 'tap opens collapsed contents', await pg.evaluate("document.querySelector('.gd-toc-m').open"))
            else:
                check(pid, 'no duplicate collapsed contents (own jump list kept)', await pg.evaluate("!document.querySelector('.gd-toc-m')"))
            n = await pg.evaluate("document.querySelectorAll('.gd-cite').length")
            if n:
                cid = 'gd-c' + str(max(1, n // 2))
                await pg.evaluate(f"document.getElementById('{cid}').scrollIntoView({{block:'center'}})"); await pg.wait_for_timeout(150)
                await pg.tap('#' + cid); await pg.wait_for_timeout(150)
                box = await pg.evaluate("(()=>{const r=document.getElementById('gd-pop').getBoundingClientRect();return [Math.round(r.left),Math.round(r.right)]})()")
                check(pid, 'tap opens preview inside the screen', await pg.evaluate("!document.getElementById('gd-pop').hidden") and box[0] >= 0 and box[1] <= 390, box)
                if pid in SHOTS:
                    await pg.screenshot(path=f'{OUT}{pid}-touch-390.png')
                await pg.tap('.gd-pop__close'); await pg.wait_for_timeout(100)
                check(pid, 'tap close closes', await pg.evaluate("document.getElementById('gd-pop').hidden"))
            if n:
                await pg.evaluate("document.getElementById('sources').scrollIntoView({block:'center'})"); await pg.wait_for_timeout(100)
                await pg.tap('#sources > summary'); await pg.wait_for_timeout(120)
                check(pid, 'tap opens the sources list', await pg.evaluate("document.getElementById('sources').open"))
                first = await pg.evaluate("document.querySelector('.gd-sources li[id]').id")
                await pg.goto(url + '#' + first, wait_until='networkidle'); await pg.wait_for_timeout(300)
                ok = await pg.evaluate(f"(()=>{{const r=document.getElementById('{first}').getBoundingClientRect();return document.getElementById('sources').open&&r.top>=-2&&r.top<innerHeight}})()")
                check(pid, 'deep link #source opens the list at that source', ok, first)
            check(pid, 'no overflow with contents/preview used', not await pg.evaluate('document.documentElement.scrollWidth > innerWidth'))
        await ctx.close()

        # ---------- reduced motion ----------
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, reduced_motion='reduce', ignore_https_errors=True)
        pg = await ctx.new_page()
        for pid in ('GD-04', 'GD-10', 'GD-17'):
            await pg.goto(dict(PAGES)[pid], wait_until='networkidle')
            await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.click('a.gd-totop'); await pg.wait_for_timeout(60)
            check(pid, 'reduced motion: instant scroll', await pg.evaluate('scrollY') < 5)
        await ctx.close()
        await b.close()

    fails = [r for r in R if not r[2]]
    per = {}
    for pid, _, ok, _ in R:
        per.setdefault(pid, [0, 0]); per[pid][0] += ok; per[pid][1] += 1
    print('\n' + '  '.join(f'{k}:{v[0]}/{v[1]}' for k, v in per.items()))
    print(f'{len(R) - len(fails)}/{len(R)} checks passed')

asyncio.run(main())
