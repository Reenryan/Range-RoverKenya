
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { navigationLinks } from "@/config/navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          href="/"
          className="navbar-brand"
          aria-label="Range Rover Kenya homepage"
        >
          <span className="navbar-brand-name">RANGE ROVER</span>
          <span className="navbar-brand-location">.KENYA</span>
        </Link>

        <nav className="navbar-desktop-navigation" aria-label="Main navigation">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact-us" className="navbar-contact-button">
          Get In Touch
          <ArrowRight size={16} />
        </Link>

        <MobileNavigation />
      </div>
    </header>
  );
}
