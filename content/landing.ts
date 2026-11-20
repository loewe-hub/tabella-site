import type { Lang } from "@/lib/i18n";

// Landing and sign-up copy. EN is the master; IT and DE are drafts awaiting native review.
export const landing: Record<Lang, {
  nav: { how: string; inside: string; faq: string; map: string; home: string; cta: string };
  mapEyebrow: string;
  mapH: string;
  mapP: string;
  mapCta: string;
  eyebrow: string;
  h1: string;
  sub: string;
  cta: string;
  ctaSecondary: string;
  reassurance: string;
  cardTitle: string;
  cardItems: string[];
  cardNote: string;
  bandQuote: string;
  bandStat: string;
  bandSource: string;
  howH: string;
  steps: { h: string; p: string }[];
  insideH: string;
  insideP: string;
  parts: { h: string; p: string }[];
  principleH: string;
  principleP: string;
  faqH: string;
  faq: { q: string; a: string }[];
  finalH: string;
  finalP: string;
  disclaimer: string;
  weeklyLink: string;
}> = {
  en: {
    nav: { how: "How it works", inside: "What's inside", faq: "FAQ", map: "The map", home: "Home", cta: "Get the free guide" },
    mapEyebrow: "Free · no sign-up",
    mapH: "One blood test. More than \"all good?\"",
    mapP: "See how your markers connect: heart, metabolism and the rest of your report. Tap any marker for what it signals, how strong the evidence is, and a prompt to ask your AI.",
    mapCta: "Explore the map",
    eyebrow: "Just got your blood test results?",
    h1: "The questions you didn't know to ask.",
    sub: "A free guide to make sense of your cholesterol results with the AI you already use, and walk into your doctor's office prepared.",
    cta: "Get the free guide",
    ctaSecondary: "See how it works",
    reassurance: "Free. We never see your results. Unsubscribe anytime.",
    cardTitle: "Did your AI cover these?",
    cardItems: ["My risk category and the target that goes with it", "Lp(a): has it ever been measured?", "Signs of insulin resistance", "Where to get tested near me"],
    cardNote: "Not covered? Each item comes with a ready question to ask.",
    bandQuote: "\"Normal\" on your lab report is not your target. Your target depends on your own risk.",
    bandStat: "In Italy, only about 1 in 4 people with high cholesterol is being treated.",
    bandSource: "Source: CardioTarget – LDL Observatory, Nov 2026",
    howH: "How it works",
    steps: [
      { h: "Get the guide", p: "Leave your email and get the cholesterol guide. No health questions asked." },
      { h: "Talk it through with your AI", p: "Paste one prompt into ChatGPT, Claude or Gemini. Then use the checklist to catch what it missed." },
      { h: "See your doctor prepared", p: "Bring a one-page summary and your top three questions. Decide together." },
    ],
    insideH: "What's inside",
    insideP: "Five short parts. Questions, not answers: your doctor decides with you.",
    parts: [
      { h: "What most people miss", p: "the blind spots that change the outcome" },
      { h: "Your situation in 5 questions", p: "what to have clear before you start" },
      { h: "The language of your report", p: "LDL, ApoB, Lp(a), HbA1c, explained" },
      { h: "One prompt + a checklist", p: "the full picture, lifestyle evidence, tests where you live" },
      { h: "Your visit, step by step", p: "before, during, after" },
    ],
    principleH: "We equip.\nWe don't answer.",
    principleP: "We never give medical advice and never see your results. Your data stays in your own AI chat. You keep the decision, together with your doctor.",
    faqH: "Questions",
    faq: [
      { q: "Is this medical advice?", a: "No. It's education: the questions to ask, not the answers. Your doctor decides with you." },
      { q: "Do you see my results?", a: "No. You work with your own AI. We only have your email." },
      { q: "Which AI does it work with?", a: "Any chat assistant: ChatGPT, Claude, Gemini and others." },
      { q: "Does it work outside Italy?", a: "Yes. The guide works anywhere; your AI looks up the options where you live." },
    ],
    finalH: "Your next blood test is coming.",
    finalP: "Get the guide now and go in with the right questions.",
    disclaimer: "Educational content, not medical advice. If you have chest pain or sudden symptoms, call 112.",
    weeklyLink: "Just want the weekly prompts?",
  },
  it: {
    nav: { how: "Come funziona", inside: "Cosa contiene", faq: "Domande", map: "La mappa", home: "Home", cta: "Ricevi la guida gratuita" },
    mapEyebrow: "Gratis · senza iscrizione",
    mapH: "Un esame del sangue. Più di \"tutto a posto?\"",
    mapP: "Scopri come si collegano i tuoi valori: cuore, metabolismo e il resto del referto. Tocca un valore per vedere cosa segnala, quanto sono solide le prove e una domanda da fare alla tua AI. La mappa è in inglese.",
    mapCta: "Esplora la mappa",
    eyebrow: "Hai appena ricevuto le analisi del sangue?",
    h1: "Le domande che non sapevi di dover fare.",
    sub: "Una guida gratuita per capire le tue analisi del colesterolo con l'AI che usi già, e arrivare preparato dal medico.",
    cta: "Ricevi la guida gratuita",
    ctaSecondary: "Scopri come funziona",
    reassurance: "Gratis. Non vediamo mai i tuoi risultati. Disiscriviti quando vuoi.",
    cardTitle: "La tua AI ha toccato questi punti?",
    cardItems: ["La mia categoria di rischio e l'obiettivo che ne deriva", "Lp(a): è mai stata misurata?", "Segnali di insulino-resistenza", "Dove fare gli esami vicino a me"],
    cardNote: "Manca qualcosa? Ogni punto ha una domanda pronta da fare.",
    bandQuote: "\"Normale\" sul referto non è il tuo obiettivo. Il tuo obiettivo dipende dal tuo rischio.",
    bandStat: "In Italia solo circa 1 persona su 4 con il colesterolo alto è in cura.",
    bandSource: "Fonte: CardioTarget – Osservatorio LDL, nov 2026",
    howH: "Come funziona",
    steps: [
      { h: "Ricevi la guida", p: "Lascia la tua email e ricevi la guida sul colesterolo. Nessuna domanda sulla salute." },
      { h: "Parlane con la tua AI", p: "Incolla un prompt in ChatGPT, Claude o Gemini. Poi usa la checklist per vedere cosa ha tralasciato." },
      { h: "Vai dal medico preparato", p: "Porta un riassunto di una pagina e le tue tre domande principali. Decidete insieme." },
    ],
    insideH: "Cosa contiene",
    insideP: "Cinque parti brevi. Domande, non risposte: decidi insieme al tuo medico.",
    parts: [
      { h: "Cosa sfugge ai più", p: "i punti ciechi che cambiano l'esito" },
      { h: "La tua situazione in 5 domande", p: "cosa avere chiaro prima di iniziare" },
      { h: "Le parole del tuo referto", p: "LDL, ApoB, Lp(a), HbA1c, spiegati" },
      { h: "Un prompt + una checklist", p: "il quadro completo, le prove sullo stile di vita, gli esami dove vivi" },
      { h: "La tua visita, passo per passo", p: "prima, durante, dopo" },
    ],
    principleH: "Ti prepariamo.\nNon rispondiamo al posto tuo.",
    principleP: "Non diamo mai consigli medici e non vediamo mai i tuoi risultati. I tuoi dati restano nella tua chat con l'AI. La decisione resta tua, insieme al tuo medico.",
    faqH: "Domande",
    faq: [
      { q: "È un consiglio medico?", a: "No. È educazione: le domande da fare, non le risposte. Decidi insieme al tuo medico." },
      { q: "Vedete i miei risultati?", a: "No. Lavori con la tua AI. Noi abbiamo solo la tua email." },
      { q: "Con quale AI funziona?", a: "Con qualsiasi assistente: ChatGPT, Claude, Gemini e altri." },
      { q: "Funziona anche fuori dall'Italia?", a: "Sì. La guida funziona ovunque; la tua AI cerca le opzioni dove vivi." },
    ],
    finalH: "Il tuo prossimo esame del sangue arriverà.",
    finalP: "Ricevi la guida ora e arriva con le domande giuste.",
    disclaimer: "Contenuto educativo, non un consiglio medico. In caso di dolore al petto o sintomi improvvisi, chiama il 112.",
    weeklyLink: "Vuoi solo i prompt settimanali?",
  },
  de: {
    nav: { how: "So funktioniert's", inside: "Inhalt", faq: "Fragen", map: "Die Karte", home: "Start", cta: "Kostenlosen Leitfaden holen" },
    mapEyebrow: "Kostenlos · ohne Anmeldung",
    mapH: "Ein Bluttest. Mehr als \"alles gut?\"",
    mapP: "Sieh, wie deine Werte zusammenhängen: Herz, Stoffwechsel und der Rest deines Befunds. Tippe auf einen Wert: was er signalisiert, wie stark die Evidenz ist und eine Frage für deine KI. Die Karte ist auf Englisch.",
    mapCta: "Karte ansehen",
    eyebrow: "Gerade deine Blutwerte bekommen?",
    h1: "Die Fragen, von denen du nicht wusstest, dass du sie stellen solltest.",
    sub: "Ein kostenloser Leitfaden, um deine Cholesterinwerte mit der KI zu verstehen, die du schon nutzt, und gut vorbereitet zum Arzt zu gehen.",
    cta: "Kostenlosen Leitfaden holen",
    ctaSecondary: "So funktioniert's",
    reassurance: "Kostenlos. Wir sehen deine Werte nie. Jederzeit abmeldbar.",
    cardTitle: "Hat deine KI das angesprochen?",
    cardItems: ["Meine Risikokategorie und der passende Zielwert", "Lp(a): Wurde es je gemessen?", "Anzeichen einer Insulinresistenz", "Wo ich mich in meiner Nähe testen lassen kann"],
    cardNote: "Etwas fehlt? Zu jedem Punkt gibt es eine fertige Frage.",
    bandQuote: "„Normal“ im Laborbefund ist nicht dein Zielwert. Dein Ziel hängt von deinem eigenen Risiko ab.",
    bandStat: "In Italien wird nur etwa 1 von 4 Menschen mit hohem Cholesterin behandelt.",
    bandSource: "Quelle: CardioTarget – LDL-Observatorium, Nov. 2026",
    howH: "So funktioniert's",
    steps: [
      { h: "Leitfaden holen", p: "Gib deine E-Mail an und erhalte den Cholesterin-Leitfaden. Keine Gesundheitsfragen." },
      { h: "Mit deiner KI durchgehen", p: "Füge einen Prompt in ChatGPT, Claude oder Gemini ein. Dann zeigt dir die Checkliste, was gefehlt hat." },
      { h: "Vorbereitet zum Arzt", p: "Bring eine einseitige Zusammenfassung und deine drei wichtigsten Fragen mit. Entscheidet gemeinsam." },
    ],
    insideH: "Inhalt",
    insideP: "Fünf kurze Teile. Fragen, keine Antworten: Du entscheidest gemeinsam mit deinem Arzt.",
    parts: [
      { h: "Was die meisten übersehen", p: "die blinden Flecken, die den Unterschied machen" },
      { h: "Deine Situation in 5 Fragen", p: "was du vorher klären solltest" },
      { h: "Die Sprache deines Befunds", p: "LDL, ApoB, Lp(a), HbA1c, erklärt" },
      { h: "Ein Prompt + eine Checkliste", p: "das ganze Bild, Evidenz zum Lebensstil, Tests vor Ort" },
      { h: "Dein Termin, Schritt für Schritt", p: "davor, währenddessen, danach" },
    ],
    principleH: "Wir rüsten dich aus.\nWir antworten nicht für dich.",
    principleP: "Wir geben nie medizinischen Rat und sehen deine Werte nie. Deine Daten bleiben in deinem eigenen KI-Chat. Die Entscheidung triffst du, gemeinsam mit deinem Arzt.",
    faqH: "Fragen",
    faq: [
      { q: "Ist das medizinische Beratung?", a: "Nein. Es ist Bildung: die richtigen Fragen, nicht die Antworten. Du entscheidest mit deinem Arzt." },
      { q: "Seht ihr meine Werte?", a: "Nein. Du arbeitest mit deiner eigenen KI. Wir haben nur deine E-Mail." },
      { q: "Mit welcher KI funktioniert es?", a: "Mit jedem Chat-Assistenten: ChatGPT, Claude, Gemini und anderen." },
      { q: "Funktioniert es außerhalb Italiens?", a: "Ja. Der Leitfaden funktioniert überall; deine KI sucht die Angebote vor Ort." },
    ],
    finalH: "Dein nächster Bluttest kommt bestimmt.",
    finalP: "Hol dir jetzt den Leitfaden und geh mit den richtigen Fragen hin.",
    disclaimer: "Bildungsinhalt, keine medizinische Beratung. Bei Brustschmerzen oder plötzlichen Symptomen: 112 anrufen.",
    weeklyLink: "Nur die wöchentlichen Prompts?",
  },
};
