Grooming Dogs favicon and logo
==============================
Mark: a comb, honey (#E3A33B) on espresso (#3A2318). Generated with RealFaviconGenerator's open-source
engine (@realfavicongenerator/generate-favicon 0.9.0) and checked with its checker
(@realfavicongenerator/check-favicon 0.9.3): 24 of 24 checks pass. The live site currently fails 7.

Files for the site root (https://grooming-dogs.com/...):
  favicon.ico                      16/32/48 px (fixes the current /favicon.ico 404)
  favicon.svg                      comb drawn on a 16-pixel grid, stays crisp in tabs
  favicon-96x96.png
  apple-touch-icon.png             180x180, full-bleed (iOS adds its own rounding)
  web-app-manifest-192x192.png     maskable, comb inside the 80% safe zone
  web-app-manifest-512x512.png     maskable
  site.webmanifest

Markup for <head> (markups.html):
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Grooming Dogs" />
  <link rel="manifest" href="/site.webmanifest" />

WordPress: remove the current Site Icon (Appearance > Customize > Site Identity) so WordPress stops printing
its own icon tags, upload the files to the site root, and add the markup to <head> (for example with the
existing gd-site-rules.php mu-plugin on wp_head). This is a production change for the owner to approve.

Logo (../logo/): logo-light.svg (on light backgrounds), logo-dark.svg (on the espresso header),
mark.svg, wordmark-light.svg. The wordmark is Literata SemiBold (SIL Open Font License), converted to
outlines with HarfBuzz kerning, so it needs no web font.
