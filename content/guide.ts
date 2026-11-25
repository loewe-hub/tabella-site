import type { Lang } from "@/lib/i18n";

// Guide 01 · Cholesterol. EN is the master copy (mirrors the draft guide doc, format v2).
// IT/DE: UI, "what most people miss", the prompt and every checklist question are drafted;
// "the language of your report", "your situation" and "your visit" are EN-only until the
// native review. All IT/DE text is a draft awaiting that review.

type T3 = Record<Lang, string>;

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    access: "Subscriber access", preview: "Preview mode: access check is off", read: "Read in", prompt: "Prompt in",
    tag: "Guide 01 · Cholesterol", h1: "Know your cholesterol target",
    sub: "Your cholesterol is not \"normal\" or \"high\". It is on target or off target, and the target is personal.",
    forWho: "For adults with a lipid panel in hand, on medication or not.",
    missH: "1. What most people miss", situationH: "2. Your situation in 5 questions", situationP: "Have these clear before you start.",
    reportH: "3. The language of your report",
    reportP: "Your lab report uses a few terms that shape the whole conversation. This explains them. It does not tell you what your values mean for you: that is for your AI conversation and your doctor.",
    rangeHead: "Reference range is not your target.",
    rangeBody: "The \"normal\" range printed on the report describes the population. Your target is personal: European guidelines (ESC/EAS 2019) set LDL targets by cardiovascular risk category, not one number for everyone.",
    guideline: "Read the guideline",
    setupH: "Before you start: set up your AI safely", setupIntro: "Two minutes, once. Most people never change these settings.",
    setup1: "Black out your name, tax code, patient ID and address on the report before you upload it. Your AI needs the values, not who you are.",
    setup2: "Switch off model training. ChatGPT: Settings → Data controls → \"Improve the model for everyone\". Claude: Settings → Privacy → \"Help improve Claude\". Gemini: turn off \"Keep Activity\".",
    setup3: "For a one-off health question, use a temporary chat (ChatGPT, Gemini) or an incognito chat (Claude).",
    setup4: "Copy anything you want to keep, like your summary for the doctor, into your own notes.",
    setupNote: "Menu names change now and then. If you can't find a setting, ask your AI: \"Where do I turn off training on my chats?\"",
    b4: "Check the answers",
    promptH: "4. One prompt for your AI", promptIntro: "Start a new chat, paste this, then add your lab report (a photo or the values). Your AI will ask what it needs.",
    copyPrompt: "Copy the full prompt", copy: "Copy", copied: "Copied", showFull: "Show the full prompt", fullNote: "The full prompt also asks your AI not to diagnose you, to use official sources for where you live, and to end with a summary for your doctor.",
    nudgeHead: "One tip:", nudge: "answer your AI's questions honestly. It is only as good as what you tell it.",
    checkH: "Did your AI cover these?", checkIntro: "Tick what came up. For anything missing, copy the question and ask it.", mapLink: "See how these markers connect on the map",
    progress: "{n} of {t} covered", b1: "Understanding the full picture", b2: "What I can do myself", b3: "Tests and options where you live",
    confirm: "Before you book anything, confirm with the official booking service or the pharmacy. Prices and services change.",
    saved: "Your ticks are saved in this browser only. We never see them.",
    visitH: "5. Your visit, step by step", print: "Print / save as PDF",
    enOnly: "", footer: "Educational content, not medical advice, and an AI can be wrong. Decide with your doctor.",
    emergency: "If you have chest pain or pressure, sudden breathlessness, one-sided weakness or slurred speech, call 112 now. Don't ask an AI.",
    deniedH: "This guide is for subscribers", deniedP: "Open it with the personal link in your welcome email. No email yet? Sign up for free.", deniedCta: "Get the free guide",
  },
  it: {
    access: "Accesso iscritti", preview: "Modalità anteprima: controllo accesso disattivato", read: "Leggi in", prompt: "Prompt in",
    tag: "Guida 01 · Colesterolo", h1: "Conosci il tuo obiettivo di colesterolo",
    sub: "Il tuo colesterolo non è \"normale\" o \"alto\". È a obiettivo o fuori obiettivo, e l'obiettivo è personale.",
    forWho: "Per adulti con un profilo lipidico in mano, in terapia o no.",
    missH: "1. Cosa sfugge ai più", situationH: "2. La tua situazione in 5 domande", situationP: "Abbi chiaro questo prima di iniziare.",
    reportH: "3. Le parole del tuo referto",
    reportP: "Il referto usa alcuni termini che guidano tutta la conversazione. Qui li spieghiamo, senza dirti cosa significano i tuoi valori: questo spetta alla conversazione con la tua AI e al tuo medico.",
    rangeHead: "L'intervallo di riferimento non è il tuo obiettivo.",
    rangeBody: "L'intervallo \"normale\" stampato sul referto descrive la popolazione. Il tuo obiettivo è personale: le linee guida europee (ESC/EAS 2019) fissano gli obiettivi di LDL per categoria di rischio cardiovascolare, non un numero uguale per tutti.",
    guideline: "Leggi la linea guida",
    setupH: "Prima di iniziare: imposta la tua AI in sicurezza", setupIntro: "Due minuti, una volta sola. La maggior parte delle persone non cambia mai queste impostazioni.",
    setup1: "Prima di caricare il referto, copri nome, codice fiscale, ID paziente e indirizzo. Alla tua AI servono i valori, non chi sei.",
    setup2: "Disattiva l'addestramento del modello. ChatGPT: Impostazioni → Controlli dati → \"Migliora il modello per tutti\". Claude: Impostazioni → Privacy → \"Aiuta a migliorare Claude\". Gemini: disattiva \"Mantieni attività\".",
    setup3: "Per una domanda di salute occasionale, usa una chat temporanea (ChatGPT, Gemini) o una chat in incognito (Claude).",
    setup4: "Copia ciò che vuoi tenere, come il riassunto per il medico, nelle tue note.",
    setupNote: "I nomi dei menu cambiano ogni tanto. Se non trovi un'impostazione, chiedi alla tua AI: \"Dove disattivo l'addestramento sulle mie chat?\"",
    b4: "Verifica le risposte",
    promptH: "4. Un prompt per la tua AI", promptIntro: "Apri una nuova chat, incolla questo testo, poi aggiungi il referto (foto o valori). La tua AI ti chiederà ciò che le serve.",
    copyPrompt: "Copia il prompt completo", copy: "Copia", copied: "Copiato", showFull: "Mostra il prompt completo", fullNote: "Il prompt completo chiede anche alla tua AI di non fare diagnosi, di usare fonti ufficiali per dove vivi e di chiudere con un riassunto per il medico.",
    nudgeHead: "Un consiglio:", nudge: "rispondi con sincerità alle domande della tua AI. È utile quanto ciò che le racconti.",
    checkH: "La tua AI ha toccato questi punti?", checkIntro: "Spunta ciò che è emerso. Per quello che manca, copia la domanda e chiedila.", mapLink: "Guarda come si collegano questi valori sulla mappa",
    progress: "{n} su {t}", b1: "Capire il quadro completo", b2: "Cosa posso fare io", b3: "Esami e opzioni dove vivi",
    confirm: "Prima di prenotare, conferma con il CUP o la farmacia. Prezzi e servizi cambiano.",
    saved: "Le tue spunte restano solo in questo browser. Noi non le vediamo.",
    visitH: "5. La tua visita, passo per passo", print: "Stampa / salva come PDF",
    enOnly: "Questa sezione è ancora in inglese: la traduzione è in revisione.",
    footer: "Contenuto educativo, non un consiglio medico, e un'AI può sbagliare. Decidi con il tuo medico.",
    emergency: "Se hai dolore o oppressione al petto, affanno improvviso, debolezza da un lato o difficoltà a parlare, chiama subito il 112. Non chiedere a un'AI.",
    deniedH: "Questa guida è per gli iscritti", deniedP: "Aprila con il link personale nella tua email di benvenuto. Non sei ancora iscritto? È gratis.", deniedCta: "Ricevi la guida gratuita",
  },
  de: {
    access: "Zugang für Abonnenten", preview: "Vorschaumodus: Zugangsprüfung aus", read: "Lesen auf", prompt: "Prompt auf",
    tag: "Leitfaden 01 · Cholesterin", h1: "Kenne deinen Cholesterin-Zielwert",
    sub: "Dein Cholesterin ist nicht „normal“ oder „hoch“. Es liegt im Zielbereich oder nicht, und das Ziel ist persönlich.",
    forWho: "Für Erwachsene mit einem Lipidprofil, mit oder ohne Medikamente.",
    missH: "1. Was die meisten übersehen", situationH: "2. Deine Situation in 5 Fragen", situationP: "Kläre das, bevor du anfängst.",
    reportH: "3. Die Sprache deines Befunds",
    reportP: "Dein Laborbefund nutzt ein paar Begriffe, die das ganze Gespräch prägen. Hier werden sie erklärt, nicht was deine Werte für dich bedeuten: Das klärst du mit deiner KI und deinem Arzt.",
    rangeHead: "Der Referenzbereich ist nicht dein Zielwert.",
    rangeBody: "Der „normale“ Bereich im Befund beschreibt die Bevölkerung. Dein Ziel ist persönlich: Die europäischen Leitlinien (ESC/EAS 2019) legen LDL-Ziele nach kardiovaskulärer Risikokategorie fest, nicht eine Zahl für alle.",
    guideline: "Zur Leitlinie",
    setupH: "Bevor du startest: Richte deine KI sicher ein", setupIntro: "Zwei Minuten, einmalig. Die meisten ändern diese Einstellungen nie.",
    setup1: "Schwärze Name, Steuer-ID, Patientennummer und Adresse auf dem Befund, bevor du ihn hochlädst. Deine KI braucht die Werte, nicht deine Identität.",
    setup2: "Schalte das Modelltraining aus. ChatGPT: Einstellungen → Datenkontrollen → „Das Modell für alle verbessern“. Claude: Einstellungen → Datenschutz → „Claude verbessern helfen“. Gemini: „Aktivitäten speichern“ ausschalten.",
    setup3: "Für eine einmalige Gesundheitsfrage nutze einen temporären Chat (ChatGPT, Gemini) oder einen Inkognito-Chat (Claude).",
    setup4: "Kopiere, was du behalten willst, etwa die Zusammenfassung für den Arzt, in deine eigenen Notizen.",
    setupNote: "Menünamen ändern sich ab und zu. Wenn du eine Einstellung nicht findest, frag deine KI: „Wo schalte ich das Training mit meinen Chats aus?“",
    b4: "Antworten prüfen",
    promptH: "4. Ein Prompt für deine KI", promptIntro: "Starte einen neuen Chat, füge diesen Text ein und dann deinen Befund (Foto oder Werte). Deine KI fragt nach, was sie braucht.",
    copyPrompt: "Ganzen Prompt kopieren", copy: "Kopieren", copied: "Kopiert", showFull: "Ganzen Prompt zeigen", fullNote: "Der ganze Prompt bittet deine KI außerdem, keine Diagnose zu stellen, offizielle Quellen für deinen Wohnort zu nutzen und mit einer Zusammenfassung für deinen Arzt zu enden.",
    nudgeHead: "Ein Tipp:", nudge: "Beantworte die Fragen deiner KI ehrlich. Sie ist nur so gut wie das, was du ihr erzählst.",
    checkH: "Hat deine KI das angesprochen?", checkIntro: "Hake ab, was vorkam. Für alles andere: Frage kopieren und stellen.", mapLink: "Sieh auf der Karte, wie diese Werte zusammenhängen",
    progress: "{n} von {t}", b1: "Das ganze Bild verstehen", b2: "Was ich selbst tun kann", b3: "Tests und Angebote vor Ort",
    confirm: "Bevor du etwas buchst, frag bei der offiziellen Terminstelle oder Apotheke nach. Preise und Angebote ändern sich.",
    saved: "Deine Häkchen bleiben nur in diesem Browser. Wir sehen sie nie.",
    visitH: "5. Dein Termin, Schritt für Schritt", print: "Drucken / als PDF speichern",
    enOnly: "Dieser Abschnitt ist noch auf Englisch: Die Übersetzung wird geprüft.",
    footer: "Bildungsinhalt, keine medizinische Beratung, und eine KI kann sich irren. Entscheide mit deinem Arzt.",
    emergency: "Bei Brustschmerz oder Druck auf der Brust, plötzlicher Atemnot, einseitiger Schwäche oder verwaschener Sprache sofort 112 anrufen. Frag keine KI.",
    deniedH: "Dieser Leitfaden ist für Abonnenten", deniedP: "Öffne ihn mit dem persönlichen Link aus deiner Willkommens-E-Mail. Noch nicht dabei? Es ist kostenlos.", deniedCta: "Kostenlosen Leitfaden holen",
  },
};

