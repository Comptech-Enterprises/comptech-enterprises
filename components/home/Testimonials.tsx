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
    }, 3200);
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

            {/* Rating */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} size={14} fill="#1D4ED8" stroke="none" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-sm text-gray-400">/ 5 average rating</span>
            </div>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "200+", label: "Clients" },
                { value: "15+",  label: "Years"   },
                { value: "50+",  label: "Engineers"},
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center">
                  <p className="font-display font-extrabold text-xl text-gray-900 leading-none mb-1"
                    style={{ color: "#1D4ED8" }}>{value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Notable clients */}
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Trusted by</p>
              <div className="flex flex-wrap gap-2">
                {["Apollo Hospitals", "HDFC AMC", "Reliance Retail", "Mumbai University", "Tata Motors"].map((c) => (
                  <span key={c} className="px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: dropping cards ── */}
          <div className="flex-1 flex flex-col gap-4" style={{ minHeight: 480 }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {queue.map((idx) => {
                const t = TESTIMONIALS[idx];
                const isNew = !prev.current.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    initial={{ y: isNew ? -70 : 0, opacity: isNew ? 0 : 1, scale: isNew ? 0.96 : 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
