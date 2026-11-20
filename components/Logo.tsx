import Link from "next/link";
import { brand } from "@/config/brand";

export function LogoMark({ size = 32, inverted = false }: { size?: number; inverted?: boolean }) {
  const bg = inverted ? "#DDF1EA" : "#0E5E60";
  const fg = inverted ? "#0E5E60" : "#DDF1EA";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill={bg} />
      <path d="M9 11h14M9 16h14M9 21h9" stroke={fg} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="brand">
      <LogoMark />
      <span>{brand.name}</span>
    </Link>
  );
}
