import Link from "next/link";
import { Brand } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LangSwitch } from "@/components/LangSwitch";
import { landing } from "@/content/landing";
import { toLang } from "@/lib/i18n";

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = landing[lang];
  const signup = lang === "en" ? "/signup" : `/signup?lang=${lang}`;
  const mapHref = lang === "en" ? "/map" : `/map?lang=${lang}`;

  return (
    <div lang={lang}>
      <header className="site-header">
        <div className="wrap">
          <Brand href={lang === "en" ? "/" : `/?lang=${lang}`} />
          <div className="nav">
            <a href="#how">{t.nav.how}</a>
            <a href="#inside">{t.nav.inside}</a>
            <Link href={mapHref}>{t.nav.map}</Link>
            <a href="#faq">{t.nav.faq}</a>
            <LangSwitch current={lang} path="/" />
            <Link href={signup} className="btn btn-small">{t.nav.cta}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap row" style={{ gap: 48, alignItems: "center", paddingTop: 40, paddingBottom: 72 }}>
          <div className="stack" style={{ flex: "1 1 460px", minWidth: 0, gap: 20 }}>
            <p className="pill" style={{ background: "var(--sky)", color: "var(--primary-dark)" }}>{t.eyebrow}</p>
            <h1 style={{ fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>{t.h1}</h1>
            <p className="muted" style={{ fontSize: 19, maxWidth: 540 }}>{t.sub}</p>
            <div className="row" style={{ gap: 12, alignItems: "center", marginTop: 8 }}>
              <Link href={signup} className="btn">{t.cta}</Link>
              <a href="#how" style={{ fontWeight: 600, padding: "14px 8px" }}>{t.ctaSecondary}</a>
            </div>
            <p className="small subtle">{t.reassurance}</p>
          </div>

          <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", justifyContent: "center" }}>
            <div className="card stack" style={{ width: "100%", maxWidth: 420, gap: 16, borderRadius: 20, boxShadow: "0 24px 60px rgba(14,94,96,0.12)" }}>
              <p className="eyebrow">{t.cardTitle}</p>
              {t.cardItems.map((item, i) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "none", width: 22, height: 22, borderRadius: 6, marginTop: 2,
                      background: i < 2 ? "var(--primary)" : "transparent",
                      border: i < 2 ? "0" : "2px solid #9CC9C3",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    {i < 2 && (
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7.5l2.5 2.5L11 4.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
                    )}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
              <p className="small" style={{ background: "var(--mint)", borderRadius: 12, padding: "14px 16px", color: "var(--primary-dark)" }}>{t.cardNote}</p>
            </div>
          </div>
        </section>

        <section aria-label="Why it matters" style={{ background: "var(--mint)" }}>
          <div className="wrap row" style={{ gap: 32, alignItems: "center", justifyContent: "space-between", paddingTop: 40, paddingBottom: 40 }}>
            <p style={{ flex: "1 1 420px", fontFamily: "var(--font-head)", fontSize: 26, fontWeight: 700, lineHeight: 1.25, color: "var(--primary-dark)" }}>{t.bandQuote}</p>
            <p className="muted" style={{ flex: "1 1 300px", fontSize: 15 }}>
              {t.bandStat}
              <br />
              <span className="tiny subtle">{t.bandSource}</span>
            </p>
          </div>
        </section>

        <section id="how" className="wrap stack" style={{ gap: 40, paddingTop: 88, paddingBottom: 40 }}>
          <h2 style={{ fontSize: 38 }}>{t.howH}</h2>
          <div className="grid-auto">
            {t.steps.map((s, i) => (
              <div key={s.h} className="card stack" style={{ gap: 12 }}>
                <span className="step-num">{i + 1}</span>
                <h3 style={{ fontSize: 20 }}>{s.h}</h3>
                <p className="muted">{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="map" aria-label={t.nav.map} className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="row card" style={{ borderRadius: 28, padding: 48, gap: 40, alignItems: "center", boxShadow: "0 24px 60px rgba(10,69,71,0.08)" }}>
            <div className="stack" style={{ flex: "1 1 380px", minWidth: 0, gap: 16 }}>
              <p className="eyebrow" style={{ color: "#A84F2C" }}>{t.mapEyebrow}</p>
              <h2 style={{ fontSize: "clamp(30px, 3.6vw, 42px)", lineHeight: 1.1 }}>{t.mapH}</h2>
              <p className="muted" style={{ fontSize: 18 }}>{t.mapP}</p>
              <Link href={mapHref} className="btn" style={{ alignSelf: "flex-start" }}>{t.mapCta}</Link>
            </div>
            <Link href={mapHref} aria-label={t.mapCta} className="map-teaser-art" style={{ flex: "1 1 340px", minWidth: 0 }}>
              <span className="c" style={{ left: "4%", background: "rgba(14,94,96,0.10)", borderColor: "rgba(14,94,96,0.35)" }} />
              <span className="c" style={{ right: "4%", background: "rgba(181,85,47,0.10)", borderColor: "rgba(181,85,47,0.35)" }} />
              <span className="n" style={{ left: "8%", top: "34%", background: "#0E5E60", color: "#fff" }}>Lp(a)</span>
              <span className="n" style={{ left: "34%", top: "16%", background: "#17302F", color: "#fff" }}>Blood pressure</span>
              <span className="n" style={{ left: "34%", top: "50%", background: "#fff", color: "#17302F", border: "1.5px solid #17302F" }}>Triglycerides</span>
              <span className="n" style={{ right: "6%", top: "36%", background: "#A84F2C", color: "#fff" }}>HbA1c</span>
              <span className="n" style={{ left: "18%", bottom: 0, background: "#fff", color: "#17302F", border: "1.5px dashed #9DB3B0" }}>Ferritin</span>
              <span className="n" style={{ right: "14%", bottom: 0, background: "#fff", color: "#17302F", border: "1.5px dashed #9DB3B0" }}>Thyroid</span>
            </Link>
          </div>
        </section>

        <section id="inside" className="wrap row" style={{ gap: 48, paddingTop: 48, paddingBottom: 48 }}>
          <div className="stack" style={{ flex: "1 1 320px", minWidth: 0, gap: 16 }}>
            <h2 style={{ fontSize: 38 }}>{t.insideH}</h2>
            <p className="muted">{t.insideP}</p>
          </div>
          <ol className="stack" style={{ flex: "2 1 520px", minWidth: 0, margin: 0, padding: 0, listStyle: "none", gap: 12 }}>
            {t.parts.map((p, i) => (
              <li key={p.h} className="card" style={{ padding: "18px 22px", borderRadius: 14, display: "flex", gap: 16 }}>
                <strong style={{ color: "var(--accent)" }}>0{i + 1}</strong>
                <span><strong>{p.h}</strong>: {p.p}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="Principle" className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="row" style={{ background: "var(--primary)", color: "#fff", borderRadius: 24, padding: 48, gap: 32, alignItems: "center" }}>
            <h2 style={{ flex: "1 1 320px", color: "#fff", fontSize: 34, lineHeight: 1.15, whiteSpace: "pre-line" }}>{t.principleH}</h2>
            <p style={{ flex: "2 1 420px", color: "var(--mint)", fontSize: 18 }}>{t.principleP}</p>
          </div>
        </section>

        <section id="faq" className="wrap stack" style={{ gap: 24, paddingTop: 48, paddingBottom: 48 }}>
          <h2 style={{ fontSize: 38 }}>{t.faqH}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px 32px" }}>
            {t.faq.map((f) => (
              <div key={f.q}>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{f.q}</h3>
                <p className="muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Sign up" className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="row" style={{ background: "var(--sky)", borderRadius: 24, padding: 48, gap: 24, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 style={{ fontSize: 32, marginBottom: 8 }}>{t.finalH}</h2>
              <p className="muted">{t.finalP}</p>
            </div>
            <div className="stack" style={{ gap: 10, alignItems: "center" }}>
              <Link href={signup} className="btn">{t.cta}</Link>
              <Link href={`/signup?mode=weekly${lang === "en" ? "" : `&lang=${lang}`}`} className="small">{landing[lang].weeklyLink}</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer disclaimer={t.disclaimer} />
    </div>
  );
}
