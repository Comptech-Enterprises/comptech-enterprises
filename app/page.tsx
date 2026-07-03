import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AISection } from "@/components/home/AISection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <PartnersStrip />
        <ServicesSection />
        <AISection />
        <CaseStudiesSection />
        <Testimonials />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
