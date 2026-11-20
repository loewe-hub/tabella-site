import { SignupForm } from "@/components/SignupForm";
import { SimplePage } from "@/components/SimplePage";
import { signup } from "@/content/signup";
import { toLang } from "@/lib/i18n";

export const metadata = { title: "Get the free guide" };

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = signup[lang];
  return (
    <SimplePage lang={lang}>
      <div className="stack" style={{ gap: 6 }}>
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 style={{ fontSize: 30, lineHeight: 1.15 }}>{t.h1}</h1>
      </div>
      <SignupForm lang={lang} />
    </SimplePage>
  );
}
