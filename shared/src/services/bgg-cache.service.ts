import { eq } from "drizzle-orm";
import db from "../db";
import { bggCacheTable } from "@shared/db/schema";
import type { BggCacheInsert } from "@shared/types";

export class BGGCacheService {
  db = db;

  async insert(values: BggCacheInsert) {
    await this.db.insert(bggCacheTable).values(values);
  }

  async selectByEndpoint(endpoint: string) {
    return await this.db
      .select()
      .from(bggCacheTable)
      .where(eq(bggCacheTable.endpoint, endpoint));
  }
}
