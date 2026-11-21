import type { Lang } from "@/lib/i18n";

// The hub: "Your blood test map". EN is the master; IT and DE are drafts awaiting native review.
// Keep it simple: plain names first, one sentence each, what it connects to, one short question.
// The full prompt (copied) carries the guardrails: signal not verdict, guidelines named, no diagnosis.

export type Zone = "heart" | "both" | "meta" | "report";

type NodeBase = { id: string; zone: Zone; x?: number; y?: number };
export type NodeText = { name: string; term: string; what: string; connects: string[]; ask: string };
export type MapNode = NodeBase & NodeText;

const BASE: NodeBase[] = [
  { id: "ldl", zone: "heart", x: 110, y: 220 },
  { id: "lpa", zone: "heart", x: 140, y: 360 },
  { id: "bp", zone: "both", x: 455, y: 150 },
  { id: "tg", zone: "both", x: 440, y: 260 },
  { id: "waist", zone: "both", x: 480, y: 370 },
  { id: "crp", zone: "both", x: 455, y: 480 },
  { id: "glucose", zone: "meta", x: 740, y: 220 },
  { id: "liver", zone: "meta", x: 780, y: 360 },
  { id: "cbc", zone: "report" },
  { id: "iron", zone: "report" },
  { id: "kidney", zone: "report" },
  { id: "thyroid", zone: "report" },
  { id: "vit", zone: "report" },
  { id: "min", zone: "report" },
];

