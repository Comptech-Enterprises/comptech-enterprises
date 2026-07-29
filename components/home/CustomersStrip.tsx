"use client";

import { motion } from "framer-motion";
import { NeuralField } from "@/components/ui/NeuralField";

/**
 * Our Customers — dual-row animated marquee of client names.
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

// split into two rows for opposing-direction marquees
const ROW_A = CUSTOMERS.filter((_, i) => i % 2 === 0);
const ROW_B = CUSTOMERS.filter((_, i) => i % 2 === 1);

function Pill({ name }: { name: string }) {
  return (
    <li className="shrink-0 mx-2.5">
      <div className="group flex items-center gap-3 rounded-full border border-gray-100 bg-white px-6 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E8435A]/30">
        <span
          className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125"
          style={{ background: "#E8435A" }}
          aria-hidden
        />
        <span className="font-display font-semibold text-base lg:text-lg text-gray-700 whitespace-nowrap transition-colors duration-300 group-hover:text-gray-900">
          {name}
        </span>
      </div>
    </li>
  );
}

function Marquee({
  items,
  direction = "left",
  duration = 44,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="relative overflow-hidden py-2">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-32 z-10 bg-gradient-to-l from-white to-transparent" />

      <ul
        className="flex w-max hover:[animation-play-state:paused]"
        style={{
          animation: `customers-marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((name, i) => (
          <Pill key={`${name}-${i}`} name={name} />
        ))}
      </ul>
    </div>
  );
}

export function CustomersStrip() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #faf7f8 45%, #f8f9ff 100%)",
      }}
      aria-label="Our customers"
    >
      <div className="absolute inset-0">
        <NeuralField color="92, 15, 38" opacity={0.16} density={30} />
      </div>

      {/* soft glow accents */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#5C0F26" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#003DA5" }}
        aria-hidden
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-12 lg:mb-14 text-center"
      >
        <p
          className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
          style={{ color: "#5C0F26" }}
        >
          Our Customers
        </p>
        <h2
          className="font-display font-extrabold text-gray-900 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
        >
          Trusted by{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)",
            }}
          >
            organizations
          </span>{" "}
          across India
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto mt-4">
          From hospitals to universities to enterprises — teams rely on Comptech
          to keep their infrastructure running.
        </p>
      </motion.div>

      {/* Dual-row marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-col gap-3"
      >
        <Marquee items={ROW_A} direction="left" duration={46} />
        <Marquee items={ROW_B} direction="right" duration={52} />
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
