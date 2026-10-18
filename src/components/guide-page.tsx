import Link from "next/link";
import { Blocks, Inline } from "@/components/blocks";
import { LeadFigure } from "@/components/media";
import type { GuidePage } from "@/content/types";
import { CLUSTER_NAME } from "@/content";

const ARCHETYPE_LABEL: Record<GuidePage["archetype"], string> = {
  hub: "Topic hub",
  pillar: "Complete guide",
  "task-guide": "Step-by-step task",
  reference: "Reference",
  lifecycle: "By life stage",
  "commercial-info": "Costs & choices",
  trust: "About this site",
  glossary: "Glossary",
};

function Breadcrumbs({ page }: { page: GuidePage }) {
  return (
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
          {page.h1}
        </li>
      </ol>
    </nav>
  );
}

export function GuideArticle({ page }: { page: GuidePage }) {
  const toc = page.blocks.filter(
    (b): b is Extract<typeof b, { kind: "h2" }> => b.kind === "h2",
  );

  const faqJsonLd = page.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: page.h1,
              description: page.metaDescription,
              articleSection: CLUSTER_NAME[page.clusterId],
              inLanguage: "en",
              isAccessibleForFree: true,
              keywords: [page.primaryQuery, ...page.supportingQueries].join(
                ", ",
              ),
              publisher: {
                "@type": "Organization",
                name: "Grooming Dogs",
                url: "https://grooming-dogs.com",
              },
            },
            ...(faqJsonLd ? [faqJsonLd] : []),
          ]),
        }}
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="min-w-0">
          <Breadcrumbs page={page} />

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="head-font rounded-pill bg-ink px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
              {ARCHETYPE_LABEL[page.archetype]}
            </span>
            <span className="head-font rounded-pill bg-sand px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-amber-dark">
              {CLUSTER_NAME[page.clusterId]}
            </span>
          </div>

          <h1 className="head-font text-[2.1rem] leading-[1.12] font-bold text-ink sm:text-[2.6rem]">
            {page.h1}
          </h1>

          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-600">
            {page.intent}
          </p>

          {page.leadImageId ? <LeadFigure id={page.leadImageId} /> : null}

          {/* Short answer — satisfies the query before any scrolling */}
          <div className="mt-7 rounded-card border-2 border-amber bg-sand p-5 sm:p-6">
            <p className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-amber-dark">
              Short answer
            </p>
            <p className="mt-2 text-[1.05rem] leading-relaxed text-ink">
              <Inline text={page.answer} />
            </p>
          </div>

          <div className="mt-10">
            <Blocks blocks={page.blocks} />
          </div>

          {page.faqs.length ? (
            <section className="mt-16">
              <h2 className="head-font text-[1.6rem] font-bold text-ink">
                Common questions
              </h2>
              <div className="mt-5 divide-y divide-mist rounded-card border border-mist">
                {page.faqs.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="head-font flex items-start justify-between gap-4 text-[1.02rem] font-bold text-ink">
                      {f.q}
                      <span
                        aria-hidden
                        className="mt-0.5 shrink-0 text-ink-300 transition group-open:rotate-45"
                      >
                        ＋
                      </span>
                    </summary>
                    <p className="mt-3 text-[0.96rem] leading-relaxed">
                      <Inline text={f.a} />
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {page.related.length ? (
            <section className="mt-16">
              <h2 className="head-font text-[1.6rem] font-bold text-ink">
                Where to go next
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group block h-full rounded-card border border-mist bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber hover:shadow-lg hover:shadow-ink/5"
                    >
                      <span className="head-font block text-[1rem] font-bold text-ink group-hover:text-tangerine">
                        {r.label}
                      </span>
                      <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-ink-600">
                        {r.why}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <p className="mt-14 rounded-card bg-mist px-5 py-4 text-[0.82rem] leading-relaxed text-ink-600">
            This is general guidance for healthy adult dogs unless the page says
            otherwise. It is not veterinary advice and it is not a substitute for
            an in-person assessment. Read{" "}
            <Link href="/editorial-policy/">how this content is produced</Link>{" "}
            before relying on it.
          </p>
        </div>

        {/* Sticky in-page navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-300">
              On this page
            </p>
            <ul className="mt-3 space-y-2 border-l-2 border-mist pl-4">
              {toc.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="block text-[0.85rem] leading-snug text-ink-600 transition hover:text-tangerine"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
            {page.prerequisites?.length ? (
              <>
                <p className="head-font mt-8 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-300">
                  Read first
                </p>
                <ul className="mt-3 space-y-2">
                  {page.prerequisites.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="block text-[0.85rem] font-semibold text-ink hover:text-tangerine hover:underline"
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </aside>
      </div>
    </article>
  );
}
