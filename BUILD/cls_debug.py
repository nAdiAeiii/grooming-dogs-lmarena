"""Which elements cause layout shift? Compare with the guide script blocked."""
import asyncio
from playwright.async_api import async_playwright

INIT = """window.__shifts = []; new PerformanceObserver(l => { for (const e of l.getEntries()) { if (!e.hadRecentInput)
  window.__shifts.push({v: Math.round(e.value*1000)/1000, t: Math.round(e.startTime),
    src: (e.sources||[]).map(s => { const n = s.node; return n ? (n.nodeName + '.' + String(n.className||'').split(' ').slice(0,2).join('.') + (n.id?'#'+n.id:'')) : '?'; }).slice(0,3)}); } })
  .observe({type: 'layout-shift', buffered: true});"""


async def run(b, url, block_js):
    ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
    await ctx.add_init_script(INIT)
    if block_js:
        await ctx.route('**/gd-guide/gd-guide.js*', lambda r: r.abort())
    pg = await ctx.new_page()
    cdp = await ctx.new_cdp_session(pg); await cdp.send('Network.enable'); await cdp.send('Network.setCacheDisabled', {'cacheDisabled': True})
    await pg.goto(url, wait_until='networkidle'); await pg.wait_for_timeout(800)
    sh = await pg.evaluate('window.__shifts')
    await ctx.close()
    return round(sum(s['v'] for s in sh), 3), sorted(sh, key=lambda s: -s['v'])[:4]


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for url, block in (('https://grooming-dogs.com/dog-grooming-tools/', False), ('https://grooming-dogs.com/dog-grooming-tools/', True),
                           ('https://grooming-dogs.com/', False), ('https://grooming-dogs.com/bathing-your-dog/', False)):
            for i in range(2):
                total, top = await run(b, url, block)
                print(url.split('.com')[1] or '/', 'guide JS BLOCKED' if block else '', 'CLS', total, top)
        await b.close()

asyncio.run(main())
