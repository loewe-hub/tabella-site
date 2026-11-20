import { NextResponse } from "next/server";
import { ACCESS_COOKIE, verifyGuideToken } from "@/lib/token";

// Personal guide link from the welcome email: /g/<token>
// Valid token -> remember access in a strictly necessary cookie, then open the guide.
export async function GET(req: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const target = new URL(lang ? `/guide?lang=${lang}` : "/guide", url.origin);

  if (!verifyGuideToken(token)) {
    return NextResponse.redirect(new URL("/guide?denied=1", url.origin));
  }
  const res = NextResponse.redirect(target);
  res.cookies.set(ACCESS_COOKIE, token, {
    httpOnly: true,
    secure: url.protocol === "https:",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
