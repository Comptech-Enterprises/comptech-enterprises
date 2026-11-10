import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AISection } from "@/components/home/AISection";
import { HomeAIAgentsSection } from "@/components/home/HomeAIAgentsSection";
import { WhatWeDelivered, CertifiedWith } from "@/components/home/PartnersStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { HOME_FAQS } from "@/lib/faqs";
import { PageThread } from "@/components/ui/PageThread";

export const metadata: Metadata = {
  title: { absolute: "Comptech Enterprises | AI Agents, Solutions & Training for Business" },
  description:
    "Custom AI agents, automation, GEO services, and AI training for business and tech teams. Enterprise IT support worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Comptech Enterprises | AI Agents, Solutions & Training for Business",
    description:
      "Custom AI agents, automation, GEO services, and AI training for business and tech teams. Enterprise IT support worldwide.",
    images: [{ url: "/images/logo.webp" }],
  },
};

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

        <FAQSection
          items={HOME_FAQS}
          intro="Straight answers about custom AI agents, GEO, adopting AI without a technical team, and how to get started."
        />
      </main>
      <Footer />
    </>
  );
}
