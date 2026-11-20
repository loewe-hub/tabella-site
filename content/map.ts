// The hub: "Your blood test map". EN only for now; IT/DE once the content is fact-checked.
// Keep it simple: plain names first, one sentence each, what it connects to, one short question.
// The full prompt (copied) carries the guardrails: signal not verdict, guidelines named, no diagnosis.

export type Zone = "heart" | "both" | "meta" | "report";

export type MapNode = {
  id: string;
  zone: Zone;
  name: string; // plain words
  term: string; // what the lab report calls it
  what: string; // one sentence
  connects: string[];
  ask: string; // short question shown on the page
  x?: number; // desktop diagram position (core only)
  y?: number;
};

export const ZONES: Record<Zone, { label: string; on: string; text: string; border: string }> = {
  heart: { label: "Heart & vessels", on: "#0E5E60", text: "#0A4547", border: "rgba(14,94,96,0.45)" },
  both: { label: "Both", on: "#17302F", text: "#17302F", border: "#17302F" },
  meta: { label: "Metabolism", on: "#A84F2C", text: "#7A3A1F", border: "rgba(168,79,44,0.5)" },
  report: { label: "Rest of your report", on: "#4A6563", text: "#17302F", border: "#9DB3B0" },
};

export const NODES: MapNode[] = [
  { id: "ldl", zone: "heart", x: 110, y: 220, name: "Plaque-building particles", term: "LDL, ApoB, non-HDL", what: "The particles that slowly build plaque in your arteries.", connects: ["Heart attack", "Stroke"], ask: "What do my LDL and non-HDL say about someone like me?" },
  { id: "lpa", zone: "heart", x: 140, y: 360, name: "Inherited particle", term: "Lp(a)", what: "Mostly set by your genes, and rarely tested.", connects: ["Heart attack", "Heart valves"], ask: "Has my Lp(a) ever been measured, and would it matter?" },
  { id: "bp", zone: "both", x: 455, y: 150, name: "Blood pressure", term: "systolic / diastolic", what: "Puts strain on your vessels, and often rises with blood sugar problems.", connects: ["Heart", "Kidneys", "Blood sugar"], ask: "How does my blood pressure fit together with my blood test?" },
  { id: "tg", zone: "both", x: 440, y: 260, name: "Blood fats", term: "Triglycerides, HDL", what: "Often the first sign that your body handles sugar less well.", connects: ["Blood sugar", "Liver"], ask: "Do my blood fats hint at how my body handles sugar?" },
  { id: "waist", zone: "both", x: 480, y: 370, name: "Belly fat", term: "Waist", what: "Fat around the belly links your heart and your metabolism.", connects: ["Blood sugar", "Liver", "Heart"], ask: "What does my waist add to my blood results?" },
  { id: "crp", zone: "both", x: 455, y: 480, name: "Inflammation", term: "hs-CRP", what: "A low, background inflammation; a recent cold can raise it too.", connects: ["Heart", "Iron stores"], ask: "Could anything recent explain my inflammation value?" },
  { id: "glucose", zone: "meta", x: 740, y: 220, name: "Blood sugar", term: "Glucose, HbA1c", what: "Your blood sugar today, and its average over recent months.", connects: ["Diabetes", "Blood fats"], ask: "What do my glucose and HbA1c say, and what can't they show yet?" },
  { id: "liver", zone: "meta", x: 780, y: 360, name: "Liver", term: "ALT, AST, GGT", what: "A fatty liver often goes together with blood sugar problems.", connects: ["Blood sugar", "Blood fats", "Heart"], ask: "Do my liver values connect to my cholesterol or blood sugar?" },
  { id: "cbc", zone: "report", name: "Blood cells", term: "Blood count", what: "Red and white cells and platelets: your general baseline.", connects: ["Iron stores", "Infections"], ask: "Is anything in my blood count worth a question?" },
  { id: "iron", zone: "report", name: "Iron stores", term: "Ferritin", what: "Shows your iron, but also rises with inflammation or a busy liver.", connects: ["Inflammation", "Liver", "Blood cells"], ask: "Should my ferritin be read together with my other values?" },
  { id: "kidney", zone: "report", name: "Kidneys", term: "Creatinine, eGFR, uric acid", what: "How well your kidneys filter your blood.", connects: ["Blood pressure", "Blood sugar", "Heart"], ask: "Do my kidney values connect to my blood pressure or blood sugar?" },
  { id: "thyroid", zone: "report", name: "Thyroid", term: "TSH", what: "A slow thyroid can push cholesterol up.", connects: ["Cholesterol", "Energy", "Weight"], ask: "Could my thyroid explain anything in my cholesterol?" },
  { id: "vit", zone: "report", name: "Vitamins", term: "D, B12, folate", what: "Shaped by food, sun and some medications.", connects: ["Blood cells", "Medication"], ask: "Do my vitamin values connect to my diet or my medication?" },
  { id: "min", zone: "report", name: "Salts & minerals", term: "Sodium, potassium", what: "Often changed by blood pressure medication.", connects: ["Blood pressure", "Kidneys"], ask: "Could my medication explain my mineral values?" },
];

export const WHOLE_REPORT_SHORT = "Go through my blood test section by section. Don't just tell me it's all good.";

export const WHOLE_REPORT_PROMPT =
  "Here is my full blood test report. Don't just tell me whether it's \"all good\". First ask me for the context you need, one question at a time: my age and sex, medications and supplements, whether I fasted, and how I felt around the test. Then go through the report section by section. For each section, tell me in plain language what it measures, which values are outside the lab's range, and which values are inside the range but still worth a question in my situation. Treat every value as a signal, not a verdict. Where it matters, tell me what current guidelines say and name the guideline and year. Tell me how the sections connect to each other and to my heart and metabolism. Say what you can't tell from this report. Do not diagnose me or recommend a treatment. End with my top 3 questions for my doctor and a one-page summary I can bring.";

// The full prompt that gets copied for one marker.
export function promptFor(n: MapNode): string {
  return `${n.ask} (On my report: ${n.term}.) Explain it in plain language, treat it as a signal, not a verdict, and tell me how it connects to the rest of my results. If guidelines matter here, tell me what they say and name the guideline and year. Do not diagnose me. End with one question I could ask my doctor.`;
}

export const SOURCES: { label: string; href: string }[] = [
  { label: "ESC/EAS dyslipidaemia guideline 2019", href: "https://doi.org/10.1093/eurheartj/ehz455" },
  { label: "EAS consensus on LDL 2017", href: "https://doi.org/10.1093/eurheartj/ehx144" },
  { label: "EAS consensus on Lp(a) 2022", href: "https://doi.org/10.1093/eurheartj/ehac361" },
  { label: "AHA statement on fatty liver 2022", href: "https://pubmed.ncbi.nlm.nih.gov/35418240/" },
];
