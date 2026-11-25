"use client";

// Area guides in the cholesterol guide's format: teal header with "Read in" / "Prompt in",
// six numbered sections, a printable checklist of questions for the doctor.
import { track } from "@vercel/analytics";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AREA_NAMES, AREA_ORDER, AREA_UI, AREAS, type AreaId } from "@/content/areas";
import { learn, TOPIC_DATES } from "@/content/learn";
import { nodes } from "@/content/map";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function save(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode etc. */
  }
}

function Switch({ label, value, onChange }: { label: string; value: Lang; onChange: (l: Lang) => void }) {
  return (
    <div role="group" aria-label={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="tiny" style={{ color: "var(--mint)" }}>{label}</span>
      <div className="lang-switch dark">
        {LANGS.map((l) => (
          <button key={l} type="button" className={l === value ? "on" : undefined} aria-pressed={l === value} onClick={() => onChange(l)}>
            {LANG_LABEL[l]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AreaGuide({ id, initialLang }: { id: AreaId; initialLang: Lang }) {
  const a = AREAS[id];
  const TICKS = `curiact-area-${id}:ticks`;
  const PLANG = "curiact-guides:promptLang";
  const [lang, setLang] = useState<Lang>(initialLang);
  const [plang, setPlang] = useState<Lang>(initialLang);
  const [ticks, setTicks] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);
  const t = AREA_UI[lang];
  const names = AREA_NAMES[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;
  const marks = nodes(lang).filter((n) => a.markers.includes(n.id));

  useEffect(() => {
    setTicks(load(TICKS, {}));
    setPlang(load<Lang>(PLANG, initialLang));
  }, [TICKS, initialLang]);

  function changePlang(l: Lang) {
    setPlang(l);
    save(PLANG, l);
  }
  function toggle(qid: string) {
    const next = { ...ticks, [qid]: !ticks[qid] };
    setTicks(next);
    save(TICKS, next); // stays in this browser, never sent
  }
  async function copy(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 2500);
    track("copy", { item: `area-${id}-${key}`, promptLang: plang });
  }

  const done = a.questions.filter((x) => ticks[x.id]).length;
  const EnOnly = () => (lang === "en" ? null : <p className="tiny" style={{ background: "var(--sky)", borderRadius: 10, padding: "8px 12px", color: "var(--primary-dark)" }}>{t.enOnly}</p>);

  return (
    <div lang={lang}>
      <header style={{ background: "var(--primary)", color: "#fff" }}>
        <div className="narrow stack" style={{ paddingTop: 24, paddingBottom: 40, gap: 18 }}>
          <div className="row" style={{ alignItems: "center", gap: 10, justifyContent: "space-between" }}>
            <Link href={`/${q}`} style={{ textDecoration: "none", fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "var(--fs-h3)", letterSpacing: "-0.03em", color: "#fff" }}>Curi<span style={{ color: "var(--apricot)" }}>act</span></Link>
            <Link href={`/learn${q}`} className="small no-print" style={{ color: "var(--mint)" }}>← {t.back}</Link>
          </div>
          <div className="row no-print" style={{ gap: "12px 28px", alignItems: "center" }}>
            <Switch label={t.read} value={lang} onChange={setLang} />
            <Switch label={t.promptIn} value={plang} onChange={changePlang} />
          </div>
          <p className="tiny" style={{ marginTop: 12, color: "#BFE3DA" }}>{t.tag} · {names[id].title}</p>
          <h1 lang="en" style={{ color: "#fff", fontSize: "var(--fs-h2)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>{a.h1}</h1>
          <p lang="en" style={{ fontSize: "var(--fs-lead)", color: "var(--mint)" }}>{a.sub}</p>
        </div>
      </header>

      <main className="narrow stack" style={{ paddingTop: 32, paddingBottom: 48, gap: 28 }}>
        <EnOnly />

        <section className="card stack" style={{ gap: 14 }}>
          <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.missH}</h2>
          <ol lang="en" className="stack" style={{ margin: 0, padding: 0, listStyle: "none", gap: 12 }}>
            {a.miss.map(([head, body], i) => (
              <li key={head} style={{ display: "flex", gap: 14 }}>
                <strong style={{ flex: "none", width: 26, color: "var(--accent)" }}>0{i + 1}</strong>
                <span><strong>{head}</strong> {body}</span>
              </li>
            ))}
          </ol>
        </section>

        {(marks.length > 0 || id === "your-blood-test") && (
          <section className="card stack" style={{ gap: 12 }}>
            <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.markersH}</h2>
            {id === "your-blood-test" ? (
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {a.connects.map((c) => (
                  <li key={c.to} style={{ marginBottom: 6 }}><Link href={`/learn/${c.to}${q}`}><strong>{names[c.to].title}</strong></Link>: <span lang="en">{c.t}</span></li>
                ))}
              </ul>
            ) : (
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }} className="stack">
                {marks.map((m) => (
                  <li key={m.id} className="stack" style={{ gap: 4, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
                    <p><strong style={{ color: "var(--primary-dark)" }}>{m.name}</strong> <span className="small subtle">{m.term}</span></p>
                    <p>{m.what}</p>
                    <p className="small muted">{t.markersAsk}: <em>“{m.ask}”</em></p>
                  </li>
                ))}
              </ul>
            )}
            <Link href={`/map${q}`} className="small" style={{ fontWeight: 700 }}>{t.mapLink}</Link>
          </section>
        )}

        <section className="card stack" style={{ gap: 12 }}>
          <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.connectsH}</h2>
          {a.connectsNote ? <p lang="en">{a.connectsNote}</p> : <ul lang="en" style={{ margin: 0, paddingLeft: 20 }}>
            {a.connects.map((c) => (
              <li key={c.to} style={{ marginBottom: 6 }}><Link href={`/learn/${c.to}${q}`}><strong>{names[c.to].title}</strong></Link>: {c.t}</li>
            ))}
          </ul>}
        </section>

        <section id="prompt" className="card stack" style={{ gap: 14 }}>
          <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.promptH}</h2>
          <p className="muted">{t.promptIntro}</p>
          <div className="stack" style={{ background: "var(--mint)", borderRadius: 14, padding: "20px 22px", gap: 14 }}>
            <p lang={plang} style={{ fontSize: "var(--fs-lead)", fontWeight: 700, color: "var(--primary-dark)" }}>&ldquo;{a.promptShort[plang]}&rdquo;</p>
            <details>
              <summary className="small" style={{ cursor: "pointer", fontWeight: 700, color: "var(--primary)" }}>{t.showFull}</summary>
              <p lang={plang} style={{ color: "var(--primary-dark)", marginTop: 8, whiteSpace: "pre-line" }}>{a.prompt[plang]}</p>
            </details>
            <div className="row no-print" style={{ gap: 12, alignItems: "center" }}>
              <button type="button" className="btn" onClick={() => copy("prompt", a.prompt[plang])}>{copied === "prompt" ? t.copied : t.copyPrompt}</button>
            </div>
          </div>
          <p className="small muted">{t.shareLine} <Link href={`/share-safely${q}`}>{t.shareLink}</Link></p>
          <div className="stack" style={{ gap: 10, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
            <p style={{ fontWeight: 700, color: "var(--primary-dark)" }}>{t.followH}</p>
            <p className="small muted">{t.followIntro}</p>
            <details>
              <summary className="small" style={{ cursor: "pointer", fontWeight: 700, color: "var(--primary)" }}>{t.showFull}</summary>
              <p lang={plang} style={{ color: "var(--primary-dark)", marginTop: 8 }}>{a.followUp[plang]}</p>
            </details>
            <button type="button" className="btn btn-small btn-soft no-print" style={{ alignSelf: "flex-start" }} onClick={() => copy("follow", a.followUp[plang])}>{copied === "follow" ? t.copied : t.copyFollow}</button>
          </div>
        </section>

        <section className="card stack" style={{ gap: 16 }}>
          <div className="row" style={{ gap: "8px 16px", alignItems: "baseline", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.checkH}</h2>
            <span className="pill tiny" style={{ background: "var(--sky)", color: "var(--primary-dark)" }}>
              {t.progress.replace("{n}", String(done)).replace("{t}", String(a.questions.length))}
            </span>
          </div>
          <p className="muted">{t.checkIntro}</p>
          {a.questions.map((item) => (
            <div key={item.id} className={`check-row${ticks[item.id] ? " done" : ""}`}>
              <label>
                <input type="checkbox" checked={!!ticks[item.id]} onChange={() => toggle(item.id)} />
                <span className="stack" style={{ gap: 2 }}>
                  <strong lang="en" style={{ color: "var(--primary-dark)" }}>{item.label}</strong>
                  <em lang={plang} className="muted">“{item.q[plang]}”</em>
                </span>
              </label>
              <button type="button" className="btn btn-small btn-soft no-print" onClick={() => copy(item.id, item.q[plang])} aria-label={`${t.copy}: ${item.label}`}>
                {copied === item.id ? t.copied : t.copy}
              </button>
            </div>
          ))}
          <p className="tiny subtle">{t.saved}</p>
        </section>

        <section className="card stack no-print" style={{ gap: 14 }}>
          <h2 style={{ fontSize: "var(--fs-h3)" }}>{t.deeperH}</h2>
          {a.deeper && (
            <Link href={`${a.deeper.href}${q}`} className="results-box" lang="en">
              <div className="stack" style={{ gap: 6, minWidth: 0 }}>
                <p className="h3">{a.deeper.label}</p>
                <p>{a.deeper.p}</p>
              </div>
              <span className="btn" aria-hidden="true">→</span>
            </Link>
          )}
          {a.topics.length > 0 && (
            <>
              <p className="eyebrow">{t.topicsH}</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {a.topics.map((n) => <li key={n} style={{ marginBottom: 4 }}>{learn[lang].issues[n - 1]} <span className="small subtle">· {TOPIC_DATES[n - 1]}</span></li>)}
              </ul>
            </>
          )}
          <p className="muted">{t.deeperP}</p>
          <Link href={`/signup${q}`} className="btn" style={{ alignSelf: "flex-start" }}>{t.deeperCta}</Link>
        </section>

        <div className="no-print">
          <button type="button" className="btn btn-outline" onClick={() => window.print()}>{t.print}</button>
        </div>

        <nav className="area-next no-print" aria-label={t.back}>
          {AREA_ORDER.filter((x) => x !== id).map((x) => (
            <Link key={x} href={`/learn/${x}${q}`} className="pill-link">{names[x].title}</Link>
          ))}
        </nav>

        <footer className="stack" style={{ gap: 10, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <p className="small subtle">{t.footer}</p>
          <p className="small" style={{ fontWeight: 700, color: "var(--primary-dark)" }}>{t.emergency}</p>
        </footer>
      </main>
    </div>
  );
}
