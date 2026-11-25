import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { landing } from "@/content/landing";
import { learn } from "@/content/learn";
import { toLang } from "@/lib/i18n";

export const metadata = {
  title: "Learn: your blood test and your AI",
  description: "Plain-language guides and a weekly series on your blood test, each with a prompt to try with your AI.",
};

export default async function LearnPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = learn[lang];
  const l = landing[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;
  const hrefs = { share: `/share-safely${q}`, map: `/map${q}`, signup: `/signup${q}` };
  const weekly = `/signup?mode=weekly${lang === "en" ? "" : `&lang=${lang}`}`;

  return (
    <div lang={lang}>
      <SiteHeader lang={lang} path="/learn" />
      <main className="wrap stack" style={{ gap: 40, paddingTop: 48, paddingBottom: 72 }}>
        <div className="stack" style={{ gap: 10, maxWidth: 720 }}>
          <h1 className="display-2">{t.h1}</h1>
          <p className="muted" style={{ fontSize: 19 }}>{t.intro}</p>
        </div>

        <div className="grid-auto">
          {t.cards.map((c) => (
            <div key={c.h} className="tile stack" style={{ gap: 12 }}>
              <p className="eyebrow">{c.tag}</p>
              <p className="tile-h">{c.h}</p>
              <p className="muted" style={{ fontSize: 16 }}>{c.p}</p>
              {c.cta && c.href && <Link href={hrefs[c.href]} className="btn btn-small" style={{ alignSelf: "flex-start", marginTop: "auto" }}>{c.cta}</Link>}
            </div>
          ))}
        </div>

        <section className="card-lg stack" style={{ gap: 16 }} aria-label={t.seriesH}>
          <p className="eyebrow">{t.seriesTag}</p>
          <h2 className="display-3">{t.seriesH}</h2>
          <p className="muted" style={{ fontSize: 17 }}>{t.seriesP}</p>
          <ol className="learn-issues">
            {t.issues.map((x) => <li key={x}>{x}</li>)}
          </ol>
          <Link href={weekly} className="btn" style={{ alignSelf: "flex-start" }}>{t.seriesCta}</Link>
        </section>
      </main>
      <Footer disclaimer={l.disclaimer} lang={lang} />
    </div>
  );
}
