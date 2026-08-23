import Link from "next/link";
import { ArrowRight, Cpu, GraduationCap, Server, Code } from "lucide-react";
import { HOME_PILLARS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICONS = {
  cpu: Cpu,
  graduation: GraduationCap,
  server: Server,
  code: Code,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative py-12 lg:py-32 overflow-hidden" aria-labelledby="services-title">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

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
            AI, training, and hardware — design, supply, deployment, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HOME_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] ?? Server;
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="glass-card group flex flex-col p-7 lg:p-8"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                  style={{ background: "#EFF6FF" }}
                >
                  <Icon size={22} style={{ color: "#1D4ED8" }} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-center" style={{ color: "#1D4ED8" }}>
                  What we do
                </p>
                <h3 className="font-display font-extrabold text-gray-900 text-2xl leading-tight mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {pillar.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1D4ED8" }} />
                      <span className="text-sm text-gray-700 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2 text-center">
                  <span className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold w-full" style={{ color: "#1D4ED8" }}>
                    Learn more
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="glass-card inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-gray-700 text-sm transition-all duration-200 group"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}
