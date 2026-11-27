"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import type { Lang } from "@/lib/i18n";

// One tap: copy the prompt, then open the reader's AI (27 Nov 2026).
// Prefill via URL works on ChatGPT and Perplexity; Claude, Gemini and Copilot may open empty,
// so the prompt is always copied first and the hint says to paste it. Test all five before launch.
const AIS = [
  { id: "chatgpt", name: "ChatGPT", url: (t: string) => `https://chatgpt.com/?q=${encodeURIComponent(t)}` },
  { id: "claude", name: "Claude", url: (t: string) => `https://claude.ai/new?q=${encodeURIComponent(t)}` },
  { id: "gemini", name: "Gemini", url: () => "https://gemini.google.com/app" },
  { id: "copilot", name: "Copilot", url: (t: string) => `https://copilot.microsoft.com/?q=${encodeURIComponent(t)}` },
  { id: "perplexity", name: "Perplexity", url: (t: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(t)}` },
] as const;

const UI: Record<Lang, { open: string; copy: string; copied: string; hint: (ai: string) => string }> = {
  en: { open: "Open in your AI:", copy: "Copy", copied: "Copied", hint: (ai) => `Prompt copied. If ${ai} opens empty, paste it into the chat (Ctrl+V, or long-press → Paste). Then add your screenshot if the prompt asks for one.` },
  it: { open: "Apri nella tua AI:", copy: "Copia", copied: "Copiato", hint: (ai) => `Prompt copiato. Se ${ai} si apre vuoto, incollalo nella chat (Ctrl+V, o tieni premuto → Incolla). Poi aggiungi lo screenshot se il prompt lo chiede.` },
  de: { open: "In deiner KI öffnen:", copy: "Kopieren", copied: "Kopiert", hint: (ai) => `Prompt kopiert. Falls ${ai} leer öffnet, füge ihn im Chat ein (Strg+V oder lange drücken → Einfügen). Dann deinen Screenshot anhängen, falls der Prompt danach fragt.` },
};

const KEY = "curiact-ai";

export function SendToAI({ text, id, lang, promptLang }: { text: string; id: string; lang: Lang; promptLang?: Lang }) {
  const t = UI[lang];
  const [fav, setFav] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { setFav(localStorage.getItem(KEY)); } catch { /* storage blocked */ }
  }, []);

  function copyText() {
    try { void navigator.clipboard.writeText(text); } catch { /* clipboard blocked: the text is still selectable */ }
  }

  function open(ai: (typeof AIS)[number]) {
    copyText(); // first, so the prompt is there even where prefill doesn't work
    window.open(ai.url(text), "_blank", "noopener");
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
          <button key={ai.id} type="button" className={`btn btn-small ${ai.id === fav ? "" : "btn-soft"}`} onClick={() => open(ai)}>{ai.name}</button>
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
      {hint && <p className="tiny" role="status" style={{ color: "var(--primary-dark)", background: "#fff", borderRadius: 10, padding: "8px 12px" }}>{hint}</p>}
    </div>
  );
}
