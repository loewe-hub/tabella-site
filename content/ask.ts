// Guide: "Ask your AI about any health question" (26 Nov 2026). Best practice independent of blood tests.
// EN draft for review; IT/DE show EN with a notice (shareUi.enOnly).
import type { Item } from "@/content/share";

export const ask = {
  lastChecked: "November 2026",
  eyebrow: "Free guide · Ask better",
  h1: "Ask your AI about any health question",
  forWho: "For anyone who asks ChatGPT, Claude, Gemini or another AI about a symptom, a diagnosis, a medication or a test, and wants an answer that helps them decide with their doctor.",
  point:
    "Your AI answers the question you ask. A short question gets a generic answer, sometimes a scary one. A few habits get you an answer that fits your situation, shows where it comes from, and ends with what to ask your doctor.",

  missH: "What most people miss",
  miss: [
    { b: "The question shapes the answer.", t: "Ask \"Is it cancer?\" and the AI talks about cancer. Describe what's happening and it looks at all the likely explanations." },
    { b: "Context changes everything.", t: "The same symptom can mean different things at 25 and at 65, with or without medication, after a week or after a year." },
    { b: "An AI can sound sure and still be wrong.", t: "It rarely says \"I don't know\" unless you ask it to." },
    { b: "Most AIs answer before they ask.", t: "They fill the gaps with guesses. Asking them to ask you first gives a better answer." },
  ] as Item[],

  habitsH: "Seven habits for better answers",
  habits: [
    { b: "Describe, don't conclude.", t: "Start with what's happening, since when and what changed, not with the diagnosis you fear." },
    { b: "Give context, not identity.", t: "Age range, sex, medications, relevant conditions and family history help. Your name and address don't." },
    { b: "Let it ask first.", t: "Ask it to ask you up to 5 questions, one at a time, before it answers. Our prompt does this for you." },
    { b: "Ask for possibilities, not a verdict.", t: "The common explanations, including harmless ones, and what would make it more urgent." },
    { b: "Ask where it comes from.", t: "Which guideline or health organisation the answer is based on, and where experts disagree." },
    { b: "Ask what it can't tell.", t: "What it would need to know, and what only an examination or a test can show." },
    { b: "End with your doctor.", t: "The 3 questions most worth asking, and a short summary you can bring." },
  ] as Item[],
  shareNote: "Before you share anything personal:",
  shareLink: "Share safely, the 2-minute checklist",

  urgentH: "When not to ask your AI",
  urgentP: "If something is sudden or severe, such as chest pain, difficulty breathing, sudden weakness or confusion, call 112 (in Europe) or your local emergency number. Don't wait for an answer.",

  promptH: "The prompt",
  promptLead: "Tap your AI: it will ask you what's going on, one question at a time. Only share what you're comfortable sharing.",
  prompt:
    "I have a health question. Before you answer anything, ask me what's happening, since when and what has changed, then what you need to know about me, such as my age range, sex, relevant conditions and medications. Ask one question at a time, at most 5; I'll only share what I'm comfortable sharing.\n\nThen explain in plain words the most common explanations, including harmless ones, and what would make this more urgent. Name the guideline or health organisation your answer is based on, and say where experts disagree or where you're not sure.\n\nFocus on what could explain what's happening, not on how to treat it: treatment is something I'll discuss with my doctor. Don't diagnose me, don't assume anything I haven't told you, and tell me what you can't judge without an examination or tests. End with the 3 questions most worth asking my doctor and a short summary I can bring.",

  checkH: "Did your AI…",
  check: [
    "ask you questions before answering?",
    "mention common and harmless explanations, not only the worst case?",
    "say what would make it urgent?",
    "name where its answer comes from?",
    "say what it can't tell?",
    "give you questions for your doctor?",
  ],
  checkNote: "If not, ask it to.",

  nextH: "One topic a week",
  nextP: "Every Wednesday: 1 health topic, explained and connected, and 1 prompt to apply it to yourself.",
  nextCta: "Get it weekly",
};
