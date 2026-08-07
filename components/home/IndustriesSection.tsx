"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NeuralField } from "@/components/ui/NeuralField";
import {
  Building2, HeartPulse, Megaphone, GraduationCap, Factory, Banknote, ArrowRight,
} from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  "building":      Building2,
  "heart-pulse":   HeartPulse,
  "megaphone":     Megaphone,
  "graduation":    GraduationCap,
  "factory":       Factory,
  "banknote":      Banknote,
};

export function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = INDUSTRIES.length;

  // active card is driven by how far we've scrolled through the pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    setActive(idx);
  });

  return (
    // tall wrapper — the extra height is the scroll "runway" for the pinned content
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${n * 85}vh` }}
      aria-labelledby="industries-title"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <NeuralField color="92, 15, 38" opacity={0.18} density={34} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* LEFT — heading (+ desktop list) */}
            <div className="text-center lg:text-left">
              <SectionLabel className="justify-center lg:justify-start" blue>
                Industries Served
              </SectionLabel>
              <h2
                id="industries-title"
                className="font-display font-extrabold text-gray-900 text-balance mb-4 lg:mb-5"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
              >
                We work across every sector
              </h2>
              <p className="hidden lg:block text-gray-500 text-base leading-relaxed max-w-md mb-8">
                From property groups to hospitals to trading floors — we tailor
                infrastructure to how each industry actually runs. Keep scrolling
                to explore.
              </p>

              {/* desktop-only detailed list */}
              <ul className="hidden lg:flex flex-col gap-1">
                {INDUSTRIES.map(({ icon, title }, i) => {
                  const Icon = ICONS[icon] ?? HeartPulse;
                  const isActive = i === active;
                  return (
                    <li
                      key={title}
                      className="flex items-center gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300"
                      style={{ background: isActive ? "#F9F0F2" : "transparent" }}
                    >
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-all duration-300"
                        style={{
                          background: isActive ? "#5C0F26" : "#F9F0F2",
                          color: isActive ? "#ffffff" : "#5C0F26",
                          transform: isActive ? "scale(1)" : "scale(0.92)",
                        }}
                      >
                        <Icon size={17} />
                      </span>
                      <span
                        className="font-display font-bold text-base transition-colors duration-300"
                        style={{ color: isActive ? "#5C0F26" : "#9ca3af" }}
                      >
                        {title}
                      </span>
                      <ArrowRight
                        size={16}
                        className="ml-auto transition-all duration-300"
                        style={{
                          color: "#5C0F26",
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "translateX(0)" : "translateX(-6px)",
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT — stacked card deck */}
            <div className="relative h-[54vh] max-h-[440px] lg:h-[560px] lg:max-h-none flex items-center justify-center">
              {INDUSTRIES.map(({ icon, title, desc }, i) => {
                const Icon = ICONS[icon] ?? HeartPulse;
                const offset = (i - active + n) % n;
                const isFront = offset === 0;
                const stackDepth = Math.min(offset, 3);

                return (
                  <motion.div
                    key={title}
                    className="absolute w-full max-w-lg rounded-[2rem] p-7 sm:p-10 lg:p-12 shadow-2xl"
                    style={{
                      background: isFront
                        ? "linear-gradient(155deg, #5C0F26 0%, #7d1533 100%)"
                        : "#ffffff",
                      border: isFront ? "none" : "1px solid rgba(92,15,38,0.08)",
                      transformOrigin: "center",
                    }}
                    animate={{
                      y: stackDepth * 24,
                      scale: 1 - stackDepth * 0.05,
                      rotate: isFront ? 0 : offset % 2 === 0 ? 2.5 : -2.5,
                      opacity: offset > 3 ? 0 : 1,
                      zIndex: n - offset,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  >
                    <div
                      className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-3xl mb-6 lg:mb-8"
                      style={{
                        background: isFront ? "rgba(255,255,255,0.15)" : "#F9F0F2",
                        color: isFront ? "#ffffff" : "#5C0F26",
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3
                      className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-3 lg:mb-4"
                      style={{ color: isFront ? "#ffffff" : "#111827" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: isFront ? "rgba(255,255,255,0.82)" : "#6b7280" }}
                    >
                      {desc}
                    </p>

                    {isFront && (
                      <div className="mt-6 lg:mt-10 flex items-center gap-3 text-sm font-semibold text-white/90">
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <span className="w-10 h-px bg-white/30" />
                        <span>{String(n).padStart(2, "0")}</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* mobile-only progress dots */}
            <div className="flex lg:hidden justify-center gap-2 -mt-2">
              {INDUSTRIES.map(({ title }, i) => (
                <span
                  key={title}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    background: i === active ? "#5C0F26" : "#E5D5DA",
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
