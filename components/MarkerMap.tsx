"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NODES, SOURCES, WHOLE_REPORT_PROMPT, WHOLE_REPORT_SHORT, ZONES, promptFor, type MapNode } from "@/content/map";

const DEFAULT = "tg";

function NodeButton({ n, on, onPick, positioned }: { n: MapNode; on: boolean; onPick: () => void; positioned: boolean }) {
  const z = ZONES[n.zone];
  return (
    <button
      type="button"
      className="map-node"
      aria-pressed={on}
      onClick={onPick}
      style={{
        ...(positioned ? { position: "absolute", left: n.x, top: n.y } : {}),
        borderColor: on ? z.on : z.border,
        borderStyle: n.zone === "report" && !on ? "dashed" : "solid",
        background: on ? z.on : "#fff",
        color: on ? "#fff" : z.text,
      }}
    >
      <span>{n.name}</span>
      <span className="map-term">{n.term}</span>
    </button>
  );
}

export function MarkerMap({ signupHref }: { signupHref: string }) {
  const [picked, setPicked] = useState(DEFAULT);
  const [copied, setCopied] = useState<string | null>(null);

  // Deep links: /map#thyroid opens that marker.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (NODES.some((n) => n.id === id)) {
        setPicked(id);
        document.getElementById("marker-detail")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const pick = (id: string) => {
    setPicked(id);
    setCopied(null);
    try { window.history.replaceState(null, "", `#${id}`); } catch { /* ignore */ }
    if (window.innerWidth < 1140) document.getElementById("marker-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copy = async (item: string, text: string) => {
    try { await navigator.clipboard.writeText(text); } catch { /* ignore */ }
    setCopied(item);
    track("copy", { item: `map:${item}`, promptLang: "en" });
  };

  const s = NODES.find((n) => n.id === picked) ?? NODES[0];
  const z = ZONES[s.zone];
  const core = NODES.filter((n) => n.zone !== "report");
  const outer = NODES.filter((n) => n.zone === "report");

  return (
    <div className="stack" style={{ gap: 40 }}>
      <section className="wrap stack" style={{ gap: 14, alignItems: "center", textAlign: "center", paddingTop: 24 }}>
        <p className="eyebrow" style={{ color: "#A84F2C" }}>Beyond &ldquo;all good?&rdquo;</p>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>One number rarely tells the story.</h1>
        <p className="muted" style={{ maxWidth: 640, fontSize: 19 }}>
          Your blood test is a picture, not a list of passes and fails. Tap a marker to see what it is, what it connects to, and what to ask your AI.
        </p>
      </section>

      <section className="narrow">
        <div className="stack" style={{ background: "var(--primary-dark)", color: "#fff", borderRadius: 24, padding: "28px 32px", gap: 14 }}>
          <p className="eyebrow" style={{ color: "#F6D9C4" }}>Start with the whole report</p>
          <p style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 26, lineHeight: 1.25 }}>&ldquo;{WHOLE_REPORT_SHORT}&rdquo;</p>
          <div className="row" style={{ gap: "12px 20px", alignItems: "center", justifyContent: "space-between" }}>
            <p className="small" style={{ flex: "1 1 340px", color: "#CFE3DF" }}>
              The full prompt also asks your AI not to diagnose you and to end with questions for your doctor. Before you upload, black out your name, tax code and patient ID.
            </p>
            <button type="button" className="btn" style={{ background: "#F6D9C4", color: "var(--primary-dark)" }} onClick={() => copy("whole-report", WHOLE_REPORT_PROMPT)}>
              {copied === "whole-report" ? "Copied" : "Copy the full prompt"}
            </button>
          </div>
        </div>
      </section>

      {/* Desktop: two circles */}
      <section className="map-diagram" aria-label="Heart and metabolism">
        <div aria-hidden="true" className="map-circle" style={{ left: 60, background: "rgba(14,94,96,0.10)", borderColor: "rgba(14,94,96,0.35)" }} />
        <div aria-hidden="true" className="map-circle" style={{ left: 420, background: "rgba(181,85,47,0.10)", borderColor: "rgba(181,85,47,0.35)" }} />
        <p className="map-label" style={{ left: 130, top: 90, color: "var(--primary-dark)" }}>Heart &amp; vessels</p>
        <p className="map-both" style={{ left: 520, top: 70 }}>BOTH</p>
        <p className="map-label" style={{ left: 800, top: 90, color: "#7A3A1F" }}>Metabolism</p>
        {core.map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned />)}
      </section>

      {/* Mobile: grouped */}
      <section className="map-list wrap stack" style={{ gap: 20 }} aria-label="Heart and metabolism">
        {(["heart", "both", "meta"] as const).map((zone) => (
          <div key={zone} className="stack" style={{ gap: 10 }}>
            <p className="eyebrow" style={{ color: ZONES[zone].text }}>{zone === "both" ? "Heart and metabolism" : ZONES[zone].label}</p>
            <div className="row" style={{ gap: 10 }}>
              {core.filter((n) => n.zone === zone).map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned={false} />)}
            </div>
          </div>
        ))}
      </section>

      <section className="wrap stack" style={{ gap: 14, alignItems: "center", textAlign: "center" }} aria-label="The rest of your report">
        <p className="eyebrow" style={{ color: "var(--subtle)" }}>The rest of your report</p>
        <p className="muted">It all connects back to the centre.</p>
        <div className="map-ring">
          {outer.map((n) => <NodeButton key={n.id} n={n} on={n.id === picked} onPick={() => pick(n.id)} positioned={false} />)}
        </div>
      </section>

      <section className="narrow">
        <div id="marker-detail" className="card stack" style={{ gap: 18, borderRadius: 24, boxShadow: "0 20px 50px rgba(10,69,71,0.08)" }} aria-live="polite">
          <div className="stack" style={{ gap: 4 }}>
            <p className="tiny" style={{ fontWeight: 700, letterSpacing: "0.1em", color: z.on, textTransform: "uppercase" }}>{s.term}</p>
            <h2 style={{ fontSize: 30 }}>{s.name}</h2>
          </div>
          <p style={{ fontSize: 19 }}>{s.what}</p>
          <p className="muted"><strong style={{ color: "var(--ink)" }}>Connects to:</strong> {s.connects.join(" · ")}</p>
          <div className="row" style={{ background: "var(--ground)", borderRadius: 16, padding: "18px 20px", gap: "12px 20px", alignItems: "center", justifyContent: "space-between" }}>
            <div className="stack" style={{ flex: "1 1 340px", minWidth: 0, gap: 4 }}>
              <p className="tiny" style={{ fontWeight: 700, letterSpacing: "0.1em", color: "#A84F2C" }}>ASK YOUR AI</p>
              <p style={{ fontSize: 18, fontWeight: 600 }}>&ldquo;{s.ask}&rdquo;</p>
            </div>
            <button type="button" className="btn" onClick={() => copy(s.id, promptFor(s))}>
              {copied === s.id ? "Copied" : "Copy prompt"}
            </button>
          </div>
          <p className="small muted">
            Want the full checklist and a plan for your visit? <Link href={signupHref} style={{ fontWeight: 600 }}>Get the free guide</Link>
          </p>
        </div>
      </section>

      <section className="narrow stack tiny subtle" style={{ gap: 6, paddingBottom: 24 }}>
        <p>
          Sources:{" "}
          {SOURCES.map((src, i) => (
            <span key={src.href}>{i > 0 && " · "}<a href={src.href} target="_blank" rel="noopener noreferrer">{src.label}</a></span>
          ))}
        </p>
        <p>Educational content, not medical advice. The map shows connections, not your personal risk. Chest pain or sudden symptoms: call 112.</p>
      </section>
    </div>
  );
}
