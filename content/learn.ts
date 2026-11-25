// "Learn" library (25 Nov 2026): first version. Series issues are added as they are approved.
import type { Lang } from "@/lib/i18n";

type Card = { tag: string; h: string; p: string; cta?: string; href?: "share" | "map" | "signup" };

export const learn: Record<Lang, {
  title: string; h1: string; intro: string; cards: Card[];
  seriesTag: string; seriesH: string; seriesP: string; issues: string[]; seriesCta: string;
}> = {
  en: {
    title: "Learn",
    h1: "Learn",
    intro: "Short, plain-language pieces on your blood test and your health, each with a prompt to try with your AI.",
    cards: [
      { tag: "Free guide", h: "Share safely", p: "What to leave out and which settings to switch off before you share health data with your AI.", cta: "Read the guide", href: "share" },
      { tag: "Free · no sign-up", h: "The marker map", p: "How the values on your report connect: heart, metabolism and the rest. Tap a marker to see what to ask your AI.", cta: "Explore the map", href: "map" },
      { tag: "Free guide", h: "Your cholesterol target", p: "One prompt, a checklist and what to bring to your doctor. Sent to your inbox.", cta: "Get the guide", href: "signup" },
    ],
    seriesTag: "Series 1 · starting 16 December",
    seriesH: "What your blood test is telling you",
    seriesP: "Eight short issues, one a week. Each one joins a few more dots on your report.",
    issues: [
      "Your blood test isn't a story",
      "Your heart has more than one number",
      "The \"good\" and \"bad\" cholesterol myth",
      "ApoB and Lp(a): worth knowing, rarely tested",
      "Your metabolic health is already on the report",
      "One root, three names: insulin resistance, diabetes, fatty liver",
      "Your brain: careful what we're looking at",
      "Kidneys and urine: the quiet link to your heart",
    ],
    seriesCta: "Get it in your inbox",
  },
  it: {
    title: "Impara",
    h1: "Impara",
    intro: "Contenuti brevi e chiari sulle tue analisi e sulla tua salute, ognuno con un prompt da provare con la tua AI.",
    cards: [
      { tag: "Guida gratuita", h: "Condividi in sicurezza", p: "Cosa togliere e quali impostazioni disattivare prima di condividere dati sanitari con la tua AI.", cta: "Leggi la guida", href: "share" },
      { tag: "Gratis · senza iscrizione", h: "La mappa dei valori", p: "Come si collegano i valori del tuo referto: cuore, metabolismo e il resto. Tocca un valore per vedere cosa chiedere alla tua AI.", cta: "Esplora la mappa", href: "map" },
      { tag: "Guida gratuita", h: "Il tuo obiettivo di colesterolo", p: "Un prompt, una checklist e cosa portare dal medico. Via email.", cta: "Ricevi la guida", href: "signup" },
    ],
    seriesTag: "Serie 1 · dal 16 dicembre",
    seriesH: "Cosa ti dicono le tue analisi del sangue",
    seriesP: "Otto brevi uscite, una a settimana. Ognuna collega qualche punto in più del tuo referto.",
    issues: [
      "Le tue analisi non raccontano una storia",
      "Il tuo cuore ha più di un numero",
      "Il mito del colesterolo \"buono\" e \"cattivo\"",
      "ApoB e Lp(a): da conoscere, raramente misurati",
      "La tua salute metabolica è già nel referto",
      "Una radice, tre nomi: insulino-resistenza, diabete, fegato grasso",
      "Il cervello: attenzione a cosa guardiamo",
      "Reni e urine: il legame silenzioso con il cuore",
    ],
    seriesCta: "Ricevila via email",
  },
  de: {
    title: "Lernen",
    h1: "Lernen",
    intro: "Kurze, verständliche Beiträge zu deinem Bluttest und deiner Gesundheit, jeweils mit einem Prompt für deine KI.",
    cards: [
      { tag: "Kostenloser Leitfaden", h: "Sicherer teilen", p: "Was du weglässt und welche Einstellungen du ausschaltest, bevor du Gesundheitsdaten mit deiner KI teilst.", cta: "Leitfaden lesen", href: "share" },
      { tag: "Kostenlos · ohne Anmeldung", h: "Die Werte-Karte", p: "Wie die Werte in deinem Befund zusammenhängen: Herz, Stoffwechsel und der Rest. Tippe auf einen Wert und sieh, was du deine KI fragen kannst.", cta: "Karte ansehen", href: "map" },
      { tag: "Kostenloser Leitfaden", h: "Dein Cholesterin-Zielwert", p: "Ein Prompt, eine Checkliste und was du zum Arzt mitnimmst. Per E-Mail.", cta: "Leitfaden holen", href: "signup" },
    ],
    seriesTag: "Serie 1 · ab 16. Dezember",
    seriesH: "Was dir dein Bluttest sagt",
    seriesP: "Acht kurze Ausgaben, eine pro Woche. Jede verbindet ein paar Punkte mehr in deinem Befund.",
    issues: [
      "Dein Bluttest erzählt keine Geschichte",
      "Dein Herz hat mehr als eine Zahl",
      "Der Mythos vom \"guten\" und \"schlechten\" Cholesterin",
      "ApoB und Lp(a): wichtig, selten gemessen",
      "Deine Stoffwechselgesundheit steht schon im Befund",
      "Eine Wurzel, drei Namen: Insulinresistenz, Diabetes, Fettleber",
      "Dein Gehirn: Vorsicht, worauf wir schauen",
      "Nieren und Urin: die stille Verbindung zum Herzen",
    ],
    seriesCta: "Per E-Mail erhalten",
  },
};
