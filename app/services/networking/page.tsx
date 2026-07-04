import type { Metadata } from "next";
import Link from "next/link";
import { Network, Wifi, Shield, Shuffle, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Enterprise Networking Solutions",
  description:
    "Cisco, Aruba, and Juniper certified network design, campus Wi-Fi 6E rollouts, SD-WAN deployment, and firewall security solutions.",
};

const NET_SOLUTIONS = [
  {
    icon: Network,
    title: "LAN & Core Switching",
    desc: "High-capacity core, distribution, and access layer switches from Cisco Catalyst, Aruba CX, and Juniper EX designed for sub-millisecond latencies.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi 6E & 7 Campus Wireless",
    desc: "Predictive site surveys, spectrum analysis, and dense AP layouts from Aruba, Cisco, and Ruckus supporting thousands of concurrent users.",
  },
  {
    icon: Shuffle,
    title: "SD-WAN & WAN Optimization",
    desc: "Centralized multi-branch WAN connectivity using Cisco Meraki and Fortinet SD-WAN to lower MPLS costs and optimize cloud access.",
  },
  {
    icon: Shield,
    title: "Network Security & Firewalls",
    desc: "Next-Generation Firewalls (NGFW) from Palo Alto, Fortinet, and Sophos with full intrusion prevention (IPS) and SSL decryption capabilities.",
  },
];

export default function NetworkingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / Networking"
          title={
            <>
              Enterprise Networking &amp; <span className="text-gradient-blue font-extrabold">Wireless Solutions</span>
            </>
          }
          subtitle="Keep your organization connected and secure. Certified Cisco, Aruba, and Juniper network designs, campus Wi-Fi, and SD-WAN integrations."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Networking" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Network Audit</Link>
              <a href="#solutions" className="btn-outline-white btn btn-lg">Explore Technology</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Network Architecture</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Secure, High-Performance Connectivity
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Modern enterprise networks must support hybrid workforces, cloud-first apps, and IoT devices without compromising security. Comptech's certified network engineers design resilient topologies that prevent bottlenecks and secure edge devices.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  From predictive RF modeling for campus Wi-Fi rollouts to configuring multi-site SD-WAN fabrics, we deploy networks that scale effortlessly with your organizational growth.
                </p>
                <div className="flex flex-col gap-3">
                  {["Certified Cisco CCIE & Aruba ACMP engineering staff", "Zero-trust network access (ZTNA) policy design", "24/7 network operations center (NOC) support availability"].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10">
                  <h3 className="font-display font-extrabold text-lg text-gray-900 mb-6 font-sans">Network Compliance &amp; SLAs</h3>
                  <div className="flex flex-col gap-6">
                    {[
                      { label: "Switching Fabric Uptime SLA", pct: 99.999 },
                      { label: "Wi-Fi Coverage Density Guarantee", pct: 98.5 },
                      { label: "Intrusion Prevention (IPS) Match Rate", pct: 100 },
                    ].map(({ label, pct }) => (
                      <div key={label} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-xs">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-gray-700">{label}</span>
                          <span className="font-bold text-blue-700">{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%` }} />
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
              <SectionLabel className="justify-center">Services List</SectionLabel>
              <h2 id="solutions-title" className="font-display font-extrabold text-display-md text-gray-900">
                Core Networking Offerings
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                End-to-end network deployment, migration, and management services.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              {NET_SOLUTIONS.map((net, idx) => {
                const Icon = net.icon;
                return (
                  <RevealWrapper key={net.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{net.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{net.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Design Network
                      </Link>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
}
