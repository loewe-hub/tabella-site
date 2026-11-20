import Link from "next/link";
import { brand } from "@/config/brand";
import type { Lang } from "@/lib/i18n";

const LABELS: Record<Lang, { privacy: string; terms: string }> = {
  en: { privacy: "Privacy notice", terms: "Terms" },
  it: { privacy: "Informativa privacy", terms: "Termini d'uso" },
  de: { privacy: "Datenschutz", terms: "Nutzungsbedingungen" },
};

export function Footer({ disclaimer, lang = "en" }: { disclaimer: string; lang?: Lang }) {
  const t = LABELS[lang];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p style={{ maxWidth: 560 }}>{disclaimer}</p>
        <nav aria-label="Legal" className="row" style={{ gap: 20 }}>
          <Link href="/privacy">{t.privacy}</Link>
          <Link href="/terms">{t.terms}</Link>
          <span>
            {brand.publisher} · {brand.vatNumber}
          </span>
        </nav>
      </div>
    </footer>
  );
}