export const miss: Record<Lang, [string, string][]> = {
  en: [
    ["\"Normal\" on the lab report is not your target.", "The reference range describes the population, not your risk. You can be \"normal\" and well above your target."],
    ["Most people have never had Lp(a) tested.", "It can reveal an inherited risk that LDL does not show."],
    ["LDL can look fine while the problem sits elsewhere.", "With insulin resistance, harmful particles can multiply without LDL rising much (see the checklist)."],
    ["Starting a pill is not the finish line.", "A re-test after starting or changing treatment shows whether you reached your target. Many people are never re-tested."],
    ["Damage builds silently over decades.", "There are no symptoms before a heart attack or stroke, which is why the numbers matter in your 40s, not after an event."],
  ],
  it: [
    ["\"Normale\" sul referto non è il tuo obiettivo.", "L'intervallo di riferimento descrive la popolazione, non il tuo rischio. Puoi essere \"normale\" e ben sopra il tuo obiettivo."],
    ["Quasi nessuno ha mai misurato la Lp(a).", "Può rivelare un rischio ereditario che l'LDL non mostra."],
    ["L'LDL può sembrare a posto mentre il problema è altrove.", "Con l'insulino-resistenza le particelle dannose possono aumentare senza che l'LDL salga molto (vedi la checklist)."],
    ["Iniziare una terapia non è il traguardo.", "Solo un nuovo esame dopo l'inizio o il cambio di terapia mostra se hai raggiunto l'obiettivo. Molti non lo ripetono mai."],
    ["Il danno si accumula in silenzio per decenni.", "Non ci sono sintomi prima di un infarto o di un ictus: per questo i valori contano a 40 anni, non dopo un evento."],
  ],
  de: [
    ["„Normal“ im Laborbefund ist nicht dein Zielwert.", "Der Referenzbereich beschreibt die Bevölkerung, nicht dein Risiko. Du kannst „normal“ sein und deutlich über deinem Ziel liegen."],
    ["Die wenigsten haben je ihr Lp(a) messen lassen.", "Es kann ein erbliches Risiko zeigen, das LDL nicht zeigt."],
    ["LDL kann gut aussehen, während das Problem woanders liegt.", "Bei Insulinresistenz können sich schädliche Partikel vermehren, ohne dass LDL stark steigt (siehe Checkliste)."],
    ["Eine Tablette ist nicht die Ziellinie.", "Erst eine Kontrollmessung nach Beginn oder Änderung der Therapie zeigt, ob du dein Ziel erreichst. Viele werden nie nachgemessen."],
    ["Der Schaden entsteht still über Jahrzehnte.", "Vor einem Herzinfarkt oder Schlaganfall gibt es keine Symptome. Deshalb zählen die Werte mit 40, nicht erst nach einem Ereignis."],
  ],
};

