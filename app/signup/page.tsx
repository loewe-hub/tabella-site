import { SignupForm } from "@/components/SignupForm";
import { SimplePage } from "@/components/SimplePage";
import { signup } from "@/content/signup";
import { toLang } from "@/lib/i18n";

export const metadata = { title: "Get the free guide" };

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ lang?: string; mode?: string }> }) {
  const sp = await searchParams;
  const lang = toLang(sp.lang);
  const mode = sp.mode === "weekly" ? "weekly" : "guide";
  const t = signup[lang];
  return (
    <SimplePage lang={lang}>
      <div className="stack" style={{ gap: 6 }}>
        <p className="eyebrow">{mode === "weekly" ? t.weeklyEyebrow : t.eyebrow}</p>
        <h1 style={{ fontSize: 30, lineHeight: 1.15 }}>{mode === "weekly" ? t.weeklyH1 : t.h1}</h1>
        {mode === "weekly" && <p className="muted" style={{ marginTop: 6 }}>{t.weeklyP}</p>}
      </div>
      <SignupForm lang={lang} mode={mode} />
    </SimplePage>
  );
}
