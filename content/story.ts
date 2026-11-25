import type { Lang } from "@/lib/i18n";

// Landing story (22 Nov 2026): behaviour → gap → same AI, different conversation → how → decide.
// Side-by-side excerpts are real ChatGPT answers (November 2026), shortened. IT/DE show them translated and say so.

type Bubble = { who: "you" | "ai"; text: string };
type Side = { tag: string; title: string; bubbles: Bubble[]; note: string; outcomeLabel: string; outcome: string[] };

export type StoryCopy = {
  heroSub: string;
  youEyebrow: string;
  youH: string;
  youStat: string;
  youStatText: string;
  youP: string;
  youSrc: string;
  gapEyebrow: string;
  gapH: string;
  gapA: string;
  gapAText: string;
  gapB: string;
  gapBText: string;
  gapP: string;
  gapSrc: string;
  sbsEyebrow: string;
  sbsH: string;
  sbsP: string;
  a: Side;
  b: Side;
  sbsNote: string;
  howEyebrow: string;
  howH: string;
  decideEyebrow: string;
  decideH: string;
  decideP: string;
  decideSrc: string;
  actH: string;
  actP: string;
  actCta: string;
  notEmergency: string;
  pillarsEyebrow: string;
  pillarsH: string;
  pillars: { h: string; p: string; tag: string; cta?: string; link?: "signup" | "weekly" | "share" }[];
};

const OX = "https://pubmed.ncbi.nlm.nih.gov/41663592/";
export const SOURCES = { openai: "https://openai.com/index/health-in-chatgpt/", oxford: OX };

