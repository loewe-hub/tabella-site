import type { StoryCopy } from "@/content/story";

// A small mock of issue 1, so visitors see at a glance that Curiact is a newsletter.
export function EmailPreview({ p }: { p: StoryCopy["preview"] }) {
  return (
    <figure className="email-preview" aria-label={p.label}>
      <figcaption className="eyebrow">{p.label}</figcaption>
      <div className="email-card">
        <div className="email-head">
          <span className="email-dot" aria-hidden="true">C</span>
          <div className="stack" style={{ gap: 2, minWidth: 0 }}>
            <p className="tiny subtle">{p.meta}</p>
            <p className="email-subject">{p.subject}</p>
          </div>
        </div>
        <p className="small">{p.body}</p>
        <p className="small" style={{ fontWeight: 700 }}>{p.actionH}</p>
        <p className="small muted">{p.action}</p>
        <span className="email-btn">{p.button}</span>
      </div>
    </figure>
  );
}
