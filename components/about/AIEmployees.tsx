"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EMPLOYEES } from "@/components/about/data";

/** Tabbed "AI employees" showcase: steps, demo video and stats per employee. */
export function AIEmployees() {
  const [active, setActive] = useState(0);
  const emp = EMPLOYEES[active];

  return (
    <section className="bg-white py-16 lg:py-20" aria-labelledby="about-employees">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="about-employees"
            className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.025em] text-[#12161C] lg:text-5xl"
          >
            Autonomous AI employees built for real work
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Pre-engineered autonomous AI employees that automate revenue, content, and operations.
          </p>
        </div>

        <div role="tablist" aria-label="AI employees" className="mt-10 grid gap-3 md:grid-cols-3">
          {EMPLOYEES.map((e, i) => {
            const on = i === active;
            const Icon = e.icon;
            return (
              <button
                key={e.id}
                type="button"
                role="tab"
                id={`emp-tab-${e.id}`}
                aria-selected={on}
                aria-controls="emp-panel"
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                  on ? "border-[#6B0F1A] bg-[#6B0F1A] text-white" : "border-[#E5E7EB] bg-white text-[#12161C] hover:border-[#B91C1C]"
                }`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${on ? "bg-white/15" : "bg-[#FDF4F6] text-[#B91C1C]"}`}>
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{e.name}</span>
                  <span className={`block text-xs ${on ? "text-white/80" : "text-gray-500"}`}>{e.tag}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="emp-panel"
          role="tabpanel"
          aria-labelledby={`emp-tab-${emp.id}`}
          className="mt-0 rounded-b-3xl rounded-t-md border-t-[3px] border-t-[#6B0F1A] bg-white p-4 shadow-[0_10px_40px_rgba(17,8,11,0.08)] ring-1 ring-[#E5E7EB] sm:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
            <ul className="space-y-3">
              {emp.steps.map(({ t, d, icon: Icon }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FDF4F6] text-[#B91C1C]">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#12161C]">{t}</span>
                    <span className="block text-xs leading-snug text-gray-600">{d}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-[#0B0709]">
              {emp.video ? (
                <video
                  key={emp.video}
                  src={emp.video}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${emp.name} demo`}
                />
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm font-semibold text-white">{emp.name} in action</p>
                  <p className="mt-1 text-xs text-white/60">Works with {emp.chips.join(", ")}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 grid items-center gap-4 lg:grid-cols-[1fr_auto]">
            <dl className="grid grid-cols-2 overflow-hidden rounded-xl bg-[#FDF4F6] sm:grid-cols-4">
              {emp.stats.map((s) => (
                <div key={s.l} className="border-r border-[#F0D9DE] p-3 text-center last:border-r-0">
                  <dt className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[#6B0F1A]">{s.v}</dt>
                  <dd className="text-[11px] text-gray-600">{s.l}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={emp.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B91C1C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F1818]"
            >
              {emp.cta} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
