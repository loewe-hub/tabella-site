import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { signup } from "@/content/signup";
import { toLang } from "@/lib/i18n";

export const metadata = { title: "Check your inbox" };

export default async function CheckInbox({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = signup[lang];
  return (
    <SimplePage lang={lang}>
      <span style={{ width: 64, height: 64, borderRadius: 20, background: "var(--mint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="4" y="8" width="24" height="17" rx="3" stroke="#0E5E60" strokeWidth="2.2" fill="none" />
          <path d="M5 10l11 8 11-8" stroke="#0E5E60" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
        </svg>
      </span>
      <h1 style={{ fontSize: 30 }}>{t.inboxH}</h1>
      <p className="muted">{t.inboxP}</p>
      <p className="small subtle">{t.inboxSpam}</p>
      <Link href={lang === "en" ? "/" : `/?lang=${lang}`} className="small">{t.back}</Link>
    </SimplePage>
  );
}
