const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

async function request<T>(
  path: string,
  init: RequestInit & { auth?: boolean } = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const headers = new Headers(init.headers ?? {});

  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  if (!headers.has("Accept")) headers.set("Accept", "application/json");

  if (init.auth && typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(url, { ...init, headers, cache: "no-store" });

  const ct = res.headers.get("content-type") ?? "";
  const data = ct.includes("application/json")
    ? await res.json().catch(() => null)
    : await res.text().catch(() => null);

  if (!res.ok) {
    const message = typeof data === "string" ? data : data?.message;
    throw new Error(message ?? `Request failed with status ${res.status}`);
  }

  return data as T;
}

export const api = {
  get:  <T>(path: string, auth = true) =>
    request<T>(path, { method: "GET", auth }),

  post: <T>(path: string, body?: unknown, auth = true) =>
    request<T>(path, {
      method: "POST",
      body: body == null ? undefined : JSON.stringify(body),
      auth,
    }),

  put:   <T>(path: string, body?: unknown, auth = true) =>
    request<T>(path, {
      method: "PUT",
      body: body == null ? undefined : JSON.stringify(body),
      auth,
    }),

  patch: <T>(path: string, body?: unknown, auth = true) =>
    request<T>(path, {
      method: "PATCH",
      body: body == null ? undefined : JSON.stringify(body),
      auth,
    }),

  delete:<T>(path: string, auth = true) =>
    request<T>(path, { method: "DELETE", auth }),
};
