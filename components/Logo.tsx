import Link from "next/link";

// Kept for the guide header (dark background).
export function LogoMark({ size = 32, inverted = false }: { size?: number; inverted?: boolean }) {
  const bg = inverted ? "#F6D9C4" : "#0E5E60";
  const fg = inverted ? "#0E5E60" : "#F6D9C4";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill={bg} />
      <path d="M9 11h14M9 16h14M9 21h9" stroke={fg} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// Wordmark: Curi + act. `animated` fades it in after the hero animation (landing only).
export function Brand({ href = "/", animated = false }: { href?: string; animated?: boolean }) {
  return (
    <Link href={href} className={`brand${animated ? " cx-logo" : ""}`} aria-label="Curiact">
      Curi<span className="brand-act">act</span>
    </Link>
  );
}
