import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CodeShowcase } from "@/components/home/CodeShowcase";
import { AIAssistantPromo } from "@/components/home/AIAssistantPromo";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { PageThread } from "@/components/ui/PageThread";

export default function HomePage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <PartnersStrip />
        <ServicesSection />
        <CodeShowcase />
        <AIAssistantPromo />
        <div className="relative">
          <PageThread />
          <Testimonials />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
