import type { Lang } from "@/lib/i18n";

export const COUNTRIES = ["IT", "DE", "AT", "CH", "GB", "OTHER"] as const;
export const REASONS = ["results", "checkup", "family", "professional"] as const;

export const signup: Record<Lang, {
  eyebrow: string;
  h1: string;
  email: string;
  emailPlaceholder: string;
  country: string;
  countries: Record<(typeof COUNTRIES)[number], string>;
  reason: string;
  reasons: Record<(typeof REASONS)[number], string>;
  privacyLead: string;
  privacy: string;
  weekly: string;
  weeklyHint: string;
  submit: string;
  sending: string;
  note: string;
  errors: { email: string; generic: string };
  inboxH: string;
  inboxP: string;
  inboxSpam: string;
  confirmedH: string;
  confirmedP: string;
  back: string;
}> = {
  en: {
    eyebrow: "Free guide · Cholesterol",
    h1: "Get the guide in your inbox",
    email: "Email",
    emailPlaceholder: "you@example.com",
    country: "Country",
    countries: { IT: "Italy", DE: "Germany", AT: "Austria", CH: "Switzerland", GB: "United Kingdom", OTHER: "Other" },
    reason: "What brings you here?",
    reasons: { results: "I just got blood test results", checkup: "I'm preparing for a check-up", family: "I'm asking for a family member", professional: "I work in health" },
    privacyLead: "We use your email to send you the guide. See our",
    privacy: "privacy notice",
    weekly: "Also send me the weekly prompts",
    weeklyHint: "One topic a week, a few prompts to try with your AI, one small thing to do. Unsubscribe anytime.",
    submit: "Send me the guide",
    sending: "Sending…",
    note: "No health questions. Unsubscribe anytime.",
    errors: { email: "Please enter a valid email address.", generic: "Something went wrong. Please try again in a minute." },
    inboxH: "Check your inbox",
    inboxP: "We sent you a link to confirm your email. Click it and your guide link follows straight away.",
    inboxSpam: "Nothing there after a few minutes? Check your spam or promotions folder.",
    confirmedH: "You're in",
    confirmedP: "Your email is confirmed. Your personal guide link is on its way to your inbox.",
    back: "Back to the homepage",
  },
  it: {
    eyebrow: "Guida gratuita · Colesterolo",
    h1: "Ricevi la guida via email",
    email: "Email",
    emailPlaceholder: "tu@esempio.it",
    country: "Paese",
    countries: { IT: "Italia", DE: "Germania", AT: "Austria", CH: "Svizzera", GB: "Regno Unito", OTHER: "Altro" },
    reason: "Cosa ti porta qui?",
    reasons: { results: "Ho appena ricevuto le analisi del sangue", checkup: "Mi preparo per un controllo", family: "Chiedo per un familiare", professional: "Lavoro in ambito sanitario" },
    privacyLead: "Usiamo la tua email per inviarti la guida. Leggi l'",
    privacy: "informativa privacy",
    weekly: "Inviami anche i prompt settimanali",
    weeklyHint: "Un tema a settimana, qualche prompt da provare con la tua AI, una piccola cosa da fare. Disiscriviti quando vuoi.",
    submit: "Inviami la guida",
    sending: "Invio…",
    note: "Nessuna domanda sulla salute. Disiscriviti quando vuoi.",
    errors: { email: "Inserisci un indirizzo email valido.", generic: "Qualcosa è andato storto. Riprova tra un minuto." },
    inboxH: "Controlla la tua email",
    inboxP: "Ti abbiamo inviato un link per confermare l'indirizzo. Cliccalo e riceverai subito il link alla guida.",
    inboxSpam: "Non trovi nulla dopo qualche minuto? Guarda nella cartella spam o promozioni.",
    confirmedH: "Ci sei",
    confirmedP: "La tua email è confermata. Il link personale alla guida sta arrivando nella tua casella.",
    back: "Torna alla home",
  },
  de: {
    eyebrow: "Kostenloser Leitfaden · Cholesterin",
    h1: "Leitfaden per E-Mail erhalten",
    email: "E-Mail",
    emailPlaceholder: "du@beispiel.de",
    country: "Land",
    countries: { IT: "Italien", DE: "Deutschland", AT: "Österreich", CH: "Schweiz", GB: "Vereinigtes Königreich", OTHER: "Anderes" },
    reason: "Was führt dich hierher?",
    reasons: { results: "Ich habe gerade Blutwerte bekommen", checkup: "Ich bereite einen Check-up vor", family: "Ich frage für ein Familienmitglied", professional: "Ich arbeite im Gesundheitsbereich" },
    privacyLead: "Wir nutzen deine E-Mail, um dir den Leitfaden zu schicken. Mehr in den",
    privacy: "Datenschutzhinweisen",
    weekly: "Schick mir auch die wöchentlichen Prompts",
    weeklyHint: "Ein Thema pro Woche, ein paar Prompts für deine KI, eine kleine Sache zum Tun. Jederzeit abmeldbar.",
    submit: "Leitfaden senden",
    sending: "Wird gesendet…",
    note: "Keine Gesundheitsfragen. Jederzeit abmeldbar.",
    errors: { email: "Bitte gib eine gültige E-Mail-Adresse ein.", generic: "Etwas ist schiefgelaufen. Bitte versuch es in einer Minute noch einmal." },
    inboxH: "Schau in dein Postfach",
    inboxP: "Wir haben dir einen Bestätigungslink geschickt. Klick ihn an, dann kommt dein Link zum Leitfaden sofort.",
    inboxSpam: "Nach ein paar Minuten nichts da? Schau im Spam- oder Werbeordner nach.",
    confirmedH: "Du bist dabei",
    confirmedP: "Deine E-Mail ist bestätigt. Dein persönlicher Link zum Leitfaden ist unterwegs.",
    back: "Zur Startseite",
  },
};
