import Link from "next/link";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";

export function LangSwitch({ current, path }: { current: Lang; path: string }) {
  return (
    <nav aria-label="Language" className="lang-switch">
      {LANGS.map((l) => (
        <Link
          key={l}
          href={l === "en" ? path : `${path}?lang=${l}`}
          className={l === current ? "on" : undefined}
          aria-current={l === current ? "true" : undefined}
          hrefLang={l}
        >
          {LANG_LABEL[l]}
        </Link>
      ))}
    </nav>
  );
}
