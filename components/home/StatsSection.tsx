"use client";

import { STATS } from "@/lib/constants";
import { Counter } from "@/components/ui/Counter";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  { title: "15+ years of enterprise IT delivery", desc: "Trusted by hospitals, universities, government bodies, and Fortune 500 subsidiaries across India since 2008." },
  { title: "OEM-certified across all major brands", desc: "50+ engineers certified by Dell, HP, Cisco, Microsoft, and NVIDIA — not generalists, specialists." },
  { title: "One vendor, end-to-end ownership", desc: "Design, procurement, deployment, and 24/7 AMC all under one roof. No finger-pointing between contractors." },
  { title: "99.9% uptime SLA, guaranteed in writing", desc: "We back every maintenance contract with a documented SLA and proactive monitoring — not just promises." },
];

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="stats-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label centered at top */}
        <RevealWrapper className="mb-12">
          <SectionLabel blue>Why Choose Comptech</SectionLabel>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — heading + reasons */}
          <RevealWrapper>
            <h2
              id="stats-title"
              className="font-display font-extrabold text-gray-900 text-balance leading-tight mb-6"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}
            >
              Relationships built on results
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              15+ years of enterprise IT delivery have earned the trust of 200+ organizations across India — and we treat each one like they&rsquo;re our only client.
            </p>

            <ul className="space-y-6">
              {REASONS.map((r, i) => (
                <RevealWrapper key={r.title} delay={i * 80}>
                  <li className="flex gap-4">
                    <div className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                      <CheckCircle2 size={18} style={{ color: "#1D4ED8" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-[15px] mb-0.5">{r.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                    </div>
                  </li>
                </RevealWrapper>
              ))}
            </ul>
          </RevealWrapper>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((stat, i) => (
              <RevealWrapper key={stat.label} delay={i * 60}>
                <div
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="font-display font-extrabold leading-none mb-2 tabular-nums"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: i % 2 === 0 ? "#1D4ED8" : "#5C0F26" }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-semibold text-gray-800 text-sm mb-0.5">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>

                  {/* bottom accent line */}
                  <div
                    className="mt-4 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: i % 2 === 0 ? "#1D4ED8" : "#5C0F26" }}
                  />
                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
