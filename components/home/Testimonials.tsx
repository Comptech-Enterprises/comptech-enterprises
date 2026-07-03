"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AVATAR_COLORS = ["#5C0F26", "#1D4ED8", "#5C0F26", "#1D4ED8", "#5C0F26", "#1D4ED8"];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = TESTIMONIALS.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setActive((c) => (c + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="testimonials-title">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">Client Stories</SectionLabel>
          <h2
            id="testimonials-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            What our clients say
          </h2>
        </div>

        {/* Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} size={16} fill="#1D4ED8" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed font-medium max-w-3xl mx-auto mb-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: AVATAR_COLORS[active % AVATAR_COLORS.length] }}
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  background: i === active ? "#1D4ED8" : "#E5E7EB",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
