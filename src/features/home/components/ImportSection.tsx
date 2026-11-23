import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ImportSection() {
  return (
    <Link
      href="/import-with-us"
      className="service-panel import-panel"
      id="import"
    >
      <div>
        <p className="section-eyebrow">IMPORT WITH US</p>

        <h2>Your next vehicle, sourced globally.</h2>

        <span className="text-link">
          Start your import journey <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}