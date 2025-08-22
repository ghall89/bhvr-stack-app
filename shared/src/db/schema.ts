import { integer, pgTable, varchar, jsonb } from "drizzle-orm/pg-core";

export const bggCacheTable = pgTable("bgg_cache", {
  endpoint: varchar().notNull().unique().primaryKey(),
  timestamp: integer().notNull(),
  data: jsonb().notNull(),
});
