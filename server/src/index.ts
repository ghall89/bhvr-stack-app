import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";

import { BGGController } from "./controllers/bgg.controller";

const app = new Hono();
const bgg = new BGGController();

app.use(cors());

app.get("/hello", async (c) => {
  const data: ApiResponse = {
    message: "Hello BHVR!",
    success: true,
  };

  return c.json(data, { status: 200 });
});

bgg.routes(app);

export default app;
