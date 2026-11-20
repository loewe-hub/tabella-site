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
  whyEyebrow: string;
  whyH: string;
  stats: { n: string; text: string; src: string; href: string }[];
  whyLine: string;
  isH: string;
  is: string[];
  notH: string;
  not: string[];
  principle: string;
  freeH: string;
  freeP: string;
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
    whyEyebrow: "Why Curiact",
    whyH: "Asking AI is how people learn about their health now.",
    stats: [
      { n: "300M+", text: "people ask ChatGPT about their health every week.", src: "OpenAI, 2026", href: "https://openai.com/index/health-in-chatgpt/" },
      { n: "95% vs 35%", text: "AI alone found the right condition in 95% of test cases. People using the same AI: fewer than 35%. The gap is the questions.", src: "Oxford, Nature Medicine 2026", href: "https://pubmed.ncbi.nlm.nih.gov/41663592/" },
      { n: "1 in 3", text: "US adults now use AI for health information, double the year before.", src: "Rock Health, 2026", href: "https://rockhealth.com/rock-weekly/one-in-three-consumers-is-using-ai-for-health-questions/" },
    ],
    whyLine: "We don't replace your AI or your doctor. We help you ask well, so you understand more and decide together.",
    isH: "What we are",
    is: ["Guides and questions for the AI you already use", "Built around real moments, like your blood test", "Based on current guidelines, made in Europe"],
    notH: "What we're not",
    not: ["An app that reads your results", "A doctor or a diagnosis", "A place that stores your health data: we never see your results"],
    principle: "We choose science-based findings over any commercial opportunity.",
    freeH: "Why is it free?",
    freeP: "The guides and the weekly prompts are free. Later we'll offer deeper country editions and work with organisations that want to give these guides to their members. We will never sell your personal data.",
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
    whyEyebrow: "Perché Curiact",
    whyH: "Chiedere all'AI è il nuovo modo di informarsi sulla salute.",
    stats: [
      { n: "300M+", text: "persone ogni settimana fanno domande sulla salute a ChatGPT.", src: "OpenAI, 2026", href: "https://openai.com/index/health-in-chatgpt/" },
      { n: "95% vs 35%", text: "Da sola, l'AI ha trovato la condizione giusta nel 95% dei casi di prova. Le persone che usavano la stessa AI: meno del 35%. La differenza sta nelle domande.", src: "Oxford, Nature Medicine 2026", href: "https://pubmed.ncbi.nlm.nih.gov/41663592/" },
      { n: "73%", text: "degli italiani tra 18 e 34 anni usa già l'AI come prima fonte per la salute.", src: "Salute Artificiale, 2026", href: "https://www.avvenire.it/vita-e-cura/salute-il-942-degli-italiani-chiede-a-google-o-allia_104031" },
    ],
    whyLine: "Non sostituiamo la tua AI né il tuo medico. Ti aiutiamo a chiedere bene, per capire di più e decidere insieme.",
    isH: "Cosa siamo",
    is: ["Guide e domande per l'AI che già usi", "Pensate per momenti reali, come le tue analisi del sangue", "Basate sulle linee guida attuali, fatte in Europa"],
    notH: "Cosa non siamo",
    not: ["Un'app che legge i tuoi risultati", "Un medico o una diagnosi", "Un luogo che conserva i tuoi dati sanitari: non vediamo mai i tuoi risultati"],
    principle: "Scegliamo le evidenze scientifiche prima di qualsiasi opportunità commerciale.",
    freeH: "Perché è gratis?",
    freeP: "Le guide e i prompt settimanali sono gratuiti. In futuro offriremo edizioni per Paese più approfondite e lavoreremo con organizzazioni che vogliono offrire queste guide ai propri iscritti. Non venderemo mai i tuoi dati personali.",
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
    whyEyebrow: "Warum Curiact",
    whyH: "KI fragen ist heute der Weg, sich über Gesundheit zu informieren.",
    stats: [
      { n: "300 Mio.+", text: "Menschen stellen ChatGPT jede Woche Gesundheitsfragen.", src: "OpenAI, 2026", href: "https://openai.com/index/health-in-chatgpt/" },
      { n: "95 % vs. 35 %", text: "Allein fand die KI in 95 % der Testfälle die richtige Erkrankung. Menschen mit derselben KI: unter 35 %. Der Unterschied liegt in den Fragen.", src: "Oxford, Nature Medicine 2026", href: "https://pubmed.ncbi.nlm.nih.gov/41663592/" },
      { n: "7 von 10", text: "Deutschen, die online zu Gesundheit recherchieren, fragen bereits einen KI-Chatbot.", src: "Bitkom, 2026", href: "https://www.bitkom.org/Presse/Presseinformation/8-von-10-suchen-Krankheit-Beschwerden-Rat-im-Netz" },
    ],
    whyLine: "Wir ersetzen weder deine KI noch deinen Arzt. Wir helfen dir, gut zu fragen, damit du mehr verstehst und gemeinsam entscheidest.",
    isH: "Was wir sind",
    is: ["Leitfäden und Fragen für die KI, die du schon nutzt", "Gebaut für echte Momente, wie deinen Bluttest", "Auf Basis aktueller Leitlinien, gemacht in Europa"],
    notH: "Was wir nicht sind",
    not: ["Eine App, die deine Werte liest", "Ein Arzt oder eine Diagnose", "Ein Ort, der deine Gesundheitsdaten speichert: Wir sehen deine Werte nie"],
    principle: "Wir stellen wissenschaftliche Erkenntnisse über jede kommerzielle Gelegenheit.",
    freeH: "Warum ist das kostenlos?",
    freeP: "Die Leitfäden und die wöchentlichen Prompts sind kostenlos. Später bieten wir ausführlichere Länderausgaben an und arbeiten mit Organisationen, die diese Leitfäden ihren Mitgliedern anbieten wollen. Wir werden deine persönlichen Daten niemals verkaufen.",
  },
};
