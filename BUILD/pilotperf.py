"""Performance comparison: pilot page (GD-04) vs control (GD-05). Anonymous, cache disabled, 3 runs each."""
import asyncio
from playwright.async_api import async_playwright

PAGES = {'GD-04': 'https://grooming-dogs.com/bathing-your-dog/', 'GD-10': 'https://grooming-dogs.com/dog-grooming-tools/', 'GD-17': 'https://grooming-dogs.com/dog-grooming-glossary/', 'GD-00 (no guide assets)': 'https://grooming-dogs.com/'}
INIT = """window.__cls = 0; new PerformanceObserver(l => { for (const e of l.getEntries()) { if (!e.hadRecentInput) window.__cls += e.value; } })
  .observe({type: 'layout-shift', buffered: true});"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for name, url in PAGES.items():
            runs = []
            for _ in range(3):
                ctx = await b.new_context(viewport={'width': 1366, 'height': 900}, ignore_https_errors=True)
                await ctx.add_init_script(INIT)
                pg = await ctx.new_page()
                cdp = await ctx.new_cdp_session(pg)
                await cdp.send('Network.enable'); await cdp.send('Network.setCacheDisabled', {'cacheDisabled': True})
                sizes = {}
                cdp.on('Network.loadingFinished', lambda e: sizes.__setitem__(e['requestId'], e['encodedDataLength']))
                await pg.goto(url, wait_until='networkidle'); await pg.wait_for_timeout(500)
                m = await pg.evaluate("""() => { const n = performance.getEntriesByType('navigation')[0];
                    const r = performance.getEntriesByType('resource');
                    const g = r.filter(x => x.name.includes('/gd-guide/')).map(x => [x.name.split('/').pop().split('?')[0], x.transferSize, x.decodedBodySize]);
                    return {dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), cls: Math.round(window.__cls * 1000) / 1000, requests: r.length + 1, gd: g}; }""")
                m['kb'] = round(sum(sizes.values()) / 1024)
                runs.append(m); await ctx.close()
            med = lambda k: sorted(r[k] for r in runs)[1]
            print(f"{name}: requests={runs[0]['requests']} transferred≈{med('kb')} KB DOMContentLoaded≈{med('dcl')} ms load≈{med('load')} ms CLS={max(r['cls'] for r in runs)} pilot files={runs[0]['gd']}")
        await b.close()

asyncio.run(main())
