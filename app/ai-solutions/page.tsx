import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AISolutionsClient } from "@/components/ai-solutions/AISolutionsClient";

const TITLE = "Custom AI Agents & Solutions for Mid-Size Businesses";
const DESCRIPTION =
  "Autonomous AI agents, RAG pipelines, API integrations, and AI automation built around your workflows.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI services",
    "AI services in India",
    "AI services Delhi",
    "AI company in Delhi NCR",
    "AI trainings",
    "corporate AI training Delhi",
    "AI agent development",
    "AI automation for MSMEs",
    "custom RAG and LLM solutions",
  ],
  alternates: {
    canonical: "/ai-solutions",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: `${TITLE} | Comptech Enterprises`,
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Services",
  serviceType: "Artificial Intelligence Services",
  url: "https://comptech.in/ai-solutions",
  description: DESCRIPTION,
  provider: { "@id": "https://comptech.in/#localbusiness" },
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      "Custom AI Agent Development",
      "Corporate AI Training Workshops",
      "RAG and LLM Integration",
      "AI Automation for MSMEs",
      "AI Readiness Audits",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function AISolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <AISolutionsClient />
      <Footer />
    </>
  );
}
