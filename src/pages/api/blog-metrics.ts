import type { APIRoute } from 'astro';
import { db, FieldValue } from '../../lib/firebase';
import { isValidSlug, isRateLimited, jsonResponse } from '../../lib/api';

const COLLECTION = 'blogMetrics';

// ─── GET /api/blog-metrics?slug=<slug> ───

export const GET: APIRoute = async ({ request }) => {
  const slug = new URL(request.url).searchParams.get('slug');

  if (!isValidSlug(slug)) {
    return jsonResponse({ error: 'Invalid or missing slug.' }, 400);
  }

  try {
    const snap = await db.collection(COLLECTION).doc(slug).get();
    const data = snap.exists ? snap.data()! : {};
    return jsonResponse({
      views: (data.views as number) ?? 0,
      likes: (data.likes as number) ?? 0,
    });
  } catch (err) {
    console.error('[blog-metrics GET]', err);
    return jsonResponse({ error: 'Internal server error.' }, 500);
  }
};

// ─── POST /api/blog-metrics ───

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Rate limit
  if (isRateLimited(clientAddress ?? 'unknown')) {
    return jsonResponse({ error: 'Too many requests. Please slow down.' }, 429);
  }

  // Content-Type guard
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse({ error: 'Content-Type must be application/json.' }, 415);
  }

  // Payload size guard (16 KB)
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 16_384) {
    return jsonResponse({ error: 'Payload too large.' }, 413);
  }

  // Safe JSON parse
  let slug: unknown;
  let type: unknown;
  try {
    const body = await request.json();
    slug = body?.slug;
    type = body?.type;
  } catch {
    return jsonResponse({ error: 'Invalid JSON body.' }, 400);
  }

  // Input validation
  if (!isValidSlug(slug)) {
    return jsonResponse({ error: 'Invalid or missing slug.' }, 400);
  }
  if (type !== 'view' && type !== 'like') {
    return jsonResponse({ error: 'type must be "view" or "like".' }, 400);
  }

  // Firestore atomic increment
  try {
    const field = type === 'view' ? 'views' : 'likes';
    await db
      .collection(COLLECTION)
      .doc(slug)
      .set({ [field]: FieldValue.increment(1) }, { merge: true });

    return jsonResponse({ success: true });
  } catch (err) {
    console.error('[blog-metrics POST]', err);
    return jsonResponse({ error: 'Internal server error.' }, 500);
  }
};
