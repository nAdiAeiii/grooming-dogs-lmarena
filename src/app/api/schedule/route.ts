import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { coatSchedules } from "@/db/schema";
import { COAT_SCHEDULES } from "@/db/seed-data";

export const dynamic = "force-dynamic";

/**
 * Returns coat-type grooming cadences. Seeds itself from the static definitions
 * on first request so the tool works on a fresh database.
 */
export async function GET() {
  try {
    let rows = await db
      .select()
      .from(coatSchedules)
      .orderBy(asc(coatSchedules.sortOrder));

    if (rows.length === 0) {
      await db.insert(coatSchedules).values(COAT_SCHEDULES).onConflictDoNothing();
      rows = await db
        .select()
        .from(coatSchedules)
        .orderBy(asc(coatSchedules.sortOrder));
    }

    return NextResponse.json({ schedules: rows });
  } catch {
    // Fall back to the source data so the page never breaks because of the DB.
    return NextResponse.json({ schedules: COAT_SCHEDULES });
  }
}
