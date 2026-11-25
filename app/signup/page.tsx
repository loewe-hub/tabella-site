import { SignupForm } from "@/components/SignupForm";
import { SimplePage } from "@/components/SimplePage";
import { signup } from "@/content/signup";
import { toLang } from "@/lib/i18n";

export const metadata = { title: "Get it weekly" };

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ lang?: string; mode?: string }> }) {
  const sp = await searchParams;
  const lang = toLang(sp.lang);
  const mode = "weekly" as const; // one sign-up since 25 Nov
  const t = signup[lang];
  return (
    <SimplePage lang={lang}>
      <div className="stack" style={{ gap: 6 }}>
        <p className="eyebrow">{t.weeklyEyebrow}</p>
        <h1 style={{ fontSize: "var(--fs-h2)", lineHeight: 1.15 }}>{t.weeklyH1}</h1>
        <p className="muted" style={{ marginTop: 6 }}>{t.weeklyP}</p>
      </div>
      <SignupForm lang={lang} mode={mode} />
    </SimplePage>
  );
}
