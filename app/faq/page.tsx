import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { FAQList } from "@/components/faq/FAQList";
import { HOME_FAQS, faqJsonLd } from "@/lib/faqs";
import { FreeAuditButton } from "@/components/ui/FreeAuditButton";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TITLE = "FAQs: AI Agents, GEO & AI Adoption for Business";
const DESCRIPTION =
  "Answers to common questions about custom AI agents, Generative Engine Optimization (GEO), AI adoption for mid-size businesses, and the free AI audit from Comptech Enterprises.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: `${TITLE} | Comptech Enterprises`,
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

const GRADIENT = "linear-gradient(135deg, #5C0F26, #E8435A)";

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HOME_FAQS)) }}
      />
      <Navbar />
      <main className="glass-mesh-page">
        <PageHero
          light
          badge="FAQs"
          title={
            <>
              Answers to Your{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: GRADIENT }}
              >
                AI Questions
              </span>
            </>
          }
          subtitle="Straight answers about custom AI agents, GEO, adopting AI without a technical team, and how to get started."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
            {/* Desktop: sticky quick-nav + CTA. On mobile only the CTA shows, after the answers. */}
            <aside className="order-last lg:order-none lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                <RevealWrapper className="hidden lg:block">
                  <SectionLabel>Quick Links</SectionLabel>
                  <nav className="glass-card mt-4 hidden divide-y divide-gray-200/60 overflow-hidden p-2 lg:block">
                    {HOME_FAQS.map(({ q }, i) => (
                      <a
                        key={q}
                        href={`#faq-${i + 1}`}
                        className="group flex items-start gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-white/70 hover:text-[#5C0F26]"
                      >
                        <span className="mt-0.5 text-xs font-extrabold text-[#E8435A]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{q}</span>
                      </a>
                    ))}
                  </nav>
                </RevealWrapper>

                <RevealWrapper delay={120}>
                  <div
                    className="relative overflow-hidden rounded-3xl p-7 text-white shadow-xl"
                    style={{ background: "linear-gradient(135deg, #3F0A1A 0%, #5C0F26 50%, #7A1534 100%)" }}
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                      style={{ background: "#E8435A" }}
                    />
                    <div className="relative">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={13} className="text-pink-300" />
                        Free AI Audit
                      </div>
                      <p className="font-display text-xl font-extrabold leading-snug">
                        Still have questions?
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        Book one consultation call and get a clear action plan with timelines and expected results.
                      </p>
                      <FreeAuditButton
                        source="FAQ Page - Free AI Audit Popup"
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5C0F26] shadow-lg transition-all hover:scale-105"
                      >
                        Get a Free AI Audit <ArrowRight size={15} />
                      </FreeAuditButton>
                    </div>
                  </div>
                </RevealWrapper>
              </div>
            </aside>

            {/* Q&A: cards on desktop, accordion on mobile */}
            <div className="lg:col-span-8">
              <FAQList items={HOME_FAQS} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
