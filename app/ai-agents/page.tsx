import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAgentsPageContent } from "@/components/ai-agents/AIAgentsPageContent";

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
      <Navbar transparent />
      <main className="glass-mesh-page">
        <AIAgentsPageContent />
      </main>
      <Footer />
    </>
  );
}
