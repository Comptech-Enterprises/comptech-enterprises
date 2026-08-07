"use client";

import { motion } from "framer-motion";

/**
 * Our Customers — dark, single-row marquee of client names on tinted "chips",
 * with a decorative purple flight-path snaking through the section.
 *
 * These are placeholder client names; swap them for real customer names
 * (or drop in logos under public/customers/ and render <Image> instead of text).
 */
const CUSTOMERS = [
  "Apollo Hospitals",
  "Delhi University",
  "Municipal Corporation",
  "Reliance Retail",
  "State Bank of India",
  "Fortis Healthcare",
  "Larsen & Toubro",
  "Indian Oil",
  "Max Life",
  "Tata Motors",
  "HDFC Bank",
  "Wipro",
  "NTPC",
  "Bharat Electronics",
  "Godrej",
  "DLF Group",
];

function Chip({ name }: { name: string }) {
  return (
    <li className="shrink-0 mx-2.5">
      <div className="group flex items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 px-8 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E8435A]/30">
        <span className="font-display font-bold text-lg lg:text-xl text-gray-600 whitespace-nowrap transition-colors duration-300 group-hover:text-gray-900">
          {name}
        </span>
      </div>
    </li>
  );
}

function Marquee({
  items,
  direction = "left",
  duration = 48,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="relative overflow-hidden py-2">
      {/* edge fades into the black background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-40 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-40 z-10 bg-gradient-to-l from-white to-transparent" />

      <ul
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: `customers-marquee-${direction} ${duration}s linear infinite` }}
      >
        {[...items, ...items].map((name, i) => (
          <Chip key={`${name}-${i}`} name={name} />
        ))}
      </ul>
    </div>
  );
}

export function CustomersStrip() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#ffffff" }}
      aria-label="Our customers"
    >
      {/* soft brand glows */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#5C0F26" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-[0.06]"
        style={{ background: "#E8435A" }}
        aria-hidden
      />

      {/* top & bottom white fades — blend seamlessly into neighbouring sections */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 z-[5]"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, transparent 100%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-[5]"
        style={{ background: "linear-gradient(to top, #ffffff 0%, transparent 100%)" }}
        aria-hidden
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-14 lg:mb-20"
      >
        <h2
          className="font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight max-w-2xl"
          style={{ fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)" }}
        >
          The brands who{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(120deg, #5C0F26, #E8435A)" }}
          >
            trust us
          </span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-md mt-4">
          From hospitals to universities to enterprises — teams rely on Comptech
          to keep their infrastructure running.
        </p>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10"
      >
        <Marquee items={CUSTOMERS} direction="left" duration={50} />
      </motion.div>

      <style jsx>{`
        @keyframes customers-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes customers-marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          ul {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
