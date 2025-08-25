import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import bggRoutes from "./routes/bgg";

const app = new Hono();

app.use(cors());
app.use(logger());

app.get("/health", (c) => c.json({ status: "OK" }));
app.route("/bgg", bggRoutes);

export default app;
