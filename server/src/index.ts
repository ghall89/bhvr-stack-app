import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { BGGController } from "./controllers/bgg.controller";

const app = new Hono();
const bgg = new BGGController();

app.use(cors());
app.use(logger());

bgg.routes(app);

export default app;
