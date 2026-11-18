import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAgentsPageContent } from "@/components/ai-agents/AIAgentsPageContent";
import { pageAlternates, serviceJsonLd, SERVICE_COUNTRIES } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "See how Comptech's AI agents automate sales outreach, social media, and meetings — end-to-end workflows that run on autopilot.",
  keywords: [
    "AI agents",
    "sales AI agent",
    "social media AI agent",
    "meeting AI agent",
    "AI automation India",
    "enterprise AI agents",
  ],
  alternates: pageAlternates("/ai-agents"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "AI Agents | Comptech Enterprises",
    description:
      "See how Comptech's AI agents automate sales outreach, social media, and meetings — end-to-end workflows that run on autopilot.",
    images: [{ url: "/images/logo.webp" }],
  },
};

const serviceSchema = serviceJsonLd({
  serviceType: "Pre-built AI Agents for Sales, Social Media, and Meetings",
  areaServed: SERVICE_COUNTRIES,
  description:
    "Autonomous AI agents that automate sales outreach, social media management, and meeting workflows.",
});

export default function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar transparent />
      <Breadcrumbs path="/ai-agents" />
      <main className="glass-mesh-page">
        <AIAgentsPageContent />
      </main>
      <Footer />
    </>
  );
}
