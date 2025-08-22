import bgg from "bgg-client";
import { type Hono, type Context } from "hono";

export class BGGController {
  private bggClient = bgg;

  private async hot(c: Context) {
    const category = c.req.query("c") as any;
    const res = await this.bggClient.hot({ type: category || undefined });
    return c.json(res);
  }

  private async search(c: Context) {
    const query = c.req.query("q");

    if (!query) {
      console.error("Missing query parameter 'q'");
      return c.json({ error: "Missing query parameter 'q'" }, { status: 400 });
    }

    const res = await this.bggClient.search(query);

    return c.json(res);
  }

  private async thing(c: Context) {
    const id = Number(c.req.param("bgg_id"));
    const res = await this.bggClient.thing(id);

    return c.json(res);
  }

  routes(app: Hono) {
    const bgg = app.basePath("/bgg");
    bgg.get("/hot", this.hot.bind(this));
    bgg.get("/search", this.search.bind(this));
    bgg.get("/thing/:bgg_id", this.thing.bind(this));
  }
}
