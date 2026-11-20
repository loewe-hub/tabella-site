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
  consent: string;
  privacy: string;
  submit: string;
  sending: string;
  note: string;
  errors: { email: string; consent: string; generic: string };
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
    consent: "I'd like to receive the guide and the newsletter. I have read the",
    privacy: "privacy notice",
    submit: "Send me the guide",
    sending: "Sending…",
    note: "No health questions. Unsubscribe anytime.",
    errors: { email: "Please enter a valid email address.", consent: "Please tick the box so we can send you the guide.", generic: "Something went wrong. Please try again in a minute." },
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
    consent: "Desidero ricevere la guida e la newsletter. Ho letto l'",
    privacy: "informativa privacy",
    submit: "Inviami la guida",
    sending: "Invio…",
    note: "Nessuna domanda sulla salute. Disiscriviti quando vuoi.",
    errors: { email: "Inserisci un indirizzo email valido.", consent: "Spunta la casella così possiamo inviarti la guida.", generic: "Qualcosa è andato storto. Riprova tra un minuto." },
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
    consent: "Ich möchte den Leitfaden und den Newsletter erhalten. Ich habe die",
    privacy: "Datenschutzhinweise gelesen",
    submit: "Leitfaden senden",
    sending: "Wird gesendet…",
    note: "Keine Gesundheitsfragen. Jederzeit abmeldbar.",
    errors: { email: "Bitte gib eine gültige E-Mail-Adresse ein.", consent: "Bitte setz das Häkchen, damit wir dir den Leitfaden schicken können.", generic: "Etwas ist schiefgelaufen. Bitte versuch es in einer Minute noch einmal." },
    inboxH: "Schau in dein Postfach",
    inboxP: "Wir haben dir einen Bestätigungslink geschickt. Klick ihn an, dann kommt dein Link zum Leitfaden sofort.",
    inboxSpam: "Nach ein paar Minuten nichts da? Schau im Spam- oder Werbeordner nach.",
    confirmedH: "Du bist dabei",
    confirmedP: "Deine E-Mail ist bestätigt. Dein persönlicher Link zum Leitfaden ist unterwegs.",
    back: "Zur Startseite",
  },
};
