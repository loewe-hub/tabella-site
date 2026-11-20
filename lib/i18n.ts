export const LANGS = ["en", "it", "de"] as const;
export type Lang = (typeof LANGS)[number];

export function toLang(value: unknown): Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value) ? (value as Lang) : "en";
}

export const LANG_LABEL: Record<Lang, string> = { en: "EN", it: "IT", de: "DE" };
