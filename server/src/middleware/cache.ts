import { createMiddleware } from "hono/factory";

export const cacheMiddleware = createMiddleware<{
  Variables: {
    cachedJson: string;
  };
}>(async (c, next) => {
  c.set("cachedJson", JSON.stringify({ test: 123 }));
  await next();
});
