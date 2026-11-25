// Area guides (25 Nov 2026). "Guides are the dots, the weekly email draws the lines."
// EN is the master and still to be reviewed (roadmap #47); IT/DE: titles and taglines only,
// full guides show in English with a notice until the translation is approved.
import type { Lang } from "@/lib/i18n";

export type AreaId = "your-blood-test" | "heart" | "metabolism" | "kidneys" | "blood" | "brain";

export type Area = {
  id: AreaId;
  markers: string[]; // marker ids from content/map.ts
  connects: { to: AreaId; t: string }[];
  intro: string[];
  prompt: string;
  questions: string[];
  topics: number[]; // weekly topic numbers (content/learn.ts issues, 1-based)
  deeper?: { label: string; href: string; p: string };
};

export const AREA_ORDER: AreaId[] = ["your-blood-test", "heart", "metabolism", "kidneys", "blood", "brain"];

export const AREA_NAMES: Record<Lang, Record<AreaId, { title: string; tagline: string }>> = {
  en: {
    "your-blood-test": { title: "Your blood test", tagline: "What a standard report checks, and how to read it as a whole." },
    heart: { title: "Heart & blood vessels", tagline: "The particles and pressures that shape your arteries over decades." },
    metabolism: { title: "Metabolism", tagline: "How your body handles sugar and fat, often visible years early." },
    kidneys: { title: "Kidneys", tagline: "How well your blood is filtered, and a quiet link to your heart." },
    blood: { title: "Blood & immune system", tagline: "Blood cells, iron and vitamins: your general baseline." },
    brain: { title: "Brain", tagline: "What protects your heart also protects your brain." },
  },
  it: {
    "your-blood-test": { title: "Le tue analisi", tagline: "Cosa controlla un referto standard, e come leggerlo nel suo insieme." },
    heart: { title: "Cuore e vasi", tagline: "Le particelle e le pressioni che plasmano le arterie negli anni." },
    metabolism: { title: "Metabolismo", tagline: "Come il corpo gestisce zuccheri e grassi, spesso visibile anni prima." },
    kidneys: { title: "Reni", tagline: "Quanto bene viene filtrato il sangue, e un legame silenzioso con il cuore." },
    blood: { title: "Sangue e difese", tagline: "Cellule del sangue, ferro e vitamine: la tua base generale." },
    brain: { title: "Cervello", tagline: "Ciò che protegge il cuore protegge anche il cervello." },
  },
  de: {
    "your-blood-test": { title: "Dein Bluttest", tagline: "Was ein Standardbefund prüft und wie du ihn als Ganzes liest." },
    heart: { title: "Herz & Gefäße", tagline: "Die Partikel und Drücke, die deine Arterien über Jahrzehnte prägen." },
    metabolism: { title: "Stoffwechsel", tagline: "Wie dein Körper Zucker und Fett verarbeitet, oft Jahre früher sichtbar." },
    kidneys: { title: "Nieren", tagline: "Wie gut dein Blut gefiltert wird, und eine stille Verbindung zum Herzen." },
    blood: { title: "Blut & Abwehr", tagline: "Blutzellen, Eisen und Vitamine: deine allgemeine Basis." },
    brain: { title: "Gehirn", tagline: "Was dein Herz schützt, schützt auch dein Gehirn." },
  },
};

const NO_DIAGNOSIS = "Don't diagnose me, and don't calculate values that aren't on the report.";

export const FULL_PROMPT = `Here is my blood test with the lab's reference ranges: [screenshot, without your name]. Explain it in plain words, in under 500 words.
1. Start with two sentences on the overall picture.
2. Sort my values into these areas: heart and blood vessels (including blood fats), metabolism (sugar and liver), kidneys, blood and immune system, other. For each area, say in one sentence what it tells me.
3. In each area, list only the values outside the range or close to a limit, and say "the rest are in range". If a lab range doesn't fit everyone (for example LDL, whose target depends on personal risk), say so, even if the value is in range.
4. For each value outside the range, explain what it measures, the common reasons it can be high or low (including harmless ones), and what doctors usually check next.
5. For each area, name at most 2 things doctors often check that aren't on my report.
6. End with the 3 questions most worth asking my doctor.
Then ask me up to 3 questions that would change your answer. ${NO_DIAGNOSIS}`;

