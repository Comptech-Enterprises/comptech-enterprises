import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AISolutionsClient } from "@/components/ai-solutions/AISolutionsClient";
import { FAQSection } from "@/components/faq/FAQSection";
import { AI_AGENTS_FAQS, AI_TRAINING_FAQS } from "@/lib/faqs";
import { pageAlternates, serviceJsonLd as serviceBlock, SERVICE_COUNTRIES } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

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
  alternates: pageAlternates("/ai-solutions"),
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
  ...serviceBlock({
    serviceType: "AI Solutions and Custom AI Agent Development",
    areaServed: SERVICE_COUNTRIES,
    description:
      "Custom AI agents, RAG pipelines, API integrations, and AI automation built around your business workflows.",
    url: "https://comptech.in/ai-solutions",
  }),
  name: "AI Services",
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
      <Breadcrumbs path="/ai-solutions" />
      <AISolutionsClient />
      <div className="glass-mesh-page">
        <FAQSection
          groups={[
            { title: "Custom AI Agents", items: AI_AGENTS_FAQS },
            { title: "AI Training", items: AI_TRAINING_FAQS },
          ]}
          intro="Answers about custom AI agents and AI training workshops for business teams."
        />
      </div>
      <Footer />
    </>
  );
}
