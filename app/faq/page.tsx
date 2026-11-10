import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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

const FAQS = [
  {
    q: "What are custom AI agents and how can they help my business?",
    a: "Custom AI agents are autonomous software systems built around your specific business workflows. They research, draft, execute, and escalate tasks without manual intervention. Unlike generic AI tools like ChatGPT, custom AI agents integrate directly with your existing tools such as CRMs, calendars, and communication platforms. Businesses use them to automate sales outreach, customer support, content creation, and internal operations, saving hundreds of hours per month. Comptech Enterprises builds custom AI agents tailored for mid-size businesses that want to scale without hiring large tech teams.",
  },
  {
    q: "What is Generative Engine Optimization (GEO) and how is it different from SEO?",
    a: "Generative Engine Optimization (GEO) is the practice of optimizing your brand to get cited, recommended, and ranked inside AI-powered search engines like ChatGPT, Google Gemini, and Perplexity. Traditional SEO focuses on ranking in Google’s link-based search results, while GEO focuses on getting your business mentioned in AI-generated answers. Both are important. SEO drives website traffic, GEO builds brand visibility where more and more people are searching. Comptech Enterprises offers both SEO and GEO services to ensure your business is visible across traditional and AI search.",
  },
  {
    q: "How can mid-size businesses start adopting AI without a technical team?",
    a: "Mid-size businesses can start with AI by identifying repetitive, time-consuming tasks like lead qualification, meeting notes, or social media management and automating them with pre-built AI employees or custom AI agents. You don’t need an in-house tech team because companies like Comptech Enterprises handle the entire process: auditing your workflows, building the AI solution, integrating it with your existing tools, and providing ongoing support. Most businesses go live with their first AI system within 30 days. We also offer hands-on AI training workshops so your teams can confidently work alongside AI.",
  },
  {
    q: "What industries and countries does Comptech Enterprises serve?",
    a: "Comptech Enterprises serves mid-size businesses across industries including hospitality, education, manufacturing, retail, automotive, and professional services. We work with clients in the United Arab Emirates, Canada, the United Kingdom, Australia, Germany, and across Europe, in addition to India. Our AI solutions, GEO services, and AI training workshops are delivered remotely and on-site, making it easy to work with teams across time zones. Whether you’re a 50-person company or a 500-person enterprise, our solutions are designed to scale with your needs.",
  },
  {
    q: "What does a free AI audit include and how do I get started?",
    a: "The free AI audit is a detailed assessment of your current workflows to identify where AI can save time, cut costs, and improve output. We analyze your sales process, customer support, content operations, and internal tools to recommend specific AI agents or automations that fit your business. The audit takes one consultation call and you receive a clear action plan with estimated timelines and results. To get started, simply fill out the contact form on our website or message us on WhatsApp at +91 9958847613.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const GRADIENT = "linear-gradient(135deg, #5C0F26, #E8435A)";

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
            {/* Sticky quick-nav + CTA */}
            <aside className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                <RevealWrapper>
                  <SectionLabel>Quick Links</SectionLabel>
                  <nav className="glass-card mt-4 divide-y divide-gray-200/60 overflow-hidden p-2">
                    {FAQS.map(({ q }, i) => (
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
                      <h3 className="font-display text-xl font-extrabold leading-snug">
                        Still have questions?
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        Book one consultation call and get a clear action plan with timelines and expected results.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5C0F26] shadow-lg transition-all hover:scale-105"
                      >
                        Get a Free AI Audit <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </RevealWrapper>
              </div>
            </aside>

            {/* Q&A cards — every answer stays visible for indexing */}
            <div className="space-y-6 lg:col-span-8">
              {FAQS.map(({ q, a }, i) => (
                <RevealWrapper key={q} delay={i * 60}>
                  <article
                    id={`faq-${i + 1}`}
                    className="glass-card scroll-mt-28 p-6 sm:p-9"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span
                        className="font-display text-4xl font-extrabold leading-none text-transparent bg-clip-text sm:text-5xl"
                        style={{ backgroundImage: GRADIENT }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-extrabold leading-snug tracking-tight text-gray-900 sm:text-2xl">
                          {q}
                        </h2>
                        <p className="mt-4 leading-relaxed text-gray-600">{a}</p>
                      </div>
                    </div>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