export const AREAS: Record<AreaId, Area> = {
  "your-blood-test": {
    id: "your-blood-test",
    markers: [],
    connects: [
      { to: "heart", t: "Blood fats, and what isn't on the report: blood pressure, Lp(a)." },
      { to: "metabolism", t: "Sugar, triglycerides and liver values, read as a pattern." },
      { to: "kidneys", t: "Creatinine, eGFR and the urine test." },
      { to: "blood", t: "Blood count, iron and vitamins." },
    ],
    intro: [
      "A standard blood test is a handful of separate checklists side by side: blood cells, sugar, fats, liver, kidneys. Each value has its own range: where most healthy people in the lab's reference group fall, not a personal target.",
      "The report only flags what falls outside the range today. It doesn't tell you which values belong together, or which one has been creeping towards a limit for years. The prompt below asks your AI to do exactly that, for your whole report at once.",
    ],
    prompt: FULL_PROMPT,
    questions: [
      "Which of my values would you like to see again, and when?",
      "Is anything on my report worth looking at together with my family history?",
      "Which tests that aren't on my report would make sense for me?",
    ],
    topics: [1],
  },
  heart: {
    id: "heart",
    markers: ["ldl", "lpa", "bp", "crp"],
    connects: [
      { to: "metabolism", t: "Triglycerides, blood sugar and belly fat raise heart risk too." },
      { to: "kidneys", t: "Blood pressure and kidney function affect each other." },
      { to: "brain", t: "Much of what protects the heart also protects the brain." },
    ],
    intro: [
      "Heart risk is never one number. Doctors look at a combination: age, sex, blood pressure, cholesterol, smoking, diabetes and family history, often through a risk score. Your personal LDL target depends on that overall risk, not on the range printed on the report.",
      "Some of the most useful markers aren't on a standard report at all. Blood pressure is measured separately, and Lp(a) and ApoB are often only tested if someone asks.",
    ],
    prompt: `Here is my blood test with the lab's reference ranges: [screenshot, without your name]. Focus on my heart and blood vessels, in plain words.
1. List the values that relate to heart risk and explain each in one sentence.
2. Tell me which inputs to a cardiovascular risk score are missing (for example blood pressure, smoking, family history) and ask me for them.
3. Explain why my LDL target depends on my overall risk, and which guideline sets it where I live.
4. Tell me whether Lp(a) or ApoB were measured.
End with 3 questions for my doctor. ${NO_DIAGNOSIS}`,
    questions: [
      "What is my overall cardiovascular risk, and what LDL target follows from it?",
      "Has my Lp(a) ever been measured, and should it be?",
      "Should my blood pressure be checked more regularly?",
    ],
    topics: [2, 3, 4],
    deeper: { label: "Open the cholesterol guide", href: "/guide", p: "A step-by-step checklist for your cholesterol result: the prompt, what to bring and what to ask at your visit." },
  },
  metabolism: {
    id: "metabolism",
    markers: ["tg", "waist", "glucose", "liver", "thyroid"],
    connects: [
      { to: "heart", t: "The same pattern raises cardiovascular risk." },
      { to: "kidneys", t: "Years of high blood sugar can strain the kidneys." },
      { to: "brain", t: "Diabetes is among the risk factors research links to dementia." },
    ],
    intro: [
      "Early metabolic change rarely shows as one red flag. It shows as a pattern across values that are each still \"normal\": triglycerides creeping up, HDL creeping down, glucose at the top of its range, liver enzymes slightly raised, a growing waist.",
      "Insulin resistance, type 2 diabetes and fatty liver often share the same root, and each also raises heart risk. Two or three reports side by side say more than any single value.",
    ],
    prompt: `Here are my last 2–3 blood tests with the lab's reference ranges: [screenshots, without your name]. Focus on my metabolism, in plain words.
1. Put triglycerides, HDL, glucose, HbA1c and the liver values (ALT, AST, GGT) side by side over time.
2. Tell me which are drifting, even within range, and what that pattern could and couldn't mean.
3. Name what's missing that doctors often check, such as HbA1c or waist size.
End with 3 questions for my doctor. ${NO_DIAGNOSIS}`,
    questions: [
      "Do my values together suggest anything about how my body handles sugar?",
      "Would an HbA1c or a liver ultrasound make sense for me?",
      "Which of these values should we follow over time?",
    ],
    topics: [5, 6],
  },
  kidneys: {
    id: "kidneys",
    markers: ["kidney", "min"],
    connects: [
      { to: "heart", t: "Blood pressure and kidney function affect each other." },
      { to: "metabolism", t: "Years of high blood sugar can strain the kidneys." },
    ],
    intro: [
      "Creatinine and eGFR show how well the kidneys filter your blood; what a value means depends on your age, sex and muscle mass. Protein (albumin) in the urine can be an early sign of strain on small blood vessels.",
      "Kidneys, blood pressure and blood sugar affect each other, and kidney values also count towards heart risk. A urine albumin test is often not part of a routine check-up.",
    ],
    prompt: `Here are the kidney values and the urine test from my report: [screenshot, without your name]. In plain words:
1. What does each value show?
2. How do they connect to blood pressure, blood sugar and heart risk?
3. Were eGFR and urine albumin (ACR) measured?
End with 3 questions for my doctor. ${NO_DIAGNOSIS}`,
    questions: [
      "Is my kidney function in line with my age?",
      "Should my urine albumin (ACR) be checked?",
      "Do any of my medications affect my kidney values or minerals?",
    ],
    topics: [8],
  },
  blood: {
    id: "blood",
    markers: ["cbc", "iron", "vit"],
    connects: [
      { to: "heart", t: "Inflammation (CRP) is also read as a heart signal." },
      { to: "metabolism", t: "Ferritin can rise with a busy liver." },
    ],
    intro: [
      "The blood count checks red cells (they carry oxygen), white cells (your immune system) and platelets (clotting). Iron, B12 and folate help explain why red cells might be small or large.",
      "Several of these values are read together: red cell size with iron, ferritin with inflammation and the liver. A value slightly outside its range often has a simple explanation, such as a recent cold.",
    ],
    prompt: `Here is the blood count and iron section of my report: [screenshot, without your name]. In plain words:
1. What does each group check?
2. Which values should be read together, for example red cell size and iron?
3. Which are outside or close to a limit, and what are common harmless explanations, such as a recent infection?
End with 3 questions for my doctor. ${NO_DIAGNOSIS}`,
    questions: [
      "Is anything in my blood count worth repeating?",
      "Should my iron, B12 or folate be checked together with my blood count?",
      "Could a recent illness or a medication explain any of these values?",
    ],
    topics: [],
  },
  brain: {
    id: "brain",
    markers: ["bp", "ldl", "glucose"],
    connects: [
      { to: "heart", t: "Blood pressure and cholesterol matter for the brain's blood vessels too." },
      { to: "metabolism", t: "Diabetes is among the risk factors research links to dementia." },
    ],
    intro: [
      "There's no routine blood test for brain health. But several heart and metabolic risk factors you can see on your reports, such as blood pressure, cholesterol and blood sugar, are among the factors research links to dementia.",
      "New blood tests for Alzheimer's exist. They're designed for people with symptoms, with a specialist, not for screening healthy people. Be careful with tests sold as predictions.",
    ],
    prompt: `Which cardiovascular and metabolic risk factors are linked to dementia? Look at my reports [screenshots, without your name] and tell me which of them I can already see, in plain words. Separately: what are blood tests for Alzheimer's designed for, and why aren't they recommended for people without symptoms?
End with 3 questions for my doctor. Don't diagnose me.`,
    questions: [
      "Which of my heart or metabolic values matter most for my brain health?",
      "Is there anything in my family history we should keep an eye on?",
      "Would any test make sense for me, or is it better not to?",
    ],
    topics: [7],
  },
};

