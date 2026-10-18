"""Local test: CircularCarousel ring density with the 4 situation items repeated n times (site's own React + bundle)."""
import asyncio, json, os, pathlib, html as H
from playwright.async_api import async_playwright

D = os.path.dirname(os.path.abspath(__file__))
U = 'https://grooming-dogs.com/wp-content/uploads/2026/10/'
base = [
    {'src': U + 'pexels-photo-32378664-1024x684.jpeg', 'alt': '', 'title': 'Grooming a puppy', 'href': '/puppy-grooming/'},
    {'src': U + 'pexels-photo-5255270-1024x683.jpeg', 'alt': '', 'title': 'Grooming an older dog', 'href': '/senior-dog-grooming/'},
    {'src': U + 'pexels-photo-7114115-1024x683.jpeg', 'alt': '', 'title': 'A dog who hates grooming', 'href': '/grooming-an-anxious-dog/'},
    {'src': U + 'situation-problems-illustration.png', 'alt': '', 'title': 'Something wrong after grooming?', 'href': '/dog-grooming-problems/'},
]
css = open(os.path.join(D, 'gd-home', 'dist', 'gd-carousel.css'), encoding='utf-8').read() + open(os.path.join(D, 'gd-home', 'gd-home.css'), encoding='utf-8').read()
js = open(os.path.join(D, 'gd-home', 'dist', 'gd-carousel.js'), encoding='utf-8').read()


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for n in (2, 3):
            items = base * n
            page = ('<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;background:#FFFCF7;font-family:sans-serif}' + css + '</style></head>'
                    '<body class="home"><div style="max-width:1200px;margin:40px auto"><div class="gd-cc" data-gd-carousel="' + H.escape(json.dumps(items), quote=True) + '"></div></div>'
                    '<script src="https://grooming-dogs.com/wp-includes/js/dist/vendor/react.min.js"></script>'
                    '<script src="https://grooming-dogs.com/wp-includes/js/dist/vendor/react-dom.min.js"></script>'
                    '<script>' + js + '</script></body></html>')
            f = os.path.join(D, 'qa-home', f'cc-test-{n}.html')
            open(f, 'w', encoding='utf-8').write(page)
            pg = await b.new_page(viewport={'width': 1366, 'height': 760})
            await pg.goto(pathlib.Path(f).as_uri(), wait_until='networkidle')
            await pg.wait_for_timeout(5000)
            await pg.screenshot(path=os.path.join(D, 'qa-home', f'cc-test-{n}.png'))
            print(n, 'x 4 =', await pg.evaluate("document.querySelectorAll('.circular-carousel__card').length"), 'cards')
        await b.close()

asyncio.run(main())
