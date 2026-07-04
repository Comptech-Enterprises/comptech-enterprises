"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AVATAR_COLORS = ["#1D4ED8", "#5C0F26", "#1D4ED8", "#5C0F26", "#1D4ED8", "#5C0F26"];
const VISIBLE = 3;

function buildQueue(start: number) {
  return Array.from({ length: VISIBLE }, (_, i) => (start + i) % TESTIMONIALS.length);
}

export function Testimonials() {
  const [start, setStart] = useState(0);
  const [queue, setQueue] = useState(() => buildQueue(0));
  const prev = useRef(queue);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => {
        const next = (s + 1) % TESTIMONIALS.length;
        prev.current = queue;
        setQueue(buildQueue(next));
        return next;
      });
    }, 2100);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* ── Left: heading ── */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 shrink-0">
            <SectionLabel>Client Stories</SectionLabel>
            <h2
              id="testimonials-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              What our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #1D4ED8, #5C0F26)" }}
              >
                clients say
              </span>
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-xs">
              Real results from real organizations. From hospitals to retail chains — here's what our partners think.
            </p>

            {/* Trust badge */}
            <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-blue-100 bg-blue-50">
              <div className="flex gap-0.5">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} size={13} fill="#1D4ED8" stroke="none" />
                ))}
              </div>
              <span className="text-xs font-semibold text-blue-700">200+ satisfied clients</span>
            </div>
          </div>

          {/* ── Right: dropping cards ── */}
          <div className="flex-1 flex flex-col gap-4 overflow-hidden" style={{ minHeight: 480 }}>
            <AnimatePresence initial={false}>
              {queue.map((idx, pos) => {
                const t = TESTIMONIALS[idx];
                const isNew = !prev.current.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    layout
                    initial={isNew ? { y: -80, opacity: 0, scale: 0.95 } : false}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 40, opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.33,
                      ease: [0.22, 1, 0.36, 1],
                      delay: isNew ? 0 : pos * 0.04,
                    }}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-0.5">
                        {Array(5).fill(null).map((_, i) => (
                          <Star key={i} size={12} fill="#1D4ED8" stroke="none" />
                        ))}
                      </div>
                      <Quote size={18} className="text-gray-200" />
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-5">
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                        style={{ background: AVATAR_COLORS[idx % AVATAR_COLORS.length] }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-none mb-1">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.title}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
