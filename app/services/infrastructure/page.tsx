import type { Metadata } from "next";
import Link from "next/link";
import { Server, Database, Layers, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Enterprise Infrastructure Solutions",
  description:
    "Production-grade enterprise servers, SAN/NAS storage, and Hyper-Converged Infrastructure (HCI) from Dell Titanium and HP Gold certified partners.",
};

const FEATURES = [
  {
    icon: Server,
    title: "Next-Gen Enterprise Servers",
    desc: "Dell PowerEdge, HPE ProLiant, and Lenovo ThinkSystem servers configured for high availability, virtualization, and heavy database workloads.",
  },
  {
    icon: Database,
    title: "High-Performance Storage",
    desc: "SAN, NAS, and Unified storage systems from Dell PowerVault, HP Nimble, and NetApp for secure, scalable data retention and low latency.",
  },
  {
    icon: Layers,
    title: "Hyper-Converged Infrastructure (HCI)",
    desc: "Consolidate compute, storage, and networking into a single agile tier using VMware vSAN, Nutanix, or Azure Stack HCI solutions.",
  },
  {
    icon: ShieldAlert,
    title: "Disaster Recovery & Backup",
    desc: "Automated business continuity architectures, replication clusters, and immutable backups to protect against hardware failure and ransomware.",
  },
];

const OEM_DETAILS = [
  { name: "Dell Technologies", tier: "Titanium Partner", strength: "98%", desc: "Direct OEM channels for customized PowerEdge servers and PowerVault SAN arrays." },
  { name: "Hewlett Packard Enterprise", tier: "Gold Partner", strength: "92%", desc: "Advanced expertise in HPE ProLiant rack/blade systems and Nimble Hybrid storage." },
  { name: "Lenovo Enterprise", tier: "Silver Reseller", strength: "85%", desc: "Authorized builds for ThinkSystem servers, workstations, and high-density HPC racks." },
];

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / Infrastructure"
          title={
            <>
              Enterprise Server &amp; <span className="text-gradient-blue font-extrabold">Storage Infrastructure</span>
            </>
          }
          subtitle="Engineered for 99.999% uptime. Custom-configured servers, enterprise storage arrays, and hyper-converged solutions from world-leading OEMs."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Enterprise Infrastructure" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Sizing Quote</Link>
              <a href="#solutions" className="btn-outline-white btn btn-lg">View Solutions</a>
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
                  Hardware Engineered for Mission-Critical Workloads
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  At Comptech, we don't just sell boxes; we design architectures. Our certified solutions architects analyze your application throughput, IOPS requirements, and database sizes to configure the exact server and storage builds your enterprise demands.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Whether you are virtualizing 100+ legacy workloads with VMware vSphere or deploying high-frequency transactional SQL clusters, our Titanium and Gold partnership status guarantees you the best OEM pricing and direct engineering access.
                </p>
                <div className="flex flex-col gap-3">
                  {["Certified VMware, Hyper-V, and Proxmox deployment", "Active-Active dual controller SAN architectures", "Enterprise-wide hardware lifecycle management"].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10">
                  <h3 className="font-display font-extrabold text-xl text-gray-900 mb-6">OEM Partner Performance</h3>
                  <div className="flex flex-col gap-6">
                    {OEM_DETAILS.map((o) => (
                      <div key={o.name} className="p-5 bg-white border border-gray-100 rounded-2xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-display font-extrabold text-gray-900">{o.name}</span>
                          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{o.tier}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{o.desc}</p>
                        <div className="flex items-center gap-2">
                          <div className="progress-bar flex-1">
                            <div className="progress-fill" style={{ width: o.strength }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-400">{o.strength} Strength</span>
                        </div>
                      </div>
                    ))}
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
              <SectionLabel className="justify-center">Core Offerings</SectionLabel>
              <h2 id="solutions-title" className="font-display font-extrabold text-display-md text-gray-900">
                Tailored Infrastructure Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                We handle the procurement, staging, rack mounting, cabling, OS installation, and long-term maintenance.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              {FEATURES.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <RevealWrapper key={feat.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{feat.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{feat.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Inquire Build
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