const TEXT: Record<Lang, Record<string, NodeText>> = {
  en: {
    ldl: { name: "Plaque-building particles", term: "LDL, ApoB, non-HDL", what: "The particles that slowly build plaque in your arteries.", connects: ["Heart attack", "Stroke"], ask: "What do my LDL and non-HDL say about someone like me?" },
    lpa: { name: "Inherited particle", term: "Lp(a)", what: "Mostly set by your genes, and rarely tested.", connects: ["Heart attack", "Heart valves"], ask: "Has my Lp(a) ever been measured, and would it matter?" },
    bp: { name: "Blood pressure", term: "systolic / diastolic", what: "Puts strain on your vessels, and often rises with blood sugar problems.", connects: ["Heart", "Kidneys", "Blood sugar"], ask: "How does my blood pressure fit together with my blood test?" },
    tg: { name: "Blood fats", term: "Triglycerides, HDL", what: "Often the first sign that your body handles sugar less well.", connects: ["Blood sugar", "Liver"], ask: "Do my blood fats hint at how my body handles sugar?" },
    waist: { name: "Belly fat", term: "Waist", what: "Fat around the belly links your heart and your metabolism.", connects: ["Blood sugar", "Liver", "Heart"], ask: "What does my waist add to my blood results?" },
    crp: { name: "Inflammation", term: "hs-CRP", what: "A low, background inflammation; a recent cold can raise it too.", connects: ["Heart", "Iron stores"], ask: "Could anything recent explain my inflammation value?" },
    glucose: { name: "Blood sugar", term: "Glucose, HbA1c", what: "Your blood sugar today, and its average over recent months.", connects: ["Diabetes", "Blood fats"], ask: "What do my glucose and HbA1c say, and what can't they show yet?" },
    liver: { name: "Liver", term: "ALT, AST, GGT", what: "A fatty liver often goes together with blood sugar problems.", connects: ["Blood sugar", "Blood fats", "Heart"], ask: "Do my liver values connect to my cholesterol or blood sugar?" },
    cbc: { name: "Blood cells", term: "Blood count", what: "Red and white cells and platelets: your general baseline.", connects: ["Iron stores", "Infections"], ask: "Is anything in my blood count worth a question?" },
    iron: { name: "Iron stores", term: "Ferritin", what: "Shows your iron, but also rises with inflammation or a busy liver.", connects: ["Inflammation", "Liver", "Blood cells"], ask: "Should my ferritin be read together with my other values?" },
    kidney: { name: "Kidneys", term: "Creatinine, eGFR, uric acid", what: "How well your kidneys filter your blood.", connects: ["Blood pressure", "Blood sugar", "Heart"], ask: "Do my kidney values connect to my blood pressure or blood sugar?" },
    thyroid: { name: "Thyroid", term: "TSH", what: "A slow thyroid can push cholesterol up.", connects: ["Cholesterol", "Energy", "Weight"], ask: "Could my thyroid explain anything in my cholesterol?" },
    vit: { name: "Vitamins", term: "D, B12, folate", what: "Shaped by food, sun and some medications.", connects: ["Blood cells", "Medication"], ask: "Do my vitamin values connect to my diet or my medication?" },
    min: { name: "Salts & minerals", term: "Sodium, potassium", what: "Often changed by blood pressure medication.", connects: ["Blood pressure", "Kidneys"], ask: "Could my medication explain my mineral values?" },
  },
  it: {
    ldl: { name: "Particelle che formano placca", term: "LDL, ApoB, non-HDL", what: "Le particelle che, piano piano, formano la placca nelle arterie.", connects: ["Infarto", "Ictus"], ask: "Cosa dicono i miei LDL e non-HDL per una persona come me?" },
    lpa: { name: "Particella ereditaria", term: "Lp(a)", what: "Dipende soprattutto dai geni e si misura di rado.", connects: ["Infarto", "Valvole cardiache"], ask: "La mia Lp(a) è mai stata misurata, e conterebbe?" },
    bp: { name: "Pressione", term: "massima / minima", what: "Mette sotto sforzo i vasi e spesso sale insieme ai problemi di zuccheri.", connects: ["Cuore", "Reni", "Zuccheri"], ask: "Come si inserisce la mia pressione nelle mie analisi?" },
    tg: { name: "Grassi nel sangue", term: "Trigliceridi, HDL", what: "Spesso il primo segnale che il corpo gestisce peggio gli zuccheri.", connects: ["Zuccheri", "Fegato"], ask: "I miei grassi nel sangue dicono qualcosa su come gestisco gli zuccheri?" },
    waist: { name: "Grasso addominale", term: "Girovita", what: "Il grasso sulla pancia collega cuore e metabolismo.", connects: ["Zuccheri", "Fegato", "Cuore"], ask: "Cosa aggiunge il mio girovita alle mie analisi?" },
    crp: { name: "Infiammazione", term: "PCR-hs", what: "Un'infiammazione bassa, di fondo; anche un raffreddore recente può alzarla.", connects: ["Cuore", "Riserve di ferro"], ask: "Qualcosa di recente può spiegare il mio valore di infiammazione?" },
    glucose: { name: "Zuccheri nel sangue", term: "Glicemia, HbA1c", what: "La glicemia di oggi e la sua media degli ultimi mesi.", connects: ["Diabete", "Grassi nel sangue"], ask: "Cosa dicono glicemia e HbA1c, e cosa non possono ancora mostrare?" },
    liver: { name: "Fegato", term: "ALT, AST, GGT", what: "Un fegato grasso va spesso insieme ai problemi di zuccheri.", connects: ["Zuccheri", "Grassi nel sangue", "Cuore"], ask: "I miei valori del fegato sono collegati a colesterolo o zuccheri?" },
    cbc: { name: "Cellule del sangue", term: "Emocromo", what: "Globuli rossi e bianchi e piastrine: la tua base generale.", connects: ["Riserve di ferro", "Infezioni"], ask: "C'è qualcosa nel mio emocromo che merita una domanda?" },
    iron: { name: "Riserve di ferro", term: "Ferritina", what: "Mostra il ferro, ma sale anche con un'infiammazione o un fegato affaticato.", connects: ["Infiammazione", "Fegato", "Cellule del sangue"], ask: "La mia ferritina va letta insieme agli altri valori?" },
    kidney: { name: "Reni", term: "Creatinina, eGFR, acido urico", what: "Quanto bene i reni filtrano il sangue.", connects: ["Pressione", "Zuccheri", "Cuore"], ask: "I miei valori dei reni sono collegati a pressione o zuccheri?" },
    thyroid: { name: "Tiroide", term: "TSH", what: "Una tiroide lenta può far salire il colesterolo.", connects: ["Colesterolo", "Energia", "Peso"], ask: "La mia tiroide può spiegare qualcosa del mio colesterolo?" },
    vit: { name: "Vitamine", term: "D, B12, folati", what: "Dipendono da cibo, sole e alcuni farmaci.", connects: ["Cellule del sangue", "Farmaci"], ask: "Le mie vitamine sono collegate alla dieta o ai farmaci?" },
    min: { name: "Sali minerali", term: "Sodio, potassio", what: "Cambiano spesso con i farmaci per la pressione.", connects: ["Pressione", "Reni"], ask: "I miei farmaci possono spiegare i miei sali minerali?" },
  },
  de: {
    ldl: { name: "Plaque-bildende Teilchen", term: "LDL, ApoB, Non-HDL", what: "Die Teilchen, die langsam Plaque in den Arterien aufbauen.", connects: ["Herzinfarkt", "Schlaganfall"], ask: "Was sagen mein LDL und Non-HDL für jemanden wie mich?" },
    lpa: { name: "Vererbtes Teilchen", term: "Lp(a)", what: "Vor allem von den Genen bestimmt und selten gemessen.", connects: ["Herzinfarkt", "Herzklappen"], ask: "Wurde mein Lp(a) je gemessen, und wäre es wichtig?" },
    bp: { name: "Blutdruck", term: "systolisch / diastolisch", what: "Belastet die Gefäße und steigt oft zusammen mit Blutzuckerproblemen.", connects: ["Herz", "Nieren", "Blutzucker"], ask: "Wie passt mein Blutdruck zu meinem Bluttest?" },
    tg: { name: "Blutfette", term: "Triglyceride, HDL", what: "Oft das erste Zeichen, dass der Körper Zucker schlechter verarbeitet.", connects: ["Blutzucker", "Leber"], ask: "Deuten meine Blutfette darauf hin, wie mein Körper mit Zucker umgeht?" },
    waist: { name: "Bauchfett", term: "Taillenumfang", what: "Fett am Bauch verbindet Herz und Stoffwechsel.", connects: ["Blutzucker", "Leber", "Herz"], ask: "Was sagt mein Taillenumfang zusätzlich zu meinen Blutwerten?" },
    crp: { name: "Entzündung", term: "hs-CRP", what: "Eine leichte Entzündung im Hintergrund; auch eine Erkältung kann sie erhöhen.", connects: ["Herz", "Eisenspeicher"], ask: "Kann etwas Aktuelles meinen Entzündungswert erklären?" },
    glucose: { name: "Blutzucker", term: "Glukose, HbA1c", what: "Dein Blutzucker heute und sein Durchschnitt der letzten Monate.", connects: ["Diabetes", "Blutfette"], ask: "Was sagen Glukose und HbA1c, und was können sie noch nicht zeigen?" },
    liver: { name: "Leber", term: "ALT (GPT), AST (GOT), GGT", what: "Eine Fettleber geht oft mit Blutzuckerproblemen einher.", connects: ["Blutzucker", "Blutfette", "Herz"], ask: "Hängen meine Leberwerte mit Cholesterin oder Blutzucker zusammen?" },
    cbc: { name: "Blutzellen", term: "Blutbild", what: "Rote und weiße Blutkörperchen und Blutplättchen: deine allgemeine Basis.", connects: ["Eisenspeicher", "Infektionen"], ask: "Gibt es in meinem Blutbild etwas, wonach ich fragen sollte?" },
    iron: { name: "Eisenspeicher", term: "Ferritin", what: "Zeigt dein Eisen, steigt aber auch bei Entzündung oder belasteter Leber.", connects: ["Entzündung", "Leber", "Blutzellen"], ask: "Sollte mein Ferritin zusammen mit meinen anderen Werten gelesen werden?" },
    kidney: { name: "Nieren", term: "Kreatinin, eGFR, Harnsäure", what: "Wie gut deine Nieren das Blut filtern.", connects: ["Blutdruck", "Blutzucker", "Herz"], ask: "Hängen meine Nierenwerte mit Blutdruck oder Blutzucker zusammen?" },
    thyroid: { name: "Schilddrüse", term: "TSH", what: "Eine träge Schilddrüse kann das Cholesterin erhöhen.", connects: ["Cholesterin", "Energie", "Gewicht"], ask: "Kann meine Schilddrüse etwas an meinem Cholesterin erklären?" },
    vit: { name: "Vitamine", term: "D, B12, Folsäure", what: "Abhängig von Ernährung, Sonne und manchen Medikamenten.", connects: ["Blutzellen", "Medikamente"], ask: "Hängen meine Vitaminwerte mit Ernährung oder Medikamenten zusammen?" },
    min: { name: "Salze & Mineralstoffe", term: "Natrium, Kalium", what: "Ändern sich oft durch Blutdruckmedikamente.", connects: ["Blutdruck", "Nieren"], ask: "Können meine Medikamente meine Mineralwerte erklären?" },
  },
};

