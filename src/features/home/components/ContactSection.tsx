import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="section-eyebrow">LET&apos;S TALK</p>

        <h2>Find your next journey with us.</h2>
      </div>

      <Link
        href="/contact-us"
        className="button button-gold"
      >
        Contact Our Team <ArrowRight size={18} />
      </Link>
    </section>
  );
}