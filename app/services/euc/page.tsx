import type { Metadata } from "next";
import Link from "next/link";
import { Laptop, Monitor, ShieldCheck, Box, Settings, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "End User Computing (EUC) Solutions",
  description:
    "Enterprise-grade laptops, desktops, workstations, and thin clients from tier-1 OEMs (Dell, HP, Lenovo) with centralized endpoint management.",
};

const OFF_CATEGORIES = [
  {
    icon: Laptop,
    title: "Business Laptops & Desktops",
    desc: "Dell Latitude & OptiPlex, HP EliteBook & ProDesk, Lenovo ThinkPad & ThinkCentre commercial series optimized for daily enterprise productivity.",
  },
  {
    icon: Monitor,
    title: "High-End Engineering Workstations",
    desc: "NVIDIA RTX-powered Dell Precision, HP Z-Series, and Lenovo ThinkStation units designed for CAD, 3D rendering, and data analysis.",
  },
  {
    icon: Settings,
    title: "Centralized Endpoint Management",
    desc: "Pre-deployment imaging, BIOS configuration, asset tagging, and setup of Microsoft Intune or SCCM for seamless cloud management.",
  },
  {
    icon: Box,
    title: "Thin Clients & VDI Devices",
    desc: "Wyse and HP thin clients optimized for VMware Horizon, Citrix, and Microsoft Remote Desktop environments.",
  },
];

export default function EUCPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / EUC"
          title={
            <>
              Enterprise Endpoint &amp; <span className="text-gradient-blue font-extrabold">End User Computing</span>
            </>
          }
          subtitle="Deploy desktops, laptops, and specialized workstations at scale. From 50 to 5,000+ seats, with OEM-direct pricing and turn-key configuration."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "End User Computing" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Fleet Quote</Link>
              <a href="#offerings" className="btn-outline-white btn btn-lg">Explore Devices</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Fleet Deployment</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Zero-Touch Deployment for Modern Workforces
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Managing an enterprise device fleet shouldn't occupy your entire IT department. Comptech provides end-to-end device lifecycle management: procurement, warehousing, custom software imaging, asset tagging, and delivery directly to your employees.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  As authorized tier-1 partners for Dell, HP, and Lenovo, we provide custom configurations, dedicated account managers, and rapid manufacturer warranty fulfillment.
                </p>
                <div className="flex gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-blue-700 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-700">Genuine OEM Warranties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="text-blue-700 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-700">Intune &amp; SCCM Configured</span>
                  </div>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                  <h3 className="font-display font-extrabold text-lg text-gray-900 mb-6">Device Lifecycle Stages</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { step: "01", name: "Procurement & Sizing", desc: "Volume OEM discounts and configuration matching for diverse roles." },
                      { step: "02", name: "Imaging & Tagging", desc: "Flashing company-standard OS images, asset tagging, and serial logging." },
                      { step: "03", name: "Logistics & Setup", desc: "Desk-side placement or direct shipping with user self-enrollment." },
                      { step: "04", name: "Maintenance & AMC", desc: "Rapid part replacement, loaner device buffer, and 24/7 technical desk." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-4 items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-display font-extrabold text-2xl text-blue-700 leading-none">{s.step}</span>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-1">{s.name}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Offerings Section ── */}
        <section id="offerings" className="py-24 bg-gray-50 border-t border-b border-gray-100" aria-labelledby="offerings-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Core Portfolio</SectionLabel>
              <h2 id="offerings-title" className="font-display font-extrabold text-display-md text-gray-900">
                EUC Device Portfolio
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Authorized configurations matched with professional services to keep your workforce productive.
              </p>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 gap-6">
              {OFF_CATEGORIES.map((off, idx) => {
                const Icon = off.icon;
                return (
                  <RevealWrapper key={off.title} delay={idx * 80}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{off.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{off.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Get Bulk Quote
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
