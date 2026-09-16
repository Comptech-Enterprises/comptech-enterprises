"use client";

import Link from "next/link";
import { ArrowRight, Bot, Blocks, Target, GraduationCap } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AI_PILLARS } from "@/lib/constants";

const CLIENTS = [
  "Diageo",
  "BCG",
  "DLF",
  "Casio",
  "ITC",
  "Starbucks India",
  "Zomato",
  "Pernod Ricard",
  "Leela Hotels",
  "Urban Company",
  "Bata India",
  "SRCC",
  "IIT Delhi",
  "Beanly Coffee",
  "Rebel Foods",
  "Coca-Cola",
  "HL Mando",
  "Shervani Hotels",
  "Summit Hotels",
  "William Grant & Sons",
  "Radico Khaitan",
  "Stanley",
  "Canara Bank",
  "Fabstract",
];

const ICONS = {
  bot: Bot,
  blocks: Blocks,
  target: Target,
  graduation: GraduationCap,
} as const;

const PILLAR_TAGS: Record<string, string[]> = {
  agents: ["Autonomous Exec", "Multi-Agent", "Zero Leak"],
  software: ["Private RAG", "Custom Models", "API Sync"],
  strategy: ["Executive ROI", "Tool Selection", "Governance"],
  training: ["Hands-On Lab", "C-Suite & Teams", "Practical Skills"],
};

export function AISection() {
  return (
    <section id="ai" className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="ai-title">
      {/* ── Customer Ticker (Single line, big font, no dots) ── */}
      <div className="w-full overflow-hidden mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-7">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200/80" />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-gray-400 whitespace-nowrap">
              Organizations Working With Us
            </p>
            <div className="flex-1 h-px bg-gray-200/80" />
          </div>
        </div>

        <div className="relative overflow-hidden py-2">
          {/* Gradient Edge Masks for seamless infinite scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#F5F5F9] via-[#F5F5F9]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#F5F5F9] via-[#F5F5F9]/80 to-transparent z-10" />

          {/* Single Continuous Big Ticker */}
          <div
            className="flex w-max gap-4 sm:gap-5 hover:[animation-play-state:paused]"
            style={{
              animation: "ticker-scroll 55s linear infinite",
            }}
          >
            {CLIENTS.concat(CLIENTS).map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="shrink-0 inline-flex items-center px-8 sm:px-11 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl font-bold text-gray-800 glass-card bg-white/80 border border-white/90 shadow-sm hover:border-gray-300 hover:bg-white hover:shadow-md transition-all whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── AI Solutions Section Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header directly matching screenshot and main */}
        <div className="mb-12 max-w-3xl">
          <SectionLabel className="mb-3">AI Solutions</SectionLabel>
          <h2
            id="ai-title"
            className="font-display font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-4"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
          >
            Tailored AI Solutions{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26 0%, #E8435A 60%, #7C3AED 100%)" }}
            >
              built around your business
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            Custom AI built around how you work — not off-the-shelf tools, not generic playbooks.
          </p>
        </div>

        {/* 4 Pillars Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AI_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Bot;
            const tags = PILLAR_TAGS[pillar.id] ?? [];

            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between border bg-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
                style={{
                  borderColor: `${pillar.color}25`,
                }}
              >
                {/* Ambient hover glow inside card */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ background: pillar.color }}
                />

                <div>
                  {/* Top row: Icon + Arrow action indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs"
                      style={{ background: pillar.bg }}
                    >
                      <Icon size={22} style={{ color: pillar.color }} />
                    </div>

                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                      style={{ background: pillar.bg }}
                    >
                      <ArrowRight size={15} style={{ color: pillar.color }} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-gray-950 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Feature Badges / Chips */}
                <div className="pt-4 border-t border-gray-100/80 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md text-gray-600 bg-gray-50 border border-gray-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white shadow-md hover:scale-105 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
              boxShadow: "0 8px 24px rgba(92, 15, 38, 0.25)",
            }}
          >
            Book a Free AI Audit <ArrowRight size={16} />
          </Link>
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-200 hover:border-gray-400 hover:bg-white hover:text-gray-900 shadow-xs"
          >
            Explore All AI Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
