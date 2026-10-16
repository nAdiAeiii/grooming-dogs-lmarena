"""Skip-link QA on desktop / tablet / mobile (anonymous)."""
import asyncio, os
from playwright.async_api import async_playwright

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'qa-rollout') + os.sep
PAGES = ['https://grooming-dogs.com/', 'https://grooming-dogs.com/bathing-your-dog/', 'https://grooming-dogs.com/contact/']
ok_all = True


def check(n, ok, d=''):
    global ok_all
    ok_all &= bool(ok)
    print(('PASS ' if ok else 'FAIL ') + n + (' | ' + str(d) if d != '' else ''))


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for wd, ht, touch in ((1366, 900, False), (820, 1100, True), (390, 844, True)):
            ctx = await b.new_context(viewport={'width': wd, 'height': ht}, has_touch=touch, ignore_https_errors=True)
            pg = await ctx.new_page()
            for url in PAGES:
                await pg.goto(url, wait_until='networkidle')
                name = url.split('.com')[1] or '/'
                hidden = await pg.evaluate("(()=>{const r=document.querySelector('a.hfe-skip-link').getBoundingClientRect();return r.width<=1&&r.height<=1})()")
                check(f'{wd}px {name} skip link invisible without keyboard focus', hidden)
                await pg.keyboard.press('Tab')
                first = await pg.evaluate("document.activeElement.className")
                check(f'{wd}px {name} first Tab reaches the skip link', 'hfe-skip-link' in first, first)
                vis = await pg.evaluate("(()=>{const a=document.activeElement,r=a.getBoundingClientRect(),c=getComputedStyle(a);return {w:Math.round(r.width),h:Math.round(r.height),bg:c.backgroundColor,fg:c.color,outline:c.outlineStyle+' '+c.outlineColor}})()")
                check(f'{wd}px {name} visible on focus with kit colours', vis['w'] > 100 and vis['bg'] == 'rgb(58, 35, 24)' and vis['fg'] == 'rgb(255, 252, 247)', vis)
                if url.endswith('bathing-your-dog/'):
                    await pg.screenshot(path=f'{OUT}skip-{wd}.png', clip={'x': 0, 'y': 0, 'width': wd, 'height': 160})
                await pg.keyboard.press('Enter'); await pg.wait_for_timeout(200)
                inmain = await pg.evaluate("document.activeElement.id==='content' && location.hash==='#content'")
                check(f'{wd}px {name} Enter moves focus to main content', inmain, await pg.evaluate('document.activeElement.tagName+"#"+document.activeElement.id'))
                await pg.keyboard.press('Tab')
                nxt = await pg.evaluate("(()=>{const a=document.activeElement;return {inMain:!!a.closest('main#content'),inHeader:!!a.closest('header'),text:a.textContent.trim().slice(0,30)}})()")
                check(f'{wd}px {name} next Tab lands inside the content, not the header', nxt['inMain'] and not nxt['inHeader'], nxt['text'])
                outline = await pg.evaluate("getComputedStyle(document.getElementById('content')).outlineStyle")
                check(f'{wd}px {name} no outline around the whole content', outline == 'none', outline)
            await ctx.close()
        await b.close()
    print('ALL PASS' if ok_all else 'FAILURES')

asyncio.run(main())
