"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/content/signup";
import type { Lang } from "@/lib/i18n";

// Inline sign-up in the hero (26 Nov 2026): one field, one button. Same weekly list as /signup.
export function HeroSignup({ lang }: { lang: Lang }) {
  const t = signup[lang];
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(t.errors.email);
    setSending(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, country: lang === "de" ? "DE" : lang === "it" ? "IT" : "OTHER", reason: "", weekly: true, guide: false, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const params = new URLSearchParams({ mode: "weekly" });
      if (lang !== "en") params.set("lang", lang);
      router.push(`/check-inbox?${params}`);
    } catch {
      setError(t.errors.generic);
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="hero-form cx-rise">
      <div className="hero-form-row">
        <label htmlFor="hero-email" className="sr-only">{t.email}</label>
        <input id="hero-email" className="input" type="email" autoComplete="email" placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className="btn" disabled={sending}>{sending ? t.sending : t.weeklySubmit}</button>
      </div>
      {error && <p role="alert" className="small" style={{ color: "#9B2C2C" }}>{error}</p>}
      <p className="tiny subtle">{t.weeklyPrivacyLead} <Link href={lang === "en" ? "/privacy" : `/privacy?lang=${lang}`}>{t.privacy}</Link>.</p>
    </form>
  );
}
