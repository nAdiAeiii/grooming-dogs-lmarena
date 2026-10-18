import { auditInternalLinks, ALL_PAGES } from "../src/content/index";
import { PHOTOS, PLACEHOLDERS } from "../src/content/images";
const r = auditInternalLinks();
const log = (s: unknown) => console.log(s);
log("pages: " + ALL_PAGES.length);
log("orphans: " + (r.orphans.length ? r.orphans.join(", ") : "none"));
log("broken: " + (r.broken.length ? r.broken.join(" | ") : "none"));
const titles = new Map<string, number>();
const h1s = new Map<string, number>();
const slugs = new Map<string, number>();
for (const p of ALL_PAGES) {
  titles.set(p.metaTitle, (titles.get(p.metaTitle) ?? 0) + 1);
  h1s.set(p.h1, (h1s.get(p.h1) ?? 0) + 1);
  slugs.set(p.slug, (slugs.get(p.slug) ?? 0) + 1);
}
log("dupe titles: " + ([...titles].filter(([, c]) => c > 1).map(([t]) => t).join(" || ") || "none"));
log("dupe h1s: " + ([...h1s].filter(([, c]) => c > 1).map(([t]) => t).join(" || ") || "none"));
log("dupe slugs: " + ([...slugs].filter(([, c]) => c > 1).map(([t]) => t).join(", ") || "none"));
log("long titles (>65): " + ALL_PAGES.filter((p) => p.metaTitle.length > 65).map((p) => p.slug + ":" + p.metaTitle.length).join(", "));
log("desc out of range: " + ALL_PAGES.filter((p) => p.metaDescription.length < 110 || p.metaDescription.length > 175).map((p) => p.slug + ":" + p.metaDescription.length).join(", "));
log("no faqs: " + ALL_PAGES.filter((p) => !p.faqs.length).map((p) => p.slug).join(", "));
log("no related: " + ALL_PAGES.filter((p) => !p.related.length).map((p) => p.slug).join(", "));
log("no h2: " + ALL_PAGES.filter((p) => !p.blocks.some((b) => b.kind === "h2")).map((p) => p.slug).join(", "));
log("no callout: " + ALL_PAGES.filter((p) => !p.blocks.some((b) => b.kind === "callout")).map((p) => p.slug).join(", "));

// ---- photography audit ----
const figIds = new Set<string>();
const phIds = new Set<string>();
const leadIds = new Set<string>();
for (const p of ALL_PAGES) {
  if (p.leadImageId) leadIds.add(p.leadImageId);
  for (const b of p.blocks) {
    if (b.kind === "figure") {
      figIds.add(b.imageId);
      if (!b.caption || b.caption.trim().length < 20)
        log("!! figure missing caption: " + b.imageId);
    }
    if (b.kind === "placeholder") phIds.add(b.placeholderId);
  }
}
const knownImgs = new Set(Object.keys(PHOTOS));
const knownPh = new Set(Object.keys(PLACEHOLDERS));
log("");
log("--- photography audit ---");
log("registered photos: " + Object.keys(PHOTOS).length);
log("placeholder slots: " + Object.keys(PLACEHOLDERS).length);
log("figures w/o caption: " + "checked");
log("unregistered figure ids: " + ([...figIds].filter((i) => !knownImgs.has(i)).join(", ") || "none"));
log("unregistered lead ids: " + ([...leadIds].filter((i) => !knownImgs.has(i)).join(", ") || "none"));
log("undeclared placeholder ids: " + ([...phIds].filter((i) => !knownPh.has(i)).join(", ") || "none"));
log("unused registered photos: " +
  ([...knownImgs].filter((i) => i !== "hero-brush" && !figIds.has(i) && !leadIds.has(i)).join(", ") || "none"));
// Every image must be served from the approved stock host. This is the real
// guarantee against synthetic or hand-built URLs, not a keyword heuristic
// (which false-positives on "hair").
const ALLOWED_HOSTS = ["images.pexels.com"];
const offHost = [...knownImgs].filter((i) => {
  try {
    return !ALLOWED_HOSTS.includes(new URL(PHOTOS[i].base).hostname);
  } catch {
    return true;
  }
});
log("images not served from an approved stock host: " + (offHost.join(", ") || "none"));
log("images with an unresolvable URL: " +
  ([...knownImgs].filter((i) => { try { new URL(PHOTOS[i].base); return false; } catch { return true; } }).join(", ") || "none"));
log("photos missing credit or source page: " +
  ([...knownImgs].filter((i) => !PHOTOS[i].credit || !PHOTOS[i].sourcePage).join(", ") || "none"));
log("photos missing alt text: " +
  ([...knownImgs].filter((i) => !PHOTOS[i].alt || PHOTOS[i].alt.length < 25).join(", ") || "none"));
log("photos with 'ai' in alt text: " +
  ([...knownImgs].filter((i) => /\bai\b|generated|synthetic/i.test(PHOTOS[i].alt)).join(", ") || "none"));
log("cluster ids used: " + [...new Set(ALL_PAGES.map((p) => p.clusterId))].join(", "));
