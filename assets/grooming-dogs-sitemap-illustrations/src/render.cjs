// Render the SVG to PNG at 2x. Usage: node render.cjs <playwright-dir> <in.svg> <out.png>
const { chromium } = require(process.argv[2] + '/playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2, ignoreHTTPSErrors: true });
  await p.setContent('<html><body style="margin:0">' + fs.readFileSync(process.argv[3], 'utf8') + '</body></html>');
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1500);
  console.log('Caveat loaded:', await p.evaluate(() => document.fonts.check('24px Caveat')));
  await p.locator('svg').first().screenshot({ path: process.argv[4] });
  await b.close();
})();
