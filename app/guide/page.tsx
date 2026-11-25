import { Guide } from "@/components/Guide";
import { toLang } from "@/lib/i18n";

// Open since 25 Nov 2026: part of the Heart & blood vessels guide, no personal link needed.
export const metadata = { title: "Your cholesterol result: a guide for you and your AI" };

export default async function GuidePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = toLang((await searchParams).lang);
  return <Guide initialLang={lang} preview={false} />;
}
