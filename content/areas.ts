// Area guides, in the cholesterol guide's format (25 Nov 2026).
// "Guides are the dots, the weekly email draws the lines."
// EN is the master and still to be reviewed (roadmap #47). Prompts and doctor questions have IT/DE drafts
// (for the "Prompt in" switch); the explanatory text is EN-only until the translation is approved.
import type { Lang } from "@/lib/i18n";

export type AreaId = "your-blood-test" | "heart" | "metabolism" | "kidneys" | "blood" | "brain";
type T3 = Record<Lang, string>;

export type Area = {
  id: AreaId;
  h1: string;
  sub: string;
  miss: [string, string][];
  markers: string[]; // marker ids from content/map.ts
  connects: { to: AreaId; t: string }[];
  connectsNote?: string; // used instead of the connects list when that list already fills section 2
  promptShort: T3;
  prompt: T3;
  questions: { id: string; label: string; q: T3 }[];
  followUp: T3;
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

// Fixed closing line of every main prompt (agreed 25 Nov 2026): explain, don't treat, don't guess.
export const ND: T3 = {
  en: "Focus on what could explain my values, not on how to treat them: treatment options are something I'll discuss with my doctor. Don't diagnose me, don't assume or calculate anything the report doesn't show, and tell me what else you would need to know.",
  it: "Concentrati su cosa potrebbe spiegare i miei valori, non su come trattarli: le opzioni di trattamento le discuterò con il mio medico. Non farmi diagnosi, non dare per scontato né calcolare nulla che non sia nel referto, e dimmi cos'altro ti servirebbe sapere.",
  de: "Konzentriere dich darauf, was meine Werte erklären könnte, nicht darauf, wie man sie behandelt: Behandlungsmöglichkeiten bespreche ich mit meinem Arzt. Stelle keine Diagnose, nimm nichts an und berechne nichts, was nicht im Befund steht, und sag mir, was du sonst noch wissen müsstest.",
};

// Optional follow-up prompt "what you can do yourself" (agreed 25 Nov 2026): low-risk habits only,
// no medication or supplements, named guidelines, disagreement flagged, check with the doctor first where needed.
export function followUp(ex: T3): T3 {
  return {
    en: `Based on what we discussed: what does research say about everyday habits that could help these values, such as food, movement, sleep, stress, alcohol and smoking? Only low-risk habits that guidelines recommend for most adults, like ${ex.en}. No medication, no supplements, no extreme diets or fasting. For each tip, name the guideline or organisation it comes from (such as ESC or WHO), say if experts disagree, and say if you're not sure of the source. Tell me which tips I should check with my doctor first, for example because of medication or a condition. Don't promise results.`,
    it: `In base a quello che abbiamo visto: cosa dice la ricerca sulle abitudini quotidiane che potrebbero aiutare questi valori, come alimentazione, movimento, sonno, stress, alcol e fumo? Solo abitudini a basso rischio che le linee guida raccomandano alla maggior parte degli adulti, come ${ex.it}. Niente farmaci, niente integratori, niente diete estreme o digiuni. Per ogni consiglio, indica la linea guida o l'organizzazione da cui viene (per esempio ESC o OMS), dimmi se gli esperti non sono d'accordo e se non sei sicuro della fonte. Dimmi quali consigli dovrei verificare prima con il mio medico, per esempio per via di farmaci o di una condizione. Non promettere risultati.`,
    de: `Ausgehend von dem, was wir besprochen haben: Was sagt die Forschung über Alltagsgewohnheiten, die diesen Werten helfen könnten, etwa Ernährung, Bewegung, Schlaf, Stress, Alkohol und Rauchen? Nur risikoarme Gewohnheiten, die Leitlinien den meisten Erwachsenen empfehlen, wie ${ex.de}. Keine Medikamente, keine Nahrungsergänzungsmittel, keine extremen Diäten oder Fasten. Nenne für jeden Tipp die Leitlinie oder Organisation, von der er stammt (etwa ESC oder WHO), sag, ob Fachleute sich uneinig sind, und ob du dir bei der Quelle nicht sicher bist. Sag mir, welche Tipps ich zuerst mit meinem Arzt klären sollte, etwa wegen Medikamenten oder einer Erkrankung. Versprich keine Ergebnisse.`,
  };
}

export const FULL_PROMPT: T3 = {
  en: `Here is my blood test with the lab's reference ranges: [screenshot, without your name]. Explain it in plain words, in under 500 words.
1. Start with two sentences on the overall picture.
2. Sort my values into these areas: heart and blood vessels (including blood fats), metabolism (sugar and liver), kidneys, blood and immune system, other. For each area, say in one sentence what it tells me.
3. In each area, list only the values outside the range or close to a limit, and say "the rest are in range". If a lab range doesn't fit everyone (for example LDL, whose target depends on personal risk), say so, even if the value is in range.
4. For each value outside the range, explain what it measures, the common reasons it can be high or low (including harmless ones), and what doctors usually check next.
5. For each area, name at most 2 things doctors often check that aren't on my report.
6. End with the 3 questions most worth asking my doctor.
Then ask me up to 3 questions that would change your answer. ${ND.en}`,
  it: `Ecco le mie analisi del sangue con gli intervalli di riferimento del laboratorio: [screenshot, senza il tuo nome]. Spiegale in parole semplici, in meno di 500 parole.
1. Inizia con due frasi sul quadro generale.
2. Ordina i miei valori in queste aree: cuore e vasi (compresi i grassi nel sangue), metabolismo (zuccheri e fegato), reni, sangue e difese, altro. Per ogni area, dimmi in una frase cosa mi dice.
3. In ogni area, elenca solo i valori fuori range o vicini a un limite e scrivi "gli altri sono nella norma". Se un intervallo del laboratorio non vale per tutti (per esempio l'LDL, il cui obiettivo dipende dal rischio personale), dillo, anche se il valore è nella norma.
4. Per ogni valore fuori range, spiega cosa misura, i motivi comuni per cui può essere alto o basso (anche quelli innocui) e cosa controllano di solito i medici dopo.
5. Per ogni area, indica al massimo 2 esami che i medici controllano spesso e che non sono nel mio referto.
6. Chiudi con le 3 domande più utili da fare al mio medico.
Poi fammi fino a 3 domande che cambierebbero la tua risposta. ${ND.it}`,
  de: `Hier ist mein Bluttest mit den Referenzbereichen des Labors: [Screenshot, ohne deinen Namen]. Erkläre ihn in einfachen Worten, in weniger als 500 Wörtern.
1. Beginne mit zwei Sätzen zum Gesamtbild.
2. Ordne meine Werte diesen Bereichen zu: Herz und Gefäße (einschließlich Blutfette), Stoffwechsel (Zucker und Leber), Nieren, Blut und Abwehr, Sonstiges. Sag mir für jeden Bereich in einem Satz, was er mir sagt.
3. Liste in jedem Bereich nur die Werte außerhalb des Bereichs oder nahe an einer Grenze auf und schreib "die übrigen liegen im Bereich". Wenn ein Laborbereich nicht für alle passt (zum Beispiel LDL, dessen Zielwert vom persönlichen Risiko abhängt), sag das, auch wenn der Wert im Bereich liegt.
4. Erkläre für jeden Wert außerhalb des Bereichs, was er misst, häufige Gründe, warum er hoch oder niedrig sein kann (auch harmlose), und was Ärzte meist als Nächstes prüfen.
5. Nenne für jeden Bereich höchstens 2 Dinge, die Ärzte oft prüfen und die nicht in meinem Befund stehen.
6. Schließe mit den 3 Fragen, die sich bei meinem Arzt am meisten lohnen.
Stell mir dann bis zu 3 Fragen, die deine Antwort ändern würden. ${ND.de}`,
};

export const AREAS: Record<AreaId, Area> = {
  "your-blood-test": {
    id: "your-blood-test",
    h1: "Your blood test isn't a story",
    sub: "It's a handful of separate checklists. Here's how to read it as a whole.",
    miss: [
      ["The range is not a target.", "It's where most healthy people in the lab's reference group fall, not where you personally should be."],
      ["Only what's outside gets flagged.", "A value sitting right at the edge, or creeping towards it for years, stays black."],
      ["Nobody joins the dots.", "The report doesn't tell you which values belong together, or that one on its own can mislead."],
    ],
    markers: [],
    connects: [
      { to: "heart", t: "Blood fats, and what isn't on the report: blood pressure, Lp(a)." },
      { to: "metabolism", t: "Sugar, triglycerides and liver values, read as a pattern." },
      { to: "kidneys", t: "Creatinine, eGFR and the urine test." },
      { to: "blood", t: "Blood count, iron and vitamins." },
    ],
    connectsNote: "Heart, metabolism and kidneys are one conversation: blood pressure, blood sugar and blood fats affect all three. That's why the prompt below sorts your report by area first, then looks across the areas.",
    promptShort: {
      en: "Explain my whole blood test by health area, what's outside the range and why, and what to ask my doctor.",
      it: "Spiegami tutte le analisi per area, cosa è fuori range e perché, e cosa chiedere al medico.",
      de: "Erkläre meinen ganzen Bluttest nach Bereichen, was außerhalb liegt und warum, und was ich meinen Arzt fragen soll.",
    },
    prompt: FULL_PROMPT,
    questions: [
      { id: "repeat", label: "Repeat tests", q: { en: "Which of my values would you like to see again, and when?", it: "Quali dei miei valori vorrebbe ricontrollare, e quando?", de: "Welche meiner Werte möchten Sie noch einmal sehen, und wann?" } },
      { id: "family", label: "Family history", q: { en: "Is anything on my report worth looking at together with my family history?", it: "C'è qualcosa nel mio referto da guardare insieme alla mia storia familiare?", de: "Gibt es etwas in meinem Befund, das man zusammen mit meiner Familiengeschichte ansehen sollte?" } },
      { id: "missing", label: "What's missing", q: { en: "Which tests that aren't on my report would make sense for me?", it: "Quali esami che non sono nel mio referto avrebbero senso per me?", de: "Welche Tests, die nicht in meinem Befund stehen, wären für mich sinnvoll?" } },
    ],
    followUp: followUp({ en: "a short walk after meals", it: "una breve passeggiata dopo i pasti", de: "ein kurzer Spaziergang nach dem Essen" }),
    topics: [1],
  },
  heart: {
    id: "heart",
    h1: "Heart risk is never one number",
    sub: "Your LDL target depends on your overall risk, and some key markers aren't on a standard report.",
    miss: [
      ["Your target is personal.", "Doctors combine age, sex, blood pressure, cholesterol, smoking, diabetes and family history, often in a risk score. Your LDL target follows from that, not from the range on the report."],
      ["\"Good\" cholesterol doesn't cancel out \"bad\".", "A high HDL is not a free pass for a high LDL."],
      ["Two useful markers are rarely tested.", "Lp(a), largely inherited, and ApoB are often only measured if someone asks. Blood pressure isn't on a blood test at all."],
    ],
    markers: ["ldl", "lpa", "bp", "crp"],
    connects: [
      { to: "metabolism", t: "Triglycerides, blood sugar and belly fat raise heart risk too." },
      { to: "kidneys", t: "Blood pressure and kidney function affect each other." },
      { to: "brain", t: "Much of what protects the heart also protects the brain." },
    ],
    promptShort: {
      en: "Look at my blood test for heart risk, tell me what's missing for a full picture, and what to ask my doctor.",
      it: "Guarda le mie analisi per il rischio cardiovascolare, dimmi cosa manca per un quadro completo e cosa chiedere al medico.",
      de: "Sieh dir meinen Bluttest auf das Herzrisiko an, sag mir, was für ein vollständiges Bild fehlt, und was ich meinen Arzt fragen soll.",
    },
    prompt: {
      en: `Here is my blood test with the lab's reference ranges: [screenshot, without your name]. Focus on my heart and blood vessels, in plain words.
1. List the values that relate to heart risk and explain each in one sentence.
2. Tell me which inputs to a cardiovascular risk score are missing (for example blood pressure, smoking, family history) and ask me for them.
3. Explain why my LDL target depends on my overall risk, and which guideline sets it where I live.
4. Tell me whether Lp(a) or ApoB were measured.
End with 3 questions for my doctor. ${ND.en}`,
      it: `Ecco le mie analisi del sangue con gli intervalli di riferimento del laboratorio: [screenshot, senza il tuo nome]. Concentrati su cuore e vasi, in parole semplici.
1. Elenca i valori legati al rischio cardiovascolare e spiegali in una frase ciascuno.
2. Dimmi quali dati di un punteggio di rischio cardiovascolare mancano (per esempio pressione, fumo, storia familiare) e chiedimeli.
3. Spiegami perché il mio obiettivo di LDL dipende dal mio rischio complessivo, e quale linea guida lo fissa dove vivo.
4. Dimmi se Lp(a) o ApoB sono stati misurati.
Chiudi con 3 domande per il mio medico. ${ND.it}`,
      de: `Hier ist mein Bluttest mit den Referenzbereichen des Labors: [Screenshot, ohne deinen Namen]. Konzentriere dich auf Herz und Gefäße, in einfachen Worten.
1. Liste die Werte auf, die mit dem Herzrisiko zu tun haben, und erkläre jeden in einem Satz.
2. Sag mir, welche Angaben für einen kardiovaskulären Risikoscore fehlen (zum Beispiel Blutdruck, Rauchen, Familiengeschichte), und frag mich danach.
3. Erkläre, warum mein LDL-Zielwert von meinem Gesamtrisiko abhängt und welche Leitlinie ihn dort festlegt, wo ich lebe.
4. Sag mir, ob Lp(a) oder ApoB gemessen wurden.
Schließe mit 3 Fragen für meinen Arzt. ${ND.de}`,
    },
    questions: [
      { id: "risk", label: "My risk and my target", q: { en: "What is my overall cardiovascular risk, and what LDL target follows from it?", it: "Qual è il mio rischio cardiovascolare complessivo, e quale obiettivo di LDL ne deriva?", de: "Wie hoch ist mein kardiovaskuläres Gesamtrisiko, und welcher LDL-Zielwert ergibt sich daraus?" } },
      { id: "lpa", label: "Lp(a)", q: { en: "Has my Lp(a) ever been measured, and should it be?", it: "La mia Lp(a) è mai stata misurata, e andrebbe misurata?", de: "Wurde mein Lp(a) je gemessen, und sollte es gemessen werden?" } },
      { id: "bp", label: "Blood pressure", q: { en: "Should my blood pressure be checked more regularly?", it: "Dovrei controllare la pressione più regolarmente?", de: "Sollte mein Blutdruck regelmäßiger kontrolliert werden?" } },
    ],
    followUp: followUp({ en: "regular brisk walking", it: "camminare a passo svelto con regolarità", de: "regelmäßiges zügiges Gehen" }),
    topics: [2, 3, 4],
    deeper: { label: "Open the cholesterol guide", href: "/guide", p: "The in-depth guide for a cholesterol result: your situation, the prompt, a full checklist and what to bring to your visit." },
  },
  metabolism: {
    id: "metabolism",
    h1: "Your metabolism is already on the report",
    sub: "Early change shows as a pattern across values that are each still \"normal\".",
    miss: [
      ["Look for patterns, not one red flag.", "Triglycerides creeping up, HDL creeping down, glucose at the top of its range, liver enzymes slightly raised, a growing waist."],
      ["One root, three names.", "Insulin resistance, type 2 diabetes and fatty liver often share the same root, and each also raises heart risk."],
      ["Trends beat snapshots.", "Two or three reports side by side say more than any single value."],
    ],
    markers: ["tg", "waist", "glucose", "liver", "thyroid"],
    connects: [
      { to: "heart", t: "The same pattern raises cardiovascular risk." },
      { to: "kidneys", t: "Years of high blood sugar can strain the kidneys." },
      { to: "brain", t: "Diabetes is among the risk factors research links to dementia." },
    ],
    promptShort: {
      en: "Compare my last blood tests for metabolic patterns, even within range, and tell me what to ask my doctor.",
      it: "Confronta le mie ultime analisi per individuare schemi metabolici, anche nella norma, e dimmi cosa chiedere al medico.",
      de: "Vergleiche meine letzten Bluttests auf Stoffwechselmuster, auch im Normbereich, und sag mir, was ich meinen Arzt fragen soll.",
    },
    prompt: {
      en: `Here are my last 2–3 blood tests with the lab's reference ranges: [screenshots, without your name]. Focus on my metabolism, in plain words.
1. Put triglycerides, HDL, glucose, HbA1c and the liver values (ALT, AST, GGT) side by side over time.
2. Tell me which are drifting, even within range, and what that pattern could and couldn't mean.
3. Name what's missing that doctors often check, such as HbA1c or waist size.
End with 3 questions for my doctor. ${ND.en}`,
      it: `Ecco le mie ultime 2–3 analisi con gli intervalli di riferimento del laboratorio: [screenshot, senza il tuo nome]. Concentrati sul metabolismo, in parole semplici.
1. Metti a confronto nel tempo trigliceridi, HDL, glicemia, HbA1c e i valori del fegato (ALT, AST, GGT).
2. Dimmi quali stanno cambiando, anche se nella norma, e cosa può e non può significare questo andamento.
3. Indica cosa manca che i medici controllano spesso, come l'HbA1c o la circonferenza vita.
Chiudi con 3 domande per il mio medico. ${ND.it}`,
      de: `Hier sind meine letzten 2–3 Bluttests mit den Referenzbereichen des Labors: [Screenshots, ohne deinen Namen]. Konzentriere dich auf meinen Stoffwechsel, in einfachen Worten.
1. Stelle Triglyceride, HDL, Glukose, HbA1c und die Leberwerte (ALT, AST, GGT) im Zeitverlauf nebeneinander.
2. Sag mir, welche sich verändern, auch innerhalb des Bereichs, und was dieses Muster bedeuten kann und was nicht.
3. Nenne, was fehlt und was Ärzte oft prüfen, etwa HbA1c oder den Bauchumfang.
Schließe mit 3 Fragen für meinen Arzt. ${ND.de}`,
    },
    questions: [
      { id: "sugar", label: "How I handle sugar", q: { en: "Do my values together suggest anything about how my body handles sugar?", it: "I miei valori, insieme, dicono qualcosa su come il mio corpo gestisce gli zuccheri?", de: "Sagen meine Werte zusammen etwas darüber, wie mein Körper mit Zucker umgeht?" } },
      { id: "tests", label: "HbA1c or ultrasound", q: { en: "Would an HbA1c or a liver ultrasound make sense for me?", it: "Avrebbe senso per me un'HbA1c o un'ecografia del fegato?", de: "Wären ein HbA1c oder ein Leber-Ultraschall für mich sinnvoll?" } },
      { id: "follow", label: "What to follow", q: { en: "Which of these values should we follow over time?", it: "Quali di questi valori dovremmo seguire nel tempo?", de: "Welche dieser Werte sollten wir im Verlauf beobachten?" } },
    ],
    followUp: followUp({ en: "a short walk after meals", it: "una breve passeggiata dopo i pasti", de: "ein kurzer Spaziergang nach dem Essen" }),
    topics: [5, 6],
  },
  kidneys: {
    id: "kidneys",
    h1: "Your kidneys talk to your heart",
    sub: "How well your blood is filtered, and why it counts towards heart risk.",
    miss: [
      ["Creatinine alone isn't the whole story.", "eGFR shows how well the kidneys filter; what a value means depends on your age, sex and muscle mass."],
      ["A small urine test is often missing.", "Protein (albumin) in the urine can be an early sign of strain on small blood vessels, and it's often not part of a routine check-up."],
      ["Kidneys, blood pressure and blood sugar affect each other.", "That's why kidney values also count towards heart risk."],
    ],
    markers: ["kidney", "min"],
    connects: [
      { to: "heart", t: "Blood pressure and kidney function affect each other." },
      { to: "metabolism", t: "Years of high blood sugar can strain the kidneys." },
    ],
    promptShort: {
      en: "Explain my kidney values and urine test, how they connect to my heart, and what to ask my doctor.",
      it: "Spiegami i valori dei reni e l'esame delle urine, come si collegano al cuore e cosa chiedere al medico.",
      de: "Erkläre meine Nierenwerte und den Urintest, wie sie mit meinem Herzen zusammenhängen, und was ich meinen Arzt fragen soll.",
    },
    prompt: {
      en: `Here are the kidney values and the urine test from my report: [screenshot, without your name]. In plain words:
1. What does each value show?
2. How do they connect to blood pressure, blood sugar and heart risk?
3. Were eGFR and urine albumin (ACR) measured?
End with 3 questions for my doctor. ${ND.en}`,
      it: `Ecco i valori dei reni e l'esame delle urine del mio referto: [screenshot, senza il tuo nome]. In parole semplici:
1. Cosa mostra ogni valore?
2. Come si collegano a pressione, zuccheri nel sangue e rischio cardiovascolare?
3. Sono stati misurati l'eGFR e l'albumina nelle urine (ACR)?
Chiudi con 3 domande per il mio medico. ${ND.it}`,
      de: `Hier sind die Nierenwerte und der Urintest aus meinem Befund: [Screenshot, ohne deinen Namen]. In einfachen Worten:
1. Was zeigt jeder Wert?
2. Wie hängen sie mit Blutdruck, Blutzucker und Herzrisiko zusammen?
3. Wurden eGFR und Albumin im Urin (ACR) gemessen?
Schließe mit 3 Fragen für meinen Arzt. ${ND.de}`,
    },
    questions: [
      { id: "age", label: "Kidney function", q: { en: "Is my kidney function in line with my age?", it: "La mia funzione renale è in linea con la mia età?", de: "Entspricht meine Nierenfunktion meinem Alter?" } },
      { id: "acr", label: "Urine albumin", q: { en: "Should my urine albumin (ACR) be checked?", it: "Andrebbe controllata l'albumina nelle urine (ACR)?", de: "Sollte mein Albumin im Urin (ACR) bestimmt werden?" } },
      { id: "meds", label: "Medications", q: { en: "Do any of my medications affect my kidney values or minerals?", it: "Qualcuno dei miei farmaci influisce sui valori dei reni o sui sali minerali?", de: "Beeinflusst eines meiner Medikamente meine Nierenwerte oder Mineralstoffe?" } },
    ],
    followUp: followUp({ en: "cutting back on salt", it: "ridurre il sale", de: "weniger Salz" }),
    topics: [8],
  },
  blood: {
    id: "blood",
    h1: "Your blood count is a baseline",
    sub: "Blood cells, iron and vitamins, and why they're read together.",
    miss: [
      ["Some values only make sense in pairs.", "Red cell size is read with iron, ferritin with inflammation and the liver."],
      ["Small deviations often have simple causes.", "A recent cold, a hard workout or how the sample was handled can move a value slightly outside its range."],
      ["Ferritin isn't only about iron.", "It also rises with inflammation or a busy liver."],
    ],
    markers: ["cbc", "iron", "vit"],
    connects: [
      { to: "heart", t: "Inflammation (CRP) is also read as a heart signal." },
      { to: "metabolism", t: "Ferritin can rise with a busy liver." },
    ],
    promptShort: {
      en: "Explain my blood count and iron values, which belong together, and what to ask my doctor.",
      it: "Spiegami emocromo e valori del ferro, quali vanno letti insieme e cosa chiedere al medico.",
      de: "Erkläre mein Blutbild und meine Eisenwerte, welche zusammengehören, und was ich meinen Arzt fragen soll.",
    },
    prompt: {
      en: `Here is the blood count and iron section of my report: [screenshot, without your name]. In plain words:
1. What does each group check?
2. Which values should be read together, for example red cell size and iron?
3. Which are outside or close to a limit, and what are common harmless explanations, such as a recent infection?
End with 3 questions for my doctor. ${ND.en}`,
      it: `Ecco la sezione emocromo e ferro del mio referto: [screenshot, senza il tuo nome]. In parole semplici:
1. Cosa controlla ogni gruppo?
2. Quali valori vanno letti insieme, per esempio dimensione dei globuli rossi e ferro?
3. Quali sono fuori range o vicini a un limite, e quali sono le spiegazioni innocue più comuni, come un'infezione recente?
Chiudi con 3 domande per il mio medico. ${ND.it}`,
      de: `Hier ist der Abschnitt Blutbild und Eisen aus meinem Befund: [Screenshot, ohne deinen Namen]. In einfachen Worten:
1. Was prüft jede Gruppe?
2. Welche Werte sollte man zusammen lesen, zum Beispiel Größe der roten Blutkörperchen und Eisen?
3. Welche liegen außerhalb oder nahe an einer Grenze, und was sind häufige harmlose Erklärungen, etwa ein kürzlicher Infekt?
Schließe mit 3 Fragen für meinen Arzt. ${ND.de}`,
    },
    questions: [
      { id: "repeat", label: "Repeat", q: { en: "Is anything in my blood count worth repeating?", it: "C'è qualcosa nel mio emocromo da ripetere?", de: "Sollte etwas in meinem Blutbild wiederholt werden?" } },
      { id: "iron", label: "Iron, B12, folate", q: { en: "Should my iron, B12 or folate be checked together with my blood count?", it: "Andrebbero controllati ferro, B12 o folati insieme all'emocromo?", de: "Sollten Eisen, B12 oder Folsäure zusammen mit dem Blutbild bestimmt werden?" } },
      { id: "cause", label: "Recent illness or medication", q: { en: "Could a recent illness or a medication explain any of these values?", it: "Una malattia recente o un farmaco potrebbero spiegare qualcuno di questi valori?", de: "Könnte eine kürzliche Erkrankung oder ein Medikament einen dieser Werte erklären?" } },
    ],
    followUp: followUp({ en: "regular meals with vegetables and pulses", it: "pasti regolari con verdure e legumi", de: "regelmäßige Mahlzeiten mit Gemüse und Hülsenfrüchten" }),
    topics: [],
  },
  brain: {
    id: "brain",
    h1: "What protects your heart protects your brain",
    sub: "There's no routine blood test for brain health, but your reports already say something.",
    miss: [
      ["The heart numbers count here too.", "Blood pressure, cholesterol and blood sugar are among the risk factors research links to dementia."],
      ["New brain blood tests aren't for screening.", "Blood tests for Alzheimer's are designed for people with symptoms, with a specialist, not for healthy people."],
      ["Be careful with tests sold as predictions.", "A result without symptoms and without a specialist can worry more than it helps."],
    ],
    markers: ["bp", "ldl", "glucose"],
    connects: [
      { to: "heart", t: "Blood pressure and cholesterol matter for the brain's blood vessels too." },
      { to: "metabolism", t: "Diabetes is among the risk factors research links to dementia." },
    ],
    promptShort: {
      en: "Which of my heart and metabolic values matter for my brain, and what are Alzheimer's blood tests really for?",
      it: "Quali dei miei valori di cuore e metabolismo contano per il cervello, e a cosa servono davvero gli esami del sangue per l'Alzheimer?",
      de: "Welche meiner Herz- und Stoffwechselwerte zählen für mein Gehirn, und wofür sind Alzheimer-Bluttests wirklich gedacht?",
    },
    prompt: {
      en: `Which cardiovascular and metabolic risk factors are linked to dementia? Look at my reports [screenshots, without your name] and tell me which of them I can already see, in plain words. Separately: what are blood tests for Alzheimer's designed for, and why aren't they recommended for people without symptoms?
End with 3 questions for my doctor. ${ND.en}`,
      it: `Quali fattori di rischio cardiovascolari e metabolici sono collegati alla demenza? Guarda i miei referti [screenshot, senza il tuo nome] e dimmi quali posso già vedere, in parole semplici. A parte: a cosa servono gli esami del sangue per l'Alzheimer, e perché non sono consigliati a chi non ha sintomi?
Chiudi con 3 domande per il mio medico. ${ND.it}`,
      de: `Welche Herz-Kreislauf- und Stoffwechsel-Risikofaktoren hängen mit Demenz zusammen? Sieh dir meine Befunde an [Screenshots, ohne deinen Namen] und sag mir in einfachen Worten, welche ich schon sehen kann. Separat: Wofür sind Bluttests auf Alzheimer gedacht, und warum werden sie Menschen ohne Symptome nicht empfohlen?
Schließe mit 3 Fragen für meinen Arzt. ${ND.de}`,
    },
    questions: [
      { id: "matter", label: "What matters most", q: { en: "Which of my heart or metabolic values matter most for my brain health?", it: "Quali dei miei valori di cuore o metabolismo contano di più per la salute del cervello?", de: "Welche meiner Herz- oder Stoffwechselwerte sind für meine Gehirngesundheit am wichtigsten?" } },
      { id: "family", label: "Family history", q: { en: "Is there anything in my family history we should keep an eye on?", it: "C'è qualcosa nella mia storia familiare da tenere d'occhio?", de: "Gibt es etwas in meiner Familiengeschichte, das wir im Blick behalten sollten?" } },
      { id: "test", label: "Testing or not", q: { en: "Would any test make sense for me, or is it better not to?", it: "Avrebbe senso per me qualche esame, o è meglio di no?", de: "Wäre ein Test für mich sinnvoll, oder besser nicht?" } },
    ],
    followUp: followUp({ en: "regular movement and enough sleep", it: "movimento regolare e sonno sufficiente", de: "regelmäßige Bewegung und genug Schlaf" }),
    topics: [7],
  },
};

export const AREA_UI: Record<Lang, {
  read: string; promptIn: string; tag: string; back: string;
  missH: string; markersH: string; markersAsk: string; mapLink: string; connectsH: string;
  promptH: string; promptIntro: string; followH: string; followIntro: string; copyFollow: string; showFull: string; copyPrompt: string; copy: string; copied: string; shareLine: string; shareLink: string;
  checkH: string; checkIntro: string; progress: string; saved: string;
  deeperH: string; topicsH: string; deeperP: string; deeperCta: string;
  print: string; footer: string; emergency: string; enOnly: string;
}> = {
  en: {
    read: "Read in", promptIn: "Prompt in", tag: "Guide", back: "All guides",
    missH: "1. What most people miss", markersH: "2. Your markers in plain words", markersAsk: "Ask", mapLink: "See how all markers connect →", connectsH: "3. How it connects",
    promptH: "4. One prompt for your AI", promptIntro: "Tap your AI below: the prompt opens there, or is copied for you to paste. Then add a screenshot of your report.", followH: "Then: what you can do yourself", followIntro: "Optional, in the same chat: low-risk everyday habits, with the guideline behind each one. No medication or supplements.", copyFollow: "Copy the follow-up prompt", showFull: "Show the full prompt", copyPrompt: "Copy the full prompt", copy: "Copy", copied: "Copied",
    shareLine: "Only share what you're comfortable sharing with your AI.", shareLink: "How to share safely",
    checkH: "5. Questions for your doctor", checkIntro: "Tick the ones you want to ask. Print this page or copy a question.", progress: "{n} of {t} ticked", saved: "Your ticks stay in this browser only.",
    deeperH: "6. Go deeper", topicsH: "Weekly topics from this area", deeperP: "One small topic every Wednesday, with a prompt to try. Free, unsubscribe anytime.", deeperCta: "Get it weekly",
    print: "Print or save as PDF", footer: "Educational content, not medical advice, and an AI can be wrong. Decide with your doctor.", emergency: "If you have chest pain or sudden symptoms, call 112.",
    enOnly: "",
  },
  it: {
    read: "Leggi in", promptIn: "Prompt in", tag: "Guida", back: "Tutte le guide",
    missH: "1. Cosa sfugge ai più", markersH: "2. I tuoi valori in parole semplici", markersAsk: "Chiedi", mapLink: "Guarda come si collegano tutti i valori →", connectsH: "3. Come si collega",
    promptH: "4. Un prompt per la tua AI", promptIntro: "Tocca la tua AI qui sotto: il prompt si apre lì, oppure viene copiato da incollare. Poi aggiungi uno screenshot del referto.", followH: "Poi: cosa puoi fare tu", followIntro: "Facoltativo, nella stessa chat: abitudini quotidiane a basso rischio, con la linea guida dietro ciascuna. Niente farmaci né integratori.", copyFollow: "Copia il prompt successivo", showFull: "Mostra il prompt completo", copyPrompt: "Copia il prompt completo", copy: "Copia", copied: "Copiato",
    shareLine: "Condividi solo ciò che ti senti a tuo agio a condividere con la tua AI.", shareLink: "Come condividere in sicurezza",
    checkH: "5. Domande per il tuo medico", checkIntro: "Spunta quelle che vuoi fare. Stampa la pagina o copia una domanda.", progress: "{n} di {t} spuntate", saved: "Le spunte restano solo in questo browser.",
    deeperH: "6. Approfondisci", topicsH: "Temi settimanali di quest'area", deeperP: "Un piccolo tema ogni mercoledì, con un prompt da provare. Gratis, disiscrizione quando vuoi.", deeperCta: "Ricevilo ogni settimana",
    print: "Stampa o salva come PDF", footer: "Contenuto educativo, non un consiglio medico, e un'AI può sbagliare. Decidi con il tuo medico.", emergency: "Se hai dolore al petto o sintomi improvvisi, chiama il 112.",
    enOnly: "Il testo di questa guida è ancora in inglese; prompt e domande sono già in italiano.",
  },
  de: {
    read: "Lesen auf", promptIn: "Prompt auf", tag: "Leitfaden", back: "Alle Leitfäden",
    missH: "1. Was die meisten übersehen", markersH: "2. Deine Werte, verständlich erklärt", markersAsk: "Frag", mapLink: "Sieh, wie alle Werte zusammenhängen →", connectsH: "3. Wie es zusammenhängt",
    promptH: "4. Ein Prompt für deine KI", promptIntro: "Tippe unten auf deine KI: Der Prompt öffnet sich dort oder wird zum Einfügen kopiert. Dann einen Screenshot deines Befunds anhängen.", followH: "Dann: was du selbst tun kannst", followIntro: "Optional, im selben Chat: risikoarme Alltagsgewohnheiten, mit der Leitlinie hinter jeder. Keine Medikamente oder Nahrungsergänzungsmittel.", copyFollow: "Folge-Prompt kopieren", showFull: "Ganzen Prompt zeigen", copyPrompt: "Ganzen Prompt kopieren", copy: "Kopieren", copied: "Kopiert",
    shareLine: "Teile nur, was du mit deiner KI teilen möchtest.", shareLink: "Wie du sicherer teilst",
    checkH: "5. Fragen für deinen Arzt", checkIntro: "Hake an, was du fragen willst. Druck die Seite oder kopiere eine Frage.", progress: "{n} von {t} abgehakt", saved: "Deine Haken bleiben nur in diesem Browser.",
    deeperH: "6. Tiefer gehen", topicsH: "Wöchentliche Themen aus diesem Bereich", deeperP: "Jeden Mittwoch ein kleines Thema, mit einem Prompt zum Ausprobieren. Kostenlos, jederzeit abbestellbar.", deeperCta: "Wöchentlich erhalten",
    print: "Drucken oder als PDF speichern", footer: "Bildungsinhalt, keine medizinische Beratung, und eine KI kann sich irren. Entscheide mit deinem Arzt.", emergency: "Bei Brustschmerzen oder plötzlichen Beschwerden ruf die 112 an.",
    enOnly: "Der Text dieses Leitfadens ist noch auf Englisch; Prompt und Fragen gibt es schon auf Deutsch.",
  },
};
