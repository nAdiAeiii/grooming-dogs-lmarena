import asyncio
from playwright.async_api import async_playwright
name,val=open('.authcookie',encoding='utf-8').read().strip().split('\t')
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(viewport={'width':390,'height':844},ignore_https_errors=True)
        await ctx.add_cookies([{'name':name,'value':val,'domain':'grooming-dogs.com','path':'/','secure':True}])
        pg=await ctx.new_page()
        await pg.goto('https://grooming-dogs.com/?page_id=42&preview=true&nocache=1',wait_until='networkidle')
        await pg.click('.gd-nav .hfe-nav-menu__toggle'); await pg.wait_for_timeout(600)
        await pg.screenshot(path='shots/menu-390.png')
        ctx2=await b.new_context(viewport={'width':1366,'height':900},ignore_https_errors=True)
        await ctx2.add_cookies([{'name':name,'value':val,'domain':'grooming-dogs.com','path':'/','secure':True}])
        pg2=await ctx2.new_page()
        await pg2.goto('https://grooming-dogs.com/?page_id=58&preview=true&nocache=1',wait_until='networkidle')
        f=pg2.locator('.wpforms-container').first; await f.scroll_into_view_if_needed()
        await pg2.locator('.wpforms-submit').hover(); await pg2.wait_for_timeout(300)
        await f.screenshot(path='shots/form-1366.png')
        await b.close()
asyncio.run(main())
