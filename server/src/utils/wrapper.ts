import type { Context } from "hono";
import { asError } from "./asError";

export async function wrapper(c: Context, func: () => Promise<any>) {
  try {
    return await func();
  } catch (err) {
    const error = asError(err);

    c.text(error.message);
    return c.json({ error: error.message }, { status: 500 });
  }
}