// EN only until the native review.
export const situation = [
  "When was my last full lipid panel, and do I have the report?",
  "Have I ever had a heart attack, stroke, stent, bypass or diagnosed artery disease?",
  "Do I have diabetes, high blood pressure or kidney disease, and do I smoke?",
  "Did a parent or sibling have a heart attack or stroke early (men under 55, women under 65)?",
  "Am I taking anything for cholesterol now, and do I take it every day?",
];

export const GUIDELINE_URL = "https://doi.org/10.1093/eurheartj/ehz455";

// Plain words first, the lab-report term in brackets. No units, no cut-offs.
export const glossary: [string, string][] = [
  ["All cholesterol (total cholesterol)", "the good and the bad together. On its own it says little."],
  ["Plaque-building cholesterol (LDL)", "carried by the particles that slowly build plaque in your arteries. Often calculated, not measured."],
  ["Clean-up cholesterol (HDL)", "carried by particles that take cholesterol away. Not something to treat."],
  ["All plaque particles (non-HDL)", "total minus HDL. You can work it out from any report."],
  ["Blood fats (triglycerides)", "react to food, alcohol and how your body handles sugar."],
  ["Particle count (ApoB)", "counts the plaque-building particles directly. Rarely tested."],
  ["Inherited particle (Lp(a))", "mostly set by your genes. Rarely tested, often once is enough."],
  ["Your risk group (SCORE2)", "a European estimate of your heart risk from age, sex, smoking, blood pressure and cholesterol. It decides your personal target."],
  ["Blood sugar (glucose, HbA1c)", "your blood sugar today, and its average over recent months."],
  ["Insulin (fasting insulin)", "how hard your body works to keep blood sugar normal. Rarely tested."],
  ["Inflammation (hs-CRP)", "a low, background inflammation. A recent cold can raise it."],
  ["Blood pressure", "two numbers: when the heart beats, and between beats. One reading says little; a few days of readings say more."],
];

