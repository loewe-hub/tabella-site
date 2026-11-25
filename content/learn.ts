// "Learn" hub (25 Nov 2026): results-now prompt, the map of areas (guides), share safely, weekly topics.
import type { Lang } from "@/lib/i18n";

import type { AreaId } from "@/content/areas";

// Which guide each weekly topic belongs to (same order as issues).
export const TOPIC_AREA: AreaId[] = ["your-blood-test", "heart", "heart", "heart", "metabolism", "metabolism", "brain", "kidneys"];
export const TOPIC_DATES = ["16 Dec", "23 Dec", "13 Jan", "20 Jan", "27 Jan", "3 Feb", "10 Feb", "17 Feb"];

export const learn: Record<Lang, {
  title: string; h1: string; intro: string;
  resultsTag: string; resultsH: string; resultsP: string; resultsCta: string;
  mapH: string; mapP: string; mapLink: string;
  shareTag: string; shareH: string; shareP: string; shareCta: string;
  seriesTag: string; seriesH: string; seriesP: string; issues: string[]; seriesCta: string;
}> = {
  en: {
    title: "Learn",
    h1: "Learn",
    intro: "Short, plain-language pieces on your blood test and your health, each with a prompt to try with your AI.",
    resultsTag: "Got results now?",
    resultsH: "Read your whole report at once",
    resultsP: "One prompt for your AI: sorted by health area, what's outside the range and why, what's missing, and questions for your doctor.",
    resultsCta: "Start here",
    mapH: "The map of your blood test",
    mapP: "Each area has a complete guide: the markers in plain words, how they connect, a prompt and questions for your doctor.",
    mapLink: "Interactive marker map",
    shareTag: "Before you share",
    shareH: "Share safely",
    shareP: "What to leave out and which settings to switch off before you share health data with your AI.",
    shareCta: "Read the guide",
    seriesTag: "Every Wednesday",
    seriesH: "One small topic a week",
    seriesP: "Each topic stands on its own and links to its guide. The first eight, from 16 December:",
    issues: [
      "Your blood test isn't a story",
      "Your heart has more than one number",
      "LDL, HDL and ApoB: particles, not good and bad",
      "Lp(a): the inherited one nobody tests",
      "Your metabolic health is already on the report",
      "One root, three names: insulin resistance, diabetes, fatty liver",
      "Your brain: careful what we're looking at",
      "Kidneys and urine: the quiet link to your heart",
    ],
    seriesCta: "Get it weekly",
  },
  it: {
    title: "Impara",
    h1: "Impara",
    intro: "Contenuti brevi e chiari sulle tue analisi e sulla tua salute, ognuno con un prompt da provare con la tua AI.",
    resultsTag: "Hai appena le analisi?",
    resultsH: "Leggi tutto il referto in una volta",
    resultsP: "Un prompt per la tua AI: ordinato per area, cosa è fuori range e perché, cosa manca e le domande per il medico.",
    resultsCta: "Inizia da qui",
    mapH: "La mappa delle tue analisi",
    mapP: "Ogni area ha una guida completa: i valori in parole semplici, come si collegano, un prompt e le domande per il medico.",
    mapLink: "Mappa interattiva dei valori",
    shareTag: "Prima di condividere",
    shareH: "Condividi in sicurezza",
    shareP: "Cosa togliere e quali impostazioni disattivare prima di condividere dati sanitari con la tua AI.",
    shareCta: "Leggi la guida",
    seriesTag: "Ogni mercoledì",
    seriesH: "Un piccolo tema a settimana",
    seriesP: "Ogni tema è autonomo e rimanda alla sua guida. I primi otto, dal 16 dicembre:",
    issues: [
      "Le tue analisi non raccontano una storia",
      "Il tuo cuore ha più di un numero",
      "LDL, HDL e ApoB: particelle, non buono e cattivo",
      "Lp(a): quella ereditaria che nessuno misura",
      "La tua salute metabolica è già nel referto",
      "Una radice, tre nomi: insulino-resistenza, diabete, fegato grasso",
      "Il cervello: attenzione a cosa guardiamo",
      "Reni e urine: il legame silenzioso con il cuore",
    ],
    seriesCta: "Ricevilo ogni settimana",
  },
  de: {
    title: "Lernen",
    h1: "Lernen",
    intro: "Kurze, verständliche Beiträge zu deinem Bluttest und deiner Gesundheit, jeweils mit einem Prompt für deine KI.",
    resultsTag: "Befund gerade bekommen?",
    resultsH: "Lies deinen ganzen Befund auf einmal",
    resultsP: "Ein Prompt für deine KI: nach Bereichen sortiert, was außerhalb liegt und warum, was fehlt, und Fragen für deinen Arzt.",
    resultsCta: "Hier starten",
    mapH: "Die Karte deines Bluttests",
    mapP: "Jeder Bereich hat einen vollständigen Leitfaden: die Werte verständlich erklärt, wie sie zusammenhängen, ein Prompt und Fragen für deinen Arzt.",
    mapLink: "Interaktive Werte-Karte",
    shareTag: "Bevor du teilst",
    shareH: "Sicherer teilen",
    shareP: "Was du weglässt und welche Einstellungen du ausschaltest, bevor du Gesundheitsdaten mit deiner KI teilst.",
    shareCta: "Leitfaden lesen",
    seriesTag: "Jeden Mittwoch",
    seriesH: "Ein kleines Thema pro Woche",
    seriesP: "Jedes Thema steht für sich und verweist auf seinen Leitfaden. Die ersten acht, ab 16. Dezember:",
    issues: [
      "Dein Bluttest erzählt keine Geschichte",
      "Dein Herz hat mehr als eine Zahl",
      "LDL, HDL und ApoB: Partikel, nicht gut und schlecht",
      "Lp(a): der vererbte Wert, den kaum jemand misst",
      "Deine Stoffwechselgesundheit steht schon im Befund",
      "Eine Wurzel, drei Namen: Insulinresistenz, Diabetes, Fettleber",
      "Dein Gehirn: Vorsicht, worauf wir schauen",
      "Nieren und Urin: die stille Verbindung zum Herzen",
    ],
    seriesCta: "Wöchentlich erhalten",
  },
};
