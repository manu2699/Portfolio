import admin from 'firebase-admin';

/**
 * Initialises the Firebase Admin SDK once per process.
 * Reads credentials from environment variables so no secrets
 * are ever bundled into the client build.
 */
function initFirebase(): void {
  if (admin.apps.length) return;

  const projectId = import.meta.env.FIREBASE_PROJECT_ID;
  const clientEmail = import.meta.env.FIREBASE_CLIENT_EMAIL;
  // Vercel (and most CI systems) store \n as the two-char sequence \\n —
  // we unescape it here so the PEM key is valid.
  const privateKey = import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Firebase Admin credentials are not configured. ' +
        'Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and ' +
        'FIREBASE_PRIVATE_KEY in your environment.',
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  });
}

initFirebase();

export const db = admin.firestore();
export const FieldValue = admin.firestore.FieldValue;
