import bgg from "bgg-client";
import type { Hono, Context } from "hono";

import { wrapper } from "@server/utils/wrapper";

export class BGGController {
  private bggClient = bgg;
  private wrapper = wrapper;

  private async hot(c: Context) {
    return this.wrapper(c, async () => {
      const category = c.req.query("c") as any;
      const res = await this.bggClient.hot({ type: category || undefined });
      return c.json(res);
    });
  }

  private async search(c: Context) {
    const query = c.req.query("q");

    if (!query) {
      const error = new Error("Missing query parameter 'q'");

      c.text(error.message, 400);
      return c.json({ error: error.message }, { status: 400 });
    }

    return this.wrapper(c, async () => {
      const res = await this.bggClient.search(query);
      return c.json(res);
    });
  }

  private async thing(c: Context) {
    const id = Number(c.req.param("bgg_id"));
    return this.wrapper(c, async () => {
      const res = await this.bggClient.thing(id);
      return c.json(res);
    });
  }

  routes(app: Hono) {
    const bgg = app.basePath("/bgg");

    bgg.get("/hot", this.hot.bind(this));
    bgg.get("/search", this.search.bind(this));
    bgg.get("/thing/:bgg_id", this.thing.bind(this));
  }
}
