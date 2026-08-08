import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PartnersStrip, ResellerTicker } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { PageThread } from "@/components/ui/PageThread";

export default function HomePage() {
  return (
    <>
      <Navbar transparent />
      <main className="glass-mesh-page">
        <Hero />
        <PartnersStrip />
        <ServicesSection />
        <div className="relative">
          <PageThread />
          <ResellerTicker />
          <Testimonials />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
