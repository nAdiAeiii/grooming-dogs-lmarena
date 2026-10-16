import { NextResponse } from "next/server";
import { db } from "@/db";
import { feedback } from "@/db/schema";

export const dynamic = "force-dynamic";

const KINDS = new Set(["correction", "gap", "question", "site"]);

type Payload = {
  kind?: unknown;
  message?: unknown;
  email?: unknown;
  pagePath?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const kind =
    typeof body.kind === "string" && KINDS.has(body.kind) ? body.kind : "correction";
  const email =
    typeof body.email === "string" && body.email.trim() ? body.email.trim() : null;
  const pagePath =
    typeof body.pagePath === "string" && body.pagePath.trim()
      ? body.pagePath.trim().slice(0, 160)
      : null;

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please write at least a sentence." },
      { status: 400 },
    );
  }

  if (email && email.length > 180) {
    return NextResponse.json({ error: "Email too long." }, { status: 400 });
  }

  try {
    await db.insert(feedback).values({
      kind,
      message: message.slice(0, 4000),
      email,
      pagePath,
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Could not save the message right now." },
      { status: 500 },
    );
  }
}
