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

const STATS = [
  { value: "30",    suffix: "days", label: "Avg. Time to Live AI System"      },
  { value: "247",   suffix: "%",    label: "Avg. Increase in Qualified Leads" },
  { value: "3",     suffix: "+",    label: "Industries with Live Deployments" },
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

export function PartnersStrip() {
  return (
    <section
      className="relative pt-16 pb-10 lg:py-20 overflow-hidden"
      aria-label="AI results and proof"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Kicker + Stats grid — no left block, stats lead */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-center" style={{ color: "#5C0F26" }}>
          What We&apos;ve Delivered
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl leading-none mb-2" style={{ color: "#5C0F26" }}>
                {value}<span className="text-xl lg:text-2xl">{suffix}</span>
              </p>
              <p className="text-sm font-medium text-gray-600 leading-snug">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function ResellerTicker() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
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
