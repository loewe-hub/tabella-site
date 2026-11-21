"use client";

import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import { GUIDELINE_URL, checklist, glossary, miss, prompt, promptShort, situation, ui, visit } from "@/content/guide";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";

const TICKS_KEY = "curiact-guide01:ticks";
const PLANG_KEY = "curiact-guide01:promptLang";

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

function EnOnly({ lang }: { lang: Lang }) {
  if (lang === "en") return null;
  return <p className="tiny" style={{ background: "var(--sky)", borderRadius: 10, padding: "8px 12px", color: "var(--primary-dark)" }}>{ui[lang].enOnly}</p>;
}

export function Guide({ initialLang, preview }: { initialLang: Lang; preview: boolean }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [plang, setPlang] = useState<Lang>(initialLang);
  const [ticks, setTicks] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);
  const t = ui[lang];

  useEffect(() => {
    setTicks(load(TICKS_KEY, {}));
    setPlang(load<Lang>(PLANG_KEY, initialLang));
  }, [initialLang]);

  function changePlang(l: Lang) {
    setPlang(l);
    save(PLANG_KEY, l);
  }
  function toggle(id: string) {
    const next = { ...ticks, [id]: !ticks[id] };
    setTicks(next);
    save(TICKS_KEY, next); // stays in this browser, never sent
  }
  async function copy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard blocked: the text is still selectable on the page */
    }
    setCopied(id);
    setTimeout(() => setCopied((c) => (c === id ? null : c)), 2500);
    track("copy", { item: id, promptLang: plang }); // anonymous, aggregate only
  }

  const done = checklist.filter((c) => ticks[c.id]).length;
  const buckets = (["b1", "b2", "b3", "b4"] as const).map((b) => ({ id: b, title: t[b], items: checklist.filter((c) => c.bucket === b) }));

  return (
    <div lang={lang}>
      <header style={{ background: "var(--primary)", color: "#fff" }}>
        <div className="narrow stack" style={{ paddingTop: 24, paddingBottom: 40, gap: 18 }}>
          <div className="row" style={{ alignItems: "center", gap: 10 }}>
            <a href="/" style={{ textDecoration: "none", fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", color: "#fff" }}>Curi<span style={{ color: "var(--apricot)" }}>act</span></a>
            <span className="tiny" style={{ marginLeft: "auto", color: "var(--mint)" }}>{preview ? t.preview : t.access}</span>
          </div>
          <div className="row no-print" style={{ gap: "12px 28px", alignItems: "center" }}>
            <Switch label={t.read} value={lang} onChange={setLang} />
            <Switch label={t.prompt} value={plang} onChange={changePlang} />
          </div>
          <p className="tiny" style={{ marginTop: 12, color: "#BFE3DA" }}>{t.tag}</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>{t.h1}</h1>
          <p style={{ fontSize: 18, color: "var(--mint)" }}>{t.sub}</p>
          <p className="small" style={{ color: "#BFE3DA" }}>{t.forWho}</p>
        </div>
      </header>

      <main className="narrow stack" style={{ paddingTop: 32, paddingBottom: 48, gap: 28 }}>
        <section className="card stack" style={{ gap: 14 }}>
          <h2 style={{ fontSize: 24 }}>{t.missH}</h2>
          <ol className="stack" style={{ margin: 0, padding: 0, listStyle: "none", gap: 12 }}>
            {miss[lang].map(([head, body], i) => (
              <li key={head} style={{ display: "flex", gap: 14 }}>
                <strong style={{ flex: "none", width: 26, color: "var(--accent)" }}>0{i + 1}</strong>
                <span><strong>{head}</strong> {body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="card stack" style={{ gap: 12 }}>
          <h2 style={{ fontSize: 24 }}>{t.situationH}</h2>
          <EnOnly lang={lang} />
          <p className="muted">{t.situationP}</p>
          <ol style={{ margin: 0, paddingLeft: 22 }} className="stack">
            {situation.map((s) => <li key={s} style={{ marginBottom: 6 }}>{s}</li>)}
          </ol>
        </section>

        <section className="card stack" style={{ gap: 12 }}>
          <h2 style={{ fontSize: 24 }}>{t.reportH}</h2>
          <p className="muted">{t.reportP}</p>
          <p style={{ background: "var(--mint)", borderRadius: 12, padding: "14px 16px", color: "var(--primary-dark)" }}>
            <strong>{t.rangeHead}</strong> {t.rangeBody}{" "}
            <a href={GUIDELINE_URL} target="_blank" rel="noopener noreferrer">{t.guideline}</a>
          </p>
          <EnOnly lang={lang} />
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {glossary.map(([term, def]) => <li key={term} style={{ marginBottom: 6 }}><strong>{term}:</strong> {def}</li>)}
          </ul>
        </section>

        <section className="card stack" style={{ gap: 12, borderLeft: "4px solid var(--terracotta)" }}>
          <h2 style={{ fontSize: 22 }}>{t.setupH}</h2>
          <p className="muted">{t.setupIntro}</p>
          <ol className="stack" style={{ gap: 8, paddingLeft: 20, margin: 0 }}>
            {[t.setup1, t.setup2, t.setup3, t.setup4].map((x) => <li key={x}>{x}</li>)}
          </ol>
          <p className="small subtle">{t.setupNote}</p>
        </section>

        <section className="card stack" style={{ gap: 14 }}>
          <h2 style={{ fontSize: 24 }}>{t.promptH}</h2>
          <p className="muted">{t.promptIntro}</p>
          <div className="stack" style={{ background: "var(--mint)", borderRadius: 14, padding: "20px 22px", gap: 14 }}>
            <p lang={plang} style={{ fontSize: 19, fontWeight: 600, color: "var(--primary-dark)" }}>&ldquo;{promptShort[plang]}&rdquo;</p>
            <p className="small" style={{ color: "var(--primary-dark)" }}>{t.fullNote}</p>
            <details>
              <summary className="small" style={{ cursor: "pointer", fontWeight: 600, color: "var(--primary)" }}>{t.showFull}</summary>
              <p lang={plang} style={{ fontSize: 15, color: "var(--primary-dark)", marginTop: 8 }}>{prompt[plang]}</p>
            </details>
            <div className="row no-print" style={{ gap: 12, alignItems: "center" }}>
              <button type="button" className="btn" onClick={() => copy("prompt", prompt[plang])}>{copied === "prompt" ? t.copied : t.copyPrompt}</button>
              <span role="status" className="tiny" style={{ color: "var(--accent)" }}>{copied === "prompt" ? t.copied : ""}</span>
            </div>
          </div>
          <p className="small muted"><strong>{t.nudgeHead}</strong> {t.nudge}</p>
        </section>

        <section className="card stack" style={{ gap: 16 }}>
          <div className="row" style={{ gap: "8px 16px", alignItems: "baseline", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: 24 }}>{t.checkH}</h2>
            <span className="pill tiny" style={{ background: "var(--sky)", color: "var(--primary-dark)" }}>
              {t.progress.replace("{n}", String(done)).replace("{t}", String(checklist.length))}
            </span>
          </div>
          <p className="muted">{t.checkIntro}</p>
          <a href={lang === "en" ? "/map" : `/map?lang=${lang}`} style={{ fontWeight: 600, alignSelf: "flex-start" }}>{t.mapLink}</a>
          {buckets.map((b) => (
            <div key={b.id} className="stack" style={{ gap: 10 }}>
              <p className="eyebrow" style={{ marginTop: 10 }}>{b.title}</p>
              {b.items.map((item) => {
                const note = item.note?.[lang];
                return (
                  <div key={item.id} className={`check-row${ticks[item.id] ? " done" : ""}`}>
                    <label>
                      <input type="checkbox" checked={!!ticks[item.id]} onChange={() => toggle(item.id)} />
                      <span className="stack" style={{ gap: 2 }}>
                        <strong style={{ color: "var(--primary-dark)" }}>{item.label[lang]}</strong>
                        <em lang={plang} className="muted">“{item.q[plang]}”</em>
                        {note && <span className="tiny subtle">{note}</span>}
                      </span>
                    </label>
                    <button type="button" className="btn btn-small btn-soft no-print" onClick={() => copy(item.id, item.q[plang])} aria-label={`${t.copy}: ${item.label[lang]}`}>
                      {copied === item.id ? t.copied : t.copy}
                    </button>
                  </div>
                );
              })}
              {b.id === "b3" && <p className="small muted">{t.confirm}</p>}
            </div>
          ))}
          <p className="tiny subtle">{t.saved}</p>
        </section>

        <section className="card stack" style={{ gap: 14 }}>
          <h2 style={{ fontSize: 24 }}>{t.visitH}</h2>
          <EnOnly lang={lang} />
          <p className="muted">{visit.intro}</p>
          <h3 style={{ fontSize: 17 }}>Before</h3>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{visit.before.map((x) => <li key={x} style={{ marginBottom: 6 }}>{x}</li>)}</ul>
          <h3 style={{ fontSize: 17 }}>During</h3>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {visit.during.map((x) => <li key={x} style={{ marginBottom: 6 }}>{x}</li>)}
            <li>
              Before you leave, three questions that always apply:
              <ol style={{ marginTop: 6 }}>{visit.closing.map((x) => <li key={x}><em>{x}</em></li>)}</ol>
            </li>
          </ul>
          <h3 style={{ fontSize: 17 }}>When the answer is &quot;not needed&quot;</h3>
          <p className="muted">{visit.notNeededIntro}</p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{visit.notNeeded.map((x) => <li key={x} style={{ marginBottom: 6 }}><em>{x}</em></li>)}</ul>
          <h3 style={{ fontSize: 17 }}>After</h3>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{visit.after.map((x) => <li key={x} style={{ marginBottom: 6 }}>{x}</li>)}</ul>
        </section>

        <div className="no-print">
          <button type="button" className="btn btn-outline" onClick={() => window.print()}>{t.print}</button>
        </div>

        <footer className="stack" style={{ gap: 10, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <p className="small subtle">{t.footer}</p>
          <p className="small" style={{ fontWeight: 600, color: "var(--primary-dark)" }}>{t.emergency}</p>
        </footer>
      </main>
    </div>
  );
}
