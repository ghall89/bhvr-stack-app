import bgg from "bgg-client";
import { Hono, type Context } from "hono";

import { wrapper } from "@server/utils/wrapper";

const app = new Hono();

app.get("/hot", (c) => {
  return wrapper(c, async () => {
    const category = c.req.query("c") as any;

    const res = await bgg.hot({ type: category || undefined });

    return c.json(res);
  });
});

app.get("/search", (c) => {
  const query = c.req.query("q");

  if (!query) {
    const error = new Error("Missing query parameter 'q'");

    c.text(error.message, 400);
    return c.json({ error: error.message }, { status: 400 });
  }

  return wrapper(c, async () => {
    const res = await bgg.search(query);
    return c.json(res);
  });
});

app.get("/thing/:bgg_id", (c) => {
  const id = Number(c.req.param("bgg_id"));
  return wrapper(c, async () => {
    const res = await bgg.thing(id);
    return c.json(res);
  });
});

export default app;
