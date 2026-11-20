import Link from "next/link";
import { cookies } from "next/headers";
import { Guide } from "@/components/Guide";
import { SimplePage } from "@/components/SimplePage";
import { ui } from "@/content/guide";
import { toLang } from "@/lib/i18n";
import { ACCESS_COOKIE, isPreviewMode, verifyGuideToken } from "@/lib/token";

export const metadata = { title: "Guide 01 · Cholesterol", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function GuidePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const preview = isPreviewMode();
  const token = (await cookies()).get(ACCESS_COOKIE)?.value;

  if (!preview && !verifyGuideToken(token)) {
    const t = ui[lang];
    return (
      <SimplePage lang={lang}>
        <h1 style={{ fontSize: 28 }}>{t.deniedH}</h1>
        <p className="muted">{t.deniedP}</p>
        <Link href={lang === "en" ? "/signup" : `/signup?lang=${lang}`} className="btn" style={{ alignSelf: "flex-start" }}>{t.deniedCta}</Link>
      </SimplePage>
    );
  }

  return <Guide initialLang={lang} preview={preview} />;
}
