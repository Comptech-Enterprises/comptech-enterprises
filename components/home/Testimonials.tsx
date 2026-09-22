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
    <section className="relative py-10 lg:py-14 overflow-hidden" aria-labelledby="testimonials-title">
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

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "200+", label: "Clients" },
                { value: "30+",  label: "Years"   },
                { value: "50+",  label: "Agents Deployed" },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card rounded-2xl p-4 text-center">
                  <p className="font-display font-extrabold text-xl text-gray-900 leading-none mb-1"
                    style={{ color: "#5C0F26" }}>{value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                </div>
              ))}
            </div>


          </div>

          {/* ── Right: Continuous Horizontal Carousel ── */}
          <div
            className="w-full flex-1 relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left & Right gradient fade masks for seamless ticker look */}
            <div
              className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 z-20 pointer-events-none"
              style={{ background: "linear-gradient(to right, #ede8f2 0%, transparent 100%)" }}
            />
            <div
              className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 z-20 pointer-events-none"
              style={{ background: "linear-gradient(to left, #ede8f2 0%, transparent 100%)" }}
            />

            {/* Auto-scrolling ticker wrapper */}
            <div className="overflow-hidden py-2">
              <div
                className="flex gap-4 w-max"
                style={{
                  animation: "ticker-scroll 36s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {allTestimonials.map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="glass-card rounded-2xl p-6 w-[320px] sm:w-[360px] shrink-0 transition-all duration-300 hover:shadow-lg hover:border-[#5C0F26]/30 bg-white/90 backdrop-blur-md"
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
