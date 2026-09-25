import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GEOClient } from "@/components/geo/GEOClient";

export const metadata: Metadata = {
  title: "GEO — Generative Engine Optimization | Comptech Enterprises",
  description:
    "Get your brand cited, recommended, and ranked inside ChatGPT, Google Gemini, Perplexity, and every AI search engine. Comptech's GEO services optimize your digital presence for the generative era.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI SEO",
    "ChatGPT optimization",
    "Perplexity ranking",
    "AI search optimization",
    "brand visibility AI",
  ],
  alternates: { canonical: "/geo" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "GEO — Generative Engine Optimization | Comptech Enterprises",
    description:
      "Get your brand cited, recommended, and ranked inside ChatGPT, Google Gemini, Perplexity, and every AI search engine.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function GEOPage() {
  return (
    <>
      <Navbar />
      <GEOClient />
      <Footer />
    </>
  );
}
