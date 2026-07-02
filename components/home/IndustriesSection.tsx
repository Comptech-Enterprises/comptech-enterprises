"use client";

import { INDUSTRIES } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  HeartPulse, GraduationCap, Landmark, Factory, ShoppingBag, Banknote, Code2,
} from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  "heart-pulse":   HeartPulse,
  "graduation":    GraduationCap,
  "landmark":      Landmark,
  "factory":       Factory,
  "shopping-bag":  ShoppingBag,
  "banknote":      Banknote,
  "code-2":        Code2,
};

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="industries-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="text-center mb-14">
          <SectionLabel className="justify-center" blue>Industries Served</SectionLabel>
          <h2
            id="industries-title"
            className="font-display font-extrabold text-gray-900 text-balance max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            We work across every sector
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {INDUSTRIES.map(({ icon, title, desc }, i) => {
            const Icon = ICONS[icon] ?? HeartPulse;
            return (
              <RevealWrapper key={title} delay={i * 50}>
                <div
                  className="card-lift group rounded-3xl p-6 text-center transition-all duration-300 h-full cursor-default"
                  style={{
                    background: "#F9F0F2",
                    border: "1px solid rgba(92,15,38,0.07)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "#5C0F26";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#5C0F26";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "#F9F0F2";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(92,15,38,0.07)";
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 group-hover:bg-white/20 group-hover:border-white/20 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon size={22} className="group-hover:text-white transition-colors duration-300" style={{ color: "#5C0F26" }} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-gray-900 group-hover:text-white mb-1.5 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300 hidden sm:block">
                    {desc}
                  </p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
