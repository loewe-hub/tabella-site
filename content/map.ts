// The hub: "Your blood test map". EN only for now; IT/DE once the content is fact-checked.
// Every marker is a SIGNAL. Targets only come from guidelines, via the prompt. All "why" lines are pending fact-check.

export type Zone = "heart" | "both" | "meta" | "report";
export type Evidence = "strong" | "growing" | "debated";

export type MapNode = {
  id: string;
  zone: Zone;
  ev: Evidence;
  name: string;
  what: string;
  why: string;
  links: string[];
  q: string;
  x?: number; // position in the desktop diagram (core nodes only)
  y?: number;
};

export const ZONES: Record<Zone, { label: string; on: string; text: string; border: string }> = {
  heart: { label: "Heart & vessels", on: "#0E5E60", text: "#0A4547", border: "rgba(14,94,96,0.45)" },
  both: { label: "Both systems", on: "#17302F", text: "#17302F", border: "#17302F" },
  meta: { label: "Metabolism", on: "#A84F2C", text: "#7A3A1F", border: "rgba(168,79,44,0.5)" },
  report: { label: "Rest of your report", on: "#4A6563", text: "#17302F", border: "#9DB3B0" },
};

export const EVIDENCE: Record<Evidence, { label: string; legend: string }> = {
  strong: { label: "strong", legend: "Strong: consistent across study types" },
  growing: { label: "growing", legend: "Growing: good evidence, still being worked out" },
  debated: { label: "debated", legend: "Debated: experts disagree on how to use it" },
};

export const NODES: MapNode[] = [
  { id: "ldl", zone: "heart", ev: "strong", x: 120, y: 190, name: "LDL & ApoB", links: ["Atherosclerosis", "Heart attack", "Stroke"], what: "The particles that build plaque in artery walls. ApoB counts them directly.", why: "Genetic studies, cohorts and drug trials all point the same way: these particles cause plaque.", q: "What would ApoB or non-HDL cholesterol add for someone like me?" },
  { id: "lpa", zone: "heart", ev: "strong", x: 150, y: 290, name: "Lp(a)", links: ["Atherosclerosis", "Aortic valve stenosis", "Heart attack"], what: "A particle mostly set by your genes. It raises risk independently of LDL and is rarely tested.", why: "Large genetic studies support a causal, continuous link. Specific treatments are still being studied.", q: "Has my Lp(a) ever been measured? What would a high value change?" },
  { id: "nonhdl", zone: "heart", ev: "strong", x: 120, y: 390, name: "Non-HDL cholesterol", links: ["Atherosclerosis", "Heart attack"], what: "Total minus HDL: all the particles that can cause plaque, worked out from any standard panel.", why: "It counts the same plaque-forming particles as LDL and ApoB, from a standard panel.", q: "Can you work out my non-HDL cholesterol from my report and explain what it shows?" },
  { id: "bp", zone: "both", ev: "strong", x: 465, y: 120, name: "Blood pressure", links: ["Heart disease", "Stroke", "Kidney disease", "Insulin resistance"], what: "Strains the vessels, and often rises together with insulin resistance.", why: "A long-established risk factor; its link with insulin resistance is well documented.", q: "How does my blood pressure combine with my cholesterol in my overall risk, and what else in my results might be connected?" },
  { id: "tg", zone: "both", ev: "growing", x: 440, y: 215, name: "Triglycerides & HDL", links: ["Insulin resistance", "Metabolic syndrome", "Fatty liver (MASLD)"], what: "Usually read as heart markers, but often the first lipid signs of insulin resistance.", why: "Triglyceride-rich particles are increasingly seen as harmful. Low HDL is a signal, but raising HDL with drugs has not lowered heart risk.", q: "Do my triglycerides, HDL, glucose, HbA1c and waist suggest insulin resistance? Which tests would tell us more?" },
  { id: "waist", zone: "both", ev: "strong", x: 500, y: 310, name: "Waist", links: ["Insulin resistance", "Type 2 diabetes", "Fatty liver (MASLD)"], what: "Fat around the belly is metabolically active and links both systems.", why: "Consistently linked to both heart and metabolic risk; a link, not a single cause.", q: "What does my waist measurement add to my blood results?" },
  { id: "crp", zone: "both", ev: "debated", x: 450, y: 405, name: "Inflammation (hs-CRP)", links: ["Atherosclerosis", "Heart attack"], what: "Low-grade inflammation, sometimes read alongside both systems.", why: "US cardiologists now call it clinically actionable; how and when to use it is still debated.", q: "Are there other values in my report, or measurements I should take, that change the picture?" },
  { id: "family", zone: "both", ev: "strong", x: 470, y: 500, name: "Family history", links: ["Inherited high cholesterol", "Early heart disease", "Type 2 diabetes"], what: "Shapes risk in both systems, and relatives may need testing too.", why: "Part of standard risk assessment in both systems.", q: "Could my values point to an inherited condition, and should my parents, siblings or children be tested?" },
  { id: "glucose", zone: "meta", ev: "strong", x: 760, y: 190, name: "Glucose & HbA1c", links: ["Prediabetes", "Type 2 diabetes"], what: "Your blood sugar now, and its average over the past 2–3 months.", why: "Standard, well-validated measures of blood sugar.", q: "What do my fasting glucose and HbA1c say, and what can they not show yet?" },
  { id: "insulin", zone: "meta", ev: "debated", x: 780, y: 290, name: "Fasting insulin", links: ["Insulin resistance", "Prediabetes"], what: "Can show insulin resistance before glucose rises. Rarely on a standard panel.", why: "A useful rough signal, but results vary by lab and there is no agreed cut-off.", q: "Would fasting insulin or HOMA-IR add anything for me, and how do I ask for it?" },
  { id: "liver", zone: "meta", ev: "growing", x: 790, y: 390, name: "Liver values", links: ["Fatty liver (MASLD)", "Insulin resistance", "Cardiovascular disease"], what: "Fatty liver often comes with insulin resistance and affects blood fats.", why: "Fatty liver is consistently linked to heart risk; the mechanisms are still being clarified.", q: "Do my liver values connect to my cholesterol or blood sugar, and what should I ask about them?" },
  { id: "cbc", zone: "report", ev: "strong", name: "Blood count", links: ["Anaemia", "Infection or inflammation"], what: "Haemoglobin, red and white cells, platelets: your general baseline.", why: "Standard, well-validated tests. The common mistake is reading one value out of context.", q: "Is anything in my blood count worth following up, and what could explain it?" },
  { id: "iron", zone: "report", ev: "growing", name: "Iron & ferritin", links: ["Iron deficiency", "Inflammation", "Fatty liver (MASLD)"], what: "Iron stores. Ferritin also rises with inflammation and liver issues, not only with iron.", why: "Ferritin is an established iron-store marker; its links with insulin resistance and fatty liver are consistent but still being worked out.", q: "Should my ferritin be read together with my inflammation or liver values?" },
  { id: "kidney", zone: "report", ev: "strong", name: "Kidneys & uric acid", links: ["Blood pressure", "Type 2 diabetes", "Heart disease"], what: "Creatinine, eGFR, urea, uric acid: how well your kidneys filter.", why: "Reduced kidney function is an established heart risk factor; the role of uric acid is still debated.", q: "What do my kidney values say, and do they connect to my blood pressure or blood sugar?" },
  { id: "thyroid", zone: "report", ev: "strong", name: "Thyroid (TSH)", links: ["Higher LDL cholesterol", "Tiredness", "Weight change"], what: "An underactive thyroid can raise LDL cholesterol.", why: "The thyroid–LDL link is well established; checking thyroid function is a standard step when LDL is high.", q: "Could my thyroid values explain anything in my cholesterol?" },
  { id: "vit", zone: "report", ev: "debated", name: "Vitamins (D, B12, folate)", links: ["Anaemia", "Metformin use", "Heart disease"], what: "Shaped by diet, sun and medication, for example metformin and B12.", why: "B12 deficiency and its link with metformin are established; whether vitamin D affects heart risk is debated, and supplement trials were mostly negative.", q: "Do my vitamin values connect to my diet or any medication I take?" },
  { id: "min", zone: "report", ev: "strong", name: "Minerals", links: ["Blood pressure medication", "Kidney function", "Heart rhythm"], what: "Sodium, potassium, sometimes calcium and magnesium. Often affected by blood pressure medication.", why: "Standard measures; changes often reflect medication or kidney function.", q: "Could any medication I take explain my mineral values?" },
];

