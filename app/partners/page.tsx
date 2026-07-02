import type { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, Package } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "Comptech is a certified Dell Titanium, HP Gold, Lenovo Silver, and Microsoft Gold partner — genuine products, official warranty, expert deployment.",
};

const PARTNER_CATEGORIES = [
  {
    category: "Compute & Servers",
    partners: [
      {
        name: "Dell",
        color: "#007DB8",
        tier: "Titanium Partner",
        desc: "Our highest-tier OEM partnership. Comptech is a Dell Titanium Partner — the top tier of the Dell Technologies Partner Program — with certified engineers for PowerEdge, PowerVault, and Dell Networking.",
        products: ["PowerEdge Rack Servers", "PowerVault Storage", "Dell EMC Storage", "Dell Networking"],
      },
      {
        name: "HP",
        color: "#0096D6",
        tier: "Gold Business Partner",
        desc: "HP Gold Business Partner for the full HPE and HP portfolio including ProLiant rack servers, Nimble storage, and HP commercial workstations and laptops.",
        products: ["HPE ProLiant Servers", "HP Nimble Storage", "HP Primera", "HP Commercial PCs"],
      },
      {
        name: "Lenovo",
        color: "#E1251B",
        tier: "Silver Reseller",
        desc: "Lenovo Silver Reseller for ThinkSystem servers, ThinkStation workstations, ThinkPad and ThinkCentre commercial devices, and ThinkAgile HCI solutions.",
        products: ["ThinkSystem Servers", "ThinkStation Workstations", "ThinkPad Laptops", "ThinkAgile HCI"],
      },
      {
        name: "NVIDIA",
        color: "#76B900",
        tier: "Preferred Partner",
        desc: "NVIDIA Preferred Partner for GPU compute infrastructure. We design and deploy NVIDIA DGX, HGX, and RTX-based AI and visualization workloads for enterprise environments.",
        products: ["NVIDIA DGX Systems", "RTX Workstations", "GPU Compute Nodes", "NVIDIA AI Enterprise"],
      },
    ],
  },
  {
    category: "Software & Cloud",
    partners: [
      {
        name: "Microsoft",
        color: "#00A4EF",
        tier: "Gold Partner",
        desc: "Microsoft Gold Partner for cloud infrastructure, productivity, and licensing. We help enterprises migrate to Azure, manage Microsoft 365, and optimize their software estate.",
        products: ["Azure Infrastructure", "Microsoft 365", "Windows Server", "SQL Server Licensing"],
      },
      {
        name: "Intel",
        color: "#0071C5",
        tier: "Authorized Distributor",
        desc: "Intel Authorized Channel Partner providing enterprise processors, Intel Optane storage, and Intel-based compute platforms for mission-critical server builds.",
        products: ["Xeon Scalable Processors", "Intel Optane PMem", "Intel Server Boards", "Intel SSDs"],
      },
    ],
  },
  {
    category: "Imaging & AV",
    partners: [
      {
        name: "Canon",
        color: "#CC0000",
        tier: "Authorized Dealer",
        desc: "Authorized Canon dealer for enterprise multifunction printers, production printing, and document management solutions across corporate and government environments.",
        products: ["imageRUNNER ADVANCE", "imagePRESS", "Canon MFPs", "Document Scanners"],
      },
      {
        name: "Samsung",
        color: "#1428A0",
        tier: "Business Partner",
        desc: "Samsung Business Partner for enterprise displays, commercial monitors, and Samsung SSDs for server and workstation deployments.",
        products: ["Samsung Business Displays", "Commercial Monitors", "Enterprise SSDs", "Digital Signage"],
      },
      {
        name: "Epson",
        color: "#009AC7",
        tier: "Authorized Reseller",
        desc: "Epson Authorized Reseller for enterprise inkjet and laser printers, large-format plotters, and projectors for corporate and educational environments.",
        products: ["EcoTank Enterprise", "WorkForce Pro", "Large Format Printers", "Epson Projectors"],
      },
      {
        name: "Sony",
        color: "#003087",
        tier: "Business Partner",
        desc: "Sony Business Partner for professional AV, 4K commercial displays, video conferencing cameras, and enterprise surveillance solutions.",
        products: ["BRAVIA Professional", "Video Conferencing", "4K Commercial Displays", "Sony Surveillance"],
      },
    ],
  },
];

const HEADER_STATS = [
  { Icon: Award,       value: "10+ OEM Partnerships",   desc: "Tier-1 certified" },
  { Icon: ShieldCheck, value: "Genuine Products Only",   desc: "No grey-market stock" },
  { Icon: Package,     value: "Official Warranty",       desc: "Direct manufacturer support" },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Technology Partners"
          title="Certified by the World's Best"
          subtitle="Comptech is an authorized reseller and certified partner for leading enterprise technology brands — ensuring you get genuine products, official support, and expert deployment."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
        />

        {/* ── Stats row ── */}
        <div className="bg-white border-b border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HEADER_STATS.map(({ Icon, value, desc }) => (
                <div key={value} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Partner categories ── */}
        <section className="py-24 lg:py-32 bg-white" aria-label="Partner categories">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-20">
            {PARTNER_CATEGORIES.map(({ category, partners }, ci) => (
              <div key={category}>
                <RevealWrapper>
                  <SectionLabel>{category}</SectionLabel>
                  <h2 className="font-display font-extrabold text-display-sm text-gray-900 mb-10 text-balance">
                    {category} Partners
                  </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {partners.map(({ name, color, tier, desc, products }, pi) => (
                    <RevealWrapper key={name} delay={pi * 80}>
                      <div className="service-card-top card-lift border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:border-gray-300 transition-all duration-300">
                        {/* Partner header */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="font-display font-extrabold text-3xl" style={{ color }}>
                            {name}
                          </div>
                          <span
                            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0"
                            style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
                          >
                            {tier}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{desc}</p>

                        {/* Products */}
                        <div className="mb-6">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Key Products</p>
                          <div className="flex flex-wrap gap-2">
                            {products.map((p) => (
                              <span key={p} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-xl font-medium">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link href="/contact#quote" className="btn-accent btn btn-sm self-start">
                          Get Quote
                        </Link>
                      </div>
                    </RevealWrapper>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
