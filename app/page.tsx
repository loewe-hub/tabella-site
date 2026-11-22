import Link from "next/link";
import { Brand } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LangSwitch } from "@/components/LangSwitch";
import { home } from "@/content/home";
import { landing } from "@/content/landing";
import { nodes } from "@/content/map";
import { toLang } from "@/lib/i18n";

const ICONS = [
  <svg key="c" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="18" cy="18" r="11" fill="none" stroke="#B5552F" strokeWidth="2.5" /><path d="M26 26l8 8" stroke="#B5552F" strokeWidth="2.5" strokeLinecap="round" /></svg>,
  <svg key="a" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 28l10-10 6 6 10-12" fill="none" stroke="#0E5E60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M27 12h7v7" fill="none" stroke="#0E5E60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="d" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="16" r="5" fill="none" stroke="#0A4547" strokeWidth="2.5" /><circle cx="27" cy="16" r="5" fill="none" stroke="#0A4547" strokeWidth="2.5" /><path d="M6 33c1-5 4-8 8-8s7 3 8 8M19 33c1-5 4-8 8-8s7 3 8 8" fill="none" stroke="#0A4547" strokeWidth="2.5" strokeLinecap="round" /></svg>,
];
const PHOTOS = ["curious", "act", "decide"];
const TRIAD_COLORS = ["#B5552F", "#0E5E60", "#0A4547"];

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = home[lang];
  const l = landing[lang];
  const q = lang === "en" ? "" : `lang=${lang}`;
  const signup = q ? `/signup?${q}` : "/signup";
  const weekly = `/signup?mode=weekly${q ? `&${q}` : ""}`;
  const mapHref = q ? `/map?${q}` : "/map";
  const mk = Object.fromEntries(nodes(lang).map((n) => [n.id, n.name]));

  return (
    <div lang={lang}>
      <header className="site-header sticky">
        <div className="wrap">
          <Brand href={q ? `/?${q}` : "/"} animated />
          <nav aria-label="Main" className="nav">
            <a href="#how" className="hide-sm">{t.nav.how}</a>
            <a href="#topics" className="hide-sm">{t.nav.topics}</a>
            <Link href={mapHref}>{t.nav.map}</Link>
            <LangSwitch current={lang} path="/" />
            <Link href={signup} className="btn btn-small btn-outline hide-sm">{t.nav.cta}</Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="wrap stack hero">
          <h1 aria-label="Curious. Act. Curiact." className="hero-word">
            <span aria-hidden="true">
              Curi<span className="cx-ous">ous. </span>
              <span className="cx-act"><span className="cx-A">A</span><span className="cx-a">a</span>ct</span>
            </span>
          </h1>
          <p className="cx-rise hero-sub">{t.heroSub}</p>
          <div className="cx-rise row" style={{ gap: 12, justifyContent: "center", marginTop: 8 }}>
            <Link href={signup} className="btn btn-lg">{t.cta}</Link>
            <a href="#how" className="btn-text">{t.ctaSecondary}</a>
          </div>
          <p className="cx-rise small subtle">{t.reassurance}</p>
        </section>

        <section id="how" className="wrap" style={{ paddingBottom: 88 }} aria-label={t.nav.how}>
          <div className="grid-auto">
            {t.triad.map((x, i) => (
              <div key={x.k} className="tile tile-photo stack" style={{ gap: 0 }}>
                <img src={`/images/${PHOTOS[i]}.webp`} alt={x.alt} width={960} height={720} loading={i === 0 ? "eager" : "lazy"} className="tile-img" />
                <div className="stack" style={{ gap: 12, padding: "24px 28px 28px" }}>
                  <div className="row" style={{ gap: 10, alignItems: "center" }}>
                    {ICONS[i]}
                    <p className="eyebrow" style={{ color: TRIAD_COLORS[i] }}>{x.k}</p>
                  </div>
                  <p className="tile-h">{x.h}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="why" aria-label={t.whyEyebrow} className="wrap stack" style={{ gap: 28, paddingBottom: 96 }}>
          <div className="stack" style={{ gap: 12, maxWidth: 760 }}>
            <p className="eyebrow">{t.whyEyebrow}</p>
            <h2 className="display-2">{t.whyH}</h2>
          </div>
          <div className="grid-auto">
            {t.stats.map((x) => (
              <div key={x.n} className="tile stack" style={{ gap: 10 }}>
                <p className="stat-n">{x.n}</p>
                <p style={{ fontSize: 17 }}>{x.text}</p>
                <a href={x.href} target="_blank" rel="noopener noreferrer" className="tiny subtle" style={{ marginTop: "auto" }}>{x.src}</a>
              </div>
            ))}
          </div>
          <p className="why-line">{t.whyLine}</p>
        </section>

        <section aria-label={t.chatH} style={{ background: "var(--primary)" }}>
          <div className="wrap row" style={{ paddingTop: 96, paddingBottom: 96, gap: 56, alignItems: "center" }}>
            <div className="stack" style={{ flex: "1 1 360px", minWidth: 0, gap: 18 }}>
              <h2 className="display-2" style={{ color: "#fff" }}>{t.chatH}</h2>
              <p style={{ color: "var(--mint)", fontSize: 19 }}>{t.chatP}</p>
            </div>
            <div className="stack" style={{ flex: "1 1 440px", minWidth: 0, gap: 14 }} aria-hidden="true">
              <div className="bubble bubble-user">{t.bubbleUser}</div>
              <div className="bubble bubble-ai">{t.bubbleAi}</div>
              <div className="stack" style={{ alignSelf: "flex-end", maxWidth: 340, background: "var(--ground)", borderRadius: 18, padding: "16px 20px", gap: 8 }}>
                <p className="eyebrow" style={{ fontSize: 12 }}>{t.checkTitle}</p>
                {t.checks.map((c) => <p key={c} style={{ fontSize: 15 }}>☐ {c}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Statement" className="wrap" style={{ paddingTop: 112, paddingBottom: 112, textAlign: "center" }}>
          <p className="statement">{t.statement[0]}<span style={{ color: "var(--terracotta)" }}>{t.statement[1]}</span>{t.statement[2]}</p>
        </section>

        <section id="map" aria-label={t.nav.map} className="wrap" style={{ paddingBottom: 104 }}>
          <div className="row card-lg" style={{ gap: 40, alignItems: "center" }}>
            <div className="stack" style={{ flex: "1 1 380px", minWidth: 0, gap: 16 }}>
              <p className="eyebrow">{l.mapEyebrow}</p>
              <h2 className="display-2">{l.mapH}</h2>
              <p className="muted" style={{ fontSize: 18 }}>{l.mapP}</p>
              <Link href={mapHref} className="btn btn-lg" style={{ alignSelf: "flex-start" }}>{l.mapCta}</Link>
            </div>
            <Link href={mapHref} aria-label={l.mapCta} className="map-teaser-art" style={{ flex: "1 1 340px", minWidth: 0 }}>
              <span className="c" style={{ left: "4%", background: "rgba(14,94,96,0.10)", borderColor: "rgba(14,94,96,0.35)" }} />
              <span className="c" style={{ right: "4%", background: "rgba(181,85,47,0.10)", borderColor: "rgba(181,85,47,0.35)" }} />
              <span className="n" style={{ left: "8%", top: "34%", background: "#0E5E60", color: "#fff" }}>Lp(a)</span>
              <span className="n" style={{ left: "34%", top: "16%", background: "#1E2B2A", color: "#fff" }}>{mk.bp}</span>
              <span className="n" style={{ left: "34%", top: "50%", background: "#fff", color: "#1E2B2A", border: "1.5px solid #1E2B2A" }}>{mk.tg}</span>
              <span className="n" style={{ right: "6%", top: "36%", background: "#A84F2C", color: "#fff" }}>{mk.glucose}</span>
              <span className="n" style={{ left: "18%", bottom: 0, background: "#fff", color: "#1E2B2A", border: "1.5px dashed #CFC4B6" }}>{mk.iron}</span>
              <span className="n" style={{ right: "14%", bottom: 0, background: "#fff", color: "#1E2B2A", border: "1.5px dashed #CFC4B6" }}>{mk.thyroid}</span>
            </Link>
          </div>
        </section>

        <section aria-label={t.isH} className="wrap" style={{ paddingBottom: 96 }}>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div className="tile stack" style={{ gap: 14 }}>
              <h2 style={{ fontSize: 26 }}>{t.isH}</h2>
              {t.is.map((x) => <p key={x} className="claim-row"><span aria-hidden="true" className="mark-yes">✓</span>{x}</p>)}
            </div>
            <div className="tile stack" style={{ gap: 14, background: "transparent", border: "1.5px solid var(--border)" }}>
              <h2 style={{ fontSize: 26 }}>{t.notH}</h2>
              {t.not.map((x) => <p key={x} className="claim-row"><span aria-hidden="true" className="mark-no">✕</span>{x}</p>)}
            </div>
          </div>
          <div className="stack" style={{ gap: 18, marginTop: 40 }}>
            <h2 style={{ fontSize: 26 }}>{t.principlesH}</h2>
            <div className="grid-tiles">
              {t.principles.map((x) => (
                <div key={x.h} className="principle-card stack" style={{ gap: 8 }}>
                  <p className="principle-h">{x.h}</p>
                  <p className="muted" style={{ fontSize: 16 }}>{x.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="topics" aria-label={t.topicsH} className="wrap stack" style={{ gap: 28, paddingBottom: 96 }}>
          <h2 style={{ fontSize: 36 }}>{t.topicsH}</h2>
          <div className="grid-tiles">
            {t.tiles.map((x) =>
              x.kind === "guide" ? (
                <Link key={x.title} href={signup} className="topic topic-guide">
                  <span className="eyebrow" style={{ color: "var(--apricot)" }}>{x.tag}</span>
                  <span className="topic-h">{x.title}</span>
                </Link>
              ) : (
                <div key={x.title} className={`topic ${x.kind === "soon" ? "topic-soon" : ""}`}>
                  <span className="eyebrow" style={{ color: x.kind === "soon" ? "#7A3A1F" : "var(--subtle)" }}>{x.tag}</span>
                  <span className="topic-h">{x.title}</span>
                </div>
              ),
            )}
          </div>
        </section>

        <section aria-label={t.weeklyH} className="wrap" style={{ paddingBottom: 48 }}>
          <div className="row card-lg" style={{ gap: 32, alignItems: "center", justifyContent: "space-between", padding: 56 }}>
            <div className="stack" style={{ flex: "1 1 420px", minWidth: 0, gap: 12 }}>
              <h2 className="display-2">{t.weeklyH}</h2>
              <p className="muted" style={{ fontSize: 19 }}>{t.weeklyP}</p>
            </div>
            <Link href={weekly} className="btn btn-lg">{t.weeklyCta}</Link>
          </div>
        </section>

        <section id="free" aria-label={t.freeH} className="wrap" style={{ paddingBottom: 96 }}>
          <div className="stack" style={{ gap: 10, maxWidth: 720 }}>
            <h2 style={{ fontSize: 26 }}>{t.freeH}</h2>
            <p className="muted" style={{ fontSize: 18 }}>{t.freeP}</p>
          </div>
        </section>
      </main>

      <Footer disclaimer={l.disclaimer} lang={lang} />
    </div>
  );
}
