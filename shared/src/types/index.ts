import { bggCacheTable } from "@shared/db/schema";

export type BggCacheInsert = typeof bggCacheTable.$inferInsert;
export type BGGCacheSelect = typeof bggCacheTable.$inferSelect;
