import Link from "next/link";
import type { Metadata } from "next";
import { ALL_PAGES, NAV } from "@/content";
import { SITE } from "@/content/site";
import { HeroPhoto, CardPhoto } from "@/components/media";

export const metadata: Metadata = {
  title: "Dog Grooming Guide: How to Groom Your Dog at Home",
  description:
    "An independent guide to dog grooming: coat-type schedules, step-by-step home grooming for every task, tool choices, and honest advice on when the job belongs to a professional.",
  alternates: { canonical: "/" },
};

const START_HERE = [
  {
    href: "/how-to-groom-your-dog-at-home/",
    kicker: "The whole routine",
    title: "Groom your dog at home, start to finish",
    body: "The full procedure in the order groomers use — brush, nails, ears, bath, dry, face, trim — with the mistakes that cost the most.",
    minutes: "Complete guide",
    imageId: "lead-routine",
  },
  {
    href: "/how-often-should-you-groom-your-dog/",
    kicker: "Build a schedule",
    title: "How often should you groom your dog?",
    body: "Cadences for brushing, bathing, nails and ears by coat type, plus the five checks that beat any calendar.",
    minutes: "Complete guide",
    imageId: "lead-frequency",
  },
  {
    href: "/coat-types-and-breed-grooming/",
    kicker: "Not sure where to start?",
    title: "What coat does your dog actually have?",
    body: "Six coat types cover almost every dog, and the coat — not the breed name — decides how much work this is.",
    minutes: "Reference",
    imageId: "lead-coat",
  },
];

