import { eq } from "drizzle-orm";
import { db } from "../db";
import { bggCacheTable, type BggCacheInsert } from "../db/schema";

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

  async delete(endpoint: string) {
    await this.db
      .delete(bggCacheTable)
      .where(eq(bggCacheTable.endpoint, endpoint));
  }
}
