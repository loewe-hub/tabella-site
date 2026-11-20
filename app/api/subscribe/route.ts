import { NextResponse } from "next/server";
import { brand } from "@/config/brand";
import { COUNTRIES, REASONS } from "@/content/signup";
import { toLang } from "@/lib/i18n";
import { createGuideToken } from "@/lib/token";

// Creates a double opt-in request in Brevo. The contact only joins the list after
// clicking the confirmation link. GUIDE_URL is stored on the contact so the welcome
// email can link to the guide with {{ contact.GUIDE_URL }}.
//
// Env: BREVO_API_KEY, BREVO_LIST_ID, BREVO_DOI_TEMPLATE_ID, SITE_URL, GUIDE_SECRET.
// Without BREVO_API_KEY the route runs in mock mode and only logs.

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }
  const country = (COUNTRIES as readonly string[]).includes(String(body.country)) ? String(body.country) : "OTHER";
  const reason = (REASONS as readonly string[]).includes(String(body.reason)) ? String(body.reason) : "";
  const lang = toLang(body.lang);

  const guideUrl = `${brand.siteUrl}/g/${createGuideToken()}`;

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.log("[subscribe:mock]", { country, reason, lang });
    return NextResponse.json({ ok: true, mock: true });
  }

  const listId = Number(process.env.BREVO_LIST_ID);
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  if (!listId || !templateId) {
    console.error("[subscribe] BREVO_LIST_ID or BREVO_DOI_TEMPLATE_ID missing");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email,
      attributes: { COUNTRY: country, REASON: reason, LANGUAGE: lang, GUIDE_URL: guideUrl },
      includeListIds: [listId],
      templateId,
      redirectionUrl: `${brand.siteUrl}/confirmed${lang === "en" ? "" : `?lang=${lang}`}`,
    }),
  });

  if (!res.ok) {
    console.error("[subscribe] Brevo error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "provider_error" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
