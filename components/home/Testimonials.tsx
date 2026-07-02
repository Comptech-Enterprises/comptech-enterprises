"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AVATAR_COLORS = [
  "#5C0F26",
  "#1D4ED8",
  "#047857",
  "#C2410C",
  "#7C3AED",
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  const prev = useCallback(() => setActive((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setActive((c) => (c + 1) % count), [count]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleIndices = [
    (active) % count,
    (active + 1) % count,
    (active + 2) % count,
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FDF8F9]" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="text-center mb-14">
          <SectionLabel className="justify-center">Client Stories</SectionLabel>
          <h2
            id="testimonials-title"
            className="font-display font-extrabold text-gray-900 text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            What our clients actually say
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            We&rsquo;ve been doing this long enough to know that the real measure of our work is how clients feel — not just the uptime numbers.
          </p>
        </RevealWrapper>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {visibleIndices.map((idx, pos) => {
            const t = TESTIMONIALS[idx];
            const avatarColor = AVATAR_COLORS[idx % AVATAR_COLORS.length];
            const isCenter = pos === 1;
            return (
              <div
                key={`${idx}-${pos}`}
                className="relative bg-white rounded-3xl p-7 flex flex-col transition-all duration-500"
                style={{
                  border: isCenter ? `1.5px solid rgba(92,15,38,0.18)` : "1px solid rgba(0,0,0,0.07)",
                  boxShadow: isCenter
                    ? "0 8px 32px rgba(92,15,38,0.1), 0 2px 8px rgba(0,0,0,0.04)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Quote icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "#FDF4F6" }}
                >
                  <Quote size={16} style={{ color: "#5C0F26" }} />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-7 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shrink-0"
                    style={{ background: avatarColor }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.title}</div>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5">
                    {Array(5).fill(null).map((_, s) => (
                      <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-[#5C0F26] hover:text-[#5C0F26] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? "#5C0F26" : "#D1D5DB",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-[#5C0F26] hover:text-[#5C0F26] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
