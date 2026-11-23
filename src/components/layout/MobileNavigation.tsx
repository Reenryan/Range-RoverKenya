
"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigationLinks } from "@/config/navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobileNavigation">
      <button
        type="button"
        className="menuButton"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
      >
        <Menu size={25} />
      </button>

      {isOpen && (
        <div className="overlay">
          <button
            type="button"
            className="backdrop"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <nav
            id="mobile-navigation-panel"
            className="panel"
            aria-label="Mobile navigation"
          >
            <div className="panelHeader">
              <Link href="/" className="brand" onClick={closeMenu}>
                RANGE ROVER<span>.KENYA</span>
              </Link>

              <button
                type="button"
                className="closeButton"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="menuIntroduction">
              <p>EXPLORE RANGE ROVER .KENYA</p>
              <h2>Where would you like to go?</h2>
            </div>

            <div className="menuLinks">
              {navigationLinks.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  className="menuLink"
                >
                  <span className="linkNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>

                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mobileContactButton"
              onClick={closeMenu}
            >
              Get In Touch
              <ArrowRight size={17} />
            </Link>

            <p className="panelFooter">
              RANGE ROVER .KENYA
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
