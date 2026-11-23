import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SellSection() {
  return (
    <Link
      href="/sell-with-us"
      className="service-panel sell-panel"
      id="sell"
    >
      <div>
        <p className="section-eyebrow">SELL WITH US</p>

        <h2>Give your vehicle the right audience.</h2>

        <span className="text-link">
          Partner with us <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}