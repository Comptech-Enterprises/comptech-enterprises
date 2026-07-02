"use client";

import Link from "next/link";
import { ArrowRight, Server, Monitor, Cpu, Database, Network, ShieldCheck, Cloud, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const ICONS: Record<string, React.ElementType> = {
  server:   Server,
  monitor:  Monitor,
  cpu:      Cpu,
  database: Database,
  network:  Network,
  shield:   ShieldCheck,
  cloud:    Cloud,
  tool:     Wrench,
};

const ICON_COLORS = [
  { bg: "#FDF4F6", icon: "#5C0F26" },
  { bg: "#EFF6FF", icon: "#1D4ED8" },
  { bg: "#F0FDF4", icon: "#15803D" },
  { bg: "#FFF7ED", icon: "#C2410C" },
  { bg: "#F5F3FF", icon: "#7C3AED" },
  { bg: "#ECFDF5", icon: "#047857" },
  { bg: "#FEF9C3", icon: "#854D0E" },
  { bg: "#FDF4F6", icon: "#5C0F26" },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDF8F9]" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">What We Do</SectionLabel>
          <h2
            id="services-title"
            className="font-display font-extrabold text-gray-900 text-balance max-w-2xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Everything your business needs, from one team
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            From server room to cloud — design, supply, deployment, and maintenance. No juggling multiple vendors.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] ?? Server;
            const colors = ICON_COLORS[idx % ICON_COLORS.length];
            return (
              <motion.div
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } } }}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col gap-4 rounded-2xl bg-white p-6 h-full overflow-hidden transition-all duration-300 hover:shadow-md"
                  style={{
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Top accent on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                    style={{ background: colors.icon }}
                  />

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: colors.bg }}
                  >
                    <Icon size={18} style={{ color: colors.icon }} />
                  </div>

                  <div className="flex-1">
                    <p className="font-display font-bold text-[15px] text-gray-900 leading-tight mb-1.5">{service.title}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>

                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-auto transition-all duration-200 group-hover:gap-2"
                    style={{ color: colors.icon }}
                  >
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 font-semibold text-gray-700 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
          >
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
