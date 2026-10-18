"""Browser QA for the GD-04 guide pilot (anonymous visitor). Writes screenshots to qa-pilot/."""
import asyncio, os
from playwright.async_api import async_playwright

URL = 'https://grooming-dogs.com/bathing-your-dog/'
CTRL = 'https://grooming-dogs.com/brushing-your-dog/'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'qa-pilot') + os.sep
R = []


def check(name, ok, detail=''):
    R.append((name, bool(ok), detail))
    print(('PASS ' if ok else 'FAIL ') + name + (' | ' + str(detail) if detail else ''))


CONTRAST = r"""(sel) => {
  const L = c => { const m = c.match(/[\d.]+/g).map(Number); const [r,g,b] = m.slice(0,3).map(v => { v/=255; return v<=.03928? v/12.92 : Math.pow((v+.055)/1.055,2.4); }); return [.2126*r+.7152*g+.0722*b, m[3]===undefined?1:m[3]]; };
  const e = document.querySelector(sel); if (!e) return null;
  let bgEl = e, bg = 'rgba(0, 0, 0, 0)';
  while (bgEl) { bg = getComputedStyle(bgEl).backgroundColor; if (!/rgba\(0, 0, 0, 0\)|transparent/.test(bg)) break; bgEl = bgEl.parentElement; }
  if (!bgEl) bg = 'rgb(255, 252, 247)';
  const cs = getComputedStyle(e); let [fl, fa] = L(cs.color); const [bl] = L(bg);
  const op = parseFloat(cs.opacity) * fa;
  if (op < 1) { fl = fl * op + bl * (1 - op); }
  const hi = Math.max(fl, bl), lo = Math.min(fl, bl); return Math.round(((hi + .05) / (lo + .05)) * 100) / 100;
}"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()

        # ---- A. three widths: render, overflow, console, requests, cookies ----
        for wd, ht in ((1366, 900), (820, 1100), (390, 844)):
            ctx = await b.new_context(viewport={'width': wd, 'height': ht}, ignore_https_errors=True)
            pg = await ctx.new_page(); errs, hosts, assets = [], set(), []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
            pg.on('request', lambda r: (hosts.add(r.url.split('/')[2]), assets.append(r.url) if '/gd-guide/' in r.url else None))
            r = await pg.goto(URL, wait_until='networkidle')
            check(f'{wd}px loads (200)', r.status == 200, r.status)
            check(f'{wd}px no horizontal overflow', not await pg.evaluate('document.documentElement.scrollWidth > innerWidth'))
            check(f'{wd}px no JS/console errors', not errs, errs[:3])
            check(f'{wd}px only own host requested', hosts == {'grooming-dogs.com'}, sorted(hosts))
            check(f'{wd}px pilot CSS+JS loaded', len([a for a in assets if a.split('?')[0].endswith(('.css', '.js'))]) == 2, len(assets))
            check(f'{wd}px no cookies', not await ctx.cookies(), [c['name'] for c in await ctx.cookies()])
            toc_d = await pg.evaluate("getComputedStyle(document.querySelector('.elementor-42 > .gd-toc')).display")
            toc_m = await pg.evaluate("getComputedStyle(document.querySelector('.gd-toc-m')).display")
            check(f'{wd}px contents: desktop column on wide, collapsed list otherwise',
                  (toc_d != 'none' and toc_m == 'none') if wd >= 1100 else (toc_d == 'none' and toc_m != 'none'), (toc_d, toc_m))
            await pg.screenshot(path=f'{OUT}top-{wd}.png')
            await pg.evaluate("document.getElementById('rinsing-thoroughly').scrollIntoView(); scrollBy(0,-80)")
            await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{OUT}mid-{wd}.png')
            await pg.evaluate("document.getElementById('sources').scrollIntoView(); scrollBy(0,-60)")
            await pg.wait_for_timeout(200)
            await pg.screenshot(path=f'{OUT}sources-{wd}.png')
            await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.wait_for_timeout(200)
            await pg.screenshot(path=f'{OUT}footer-{wd}.png')
            if wd == 1366:
                await pg.evaluate("document.getElementById('rinsing-thoroughly').scrollIntoView()")
                await pg.wait_for_timeout(300)
                cur = await pg.evaluate("document.querySelector('.gd-toc a[aria-current]')?.getAttribute('data-id')")
                check('contents marks the section being read', cur == 'rinsing-thoroughly', cur)
                ri = await pg.evaluate("(document.querySelector('.gd-readinfo')?.textContent||'').split(String.fromCharCode(160)).join(' ')")
                check('reading info in byline', ri and 'min read' in ri and '4 sources' in ri, ri)
                for sel, name in (('.gd-secsrc', 'section source line'), ('.gd-cited', 'cited-in line'), ('.gd-toc a', 'contents link'),
                                  ('.gd-readinfo', 'reading info'), ('.gd-footer--v2 .gd-flabel', 'footer heading'),
                                  ('.gd-footer--v2 .gd-fsmall', 'footer small text'), ('.gd-footer--v2 a', 'footer link'),
                                  ('.gd-sources li', 'source text')):
                    c = await pg.evaluate(CONTRAST, sel)
                    check(f'contrast {name} >= 4.5', c and c >= 4.5, c)
            await ctx.close()

        # ---- B. keyboard ----
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        await ctx.grant_permissions(['clipboard-read', 'clipboard-write'], origin='https://grooming-dogs.com')
        pg = await ctx.new_page(); await pg.goto(URL, wait_until='networkidle')
        first = '#gd-c1'
        await pg.focus(first)
        oc = await pg.evaluate("getComputedStyle(document.querySelector('#gd-c1')).outlineStyle")
        check('focus visible on source marker', oc != 'none', oc)
        await pg.keyboard.press('Enter'); await pg.wait_for_timeout(150)
        check('Enter opens source preview', await pg.evaluate("!document.getElementById('gd-pop').hidden && document.querySelector('#gd-c1').getAttribute('aria-expanded')==='true'"))
        txt = await pg.evaluate("document.querySelector('.gd-pop__text').textContent.trim()")
        src = await pg.evaluate("(()=>{const li=document.getElementById(document.querySelector('#gd-c1').getAttribute('href').slice(1)).cloneNode(true);li.querySelectorAll('.gd-cited').forEach(n=>n.remove());return li.textContent.trim()})()")
        check('preview shows the source text exactly as published', txt == src, txt[:60])
        await pg.keyboard.press('Tab'); await pg.wait_for_timeout(100)
        check('Tab moves into the preview', await pg.evaluate("document.getElementById('gd-pop').contains(document.activeElement)"),
              await pg.evaluate('document.activeElement.textContent.slice(0,40)'))
        await pg.keyboard.press('Escape'); await pg.wait_for_timeout(100)
        check('Escape closes and returns focus to marker', await pg.evaluate("document.getElementById('gd-pop').hidden && document.activeElement.id==='gd-c1'"))
        await pg.keyboard.press(' '); await pg.wait_for_timeout(100)
        check('Space opens the preview', await pg.evaluate("!document.getElementById('gd-pop').hidden"))
        await pg.mouse.click(5, 450); await pg.wait_for_timeout(100)
        check('click outside closes', await pg.evaluate("document.getElementById('gd-pop').hidden"))
        # copy link
        await pg.focus('.gd-anchor'); await pg.wait_for_timeout(250)
        op = await pg.evaluate("getComputedStyle(document.querySelector('.gd-anchor')).opacity")
        check('section-link button visible on keyboard focus', float(op) > .9, op)
        await pg.keyboard.press('Enter'); await pg.wait_for_timeout(300)
        clip = await pg.evaluate('navigator.clipboard.readText()')
        check('copy link puts canonical URL + #section on clipboard', clip == 'https://grooming-dogs.com/bathing-your-dog/#before-the-bath', clip)
        check('copy confirmation announced (role=status)', 'copied' in (await pg.evaluate("document.querySelector('.gd-status').textContent")))
        n_anchor = await pg.evaluate("document.querySelectorAll('.gd-anchor').length")
        n_h2 = await pg.evaluate("document.querySelectorAll('.elementor-42 h2').length")
        check('section links only on H2 sections', n_anchor == n_h2, f'{n_anchor} buttons / {n_h2} H2')
        h2name = await pg.evaluate("document.querySelector('#before-the-bath h2').textContent.trim()")
        check('H2 text unchanged (button outside heading)', h2name == 'Before the bath', h2name)
        # back-links
        links = await pg.evaluate("[...document.querySelectorAll('.gd-cited a')].map(a=>a.getAttribute('href'))")
        ok = await pg.evaluate("[...document.querySelectorAll('.gd-cited a, .gd-secsrc a, .gd-toc a')].every(a=>document.getElementById(a.getAttribute('href').slice(1)))")
        check('all back-links / section-source / contents links resolve', ok and links, f'{len(links)} back-links')
        faq = await pg.evaluate("[...document.querySelectorAll('.gd-cited a')].find(a=>a.textContent==='Common questions')?.getAttribute('data-gd-jump')")
        await pg.click(f'.gd-cited a[data-gd-jump="{faq}"]'); await pg.wait_for_timeout(1200)
        vis = await pg.evaluate(f"(()=>{{const r=document.getElementById('{faq}').getBoundingClientRect();return r.top>0&&r.bottom<innerHeight&&r.height>0}})()")
        check('back-link into a closed FAQ answer opens it and shows the marker', vis and await pg.evaluate(f"document.activeElement.id==='{faq}'"), faq)
        nsec = await pg.evaluate("document.querySelectorAll('.gd-secsrc').length")
        check('section source lines present', nsec >= 5, nsec)
        # back to top
        await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.focus('a.gd-totop'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(1200)
        check('Back to top scrolls up and moves focus to the header', await pg.evaluate("scrollY < 5 && !!document.activeElement.closest('.gd-header')"),
              await pg.evaluate('scrollY'))
        for sel in ('.gd-toc a', '.gd-footer--v2 a', 'a.gd-totop', '.gd-secsrc a', '.gd-cited a'):
            await pg.focus(sel)
            o = await pg.evaluate(f"getComputedStyle(document.querySelector('{sel}')).outlineStyle")
            check(f'focus visible: {sel}', o != 'none', o)
        await ctx.close()

        # ---- C. touch ----
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, ignore_https_errors=True)
        pg = await ctx.new_page(); await pg.goto(URL, wait_until='networkidle')
        cid = 'gd-c10'
        await pg.evaluate("document.getElementById('gd-c10').scrollIntoView({block:'center'})"); await pg.wait_for_timeout(200)
        await pg.tap('#' + cid); await pg.wait_for_timeout(200)
        box = await pg.evaluate("(()=>{const r=document.getElementById('gd-pop').getBoundingClientRect();return [r.left,r.right,r.width]})()")
        check('tap opens preview inside the screen', await pg.evaluate("!document.getElementById('gd-pop').hidden") and box[0] >= 0 and box[1] <= 390, box)
        await pg.screenshot(path=f'{OUT}touch-pop-390.png')
        await pg.tap('.gd-pop__close'); await pg.wait_for_timeout(150)
        check('tap on close button closes', await pg.evaluate("document.getElementById('gd-pop').hidden"))
        await pg.tap('.gd-toc-m summary'); await pg.wait_for_timeout(150)
        check('tap opens collapsed contents', await pg.evaluate("document.querySelector('.gd-toc-m').open"))
        check('390px no overflow with preview/contents open', not await pg.evaluate('document.documentElement.scrollWidth > innerWidth'))
        await ctx.close()

        # ---- D. reduced motion ----
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, reduced_motion='reduce', ignore_https_errors=True)
        pg = await ctx.new_page(); await pg.goto(URL, wait_until='networkidle')
        await pg.evaluate('scrollTo(0, document.body.scrollHeight)'); await pg.click('a.gd-totop'); await pg.wait_for_timeout(60)
        check('reduced motion: back to top is instant', await pg.evaluate('scrollY') < 5, await pg.evaluate('scrollY'))
        await ctx.close()

        # ---- E. control page untouched ----
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        pg = await ctx.new_page(); assets = []
        pg.on('request', lambda r: assets.append(r.url) if '/gd-guide/' in r.url else None)
        await pg.goto(CTRL, wait_until='networkidle')
        check('GD-05 (control): no pilot assets, old footer, no pilot class',
              not assets and await pg.evaluate("!document.querySelector('.gd-footer--v2') && !!document.querySelector('.gd-footer') && !document.body.classList.contains('gd-guide-pilot')"))
        await ctx.close()
        await b.close()
    fails = [r for r in R if not r[1]]
    print(f'\n{len(R) - len(fails)}/{len(R)} checks passed')


asyncio.run(main())
