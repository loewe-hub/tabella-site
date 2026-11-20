import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { signup } from "@/content/signup";
import { toLang } from "@/lib/i18n";

// Brevo redirects here after someone clicks the double opt-in link.
export const metadata = { title: "You're in" };

export default async function Confirmed({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = signup[lang];
  return (
    <SimplePage lang={lang}>
      <h1 style={{ fontSize: 30 }}>{t.confirmedH}</h1>
      <p className="muted">{t.confirmedP}</p>
      <Link href={lang === "en" ? "/" : `/?lang=${lang}`} className="small">{t.back}</Link>
    </SimplePage>
  );
}
