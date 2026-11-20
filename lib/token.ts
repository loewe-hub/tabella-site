import { createHmac, randomBytes, timingSafeEqual } from "crypto";

// Guide access links are opaque: a random id plus a signature.
// They contain no email or other personal data. Without GUIDE_SECRET the site runs
// in preview mode and the guide is open to anyone (for testing only).

export function guideSecret(): string | null {
  return process.env.GUIDE_SECRET || null;
}

export function isPreviewMode(): boolean {
  return !guideSecret();
}

function sign(id: string, secret: string): string {
  return createHmac("sha256", secret).update(id).digest("base64url").slice(0, 22);
}

export function createGuideToken(): string {
  const id = randomBytes(12).toString("base64url");
  const secret = guideSecret() || "preview-only";
  return `${id}.${sign(id, secret)}`;
}

export function verifyGuideToken(token: string | undefined | null): boolean {
  const secret = guideSecret();
  if (!secret) return true;
  if (!token || typeof token !== "string") return false;
  const [id, sig] = token.split(".");
  if (!id || !sig) return false;
  const expected = Buffer.from(sign(id, secret));
  const given = Buffer.from(sig);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export const ACCESS_COOKIE = "guide_access";
