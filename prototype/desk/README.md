# The Practical Grooming Desk (concept prototype)

An independent concept for grooming-dogs.com: find a grooming answer for your dog's coat in two taps,
compare tools and methods, and follow each guide to the next one. Static HTML, CSS and JavaScript;
no build step. All guide text is **sample content** written for this prototype, not reviewed by a
groomer or vet. Nothing here touches the live site.

## Run it

```sh
python3 -m http.server 8770 -d prototype/desk
```

Then open <http://localhost:8770/>. (Any static server works; opening `index.html` from disk also works.)

## What's in it

| File | What it holds |
| --- | --- |
| `index.html` | Page structure: answer finder, tool board, two-ways comparison, guide routes, limits, questions |
| `styles.css` | The visual system (tokens at the top) |
| `data.js` | All sample content: coats, tasks, 30 coat-by-task answers, 13 tools, 3 method comparisons, 12 guides, questions |
| `art.js` | Coat swatches and tool silhouettes, drawn in code |
| `app.js` | Shared state, search, board, comparison, guide routing (`#g-<guide>`) |
| `DECISIONS.md` | The three directions explored, the scoring, and why this one |
| `PRODUCT.md` | Product record used by the impeccable skill |
| `make_preview.py` | Writes `dist/preview.html` for the isolated live preview |

## Checks used

- `node .claude/skills/design-taste-frontend/scripts/lint.mjs prototype/desk`
- `CHROME_PATH=<chromium> node .claude/skills/design-taste-frontend/scripts/inspect.mjs prototype/desk/index.html`
  (as root, point `CHROME_PATH` at a wrapper that adds `--no-sandbox`)
- `cd prototype/desk && ../../.claude/skills/impeccable/scripts/impeccable detect --json index.html`
