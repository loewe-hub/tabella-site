import { SimplePage } from "@/components/SimplePage";
import { brand } from "@/config/brand";

export const metadata = { title: "Privacy notice" };

// Lean privacy notice for the launch test (27 Nov 2026). Lawyer review before monetising (roadmap #35).
// Check before launch: Brevo and Vercel processor details, retention period, open/click tracking basis.
export default function Privacy() {
  const H = ({ children }: { children: React.ReactNode }) => <h2 className="h3">{children}</h2>;
  return (
    <SimplePage lang="en">
      <h1 style={{ fontSize: "var(--fs-h2)" }}>Privacy notice</h1>
      <p className="tiny subtle">Last updated: 27 November 2026</p>

      <H>Who is responsible</H>
      <p className="muted">
        The data controller is {brand.publisher}, {brand.address}, {brand.vatNumber}. Contact: <a href={`mailto:${brand.senderEmail}`}>{brand.senderEmail}</a>.
      </p>

      <H>What we collect and why</H>
      <ul className="muted stack" style={{ gap: 8, paddingLeft: 20 }}>
        <li><strong>Your email address, your country and, if you choose, why you signed up.</strong> We use them to send you the weekly Curiact newsletter you asked for. Legal basis: your consent (Art. 6(1)(a) GDPR), confirmed by clicking the link in our confirmation email.</li>
        <li><strong>Whether you open our emails and click their links.</strong> Our email service records this so we can see which topics are useful. Legal basis: our legitimate interest in improving the newsletter (Art. 6(1)(f) GDPR). You can object at any time by writing to us.</li>
        <li><strong>How the website is used, in aggregate.</strong> We use cookieless analytics that count page views and clicks without identifying you. We set no tracking cookies.</li>
      </ul>

      <H>What we never collect</H>
      <p className="muted">
        We never ask for your test results or other health information, and we don't store them. Please don't send them to us. If you reply with health information, we delete it and don't use it.
      </p>

      <H>Who helps us</H>
      <ul className="muted stack" style={{ gap: 8, paddingLeft: 20 }}>
        <li><strong>Brevo</strong> (Sendinblue SAS, France) sends our emails and stores the subscriber list on servers in the EU.</li>
        <li><strong>Vercel</strong> (Vercel Inc., USA) hosts this website. Technical data such as IP addresses may be processed outside the EU under the EU's Standard Contractual Clauses.</li>
      </ul>
      <p className="muted">Both act on our instructions only. We will never sell your personal data.</p>

      <H>How long we keep it</H>
      <p className="muted">
        As long as you're subscribed. When you unsubscribe, we stop sending emails straight away and delete your details within 30 days.
      </p>

      <H>Your rights</H>
      <p className="muted">
        You can ask to see, correct or delete your data, restrict or object to its use, or receive a copy of it, and you can withdraw your consent at any time. Every email has an unsubscribe link. To use any of these rights, write to <a href={`mailto:${brand.senderEmail}`}>{brand.senderEmail}</a>. You can also complain to the Italian data protection authority, the <a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a>.
      </p>
    </SimplePage>
  );
}
