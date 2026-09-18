import type { Metadata } from "next";
import Link from "next/link";
import { Server, Monitor, HardDrive, ShieldCheck, Network, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ResellerTicker } from "@/components/home/PartnersStrip";

export const metadata: Metadata = {
  title: "Enterprise Hardware & Authorized Reseller | Comptech Enterprises",
  description:
    "Authorized OEM hardware partner for Dell, HP, Lenovo, Apple, Intel, NVIDIA, and Cisco. Genuine enterprise servers, storage, PCs, networking, and CCTV.",
  alternates: {
    canonical: "/hardware",
  },
};

const HARDWARE_PILLARS = [
  {
    Icon: Server,
    title: "Servers & Compute",
    desc: "Dell PowerEdge, HPE ProLiant, and Lenovo ThinkSystem servers engineered for high availability and enterprise virtualization.",
    brands: ["Dell", "HP", "Lenovo", "Intel"],
    items: ["Rack & Tower Servers", "GPU Compute Nodes", "High-Density Blades", "Mission-Critical Clusters"],
  },
  {
    Icon: HardDrive,
    title: "Storage & SAN/NAS",
    desc: "Enterprise unified storage arrays, high-speed flash SAN, backup appliances, and scalable object storage.",
    brands: ["Dell EMC", "HPE Nimble", "Synology", "Samsung"],
    items: ["All-Flash Arrays", "Hybrid Storage", "Enterprise Backup", "Cold Archive Storage"],
  },
  {
    Icon: Monitor,
    title: "Workstations & Commercial PCs",
    desc: "Commercial desktops, performance laptops, mobile workstations, and thin clients for business productivity.",
    brands: ["Apple", "HP", "Dell", "Lenovo"],
    items: ["Engineering Workstations", "Enterprise Laptops", "All-in-One Desktops", "Thin Client Fleets"],
  },
  {
    Icon: Network,
    title: "Enterprise Networking & Security",
    desc: "Managed core switches, wireless APs, next-gen firewalls, CCTV surveillance, and structured cabling.",
    brands: ["Cisco", "CP Plus", "Honeywell", "PRAMA"],
    items: ["L2/L3 Core Switching", "Enterprise Wi-Fi 6", "IP CCTV Surveillance", "Optical Fiber Cabling"],
  },
];

export default function HardwarePage() {
  return (
    <>
      <Navbar />
      <main className="glass-mesh-page">
        {/* Page Hero */}
        <PageHero
          badge="Hardware & Infrastructure"
          title={
            <>
              Enterprise IT Hardware &amp;{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #1E3A8A, #10B981)" }}>
                OEM Solutions
              </span>
            </>
          }
          subtitle="Genuine enterprise servers, storage, workstations, networking, and surveillance from certified tier-1 brand partnerships."
        />

        {/* Authorized Reseller Ticker */}
        <div className="py-8 bg-white/80 border-y border-gray-100 backdrop-blur-md">
          <ResellerTicker />
        </div>

        {/* Hardware Offerings Grid */}
        <section className="py-20 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel className="justify-center mb-3">Hardware Portfolio</SectionLabel>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
                Enterprise Hardware Engineered for Zero Downtime
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                As certified partners for global technology leaders, we provide genuine procurement, official OEM warranties, and certified deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HARDWARE_PILLARS.map((pillar, i) => {
                const Icon = pillar.Icon;
                return (
                  <RevealWrapper key={pillar.title} delay={i * 100}>
                    <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                            <Icon size={24} />
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {pillar.brands.map((b) => (
                              <span key={b} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                          {pillar.desc}
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {pillar.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                              <CheckCircle2 size={15} className="text-blue-700 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-800 hover:text-blue-700 font-semibold text-sm transition-colors border border-gray-200/60"
                      >
                        <span>Request Hardware Quote</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-3">
                  Need OEM Hardware Sizing or Pricing?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  Talk directly with our certified enterprise infrastructure engineers for competitive pricing, availability, and official OEM warranty support.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-8 py-4 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg"
              >
                Talk to a Hardware Specialist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
