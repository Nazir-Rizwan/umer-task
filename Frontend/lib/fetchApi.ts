const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3000';

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  body?: unknown;
  token?: string;
}

export async function fetchApi<T = unknown>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { method = 'GET', body, token } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message ?? 'Something went wrong');
  }

  return data as T;
}
