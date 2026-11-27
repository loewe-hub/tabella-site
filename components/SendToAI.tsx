"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import type { Lang } from "@/lib/i18n";

// One tap: copy the prompt, then open the reader's AI (27 Nov 2026).
// Prefill via URL works on ChatGPT and Perplexity; Claude, Gemini and Copilot may open empty,
// so the prompt is always copied first and the hint says to paste it. Test all five before launch.
const AIS = [
  { id: "chatgpt", name: "ChatGPT", color: "#10A37F", url: (t: string) => `https://chatgpt.com/?q=${encodeURIComponent(t)}` },
  { id: "claude", name: "Claude", color: "#D97757", url: (t: string) => `https://claude.ai/new?q=${encodeURIComponent(t)}` },
  { id: "gemini", name: "Gemini", color: "#4285F4", url: () => "https://gemini.google.com/app" },
  { id: "copilot", name: "Copilot", color: "#7A5AF8", url: (t: string) => `https://copilot.microsoft.com/?q=${encodeURIComponent(t)}` },
  { id: "perplexity", name: "Perplexity", color: "#20808D", url: (t: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(t)}` },
] as const;

const UI: Record<Lang, { open: string; copy: string; copied: string; hint: (ai: string) => string }> = {
  en: { open: "Open in your AI:", copy: "Copy", copied: "Copied", hint: (ai) => `Prompt copied. If ${ai} opens empty, paste it into the chat (Ctrl+V, or long-press → Paste). Then send your report when it asks.` },
  it: { open: "Apri nella tua AI:", copy: "Copia", copied: "Copiato", hint: (ai) => `Prompt copiato. Se ${ai} si apre vuoto, incollalo nella chat (Ctrl+V, o tieni premuto → Incolla). Poi invia il referto quando te lo chiede.` },
  de: { open: "In deiner KI öffnen:", copy: "Kopieren", copied: "Kopiert", hint: (ai) => `Prompt kopiert. Falls ${ai} leer öffnet, füge ihn im Chat ein (Strg+V oder lange drücken → Einfügen). Dann schick deinen Befund, wenn sie danach fragt.` },
};

const KEY = "curiact-ai";

// Where prefill works, the AI may send the prompt at once, before the reader has attached anything.
// So the version that travels in the link asks the AI to wait for the report (27 Nov 2026).
const WAIT: Record<Lang, { pre: string; slot: string }> = {
  en: { pre: "I'll send my report in my next message. Until then, reply only: \"Ready, please send it.\" Then follow these instructions:\n\n", slot: "(in my next message)" },
  it: { pre: "Ti invierò il referto nel prossimo messaggio. Fino ad allora rispondi solo: \"Pronto, invialo pure.\" Poi segui queste istruzioni:\n\n", slot: "(nel prossimo messaggio)" },
  de: { pre: "Ich schicke dir meinen Befund in der nächsten Nachricht. Antworte bis dahin nur: \"Bereit, schick ihn mir.\" Folge dann diesen Anweisungen:\n\n", slot: "(in meiner nächsten Nachricht)" },
};
const needsReport = (t: string) => /\[[^\]]+\]/.test(t);
const linkVersion = (t: string, l: Lang) => (needsReport(t) ? WAIT[l].pre + t.replace(/\s*\[[^\]]+\]/g, " " + WAIT[l].slot) : t);

const STEPS: Record<Lang, string[]> = {
  en: ["Tap your AI: the prompt goes in (some send it straight away).", "Your AI replies that it's ready.", "Send your report: a screenshot or photo, without your name."],
  it: ["Tocca la tua AI: il prompt entra nella chat (alcune lo inviano subito).", "La tua AI risponde che è pronta.", "Invia il referto: screenshot o foto, senza il tuo nome."],
  de: ["Tippe auf deine KI: Der Prompt landet im Chat (manche schicken ihn sofort ab).", "Deine KI antwortet, dass sie bereit ist.", "Schick deinen Befund: Screenshot oder Foto, ohne deinen Namen."],
};

export function SendToAI({ text, id, lang, promptLang }: { text: string; id: string; lang: Lang; promptLang?: Lang }) {
  const t = UI[lang];
  const pl = promptLang ?? lang;
  const [fav, setFav] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { setFav(localStorage.getItem(KEY)); } catch { /* storage blocked */ }
  }, []);

  function copyText(forLink = false) {
    try { void navigator.clipboard.writeText(forLink ? linkVersion(text, pl) : text); } catch { /* clipboard blocked: the text is still selectable */ }
  }

  function open(ai: (typeof AIS)[number]) {
    copyText(true); // first, so the prompt is there even where prefill doesn't work
    window.open(ai.url(linkVersion(text, pl)), "_blank", "noopener");
    try { localStorage.setItem(KEY, ai.id); } catch { /* ignore */ }
    setFav(ai.id);
    setHint(t.hint(ai.name));
    track("send", { item: id, ai: ai.id, promptLang: promptLang ?? lang });
  }

  const ordered = fav ? [...AIS].sort((a, b) => (a.id === fav ? -1 : b.id === fav ? 1 : 0)) : AIS;

  return (
    <div className="stack no-print" style={{ gap: 10 }}>
      <p className="small" style={{ fontWeight: 700, color: "var(--primary-dark)" }}>{t.open}</p>
      <div className="send-row">
        {ordered.map((ai) => (
          <button key={ai.id} type="button" className="btn btn-small btn-soft ai-btn" style={{ ["--ai" as string]: ai.color, ...(ai.id === fav ? { borderColor: ai.color, boxShadow: `inset 0 0 0 1px ${ai.color}` } : {}) }} onClick={() => open(ai)}>
            <span className="ai-dot" aria-hidden="true" />{ai.name}
          </button>
        ))}
        <button
          type="button"
          className="btn btn-small btn-ghost"
          onClick={() => {
            copyText();
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            track("copy", { item: id, promptLang: promptLang ?? lang });
          }}
        >
          {copied ? t.copied : t.copy}
        </button>
      </div>
      {needsReport(text) && (
        <ol className="tiny muted" style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 2 }}>
          {STEPS[lang].map((x) => <li key={x}>{x}</li>)}
        </ol>
      )}
      {hint && <p className="tiny" role="status" style={{ color: "var(--primary-dark)", background: "#fff", borderRadius: 10, padding: "8px 12px" }}>{hint}</p>}
    </div>
  );
}
