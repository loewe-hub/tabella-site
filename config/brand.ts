// Everything that depends on the final name lives here.
// Renaming the product = editing this file (plus the logo, if it changes).

export const brand = {
  name: "Curiact",
  tagline: "The questions you didn't know to ask.",
  // Set SITE_URL in Vercel once the domain exists, e.g. https://curiact.com
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  senderName: "Curiact",
  senderEmail: "hello@curiact.com",
  publisher: "Christian Loewe-di Biase",
  vatNumber: "P.IVA 13391640961",
  address: "Via Castiglione 11, 40124 Bologna, Italy",
  founderSignature: "Christian",
  colors: {
    primary: "#0E5E60",
    primaryDark: "#0A4547",
    ink: "#17302F",
    muted: "#3E5A58",
    subtle: "#4A6563",
    ground: "#F2F8F7",
    mint: "#DDF1EA",
    sky: "#DCEEF4",
    border: "#CFE3E0",
    accent: "#2B6F86",
  },
} as const;
