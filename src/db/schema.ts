import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Evidence-based coat-type grooming cadences.
 * Powers the "Build a grooming schedule" tool on /how-often-should-you-groom-your-dog/.
 * Values summarise guidance published by veterinary and groomer sources that use
 * coat type as the primary determinant of grooming frequency.
 */
export const coatSchedules = pgTable("coat_schedules", {
  id: serial("id").primaryKey(),
  coatKey: varchar("coat_key", { length: 48 }).notNull().unique(),
  coatName: varchar("coat_name", { length: 96 }).notNull(),
  examples: text("examples").notNull(),
  brushing: text("brushing").notNull(),
  bathing: text("bathing").notNull(),
  nails: text("nails").notNull(),
  ears: text("ears").notNull(),
  professional: text("professional").notNull(),
  watchFor: text("watch_for").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

/**
 * Corrections, questions and suggestions submitted by readers.
 * This is the site's only inbound channel — it replaces the legacy template
 * contact block (which displayed placeholder address/phone data).
 */
export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  kind: varchar("kind", { length: 32 }).notNull().default("correction"),
  pagePath: varchar("page_path", { length: 160 }),
  email: varchar("email", { length: 180 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type CoatSchedule = typeof coatSchedules.$inferSelect;
export type NewCoatSchedule = typeof coatSchedules.$inferInsert;
export type Feedback = typeof feedback.$inferSelect;
