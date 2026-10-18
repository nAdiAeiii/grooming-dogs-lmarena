import asyncio,sys
from playwright.async_api import async_playwright
name,val=open('.authcookie').read().strip().split('\t')
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); ctx=await b.new_context(viewport={'width':390,'height':900},ignore_https_errors=True)
        await ctx.add_cookies([{'name':name,'value':val,'domain':'grooming-dogs.com','path':'/','secure':True}])
        pg=await ctx.new_page()
        for pid in sys.argv[1:]:
            await pg.goto(f'https://grooming-dogs.com/?page_id={pid}&preview=true',wait_until='networkidle')
            r=await pg.evaluate("""()=>{const out=[];document.querySelectorAll('body *').forEach(e=>{const b=e.getBoundingClientRect(); if(b.right>window.innerWidth+1 && b.width>0){out.push([e.tagName, (e.className||'').toString().slice(0,60), Math.round(b.left), Math.round(b.right)])}}); return out.slice(0,12)}""")
            print(pid, r)
        await b.close()
asyncio.run(main())
