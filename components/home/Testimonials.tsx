"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AVATAR_COLORS = ["#5C0F26", "#1D4ED8", "#5C0F26", "#1D4ED8", "#5C0F26", "#1D4ED8", "#5C0F26"];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list so it scrolls endlessly and seamlessly
  const allTestimonials = TESTIMONIALS.concat(TESTIMONIALS);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="testimonials-title">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* ── Left: heading & stats ── */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32 shrink-0">
            <SectionLabel>Client Stories</SectionLabel>
            <h2
              id="testimonials-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              What our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
              >
                clients say
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-sm">
              Real results from real organizations across India. From educational institutions to rapid-growth enterprises.
            </p>

            {/* Rating */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} size={14} fill="#5C0F26" stroke="none" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-sm text-gray-400">/ 5 average rating</span>
            </div>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "200+", label: "Clients" },
                { value: "30+",  label: "Years"   },
                { value: "50+",  label: "Engineers"},
              ].map(({ value, label }) => (
                <div key={label} className="glass-card rounded-2xl p-4 text-center">
                  <p className="font-display font-extrabold text-xl text-gray-900 leading-none mb-1"
                    style={{ color: "#5C0F26" }}>{value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-6 font-medium">
              💡 Hover to pause or scroll to explore all testimonials
            </p>
          </div>

          {/* ── Right: Continuous Downward Ticker + Scrollable Container ── */}
          <div
            className="w-full flex-1 relative h-[560px] sm:h-[600px] overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top & Bottom gradient fade masks for seamless ticker look */}
            <div
              className="absolute top-0 left-0 right-0 h-16 z-20 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #ede8f2 0%, transparent 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none"
              style={{ background: "linear-gradient(to top, #ede8f2 0%, transparent 100%)" }}
            />

            {/* Scrollable ticker wrapper */}
            <div className="h-full overflow-y-auto scrollbar-hide py-4 px-1">
              <div
                className="flex flex-col gap-4"
                style={{
                  animation: "ticker-down 32s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {allTestimonials.map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-[#5C0F26]/30 bg-white/90 backdrop-blur-md"
                  >
                    {/* Top row with 5 stars and quote mark */}
                    <div className="flex items-start justify-between mb-3.5">
                      <div className="flex gap-0.5">
                        {Array(5).fill(null).map((_, i) => (
                          <Star key={i} size={12} fill="#5C0F26" stroke="none" />
                        ))}
                      </div>
                      <Quote size={18} className="text-gray-300" />
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-5">
                      "{t.quote}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs"
                        style={{ background: AVATAR_COLORS[idx % AVATAR_COLORS.length] }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-none mb-1">{t.name}</p>
                        <p className="text-xs text-gray-400 font-medium">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
