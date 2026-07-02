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

// accent alternates between blue and burgundy only
const SERVICE_META: Record<string, { accent: string; bg: string; vendors: string[] }> = {
  infrastructure: { accent: "#1D4ED8", bg: "#EFF6FF", vendors: ["Dell", "HP", "Lenovo"] },
  euc:            { accent: "#5C0F26", bg: "#FDF4F6", vendors: ["Dell", "HP", "Lenovo"] },
  ai:             { accent: "#1D4ED8", bg: "#EFF6FF", vendors: ["NVIDIA", "Intel"] },
  datacenter:     { accent: "#5C0F26", bg: "#FDF4F6", vendors: ["Dell", "HP"] },
  networking:     { accent: "#1D4ED8", bg: "#EFF6FF", vendors: ["Cisco", "Juniper", "Aruba"] },
  security:       { accent: "#5C0F26", bg: "#FDF4F6", vendors: ["Hikvision", "Dahua"] },
  cloud:          { accent: "#1D4ED8", bg: "#EFF6FF", vendors: ["Azure", "AWS", "GCP"] },
  amc:            { accent: "#5C0F26", bg: "#FDF4F6", vendors: ["24/7 SLA"] },
};

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">What We Do</SectionLabel>
          <h2
            id="services-title"
            className="font-display font-extrabold text-gray-900 text-balance max-w-2xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Everything your business needs,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              from one team
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            From server room to cloud — design, supply, deployment, and maintenance. No juggling multiple vendors.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Server;
            const meta = SERVICE_META[service.id] ?? { accent: "#5C0F26", bg: "#FDF4F6", vendors: [] };
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
                }}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col gap-4 rounded-2xl bg-white p-6 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Colored top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                    style={{ background: meta.accent }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: meta.bg }}
                  >
                    <Icon size={22} style={{ color: meta.accent }} />
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1">
                    <p className="font-display font-bold text-[15px] text-gray-900 leading-tight mb-1.5">
                      {service.title}
                    </p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Vendor badges */}
                  {meta.vendors.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {meta.vendors.map((name) => (
                        <span
                          key={name}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide text-gray-500 bg-gray-100 border border-gray-200"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: "#1D4ED8" }}
                  >
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 font-semibold text-gray-700 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
          >
            View All Services{" "}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
