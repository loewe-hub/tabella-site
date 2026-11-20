import { SimplePage } from "@/components/SimplePage";
import { brand } from "@/config/brand";

export const metadata = { title: "Privacy notice" };

// PLACEHOLDER: replace with the privacy notice generated from the email tool's template
// once the publisher (partita IVA or Srl) is decided. Must name the data controller.
export default function Privacy() {
  return (
    <SimplePage lang="en">
      <h1 style={{ fontSize: 30 }}>Privacy notice</h1>
      <p className="tiny" style={{ background: "#F9EEDA", borderRadius: 10, padding: "10px 14px" }}>Draft placeholder: not yet the final text.</p>
      <p className="muted">
        Data controller: {brand.publisher}, {brand.vatNumber}. We collect your email address, your country, why you signed up and, if you choose, which topics to tailor (women's or men's health), to send you the guide and the newsletter you asked for. We never ask for or store your test results. If you reply with health information, we delete it.
      </p>
      <p className="muted">
        Emails are sent through Brevo (EU). This site uses cookieless analytics. You can unsubscribe at any time with the link in every email, and ask us to delete your data by writing to {brand.senderEmail}.
      </p>
    </SimplePage>
  );
}
