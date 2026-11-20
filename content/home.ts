import type { Lang } from "@/lib/i18n";

// Landing v2 copy (warm palette, Curious → Act → Curiact hero). EN is the master; IT and DE are drafts awaiting native review.
// The hero animation stays in English in every language: it spells the brand name.

export type HomeCopy = {
  nav: { how: string; topics: string; map: string; cta: string };
  heroSub: string;
  cta: string;
  ctaSecondary: string;
  reassurance: string;
  triad: { k: string; h: string }[];
  chatH: string;
  chatP: string;
  bubbleUser: string;
  bubbleAi: string;
  checkTitle: string;
  checks: string[];
  statement: [string, string, string]; // before · highlighted word · after
  topicsH: string;
  tiles: { tag: string; title: string; kind: "guide" | "inside" | "soon" }[];
  weeklyH: string;
  weeklyP: string;
  weeklyCta: string;
};

export const home: Record<Lang, HomeCopy> = {
  en: {
    nav: { how: "How it works", topics: "Topics", map: "The map", cta: "Start with one question" },
    heroSub: "Be curious about your health. Then act on it, with your doctor.",
    cta: "Start with one question",
    ctaSecondary: "How it works",
    reassurance: "Free · Works with any AI · We never see your results",
    triad: [
      { k: "Curious", h: "Ask what you didn't know to ask." },
      { k: "Act", h: "Walk in with your top three questions." },
      { k: "Decide", h: "Together with your doctor. It's your call." },
    ],
    chatH: "Your AI. Better questions.",
    chatP: "One prompt starts the conversation. A short checklist shows what your AI didn't bring up.",
    bubbleUser: "I just got my cholesterol results. Ask me what you need to know first, one question at a time. Don't diagnose me.",
    bubbleAi: "Happy to help you prepare. First: has anyone in your family had a heart attack or stroke at a young age?",
    checkTitle: "Did your AI cover these?",
    checks: ["Lp(a): ever measured?", "How your body handles sugar", "Blood pressure in the picture"],
    statement: ["\"Normal\" on your lab report is ", "not", " your target."],
    topicsH: "Start where you are",
    tiles: [
      { tag: "Free guide", title: "Cholesterol", kind: "guide" },
      { tag: "In the guide", title: "Blood pressure", kind: "inside" },
      { tag: "In the guide", title: "Blood sugar", kind: "inside" },
      { tag: "Coming soon", title: "Your wearable + your AI", kind: "soon" },
    ],
    weeklyH: "Stay curious.",
    weeklyP: "One topic a week, a few prompts to try, and one small thing to do.",
    weeklyCta: "Get the weekly prompts",
  },
  it: {
    nav: { how: "Come funziona", topics: "Temi", map: "La mappa", cta: "Inizia con una domanda" },
    heroSub: "Sii curioso della tua salute. Poi agisci, insieme al tuo medico.",
    cta: "Inizia con una domanda",
    ctaSecondary: "Come funziona",
    reassurance: "Gratis · Funziona con qualsiasi AI · Non vediamo mai i tuoi risultati",
    triad: [
      { k: "Curioso", h: "Chiedi quello che non sapevi di dover chiedere." },
      { k: "Agisci", h: "Vai dal medico con le tue tre domande principali." },
      { k: "Decidi", h: "Insieme al tuo medico. La scelta è tua." },
    ],
    chatH: "La tua AI. Domande migliori.",
    chatP: "Un prompt avvia la conversazione. Una breve checklist mostra cosa la tua AI non ha toccato.",
    bubbleUser: "Ho appena ricevuto le analisi del colesterolo. Chiedimi prima ciò che ti serve, una domanda alla volta. Non farmi diagnosi.",
    bubbleAi: "Volentieri ti aiuto a prepararti. Prima domanda: qualcuno in famiglia ha avuto un infarto o un ictus in giovane età?",
    checkTitle: "La tua AI ha toccato questi punti?",
    checks: ["Lp(a): mai misurata?", "Come il corpo gestisce gli zuccheri", "La pressione nel quadro"],
    statement: ["\"Normale\" sul referto ", "non", " è il tuo obiettivo."],
    topicsH: "Parti da dove sei",
    tiles: [
      { tag: "Guida gratuita", title: "Colesterolo", kind: "guide" },
      { tag: "Nella guida", title: "Pressione", kind: "inside" },
      { tag: "Nella guida", title: "Zuccheri nel sangue", kind: "inside" },
      { tag: "In arrivo", title: "Il tuo wearable + la tua AI", kind: "soon" },
    ],
    weeklyH: "Resta curioso.",
    weeklyP: "Un tema a settimana, qualche prompt da provare e una piccola cosa da fare.",
    weeklyCta: "Ricevi i prompt settimanali",
  },
  de: {
    nav: { how: "So funktioniert's", topics: "Themen", map: "Die Karte", cta: "Mit einer Frage starten" },
    heroSub: "Sei neugierig auf deine Gesundheit. Dann handle, gemeinsam mit deinem Arzt.",
    cta: "Mit einer Frage starten",
    ctaSecondary: "So funktioniert's",
    reassurance: "Kostenlos · Mit jeder KI · Wir sehen deine Werte nie",
    triad: [
      { k: "Neugierig", h: "Frag, was du nicht zu fragen wusstest." },
      { k: "Handeln", h: "Geh mit deinen drei wichtigsten Fragen zum Arzt." },
      { k: "Entscheiden", h: "Gemeinsam mit deinem Arzt. Du entscheidest." },
    ],
    chatH: "Deine KI. Bessere Fragen.",
    chatP: "Ein Prompt startet das Gespräch. Eine kurze Checkliste zeigt, was deine KI nicht angesprochen hat.",
    bubbleUser: "Ich habe gerade meine Cholesterinwerte bekommen. Frag mich zuerst, was du wissen musst, eine Frage nach der anderen. Keine Diagnose.",
    bubbleAi: "Gern helfe ich dir bei der Vorbereitung. Zuerst: Hatte jemand in deiner Familie früh einen Herzinfarkt oder Schlaganfall?",
    checkTitle: "Hat deine KI das angesprochen?",
    checks: ["Lp(a): je gemessen?", "Wie dein Körper mit Zucker umgeht", "Blutdruck im Gesamtbild"],
    statement: ["\"Normal\" auf dem Befund ist ", "nicht", " dein Zielwert."],
    topicsH: "Fang da an, wo du stehst",
    tiles: [
      { tag: "Kostenloser Leitfaden", title: "Cholesterin", kind: "guide" },
      { tag: "Im Leitfaden", title: "Blutdruck", kind: "inside" },
      { tag: "Im Leitfaden", title: "Blutzucker", kind: "inside" },
      { tag: "Bald", title: "Dein Wearable + deine KI", kind: "soon" },
    ],
    weeklyH: "Bleib neugierig.",
    weeklyP: "Ein Thema pro Woche, ein paar Prompts zum Ausprobieren und eine kleine Sache zum Tun.",
    weeklyCta: "Wöchentliche Prompts erhalten",
  },
};