export const promptShort: T3 = {
  en: "Help me understand my cholesterol results and prepare for my doctor. Ask me what you need first.",
  it: "Aiutami a capire le analisi del colesterolo e a prepararmi per il medico. Prima chiedimi ciò che ti serve.",
  de: "Hilf mir, meine Cholesterinwerte zu verstehen und mich auf den Arzt vorzubereiten. Frag mich zuerst, was du brauchst.",
};

export const prompt: T3 = {
  en: "I just got my cholesterol results and want to prepare for a visit with my doctor. I live in [city, region, country]. Focus on what could explain my values, not on how to treat them: treatment options are something I'll discuss with my doctor. Do not diagnose me or assume anything my results don't show. First ask me the questions you need to understand my situation, one at a time. If I have blood pressure readings, I'll share them too. Then explain my report in plain language and tell me what you are unsure about. If something isn't in my report, say so instead of guessing. For anything about tests, costs or services where I live, search the web for official sources (health ministry, regional health authority, public booking service) and give me the links; if you can't find a source, say so instead of guessing. At the end, write a one-page summary for my doctor: my values, what we discussed and my questions.",
  it: "Ho appena ricevuto le analisi del colesterolo e voglio prepararmi alla visita dal medico. Vivo a [città, regione, paese]. Concentrati su cosa potrebbe spiegare i miei valori, non su come trattarli: le opzioni di trattamento le discuterò con il mio medico. Non farmi diagnosi e non dare per scontato nulla che i risultati non mostrino. Prima fammi, una alla volta, le domande che ti servono per capire la mia situazione. Se ho misurazioni della pressione, te le darò. Poi spiegami il referto in modo semplice e dimmi su cosa hai dei dubbi. Se qualcosa non è nel referto, dimmelo invece di supporre. Per esami, costi o servizi dove vivo, cerca sul web fonti ufficiali (ministero della salute, regione, ASL, CUP) e dammi i link; se non trovi una fonte, dimmelo invece di stimare. Alla fine scrivimi un riassunto di una pagina per il medico: i miei valori, cosa abbiamo discusso e le mie domande.",
  de: "Ich habe gerade meine Cholesterinwerte bekommen und möchte mich auf den Arzttermin vorbereiten. Ich wohne in [Stadt, Region, Land]. Konzentriere dich darauf, was meine Werte erklären könnte, nicht darauf, wie man sie behandelt: Behandlungsmöglichkeiten bespreche ich mit meinem Arzt. Stelle keine Diagnose und nimm nichts an, was meine Ergebnisse nicht zeigen. Stell mir zuerst nacheinander die Fragen, die du brauchst, um meine Situation zu verstehen. Wenn ich Blutdruckwerte habe, gebe ich sie dir auch. Erkläre mir dann meinen Befund in einfacher Sprache und sag mir, wo du unsicher bist. Wenn etwas nicht im Befund steht, sag es, statt zu raten. Suche für Tests, Kosten oder Angebote an meinem Wohnort im Web nach offiziellen Quellen (Gesundheitsministerium, regionale Gesundheitsbehörde, öffentliche Terminstelle) und gib mir die Links; wenn du keine Quelle findest, sag es, statt zu schätzen. Schreib mir am Ende eine einseitige Zusammenfassung für meinen Arzt: meine Werte, was wir besprochen haben und meine Fragen.",
};

