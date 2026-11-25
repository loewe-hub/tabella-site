"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { COUNTRIES, REASONS, signup, type SignupMode } from "@/content/signup";
import type { Lang } from "@/lib/i18n";

// Two tick boxes: the cholesterol guide and the weekly prompts. The weekly prompts are never pre-ticked
// unless the visitor came from a "weekly" link (mode=weekly), where that is what they asked for.
export function SignupForm({ lang, mode = "guide" }: { lang: Lang; mode?: SignupMode }) {
  const t = signup[lang];
  const router = useRouter();
  const isWeekly = mode === "weekly";
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState<string>(lang === "de" ? "DE" : "IT");
  const [reason, setReason] = useState<string>("results");
  const [wantGuide, setWantGuide] = useState(!isWeekly);
  const [wantWeekly, setWantWeekly] = useState(isWeekly);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(t.errors.email);
    if (!wantGuide && !wantWeekly) return setError(t.errors.none);
    setSending(true);
    const payload = { email, country, reason: wantGuide ? reason : "curious", weekly: wantWeekly, guide: wantGuide, lang };
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      const params = new URLSearchParams();
      if (lang !== "en") params.set("lang", lang);
      if (wantWeekly && !wantGuide) params.set("mode", "weekly");
      const qs = params.toString();
      router.push(qs ? `/check-inbox?${qs}` : "/check-inbox");
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

      <div className="stack" style={{ gap: 10 }}>
        {([
          [wantGuide, setWantGuide, t.guideBox, t.guideTooHint],
          [wantWeekly, setWantWeekly, t.weeklyBox, t.weeklyHint],
        ] as const).map(([on, set, label, hint]) => (
          <label key={label} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "var(--ground)", borderRadius: 12, padding: "12px 14px" }}>
            <input type="checkbox" checked={on} onChange={(e) => set(e.target.checked)} style={{ width: 18, height: 18, marginTop: 3, flex: "none", accentColor: "var(--primary)" }} />
            <span className="stack" style={{ gap: 2 }}>
              <strong style={{ fontSize: 15 }}>{label}</strong>
              <span className="small muted">{hint}</span>
            </span>
          </label>
        ))}
      </div>

      {wantGuide && (
        <fieldset className="field" style={{ border: 0, margin: 0, padding: 0 }}>
          <legend style={{ marginBottom: 10, padding: 0 }}>{t.reason}</legend>
          {REASONS.map((r) => (
            <label key={r} style={{ display: "flex", gap: 10, alignItems: "center", minHeight: 32, fontWeight: 400 }}>
              <input type="radio" name="reason" value={r} checked={reason === r} onChange={() => setReason(r)} style={{ width: 18, height: 18, accentColor: "var(--primary)" }} />
              {t.reasons[r]}
            </label>
          ))}
        </fieldset>
      )}

      <p className="tiny subtle">
        {t.weeklyPrivacyLead} <Link href="/privacy">{t.privacy}</Link>.
      </p>

      {error && (
        <p role="alert" className="small" style={{ color: "#9B2C2C", background: "#FBEBEB", borderRadius: 10, padding: "10px 14px" }}>{error}</p>
      )}

      <button type="submit" className="btn" disabled={sending} style={{ height: 52 }}>
        {sending ? t.sending : wantGuide ? t.submit : t.weeklySubmit}
      </button>
      <p className="tiny subtle" style={{ textAlign: "center" }}>{t.note}</p>
    </form>
  );
}
