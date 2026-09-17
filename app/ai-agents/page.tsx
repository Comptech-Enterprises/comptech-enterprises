import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { AIAgentsClient } from "@/components/ai-agents/AIAgentsClient";

export const metadata: Metadata = {
  title: "AI Agents | Comptech Enterprises",
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
  alternates: { canonical: "/ai-agents" },
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

export default function AIAgentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          light
          badge="AI Agents"
          title={
            <>
              Intelligent agents that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C0F26] to-[#E8435A]">
                work for you
              </span>
            </>
          }
          subtitle="Autonomous AI workflows that handle sales outreach, social media management, and meeting coordination — so your team focuses on closing, not clicking."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "AI Agents" },
          ]}
        />
        <AIAgentsClient />
      </main>
      <Footer />
    </>
  );
}