export type ChecklistItem = { id: string; bucket: "b1" | "b2" | "b3" | "b4"; label: T3; q: T3; note?: T3 };

export const checklist: ChecklistItem[] = [
  { id: "risk", bucket: "b1", label: { en: "My risk category and target", it: "La mia categoria di rischio e l'obiettivo", de: "Meine Risikokategorie und mein Zielwert" }, q: { en: "Which SCORE2 risk category might I fall into, and what LDL target do the ESC guidelines set for it? What can you not assess without my doctor?", it: "In quale categoria di rischio SCORE2 potrei rientrare, e quale obiettivo di LDL fissano le linee guida ESC? Cosa non puoi valutare senza il mio medico?", de: "In welche SCORE2-Risikokategorie falle ich vermutlich, und welchen LDL-Zielwert sehen die ESC-Leitlinien dafür vor? Was kannst du ohne meinen Arzt nicht beurteilen?" } },
  { id: "apob", bucket: "b1", label: { en: "ApoB and non-HDL", it: "ApoB e non-HDL", de: "ApoB und Non-HDL" }, q: { en: "What would ApoB or non-HDL cholesterol add for someone like me?", it: "Cosa aggiungerebbero ApoB o colesterolo non-HDL nel mio caso?", de: "Was würden ApoB oder Non-HDL-Cholesterin in meinem Fall zusätzlich zeigen?" } },
  { id: "lpa", bucket: "b1", label: { en: "Lp(a)", it: "Lp(a)", de: "Lp(a)" }, q: { en: "Has my Lp(a) ever been measured? Why do guidelines suggest testing it, and what would a high value change?", it: "La mia Lp(a) è mai stata misurata? Perché le linee guida suggeriscono di misurarla, e cosa cambierebbe un valore alto?", de: "Wurde mein Lp(a) je gemessen? Warum empfehlen die Leitlinien den Test, und was würde ein hoher Wert ändern?" } },
  { id: "insulin", bucket: "b1", label: { en: "Insulin resistance", it: "Insulino-resistenza", de: "Insulinresistenz" }, q: { en: "Do my triglycerides, HDL, glucose, HbA1c and waist suggest insulin resistance? Which tests would tell us more?", it: "Trigliceridi, HDL, glicemia, HbA1c e circonferenza vita fanno pensare a un'insulino-resistenza? Quali esami ci direbbero di più?", de: "Deuten meine Triglyceride, HDL, Glukose, HbA1c und mein Bauchumfang auf eine Insulinresistenz hin? Welche Tests würden mehr zeigen?" } },
  { id: "other-values", bucket: "b1", label: { en: "Inflammation, liver, waist", it: "Infiammazione, fegato, vita", de: "Entzündung, Leber, Bauchumfang" }, q: { en: "Are there other values in my report, or measurements I should take, that change the picture?", it: "Ci sono altri valori nel mio referto, o misure che dovrei prendere, che cambiano il quadro?", de: "Gibt es andere Werte in meinem Befund oder Messungen, die ich machen sollte, die das Bild verändern?" } },
  { id: "blood-pressure", bucket: "b1", label: { en: "Blood pressure", it: "Pressione arteriosa", de: "Blutdruck" }, q: { en: "Here are my recent blood pressure readings: [paste, if you have them]. How does blood pressure combine with my cholesterol in my overall risk, and what else in my results might be connected to it, for example kidney values or blood sugar?", it: "Ecco le mie misurazioni recenti della pressione: [incolla, se le hai]. Come si combina la pressione con il colesterolo nel mio rischio complessivo, e cos'altro nei miei esami potrebbe essere collegato, per esempio i valori dei reni o la glicemia?", de: "Hier sind meine aktuellen Blutdruckwerte: [einfügen, falls vorhanden]. Wie wirkt Blutdruck zusammen mit meinem Cholesterin auf mein Gesamtrisiko, und was in meinen Werten könnte damit zusammenhängen, zum Beispiel Nierenwerte oder Blutzucker?" } },
  { id: "causes", bucket: "b1", label: { en: "Other causes of high LDL", it: "Altre cause di LDL alto", de: "Andere Ursachen für hohes LDL" }, q: { en: "Could anything else raise my LDL, for example thyroid function or a medication, and how would we check?", it: "Qualcos'altro potrebbe alzare il mio LDL, per esempio la tiroide o un farmaco, e come lo verificheremmo?", de: "Könnte etwas anderes mein LDL erhöhen, zum Beispiel die Schilddrüse oder ein Medikament, und wie würden wir das prüfen?" } },
  { id: "family", bucket: "b1", label: { en: "Family", it: "Famiglia", de: "Familie" }, q: { en: "Could my values point to an inherited condition, and should my parents, siblings or children be tested?", it: "I miei valori potrebbero indicare una condizione ereditaria, e i miei genitori, fratelli o figli dovrebbero fare il test?", de: "Könnten meine Werte auf etwas Erbliches hindeuten, und sollten sich Eltern, Geschwister oder Kinder testen lassen?" } },
  { id: "diet", bucket: "b2", label: { en: "Diet patterns", it: "Modelli alimentari", de: "Ernährungsmuster" }, q: { en: "Which dietary patterns have the strongest evidence for LDL and for insulin resistance, and how big is the effect?", it: "Quali modelli alimentari hanno le prove più solide per l'LDL e per l'insulino-resistenza, e quanto è grande l'effetto?", de: "Welche Ernährungsmuster haben die stärkste Evidenz für LDL und Insulinresistenz, und wie groß ist der Effekt?" } },
  { id: "foods", bucket: "b2", label: { en: "Specific foods", it: "Alimenti specifici", de: "Einzelne Lebensmittel" }, q: { en: "What does the evidence say about fibre, saturated fat and plant sterols for someone like me?", it: "Cosa dicono le prove su fibre, grassi saturi e steroli vegetali nel mio caso?", de: "Was sagt die Evidenz zu Ballaststoffen, gesättigten Fetten und Pflanzensterinen in meinem Fall?" } },
  { id: "supplements", bucket: "b2", label: { en: "Supplements", it: "Integratori", de: "Nahrungsergänzung" }, q: { en: "What does the evidence say about supplements such as red yeast rice, what are the risks, and why should my doctor know?", it: "Cosa dicono le prove su integratori come il riso rosso fermentato, quali sono i rischi, e perché il mio medico dovrebbe saperlo?", de: "Was sagt die Evidenz zu Nahrungsergänzungsmitteln wie rotem Reis, welche Risiken gibt es, und warum sollte mein Arzt davon wissen?" } },
  { id: "lifestyle", bucket: "b2", label: { en: "Exercise, sleep, alcohol, weight", it: "Esercizio, sonno, alcol, peso", de: "Bewegung, Schlaf, Alkohol, Gewicht" }, q: { en: "Which of these would make the biggest difference for my values?", it: "Quale di questi farebbe la differenza più grande per i miei valori?", de: "Was davon würde bei meinen Werten am meisten bewirken?" } },
  { id: "timing", bucket: "b2", label: { en: "Timing", it: "Tempi", de: "Zeitplan" }, q: { en: "How long should I try changes before re-testing, and what would count as progress?", it: "Quanto tempo dovrei provare dei cambiamenti prima di ripetere l'esame, e cosa conterebbe come progresso?", de: "Wie lange sollte ich Veränderungen ausprobieren, bevor ich neu teste, und was gilt als Fortschritt?" } },
  { id: "covered", bucket: "b3", label: { en: "What's covered", it: "Cosa è coperto", de: "Was übernommen wird" }, q: { en: "Which of these tests can my GP prescribe within the public health system, what would I pay, and what would they cost privately?", it: "Quali di questi esami può prescrivermi il medico di base con il SSN, quanto pagherei di ticket, e quanto costerebbero privatamente?", de: "Welche dieser Tests kann mein Hausarzt im öffentlichen Gesundheitssystem verordnen, was zahle ich selbst, und was kosten sie privat?" }, note: { en: "Italy: impegnativa and ticket", it: "", de: "Italien: impegnativa und ticket" } },
  { id: "markers", bucket: "b3", label: { en: "Missing markers", it: "Marcatori mancanti", de: "Fehlende Marker" }, q: { en: "Which useful markers (Lp(a), ApoB, fasting insulin) are usually not in the standard panel, and how do I ask for them?", it: "Quali marcatori utili (Lp(a), ApoB, insulina a digiuno) di solito non sono nel pannello standard, e come li chiedo?", de: "Welche nützlichen Marker (Lp(a), ApoB, Nüchterninsulin) fehlen meist im Standardprofil, und wie frage ich danach?" } },
  { id: "where", bucket: "b3", label: { en: "Where to test", it: "Dove fare gli esami", de: "Wo ich mich testen lassen kann" }, q: { en: "Can I get checked at a pharmacy, a community health centre or a free screening programme near me?", it: "Posso fare un controllo in farmacia, in una Casa di Comunità o a uno screening gratuito vicino a me?", de: "Kann ich mich in einer Apotheke, einem Gesundheitszentrum oder bei einem kostenlosen Screening in meiner Nähe testen lassen?" }, note: { en: "Italy: farmacia dei servizi, Casa di Comunità, prevention days", it: "", de: "Italien: farmacia dei servizi, Casa di Comunità, Präventionstage" } },
  { id: "meds-rules", bucket: "b3", label: { en: "Medication rules", it: "Regole sui farmaci", de: "Regeln für Medikamente" }, q: { en: "Which rules decide whether cholesterol medication is reimbursed in my country, and what does that mean for my conversation with my doctor?", it: "Quali regole decidono se i farmaci per il colesterolo sono rimborsati, e cosa significa per il dialogo con il mio medico?", de: "Welche Regeln entscheiden, ob Cholesterinmedikamente in meinem Land erstattet werden, und was bedeutet das für das Gespräch mit meinem Arzt?" }, note: { en: "Italy: AIFA Note 13", it: "Italia: Nota AIFA 13", de: "Italien: AIFA-Note 13" } },
  { id: "specialist", bucket: "b3", label: { en: "Specialist", it: "Specialista", de: "Facharzt" }, q: { en: "When does it make sense to ask for a referral to a cardiologist or a lipid clinic?", it: "Quando ha senso chiedere un invio a un cardiologo o a un ambulatorio dei lipidi?", de: "Wann ist es sinnvoll, um eine Überweisung zum Kardiologen oder in eine Lipidambulanz zu bitten?" } },
  { id: "reassure", bucket: "b4", label: { en: "Reassurance without a reason", it: "Rassicurazioni senza motivo", de: "Beruhigung ohne Begründung" }, q: { en: "You sounded reassuring. What exactly is that based on: my values, a guideline, or a general assumption?", it: "Mi sei sembrato rassicurante. Su cosa si basa esattamente: sui miei valori, su una linea guida o su un'ipotesi generale?", de: "Du klangst beruhigend. Worauf genau stützt sich das: auf meine Werte, eine Leitlinie oder eine allgemeine Annahme?" } },
  { id: "selfcheck", bucket: "b4", label: { en: "Self-check before you go", it: "Autoverifica prima della visita", de: "Selbstcheck vor dem Termin" }, q: { en: "Check your answers in this chat: list anything you said that is not in my report or not backed by a guideline, and any abbreviation or value you weren't sure about.", it: "Controlla le tue risposte in questa chat: elenca tutto ciò che hai detto che non è nel mio referto o non è supportato da una linea guida, e ogni sigla o valore su cui non eri sicuro.", de: "Prüfe deine Antworten in diesem Chat: Liste alles auf, was du gesagt hast und was nicht in meinem Befund steht oder nicht durch eine Leitlinie gedeckt ist, sowie jede Abkürzung oder jeden Wert, bei dem du unsicher warst." } },
];

