import bgg from "bgg-client";
import { type Hono, type Context } from "hono";

export class BGGController {
  private bggClient = bgg;

  private async hot(c: Context) {
    const res = await this.bggClient.hot();
    return c.json(res, { status: 200 });
  }

  private async search(c: Context) {
    const query = c.req.param("query");
    const res = await this.bggClient.search(query);

    return c.json(res, { status: 200 });
  }

  private async thing(c: Context) {
    const id = Number(c.req.param("bgg_id"));
    const res = await this.bggClient.thing(id);

    return c.json(res, { status: 200 });
  }

  routes(app: Hono) {
    app.get("/api/hot", this.hot.bind(this));
    app.get("/api/search/:query", this.search.bind(this));
    app.get("/api/thing/:bgg_id", this.thing.bind(this));
  }
}
