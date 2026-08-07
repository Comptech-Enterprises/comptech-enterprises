"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

const LINE_1 = "From server room";
const LINE_2 = "to smart business.";
const FULL_LEN = LINE_1.length + LINE_2.length;

/** Types the headline out character-by-character with a blinking caret. */
function TypewriterHeadline() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduce ? FULL_LEN : 0);

  useEffect(() => {
    if (reduce || count >= FULL_LEN) return;
    const t = setTimeout(() => setCount((c) => c + 1), count < LINE_1.length ? 65 : 55);
    return () => clearTimeout(t);
  }, [count, reduce]);

  const shown1 = LINE_1.slice(0, count);
  const shown2 = count > LINE_1.length ? LINE_2.slice(0, count - LINE_1.length) : "";
  const done = count >= FULL_LEN;
  const caretOnLine1 = count <= LINE_1.length;

  return (
    <h1
      className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-6"
      style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
      aria-label={`${LINE_1} ${LINE_2}`}
    >
      <span aria-hidden="true">
        <span>
          {shown1}
          {caretOnLine1 && !done && <Caret />}
        </span>
        <br />
        <span style={{ color: "#FFCDD5" }}>
          {shown2}
          {!caretOnLine1 && <Caret />}
        </span>
      </span>
    </h1>
  );
}

function Caret() {
  return (
    <span
      className="inline-block w-[3px] -mb-1 align-baseline animate-caret-blink"
      style={{ height: "0.95em", background: "#FFCDD5", marginLeft: "2px" }}
    />
  );
}

const TRUST_ITEMS = [
  { Icon: CheckCircle2, label: "AI agents built around your workflows" },
  { Icon: Users, label: "Hands-on AI training for your team" },
  { Icon: Clock, label: "Backed by 30 years of enterprise IT" },
];

const STATS = [
  { value: "200", suffix: "+", label: "Enterprise clients" },
  { value: "30", suffix: "+", label: "Years experience" },
  { value: "50", suffix: "+", label: "Certified engineers" },
  { value: "24", suffix: "/7", label: "AMC support" },
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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
      />
      {/* Bottom fade to white — blends into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 70%, #ffffff 100%)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center pt-12 lg:pt-16"
        style={{ minHeight: "calc(100vh - var(--nav-height))" }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-7">
            <span className="inline-block w-5 h-[2px] rounded-full bg-white" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white">
              Enterprise AI Partner · India
            </span>
          </motion.div>

          {/* Headline — typewriter */}
          <motion.div variants={itemVariants}>
            <TypewriterHeadline />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg text-white/90 max-w-lg leading-relaxed mb-9">
            Lead-gen agents, support assistants, and AI training — engineered, deployed, and maintained by Comptech.
            Real engineers, genuine expertise, honest timelines.
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
              href="/ai-solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 font-semibold text-white text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              See AI Solutions
            </Link>
          </motion.div>

          {/* Trust list */}
          <motion.ul variants={itemVariants} className="space-y-2.5 mb-12">
            {TRUST_ITEMS.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-white">
                <Icon size={15} className="shrink-0 text-white" />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 pt-8 mb-12 sm:mb-20 border-t border-white/15"
          >
            {STATS.map(({ value, suffix, label }, i) => (
              <div
                key={label}
                className={`text-center px-3 ${i % 2 === 1 ? "border-l border-white/15" : ""} ${i % 4 !== 0 ? "sm:border-l sm:border-white/15" : ""}`}
              >
                <Counter
                  value={value}
                  suffix={suffix}
                  className="font-display font-extrabold text-xl sm:text-2xl text-white leading-none mb-1 block"
                />
                <p className="text-[11px] text-white/80 leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
