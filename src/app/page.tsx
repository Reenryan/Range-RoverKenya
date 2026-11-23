import AboutPreview from "@/features/home/components/AboutPreview";
import ContactSection from "@/features/home/components/ContactSection";
import FeaturedVehicles from "@/features/home/components/FeaturedVehicles";
import HeroSection from "@/features/home/components/HomeSection";
import ImportSection from "@/features/home/components/ImportSection";
import SellSection from "@/features/home/components/SellSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <FeaturedVehicles />

      <section className="services-section">
        <ImportSection />
        <SellSection />
      </section>

      <AboutPreview />

      <ContactSection />
    </main>
  );
}