export const story: Record<Lang, StoryCopy> = {
  en: {
    heroSub: "Better questions for your AI about your blood test, so you walk into your doctor's visit prepared.",
    youEyebrow: "You already do this",
    youH: "Asked your AI about a rash, a blood value or a medication? So has everyone.",
    youStat: "300M+",
    youStatText: "people ask ChatGPT about their health every week.",
    youP: "It's the new way to learn about your health: fast, private, and always there.",
    youSrc: "OpenAI, 2026",
    gapEyebrow: "But the answer depends on the question",
    gapH: "The AI often knows. The conversation is the gap.",
    gapA: "95%",
    gapAText: "AI alone found the right condition in test cases.",
    gapB: "< 35%",
    gapBText: "People using the same AI got there.",
    gapP: "Not because the AI didn't know, but because people didn't know what to tell it or what to ask.",
    gapSrc: "University of Oxford, Nature Medicine 2026",
    sbsEyebrow: "Same AI. Same number.",
    sbsH: "A different conversation.",
    sbsP: "Two real ChatGPT answers to the same result: LDL cholesterol of 170 mg/dL.",
    a: {
      tag: "On your own",
      title: "Starts with advice",
      bubbles: [
        { who: "you", text: "My LDL is 170. What should I do?" },
        { who: "ai", text: "An LDL cholesterol level of 170 mg/dL is high… Reduce butter, cream, fatty cheese… Aim for at least 150 minutes of exercise per week." },
        { who: "ai", text: "Should you take a statin? Possibly, yes." },
      ],
      note: "Only at the end does it ask your age, blood pressure or family history.",
      outcomeLabel: "You leave with",
      outcome: ["A to-do list", "A statin question"],
    },
    b: {
      tag: "With Curiact",
      title: "Starts with you",
      bubbles: [
        { who: "you", text: "I want to prepare for my doctor's visit. First ask me what you need to know, one question at a time. Don't diagnose me." },
        { who: "ai", text: "Having normal triglycerides and reasonably favourable HDL does not cancel out an elevated LDL." },
        { who: "ai", text: "I would not draw a conclusion about your overall cardiovascular risk from this report alone." },
      ],
      note: "It asked about age, blood pressure, lifestyle and family first, then checked official sources for where you live.",
      outcomeLabel: "You leave with",
      outcome: ["A one-page summary for your doctor", "6 questions, incl. Lp(a) and inherited causes", "What's covered where you live"],
    },
    sbsNote: "ChatGPT, November 2026, shortened excerpts. Your answers will differ.",
    howEyebrow: "How Curiact closes the gap",
    howH: "Curious, prepared, decided together.",
    decideEyebrow: "Then: decide with your doctor",
    decideH: "AI is good at explaining. Deciding is different.",
    decideP: "Sharing safely, asking well and learning all lead to one place: a better conversation with your doctor. In the same Oxford study, even the AI on its own picked the right next step only about half the time. So use it to be informed, and make the decisions together.",
    actH: "Curious? Act.",
    actP: "Get the free cholesterol guide, the weekly prompts, or both. You choose on the next page.",
    actCta: "Act",
    decideSrc: "University of Oxford, Nature Medicine 2026",
    notEmergency: "Not for new symptoms or emergencies: see a doctor or call 112",
    pillarsEyebrow: "What you get",
    pillarsH: "Three ways to use your AI better for your health.",
    pillars: [
      { h: "Share safely", p: "Set up your AI before you share health data: what to leave out, which settings to switch off, and the honest limits.", tag: "Free guide", cta: "Read the guide", link: "share" },
      { h: "Ask the right questions", p: "Prompts and checklists for real moments, built on current guidelines. Starting with your blood test and cholesterol.", tag: "Free guide", cta: "Get the guide", link: "signup" },
      { h: "Keep learning", p: "One topic a week, with prompts you can try on yourself right away.", tag: "Weekly", cta: "Get the weekly prompts", link: "weekly" },
    ],
  },
  it: {
    heroSub: "Domande migliori per la tua AI sulle analisi del sangue, per arrivare preparato dal medico.",
    youEyebrow: "Lo fai già",
    youH: "Hai chiesto alla tua AI di un'irritazione, di un valore o di un farmaco? Lo fanno tutti.",
    youStat: "300M+",
    youStatText: "persone ogni settimana fanno domande sulla salute a ChatGPT.",
    youP: "È il nuovo modo di informarsi sulla salute: veloce, privato, sempre disponibile.",
    youSrc: "OpenAI, 2026",
    gapEyebrow: "Ma la risposta dipende dalla domanda",
    gapH: "L'AI spesso sa. Il problema è la conversazione.",
    gapA: "95%",
    gapAText: "Da sola, l'AI ha trovato la condizione giusta nei casi di prova.",
    gapB: "< 35%",
    gapBText: "Le persone che usavano la stessa AI ci sono arrivate.",
    gapP: "Non perché l'AI non sapesse, ma perché le persone non sapevano cosa dirle o cosa chiedere.",
    gapSrc: "Università di Oxford, Nature Medicine 2026",
    sbsEyebrow: "Stessa AI. Stesso valore.",
    sbsH: "Una conversazione diversa.",
    sbsP: "Due risposte reali di ChatGPT allo stesso risultato: colesterolo LDL a 170 mg/dL.",
    a: {
      tag: "Da solo",
      title: "Parte dai consigli",
      bubbles: [
        { who: "you", text: "Il mio LDL è 170. Cosa devo fare?" },
        { who: "ai", text: "Un LDL di 170 mg/dL è alto… Riduci burro, panna, formaggi grassi… Punta ad almeno 150 minuti di attività a settimana." },
        { who: "ai", text: "Dovresti prendere una statina? Forse sì." },
      ],
      note: "Solo alla fine chiede età, pressione o familiarità.",
      outcomeLabel: "Ne esci con",
      outcome: ["Una lista di cose da fare", "Una domanda sulle statine"],
    },
    b: {
      tag: "Con Curiact",
      title: "Parte da te",
      bubbles: [
        { who: "you", text: "Voglio prepararmi alla visita dal medico. Prima chiedimi ciò che ti serve, una domanda alla volta. Non farmi diagnosi." },
        { who: "ai", text: "Trigliceridi nella norma e un HDL abbastanza favorevole non annullano un LDL elevato." },
        { who: "ai", text: "Da questo referto da solo non trarrei conclusioni sul tuo rischio cardiovascolare complessivo." },
      ],
      note: "Ha chiesto prima età, pressione, stile di vita e familiarità, poi ha cercato fonti ufficiali per dove vivi.",
      outcomeLabel: "Ne esci con",
      outcome: ["Un riassunto di una pagina per il medico", "6 domande, incl. Lp(a) e cause ereditarie", "Cosa è coperto dove vivi"],
    },
    sbsNote: "ChatGPT, novembre 2026, estratti abbreviati e tradotti. Le tue risposte saranno diverse.",
    howEyebrow: "Come Curiact colma il divario",
    howH: "Curioso, preparato, si decide insieme.",
    decideEyebrow: "Poi: decidi con il tuo medico",
    decideH: "L'AI è brava a spiegare. Decidere è un'altra cosa.",
    decideP: "Condividere in sicurezza, fare le domande giuste e continuare a imparare portano allo stesso punto: una conversazione migliore con il tuo medico. Nello stesso studio di Oxford, anche l'AI da sola ha scelto il passo successivo giusto solo in circa metà dei casi. Usala per informarti, e prendete le decisioni insieme.",
    actH: "Curious? Act.",
    actP: "Ricevi la guida gratuita sul colesterolo, i prompt settimanali o entrambi. Scegli nella pagina successiva.",
    actCta: "Act",
    decideSrc: "Università di Oxford, Nature Medicine 2026",
    notEmergency: "Non per sintomi nuovi o emergenze: rivolgiti a un medico o chiama il 112",
    pillarsEyebrow: "Cosa trovi qui",
    pillarsH: "Tre modi per usare meglio la tua AI per la salute.",
    pillars: [
      { h: "Condividi in sicurezza", p: "Imposta la tua AI prima di condividere dati sanitari: cosa togliere, quali impostazioni disattivare e i limiti reali.", tag: "Guida gratuita", cta: "Leggi la guida", link: "share" },
      { h: "Fai le domande giuste", p: "Prompt e checklist per momenti reali, basati sulle linee guida attuali. Si parte dalle analisi del sangue e dal colesterolo.", tag: "Guida gratuita", cta: "Ricevi la guida", link: "signup" },
      { h: "Continua a imparare", p: "Un tema a settimana, con prompt da provare subito su di te.", tag: "Settimanale", cta: "Ricevi i prompt settimanali", link: "weekly" },
    ],
  },
  de: {
    heroSub: "Bessere Fragen an deine KI zu deinem Bluttest, damit du vorbereitet zum Arzt gehst.",
    youEyebrow: "Das machst du schon",
    youH: "Deine KI schon mal nach einem Ausschlag, einem Blutwert oder einem Medikament gefragt? Das machen alle.",
    youStat: "300 Mio.+",
    youStatText: "Menschen stellen ChatGPT jede Woche Gesundheitsfragen.",
    youP: "Das ist der neue Weg, sich über Gesundheit zu informieren: schnell, privat, immer da.",
    youSrc: "OpenAI, 2026",
    gapEyebrow: "Aber die Antwort hängt von der Frage ab",
    gapH: "Die KI weiß es oft. Das Gespräch ist die Lücke.",
    gapA: "95 %",
    gapAText: "Allein fand die KI in Testfällen die richtige Erkrankung.",
    gapB: "< 35 %",
    gapBText: "Menschen mit derselben KI kamen dorthin.",
    gapP: "Nicht, weil die KI es nicht wusste, sondern weil die Menschen nicht wussten, was sie ihr sagen oder fragen sollten.",
    gapSrc: "Universität Oxford, Nature Medicine 2026",
    sbsEyebrow: "Gleiche KI. Gleicher Wert.",
    sbsH: "Ein anderes Gespräch.",
    sbsP: "Zwei echte ChatGPT-Antworten auf denselben Befund: LDL-Cholesterin von 170 mg/dL.",
    a: {
      tag: "Allein",
      title: "Beginnt mit Ratschlägen",
      bubbles: [
        { who: "you", text: "Mein LDL ist 170. Was soll ich tun?" },
        { who: "ai", text: "Ein LDL von 170 mg/dL ist hoch… Reduziere Butter, Sahne, fetten Käse… Ziel: mindestens 150 Minuten Bewegung pro Woche." },
        { who: "ai", text: "Solltest du ein Statin nehmen? Möglicherweise ja." },
      ],
      note: "Erst am Ende fragt sie nach Alter, Blutdruck oder Familiengeschichte.",
      outcomeLabel: "Du gehst mit",
      outcome: ["Einer To-do-Liste", "Einer Statin-Frage"],
    },
    b: {
      tag: "Mit Curiact",
      title: "Beginnt mit dir",
      bubbles: [
        { who: "you", text: "Ich will mich auf meinen Arzttermin vorbereiten. Frag mich zuerst, was du wissen musst, eine Frage nach der anderen. Keine Diagnose." },
        { who: "ai", text: "Normale Triglyceride und ein recht günstiges HDL heben ein erhöhtes LDL nicht auf." },
        { who: "ai", text: "Aus diesem Befund allein würde ich keine Schlüsse über dein gesamtes Herz-Kreislauf-Risiko ziehen." },
      ],
      note: "Sie fragte zuerst nach Alter, Blutdruck, Lebensstil und Familie und suchte dann offizielle Quellen für deinen Wohnort.",
      outcomeLabel: "Du gehst mit",
      outcome: ["Einer einseitigen Zusammenfassung für deinen Arzt", "6 Fragen, inkl. Lp(a) und erbliche Ursachen", "Was an deinem Wohnort übernommen wird"],
    },
    sbsNote: "ChatGPT, November 2026, gekürzte und übersetzte Auszüge. Deine Antworten werden anders sein.",
    howEyebrow: "Wie Curiact die Lücke schließt",
    howH: "Neugierig, vorbereitet, gemeinsam entschieden.",
    decideEyebrow: "Dann: entscheide mit deinem Arzt",
    decideH: "KI kann gut erklären. Entscheiden ist etwas anderes.",
    decideP: "Sicher teilen, gut fragen und weiter lernen führen zum selben Ziel: einem besseren Gespräch mit deinem Arzt. In derselben Oxford-Studie wählte selbst die KI allein nur in etwa der Hälfte der Fälle den richtigen nächsten Schritt. Nutze sie, um informiert zu sein, und trefft die Entscheidungen gemeinsam.",
    actH: "Curious? Act.",
    actP: "Hol dir den kostenlosen Cholesterin-Leitfaden, die wöchentlichen Prompts oder beides. Du wählst auf der nächsten Seite.",
    actCta: "Act",
    decideSrc: "Universität Oxford, Nature Medicine 2026",
    notEmergency: "Nicht für neue Beschwerden oder Notfälle: geh zum Arzt oder ruf 112 an",
    pillarsEyebrow: "Was du hier bekommst",
    pillarsH: "Drei Wege, deine KI besser für deine Gesundheit zu nutzen.",
    pillars: [
      { h: "Sicherer teilen", p: "Richte deine KI ein, bevor du Gesundheitsdaten teilst: was du weglässt, welche Einstellungen du ausschaltest und die ehrlichen Grenzen.", tag: "Kostenloser Leitfaden", cta: "Leitfaden lesen", link: "share" },
      { h: "Die richtigen Fragen stellen", p: "Prompts und Checklisten für echte Momente, auf Basis aktueller Leitlinien. Los geht's mit Bluttest und Cholesterin.", tag: "Kostenloser Leitfaden", cta: "Leitfaden holen", link: "signup" },
      { h: "Weiter lernen", p: "Ein Thema pro Woche, mit Prompts, die du gleich an dir selbst ausprobieren kannst.", tag: "Wöchentlich", cta: "Wöchentliche Prompts erhalten", link: "weekly" },
    ],
  },
};