// EN only until the native review.
export const visit = {
  intro: "Your AI conversation gives you a summary and your own questions. This helps you use them in a short appointment.",
  before: [
    "Pick your top 3 questions. A GP visit is short; the rest can wait for the next one.",
    "Decide what you want to leave with: an understanding of your risk, a plan, or a date to test again.",
    "Bring: your latest lab report and older ones to show the trend; all medications and supplements (including red yeast rice or plant sterols); recent blood pressure readings, your weight and waist measurement; family history (who, what event, at what age); the one-page summary from your AI conversation.",
  ],
  during: [
    "Open with your most important question, not the whole summary. Offer the summary as a handout.",
    "Ask for the reasoning, not only the answer: \"What makes you say that for me?\"",
    "Bring up what your AI said as a question, not a claim: \"I read that Lp(a) can matter. Does it apply to me?\"",
    "Check you understood: \"So if I've got this right, the plan is…\"",
  ],
  closing: ["What's the plan?", "When do we test again, and what would count as progress?", "What should make me come back sooner?"],
  notNeededIntro: "Sometimes your doctor will say a test or a change isn't needed yet, and often that's the right call. You don't have to argue. A curious follow-up keeps the door open and helps you understand the reasoning:",
  notNeeded: [
    "\"That's good to hear. What would need to change for it to become worth doing?\"",
    "\"My [father] had a heart attack at [52]. Does that change how you see it?\"",
    "\"Could we put it on the list for my next check-up?\"",
    "\"If I wanted it for my own peace of mind, could I do it privately, and would you look at the result with me?\"",
  ],
  after: [
    "Write down what was decided, the same day.",
    "Note the date of your next test.",
    "Take the doctor's answers back to your AI if you want help making sense of them. The plan you agreed with your doctor stays the plan.",
  ],
};
