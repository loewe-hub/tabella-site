"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { COUNTRIES, REASONS, signup } from "@/content/signup";
import type { Lang } from "@/lib/i18n";

export function SignupForm({ lang }: { lang: Lang }) {
  const t = signup[lang];
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState<string>(lang === "de" ? "DE" : "IT");
  const [reason, setReason] = useState<string>("results");
  const [weekly, setWeekly] = useState(false);
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
        body: JSON.stringify({ email, country, reason, weekly, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push(lang === "en" ? "/check-inbox" : `/check-inbox?lang=${lang}`);
    } catch {
      setError(t.errors.generic);
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="stack" style={{ gap: 22 }}>
      <div className="field">
        <label htmlFor="email">{t.email}</label>
        <input id="email" className="input" type="email" autoComplete="email" placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="field">
        <label htmlFor="country">{t.country}</label>
        <select id="country" className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{t.countries[c]}</option>
          ))}
        </select>
      </div>

      <fieldset className="field" style={{ border: 0, margin: 0, padding: 0 }}>
        <legend style={{ marginBottom: 10, padding: 0 }}>{t.reason}</legend>
        {REASONS.map((r) => (
          <label key={r} style={{ display: "flex", gap: 10, alignItems: "center", minHeight: 32, fontWeight: 400 }}>
            <input type="radio" name="reason" value={r} checked={reason === r} onChange={() => setReason(r)} style={{ width: 18, height: 18, accentColor: "var(--primary)" }} />
            {t.reasons[r]}
          </label>
        ))}
      </fieldset>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "var(--ground)", borderRadius: 12, padding: "12px 14px" }}>
        <input type="checkbox" checked={weekly} onChange={(e) => setWeekly(e.target.checked)} style={{ width: 18, height: 18, marginTop: 3, flex: "none", accentColor: "var(--primary)" }} />
        <span className="stack" style={{ gap: 2 }}>
          <strong style={{ fontSize: 15 }}>{t.weekly}</strong>
          <span className="small muted">{t.weeklyHint}</span>
        </span>
      </label>

      <p className="tiny subtle">
        {t.privacyLead} <Link href="/privacy">{t.privacy}</Link>.
      </p>

      {error && (
        <p role="alert" className="small" style={{ color: "#9B2C2C", background: "#FBEBEB", borderRadius: 10, padding: "10px 14px" }}>{error}</p>
      )}

      <button type="submit" className="btn" disabled={sending} style={{ height: 52 }}>
        {sending ? t.sending : t.submit}
      </button>
      <p className="tiny subtle" style={{ textAlign: "center" }}>{t.note}</p>
    </form>
  );
}