export function nodes(lang: Lang): MapNode[] {
  return BASE.map((b) => ({ ...b, ...TEXT[lang][b.id] }));
}

export const ZONE_STYLE: Record<Zone, { on: string; text: string; border: string }> = {
  heart: { on: "#0E5E60", text: "#0A4547", border: "rgba(14,94,96,0.45)" },
  both: { on: "#1E2B2A", text: "#1E2B2A", border: "#1E2B2A" },
  meta: { on: "#A84F2C", text: "#7A3A1F", border: "rgba(168,79,44,0.5)" },
  report: { on: "#4E5856", text: "#1E2B2A", border: "#CFC4B6" },
};

export type MapUi = {
  eyebrow: string; h1: string; sub: string;
  wholeEyebrow: string; wholeShort: string; wholeNote: string; copyFull: string; copy: string; copied: string;
  zones: Record<Zone, string>; bothMobile: string; restP: string;
  connects: string; ask: string; guideQ: string; guideLink: string; sources: string; disclaimer: string;
};

export const UI: Record<Lang, MapUi> = {
  en: {
    eyebrow: "Beyond “all good?”", h1: "One number rarely tells the story.",
    sub: "Your blood test is a picture, not a list of passes and fails. Tap a marker to see what it is, what it connects to, and what to ask your AI.",
    wholeEyebrow: "Start with the whole report", wholeShort: "Go through my blood test section by section. Don't just tell me it's all good.",
    wholeNote: "The full prompt also asks your AI not to diagnose you and to end with questions for your doctor. Before you upload, black out your name, tax code and patient ID, and switch off model training in your AI's settings.",
    copyFull: "Copy the full prompt", copy: "Copy prompt", copied: "Copied",
    zones: { heart: "Heart & vessels", both: "Both", meta: "Metabolism", report: "The rest of your report" },
    bothMobile: "Heart and metabolism", restP: "It all connects back to the centre.",
    connects: "Connects to:", ask: "Ask your AI", guideQ: "Want the full checklist and a plan for your visit?", guideLink: "Get the free guide",
    sources: "Sources:", disclaimer: "Educational content, not medical advice. The map shows connections, not your personal risk. Chest pain or sudden symptoms: call 112.",
  },
  it: {
    eyebrow: "Oltre il “tutto a posto?”", h1: "Un solo valore racconta poco.",
    sub: "Le tue analisi sono un quadro, non un elenco di promossi e bocciati. Tocca un valore per vedere cos'è, a cosa si collega e cosa chiedere alla tua AI.",
    wholeEyebrow: "Parti dal referto completo", wholeShort: "Passa le mie analisi sezione per sezione. Non dirmi solo che è tutto a posto.",
    wholeNote: "Il prompt completo chiede anche alla tua AI di non fare diagnosi e di chiudere con domande per il medico. Prima di caricarlo, copri nome, codice fiscale e ID paziente, e disattiva l'addestramento del modello nelle impostazioni della tua AI.",
    copyFull: "Copia il prompt completo", copy: "Copia il prompt", copied: "Copiato",
    zones: { heart: "Cuore e vasi", both: "Entrambi", meta: "Metabolismo", report: "Il resto del referto" },
    bothMobile: "Cuore e metabolismo", restP: "Tutto si ricollega al centro.",
    connects: "Si collega a:", ask: "Chiedi alla tua AI", guideQ: "Vuoi la checklist completa e un piano per la visita?", guideLink: "Ricevi la guida gratuita",
    sources: "Fonti:", disclaimer: "Contenuto educativo, non un parere medico. La mappa mostra collegamenti, non il tuo rischio personale. Dolore al petto o sintomi improvvisi: chiama il 112.",
  },
  de: {
    eyebrow: "Mehr als „alles gut?“", h1: "Ein Wert allein erzählt wenig.",
    sub: "Dein Bluttest ist ein Gesamtbild, keine Liste aus bestanden und durchgefallen. Tippe auf einen Wert: was er ist, womit er zusammenhängt und was du deine KI fragen kannst.",
    wholeEyebrow: "Fang mit dem ganzen Befund an", wholeShort: "Geh meinen Bluttest Abschnitt für Abschnitt durch. Sag mir nicht nur, dass alles gut ist.",
    wholeNote: "Der ganze Prompt bittet deine KI außerdem, keine Diagnose zu stellen und mit Fragen für deinen Arzt zu enden. Schwärze vor dem Hochladen Name, Steuer- und Patientennummer und schalte das Modelltraining in den Einstellungen deiner KI aus.",
    copyFull: "Ganzen Prompt kopieren", copy: "Prompt kopieren", copied: "Kopiert",
    zones: { heart: "Herz & Gefäße", both: "Beides", meta: "Stoffwechsel", report: "Der Rest deines Befunds" },
    bothMobile: "Herz und Stoffwechsel", restP: "Alles hängt mit der Mitte zusammen.",
    connects: "Hängt zusammen mit:", ask: "Frag deine KI", guideQ: "Willst du die ganze Checkliste und einen Plan für deinen Termin?", guideLink: "Kostenlosen Leitfaden holen",
    sources: "Quellen:", disclaimer: "Bildungsinhalt, keine medizinische Beratung. Die Karte zeigt Zusammenhänge, nicht dein persönliches Risiko. Brustschmerzen oder plötzliche Symptome: 112 anrufen.",
  },
};

