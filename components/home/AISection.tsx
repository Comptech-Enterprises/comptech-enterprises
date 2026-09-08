"use client";

import Link from "next/link";
import { ArrowRight, Bot, Zap, Search, Blocks, Target, GraduationCap, Database } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AI_PILLARS } from "@/lib/constants";

const ICONS = {
  bot: Bot,
  zap: Zap,
  search: Search,
  blocks: Blocks,
  target: Target,
  graduation: GraduationCap,
  database: Database,
} as const;

export function AISection() {
  return (
    <section
      id="ai"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="ai-pillars-title"
    >
      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, #ffffff 0%, #FDF4F6 40%, #F5F3FF 100%)", opacity: 0.55 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <SectionLabel>AI Solutions</SectionLabel>
          <h2
            id="ai-pillars-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)" }}
          >
            Practical AI that{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A 60%, #7C3AED)" }}
            >
              delivers real results
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            From AI audits and custom agents to company-wide digitization — we take you from idea to working AI, end to end.
          </p>
        </div>

        {/* 7-pillar grid: 3 cols desktop, 2 tablet, 1 mobile */}
        {/* First 3 cards full-width top row, then 4 in 2+2 below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AI_PILLARS.slice(0, 6).map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Bot;
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: `${pillar.color}18`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: pillar.bg }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <ArrowRight
                    size={15}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-0.5"
                    style={{ color: pillar.color }}
                  />
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-gray-900 text-base leading-snug mb-1.5"
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </Link>
            );
          })}

          {/* 7th pillar — full-width on lg (spanning 1 of 3 cols in last row, same width as others)
              On lg with 3 cols and 7 items: row1=3, row2=3, row3=1. Make it wide by spanning 2 cols. */}
          {AI_PILLARS[6] && (() => {
            const pillar = AI_PILLARS[6];
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Bot;
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-3"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: `${pillar.color}18`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: pillar.bg }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0"
                    style={{ color: pillar.color }}
                  >
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #5C0F26, #E8435A)",
              boxShadow: "0 4px 20px rgba(92,15,38,0.3)",
            }}
          >
            Book a Free AI Audit <ArrowRight size={15} />
          </Link>
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 bg-white transition-all duration-200 hover:border-[#5C0F26]/30 hover:text-[#5C0F26]"
          >
            Explore All AI Services <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
