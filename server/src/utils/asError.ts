export function asError(err: unknown): Error {
  if (err instanceof Error) return err;

  const msg = typeof err === "string" ? err : "Unknown error";
  return new Error(msg);
}
