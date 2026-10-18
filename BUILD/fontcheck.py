import asyncio, json, os
from playwright.async_api import async_playwright
name, val = open('.authcookie', encoding='utf-8').read().strip().split('\t')
JS = """() => {
 const q=(s)=>document.querySelector(s); const cs=(e)=>e?getComputedStyle(e):null;
 const pick=(label,sel,props)=>{const e=q(sel); if(!e) return [label,'(none)']; const c=cs(e); return [label, props.map(p=>c[p]).join(' | ')];};
 const loaded=[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family.replace(/"/g,'')+' '+f.weight+(f.style!=='normal'?' '+f.style:''));
 return {
  rows:[pick('h1','h1',['fontFamily','color','fontSize']),
        pick('h2','.elementor-widget-container h2, h2',['fontFamily','color']),
        pick('body p','.elementor-widget-text-editor p',['fontFamily','color','fontSize']),
        pick('text link','.elementor-widget-text-editor p a',['color','textDecorationLine']),
        pick('nav link','.gd-nav a.hfe-menu-item',['fontFamily','color']),
        pick('wordmark','.gd-header .gd-wordmark p, .gd-header .hfe-site-title',['fontFamily','color']),
        pick('button','.elementor-button, .wpforms-submit',['fontFamily','backgroundColor','color','borderRadius']),
        pick('breadcrumb','.rank-math-breadcrumb',['fontFamily','color']),
        pick('body bg','body',['backgroundColor']),
        pick('header','.gd-header',['backgroundColor','boxShadow']),
        pick('footer','.gd-footer',['backgroundColor']),
        pick('first section','.elementor[data-elementor-type="wp-page"] > .e-con:first-child',['backgroundColor','backgroundImage'])],
  loaded:[...new Set(loaded)].sort()};
}"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width':1366,'height':900}, ignore_https_errors=True)
        await ctx.add_cookies([{'name':name,'value':val,'domain':'grooming-dogs.com','path':'/','secure':True}])
        pg = await ctx.new_page(); reqs=[]
        pg.on('request', lambda r: reqs.append(r.url))
        for pid in [42, 38, 58]:
            reqs.clear()
            await pg.goto(f'https://grooming-dogs.com/?page_id={pid}&preview=true&nocache=1', wait_until='networkidle')
            await pg.evaluate('document.fonts.ready')
            r = await pg.evaluate(JS)
            print(f'== page {pid}')
            for k,v in r['rows']: print(f'  {k:14} {v}')
            print('  fonts loaded:', ', '.join(r['loaded']))
            ext = sorted({u.split('/')[2] for u in reqs if 'grooming-dogs.com' not in u.split('/')[2]})
            fnt = sorted({u.split('/uploads/')[1][:70] for u in reqs if '/google-fonts/' in u})
            print('  external hosts:', ext or 'none'); print('  font files:', fnt)
        await b.close()
asyncio.run(main())
