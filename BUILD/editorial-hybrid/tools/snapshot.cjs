// Render the prototype in live mode (same-site links, no new tabs) and return the header and footer markup,
// so the menu and footer links ship as server-rendered HTML. Usage: node snapshot.cjs <playwright-dir> <url> <out.json>
const { chromium } = require(process.argv[2] + '/playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.addInitScript(() => { window.GD_LIVE = true; });
  const errors = [];
  p.on('pageerror', (e) => errors.push(e.message));
  await p.goto(process.argv[3]);
  await p.waitForTimeout(800);
  const out = await p.evaluate(() => {
    const mast = document.getElementById('mast').cloneNode(true);
    mast.querySelectorAll('.nav-ind').forEach((n) => n.remove());
    mast.classList.remove('menu-on', 'nav-open');
    const foot = document.querySelector('footer.foot').cloneNode(true);
    foot.querySelectorAll('.foot-band').forEach((n) => n.classList.remove('seen'));
    return { header: mast.outerHTML, footer: foot.outerHTML };
  });
  await b.close();
  if (errors.length) { console.error(errors); process.exit(1); }
  fs.writeFileSync(process.argv[4], JSON.stringify(out));
})();
