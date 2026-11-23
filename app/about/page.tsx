import type { Metadata } from "next";
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

const DESCRIPTION =
  "About Comptech Enterprises: 30+ years of delivery, 50+ AI engineers and 100+ live deployments. Custom AI agents, software, GEO and training, built around your business.";

export const metadata: Metadata = {
  title: "About Comptech Enterprises | AI Partners for Ambitious Businesses",
  description: DESCRIPTION,
  alternates: pageAlternates("/about"),
  openGraph: {
    type: "website",
    siteName: "Comptech Enterprises",
    title: "About Comptech Enterprises | AI Partners for Ambitious Businesses",
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function AboutPage() {
  return (
    <>
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
    </>
  );
}
