import Link from "next/link";
import type { Metadata } from "next";
import { Blocks } from "@/components/blocks";
import {
  PACKAGE_SECTIONS,
  PAGE_ARCHITECTURE,
  legacyRows,
  derivedBlocks,
  TOTALS,
} from "@/content/project-package";

export const metadata: Metadata = {
  title: "Project Package: Architecture, Research and QA",
  description:
    "The complete grooming-dogs.com project package: current-state reconstruction, search-intent research, cluster and consolidation decisions, the 21-page canonical inventory, page specifications, SEO metadata, internal-link architecture, design spec, legacy decisions and the QA report.",
  alternates: { canonical: "/project-package/" },
};

const DOWNLOADS = [
  {
    label: "Open standalone document",
    href: "/api/project-package/?format=html&mode=view",
    note: "Self-contained HTML — opens in a new tab, prints to PDF",
    external: true,
  },
  {
    label: "Download HTML",
    href: "/api/project-package/?format=html&mode=download",
    note: "grooming-dogs-project-package.html",
    external: true,
  },
  {
    label: "Download Markdown",
    href: "/api/project-package/?format=md&mode=download",
    note: "grooming-dogs-project-package.md",
    external: true,
  },
];

const ORDER = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

function SectionHeading({
  number,
  id,
  title,
}: {
  number: string;
  id: string;
  title: string;
}) {
  return (
    <h2
      id={id}
      className="head-font mt-16 mb-5 flex items-baseline gap-3 border-t-2 border-mist pt-8 text-[1.55rem] leading-tight font-bold text-ink first:mt-0 first:border-0 first:pt-0"
    >
      <span className="grid h-8 w-8 shrink-0 translate-y-0.5 place-items-center rounded-full bg-ink text-[0.9rem] text-white">
        {number}
      </span>
      {title}
    </h2>
  );
}

export default function ProjectPackagePage() {
  const extra = derivedBlocks();
  const toc = [
    ...PACKAGE_SECTIONS.map((s) => ({ number: s.number, id: s.id, title: s.title })),
  ].sort((a, b) => Number(a.number) - Number(b.number));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-[0.78rem] text-ink-600">
              <li>
                <Link href="/" className="hover:text-ink hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink-300">
                /
              </li>
              <li aria-current="page" className="font-semibold text-ink">
                Project package
              </li>
            </ol>
          </nav>

          <h1 className="head-font text-[2.1rem] leading-[1.12] font-bold text-ink sm:text-[2.5rem]">
            Project package: how this site was decided
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-600">
            The full documentation for the rebuild of grooming-dogs.com — the
            evidence, the search-intent clusters, the consolidation decisions, the
            21-page canonical inventory, per-page specifications, metadata, internal
            linking, design spec, legacy-page dispositions and the QA report.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {DOWNLOADS.map((d) => (
              <a
                key={d.href}
                href={d.href}
                {...(d.external ? { target: "_blank", rel: "noopener" } : {})}
                {...(d.href.includes("mode=download")
                  ? { download: d.note }
                  : {})}
                className="head-font rounded-pill bg-amber px-5 py-3 text-[0.82rem] font-bold text-ink transition hover:bg-tangerine hover:text-white"
              >
                {d.href.includes("mode=download") ? "⤓ " : "↗ "}
                {d.label}
              </a>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Canonical pages", v: TOTALS.pages },
              { k: "Words of guidance", v: TOTALS.words.toLocaleString() },
              { k: "Reference tables", v: TOTALS.tables },
              { k: "Answered questions", v: TOTALS.faqs },
            ].map((s) => (
              <div key={s.k} className="rounded-card bg-mist px-4 py-3.5">
                <dt className="head-font text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink-600">
                  {s.k}
                </dt>
                <dd className="head-font mt-1 text-[1.4rem] font-bold text-ink">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>

          {/* Sections 1–6, 8–12, 14 from the narrative; 7 and 13 generated */}
          {PACKAGE_SECTIONS.filter((s) => s.number !== "14").map((s) => (
            <section key={s.id}>
              <SectionHeading number={s.number} id={s.id} title={s.title} />
              <Blocks blocks={s.blocks} />
              {extra[s.id] ? <Blocks blocks={extra[s.id]} /> : null}

              {s.number === "6" ? (
                <>
                  <SectionHeading number="7" id="architecture" title="Page architecture and specifications" />
                  <p className="mt-1 text-[1rem] leading-relaxed text-ink-600">
                    One specification per canonical page, generated from the live page
                    definitions so it cannot drift from what is published.
                  </p>
                  {PAGE_ARCHITECTURE.map((p) => (
                    <details
                      key={p.url}
                      className="group mt-4 rounded-card border border-mist bg-white"
                    >
                      <summary className="head-font flex items-center justify-between gap-3 px-5 py-3.5 text-[1rem] font-bold text-ink">
                        {p.url}
                        <span
                          aria-hidden
                          className="text-ink-300 transition group-open:rotate-45"
                        >
                          ＋
                        </span>
                      </summary>
                      <div className="overflow-x-auto border-t border-mist">
                        <table className="w-full border-collapse text-left text-[0.86rem]">
                          <tbody>
                            {p.lines.map(([k, v]) => (
                              <tr key={k} className="align-top">
                                <th
                                  scope="row"
                                  className="w-44 border-t border-mist px-5 py-2.5 font-semibold text-ink-600 first:border-t-0"
                                >
                                  {k}
                                </th>
                                <td className="border-t border-mist px-5 py-2.5 text-[#33505c] first:border-t-0">
                                  {v}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  ))}
                </>
              ) : null}

              {s.number === "12" ? (
                <>
                  <SectionHeading number="13" id="legacy" title="Legacy-page decisions" />
                  <p className="mt-1 text-[1rem] leading-relaxed text-ink-600">
                    Every URL in the legacy WordPress sitemap, with a disposition.
                    Legacy content is evidence, not authority — no page survived
                    simply because it already existed.
                  </p>
                  <div className="mt-6">
                    <Blocks
                      blocks={[
                        {
                          kind: "table",
                          head: ["Legacy URL", "Was", "Verdict", "Destination", "Reason"],
                          rows: legacyRows(),
                        },
                      ]}
                    />
                  </div>
                </>
              ) : null}
            </section>
          ))}

          {/* Section 14 last */}
          {PACKAGE_SECTIONS.filter((s) => s.number === "14").map((s) => (
            <section key={s.id}>
              <SectionHeading number={s.number} id={s.id} title={s.title} />
              <Blocks blocks={s.blocks} />
            </section>
          ))}

          <p className="mt-14 rounded-card bg-mist px-5 py-4 text-[0.85rem] leading-relaxed text-ink-600">
            This document describes a rebuild of grooming-dogs.com. It records no
            search-volume, ranking or traffic figures, because none were available to
            the project.
          </p>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-300">
              Contents
            </p>
            <ul className="mt-3 space-y-2 border-l-2 border-mist pl-4">
              {toc.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-[0.85rem] leading-snug text-ink-600 transition hover:text-tangerine"
                  >
                    {s.number}. {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
