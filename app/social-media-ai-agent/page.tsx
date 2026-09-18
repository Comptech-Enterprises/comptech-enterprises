import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SocialMediaPageContent } from "@/components/social-media-ai-agent/SocialMediaPageContent";

export const metadata: Metadata = {
  title: "Social Media AI Agent | Comptech Enterprises",
  description:
    "Automate your brand presence 24/7. Comptech's Social Media AI Agent creates on-brand visual and written posts, tracks trending topics, and manages community engagement on autopilot.",
  keywords: [
    "social media AI agent",
    "autonomous social media agent",
    "AI content creator",
    "social media automation India",
    "enterprise social media AI",
  ],
  alternates: { canonical: "/social-media-ai-agent" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Social Media AI Agent | Comptech Enterprises",
    description:
      "Automate your brand presence 24/7. Comptech's Social Media AI Agent creates on-brand visual and written posts, tracks trending topics, and manages community engagement on autopilot.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function SocialMediaAIAgentPage() {
  return (
    <>
      <Navbar transparent />
      <main className="glass-mesh-page">
        <SocialMediaPageContent />
      </main>
      <Footer />
    </>
  );
}