export const AREA_UI: Record<Lang, {
  back: string; guide: string; markersH: string; connectsH: string; promptH: string; promptLead: string;
  shareLine: string; shareLink: string; questionsH: string; topicsH: string; topicFrom: string;
  closeH: string; closeP: string; closeCta: string; enOnly: string; copy: string; copied: string; mapLink: string;
}> = {
  en: {
    back: "← Learn", guide: "Guide", markersH: "The markers, in plain words", connectsH: "How it connects",
    promptH: "Try this with your AI", promptLead: "Copy the prompt, then add a screenshot of your report.",
    shareLine: "Only share what you're comfortable sharing with your AI.", shareLink: "How to share safely",
    questionsH: "Questions for your doctor", topicsH: "Weekly topics from this area", topicFrom: "Weekly topic",
    closeH: "Go deeper, one topic a week", closeP: "One small topic every Wednesday, with a prompt to try. Free, unsubscribe anytime.", closeCta: "Get it weekly",
    enOnly: "", copy: "Copy the prompt", copied: "Copied", mapLink: "See how all markers connect",
  },
  it: {
    back: "← Impara", guide: "Guida", markersH: "I valori, in parole semplici", connectsH: "Come si collega",
    promptH: "Prova con la tua AI", promptLead: "Copia il prompt, poi aggiungi uno screenshot del referto.",
    shareLine: "Condividi solo ciò che ti senti a tuo agio a condividere con la tua AI.", shareLink: "Come condividere in sicurezza",
    questionsH: "Domande per il tuo medico", topicsH: "Temi settimanali di quest'area", topicFrom: "Tema settimanale",
    closeH: "Approfondisci, un tema a settimana", closeP: "Un piccolo tema ogni mercoledì, con un prompt da provare. Gratis, disiscrizione quando vuoi.", closeCta: "Ricevilo ogni settimana",
    enOnly: "Questa guida è ancora in inglese: la traduzione italiana arriva a breve.", copy: "Copia il prompt", copied: "Copiato", mapLink: "Guarda come si collegano tutti i valori",
  },
  de: {
    back: "← Lernen", guide: "Leitfaden", markersH: "Die Werte, verständlich erklärt", connectsH: "Wie es zusammenhängt",
    promptH: "Probier das mit deiner KI", promptLead: "Kopiere den Prompt und füge einen Screenshot deines Befunds hinzu.",
    shareLine: "Teile nur, was du mit deiner KI teilen möchtest.", shareLink: "Wie du sicherer teilst",
    questionsH: "Fragen für deinen Arzt", topicsH: "Wöchentliche Themen aus diesem Bereich", topicFrom: "Wochenthema",
    closeH: "Tiefer gehen, ein Thema pro Woche", closeP: "Jeden Mittwoch ein kleines Thema, mit einem Prompt zum Ausprobieren. Kostenlos, jederzeit abbestellbar.", closeCta: "Wöchentlich erhalten",
    enOnly: "Dieser Leitfaden ist noch auf Englisch: Die deutsche Übersetzung folgt in Kürze.", copy: "Prompt kopieren", copied: "Kopiert", mapLink: "Sieh, wie alle Werte zusammenhängen",
  },
};
