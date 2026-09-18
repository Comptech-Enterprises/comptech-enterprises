import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AISection } from "@/components/home/AISection";
import { HomeAIAgentsSection } from "@/components/home/HomeAIAgentsSection";
import { WhatWeDelivered, CertifiedWith } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { PageThread } from "@/components/ui/PageThread";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="glass-mesh-page">
        {/* 1. Hero / Animation Video */}
        <Hero />

        {/* 2. Tailored AI Solutions Section */}
        <AISection />

        {/* 3. 3 Flagship AI Agents */}
        <HomeAIAgentsSection />

        {/* 4. What We Have Delivered */}
        <WhatWeDelivered />

        {/* 5. Certified With (Logos + Names) */}
        <CertifiedWith />

        {/* 6. Core IT Services */}
        <ServicesSection />

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