export const WHOLE_REPORT_PROMPT: Record<Lang, string> = {
  en: "Here is my full blood test report. Don't just tell me whether it's \"all good\". First ask me for the context you need, one question at a time: my age and sex, medications and supplements, whether I fasted, and how I felt around the test. Then go through the report section by section. For each section, tell me in plain language what it measures, which values are outside the lab's range, and which values are inside the range but still worth a question in my situation. Treat every value as a signal, not a verdict. Where it matters, tell me what current guidelines say and name the guideline and year. Tell me how the sections connect to each other and to my heart and metabolism. Say what you can't tell from this report, and if something isn't in it, say so instead of guessing. Do not diagnose me or recommend a treatment. End with my top 3 questions for my doctor and a one-page summary I can bring.",
  it: "Ecco il mio referto completo delle analisi del sangue. Non dirmi solo se è \"tutto a posto\". Prima chiedimi il contesto che ti serve, una domanda alla volta: età e sesso, farmaci e integratori, se ero a digiuno e come stavo nei giorni dell'esame. Poi passa il referto sezione per sezione. Per ogni sezione spiegami in parole semplici cosa misura, quali valori sono fuori dall'intervallo del laboratorio e quali sono dentro ma meritano comunque una domanda nella mia situazione. Tratta ogni valore come un segnale, non come un verdetto. Dove conta, dimmi cosa dicono le linee guida attuali e indica quale linea guida e di che anno. Spiegami come le sezioni si collegano tra loro e al mio cuore e metabolismo. Dimmi cosa non puoi capire da questo referto e, se qualcosa non c'è, dimmelo invece di supporre. Non farmi diagnosi e non consigliarmi terapie. Chiudi con le mie 3 domande principali per il medico e un riassunto di una pagina da portare.",
  de: "Hier ist mein vollständiger Blutbefund. Sag mir nicht nur, ob \"alles gut\" ist. Frag mich zuerst nach dem Kontext, den du brauchst, eine Frage nach der anderen: Alter und Geschlecht, Medikamente und Nahrungsergänzungsmittel, ob ich nüchtern war und wie es mir rund um den Test ging. Geh dann den Befund Abschnitt für Abschnitt durch. Erkläre mir für jeden Abschnitt in einfacher Sprache, was er misst, welche Werte außerhalb des Laborbereichs liegen und welche zwar im Bereich liegen, in meiner Situation aber trotzdem eine Frage wert sind. Behandle jeden Wert als Signal, nicht als Urteil. Wo es darauf ankommt, sag mir, was aktuelle Leitlinien sagen, und nenne Leitlinie und Jahr. Erkläre, wie die Abschnitte miteinander und mit meinem Herz und Stoffwechsel zusammenhängen. Sag mir, was du aus diesem Befund nicht ablesen kannst, und wenn etwas nicht drinsteht, sag es, statt zu raten. Stell keine Diagnose und empfiehl keine Behandlung. Schließe mit meinen 3 wichtigsten Fragen für meinen Arzt und einer einseitigen Zusammenfassung zum Mitnehmen.",
};

