import Link from "next/link";
import { brand } from "@/config/brand";

export function Footer({ disclaimer }: { disclaimer: string }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p style={{ maxWidth: 560 }}>{disclaimer}</p>
        <nav aria-label="Legal" className="row" style={{ gap: 20 }}>
          <Link href="/privacy">Privacy notice</Link>
          <Link href="/terms">Terms</Link>
          <span>
            {brand.publisher} · {brand.vatNumber}
          </span>
        </nav>
      </div>
    </footer>
  );
}
