"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";
import { ArrowRight, Cpu, GraduationCap, Server, Code, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HOME_PILLARS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "./BorderBeamCard";

const ICONS = {
  cpu: Cpu,
  graduation: GraduationCap,
  server: Server,
  code: Code,
} as const;

const THEMES: Record<string, { beamFrom: string; beamTo: string; spotlight: string; iconBg: string; iconColor: string; tag: string }> = {
  ai: {
    beamFrom: "#5C0F26",
    beamTo: "#E8435A",
    spotlight: "rgba(92, 15, 38, 0.12)",
    iconBg: "#FDF4F6",
    iconColor: "#5C0F26",
    tag: "Enterprise AI & GenAI",
  },
  software: {
    beamFrom: "#1D4ED8",
    beamTo: "#38BDF8",
    spotlight: "rgba(29, 78, 216, 0.12)",
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    tag: "Custom Apps & ERP",
  },
  hardware: {
    beamFrom: "#1E3A8A",
    beamTo: "#10B981",
    spotlight: "rgba(30, 58, 138, 0.12)",
    iconBg: "#F8FAFC",
    iconColor: "#1E3A8A",
    tag: "OEM Infrastructure",
  },
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = HOME_PILLARS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-28 overflow-hidden" aria-labelledby="services-title">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2
            id="services-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)" }}
          >
            Everything your business needs,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              from one team
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            AI, training, and hardware — design, supply, deployment, and support.
          </p>
        </div>

        {/* ── DESKTOP VIEW: 3-column Grid with Animated Border Beams & Spotlights ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
          {HOME_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Server;
            const theme = THEMES[pillar.id] || THEMES.ai;

            return (
              <SpotlightCard
                key={pillar.id}
                beamFrom={theme.beamFrom}
                beamTo={theme.beamTo}
                spotlightColor={theme.spotlight}
                beamDuration={4.5}
                className="h-full group hover:-translate-y-1.5"
              >
                {/* Header row: Tag chip + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
                    style={{ background: theme.iconBg }}
                  >
                    <Icon size={22} style={{ color: theme.iconColor }} />
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                    style={{
                      borderColor: `${theme.beamFrom}25`,
                      background: `${theme.iconBg}`,
                      color: theme.iconColor,
                    }}
                  >
                    {theme.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-gray-900 text-2xl leading-tight mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Highlights list with colored bullets */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {pillar.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: theme.iconColor }}
                      />
                      <span className="text-sm text-gray-700 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA Button */}
                <div className="mt-auto pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold w-full py-3 rounded-2xl transition-all duration-200 group/btn"
                    style={{
                      background: theme.iconBg,
                      color: theme.iconColor,
                    }}
                  >
                    Explore {pillar.title}
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* ── MOBILE VIEW: Stacked Swipeable Deck with Border Beams ── */}
        <div className="block lg:hidden select-none">
          <div className="relative h-[480px] w-full max-w-sm mx-auto flex items-center justify-center">
            {HOME_PILLARS.map((pillar, index) => {
              const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Server;
              const theme = THEMES[pillar.id] || THEMES.ai;
              
              // Calculate offset relative to active card
              const offset = (index - activeIndex + total) % total;
              
              // Only render top 3 cards in stack
              if (offset > 2) return null;

              const isFront = offset === 0;
              const scale = 1 - offset * 0.06;
              const translateY = offset * 16;
              const zIndex = 30 - offset * 10;
              const opacity = offset === 0 ? 1 : offset === 1 ? 0.75 : 0.45;

              return (
                <motion.div
                  key={pillar.id}
                  className="absolute inset-0 w-full"
                  style={{
                    zIndex,
                    cursor: isFront ? "grab" : "pointer",
                  }}
                  animate={{
                    scale,
                    y: translateY,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={isFront ? handleDragEnd : undefined}
                  onClick={() => !isFront && setActiveIndex(index)}
                >
                  <SpotlightCard
                    beamFrom={theme.beamFrom}
                    beamTo={theme.beamTo}
                    spotlightColor={theme.spotlight}
                    beamDuration={4.5}
                    className="h-full shadow-lg"
                  >
                    {/* Header row: Tag chip + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ background: theme.iconBg }}
                      >
                        <Icon size={19} style={{ color: theme.iconColor }} />
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                        style={{
                          borderColor: `${theme.beamFrom}25`,
                          background: `${theme.iconBg}`,
                          color: theme.iconColor,
                        }}
                      >
                        {theme.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-gray-900 text-xl leading-tight mb-2.5">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    {/* Highlights list */}
                    <ul className="flex flex-col gap-2 mb-4">
                      {pillar.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: theme.iconColor }}
                          />
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="mt-auto pt-1">
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold w-full py-2.5 rounded-xl transition-colors"
                        style={{
                          background: theme.iconBg,
                          color: theme.iconColor,
                        }}
                      >
                        Explore {pillar.title}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* Swipe hint & controls */}
          <div className="flex items-center justify-between max-w-sm mx-auto mt-7 px-4">
            <button
              onClick={handlePrev}
              aria-label="Previous card"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-700 hover:text-black hover:bg-white transition-colors shadow-xs"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {HOME_PILLARS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-[#5C0F26]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next card"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-700 hover:text-black hover:bg-white transition-colors shadow-xs"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2.5 font-medium">
            Swipe left or right to switch cards
          </p>
        </div>

        {/* View All Services CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/services"
            className="glass-card inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-gray-700 text-sm transition-all duration-200 group rounded-full"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}
