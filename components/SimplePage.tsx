import { Brand } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { landing } from "@/content/landing";
import type { Lang } from "@/lib/i18n";

export function SimplePage({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <div lang={lang}>
      <header className="site-header">
        <div className="wrap">
          <Brand href={lang === "en" ? "/" : `/?lang=${lang}`} />
        </div>
      </header>
      <main className="narrow" style={{ paddingTop: 24, paddingBottom: 48, maxWidth: 600 }}>
        <div className="card stack" style={{ gap: 22, borderRadius: 24, padding: 36, boxShadow: "0 24px 60px rgba(14,94,96,0.10)" }}>
          {children}
        </div>
      </main>
      <Footer disclaimer={landing[lang].disclaimer} />
    </div>
  );
}
