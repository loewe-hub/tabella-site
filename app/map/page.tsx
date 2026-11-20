import Link from "next/link";
import { Brand } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LangSwitch } from "@/components/LangSwitch";
import { MarkerMap } from "@/components/MarkerMap";
import { landing } from "@/content/landing";
import { toLang } from "@/lib/i18n";

export const metadata = {
  title: "Your blood test map: beyond \"all good?\"",
  description: "How the markers in your blood test connect: heart, metabolism and the rest of your report. Each marker is a signal, with the evidence and a prompt to ask your AI.",
};

export default async function MapPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = landing[lang];
  const signup = lang === "en" ? "/signup" : `/signup?lang=${lang}`;

  return (
    <div lang={lang}>
      <header className="site-header">
        <div className="wrap">
          <Brand href={lang === "en" ? "/" : `/?lang=${lang}`} />
          <div className="nav">
            <Link href={lang === "en" ? "/" : `/?lang=${lang}`}>{t.nav.home}</Link>
            <LangSwitch current={lang} path="/map" />
            <Link href={signup} className="btn btn-small">{t.nav.cta}</Link>
          </div>
        </div>
      </header>
      <main>
        <MarkerMap signupHref={signup} lang={lang} />
      </main>
      <Footer disclaimer={t.disclaimer} />
    </div>
  );
}
