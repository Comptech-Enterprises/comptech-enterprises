"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Server, Monitor, Cpu, Database, Network, ShieldCheck, Cloud, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

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

const SERVICE_META: Record<string, { accent: string; bg: string; gradient: string; btnGradient: string; vendors: string[]; highlights: string[] }> = {
  infrastructure: { accent: "#1D4ED8", bg: "#EFF6FF", gradient: "linear-gradient(135deg, #EFF6FF 0%, #F0EEFF 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)", vendors: ["Dell", "HP", "Lenovo"], highlights: ["Server consolidation", "Virtualisation", "Storage solutions", "Rack & stack deployment"] },
  euc:            { accent: "#5C0F26", bg: "#FDF4F6", gradient: "linear-gradient(135deg, #EFF6FF 0%, #FDF4F6 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #E8435A 100%)", vendors: ["Dell", "HP", "Lenovo"], highlights: ["Desktops & laptops", "Workstations", "Thin clients", "Device management"] },
  ai:             { accent: "#1D4ED8", bg: "#EFF6FF", gradient: "linear-gradient(135deg, #EFF6FF 0%, #F0EEFF 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)", vendors: ["NVIDIA", "Intel"],      highlights: ["GPU infrastructure", "AI workshops", "No-code AI builder", "Model deployment"] },
  datacenter:     { accent: "#5C0F26", bg: "#FDF4F6", gradient: "linear-gradient(135deg, #EFF6FF 0%, #FDF4F6 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #E8435A 100%)", vendors: ["Dell", "HP"],           highlights: ["Full DC buildouts", "Power & cooling", "Structured cabling", "Rack architecture"] },
  networking:     { accent: "#1D4ED8", bg: "#EFF6FF", gradient: "linear-gradient(135deg, #EFF6FF 0%, #F0EEFF 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)", vendors: ["Cisco", "Juniper", "Aruba"], highlights: ["LAN & SD-WAN", "Wi-Fi 6E", "Campus networking", "Network monitoring"] },
  security:       { accent: "#5C0F26", bg: "#FDF4F6", gradient: "linear-gradient(135deg, #EFF6FF 0%, #FDF4F6 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #E8435A 100%)", vendors: ["Hikvision", "Dahua"],   highlights: ["IP CCTV systems", "Access control", "AI video analytics", "Perimeter security"] },
  cloud:          { accent: "#1D4ED8", bg: "#EFF6FF", gradient: "linear-gradient(135deg, #EFF6FF 0%, #F0EEFF 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)", vendors: ["Azure", "AWS", "GCP"],  highlights: ["Cloud migration", "Hybrid architecture", "Managed cloud ops", "Cost optimisation"] },
  amc:            { accent: "#5C0F26", bg: "#FDF4F6", gradient: "linear-gradient(135deg, #EFF6FF 0%, #FDF4F6 100%)", btnGradient: "linear-gradient(135deg, #1D4ED8 0%, #E8435A 100%)", vendors: ["24/7 SLA"],             highlights: ["Proactive monitoring", "Preventive maintenance", "Rapid response", "Asset management"] },
};

export function ServicesSection() {
  const [active, setActive] = useState(SERVICES[0].id);

  const current = SERVICES.find((s) => s.id === active)!;
  const meta = SERVICE_META[active] ?? { accent: "#1D4ED8", bg: "#EFF6FF", vendors: [], highlights: [] };
  const Icon = ICONS[current.icon] ?? Server;

  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #ffffff 0%, #EFF6FF 25%, #F5F7FA 60%, #FDF4F6 85%, #ffffff 100%)" }} aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2
            id="services-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
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
          <p className="mt-3 text-lg text-gray-500 max-w-xl leading-relaxed">
            From server room to cloud — design, supply, deployment, and maintenance.
          </p>
        </div>

        {/* Interactive panel */}
        <div className="flex flex-col lg:flex-row gap-4 rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">

          {/* Sidebar tabs */}
          <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-gray-100">
            {SERVICES.map((service) => {
              const SIcon = ICONS[service.icon] ?? Server;
              const smeta = SERVICE_META[service.id];
              const isActive = service.id === active;
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(service.id)}
                  className="flex items-center gap-3 px-5 py-4 text-left transition-all duration-150 shrink-0 lg:shrink relative"
                  style={{
                    background: isActive ? (smeta?.gradient ?? "#EFF6FF") : "transparent",
                    borderRight: isActive
                      ? `3px solid transparent`
                      : "3px solid transparent",
                    borderImage: isActive
                      ? "linear-gradient(180deg, #1D4ED8, #E8435A) 1"
                      : "none",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: smeta?.bg ?? "#EFF6FF" }}
                  >
                    <SIcon size={16} style={{ color: smeta?.accent ?? "#1D4ED8" }} />
                  </div>
                  <span
                    className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal leading-tight"
                    style={{ color: isActive ? smeta?.accent ?? "#1D4ED8" : "#374151" }}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between gap-8">
            <div>
              {/* Icon + title */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: meta.bg }}
                >
                  <Icon size={30} style={{ color: meta.accent }} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: meta.accent }}>
                    Service
                  </p>
                  <h3 className="font-display font-extrabold text-gray-900 text-2xl leading-tight">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-8">
                {current.desc}
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {meta.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: meta.accent }} />
                    <span className="text-sm text-gray-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>

              {/* Vendor badges */}
              {meta.vendors.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {meta.vendors.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1 rounded-lg text-xs font-semibold border"
                      style={{ color: meta.accent, borderColor: `${meta.accent}30`, background: meta.bg }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div>
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: meta.accent }}
              >
                Learn more about {current.title} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 font-semibold text-gray-700 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}
