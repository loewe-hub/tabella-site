import { SimplePage } from "@/components/SimplePage";
import { brand } from "@/config/brand";

export const metadata = { title: "Terms" };

// PLACEHOLDER: lawyer review is planned before monetising (roadmap #35).
export default function Terms() {
  return (
    <SimplePage lang="en">
      <h1 style={{ fontSize: 30 }}>Terms of use</h1>
      <p className="tiny" style={{ background: "#F9EEDA", borderRadius: 10, padding: "10px 14px" }}>Draft placeholder: not yet the final text.</p>
      <p className="muted">
        {brand.name} guides are educational content. They are not medical, legal or tax advice, and they do not replace a professional. An AI assistant can be wrong: every decision belongs to you and the professional you work with.
      </p>
      <p className="muted">If you have chest pain or sudden symptoms, call 112.</p>
    </SimplePage>
  );
}
