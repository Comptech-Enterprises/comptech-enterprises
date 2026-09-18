"use client";

import Image from "next/image";
import { useState } from "react";

const PARTNERS: { name: string; cert: string; logo: string | null; domain?: string }[] = [
  { name: "Apple",      cert: "Authorized Reseller", logo: "/logo's/apple.webp"       },
  { name: "Microsoft",  cert: "CSP Partner",         logo: "/logo's/microsoft-removebg-preview.webp" },
  { name: "Logitech",   cert: "Authorized Reseller", logo: "/logo's/logitech.webp"    },
  { name: "HP",         cert: "Authorized Partner",  logo: "/logo's/hp.webp"          },
  { name: "Microtek",   cert: "Authorized Partner",  logo: "/logo's/microtek.webp"    },
  { name: "Intel",      cert: "Technology Partner",  logo: "/logo's/intel.webp"       },
  { name: "PRAMA",      cert: "Authorized Partner",  logo: "/logo's/prama.webp"       },
  { name: "NVIDIA",     cert: "Preferred Partner",   logo: "/logo's/nvida.webp"       },
  { name: "LG",         cert: "Authorized Reseller", logo: "/logo's/LG.webp"          },
  { name: "AMD",        cert: "Technology Partner",  logo: "/logo's/amd.webp"         },
  { name: "Dell",       cert: "Gold Partner",        logo: "/logo's/dell.webp"        },
  { name: "Sony",       cert: "Business Partner",    logo: "/logo's/sony.webp"        },
  { name: "Epson",      cert: "Premium Partner",     logo: "/logo's/epson.webp"       },
  { name: "CP Plus",    cert: "Authorized Partner",  logo: "/logo's/cp.webp"          },
  { name: "Canon",      cert: "Authorized Reseller", logo: "/logo's/canon.webp"       },
  { name: "Lenovo",     cert: "Platinum Partner",    logo: "/logo's/lenvo.webp"       },
  { name: "Tally",      cert: "Authorized Partner",  logo: "/logo's/tally.webp"       },
  { name: "Honeywell",  cert: "Authorized Reseller", logo: "/logo's/honeywell.webp"   },
  { name: "Brother",    cert: "Authorized Reseller", logo: "/logo's/brother.webp"     },
];

const MID = Math.ceil(PARTNERS.length / 2);
const ROW1 = PARTNERS.slice(0, MID);
const ROW2 = PARTNERS.slice(MID);

const CERTIFIED_WITH = [
  { name: "OpenAI",    logo: "/logos/openai.svg"    },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Gemini",    logo: "/logos/gemini.svg"    },
  { name: "AWS",       logo: "/logos/aws.svg"       },
  { name: "Azure",     logo: "/logos/azure.svg"     },
  { name: "NVIDIA",    logo: "/logos/nvidia.svg"    },
];

const STATS = [
  { value: "30",    suffix: "days", label: "Avg. Time to Live AI System"      },
  { value: "250",   suffix: "hrs",  label: "Work Time Saved"                  },
  { value: "100",   suffix: "+",    label: "Live Deployments"                 },
  { value: "$0",    suffix: "",     label: "Cost of Your First AI Audit"      },
];

function PartnerLogo({ name, logo, domain }: { name: string; logo: string | null; domain?: string }) {
  const [errored, setErrored] = useState(false);
  const src = logo ?? (domain ? `https://logo.clearbit.com/${domain}` : null);

  if (!src || errored) {
    return (
      <div className="w-12 h-12 flex items-center justify-center">
        <span className="text-[10px] font-bold text-gray-400 text-center leading-tight px-1">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={`${name} logo`}
        width={44}
        height={44}
        className="object-contain w-11 h-11 transition-transform duration-300 group-hover:scale-105"
        onError={() => setErrored(true)}
        unoptimized
      />
    </div>
  );
}

export function WhatWeDelivered() {
  return (
    <section
      id="delivered"
      className="relative py-8 lg:py-12 overflow-hidden"
      aria-label="What We've Delivered"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] mb-2" style={{ color: "#5C0F26" }}>
            Proven Enterprise Results
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            What We&apos;ve Delivered
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="glass-card rounded-2xl p-5 sm:p-6 text-center bg-white/80 border border-gray-100/90 shadow-sm hover:shadow-md transition-all">
              <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-none mb-1.5" style={{ color: "#5C0F26" }}>
                {value}<span className="text-xl sm:text-2xl lg:text-3xl">{suffix}</span>
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertifiedWith() {
  return (
    <section className="relative py-6 lg:py-8 overflow-hidden" aria-label="Certified With">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-gray-400 whitespace-nowrap">
            Certified With
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {CERTIFIED_WITH.map(({ name, logo }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-gray-300 hover:bg-white transition-all duration-200 group"
            >
              <div className="h-8 w-auto flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  width={110}
                  height={32}
                  className="h-7 max-w-[85px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-gray-800 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersStrip() {
  return (
    <>
      <WhatWeDelivered />
      <CertifiedWith />
    </>
  );
}

export function ResellerTicker() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-8 overflow-hidden">
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
          Authorized Reseller
        </p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex flex-col gap-3 overflow-hidden">
        {[ROW1, ROW2].map((row, ri) => (
          <div
            key={ri}
            className="flex w-max gap-3"
            style={{
              animation: `${ri === 0 ? "ticker-scroll-reverse" : "ticker-scroll"} ${row.length * 3}s linear infinite`,
            }}
          >
            {row.concat(row).map(({ name, logo, domain }, i) => (
              <div
                key={`${name}-${ri}-${i}`}
                className="group shrink-0 glass-card rounded-2xl px-6 py-4 flex items-center justify-center"
              >
                <PartnerLogo name={name} logo={logo} domain={domain} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
