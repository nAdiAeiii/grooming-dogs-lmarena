"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const KINDS = [
  { value: "correction", label: "Something is wrong" },
  { value: "gap", label: "Something is missing" },
  { value: "question", label: "Question about a page" },
  { value: "site", label: "Problem with the site" },
];

export function FeedbackForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (message.trim().length < 10) {
      setState("error");
      return;
    }
    setState("sending");
    const form = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: form.get("kind"),
          message: form.get("message"),
          email: form.get("email"),
          pagePath: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setState("sent");
      setMessage("");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-card border-2 border-amber bg-sand p-6">
        <p className="head-font text-[1.1rem] font-bold text-ink">
          Thank you — received.
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed">
          Corrections and suggestions are read and acted on. If you left an email
          and the change is substantial, you may hear back.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="head-font mt-5 rounded-pill bg-ink px-4 py-2 text-[0.8rem] font-bold text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-card border-2 border-mist bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="head-font block text-[0.8rem] font-bold text-ink">
            What is this about?
          </span>
          <select
            name="kind"
            defaultValue="correction"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-mist/50 px-3.5 py-2.5 text-[0.95rem]"
          >
            {KINDS.map((k) => (
              <option key={k.value} value={k.value}>
                {k.label}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="head-font block text-[0.8rem] font-bold text-ink">
            Your message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Which page, what's wrong, and — if it's a correction — what the correct information is. A source helps."
            className="mt-1.5 w-full rounded-2xl border border-mist bg-mist/50 px-3.5 py-2.5 text-[0.95rem]"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="head-font block text-[0.8rem] font-bold text-ink">
            Email (optional)
          </span>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Only if you'd like a reply"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-mist/50 px-3.5 py-2.5 text-[0.95rem]"
          />
        </label>
      </div>

      {state === "error" ? (
        <p className="mt-4 rounded-2xl bg-[#fff3ec] px-4 py-3 text-[0.85rem] text-[#a63d00]">
          That didn&apos;t send. Please write at least a sentence and try again.
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="head-font rounded-pill bg-amber px-6 py-3 text-[0.85rem] font-bold text-ink transition hover:bg-tangerine hover:text-white disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-[0.78rem] text-ink-600">
          No newsletter, no list, nothing sent to you.
        </p>
      </div>
    </form>
  );
}
