import type { Metadata } from "next";
import { Sora, Instrument_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSolutions } from "@/components/about/AboutSolutions";
import { AIEmployees } from "@/components/about/AIEmployees";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutWho } from "@/components/about/AboutWho";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { AboutContact } from "@/components/about/AboutContact";
import { pageAlternates } from "@/lib/seo";
import "@/components/about/about.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: { absolute: "Comptech Enterprises | AI Agents, Solutions & Training for Business" },
  description:
    "Custom AI agents, automation, GEO services, and AI training for business and tech teams. Enterprise IT support worldwide.",
  alternates: pageAlternates("/"),
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
    <div className={`${sora.variable} ${instrument.variable} font-[family-name:var(--font-instrument)]`}>
      <Navbar transparent />
      <main>
        <AboutHero />
        <AboutSolutions />
        <AIEmployees />
        <AboutProcess />
        <AboutWho />
        <AboutFAQ />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}
