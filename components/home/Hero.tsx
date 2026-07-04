"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  { Icon: CheckCircle2, label: "Genuine OEM hardware, every time" },
  { Icon: Users, label: "Dedicated engineer for your account" },
  { Icon: Clock, label: "24/7 AMC support — zero hold queues" },
];

const STATS = [
  { value: "200+", label: "Enterprise clients" },
  { value: "15+", label: "Years experience" },
  { value: "50+", label: "Certified engineers" },
  { value: "24/7", label: "AMC support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/images/banner.webp"
        alt="Enterprise workspace"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Subtle overlay — just enough for text legibility */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.28)" }} />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-start"
        style={{ minHeight: "calc(100vh - var(--nav-height))", paddingTop: "clamp(3rem, 10vh, 6rem)" }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-7">
            <span className="inline-block w-5 h-[2px] rounded-full bg-gray-900" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-900">
              Enterprise IT Partner · Janakpuri, Delhi, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Your IT team&rsquo;s most
            <br />
            <span style={{ color: "#5C0F26" }}>reliable partner.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg text-gray-800 max-w-lg leading-relaxed mb-9">
            We design, supply, deploy, and maintain enterprise IT infrastructure — so your team can focus on the work
            that matters. Real engineers, genuine OEM parts, honest timelines.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
              style={{ background: "#5C0F26", boxShadow: "0 4px 18px rgba(92,15,38,0.5)" }}
            >
              Get Free Proposal <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-900/30 bg-white/30 backdrop-blur-sm px-7 py-3.5 font-semibold text-gray-900 text-sm hover:bg-white/50 hover:border-gray-900/50 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust list */}
          <motion.ul variants={itemVariants} className="space-y-2.5 mb-12">
            {TRUST_ITEMS.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-gray-900">
                <Icon size={15} className="shrink-0 text-gray-900" />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-4 gap-0 pt-8"
            style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className="text-center"
                style={{
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none",
                  padding: "0 12px",
                }}
              >
                <p className="font-display font-extrabold text-2xl text-gray-900 leading-none mb-1">{value}</p>
                <p className="text-[11px] text-gray-700 leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
