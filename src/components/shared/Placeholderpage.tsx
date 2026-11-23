import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
  buttonText = "Get In Touch",
  buttonHref = "/contact-us",
}: PlaceholderPageProps) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-page-container">
        <span className="placeholder-page-eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <Link href={buttonHref} className="placeholder-page-button">
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="placeholder-page-footer">
        RANGE ROVER <span>.KENYA</span>
      </div>
    </section>
  );
}