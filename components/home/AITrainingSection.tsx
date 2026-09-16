"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PLACEHOLDERS = [
  { id: 1, bg: "linear-gradient(135deg, #2D0A14 0%, #5C0F26 50%, #8B1E3F 100%)" },
  { id: 2, bg: "linear-gradient(135deg, #042F2E 0%, #0D9488 50%, #14B8A6 100%)" },
  { id: 3, bg: "linear-gradient(135deg, #1E1B4B 0%, #4338CA 50%, #6366F1 100%)" },
  { id: 4, bg: "linear-gradient(135deg, #451A03 0%, #D97706 50%, #F59E0B 100%)" },
  { id: 5, bg: "linear-gradient(135deg, #0F172A 0%, #334155 50%, #64748B 100%)" },
  { id: 6, bg: "linear-gradient(135deg, #500724 0%, #BE185D 50%, #EC4899 100%)" },
];

export function AITrainingSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = PLACEHOLDERS.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden" aria-label="AI Training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label: — AI TRAINING */}
        <div className="mb-6">
          <SectionLabel>AI Training</SectionLabel>
        </div>

        {/* Slider Controls */}
        <div className="relative group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          
          {/* Images Track */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${index * 33.333}%)`,
              }}
            >
              {[...PLACEHOLDERS, ...PLACEHOLDERS].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                >
                  <div
                    className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-gray-100 flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]"
                    style={{ background: item.bg }}
                  >
                    {/* Subtle grid pattern */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Placeholder Icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white/80">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center mb-2 shadow-inner">
                        <ImageIcon size={28} className="text-white" />
                      </div>
                      <span className="text-xs font-mono tracking-wider text-white/70 uppercase">
                        Image Placeholder
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md border border-gray-200/80 flex items-center justify-center transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md border border-gray-200/80 flex items-center justify-center transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PLACEHOLDERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="py-1 focus:outline-none"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index % total === idx ? "w-6 bg-[#5C0F26]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
