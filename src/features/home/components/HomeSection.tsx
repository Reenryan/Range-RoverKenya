"use client";

import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "RANGE ROVER .KENYA",
    title: "Luxury has a new destination.",
    description:
      "Discover exceptional Range Rover and Land Rover vehicles.",
    image: "/images/hero-01.png",
    primary: "Explore Vehicles",
    primaryHref: "/vehicles",
    secondary: "Sell With Us",
    secondaryHref: "/sell-with-us",
  },
  {
    eyebrow: "FIND YOUR NEXT VEHICLE",
    title: "Made for every journey.",
    description:
      "Explore a world of performance, refinement and capability.",
    image: "/images/hero-02.png",
    primary: "Explore Vehicles",
    primaryHref: "/vehicles",
    secondary: "Import With Us",
    secondaryHref: "/import-with-us",
  },
  {
    eyebrow: "IMPORT WITH CONFIDENCE",
    title: "Your dream car. Our expertise.",
    description:
      "Let us help you source and import your next Land Rover.",
    image: "/images/hero-03.png",
    primary: "Import With Us",
    primaryHref: "/import-with-us",
    secondary: "Contact Us",
    secondaryHref: "/contact-us",
  },
  {
    eyebrow: "SELL WITH CONFIDENCE",
    title: "The right people for your vehicle.",
    description:
      "Connect with buyers looking for their next Land Rover.",
    image: "/images/hero-04.png",
    primary: "Sell With Us",
    primaryHref: "/sell-with-us",
    secondary: "Contact Us",
    secondaryHref: "/contact-us",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="hero" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          className="hero-background"
          style={{
            backgroundImage: `url("${currentSlide.image}")`,
          }}
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.06,
          }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
          }}
        />
      </AnimatePresence>

      <div className="hero-overlay" />

      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={25} />
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={25} />
      </button>

      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.title}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
            }}
          >
            <p className="hero-eyebrow">
              {currentSlide.eyebrow}
            </p>

            <h1>{currentSlide.title}</h1>

            <p className="hero-description">
              {currentSlide.description}
            </p>

            <div className="hero-actions">
              <Link
                href={currentSlide.primaryHref}
                className="button button-gold"
              >
                {currentSlide.primary}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={currentSlide.secondaryHref}
                className="button button-outline"
              >
                {currentSlide.secondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-pagination">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setActiveSlide(index)}
            className={
              index === activeSlide ? "pagination-active" : ""
            }
            aria-label={`Show slide ${index + 1}`}
            aria-current={
              index === activeSlide ? "true" : undefined
            }
          />
        ))}
      </div>

      <div className="hero-bottom-label">
        <span>DISCOVER</span>
        <span className="gold-dot" />
        <span>EXPERIENCE</span>
        <span className="gold-dot" />
        <span>OWN</span>
      </div>
    </section>
  );
}