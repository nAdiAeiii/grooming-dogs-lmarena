"""Home redesign QA (anonymous): render, carousel, menus, network, keyboard, reduced motion. Screenshots to qa-home/."""
import asyncio, os
from playwright.async_api import async_playwright

URL = 'https://grooming-dogs.com/'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'qa-home') + os.sep
os.makedirs(OUT, exist_ok=True)
R = []


def check(n, ok, d=''):
    R.append(bool(ok)); print(('PASS ' if ok else 'FAIL ') + n + (f' | {d}' if d != '' else ''))


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for wd, ht in ((1366, 900), (820, 1100), (390, 844)):
            ctx = await b.new_context(viewport={'width': wd, 'height': ht}, has_touch=wd < 1000, ignore_https_errors=True)
            pg = await ctx.new_page(); errs, hosts = [], set()
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
            pg.on('request', lambda r: hosts.add(r.url.split('/')[2]))
            r = await pg.goto(URL, wait_until='networkidle'); await pg.wait_for_timeout(1500)
            check(f'{wd} 200', r.status == 200)
            check(f'{wd} no JS errors', not errs, errs[:2])
            check(f'{wd} own host only', hosts == {'grooming-dogs.com'}, sorted(hosts))
            check(f'{wd} no overflow', not await pg.evaluate('document.documentElement.scrollWidth > innerWidth'))
            check(f'{wd} no cookies', not await ctx.cookies())
            st = await pg.evaluate("""(()=>({mounted: !!document.querySelector('.gd-cc.is-mounted .circular-carousel'),
              cards: document.querySelectorAll('.circular-carousel__card').length, imgs: [...document.querySelectorAll('.circular-carousel img')].filter(i=>i.complete&&i.naturalWidth>0).length,
              h2: [...document.querySelectorAll('.elementor[data-elementor-type="wp-page"] h2')].map(h=>h.textContent.trim()),
              links: [...document.querySelectorAll('.gd-pcard,.gd-icard,.gd-tile,.gd-chips a')].map(a=>a.getAttribute('href')),
              startInMenu: [...document.querySelectorAll('.gd-nav a')].some(a=>a.textContent.trim()==='Start here'),
              h1: document.querySelectorAll('h1').length}))()""")
            check(f'{wd} carousel mounted with images', st['mounted'] and st['cards'] >= 4 and st['imgs'] >= 4, (st['cards'], st['imgs']))
            check(f'{wd} one H1, six H2s in order', st['h1'] == 1 and st['h2'] == ['Start here', "Grooming for your dog's situation", 'Grooming tasks', 'Using a professional groomer', 'How this guide works'], st['h2'])
            check(f'{wd} 17 home links present (3 path + 4 + 6 + 2 + 2 chips)', len(st['links']) == 17, len(st['links']))
            check(f'{wd} Start here not in menu', not st['startInMenu'])
            await pg.evaluate('scrollTo(0,0)')
            await pg.screenshot(path=f'{OUT}home-{wd}.png', full_page=True)
            if wd == 1366:
                await pg.hover('.gd-nav .hfe-nav-menu > li:nth-child(1)'); await pg.wait_for_timeout(400)
                bg = await pg.evaluate("getComputedStyle(document.querySelector('.gd-nav .sub-menu')).backgroundColor")
                fg = await pg.evaluate("getComputedStyle(document.querySelector('.gd-nav .sub-menu a')).color")
                check('desktop submenu dark with cream links', bg == 'rgb(40, 23, 15)' and fg == 'rgb(255, 252, 247)', (bg, fg))
                await pg.screenshot(path=f'{OUT}submenu-1366.png', clip={'x': 300, 'y': 0, 'width': 1066, 'height': 420})
                await pg.mouse.move(5, 700)
                # keyboard: carousel focusable, arrows move, Enter navigates to a situation page
                await pg.evaluate("document.querySelector('.circular-carousel').scrollIntoView({block:'center'})"); await pg.wait_for_timeout(300)
                await pg.focus('.circular-carousel')
                await pg.keyboard.press('ArrowRight'); await pg.wait_for_timeout(700)
                async with pg.expect_navigation(timeout=8000):
                    await pg.keyboard.press('Enter')
                check('carousel: keyboard Enter opens a situation page', any(s in pg.url for s in ('puppy-grooming', 'senior-dog-grooming', 'grooming-an-anxious-dog', 'dog-grooming-problems')), pg.url)
                await pg.go_back(wait_until='networkidle'); await pg.wait_for_timeout(800)
                await pg.click('.gd-cc__pause'); await pg.wait_for_timeout(100)
                check('pause button toggles (aria-pressed)', await pg.evaluate("document.querySelector('.gd-cc__pause').getAttribute('aria-pressed')") == 'true')
                await pg.goto(URL, wait_until='networkidle')
                await pg.focus('.elementor[data-elementor-type="wp-page"] > .e-con:first-child a[href="/dog-coat-types/"]')
                await pg.keyboard.press('Tab'); await pg.wait_for_timeout(250)
                ok = await pg.evaluate("document.activeElement.classList.contains('gd-pcard') && getComputedStyle(document.activeElement).outlineStyle !== 'none'")
                check('keyboard Tab reaches path card with visible focus', ok, await pg.evaluate('document.activeElement.className'))
            else:
                await pg.tap('.gd-nav .hfe-nav-menu__toggle'); await pg.wait_for_timeout(500)
                bg = await pg.evaluate("getComputedStyle(document.querySelector('.gd-nav nav.hfe-dropdown')).backgroundColor")
                check(f'{wd} mobile panel dark', bg == 'rgb(40, 23, 15)', bg)
                await pg.screenshot(path=f'{OUT}menu-{wd}.png')
            await ctx.close()
        # reduced motion: no autoplay drift, no icon animation class
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, reduced_motion='reduce', ignore_https_errors=True)
        pg = await ctx.new_page(); await pg.goto(URL, wait_until='networkidle'); await pg.wait_for_timeout(1500)
        t1 = await pg.evaluate("getComputedStyle(document.querySelector('.circular-carousel__ring')||document.body).transform")
        await pg.wait_for_timeout(1500)
        t2 = await pg.evaluate("getComputedStyle(document.querySelector('.circular-carousel__ring')||document.body).transform")
        check('reduced motion: carousel does not drift; no icon animations', t1 == t2 and not await pg.evaluate("document.body.classList.contains('gd-anim')"), (t1[:40], t2[:40]))
        await ctx.close()
        # other pages: footer/menu intact, no home assets
        ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
        pg = await ctx.new_page(); a = []
        pg.on('request', lambda r: a.append(r.url) if ('/gd-home/' in r.url or 'react' in r.url) else None)
        await pg.goto('https://grooming-dogs.com/bathing-your-dog/', wait_until='networkidle')
        check('guide page: no home/React assets', not a, a[:2])
        await ctx.close(); await b.close()
    print(f'{sum(R)}/{len(R)} checks passed')

asyncio.run(main())
