"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CoatSchedule } from "@/db/schema";

type Status = "loading" | "ready" | "error";

export function ScheduleTool() {
  const [rows, setRows] = useState<CoatSchedule[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/schedule")
      .then((r) => {
        if (!r.ok) throw new Error("failed");
        return r.json() as Promise<{ schedules: CoatSchedule[] }>;
      })
      .then((data) => {
        if (!active) return;
        setRows(data.schedules);
        setSelected(data.schedules[0]?.coatKey ?? null);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div
        className="rounded-card border border-mist bg-mist/50 p-8 text-center text-ink-600"
        role="status"
      >
        Loading coat schedules…
      </div>
    );
  }

  if (status === "error" || !rows.length) {
    return (
      <div className="rounded-card border border-mist bg-mist/50 p-6 text-ink-600">
        The schedule tool is temporarily unavailable. The{" "}
        <a href="#by-coat-type">coat-type table below</a> covers the same
        cadences.
      </div>
    );
  }

  const active = rows.find((r) => r.coatKey === selected) ?? rows[0];

  return (
    <div className="rounded-card border-2 border-ink/10 bg-white p-5 shadow-lg shadow-ink/5 sm:p-7">
      <p className="head-font text-[0.7rem] font-bold uppercase tracking-[0.14em] text-amber-dark">
        Interactive
      </p>
      <h3 className="head-font mt-1 text-[1.25rem] font-bold text-ink">
        Pick your dog&apos;s coat type
      </h3>
      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-600">
        Not sure which one you have? Read{" "}
        <Link href="/coat-types-and-breed-grooming/">coat types explained</Link>{" "}
        first.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {rows.map((r) => {
          const on = r.coatKey === active.coatKey;
          return (
            <button
              key={r.coatKey}
              type="button"
              onClick={() => setSelected(r.coatKey)}
              aria-pressed={on}
              className={`head-font rounded-pill px-3.5 py-2 text-[0.8rem] font-bold transition ${
                on
                  ? "bg-ink text-white"
                  : "bg-mist text-ink hover:bg-amber hover:text-ink"
              }`}
            >
              {r.coatName}
            </button>
          );
        })}
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { label: "Typical breeds", value: active.examples },
          { label: "Brushing", value: active.brushing },
          { label: "Bathing", value: active.bathing },
          { label: "Nails", value: active.nails },
          { label: "Ears", value: active.ears },
          { label: "Professional groom", value: active.professional },
          { label: "Watch for", value: active.watchFor },
        ].map((row) => (
          <div
            key={row.label}
            className="rounded-2xl bg-mist/70 px-4 py-3 sm:col-span-2"
          >
            <dt className="head-font text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-600">
              {row.label}
            </dt>
            <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-[0.78rem] leading-relaxed text-ink-600">
        Cadences are starting points for a healthy adult dog, not rules. Skin
        conditions, allergies, swimming, rolling in things and your vet&apos;s
        advice all override them.
      </p>
    </div>
  );
}