export const WHOLE_REPORT_PROMPT =
  "Here is my full blood test report. Don't just tell me whether it's \"all good\". First ask me for the context you need, one question at a time: my age and sex, medications and supplements, whether I fasted, and how I felt around the test. Then go through the report section by section. For each section, tell me in plain language what it measures, which values are outside the lab's range, and which values are inside the range but still worth a question in my situation. Treat every value as a signal, not a verdict. Where it matters, tell me what current guidelines say and name the guideline and year. Tell me how the sections connect to each other and to my heart and metabolism. Say what you can't tell from this report. Do not diagnose me or recommend a treatment. End with my top 3 questions for my doctor and a one-page summary I can bring.";

export function promptFor(n: MapNode): string {
  if (n.zone === "report") {
    return `Treat my ${n.name} values as a signal, not a verdict. ${n.q} Tell me which values are outside the lab range and which are inside it but still worth a question for me, whether the range depends on age or sex, and how this section connects to my heart and metabolism. Where guidelines matter, name the guideline and year. Do not diagnose me.`;
  }
  return `Treat my ${n.name} as a signal, not a verdict. ${n.q} Then tell me what current guidelines say about it (for Europe: ESC/EAS): is it a treatment target, a risk-enhancing factor, or not routinely used? Name the guideline and year, and say where experts disagree. Do not diagnose me.`;
}

export function linkPrompt(n: MapNode, connection: string): string {
  return `Research connects ${n.name} with ${connection}. How is it connected, how strong is the evidence, and what does that mean, and not mean, for someone with my values? Treat it as a signal, not a verdict, and do not diagnose me.`;
}

export const SOURCES: { label: string; href: string }[] = [
  { label: "LDL causality: EAS consensus 2017", href: "https://doi.org/10.1093/eurheartj/ehx144" },
  { label: "Lp(a): EAS consensus 2022", href: "https://doi.org/10.1093/eurheartj/ehac361" },
  { label: "Triglyceride-rich lipoproteins: EAS consensus 2021", href: "https://doi.org/10.1093/eurheartj/ehab551" },
  { label: "Inflammation and hs-CRP: ACC scientific statement 2025", href: "https://www.acc.org/latest-in-cardiology/journal-scans/2025/09/29/20/38/new-acc-scientific-statement-details-role-of-inflammation-in-cvd" },
  { label: "Fatty liver and heart: AHA scientific statement 2022", href: "https://pubmed.ncbi.nlm.nih.gov/35418240/" },
  { label: "HOMA limits: Wallace et al., Diabetes Care 2004", href: "https://pubmed.ncbi.nlm.nih.gov/15161807/" },
  { label: "Dyslipidaemia guideline: ESC/EAS 2019", href: "https://doi.org/10.1093/eurheartj/ehz455" },
];
