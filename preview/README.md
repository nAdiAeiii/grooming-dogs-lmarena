# Static site preview

Renders the 22 launch pages from `BUILD/out/*.json` (the Elementor data) into static HTML, using the
site's own `BUILD/site.css`, `BUILD/gd-guide/` and `BUILD/gd-home/` assets. No WordPress, no connection
to grooming-dogs.com or Hostinger.

```sh
python3 preview/build_preview.py   # writes preview/dist/ (git-ignored)
python3 -m http.server -d preview/dist 8765   # then open http://localhost:8765/hub.html
```

Needs Python 3 and the PHP CLI (the footer is read from `BUILD/footer_v2.php`).

- **Live design / Proposed:** every page has a switch. `proposed.css` and `proposed.js` hold the
  proposed changes; each rule names the owner decision (DS-OD-xx) it serves and the file it would
  move into when approved.
- **Not exact:** images are labelled placeholders (the photos live on the live site); the contact
  form is a mock-up that sends nothing; header, breadcrumbs and accordion are stand-ins for HFE,
  Rank Math and Elementor's own markup.
