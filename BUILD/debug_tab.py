import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': 1366, 'height': 900})
        for url in ('https://grooming-dogs.com/brushing-your-dog/', 'https://grooming-dogs.com/dog-grooming-tools/'):
            await pg.goto(url, wait_until='networkidle')
            info = await pg.evaluate("""(()=>{const a=document.querySelector('#gd-c1');
              return {ctx:a.closest('p,li,td,th,div').tagName+'.'+a.closest('p,li,td,th,div').className, parent:a.parentNode.parentNode.tagName,
                      sec:a.closest('.e-con.gd-box--short')?'in short-answer band':'', text:a.parentNode.parentNode.textContent.slice(0,80)}})()""")
            print(url.split('/')[3], info)
            await pg.focus('#gd-c1'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(150)
            print('  pop parent:', await pg.evaluate("document.getElementById('gd-pop').parentNode.tagName"),
                  '| focusables in pop:', await pg.evaluate("[...document.querySelectorAll('#gd-pop a, #gd-pop button')].map(e=>e.tagName+':'+e.textContent.slice(0,20))"))
            await pg.keyboard.press('Tab'); await pg.wait_for_timeout(100)
            print('  after Tab:', await pg.evaluate("document.activeElement.tagName+' '+(document.activeElement.id||'')+' '+document.activeElement.textContent.slice(0,40)"),
                  '| pop hidden:', await pg.evaluate("document.getElementById('gd-pop').hidden"))
        await b.close()

asyncio.run(main())