// The full prompt that gets copied for one marker.
export function promptFor(n: MapNode, lang: Lang): string {
  if (lang === "it") {
    return `${n.ask} (Sul mio referto: ${n.term}.) Spiegamelo in parole semplici, trattalo come un segnale e non come un verdetto, e dimmi come si collega al resto delle mie analisi. Se contano le linee guida, dimmi cosa dicono e indica quale linea guida e di che anno. Se qualcosa non è nel referto, dimmelo invece di supporre. Non farmi diagnosi. Chiudi con una domanda che potrei fare al mio medico.`;
  }
  if (lang === "de") {
    return `${n.ask} (Auf meinem Befund: ${n.term}.) Erkläre es in einfacher Sprache, behandle es als Signal, nicht als Urteil, und sag mir, wie es mit meinen anderen Werten zusammenhängt. Wenn Leitlinien hier wichtig sind, sag mir, was sie sagen, und nenne Leitlinie und Jahr. Wenn etwas nicht im Befund steht, sag es, statt zu raten. Stell keine Diagnose. Schließe mit einer Frage, die ich meinem Arzt stellen könnte.`;
  }
  return `${n.ask} (On my report: ${n.term}.) Explain it in plain language, treat it as a signal, not a verdict, and tell me how it connects to the rest of my results. If guidelines matter here, tell me what they say and name the guideline and year. If something isn't in my report, say so instead of guessing. Do not diagnose me. End with one question I could ask my doctor.`;
}

export const SOURCES: { label: string; href: string }[] = [
  { label: "ESC/EAS dyslipidaemia guideline 2019", href: "https://doi.org/10.1093/eurheartj/ehz455" },
  { label: "EAS consensus on LDL 2017", href: "https://doi.org/10.1093/eurheartj/ehx144" },
  { label: "EAS consensus on Lp(a) 2022", href: "https://doi.org/10.1093/eurheartj/ehac361" },
  { label: "AHA statement on fatty liver 2022", href: "https://pubmed.ncbi.nlm.nih.gov/35418240/" },
];
