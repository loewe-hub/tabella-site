import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSignup } from "@/components/HeroSignup";
import { EmailPreview } from "@/components/EmailPreview";
import { home } from "@/content/home";
import { SOURCES, story } from "@/content/story";
import { landing } from "@/content/landing";
import { toLang } from "@/lib/i18n";


export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = home[lang];
  const s = story[lang];
  const l = landing[lang];
  const q = lang === "en" ? "" : `lang=${lang}`;
  const signup = q ? `/signup?${q}` : "/signup";

  return (
    <div lang={lang}>
      <SiteHeader lang={lang} path="/" animated />

      <main>
        <section id="top" className="wrap stack hero">
          <h1 aria-label="Curious. Act. Curiact." className="hero-word">
            <span aria-hidden="true">
              Curi<span className="cx-ous">ous. </span>
              <span className="cx-act"><span className="cx-A">A</span><span className="cx-a">a</span>ct</span>
            </span>
          </h1>
          <p className="cx-rise hero-label">{s.heroLabel}</p>
          <p className="cx-rise hero-line">{s.heroLine}</p>
          <p className="cx-rise hero-sub">{s.heroSub}</p>
          <HeroSignup lang={lang} />
          <p className="cx-rise hero-not">{s.heroNot}</p>
        </section>

        <section id="you" aria-label={s.youEyebrow} className="wrap" style={{ paddingBottom: 64 }}>
          <div className="you-grid">
            <div className="stack" style={{ gap: 12 }}>
              <p className="eyebrow">{s.youEyebrow}</p>
              <h2 className="display-3">{s.youH}</h2>
              <p className="muted" style={{ fontSize: "var(--fs-body)" }}>{s.youP}</p>
            </div>
            <div className="tile tile-photo you-tile">
              <img src="/images/curious.webp" alt={t.triad[0].alt} width={960} height={720} loading="eager" className="you-img" />
              <div className="stack" style={{ gap: 4, padding: "16px 20px" }}>
                <p className="stat-n" style={{ fontSize: "var(--fs-num)" }}>{s.youStat}</p>
                <p style={{ fontSize: "var(--fs-body)" }}>{s.youStatText}</p>
                <a href={SOURCES.openai} target="_blank" rel="noopener noreferrer" className="tiny subtle">{s.youSrc}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="compare" aria-label={s.sbsH} style={{ background: "var(--primary-dark)" }}>
          <div className="wrap stack" style={{ paddingTop: 96, paddingBottom: 96, gap: 32 }}>
            <div className="stack" style={{ gap: 10, maxWidth: 760 }}>
              <p className="eyebrow" style={{ color: "var(--apricot)" }}>{s.sbsEyebrow}</p>
              <h2 className="display-2" style={{ color: "#fff" }}>{s.sbsH}</h2>
              <p style={{ color: "var(--mint)", fontSize: "var(--fs-lead)" }}>{s.sbsP}</p>
            </div>
            <div className="sbs">
              {[s.a, s.b].map((side, i) => (
                <div key={side.tag} className={`sbs-col ${i === 1 ? "sbs-good" : ""}`}>
                  <div className="stack" style={{ gap: 4 }}>
                    <p className="eyebrow" style={{ color: i === 1 ? "var(--terracotta)" : "var(--subtle)" }}>{side.tag}</p>
                    <p className="sbs-title">{side.title}</p>
                  </div>
                  <div className="stack" style={{ gap: 10 }}>
                    {side.bubbles.map((bb, j) => (
                      <p key={j} className={`sbs-bubble ${bb.who === "you" ? "sbs-you" : "sbs-ai"}`}>
                        {bb.text.split("[…]").map((part, k, arr) => (
                          <span key={k}>{part}{k < arr.length - 1 && <span className="sbs-gap">[…]</span>}</span>
                        ))}
                      </p>
                    ))}
                  </div>
                  <p className="small" style={{ fontStyle: "italic", color: "var(--muted)" }}>{side.note}</p>
                  <div className="stack" style={{ gap: 8, marginTop: "auto" }}>
                    <p className="tiny" style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{side.outcomeLabel}</p>
                    <div className="row" style={{ gap: 8 }}>
                      {side.outcome.map((o) => <span key={o} className={`sbs-chip ${i === 1 ? "sbs-chip-good" : ""}`}>{o}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="tiny" style={{ color: "#B9CFCC" }}>{s.sbsNote}</p>
            <div className="stack" style={{ gap: 6, maxWidth: 760 }}>
              <p style={{ color: "#fff", fontSize: "var(--fs-lead)" }}>{s.gapP}</p>
              <a href={SOURCES.oxford} target="_blank" rel="noopener noreferrer" className="tiny" style={{ color: "#B9CFCC" }}>{s.gapSrc}</a>
            </div>
          </div>
        </section>

        <section id="get" className="wrap stack" style={{ gap: 24, paddingTop: 64, paddingBottom: 20 }} aria-label={s.pillarsEyebrow}>
          <div className="get-head">
            <div className="stack" style={{ gap: 12, maxWidth: 760 }}>
              <p className="eyebrow">{s.pillarsEyebrow}</p>
              <h2 className="display-2">{s.pillarsH}</h2>
            </div>
            <EmailPreview p={s.preview} />
          </div>
          <div className="grid-auto">
            {s.pillars.map((x, i) => (
              <div key={x.h} className="tile stack pillar" style={{ gap: 14 }}>
                <p className="pillar-n">{i + 1}</p>
                <p className="tile-h">{x.h}</p>
                <p className="muted" style={{ fontSize: "var(--fs-body)" }}>{x.p}</p>
                <div className="row" style={{ gap: 12, alignItems: "center", marginTop: "auto", justifyContent: "space-between" }}>
                  <span className="tiny" style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--terracotta)" }}>{x.tag}</span>
                  {x.cta && x.link && <Link href={x.link === "share" ? (q ? `/share-safely?${q}` : "/share-safely") : x.link === "learn" ? (q ? `/learn?${q}` : "/learn") : x.link === "ask" ? (q ? `/ask-better?${q}` : "/ask-better") : signup} className="btn btn-small">{x.cta}</Link>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="decide" aria-label={s.decideEyebrow} className="wrap" style={{ paddingBottom: 64 }}>
          <div className="card-lg decide-band">
            <img src="/images/decide.webp" alt={t.triad[2].alt} width={960} height={720} loading="lazy" className="decide-band-img" />
            <div className="stack" style={{ gap: 10, minWidth: 0 }}>
              <p className="eyebrow">{s.decideEyebrow}</p>
              <h2 className="display-3">{s.decideH}</h2>
              <p className="muted" style={{ fontSize: "var(--fs-body)" }}>{s.decideP}</p>
              <a href={SOURCES.oxford} target="_blank" rel="noopener noreferrer" className="tiny subtle">{s.decideSrc}</a>
            </div>
          </div>
        </section>

        <section aria-label={t.principlesH} className="wrap" style={{ paddingBottom: 64 }}>
          <div className="stack" style={{ gap: 18 }}>
            <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.principlesH}</h2>
            <div className="grid-tiles">
              {t.principles.map((x) => (
                <div key={x.h} className="principle-card stack" style={{ gap: 8 }}>
                  <p className="principle-h">{x.h}</p>
                  <p className="muted" style={{ fontSize: "var(--fs-body)" }}>{x.p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="tile stack" style={{ gap: 12, marginTop: 32, background: "transparent", border: "1.5px solid var(--border)" }}>
            <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.notH}</h2>
            <div className="grid-tiles" style={{ gap: "8px 24px" }}>
              {[...t.not, s.notEmergency].map((x) => <p key={x} className="claim-row"><span aria-hidden="true" className="mark-no">✕</span>{x}</p>)}
            </div>
          </div>
        </section>

        <section id="act" aria-label={s.actH} className="wrap" style={{ paddingBottom: 48 }}>
          <div className="row card-lg" style={{ gap: 28, alignItems: "center", justifyContent: "space-between", padding: "40px 48px" }}>
            <div className="stack" style={{ flex: "1 1 420px", minWidth: 0, gap: 10 }}>
              <h2 className="display-2">{s.actH}</h2>
              <p className="muted" style={{ fontSize: "var(--fs-lead)" }}>{s.actP}</p>
            </div>
            <Link href={signup} className="btn btn-lg">{s.actCta}</Link>
          </div>
        </section>

      </main>

      <Footer disclaimer={l.disclaimer} lang={lang} />
    </div>
  );
}
