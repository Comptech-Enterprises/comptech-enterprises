"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import TechText from "@/components/reactbits/TechText";
import Stepper, { StepItem } from "@/components/reactbits/Stepper";

const GEO_STEPS: StepItem[] = [
  {
    id: 1,
    title: "What is Generative Engine Optimization (GEO) and how does it differ from SEO?",
    category: "Core Principle",
    content:
      "Traditional SEO focuses on ranking links on Google's search engine results page (SERP) using keywords and backlinks. Generative Engine Optimization (GEO) is designed for neural AI engines (like ChatGPT, Google Gemini, Perplexity, and Claude) that synthesize full conversational answers. Rather than competing for 10 blue links, GEO ensures your brand is the named, authoritative, and cited solution inside the AI's generated response.",
    highlights: [
      "Synthesized answers over blue links",
      "Authoritative brand mentions & citations",
      "Entity-first Knowledge Graph alignment",
      "Direct conversion in conversational AI",
    ],
  },
  {
    id: 2,
    title: "Which AI engines and LLM models do you optimize for?",
    category: "LLM Matrix",
    content:
      "We optimize across all major generative search systems: OpenAI ChatGPT (including GPT-4o and SearchGPT), Google Gemini (and Google AI Overviews), Perplexity AI, Anthropic Claude, xAI Grok, and Meta AI. Each engine uses different retrieval architectures (RAG, web-augmented scrapers, or direct pre-training knowledge), and our methodology addresses each platform specifically.",
    highlights: [
      "OpenAI SearchGPT & ChatGPT Plus",
      "Google Gemini & AI Overviews",
      "Perplexity Pro & Sonar Models",
      "Claude 3.7 & Anthropic Knowledge",
    ],
  },
  {
    id: 3,
    title: "How do LLMs decide which brands to cite and recommend?",
    category: "Citations Logic",
    content:
      "AI models synthesize information based on three core layers: (1) Knowledge Graph entity recognition and structured data, (2) Corroborated citations across authoritative third-party industry benchmarks and trusted publications, and (3) Information gain and statistical density — models prefer sources that directly answer prompts with verifiable facts, clear pricing, and definitive metrics.",
    highlights: [
      "High statistical information gain",
      "Multi-source factual corroboration",
      "Verified entity graph schemas",
      "Domain trust & vector similarity",
    ],
  },
  {
    id: 4,
    title: "How quickly can we expect our brand to get cited in AI answers?",
    category: "Timeframe",
    content:
      "For real-time search engines like Perplexity, ChatGPT Search, and Google AI Overviews, optimizations to indexable content, schemas, and PR citations can begin yielding citations within 3 to 6 weeks. For foundational pre-training and parameter-level knowledge updates, results compound over 60 to 90 days as model weights and vector indexes refresh.",
    highlights: [
      "3-6 weeks: Real-time search & RAG engines",
      "60-90 days: Vector stores & LLM cache",
      "Monthly citation share reporting",
      "Continuous iterative prompt benchmarking",
    ],
  },
  {
    id: 5,
    title: "Does GEO replace our existing SEO or work alongside it?",
    category: "SEO Coexistence",
    content:
      "GEO heavily complements and elevates existing SEO. Strong technical hygiene, high crawlability, and clear site structure are prerequisites for generative retrieval. However, traditional SEO agencies rarely understand vector embeddings, entity disambiguation, or RAG retrieval algorithms. We collaborate with your in-house marketing or SEO team to add the generative intelligence layer.",
    highlights: [
      "Full synergy with technical SEO hygiene",
      "Elevates domain trust & indexability",
      "Adds neural vector embedding layer",
      "Future-proofs against zero-click SERP drop",
    ],
  },
  {
    id: 6,
    title: "What exactly is included in the Free GEO Audit?",
    category: "Free Audit Pack",
    content:
      "Our complimentary GEO audit includes: (1) Multi-LLM Citation Gap Map testing 10 high-value commercial prompts for your industry across 4 AI engines, (2) Entity Authority Scorecard evaluating your digital knowledge graph and schema markup, (3) Competitor AI Share-of-Voice comparison, and (4) An actionable 90-day GEO roadmap with prioritized fixes.",
    highlights: [
      "10 commercial prompt benchmark tests",
      "Competitor Share of Model Voice",
      "Complete Knowledge Graph audit",
      "Actionable 90-day execution roadmap",
    ],
  },
];

export function GEOFAQ() {
  return (
    <section id="geo-faq" className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="text-center mb-12 sm:mb-14">
          <SectionLabel className="justify-center">Interactive Knowledge Stepper</SectionLabel>

          {/* TechText accent above heading */}
          <div className="w-full h-[52px] sm:h-[65px] relative max-w-[240px] sm:max-w-xs mx-auto mb-2">
            <TechText
              text="GEO FAQ"
              fontWeight={800}
              fontSize={52}
              color="#5C0F26"
              accentColor="#E8435A"
              lineStyle="solid"
              reveal="letter"
              specks={0}
            />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Everything You Need to Know About GEO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Step through the core mechanics of Generative Engine Optimization and learn how Comptech engineers AI visibility.
          </p>
        </RevealWrapper>

        {/* Interactive Stepper replacing static accordions */}
        <Stepper steps={GEO_STEPS} />
      </div>
    </section>
  );
}
