import Link from "next/link";
import { NAV, SITE } from "@/content/site";
import { ALL_PAGES } from "@/content";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-2xl px-2 py-1 -ml-2"
      aria-label={`${SITE.name} home`}
    >
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-white text-xl"
      >
        🐾
      </span>
      <span className="leading-none">
        <span className="head-font block text-[1.05rem] font-bold text-ink">
          Grooming Dogs
        </span>
        <span className="block text-[0.7rem] font-medium tracking-wide text-ink-600">
          Practical dog grooming
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-stretch gap-1">
            {NAV.map((group) => (
              <li key={group.label} className="relative group">
                <details className="group/details">
                  <summary className="head-font flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.86rem] font-semibold text-ink transition hover:bg-mist">
                    {group.label}
                    <span
                      aria-hidden
                      className="text-[0.6rem] text-ink-300 transition group-hover/details:rotate-180"
                    >
                      ▼
                    </span>
                  </summary>
                  <div className="absolute left-0 top-full z-50 w-80 pt-2">
                    <ul className="rounded-3xl border border-mist bg-white p-2 shadow-xl shadow-ink/10">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-2xl px-3 py-2.5 transition hover:bg-mist"
                          >
                            <span className="block text-[0.9rem] font-semibold text-ink">
                              {item.label}
                            </span>
                            {item.note ? (
                              <span className="block text-[0.75rem] text-ink-600">
                                {item.note}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/how-often-should-you-groom-your-dog/"
          className="head-font hidden shrink-0 rounded-full bg-amber px-4 py-2.5 text-[0.82rem] font-bold text-ink transition hover:bg-tangerine hover:text-white sm:inline-block"
        >
          Build a schedule
        </Link>
      </div>

      {/* Mobile navigation: flat, scrollable, no nested menus to tap through */}
      <nav
        aria-label="Main (mobile)"
        className="border-t border-mist bg-white lg:hidden"
      >
        <ul className="flex snap-x gap-1.5 overflow-x-auto px-4 py-2.5">
          {NAV.flatMap((group) => group.items).map((item) => (
            <li key={item.href} className="shrink-0 snap-start">
              <Link
                href={item.href}
                className="head-font block rounded-full bg-mist px-3 py-1.5 text-[0.78rem] font-semibold whitespace-nowrap text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-4 border-amber bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <div>
            <p className="head-font text-lg font-bold">🐾 {SITE.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-300">
              {SITE.positioning}
            </p>
            <p className="mt-4 text-sm text-ink-300">
              General guidance only — not veterinary advice. For anything medical,
              speak to your vet.
            </p>
          </div>

          {NAV.map((group) => (
            <div key={group.label}>
              <p className="head-font text-[0.78rem] font-bold uppercase tracking-wider text-amber">
                {group.label}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.85rem] text-white/80 transition hover:text-amber"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-[0.78rem] text-ink-300">
          <p>
            {ALL_PAGES.length} guides · independent — no bookings, no shop, no
            affiliate links.
          </p>
          <span className="flex flex-wrap gap-4">
            <Link href="/editorial-policy/" className="underline hover:text-amber">
              How this content is sourced
            </Link>
            <a
              href="/api/project-package/?format=html&mode=view"
              target="_blank"
              rel="noopener"
              className="underline hover:text-amber"
            >
              Project package ↗
            </a>
            <a
              href="/api/project-package/?format=md&mode=download"
              download="grooming-dogs-project-package.md"
              className="underline hover:text-amber"
            >
              Download ⤓
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
