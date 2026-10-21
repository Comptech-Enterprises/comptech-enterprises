"use client";

import Image from "next/image";
import ShapeWaves from "@/components/reactbits/ShapeWaves";

const TRUSTED_CLIENTS = [
  { name: "Bata India", logo: "/clients/bata-india.webp" },
  { name: "ITC Limited", logo: "/clients/itc.webp" },
  { name: "DLF", logo: "/clients/dlf.webp" },
  { name: "Starbucks India", logo: "/clients/starbucks-india.webp" },
  { name: "Coca-Cola", logo: "/clients/coca-cola.webp" },
  { name: "Rebel Foods", logo: "/clients/rebel-foods.webp" },
  { name: "Canara Bank", logo: "/clients/canara-bank.webp" },
  { name: "Zomato", logo: "/clients/zomato.webp" },
  { name: "Urban Company", logo: "/clients/urban-company.webp" },
];

export function GEOTrustStrip() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#080709] text-white border-y border-white/10 overflow-hidden select-none">
      {/* Interactive Shape Waves Background: dark base, illuminates red/maroon on pointer hover */}
      <ShapeWaves
        bgColor="#070608"
        baseColor="rgba(50, 12, 25, 0.35)"
        hoverColor="#8A1237"
        hoverRadius={220}
        speed={1.0}
        waveFrequency={0.07}
        shapeCountX={28}
        shapeCountY={12}
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070608]/40 to-[#070608]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <p className="text-center text-[11px] sm:text-xs font-bold text-gray-300 uppercase tracking-[0.24em] mb-10">
          Trusted by Industry Leaders &amp; Fast-Growing Enterprises Across India
        </p>

        {/* Brand Logos: Rendered in their exact authentic colors */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {TRUSTED_CLIENTS.map((client) => (
            <div
              key={client.name}
              className="h-16 px-6 sm:px-7 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:scale-108 hover:bg-white hover:shadow-[0_12px_36px_rgba(232,67,90,0.25)] hover:border-[#E8435A]/40 transition-all duration-300 cursor-default group"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={130}
                height={45}
                className="max-h-9 sm:max-h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-8 tracking-wide">
          Hover to illuminate interactive citation topology • Enterprise partners verified across multi-LLM queries
        </p>
      </div>
    </section>
  );
}
