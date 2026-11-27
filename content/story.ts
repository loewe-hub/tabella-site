import type { Lang } from "@/lib/i18n";

// Landing story (22 Nov 2026): behaviour → gap → same AI, different conversation → how → decide.
// Side-by-side excerpts are real ChatGPT answers (November 2026), shortened. IT/DE show them translated and say so.

type Bubble = { who: "you" | "ai"; text: string };
type Side = { tag: string; title: string; bubbles: Bubble[]; note: string; outcomeLabel: string; outcome: string[] };

type Preview = { label: string; meta: string; subject: string; body: string; actionH: string; action: string; button: string };

export type StoryCopy = {
  heroLabel: string;
  heroLine: string;
  heroSub: string;
  heroNot: string;
  heroResults: string;
  stepsLabel: string;
  steps: { h: string; p: string }[];
  preview: Preview;
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
  pillars: { h: string; p: string; tag: string; cta?: string; link?: "signup" | "weekly" | "share" | "learn" | "ask" }[];
};

const OX = "https://pubmed.ncbi.nlm.nih.gov/41663592/";
export const SOURCES = { openai: "https://openai.com/index/health-in-chatgpt/", oxford: OX };

export const story: Record<Lang, StoryCopy> = {
  en: {
    heroLabel: "Free weekly newsletter",
    heroLine: "Use your AI to have a real say in your health decisions.",
    heroSub: "Every Wednesday: 1 health topic, explained and connected, and 1 prompt to apply it to yourself.",
    heroNot: "Nothing to install, no account. Works in the AI you already use: ChatGPT, Claude or Gemini. We make your questions better.",
    heroResults: "Got your results today? Use the free prompt now →",
    stepsLabel: "How it works",
    steps: [
      { h: "Pick your question", p: "A topic from the newsletter, a guide, or your own results." },
      { h: "Copy our prompt into your AI", p: "ChatGPT, Claude, Gemini: the one you already use." },
      { h: "Take the answer to your doctor", p: "With the questions worth asking. Then decide together." },
    ],
    preview: {
      label: "What lands in your inbox",
      meta: "Curiact · Wednesday, 12:00",
      subject: "Thirty values, and nobody joins the dots",
      body: "Imagine Marco, 47. His blood test results arrive as a PDF. Thirty lines of abbreviations: AST, ALT, HDL, GGT. A number next to each, a range next to that. Nothing in bold.",
      actionH: "One thing to do this week",
      action: "Give your AI your last report and ask it to sort your values by health area, explain anything outside the range, and end with 3 questions for your doctor.",
      button: "Copy the prompt and open your AI →",
    },
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
    gapP: "Why it matters: in an Oxford study, the AI on its own usually found the right answer, but people using the same AI got there far less often. Not because the AI didn't know, but because people didn't know what to tell it or what to ask.",
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
        { who: "you", text: "I just got my cholesterol results: LDL 170 mg/dL, total 244, HDL 52, triglycerides 110, fasting. I'm male, in my mid 30s. Do not diagnose me. First ask me the questions you need, one at a time. […] At the end, write a one-page summary for my doctor: my values, what we discussed and my questions." },
        { who: "ai", text: "Having normal triglycerides and reasonably favourable HDL does not cancel out an elevated LDL." },
        { who: "ai", text: "I would not draw a conclusion about your overall cardiovascular risk from this report alone." },
      ],
      note: "It asked about age, blood pressure, lifestyle and family first, then checked official sources for where you live.",
      outcomeLabel: "You leave with",
      outcome: ["A one-page summary for your doctor", "6 questions, incl. Lp(a) and inherited causes", "What's covered where you live"],
    },
    sbsNote: "ChatGPT, November 2026. Example values; prompts and answers shortened. Your answers will differ.",
    howEyebrow: "How Curiact closes the gap",
    howH: "Curious, prepared, decided together.",
    decideEyebrow: "Then: decide with your doctor",
    decideH: "AI is good at explaining. Deciding is different.",
    decideP: "Sharing safely, asking well and learning all lead to one place: a better conversation with your doctor. In the same Oxford study, even the AI on its own picked the right next step only about half the time. So use it to be informed, and make the decisions together.",
    actH: "Curious? Act.",
    actP: "One small topic every Wednesday, with a prompt to try. Free, unsubscribe anytime.",
    actCta: "Get it weekly",
    decideSrc: "University of Oxford, Nature Medicine 2026",
    notEmergency: "Not for new symptoms or emergencies: see a doctor or call 112",
    pillarsEyebrow: "What you get",
    pillarsH: "One email a week. Open guides any time.",
    pillars: [
      { h: "1 topic, 1 prompt, every Wednesday", p: "A short email that explains one health topic, connects it to the bigger picture, and gives you a prompt to apply it to yourself.", tag: "Weekly", cta: "Get it weekly", link: "weekly" },
      { h: "Ask better health questions", p: "How to ask your AI about any health question: what to share, what to ask, and what to bring to your doctor.", tag: "Free guide", cta: "Read the guide", link: "ask" },
      { h: "Guides by health area", p: "Starting with your blood test: your values in plain words, a prompt for your AI and questions for your doctor.", tag: "Open guides", cta: "Explore the guides", link: "learn" },
    ],
  },
  it: {
    heroLabel: "Newsletter settimanale gratuita",
    heroLine: "Usa la tua AI per avere voce in capitolo nelle decisioni sulla tua salute.",
    heroSub: "Ogni mercoledì: 1 tema di salute, spiegato e collegato al resto, e 1 prompt per applicarlo a te.",
    heroNot: "Niente da installare, nessun account. Funziona con l'AI che usi già: ChatGPT, Claude o Gemini. Noi miglioriamo le tue domande.",
    heroResults: "Hai appena ricevuto le analisi? Usa subito il prompt gratuito →",
    stepsLabel: "Come funziona",
    steps: [
      { h: "Scegli la tua domanda", p: "Un tema della newsletter, una guida o i tuoi risultati." },
      { h: "Copia il nostro prompt nella tua AI", p: "ChatGPT, Claude, Gemini: quella che usi già." },
      { h: "Porta la risposta al tuo medico", p: "Con le domande che contano. Poi decidete insieme." },
    ],
    preview: {
      label: "Cosa arriva nella tua casella",
      meta: "Curiact · mercoledì, 12:00",
      subject: "Trenta valori, e nessuno unisce i puntini",
      body: "Immagina Marco, 47 anni. Le sue analisi arrivano in PDF. Trenta righe di sigle: AST, ALT, HDL, GGT. Un numero accanto a ciascuna, un intervallo accanto al numero. Niente in grassetto.",
      actionH: "Una cosa da fare questa settimana",
      action: "Dai alla tua AI il tuo ultimo referto e chiedile di ordinare i valori per area di salute, spiegare quelli fuori intervallo e chiudere con 3 domande per il medico.",
      button: "Copia il prompt e apri la tua AI →",
    },
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
    gapP: "Perché conta: in uno studio di Oxford, l'AI da sola trovava quasi sempre la risposta giusta, ma le persone che usavano la stessa AI ci arrivavano molto più di rado. Non perché l'AI non sapesse, ma perché le persone non sapevano cosa dirle o cosa chiedere.",
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
        { who: "you", text: "Ho appena ricevuto le analisi del colesterolo: LDL 170 mg/dL, totale 244, HDL 52, trigliceridi 110, a digiuno. Sono un uomo di circa 35 anni. Non farmi diagnosi. Prima fammi, una alla volta, le domande che ti servono. […] Alla fine scrivimi un riassunto di una pagina per il medico: i miei valori, cosa abbiamo discusso e le mie domande." },
        { who: "ai", text: "Trigliceridi nella norma e un HDL abbastanza favorevole non annullano un LDL elevato." },
        { who: "ai", text: "Da questo referto da solo non trarrei conclusioni sul tuo rischio cardiovascolare complessivo." },
      ],
      note: "Ha chiesto prima età, pressione, stile di vita e familiarità, poi ha cercato fonti ufficiali per dove vivi.",
      outcomeLabel: "Ne esci con",
      outcome: ["Un riassunto di una pagina per il medico", "6 domande, incl. Lp(a) e cause ereditarie", "Cosa è coperto dove vivi"],
    },
    sbsNote: "ChatGPT, novembre 2026. Valori di esempio; prompt e risposte abbreviati e tradotti. Le tue risposte saranno diverse.",
    howEyebrow: "Come Curiact colma il divario",
    howH: "Curioso, preparato, si decide insieme.",
    decideEyebrow: "Poi: decidi con il tuo medico",
    decideH: "L'AI è brava a spiegare. Decidere è un'altra cosa.",
    decideP: "Condividere in sicurezza, fare le domande giuste e continuare a imparare portano allo stesso punto: una conversazione migliore con il tuo medico. Nello stesso studio di Oxford, anche l'AI da sola ha scelto il passo successivo giusto solo in circa metà dei casi. Usala per informarti, e prendete le decisioni insieme.",
    actH: "Curious? Act.",
    actP: "Un piccolo tema ogni mercoledì, con un prompt da provare. Gratis, disiscrizione quando vuoi.",
    actCta: "Ricevilo ogni settimana",
    decideSrc: "Università di Oxford, Nature Medicine 2026",
    notEmergency: "Non per sintomi nuovi o emergenze: rivolgiti a un medico o chiama il 112",
    pillarsEyebrow: "Cosa trovi qui",
    pillarsH: "Una email a settimana. Guide aperte, sempre.",
    pillars: [
      { h: "1 tema, 1 prompt, ogni mercoledì", p: "Una breve email che spiega un tema di salute, lo collega al quadro generale e ti dà un prompt per applicarlo a te.", tag: "Settimanale", cta: "Ricevilo ogni settimana", link: "weekly" },
      { h: "Domande migliori sulla salute", p: "Come chiedere alla tua AI qualsiasi cosa sulla salute: cosa condividere, cosa chiedere e cosa portare al medico.", tag: "Guida gratuita", cta: "Leggi la guida", link: "ask" },
      { h: "Guide per area di salute", p: "Si parte dalle analisi del sangue: i tuoi valori in parole semplici, un prompt per la tua AI e domande per il medico.", tag: "Guide aperte", cta: "Esplora le guide", link: "learn" },
    ],
  },
  de: {
    heroLabel: "Kostenloser wöchentlicher Newsletter",
    heroLine: "Nutze deine KI, um bei deinen Gesundheitsentscheidungen wirklich mitzureden.",
    heroSub: "Jeden Mittwoch: 1 Gesundheitsthema, erklärt und eingeordnet, und 1 Prompt, um es auf dich anzuwenden.",
    heroNot: "Nichts zu installieren, kein Konto. Funktioniert mit der KI, die du schon nutzt: ChatGPT, Claude oder Gemini. Wir machen deine Fragen besser.",
    heroResults: "Ergebnisse gerade bekommen? Nutze jetzt den kostenlosen Prompt →",
    stepsLabel: "So funktioniert's",
    steps: [
      { h: "Wähle deine Frage", p: "Ein Thema aus dem Newsletter, ein Leitfaden oder deine eigenen Werte." },
      { h: "Kopiere unseren Prompt in deine KI", p: "ChatGPT, Claude, Gemini: die, die du schon nutzt." },
      { h: "Nimm die Antwort mit zum Arzt", p: "Mit den Fragen, die zählen. Dann entscheidet ihr gemeinsam." },
    ],
    preview: {
      label: "Was in deinem Postfach landet",
      meta: "Curiact · Mittwoch, 12:00",
      subject: "Dreißig Werte, und niemand verbindet die Punkte",
      body: "Stell dir Marco vor, 47. Sein Bluttest kommt als PDF. Dreißig Zeilen Abkürzungen: AST, ALT, HDL, GGT. Neben jeder eine Zahl, daneben ein Bereich. Nichts fett gedruckt.",
      actionH: "Eine Sache für diese Woche",
      action: "Gib deiner KI deinen letzten Befund und bitte sie, die Werte nach Gesundheitsbereich zu ordnen, alles außerhalb des Bereichs zu erklären und mit 3 Fragen für deinen Arzt zu enden.",
      button: "Prompt kopieren und KI öffnen →",
    },
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
    gapP: "Warum das zählt: In einer Oxford-Studie fand die KI allein meist die richtige Antwort, Menschen mit derselben KI aber deutlich seltener. Nicht, weil die KI es nicht wusste, sondern weil die Menschen nicht wussten, was sie ihr sagen oder fragen sollten.",
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
        { who: "you", text: "Ich habe gerade meine Cholesterinwerte bekommen: LDL 170 mg/dL, gesamt 244, HDL 52, Triglyceride 110, nüchtern. Ich bin ein Mann, Mitte 30. Stelle keine Diagnose. Stell mir zuerst nacheinander die Fragen, die du brauchst. […] Schreib mir am Ende eine einseitige Zusammenfassung für meinen Arzt: meine Werte, was wir besprochen haben und meine Fragen." },
        { who: "ai", text: "Normale Triglyceride und ein recht günstiges HDL heben ein erhöhtes LDL nicht auf." },
        { who: "ai", text: "Aus diesem Befund allein würde ich keine Schlüsse über dein gesamtes Herz-Kreislauf-Risiko ziehen." },
      ],
      note: "Sie fragte zuerst nach Alter, Blutdruck, Lebensstil und Familie und suchte dann offizielle Quellen für deinen Wohnort.",
      outcomeLabel: "Du gehst mit",
      outcome: ["Einer einseitigen Zusammenfassung für deinen Arzt", "6 Fragen, inkl. Lp(a) und erbliche Ursachen", "Was an deinem Wohnort übernommen wird"],
    },
    sbsNote: "ChatGPT, November 2026. Beispielwerte; Prompts und Antworten gekürzt und übersetzt. Deine Antworten werden anders sein.",
    howEyebrow: "Wie Curiact die Lücke schließt",
    howH: "Neugierig, vorbereitet, gemeinsam entschieden.",
    decideEyebrow: "Dann: entscheide mit deinem Arzt",
    decideH: "KI kann gut erklären. Entscheiden ist etwas anderes.",
    decideP: "Sicher teilen, gut fragen und weiter lernen führen zum selben Ziel: einem besseren Gespräch mit deinem Arzt. In derselben Oxford-Studie wählte selbst die KI allein nur in etwa der Hälfte der Fälle den richtigen nächsten Schritt. Nutze sie, um informiert zu sein, und trefft die Entscheidungen gemeinsam.",
    actH: "Curious? Act.",
    actP: "Jeden Mittwoch ein kleines Thema, mit einem Prompt zum Ausprobieren. Kostenlos, jederzeit abbestellbar.",
    actCta: "Wöchentlich erhalten",
    decideSrc: "Universität Oxford, Nature Medicine 2026",
    notEmergency: "Nicht für neue Beschwerden oder Notfälle: geh zum Arzt oder ruf 112 an",
    pillarsEyebrow: "Was du hier bekommst",
    pillarsH: "Eine E-Mail pro Woche. Offene Leitfäden, jederzeit.",
    pillars: [
      { h: "1 Thema, 1 Prompt, jeden Mittwoch", p: "Eine kurze E-Mail, die ein Gesundheitsthema erklärt, es ins größere Bild einordnet und dir einen Prompt gibt, um es auf dich anzuwenden.", tag: "Wöchentlich", cta: "Wöchentlich erhalten", link: "weekly" },
      { h: "Bessere Gesundheitsfragen", p: "Wie du deine KI zu jeder Gesundheitsfrage fragst: was du teilst, was du fragst und was du zum Arzt mitnimmst.", tag: "Kostenloser Leitfaden", cta: "Leitfaden lesen", link: "ask" },
      { h: "Leitfäden nach Gesundheitsbereich", p: "Los geht's mit deinem Bluttest: deine Werte verständlich erklärt, ein Prompt für deine KI und Fragen für deinen Arzt.", tag: "Offene Leitfäden", cta: "Leitfäden ansehen", link: "learn" },
    ],
  },
};
