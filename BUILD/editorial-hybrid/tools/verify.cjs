// Browser checks for an installed Editorial Hybrid site (homepage, menu, search, a guide page).
// Usage: node verify.cjs <playwright-dir> <base-url> [guide-path]   e.g. node verify.cjs $(npm root -g) https://staging.example.com /bathing-your-dog/
// Read-only: it only loads pages. Screenshots go to ./verify-shots/.
const { chromium } = require(process.argv[2] + '/playwright');
const B = (process.argv[3] || 'http://127.0.0.1:8898').replace(/\/$/, ''); const GUIDE = process.argv[4] || '/bathing-your-dog/'; require('fs').mkdirSync('verify-shots', { recursive: true });
(async () => { const b = await chromium.launch(); const out = [];
 const ok = (c, m) => out.push((c ? 'PASS ' : 'FAIL ') + m);
 for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } }); const errs = []; const bad = [];
  const ign = t => /Unexpected token '<'/.test(t); p.on('pageerror', e => { if (!ign(e.message)) errs.push(e.message); });
  p.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });
  await p.goto(B + '/'); await p.waitForTimeout(1200);
  const html = await p.content();
  ok(!/OLD (HOME|HEADER|FOOTER|GD)/.test(html), tag + ' old content gone');
  ok(await p.$$eval('symbol[id^="ph-"]', x => x.length) > 20, tag + ' icon sprite kept (unfiltered HTML)');
  ok(await p.$$eval('symbol[id^="t-"]', x => x.length) > 20, tag + ' tool sprite kept');
  ok(await p.$eval('body', e => e.classList.contains('gd-front') && e.classList.contains('gd-site')), tag + ' body classes');
  ok(await p.$$eval('img', xs => xs.filter(i => i.complete && !i.naturalWidth && i.loading !== 'lazy').length) === 0, tag + ' eager images load');
  ok(!(await p.$$eval('a[href*="grooming-dogs.com"], a[target="_blank"]', x => x.length)), tag + ' no absolute or new-tab links');
  ok(await p.$$eval('#coat-seg [role=tab], #coat-seg button', x => x.length) >= 5, tag + ' coat tabs rendered');
  ok(await p.$$eval('#plate-rows .tool, #plate-rows button', x => x.length) > 10, tag + ' plate tools rendered');
  await p.fill('#ask-input', 'nail'); await p.waitForTimeout(300);
  ok(await p.$$eval('.r-item', x => x.length) > 0, tag + ' search returns results');
  const firstHref = await p.$eval('.r-item', e => e.getAttribute('href') || e.dataset.href || '');
  await p.keyboard.press('Escape');
  if (tag === 'd') {
   await p.hover('.nav-btn >> nth=1'); await p.waitForTimeout(400);
   ok(await p.isVisible('#np-1'), 'd mega menu opens on hover');
   ok(await p.$eval('#np-1 .np-feat img', i => i.naturalWidth > 0), 'd menu photo loads from media library');
   await p.mouse.move(700, 880); await p.waitForTimeout(400);
   await p.evaluate(() => scrollTo(0, 3000)); await p.waitForTimeout(300);
   ok(await p.$eval('#masthead', e => Math.round(e.getBoundingClientRect().top)) === 0, 'd header sticks while scrolling');
   await p.screenshot({ path: 'verify-shots/wp-home-d.png' }); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(500); await p.screenshot({ path: 'verify-shots/wp-home-top-d.png' });
  } else {
   await p.screenshot({ path: 'verify-shots/wp-home-m.png' });
  }
  ok(errs.length === 0, tag + ' no JS errors ' + errs.join(' | '));
  ok(bad.length === 0, tag + ' no failed requests ' + bad.join(' | '));
  const sw = await p.evaluate(() => document.documentElement.scrollWidth); ok(sw <= w, tag + ' no horizontal scroll ' + sw);
  // guide page: shared header/footer only
  const errs2 = []; p.removeAllListeners('pageerror'); p.on('pageerror', e => { if (!/Unexpected token '<'/.test(e.message)) errs2.push(e.message); });
  await p.goto(B + GUIDE); await p.waitForTimeout(800);
  ok(await p.$('#mast') && await p.$('footer .foot-grid'), tag + ' guide page has new header and footer');
  ok(!(await p.$('link[href*="home.css"]')) && !(await p.$('script[src*="app.js"]')), tag + ' guide page loads no homepage assets');
  ok(await p.$eval('.guide p', e => getComputedStyle(e).fontFamily).then(f => !/Source Sans/.test(f)), tag + ' guide body keeps theme font (no style leak)');
  if (tag === 'd') { await p.click('#mast-search'); await p.waitForURL(/#search/); await p.waitForTimeout(800);
   ok(await p.evaluate(() => document.activeElement && document.activeElement.id === 'ask-input'), 'd header search on a guide page jumps to home search'); }
  else { await p.click('#mast-menu'); await p.click('.nav-btn >> nth=0'); await p.waitForTimeout(300); ok(await p.isVisible('#np-0'), 'm phone menu works on guide page'); await p.screenshot({ path: 'verify-shots/wp-guide-m.png' }); }
  ok(errs2.length === 0, tag + ' guide page no JS errors ' + errs2.join(' | '));
  await p.close(); }
 await b.close(); console.log(out.join("\n")); if (out.some(l => l.startsWith("FAIL"))) process.exitCode = 1; })();
