"use client";

import { useState } from "react";

const PARTNERS = [
  { name: "Dell",      color: "#007DB8" },
  { name: "HP",        color: "#0096D6" },
  { name: "Lenovo",    color: "#E1251B" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Intel",     color: "#0071C5" },
  { name: "NVIDIA",    color: "#76B900" },
  { name: "Canon",     color: "#CC0000" },
  { name: "Samsung",   color: "#1428A0" },
  { name: "Epson",     color: "#009AC7" },
  { name: "Sony",      color: "#003087" },
];

const STATS = [
  { value: "10+",  label: "OEM Partners"      },
  { value: "15+",  label: "Years Experience"  },
  { value: "200+", label: "Clients Served"    },
];

export function PartnersStrip() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section
      className="py-12"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #EFF6FF 50%, #F5F7FA 100%)" }}
      aria-label="Technology partners"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Stats row */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex items-center">
              <div className="text-center px-8">
                <p
                  className="font-display font-extrabold text-2xl leading-none mb-1"
                  style={{ color: "#1D4ED8" }}
                >
                  {value}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  {label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div className="w-px h-8 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Divider with label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
            Trusted Technology Partners
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHovered(null); }}
      >
        <div
          className="flex items-center gap-3"
          style={{
            animation: "marquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
            paddingLeft: "12px",
          }}
        >
          {items.map((p, i) => (
            <button
              key={i}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
              className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full border font-display font-semibold text-sm transition-all duration-200"
              style={{
                borderColor: hovered === p.name ? p.color : "#E5E7EB",
                color:       hovered === p.name ? p.color : "#6B7280",
                background:  hovered === p.name ? p.color + "10" : "#ffffff",
                transform:   hovered === p.name ? "scale(1.06)" : "scale(1)",
                boxShadow:   hovered === p.name ? `0 4px 14px ${p.color}30` : "none",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: p.color }}
              />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pause hint */}
      {paused && (
        <p className="text-center text-[10px] text-gray-300 mt-4 tracking-wide animate-pulse">
          Paused — move away to resume
        </p>
      )}
    </section>
  );
}
