"""Screenshot draft pages as admin. Usage: python shot.py <page_id> [<page_id>...] [--w=1366,768,390]"""
import sys, os, asyncio
from playwright.async_api import async_playwright
BASE = os.path.dirname(os.path.abspath(__file__))
name, val = open(os.path.join(BASE, '.authcookie'), encoding='utf-8').read().strip().split('\t')
ids = [a for a in sys.argv[1:] if not a.startswith('--')]
widths = [int(x) for x in (next((a[4:] for a in sys.argv if a.startswith('--w=')), '1366,390')).split(',')]
os.makedirs(os.path.join(BASE, 'shots'), exist_ok=True)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for wd in widths:
            ctx = await b.new_context(viewport={'width': wd, 'height': 900}, ignore_https_errors=True)
            await ctx.add_cookies([{'name': name, 'value': val, 'domain': 'grooming-dogs.com', 'path': '/', 'secure': True, 'httpOnly': True}])
            pg = await ctx.new_page()
            for i in ids:
                url = f'https://grooming-dogs.com/?page_id={i}&preview=true&nocache=1'
                r = await pg.goto(url, wait_until='networkidle', timeout=60000)
                out = os.path.join(BASE, 'shots', f'{i}-{wd}.png')
                await pg.screenshot(path=out, full_page=True)
                ov = await pg.evaluate('document.documentElement.scrollWidth > window.innerWidth')
                h = await pg.evaluate('document.documentElement.scrollHeight')
                print(i, wd, r.status, 'height', h, 'h-overflow', ov, out)
            await ctx.close()
        await b.close()
asyncio.run(main())
