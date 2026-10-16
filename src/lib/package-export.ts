import { CLUSTERS } from "@/content/site";
import {
  PACKAGE_SECTIONS,
  PAGE_ARCHITECTURE,
  PAGE_STATS,
  legacyRows,
  derivedBlocks,
  TOTALS,
  AUDIT,
} from "@/content/project-package";

const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ESC[c]);
}

/** Inline markup: **bold** and [label](/href/) — internal links stay relative. */
function inline(s: string): string {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function blockHtml(b: import("@/content/types").Block): string {
  switch (b.kind) {
    case "h2":
      return `<h2>${esc(b.text)}</h2>`;
    case "h3":
      return `<h3>${esc(b.text)}</h3>`;
    case "p":
      return `<p>${inline(b.text)}</p>`;
    case "ul":
      return `<ul>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
    case "ol":
      return `<ol>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ol>`;
    case "steps":
      return `<ol class="steps">${b.items
        .map((s) => `<li><strong>${esc(s.title)}</strong> — ${inline(s.text)}</li>`)
        .join("")}</ol>`;
    case "callout":
      return `<aside class="callout ${b.tone}"><p class="callout-label">${esc(
        b.tone === "vet"
          ? "See a vet"
          : b.tone === "safety"
            ? "Stop and reassess"
            : b.tone === "tip"
              ? "Practical tip"
              : "Where this comes from",
      )}</p><p class="callout-title">${esc(b.title)}</p><p>${inline(b.text)}</p></aside>`;
    case "table": {
      const head = b.head.map((h) => `<th>${esc(h)}</th>`).join("");
      const rows = b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
        .join("");
      return `<figure><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>${
        b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""
      }</figure>`;
    }
    case "quote":
      return `<blockquote><p>${inline(b.text)}</p><footer>${esc(b.source)}</footer></blockquote>`;
    default:
      return "";
  }
}

const CSS = `
:root{--ink:#0d3a4f;--ink600:#2f6579;--mist:#f1f6f8;--sand:#fff9e6;--amber:#fcb900;--tang:#ff6900}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:#243b46;font:16px/1.7 "Proza Libre",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif}
.wrap{max-width:920px;margin:0 auto;padding:48px 24px 96px}
h1{font-family:Comfortaa,ui-rounded,"Trebuchet MS",sans-serif;font-size:2.35rem;line-height:1.12;color:var(--ink);margin:8px 0 12px}
h2{font-family:Comfortaa,ui-rounded,"Trebuchet MS",sans-serif;font-size:1.5rem;color:var(--ink);margin:56px 0 14px;padding-top:26px;border-top:2px solid var(--mist)}
h3{font-family:Comfortaa,ui-rounded,"Trebuchet MS",sans-serif;font-size:1.1rem;color:var(--ink);margin:26px 0 8px}
.kicker{font-family:Comfortaa,sans-serif;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--ink600)}
.lead{font-size:1.06rem;color:var(--ink600);margin:0 0 28px}
p{margin:.85rem 0}
strong{color:var(--ink)}
a{color:var(--ink600);font-weight:600;text-decoration:underline;text-decoration-color:var(--amber);text-decoration-thickness:2px;text-underline-offset:3px}
ul,ol{margin:.85rem 0;padding-left:1.35rem}
li{margin:.4rem 0}
table{width:100%;border-collapse:collapse;margin:1.4rem 0;font-size:.86rem}
th{background:var(--ink);color:#fff;text-align:left;font-family:Comfortaa,sans-serif;font-size:.74rem;letter-spacing:.05em;text-transform:uppercase;padding:10px 12px;vertical-align:top}
td{border-top:1px solid var(--mist);padding:10px 12px;vertical-align:top}
tbody tr:nth-child(odd){background:#f8fbfc}
figcaption{font-size:.78rem;color:var(--ink600);margin-top:6px}
aside.callout{margin:1.6rem 0;padding:16px 20px;border-left:4px solid var(--amber);background:var(--sand);border-radius:0 12px 12px 0}
aside.callout.vet{border-color:var(--ink600);background:var(--mist)}
aside.callout.safety{border-color:var(--tang);background:#fff3ec}
aside.callout.evidence{border-color:#8fa9b5;background:#fff}
.callout-label{font-family:Comfortaa,sans-serif;font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--ink600);margin:0}
.callout-title{font-family:Comfortaa,sans-serif;font-size:1rem;font-weight:700;color:var(--ink);margin:.35rem 0 .2rem}
.toc{background:var(--mist);border-radius:14px;padding:18px 22px;margin:28px 0 8px}
.toc ol{margin:0;padding-left:1.2rem;font-size:.9rem}
.toc a{text-decoration:none}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:24px 0}
.stat{background:var(--mist);border-radius:14px;padding:14px 16px}
.stat b{display:block;font-family:Comfortaa,sans-serif;font-size:1.5rem;color:var(--ink)}
.stat span{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink600)}
details{border:1px solid var(--mist);border-radius:14px;margin:10px 0;padding:0}
summary{cursor:pointer;padding:13px 18px;font-family:Comfortaa,sans-serif;font-weight:700;color:var(--ink)}
details>div{padding:0 18px 14px}
.rule{border-top:2px solid var(--mist);margin:40px 0 0;padding-top:16px;font-size:.85rem;color:var(--ink600)}
footer.note{margin-top:48px;padding:18px 20px;background:var(--mist);border-radius:14px;font-size:.85rem;color:var(--ink600)}
@media print{.toc{break-inside:avoid}h2{break-after:avoid}table{font-size:.76rem}aside.callout{break-inside:avoid}}
`;

function bodyHtml(): string {
  const extra = derivedBlocks();
  const parts: string[] = [];

  parts.push(
    `<p class="kicker">Grooming-dogs.com — autonomous rebuild package</p>`,
    `<h1>Project package: how this site was decided</h1>`,
    `<p class="lead">The complete documentation for the rebuild of grooming-dogs.com: the evidence, the search-intent clusters, the consolidation decisions, the 21-page canonical inventory, per-page specifications, metadata, internal linking, design specification, legacy-page dispositions and the QA report. Generated from the same source modules that render the live pages.</p>`,
    `<div class="stats">
      <div class="stat"><b>${TOTALS.pages}</b><span>Canonical pages</span></div>
      <div class="stat"><b>${TOTALS.words.toLocaleString()}</b><span>Words of guidance</span></div>
      <div class="stat"><b>${TOTALS.tables}</b><span>Reference tables</span></div>
      <div class="stat"><b>${TOTALS.faqs}</b><span>Answered questions</span></div>
      <div class="stat"><b>${TOTALS.internalLinks}</b><span>Internal links</span></div>
    </div>`,
    `<nav class="toc"><p class="kicker">Contents</p><ol>${PACKAGE_SECTIONS.map(
      (s) =>
        `<li><a href="#s${s.number}">${s.number}. ${esc(s.title)}</a></li>`,
    ).join("")}</ol></nav>`,
  );

  const ordered = [...PACKAGE_SECTIONS].sort(
    (a, b) => Number(a.number) - Number(b.number),
  );

  for (const s of ordered) {
    parts.push(
      `<h2 id="s${s.number}">${s.number}. ${esc(s.title)}</h2>`,
      ...s.blocks.map(blockHtml),
    );
    if (extra[s.id]) parts.push(...extra[s.id].map(blockHtml));

    if (s.number === "6") {
      parts.push(
        `<h2 id="s7">7. Page architecture and specifications</h2>`,
        `<p>One specification per canonical page, generated from the live page definitions so it cannot drift from what is published.</p>`,
        ...PAGE_ARCHITECTURE.map(
          (p) =>
            `<details><summary>${esc(p.url)}</summary><div><table><tbody>${p.lines
              .map(
                ([k, v]) =>
                  `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`,
              )
              .join("")}</tbody></table></div></details>`,
        ),
      );
    }

    if (s.number === "12") {
      parts.push(
        `<h2 id="s13">13. Legacy-page decisions</h2>`,
        `<p>Every URL in the legacy WordPress sitemap, with a disposition. Legacy content is evidence, not authority — no page survived simply because it already existed.</p>`,
        blockHtml({
          kind: "table",
          head: ["Legacy URL", "Was", "Verdict", "Destination", "Reason"],
          rows: legacyRows(),
        }),
      );
    }
  }

  parts.push(
    `<div class="rule"><strong>Cluster register integrity.</strong> ${CLUSTERS.length} clusters are defined in <code>src/content/site.ts</code>; the labels rendered on every page are read from the same source.</div>`,
    `<footer class="note">Audit result at generation time: ${AUDIT.orphans.length} orphan pages, ${AUDIT.broken.length} broken internal links across ${PAGE_STATS.length} guides. This document records no search-volume, ranking or traffic figures, because none were available to the project.</footer>`,
  );

  return parts.join("\n");
}

export function renderPackageHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Grooming-Dogs.com — Project Package: Architecture, Research and QA</title>
<meta name="description" content="The complete rebuild package for grooming-dogs.com: current-state reconstruction, search-intent research, cluster and consolidation decisions, canonical page inventory, page specifications, SEO metadata, internal linking, design specification, legacy decisions and QA report.">
<meta name="robots" content="noindex,follow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Proza+Libre:wght@400;600;700&display=swap">
<style>${CSS}</style>
</head>
<body><div class="wrap">
${bodyHtml()}
</div></body>
</html>`;
}

function inlineMd(s: string): string {
  return s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "[$1]($2)");
}

function blockMd(b: import("@/content/types").Block): string {
  switch (b.kind) {
    case "h2":
      return `## ${b.text}`;
    case "h3":
      return `### ${b.text}`;
    case "p":
      return inlineMd(b.text);
    case "ul":
    case "ol":
      return b.items
        .map((i, n) => (b.kind === "ol" ? `${n + 1}. ${inlineMd(i)}` : `- ${inlineMd(i)}`))
        .join("\n");
    case "steps":
      return [
        b.intro ? inlineMd(b.intro) : "",
        ...b.items.map((s, n) => `${n + 1}. **${s.title}** — ${inlineMd(s.text)}`),
      ]
        .filter(Boolean)
        .join("\n");
    case "callout":
      return `> **${b.tone === "vet" ? "See a vet" : b.tone === "safety" ? "Stop and reassess" : b.tone === "tip" ? "Practical tip" : "Where this comes from"} — ${b.title}**\n>\n> ${inlineMd(b.text)}`;
    case "table": {
      const head = `| ${b.head.join(" | ")} |`;
      const sep = `| ${b.head.map(() => "---").join(" | ")} |`;
      const rows = b.rows.map((r) => `| ${r.map((c) => inlineMd(c)).join(" | ")} |`);
      return [head, sep, ...rows, b.caption ? `\n_${b.caption}_` : ""]
        .filter(Boolean)
        .join("\n");
    }
    case "quote":
      return `> ${inlineMd(b.text)}\n>\n> — ${b.source}`;
    default:
      return "";
  }
}

export function renderPackageMarkdown(): string {
  const extra = derivedBlocks();
  const out: string[] = [
    `# Grooming-Dogs.com — Project Package`,
    ``,
    `**Canonical pages:** ${TOTALS.pages} · **Words of guidance:** ${TOTALS.words.toLocaleString()} · **Reference tables:** ${TOTALS.tables} · **Answered questions:** ${TOTALS.faqs} · **Internal links:** ${TOTALS.internalLinks}`,
    ``,
    `The complete documentation for the rebuild of grooming-dogs.com. Generated from the same source modules that render the live pages, so counts and audit results are measured rather than estimated.`,
    ``,
    `## Contents`,
    ``,
    ...PACKAGE_SECTIONS.map((s) => `${s.number}. ${s.title}`),
    ``,
    `---`,
    ``,
  ];

  const ordered = [...PACKAGE_SECTIONS].sort(
    (a, b) => Number(a.number) - Number(b.number),
  );

  for (const s of ordered) {
    out.push(`## ${s.number}. ${s.title}`, ``);
    out.push(...s.blocks.map(blockMd), ``);
    if (extra[s.id]) out.push(...extra[s.id].map(blockMd), ``);

    if (s.number === "6") {
      out.push(
        `## 7. Page architecture and specifications`,
        ``,
        `One specification per canonical page, generated from the live page definitions.`,
        ``,
      );
      for (const p of PAGE_ARCHITECTURE) {
        out.push(`### ${p.url}`, ``);
        for (const [k, v] of p.lines) out.push(`- **${k}:** ${v}`);
        out.push(``);
      }
    }

    if (s.number === "12") {
      out.push(
        `## 13. Legacy-page decisions`,
        ``,
        `Every URL in the legacy WordPress sitemap, with a disposition.`,
        ``,
        blockMd({
          kind: "table",
          head: ["Legacy URL", "Was", "Verdict", "Destination", "Reason"],
          rows: legacyRows(),
        }),
        ``,
      );
    }
  }

  out.push(
    `---`,
    ``,
    `Audit at generation time: ${AUDIT.orphans.length} orphan pages, ${AUDIT.broken.length} broken internal links across ${PAGE_STATS.length} guides.`,
    ``,
    `This document records no search-volume, ranking or traffic figures, because none were available to the project.`,
    ``,
  );

  return out.join("\n");
}