const SITUATION_PROMPTS = [
  {
    href: "/puppy-grooming/",
    label: "I have a puppy",
    body: "Use the window where handling can still be made normal.",
    imageId: "lead-puppy",
  },
  {
    href: "/senior-dog-grooming/",
    label: "My dog is getting old",
    body: "Shorter sessions, non-slip surfaces, thinner skin, more nail trims.",
    imageId: "lead-senior",
  },
  {
    href: "/grooming-anxious-dog/",
    label: "My dog hates it",
    body: "Grooming fear is fixable, and restraint is what makes it worse.",
    imageId: "lead-anxious",
  },
  {
    href: "/dog-grooming-problems/",
    label: "Something's wrong",
    body: "Itching, smell, bumps, redness — grooming problem or vet problem?",
    imageId: "lead-problems",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            alternateName: "grooming-dogs.com",
            url: SITE.url,
            description:
              "An independent guide to dog grooming: coat-type schedules, home technique, tool literacy, and when to use a professional.",
            inLanguage: "en",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <p className="head-font text-[0.75rem] font-bold uppercase tracking-[0.16em] text-amber">
                🐾 {SITE.name}
              </p>
              <h1 className="head-font mt-4 text-[2.3rem] leading-[1.08] font-bold sm:text-[3.1rem]">
                Everything you need to groom your dog,
                <span className="text-amber"> and nothing you don&apos;t.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-ink-300">
                {SITE.positioning} No bookings, no shop, no affiliate links — just
                the routine, the schedule and the tools, organised by what
                you&apos;re trying to do.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/how-to-groom-your-dog-at-home/"
                  className="head-font rounded-pill bg-amber px-6 py-3.5 text-[0.9rem] font-bold text-ink transition hover:bg-tangerine hover:text-white"
                >
                  Start the full routine
                </Link>
                <Link
                  href="/how-often-should-you-groom-your-dog/"
                  className="head-font rounded-pill border-2 border-white/30 px-6 py-3.5 text-[0.9rem] font-bold text-white transition hover:border-amber hover:text-amber"
                >
                  Build a grooming schedule
                </Link>
              </div>
            </div>

            <HeroPhoto id="hero-brush" className="lg:mt-1" />
          </div>

          {/* The four steps, carried below the hero as a horizontal band */}
          <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Identify the coat", d: "Six coat types cover nearly every dog." },
              { n: "02", t: "Learn the routine", d: "Brush, nails, ears, bath, dry, face, trim." },
              { n: "03", t: "Set the cadence", d: "From weekly to daily depending on the coat." },
              { n: "04", t: "Know your limits", d: "And hand over when the job isn't yours." },
            ].map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-3.5 rounded-card bg-white/5 px-5 py-4"
              >
                <span className="head-font text-[1.05rem] font-bold text-amber">
                  {s.n}
                </span>
                <span>
                  <span className="head-font block text-[0.98rem] font-bold">
                    {s.t}
                  </span>
                  <span className="block text-[0.83rem] leading-snug text-ink-300">
                    {s.d}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where to start */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="head-font text-[1.9rem] font-bold text-ink">
          Where to start
        </h2>
        <p className="mt-2 max-w-2xl text-[1rem] text-ink-600">
          Three pages cover the ground most people arrive needing.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {START_HERE.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex h-full flex-col overflow-hidden rounded-card border-2 border-mist bg-white transition hover:-translate-y-1 hover:border-amber hover:shadow-xl hover:shadow-ink/5"
            >
              <CardPhoto id={card.imageId} priority />
              <span className="flex flex-1 flex-col p-6">
                <span className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-amber-dark">
                  {card.kicker}
                </span>
                <span className="head-font mt-2 block text-[1.22rem] leading-snug font-bold text-ink group-hover:text-tangerine">
                  {card.title}
                </span>
                <span className="mt-3 block flex-1 text-[0.93rem] leading-relaxed text-ink-600">
                  {card.body}
                </span>
                <span className="head-font mt-5 text-[0.75rem] font-bold uppercase tracking-wider text-ink-300">
                  {card.minutes} →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* By situation */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="head-font text-[1.9rem] font-bold text-ink">
            Or start with your dog
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SITUATION_PROMPTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-card border-2 border-transparent bg-white transition hover:border-amber"
              >
                <CardPhoto id={s.imageId} />
                <span className="flex flex-1 flex-col p-5">
                  <span className="head-font block text-[1.05rem] font-bold text-ink group-hover:text-tangerine">
                    {s.label}
                  </span>
                  <span className="mt-2 block text-[0.88rem] leading-relaxed text-ink-600">
                    {s.body}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full library */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="head-font text-[1.9rem] font-bold text-ink">
          The whole library
        </h2>
        <p className="mt-2 max-w-2xl text-[1rem] text-ink-600">
          {ALL_PAGES.length} guides plus this page. Grouped by the task, not by a
          groomer&apos;s price list.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {NAV.filter((g) => g.label !== "About").map((group) => (
            <div key={group.label}>
              <h3 className="head-font text-[0.78rem] font-bold uppercase tracking-[0.14em] text-amber-dark">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group block rounded-card border border-mist px-4 py-3 transition hover:border-amber hover:bg-sand"
                    >
                      <span className="head-font block text-[0.98rem] font-bold text-ink group-hover:text-tangerine">
                        {item.label}
                      </span>
                      {item.note ? (
                        <span className="mt-0.5 block text-[0.82rem] text-ink-600">
                          {item.note}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Honesty block — replaces the fabricated salon layer */}
      <section className="border-t-4 border-amber bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="head-font text-[1.9rem] font-bold text-ink">
                What this site is not
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink">
                This domain used to host a template for a pet grooming business —
                a shop address, a phone number, a team page and a three-tier
                price list, all of it placeholder content. Rather than rebuild
                that, this site states its limits plainly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about/"
                  className="head-font rounded-pill bg-ink px-5 py-3 text-[0.82rem] font-bold text-white transition hover:bg-ink-800"
                >
                  About this site
                </Link>
                <Link
                  href="/project-package/"
                  className="head-font rounded-pill border-2 border-ink px-5 py-3 text-[0.82rem] font-bold text-ink transition hover:bg-ink hover:text-white"
                >
                  Project package &amp; QA
                </Link>
                <a
                  href="/api/project-package/?format=html&mode=view"
                  target="_blank"
                  rel="noopener"
                  className="head-font rounded-pill border-2 border-ink px-5 py-3 text-[0.82rem] font-bold text-ink transition hover:bg-ink hover:text-white"
                >
                  Open documentation ↗
                </a>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                "Not a salon, a van or a booking system",
                "No prices of its own — third-party figures only, and attributed",
                "No shop, affiliate links or sponsored products",
                "No veterinary credentials, and no veterinary advice",
                "No testimonials or reviews that can't be verified",
                "General guidance for healthy dogs, with limits stated on every page",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] text-ink">
                  <span aria-hidden className="text-tangerine">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
