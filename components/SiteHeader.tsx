import Link from "next/link";
import { Brand } from "@/components/Logo";
import { LangSwitch } from "@/components/LangSwitch";
import { home } from "@/content/home";
import type { Lang } from "@/lib/i18n";

// Sticky header for the landing page and Learn: How it works · Learn · Act, language switch on the far right.
export function SiteHeader({ lang, path, animated = false }: { lang: Lang; path: string; animated?: boolean }) {
  const t = home[lang];
  const q = lang === "en" ? "" : `?lang=${lang}`;
  return (
    <header className="site-header sticky">
      <div className="wrap">
        <Brand href={`/${q}`} animated={animated} />
        <nav aria-label="Main" className="nav">
          <Link href={`/${q}#compare`} className="hide-sm">{t.nav.how}</Link>
          <Link href={`/learn${q}`}>{t.nav.learn}</Link>
          <Link href={`/signup${q}`} className="btn btn-small">{t.nav.cta}</Link>
          <LangSwitch current={lang} path={path} />
        </nav>
      </div>
    </header>
  );
}
