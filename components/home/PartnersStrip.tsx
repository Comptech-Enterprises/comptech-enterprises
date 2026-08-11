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

const CLIENTS = [
  "Fabstract Clothing", "St. Cecilia School", "Active Motors", "LBSIM",
  "Apex Pharma", "Greenfield Hospitals", "Nova Retail", "Pinnacle Finance",
  "TrueNorth Logistics", "Skyline Builders", "Evergreen Foods", "Metro Dental",
  "Sapphire Hotels", "Quantum Labs", "Prism Media", "Heritage Academy",
  "Sunrise Textiles", "Orbit Telecom", "Vertex Engineering", "ClearPath Insurance",
];

const CLIENT_MID = Math.ceil(CLIENTS.length / 2);
const CLIENT_ROW1 = CLIENTS.slice(0, CLIENT_MID);
const CLIENT_ROW2 = CLIENTS.slice(CLIENT_MID);

const STATS = [
  { value: "20+",  label: "OEM Partners",       sub: "Tier-1 global brands"        },
  { value: "30+",  label: "Years Experience",   sub: "Since 1996"                  },
  { value: "200+", label: "Clients Served",     sub: "Across India"                },
  { value: "50+",  label: "Certified Engineers",sub: "OEM certified professionals" },
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
      aria-label="Technology partners"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top: Heading left + Stats right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 mb-16">
          <div className="lg:w-2/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#5C0F26" }}>
              Certified & Trusted
            </p>
            <h2 className="font-display font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              30+ Years of{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
                IT Service
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Authorized partner for the world&apos;s leading technology brands — bringing certified expertise to every project we deliver.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {STATS.map(({ value, label, sub }) => (
              <div key={label} className="glass-card rounded-2xl p-5">
                <p className="font-display font-extrabold text-2xl leading-none mb-1" style={{ color: "#5C0F26" }}>{value}</p>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{label}</p>
                <p className="text-[11px] text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients ticker */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
            Brands That Trust Us
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex flex-col gap-2 overflow-hidden mb-16">
          {[CLIENT_ROW1, CLIENT_ROW2].map((row, ri) => (
            <div
              key={`cl-${ri}`}
              className="flex w-max gap-2"
              style={{ animation: `ticker-scroll ${row.length * 3}s linear infinite`, animationDirection: ri === 1 ? "reverse" : "normal" }}
            >
              {row.concat(row).map((name, i) => (
                <span
                  key={`${name}-${ri}-${i}`}
                  className="shrink-0 glass-card rounded-full px-8 py-4 text-base font-semibold text-gray-700 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
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
            style={{ animation: `ticker-scroll ${row.length * 2.5}s linear infinite`, animationDirection: ri === 1 ? "reverse" : "normal" }}
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
