import Link from "next/link";
import { Footer } from "@/components/Footer";
import { CopyBox } from "@/components/CopyBox";
import { SiteHeader } from "@/components/SiteHeader";
import { ask as g } from "@/content/ask";
import { landing } from "@/content/landing";
import { shareUi } from "@/content/share";
import { toLang } from "@/lib/i18n";

export const metadata = {
  title: "Ask your AI about any health question",
  description: "Seven habits and one prompt to get answers from ChatGPT, Claude or Gemini that fit your situation, show their sources and end with questions for your doctor.",
};

export default async function AskBetter({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  const t = landing[lang];
  const ui = shareUi[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;

  return (
    <div lang="en">
      <SiteHeader lang={lang} path="/ask-better" />
      <main className="wrap narrow stack share" style={{ gap: 40, paddingTop: 56, paddingBottom: 80 }}>
        {ui.enOnly && <p className="tiny" style={{ background: "var(--apricot)", borderRadius: 10, padding: "8px 12px", color: "var(--primary-dark)" }} lang={lang}>{ui.enOnly}</p>}

        <div className="stack" style={{ gap: 16 }}>
          <p className="eyebrow">{g.eyebrow}</p>
          <h1 className="display-2">{g.h1}</h1>
          <p className="muted" style={{ fontSize: "var(--fs-lead)" }}>{g.forWho}</p>
          <p className="tiny subtle" lang={lang}>{ui.lastChecked}: {g.lastChecked}</p>
        </div>

        <div className="card stack" style={{ gap: 14 }}>
          <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.55 }}>{g.point}</p>
          <a href="#prompt" className="btn-text">{g.promptH} ↓</a>
        </div>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.missH}</h2>
          <ol className="share-list">{g.miss.map((x) => <li key={x.b}><strong>{x.b}</strong> {x.t}</li>)}</ol>
        </section>

        <section className="stack" style={{ gap: 14 }}>
          <h2>{g.habitsH}</h2>
          <ol className="share-list">{g.habits.map((x) => <li key={x.b}><strong>{x.b}</strong> {x.t}</li>)}</ol>
          <p className="small">{g.shareNote} <Link href={`/share-safely${q}`}>{g.shareLink} →</Link></p>
        </section>

        <section className="card stack" style={{ gap: 10, background: "#FBEBEB", border: 0 }}>
          <h2 className="h3">{g.urgentH}</h2>
          <p>{g.urgentP}</p>
        </section>

        <section id="prompt" className="card stack" style={{ gap: 16 }}>
          <h2>{g.promptH}</h2>
          <p className="muted">{g.promptLead}</p>
          <CopyBox text={g.prompt} id="ask-better" label={ui.copy} done={ui.copied} send={lang} />
        </section>

        <section className="stack" style={{ gap: 12 }}>
          <h2>{g.checkH}</h2>
          <ul className="share-check">{g.check.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="small muted">{g.checkNote}</p>
        </section>

        <section className="card-lg stack" style={{ gap: 14, background: "var(--primary-dark)", color: "#fff" }}>
          <h2 style={{ color: "#fff" }}>{g.nextH}</h2>
          <p style={{ fontSize: "var(--fs-lead)", opacity: 0.9 }}>{g.nextP}</p>
          <Link href={`/signup${q}`} className="btn btn-lg" style={{ alignSelf: "flex-start", background: "var(--apricot)", color: "var(--primary-dark)" }}>{g.nextCta}</Link>
        </section>
      </main>
      <Footer disclaimer={t.disclaimer} lang={lang} />
    </div>
  );
}
