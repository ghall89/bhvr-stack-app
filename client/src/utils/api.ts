const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

export async function getRequest<T>(endpoint: string) {
  try {
    const req = await fetch(`${SERVER_URL}/${endpoint}`);
    const res: T = await req.json();

    return res;
  } catch (error) {
    console.log(error);
  }
}
