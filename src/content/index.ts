import { FOUNDATIONS } from "./pages/foundations";
import { TASKS_A } from "./pages/tasks-a";
import { TASKS_B } from "./pages/tasks-b";
import { SITUATIONS } from "./pages/situations";
import { PRO } from "./pages/pro";
import { REFERENCE } from "./pages/reference";
import { CLUSTERS, SITE } from "./site";
import type { GuidePage } from "./types";

export { CLUSTERS, LEGACY, NAV, SITE } from "./site";
export type { GuidePage, Block, Faq, RelatedLink, Cluster, LegacyPage } from "./types";

/** The canonical page inventory, in one place. `/` is the hub and is rendered separately. */
export const ALL_PAGES: GuidePage[] = [
  ...FOUNDATIONS,
  ...TASKS_A,
  ...TASKS_B,
  ...SITUATIONS,
  ...PRO,
  ...REFERENCE,
];

const BY_SLUG = new Map(ALL_PAGES.map((p) => [p.slug, p]));

export function getPage(slug: string): GuidePage | undefined {
  return BY_SLUG.get(slug);
}

export const CLUSTER_NAME: Record<string, string> = Object.fromEntries(
  CLUSTERS.map((c) => [c.id, c.name]),
);

/** Every canonical URL on the site, trailing slash included, for the sitemap. */
export function allUrls(): string[] {
  return ["/", "/project-package/", ...ALL_PAGES.map((p) => `/${p.slug}/`)];
}

/**
 * Internal-link audit: pages that no other page links to, and pages whose own
 * related links point somewhere unexpected. Run in dev and in the QA report.
 */
export function auditInternalLinks() {
  const linkedTo = new Set<string>();
  for (const page of ALL_PAGES) {
    for (const link of page.related) linkedTo.add(normalise(link.href));
    for (const block of page.blocks) collectFromBlock(block, linkedTo);
    for (const faq of page.faqs) collectInline(faq.a, linkedTo);
    for (const p of page.prerequisites ?? []) linkedTo.add(normalise(p.href));
    collectInline(page.answer, linkedTo);
  }

  const orphans = ALL_PAGES.filter((p) => !linkedTo.has(`/${p.slug}/`));
  const broken: string[] = [];
  for (const page of ALL_PAGES) {
    const hrefs: string[] = [
      ...page.related.map((r) => r.href),
      ...(page.prerequisites ?? []).map((p) => p.href),
    ];
    for (const block of page.blocks) {
      if (block.kind === "p") hrefs.push(...inlineHrefs(block.text));
      if (block.kind === "ul") hrefs.push(...block.items.flatMap(inlineHrefs));
      if (block.kind === "ol") hrefs.push(...block.items.flatMap(inlineHrefs));
      if (block.kind === "steps")
        hrefs.push(...block.items.flatMap((s) => inlineHrefs(s.text)));
      if (block.kind === "callout") hrefs.push(...inlineHrefs(block.text));
      if (block.kind === "table")
        hrefs.push(...block.rows.flat().flatMap(inlineHrefs));
    }
    for (const href of hrefs) {
      const clean = normalise(href);
      if (!clean.startsWith("/")) continue;
      if (clean === "/" || BY_SLUG.has(clean.slice(1, -1))) continue;
      broken.push(`${page.slug} → ${clean}`);
    }
  }
  return { orphans: orphans.map((p) => p.slug), broken };
}

function normalise(href: string) {
  const trimmed = href.split("#")[0];
  return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
}

function inlineHrefs(text: string): string[] {
  return [...text.matchAll(/\]\((\/[^)#]+)\)/g)].map((m) => m[1]);
}

function collectInline(text: string, into: Set<string>) {
  for (const href of inlineHrefs(text)) into.add(normalise(href));
}

function collectFromBlock(
  block: GuidePage["blocks"][number],
  into: Set<string>,
) {
  if (block.kind === "p" || block.kind === "callout") collectInline(block.text, into);
  if (block.kind === "ul" || block.kind === "ol")
    block.items.forEach((i) => collectInline(i, into));
  if (block.kind === "steps")
    block.items.forEach((s) => collectInline(s.text, into));
  if (block.kind === "table")
    block.rows.flat().forEach((c) => collectInline(c, into));
}

export const SITE_META = {
  pageCount: ALL_PAGES.length + 1,
  clusterCount: CLUSTERS.length,
  name: SITE.name,
};
