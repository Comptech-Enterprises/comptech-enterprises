"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Workflow, Brain, Rocket, Check, type LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Step {
  step: string;
  kicker: string;
  title: string;
  desc: string;
  points: string[];
  icon: LucideIcon;
  accent: string;
  bg: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    kicker: "Train",
    title: "Upskill your team",
    desc: "Hands-on workshops that make your people genuinely confident with AI tools — and how to apply them to real work, safely.",
    points: ["Workshops for teams & leadership", "Practical, tool-focused curriculum", "Build lasting in-house capability"],
    icon: GraduationCap,
    accent: "#9B1840",
    bg: "linear-gradient(135deg, #3F0A1A 0%, #2A0812 100%)",
  },
  {
    step: "02",
    kicker: "Design",
    title: "Map the workflow to an agent",
    desc: "We pinpoint the task eating your team's time and design an AI agent around exactly how you already work.",
    points: ["Identify high-value, repetitive tasks", "Design around your real workflow", "Clear scope, timeline & success metrics"],
    icon: Workflow,
    accent: "#C21E45",
    bg: "linear-gradient(135deg, #4A0C1F 0%, #2A0812 100%)",
  },
  {
    step: "03",
    kicker: "Build",
    title: "Engineer & integrate securely",
    desc: "Our engineers build the agent and wire it into your existing tools — with your data kept private, on your terms.",
    points: ["Integrates with CRM, email & calendar", "Your data stays private", "Tested against real scenarios"],
    icon: Brain,
    accent: "#E8435A",
    bg: "linear-gradient(135deg, #5C0F26 0%, #3F0A1A 100%)",
  },
  {
    step: "04",
    kicker: "Deploy",
    title: "Launch, measure, iterate",
    desc: "We deploy with monitoring, track real outcomes and ROI, and keep improving the agent as your needs evolve.",
    points: ["Go live with monitoring", "Track real outcomes & ROI", "Continuous improvement over time"],
    icon: Rocket,
    accent: "#F0679A",
    bg: "linear-gradient(135deg, #4E0D21 0%, #300813 100%)",
  },
];

const AUTO_MS = 4500;

export function AIHowItWorks() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), AUTO_MS);
    return () => clearInterval(id);
  }, [auto]);

  const cur = STEPS[active];
  const Icon = cur.icon;

  const select = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="how-title" onMouseEnter={() => setAuto(false)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionLabel>How It Works</SectionLabel>
        <h2
          id="how-title"
          className="font-display font-extrabold text-gray-900 tracking-tight mt-3 text-balance"
          style={{ fontSize: "clamp(1.9rem, 3.7vw, 2.9rem)" }}
        >
          From first workshop to working agent —{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
            in four steps
          </span>
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-14 items-stretch">
          {/* Left — tab list */}
          <div className="flex flex-col gap-2.5">
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.step}
                  onClick={() => select(i)}
                  className="group text-left rounded-2xl border p-4 lg:p-5 flex items-center gap-4 transition-all duration-300"
                  style={{
                    borderColor: on ? `${s.accent}55` : "#EFEFF2",
                    background: on ? `${s.accent}0D` : "#fff",
                    boxShadow: on ? `0 8px 24px ${s.accent}22` : "none",
                  }}
                  aria-pressed={on}
                >
                  <span
                    className="font-display font-extrabold text-2xl lg:text-3xl leading-none w-10 shrink-0 transition-colors duration-300"
                    style={{ color: on ? s.accent : "#C9C9D0" }}
                  >
                    {s.step}
                  </span>
                  <span className="flex-1">
                    <span
                      className="block text-[11px] font-bold uppercase tracking-[0.18em] mb-0.5 transition-colors duration-300"
                      style={{ color: on ? s.accent : "#9CA3AF" }}
                    >
                      {s.kicker}
                    </span>
                    <span className="block text-sm lg:text-base font-semibold text-gray-900 leading-tight">
                      {s.title}
                    </span>
                  </span>
                  {/* active progress rail */}
                  {on && (
                    <span className="hidden lg:block w-1 self-stretch rounded-full overflow-hidden" style={{ background: `${s.accent}22` }}>
                      <motion.span
                        key={active + (auto ? "-auto" : "-manual")}
                        className="block w-full rounded-full"
                        style={{ background: s.accent }}
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: auto ? AUTO_MS / 1000 : 0.4, ease: "linear" }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="relative min-h-[340px] lg:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-[2rem] p-8 lg:p-12 overflow-hidden border border-white/10 flex flex-col justify-center"
                style={{ background: cur.bg }}
              >
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: cur.accent }} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <Icon size={22} style={{ color: cur.accent }} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: cur.accent }}>
                      Step {cur.step} · {cur.kicker}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-white text-2xl lg:text-3xl leading-tight mb-4">{cur.title}</h3>
                  <p className="text-white/65 leading-relaxed max-w-lg mb-6">{cur.desc}</p>
                  <ul className="space-y-2.5">
                    {cur.points.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${cur.accent}33` }}>
                          <Check size={12} style={{ color: cur.accent }} />
                        </span>
                        <span className="text-sm text-white/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
