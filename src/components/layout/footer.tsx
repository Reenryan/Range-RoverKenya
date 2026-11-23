
import { ArrowUpRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Vehicles", href: "/vehicles" },
  { label: "Import With Us", href: "/import-with-us" },
  { label: "Sell With Us", href: "/sell-with-us" },
];

const informationLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/your-account/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/your-account/",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@your-account",
    icon: FaYoutube,
  },
  {
    label: "X",
    href: "https://x.com/your-account",
    icon: FaXTwitter,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@your-account",
    icon: FaTiktok,
  },
];

// Update this value when the calendar year changes.
const currentYear = 2026;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main-content">

          {/* Brand and Social Media */}
          <div className="footer-brand-section">
            <Link
              href="/"
              className="footer-brand"
              aria-label="Range Rover Kenya homepage"
            >
              RANGE ROVER<span>.KENYA</span>
            </Link>

            <p className="footer-description">
              Your destination for premium vehicles, trusted vehicle
              sourcing, and a seamless importing experience in Kenya.
            </p>

            <div className="footer-social-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className="footer-social-link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Navigation */}
          <div className="footer-link-section">
            <h3>Explore</h3>

            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Information Navigation */}
          <div className="footer-link-section">
            <h3>Information</h3>

            {informationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div className="footer-contact-section">
            <h3>Get In Touch</h3>

            <p>
              Have a question or looking for your next vehicle?
            </p>

            <Link
              href="/contact-us"
              className="footer-contact-button"
            >
              Contact Our Team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} RANGE ROVER .KENYA</p>
          <p>All rights reserved.</p>

          <Link href="/faqs">Need Help?</Link>
        </div>
      </div>
    </footer>
  );
}
