import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { AREA_NAMES, AREA_ORDER, AREAS } from "@/content/areas";
import { landing } from "@/content/landing";
import { learn, TOPIC_AREA, TOPIC_DATES } from "@/content/learn";
import { nodes } from "@/content/map";
import { toLang } from "@/lib/i18n";

export const metadata = {
  title: "Learn: your blood test, area by area",
  description: "Open guides to your blood test by health area, a prompt to read your whole report with your AI, and one small topic a week.",
};

export default async function LearnPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = learn[lang];
  const names = AREA_NAMES[lang];
  const l = landing[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;
  const terms = Object.fromEntries(nodes(lang).map((n) => [n.id, n.term]));

  return (
    <div lang={lang}>
      <SiteHeader lang={lang} path="/learn" />
      <main className="wrap stack" style={{ gap: 48, paddingTop: 48, paddingBottom: 72 }}>
        <div className="stack" style={{ gap: 10, maxWidth: 720 }}>
          <h1 className="display-2">{t.h1}</h1>
          <p className="muted lead">{t.intro}</p>
        </div>

        <Link href={`/learn/your-blood-test${q}#prompt`} className="results-box">
          <div className="stack" style={{ gap: 6, minWidth: 0 }}>
            <p className="eyebrow">{t.resultsTag}</p>
            <h2 className="h3">{t.resultsH}</h2>
            <p>{t.resultsP}</p>
          </div>
          <span className="btn" aria-hidden="true">{t.resultsCta} →</span>
        </Link>

        <section className="stack" style={{ gap: 20 }} aria-label={t.mapH}>
          <div className="stack" style={{ gap: 8, maxWidth: 720 }}>
            <h2 className="display-3">{t.mapH}</h2>
            <p className="muted">{t.mapP}</p>
          </div>
          <div className="area-grid">
            {AREA_ORDER.map((id) => (
              <Link key={id} href={`/learn/${id}${q}`} className={`area-tile area-${id}`}>
                <p className="h3">{names[id].title}</p>
                <p className="muted">{names[id].tagline}</p>
                {AREAS[id].markers.length > 0 && id !== "brain" && (
                  <p className="small subtle">{AREAS[id].markers.map((m) => terms[m]).join(" · ")}</p>
                )}
              </Link>
            ))}
          </div>
          <Link href={`/map${q}`} className="small">{t.mapLink} →</Link>
        </section>

        <section className="learn-pair" aria-label={t.shareH}>
          <div className="tile stack" style={{ gap: 10 }}>
            <p className="eyebrow">{t.askTag}</p>
            <p className="h3">{t.askH}</p>
            <p className="muted">{t.askP}</p>
            <div className="row" style={{ gap: 16, alignItems: "center", marginTop: "auto" }}>
              <Link href={`/ask-better${q}`} className="btn btn-small">{t.askCta}</Link>
              <Link href={`/share-safely${q}`} className="small">{t.shareH} →</Link>
            </div>
          </div>
          <div className="tile stack" style={{ gap: 10 }}>
            <p className="eyebrow">{t.seriesTag}</p>
            <p className="h3">{t.seriesH}</p>
            <p className="muted">{t.seriesP}</p>
            <ol className="learn-issues">
              {t.issues.map((x, i) => (
                <li key={x}>
                  {x} <Link href={`/learn/${TOPIC_AREA[i]}${q}`} className="small subtle">{names[TOPIC_AREA[i]].title} · {TOPIC_DATES[i]}</Link>
                </li>
              ))}
            </ol>
            <Link href={`/signup${q}`} className="btn btn-small" style={{ alignSelf: "flex-start" }}>{t.seriesCta}</Link>
          </div>
        </section>
      </main>
      <Footer disclaimer={l.disclaimer} lang={lang} />
    </div>
  );
}
