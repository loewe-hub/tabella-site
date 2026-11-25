import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyBox } from "@/components/CopyBox";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { AREA_NAMES, AREA_ORDER, AREA_UI, AREAS, type AreaId } from "@/content/areas";
import { landing } from "@/content/landing";
import { learn, TOPIC_DATES } from "@/content/learn";
import { nodes } from "@/content/map";
import { toLang } from "@/lib/i18n";

export function generateStaticParams() {
  return AREA_ORDER.map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const n = AREA_NAMES.en[area as AreaId];
  return n ? { title: `${n.title}: a guide for you and your AI`, description: n.tagline } : {};
}

export default async function AreaPage({ params, searchParams }: { params: Promise<{ area: string }>; searchParams: Promise<{ lang?: string }> }) {
  const { area } = await params;
  if (!(AREA_ORDER as string[]).includes(area)) notFound();
  const id = area as AreaId;
  const lang = toLang((await searchParams).lang);
  const a = AREAS[id];
  const ui = AREA_UI[lang];
  const names = AREA_NAMES[lang];
  const en = AREA_NAMES.en;
  const l = landing[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;
  const marks = nodes("en").filter((n) => a.markers.includes(n.id));
  const issues = learn.en.issues;

  return (
    <div lang={lang}>
      <SiteHeader lang={lang} path={`/learn/${id}`} />
      <main className="wrap narrow stack share" style={{ gap: 40, paddingTop: 40, paddingBottom: 72 }}>
        <Link href={`/learn${q}`} className="small">{ui.back}</Link>
        {ui.enOnly && <p className="small en-only" lang={lang}>{ui.enOnly}</p>}

        <div className="stack" style={{ gap: 12 }} lang="en">
          <p className="eyebrow">{AREA_UI.en.guide}</p>
          <h1 className="display-2">{en[id].title}</h1>
          <p className="muted lead">{en[id].tagline}</p>
          {a.intro.map((p) => <p key={p}>{p}</p>)}
        </div>

        <section id="prompt" className="stack" style={{ gap: 12 }} lang="en">
          <h2>{AREA_UI.en.promptH}</h2>
          <p className="muted">{AREA_UI.en.promptLead}</p>
          <CopyBox text={a.prompt} id={`area-${id}`} label={ui.copy} done={ui.copied} />
          <p className="small muted">{AREA_UI.en.shareLine} <Link href={`/share-safely${q}`}>{AREA_UI.en.shareLink}</Link></p>
        </section>

        {marks.length > 0 && (
          <section className="stack" style={{ gap: 12 }} lang="en">
            <h2>{AREA_UI.en.markersH}</h2>
            <div className="marker-list">
              {marks.map((m) => (
                <div key={m.id} className="tile stack" style={{ gap: 6 }}>
                  <p className="h3">{m.name} <span className="small subtle">{m.term}</span></p>
                  <p>{m.what}</p>
                  <p className="small muted">Ask: “{m.ask}”</p>
                </div>
              ))}
            </div>
            <Link href={`/map${q}`} className="small">{ui.mapLink} →</Link>
          </section>
        )}

        <section className="stack" style={{ gap: 12 }} lang="en">
          <h2>{AREA_UI.en.connectsH}</h2>
          <ul className="share-list">
            {a.connects.map((c) => (
              <li key={c.to}><Link href={`/learn/${c.to}${q}`}><strong>{en[c.to].title}</strong></Link>: {c.t}</li>
            ))}
          </ul>
        </section>

        <section className="stack" style={{ gap: 12 }} lang="en">
          <h2>{AREA_UI.en.questionsH}</h2>
          <ol className="share-list">{a.questions.map((x) => <li key={x}>{x}</li>)}</ol>
        </section>

        {a.deeper && (
          <Link href={`${a.deeper.href}${q}`} className="results-box" lang="en">
            <div className="stack" style={{ gap: 6, minWidth: 0 }}>
              <p className="h3">{a.deeper.label}</p>
              <p>{a.deeper.p}</p>
            </div>
            <span className="btn" aria-hidden="true">→</span>
          </Link>
        )}

        <section className="card-lg stack" style={{ gap: 14 }} aria-label={ui.closeH}>
          {a.topics.length > 0 && (
            <>
              <p className="eyebrow">{ui.topicsH}</p>
              <ul className="share-list" lang="en">
                {a.topics.map((n) => <li key={n}>{issues[n - 1]} <span className="small subtle">· {TOPIC_DATES[n - 1]}</span></li>)}
              </ul>
            </>
          )}
          <h2 className="display-3">{ui.closeH}</h2>
          <p className="muted">{ui.closeP}</p>
          <Link href={`/signup${q}`} className="btn btn-lg" style={{ alignSelf: "flex-start" }}>{ui.closeCta}</Link>
        </section>

        <nav className="area-next" aria-label="Other guides">
          {AREA_ORDER.filter((x) => x !== id).map((x) => (
            <Link key={x} href={`/learn/${x}${q}`} className="pill-link">{names[x].title}</Link>
          ))}
        </nav>
      </main>
      <Footer disclaimer={l.disclaimer} lang={lang} />
    </div>
  );
}
