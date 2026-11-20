"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EVIDENCE, NODES, SOURCES, WHOLE_REPORT_PROMPT, ZONES, linkPrompt, promptFor, type MapNode } from "@/content/map";

const DEFAULT = "tg";

function EvDot({ ev }: { ev: MapNode["ev"] }) {
  return <span aria-hidden="true" className={`ev-dot ev-${ev}`} />;
}

function NodeButton({ n, on, onPick, positioned }: { n: MapNode; on: boolean; onPick: () => void; positioned: boolean }) {
  const z = ZONES[n.zone];
  return (
    <button
      type="button"
      className="map-node"
      aria-pressed={on}
      aria-label={`${n.name}, evidence ${EVIDENCE[n.ev].label}`}
      onClick={onPick}
      style={{
        ...(positioned ? { position: "absolute", left: n.x, top: n.y } : {}),
        borderColor: on ? z.on : z.border,
        borderStyle: n.zone === "report" && !on ? "dashed" : "solid",
        background: on ? z.on : "#fff",
        color: on ? "#fff" : z.text,
      }}
    >
      <EvDot ev={n.ev} />
      {n.name}
    </button>
  );
}

export function MarkerMap({ signupHref }: { signupHref: string }) {
  const [picked, setPicked] = useState(DEFAULT);
  const [link, setLink] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  // Deep links: /map#lpa opens that marker.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (NODES.some((n) => n.id === id)) {
        setPicked(id);
        setLink(null);
        document.getElementById("marker-detail")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const pick = (id: string) => {
    setPicked(id);
    setLink(null);
    setCopied(null);
    try { window.history.replaceState(null, "", `#${id}`); } catch { /* ignore */ }
    if (window.innerWidth < 1140) document.getElementById("marker-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copy = async (item: string, text: string) => {
    try { await navigator.clipboard.writeText(text); } catch { /* ignore */ }
    setCopied(item);
    track("copy", { item: `map:${item}`, promptLang: "en" });
  };

  const s = NODES.find((n) => n.id === picked) ?? NODES[4];
  const z = ZONES[s.zone];
  const active = link ? linkPrompt(s, link) : promptFor(s);
  const core = NODES.filter((n) => n.zone !== "report");
  const outer = NODES.filter((n) => n.zone === "report");

  return (
    <div className="stack" style={{ gap: 40 }}>
      <section className="wrap stack" style={{ gap: 14, alignItems: "center", textAlign: "center", paddingTop: 24 }}>
        <p className="eyebrow" style={{ color: "#A84F2C" }}>Beyond &ldquo;all good?&rdquo;</p>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>One blood test. Two systems.<br />One picture.</h1>
        <p className="muted" style={{ maxWidth: 680, fontSize: 19 }}>
          Every marker here is a signal. Whether it becomes a target is for current guidelines and your doctor to say. Tap one to see what it signals, how strong the evidence is, and what to ask your AI.
        </p>
        <div className="row small muted" style={{ gap: "8px 18px", justifyContent: "center" }}>
          {(Object.keys(EVIDENCE) as MapNode["ev"][]).map((ev) => (
            <span key={ev} style={{ display: "inline-flex", alignItems: "center" }}><EvDot ev={ev} />{EVIDENCE[ev].legend}</span>
          ))}
        </div>
      </section>

      <section className="narrow">
        <div className="stack" style={{ background: "var(--primary-dark)", color: "#fff", borderRadius: 24, padding: "28px 32px", gap: 12 }}>
          <p className="eyebrow" style={{ color: "#F6D9C4" }}>Start with the whole report</p>
          <h2 style={{ color: "#fff", fontSize: 28 }}>&ldquo;All good?&rdquo; is the wrong question.</h2>
          <p style={{ fontStyle: "italic", color: "var(--mint)" }}>&ldquo;{WHOLE_REPORT_PROMPT}&rdquo;</p>
          <div className="row" style={{ gap: "12px 20px", alignItems: "center", justifyContent: "space-between" }}>
            <p className="small" style={{ flex: "1 1 360px", color: "#CFE3DF" }}>Before you upload: black out your name, tax code and patient ID. Your AI needs the values, not who you are.</p>
            <button type="button" className="btn" style={{ background: "#F6D9C4", color: "var(--primary-dark)" }} onClick={() => copy("whole-report", WHOLE_REPORT_PROMPT)}>
              {copied === "whole-report" ? "Copied" : "Copy prompt"}
            </button>
          </div>
        </div>
      </section>

      {/* Desktop: the two-circle diagram */}
      <section className="map-diagram" aria-label="Heart and metabolism markers">
        <div aria-hidden="true" className="map-circle" style={{ left: 60, background: "rgba(14,94,96,0.10)", borderColor: "rgba(14,94,96,0.35)" }} />
        <div aria-hidden="true" className="map-circle" style={{ left: 420, background: "rgba(181,85,47,0.10)", borderColor: "rgba(181,85,47,0.35)" }} />
        <p className="map-label" style={{ left: 130, top: 70, color: "var(--primary-dark)" }}>Heart &amp; vessels</p>
        <p className="map-both" style={{ left: 520, top: 46 }}>BOTH</p>
        <p className="map-label" style={{ left: 820, top: 70, color: "#7A3A1F" }}>Metabolism</p>
        {core.map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned />)}
      </section>

      {/* Mobile: the same markers, grouped */}
      <section className="map-list wrap stack" style={{ gap: 20 }} aria-label="Heart and metabolism markers">
        {(["heart", "both", "meta"] as const).map((zone) => (
          <div key={zone} className="stack" style={{ gap: 10 }}>
            <p className="eyebrow" style={{ color: ZONES[zone].text }}>{ZONES[zone].label}</p>
            <div className="row" style={{ gap: 10 }}>
              {core.filter((n) => n.zone === zone).map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned={false} />)}
            </div>
          </div>
        ))}
      </section>

      <section className="wrap stack" style={{ gap: 14, alignItems: "center", textAlign: "center" }} aria-label="The rest of your report">
        <p className="eyebrow" style={{ color: "var(--subtle)" }}>The rest of your report</p>
        <p className="muted">Every section connects back to the centre. Tap one to see how.</p>
        <div className="map-ring">
          {outer.map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned={false} />)}
        </div>
      </section>

      <section className="narrow">
        <div id="marker-detail" className="card stack" style={{ gap: 16, borderRadius: 24, boxShadow: "0 20px 50px rgba(10,69,71,0.08)" }} aria-live="polite">
          <div className="row" style={{ gap: "10px 14px", alignItems: "baseline" }}>
            <h2 style={{ fontSize: 28 }}>{s.name}</h2>
            <span className="pill" style={{ background: z.on, color: "#fff", fontSize: 13 }}>{z.label}</span>
            <span className={`pill ev-tag-${s.ev}`} style={{ fontSize: 13 }}>Evidence: {EVIDENCE[s.ev].label}</span>
          </div>
          <p className="muted" style={{ fontSize: 18 }}><strong style={{ color: "var(--ink)" }}>The signal:</strong> {s.what}</p>
          <p className="muted"><strong style={{ color: "var(--ink)" }}>Why the evidence is rated {EVIDENCE[s.ev].label}:</strong> {s.why}</p>
          <div className="stack" style={{ gap: 8 }}>
            <p className="tiny" style={{ fontWeight: 700, letterSpacing: "0.1em" }}>
              RESEARCH CONNECTS THIS SIGNAL WITH <span style={{ fontWeight: 500, letterSpacing: 0 }}>· a link, not a diagnosis. Tap one to ask about it.</span>
            </p>
            <div className="row" style={{ gap: 8 }}>
              {s.links.map((c) => (
                <button key={c} type="button" className={`map-link${c === link ? " on" : ""}`} aria-pressed={c === link} onClick={() => { setLink(c === link ? null : c); setCopied(null); }}>{c}</button>
              ))}
            </div>
          </div>
          <div className="row" style={{ background: "var(--ground)", borderRadius: 16, padding: "18px 20px", gap: "12px 20px", alignItems: "center", justifyContent: "space-between" }}>
            <div className="stack" style={{ flex: "1 1 380px", minWidth: 0, gap: 4 }}>
              <p className="tiny" style={{ fontWeight: 700, letterSpacing: "0.1em", color: "#A84F2C" }}>ASK YOUR AI</p>
              <p style={{ fontStyle: "italic" }}>&ldquo;{active}&rdquo;</p>
            </div>
            <button type="button" className="btn" onClick={() => copy(link ? `${s.id}:link` : s.id, active)}>
              {copied === (link ? `${s.id}:link` : s.id) ? "Copied" : "Copy prompt"}
            </button>
          </div>
          <p className="small muted">
            Want the full checklist and a plan for your visit? <Link href={signupHref} style={{ fontWeight: 600 }}>Get the free guide</Link>
            {" · "}already have it? <Link href="/guide" style={{ fontWeight: 600 }}>Open the checklist</Link>
          </p>
        </div>
      </section>

      <section className="wrap row" style={{ gap: 10, justifyContent: "center", textAlign: "center" }} aria-label="Lifestyle">
        <p className="eyebrow" style={{ width: "100%", color: "var(--subtle)" }}>Acts on everything in this picture</p>
        {["Food", "Movement", "Sleep", "Alcohol", "Smoking"].map((x) => (
          <span key={x} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 999, padding: "8px 16px", fontSize: 15 }}>{x}</span>
        ))}
      </section>

      <section className="narrow stack tiny subtle" style={{ gap: 6, paddingBottom: 24 }}>
        <p style={{ fontWeight: 700, letterSpacing: "0.1em" }}>SOURCES</p>
        <p>
          {SOURCES.map((src, i) => (
            <span key={src.href}>{i > 0 && " · "}<a href={src.href} target="_blank" rel="noopener noreferrer">{src.label}</a></span>
          ))}
        </p>
        <p style={{ marginTop: 6 }}>Educational content, not medical advice. The map shows signals and connections, not your personal risk or your targets. Chest pain or sudden symptoms: call 112.</p>
      </section>
    </div>
  );
}
