import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CustomersStrip } from "@/components/home/CustomersStrip";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
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
        <CustomersStrip />
        <ServicesSection />
        <IndustriesSection />
        <AIAssistantPromo />
        <div className="relative">
          <PageThread />
          <Testimonials />
          <PartnersStrip />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
