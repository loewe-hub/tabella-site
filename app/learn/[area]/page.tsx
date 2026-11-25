import { notFound } from "next/navigation";
import { AreaGuide } from "@/components/AreaGuide";
import { AREA_NAMES, AREA_ORDER, AREAS, type AreaId } from "@/content/areas";
import { toLang } from "@/lib/i18n";

export function generateStaticParams() {
  return AREA_ORDER.map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const n = AREA_NAMES.en[area as AreaId];
  return n ? { title: `${n.title}: ${AREAS[area as AreaId].h1}`, description: n.tagline } : {};
}

export default async function AreaPage({ params, searchParams }: { params: Promise<{ area: string }>; searchParams: Promise<{ lang?: string }> }) {
  const { area } = await params;
  if (!(AREA_ORDER as string[]).includes(area)) notFound();
  const lang = toLang((await searchParams).lang);
  return <AreaGuide id={area as AreaId} initialLang={lang} />;
}
