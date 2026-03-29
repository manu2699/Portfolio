// ─── Slug validation ───

/** Allowlist: lowercase letters, digits, hyphens, and forward slashes (max 200 chars). */
const SLUG_RE = /^[a-z0-9\-/]{1,200}$/;

export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && SLUG_RE.test(slug);
}

// ─── JSON response helper ───

export function jsonResponse(body: object, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

// ─── In-memory rate limiter ────

/** Sliding-window rate limiter — max LIMIT requests per IP per WINDOW_MS. */
const WINDOW_MS = 60_000; // 1 minute
const LIMIT = 30; // requests per window

interface RateBucket {
  count: number;
  windowStart: number;
}

const rateBuckets = new Map<string, RateBucket>();

/**
 * Returns `true` when the given IP has exceeded the allowed request rate.
 * Mutates the internal bucket map as a side-effect.
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);

  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    rateBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }

  bucket.count += 1;
  return bucket.count > LIMIT;
}
