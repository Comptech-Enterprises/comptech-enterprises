import type { Metadata } from "next";
import Link from "next/link";
import { Server, Database, Wind, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Data Centre & Server Room Solutions",
  description:
    "Design, supply, and installation of server racks, APC/Vertiv UPS power distribution, precision cooling, and structured cabling for enterprise data centres.",
};

const DC_SOLUTIONS = [
  {
    icon: Zap,
    title: "Power Distribution & Backup",
    desc: "APC, Schneider Electric, and Vertiv online UPS systems, static transfer switches (STS), and intelligent PDUs mapped for redundant (N+1 or 2N) topologies.",
  },
  {
    icon: Wind,
    title: "Precision Cooling & Containment",
    desc: "In-row cooling units, hot/cold aisle containment setups, and smart environmental monitoring to lower Power Usage Effectiveness (PUE).",
  },
  {
    icon: Server,
    title: "Structured Cable Design",
    desc: "TIA-568 and ISO/IEC 11801 compliant Cat6A copper and OM3/OM4 fiber backbones, patch panels, and overhead cable routing trays.",
  },
  {
    icon: Shield,
    title: "Physical Monitoring & Fire Suppression",
    desc: "Gas-based fire suppression (FM200/Novec 1230), water leak detection systems, and IP cameras for physical security.",
  },
];

export default function DatacenterPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / Data Centre"
          title={
            <>
              Data Centre Build &amp; <span className="text-gradient-blue font-extrabold">Infrastructure Solutions</span>
            </>
          }
          subtitle="Turnkey server room and data centre construction. From structured fiber cabling to Vertiv/APC UPS systems and precision HVAC containment."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Data Centre Solutions" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Site Survey</Link>
              <a href="#solutions" className="btn-outline-white btn btn-lg">View Components</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Infrastructure Design</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Constructing High-Availability Server Rooms
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  A data centre is only as reliable as its weakest link. We design and install every component of your physical server room environment—ensuring that power, cooling, cabling, and safety systems work together to sustain uninterrupted operations.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Whether you are building a 2-rack branch office server closet or a multi-megawatt enterprise data centre, our engineers perform thermal calculations, power load calculations, and structured cable layout blueprints prior to execution.
                </p>
                <div className="flex flex-col gap-3">
                  {["Redundant APC / Vertiv UPS power provisioning", "Precision in-row cooling & aisle containment", "Certified Cat6A & Fiber trunk terminations"].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-900 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-lines opacity-5" />
                  <div className="relative z-10">
                    <h3 className="font-display font-extrabold text-xl mb-6">Thermal &amp; Power Targets</h3>
                    <div className="flex flex-col gap-6">
                      {[
                        { label: "Target PUE (Power Usage Effectiveness)", value: "< 1.4", desc: "Energy efficient cooling configuration" },
                        { label: "Power Redundancy SLA", value: "99.999%", desc: "Failover testing with active dual-paths" },
                        { label: "Structured Cabling Warranty", value: "25 Years", desc: "OEM-backed certification on copper/fiber" },
                        { label: "Environmental Audit", value: "Included", desc: "Thermal mapping & airflow balance check" },
                      ].map((t) => (
                        <div key={t.label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0 last:pb-0">
                          <div>
                            <div className="text-sm font-medium text-white/80">{t.label}</div>
                            <div className="text-xs text-white/40">{t.desc}</div>
                          </div>
                          <span className="font-display font-black text-xl text-red-400">{t.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Solutions Section ── */}
        <section id="solutions" className="py-24 bg-gray-50 border-t border-b border-gray-100" aria-labelledby="solutions-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Design Elements</SectionLabel>
              <h2 id="solutions-title" className="font-display font-extrabold text-display-md text-gray-900">
                Core Data Centre Engineering
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Comprehensive hardware and environment buildouts to support your compute nodes.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              {DC_SOLUTIONS.map((sol, idx) => {
                const Icon = sol.icon;
                return (
                  <RevealWrapper key={sol.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{sol.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{sol.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Request Proposal
                      </Link>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
