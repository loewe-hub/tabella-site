// Guide A: "Your health data and your AI". Approved EN copy (22 Nov 2026).
// IT/DE: translation pending; the page shows EN with a notice.
import type { Lang } from "@/lib/i18n";

export type Item = { b: string; t: string };

export const share = {
  lastChecked: "November 2026",
  eyebrow: "Free guide · Share safely",
  h1: "Your health data and your AI",
  forWho: "For anyone who asks ChatGPT, Claude, Gemini or another AI about their health, and wants to share less than they do today.",
  point:
    "Your AI needs your values and your situation, not your identity. A few settings and habits make sharing health information safer. Not safe: no setting gives you full control over what a company does with data on its servers. This guide shows what you can do, and where the limits are.",
  versions: [
    { b: "2 minutes:", t: "do the checklist at the end of this guide." },
    { b: "10 minutes, once:", t: "go through steps 1 to 4 for the assistant you use most." },
  ] as Item[],

  missH: "What most people miss",
  miss: [
    { b: "Training is often on by default.", t: "Unless you switch it off, your chats can be used to improve the company's models." },
    { b: "Your AI may remember.", t: "Memory features can keep health details from one chat and bring them up in another, weeks later." },
    { b: "Photos carry more than you see.", t: "A photo of your lab report can contain the exact location where it was taken, often your home." },
    { b: "\"Off\" does not mean \"gone\".", t: "Even with training and history off, companies keep chats for a period for safety reasons. Deleting a chat is not instant everywhere." },
    { b: "A thumbs up or down can keep a chat longer.", t: "Feedback you send on an answer may be stored for years, even if you delete the chat." },
  ] as Item[],

  step1H: "Step 1: Before you share",
  step1Lead: "Remove who you are, keep what matters.",
  step1: [
    { b: "Black out:", t: "your name, date of birth, tax code (Italy: codice fiscale; Germany: Steuer-ID), patient or sample ID, health insurance number, address, phone number, and any barcode or QR code on the report." },
    { b: "Keep:", t: "the values, the units, the lab's reference ranges, the test date (month and year is enough) and the lab's notes." },
    { b: "Easiest way:", t: "take a screenshot of the report, crop out the header, and use your phone's markup tool to cover the rest. A screenshot also drops most of the hidden photo data." },
    { b: "Photos of paper reports:", t: "switch off location for the camera, or remove the location before sharing (iPhone: open the photo, tap the info button, Adjust, No Location; Android: in the gallery's photo details, remove location if your phone offers it)." },
    { b: "Typing instead of uploading:", t: "often the cleanest option. \"LDL 170 mg/dL, HDL 50, triglycerides 130, fasting\" tells the AI everything it needs." },
    { b: "Describe yourself in ranges:", t: "\"man, late 30s\" or \"woman, 50s\" works as well as an exact date of birth." },
  ] as Item[],

  step2H: "Step 2: Set up your assistant (once)",
  step2Lead: "Four settings matter. Menu names change now and then; if you can't find one, ask your AI:",
  step2Ask: "\"Where do I turn off training on my chats, and where are my memory settings?\"",
  settingsHead: ["", "ChatGPT", "Claude", "Gemini"],
  settings: [
    ["Training on your chats", "Settings → Data controls → turn off \"Improve the model for everyone\"", "Settings → Privacy → turn off \"Help improve Claude\"", "Turn off \"Keep Activity\" (formerly Gemini Apps Activity)"],
    ["One-off private chat", "Temporary Chat", "Incognito chat", "Temporary chat"],
    ["Memory", "Settings → Personalization: review or turn off Memory and \"Reference chat history\"", "Settings: check memory and past-chat search", "Settings → Personal context: review \"Your past chats with Gemini\""],
    ["Connected apps", "Disconnect apps (e.g. email, drive) you don't need in health chats", "Same", "Same"],
  ],
  whatH: "What each one does",
  what: [
    { b: "Training off:", t: "new chats are no longer used to improve the company's models. Chats already used for training stay in models already trained." },
    { b: "Temporary or incognito chat:", t: "best for a one-off health question. It isn't saved in your history and doesn't feed memory. It is still kept for a short time for safety reasons." },
    { b: "Memory:", t: "if it's on, your AI can recall health details in later, unrelated chats. Turning memory off does not delete past chats; delete those separately if needed." },
    { b: "Connected apps:", t: "an AI with access to your email or files may pull in more than you meant to share." },
  ] as Item[],

  step3H: "Step 3: During the chat",
  step3: [
    { b: "Give context, not identity.", t: "Age range, sex, medications, family history (\"father had a heart attack at 52\") and lifestyle help the AI. Names, places of work and exact dates don't." },
    { b: "Leave out other people's details.", t: "Talk about \"my father\", not his name or his records, unless he agreed." },
    { b: "Don't upload whole folders or full medical histories", t: "\"just in case\". Share the report that matters for today's question." },
    { b: "Skip the thumbs up and down", t: "in health chats. Feedback can be stored much longer than the chat itself." },
    { b: "Watch what you connect mid-chat.", t: "If the AI offers to search your email or drive for more information, say no unless you really want that." },
  ] as Item[],

  step4H: "Step 4: After the chat",
  step4: [
    { b: "Copy out what you need:", t: "the summary for your doctor and your questions, into your own notes or a printout." },
    { b: "Delete the chat", t: "if you don't need it in your history. In a temporary or incognito chat, this happens on its own." },
    { b: "Check what your AI remembered.", t: "Ask it: \"What do you remember about my health?\" Delete anything you don't want kept. Deleting a chat does not always delete a memory created from it." },
    { b: "Don't share health chats with a link.", t: "Anyone with the link can read them. If you shared one, delete the link in your settings." },
    { b: "Know your rights.", t: "In the EU you can ask a provider to export or delete your data (GDPR). Most assistants have an export and a delete option in their settings." },
  ] as Item[],

  limitsH: "Honest limits",
  limitsLead:
    "These steps reduce what you share and how long it's used. They don't give you full control. What the providers say (consumer plans, as of November 2026; check their pages, as this changes):",
  limitsHead: ["", "With training on", "With training off", "One-off private chat", "Exceptions"],
  limits: [
    ["ChatGPT", "Chats can be used for training", "Not used for training; kept in your history until you delete them", "Temporary Chat: no memory, deleted after up to 30 days", "Logs of deleted memories may be kept up to 30 days"],
    ["Claude", "Kept up to 5 years, de-identified", "Deleted chats removed from back-end storage within 30 days", "Incognito: never used for training", "Feedback kept 5 years; flagged chats longer"],
    ["Gemini", "Used to improve Google AI, with human review", "Still kept for a period (reported as up to about two months since 2026)", "Temporary chat: not used for training, kept briefly", "Chats seen by human reviewers kept up to 3 years, even after deletion"],
  ],
  alsoH: "Also good to know",
  also: [
    { b: "Health data is special.", t: "Under GDPR, health information is a \"special category\" of data. That protects you, but it doesn't change what you choose to type into a chat." },
    { b: "Consumer apps are not medical records.", t: "No assistant's general chat is built to store your health history. Keep the important things in your own notes or your electronic health record (Italy: FSE)." },
    { b: "Dedicated health modes", t: "(like ChatGPT Health in the US) come with their own rules and are not available in the EU at the time of writing." },
    { b: "Work accounts differ.", t: "If you use an AI through your employer, your employer's settings apply. Don't use a work account for personal health questions." },
  ] as Item[],

  checkH: "The 2-minute checklist",
  onceH: "Once",
  once: [
    "Training on my chats is off",
    "I know where my AI's memory settings are, and I've checked what it remembers",
    "Apps I don't need for health questions are disconnected",
    "My camera doesn't save location, or I remove it before sharing",
  ],
  everyH: "Every time",
  every: [
    "Name, date of birth, tax code, patient ID, address and barcodes are covered",
    "I use a temporary or incognito chat for one-off questions",
    "I share only the report that matters, or type the values",
    "No thumbs up or down in health chats",
    "I copy out what I need, then delete the chat if I don't need it",
  ],
  promptH: "A prompt to start with",
  prompt:
    "Before we talk about my health: tell me, for the app I'm using right now, where I turn off training on my chats, where my memory settings are, and how to start a temporary chat. Then remind me which personal details I should leave out of what I share with you.",
  nextH: "Ready for the questions?",
  nextP: "Start with your blood test and cholesterol: one prompt, a checklist, and what to bring to your doctor.",
  nextCta: "Get the cholesterol guide",
  sourcesH: "Sources",
  sources: [
    { label: "OpenAI: Memory in ChatGPT", href: "https://help.openai.com/en/articles/8590148-memory-in-chatgpt" },
    { label: "OpenAI: How memory uses past conversations", href: "https://help.openai.com/en/articles/10303002-how-does-memory-use-pastconversations" },
    { label: "Anthropic: How long do you store my data?", href: "https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data" },
    { label: "Anthropic: Updates to consumer terms", href: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
    { label: "Google: Gemini Apps Privacy Notice", href: "https://support.google.com/gemini/answer/13594961" },
    { label: "Google: Turn off Keep Activity", href: "https://support.google.com/Gemini/answer/13278892" },
    { label: "Google: Temporary Chats", href: "https://blog.google/products/gemini/temporary-chats-privacy-controls/" },
    { label: "The Register: Gemini retention change", href: "https://www.theregister.com/a/5310517" },
    { label: "Proton: What is EXIF data", href: "https://proton.me/blog/exif-data" },
  ],
};

export const shareUi: Record<Lang, { enOnly: string; copy: string; copied: string; lastChecked: string; home: string }> = {
  en: { enOnly: "", copy: "Copy", copied: "Copied", lastChecked: "Last checked", home: "Home" },
  it: { enOnly: "Questa guida è ancora in inglese: la traduzione italiana arriva a breve.", copy: "Copia", copied: "Copiato", lastChecked: "Ultima verifica", home: "Home" },
  de: { enOnly: "Dieser Leitfaden ist noch auf Englisch: Die deutsche Übersetzung folgt in Kürze.", copy: "Kopieren", copied: "Kopiert", lastChecked: "Zuletzt geprüft", home: "Start" },
};
