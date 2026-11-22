import Link from "next/link";
import { Brand } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LangSwitch } from "@/components/LangSwitch";
import { CopyBox } from "@/components/CopyBox";
import { landing } from "@/content/landing";
import { share as g, shareUi, type Item } from "@/content/share";
import { toLang } from "@/lib/i18n";

export const metadata = {
  title: "Your health data and your AI: share safely",
  description: "What to leave out, which settings to switch off in ChatGPT, Claude and Gemini, and the honest limits. A free 2-minute checklist.",
};

function Items({ items, ordered }: { items: Item[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="share-list">
      {items.map((x) => (
        <li key={x.b}><strong>{x.b}</strong> {x.t}</li>
      ))}
    </Tag>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="share-table-wrap">
      <table className="share-table">
        <thead><tr>{head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ShareSafely({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = landing[lang];
  const ui = shareUi[lang];
  const home = lang === "en" ? "/" : `/?lang=${lang}`;
  const signup = lang === "en" ? "/signup" : `/signup?lang=${lang}`;

  return (
    <div lang="en">
      <header className="site-header">
        <div className="wrap">
          <Brand href={home} />
          <div className="nav">
            <Link href={home}>{ui.home}</Link>
            <LangSwitch current={lang} path="/share-safely" />
            <Link href={signup} className="btn btn-small hide-sm">{t.nav.cta}</Link>
          </div>
        </div>
      </header>

      <main className="wrap narrow stack share" style={{ gap: 40, paddingTop: 56, paddingBottom: 80 }}>
        {ui.enOnly && <p className="tiny" style={{ background: "var(--apricot)", borderRadius: 10, padding: "8px 12px", color: "var(--primary-dark)" }} lang={lang}>{ui.enOnly}</p>}

        <div className="stack" style={{ gap: 16 }}>
          <p className="eyebrow">{g.eyebrow}</p>
          <h1 className="display-2">{g.h1}</h1>
          <p className="muted" style={{ fontSize: 19 }}>{g.forWho}</p>
          <p className="tiny subtle" lang={lang}>{ui.lastChecked}: {g.lastChecked}</p>
        </div>

        <div className="card stack" style={{ gap: 14 }}>
          <p style={{ fontSize: 18, lineHeight: 1.55 }}>{g.point}</p>
          <Items items={g.versions} />
          <a href="#checklist" className="btn-text">{g.checkH} ↓</a>
        </div>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.missH}</h2>
          <Items items={g.miss} ordered />
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.step1H}</h2>
          <p><strong>{g.step1Lead}</strong></p>
          <Items items={g.step1} />
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.step2H}</h2>
          <p>{g.step2Lead} <em>{g.step2Ask}</em></p>
          <Table head={g.settingsHead} rows={g.settings} />
          <h3>{g.whatH}</h3>
          <Items items={g.what} />
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.step3H}</h2>
          <Items items={g.step3} />
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.step4H}</h2>
          <Items items={g.step4} />
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.limitsH}</h2>
          <p>{g.limitsLead}</p>
          <Table head={g.limitsHead} rows={g.limits} />
          <h3>{g.alsoH}</h3>
          <Items items={g.also} />
        </section>

        <section id="checklist" className="card stack" style={{ gap: 16 }}>
          <h2>{g.checkH}</h2>
          <h3>{g.onceH}</h3>
          <ul className="share-check">{g.once.map((x) => <li key={x}>{x}</li>)}</ul>
          <h3>{g.everyH}</h3>
          <ul className="share-check">{g.every.map((x) => <li key={x}>{x}</li>)}</ul>
          <h3>{g.promptH}</h3>
          <CopyBox text={g.prompt} id="share-start" label={ui.copy} done={ui.copied} />
        </section>

        <section className="card-lg stack" style={{ gap: 14, background: "var(--primary-dark)", color: "#fff" }}>
          <h2 style={{ color: "#fff" }}>{g.nextH}</h2>
          <p style={{ fontSize: 18, opacity: 0.9 }}>{g.nextP}</p>
          <Link href={signup} className="btn btn-lg" style={{ alignSelf: "flex-start", background: "var(--apricot)", color: "var(--primary-dark)" }}>{g.nextCta}</Link>
        </section>

        <section className="stack" style={{ gap: 10 }}>
          <h3>{g.sourcesH}</h3>
          <ul className="share-sources">
            {g.sources.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
        </section>
      </main>
      <Footer disclaimer={t.disclaimer} lang={lang} />
    </div>
  );
}
