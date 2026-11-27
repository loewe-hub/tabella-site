"use client";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { SendToAI } from "@/components/SendToAI";
import type { Lang } from "@/lib/i18n";

export function CopyBox({ text, id, label, done, send }: { text: string; id: string; label: string; done: string; send?: Lang }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="card stack" style={{ gap: 14, background: "var(--mint)", border: "none" }}>
      <p style={{ fontSize: "var(--fs-body)", lineHeight: 1.55, whiteSpace: "pre-line" }}>{text}</p>
      {send ? <SendToAI text={text} id={id} lang={send} promptLang="en" /> : <button
        type="button"
        className="btn btn-small"
        style={{ alignSelf: "flex-start" }}
        onClick={async () => {
          try { await navigator.clipboard.writeText(text); } catch {}
          setOk(true);
          setTimeout(() => setOk(false), 1800);
          track("copy", { item: id, promptLang: "en" });
        }}
      >
        {ok ? done : label}
      </button>}
    </div>
  );
}
