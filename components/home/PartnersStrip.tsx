"use client";

import Image from "next/image";
import { useState } from "react";

const PARTNERS: { name: string; cert: string; logo: string | null; domain?: string }[] = [
  { name: "Apple",      cert: "Authorized Reseller", logo: "/logo's/apple.jpg"        },
  { name: "Microsoft",  cert: "CSP Partner",         logo: "/logo's/microsoft.webp"   },
  { name: "Logitech",   cert: "Authorized Reseller", logo: "/logo's/logitech.jpg"     },
  { name: "HP",         cert: "Authorized Partner",  logo: "/logo's/hp.jpg"           },
  { name: "Microtek",   cert: "Authorized Partner",  logo: "/logo's/microtek.jpg"     },
  { name: "Intel",      cert: "Technology Partner",  logo: "/logo's/intel.png"        },
  { name: "PRAMA",      cert: "Authorized Partner",  logo: "/logo's/prama.jpeg"       },
  { name: "NVIDIA",     cert: "Preferred Partner",   logo: "/logo's/nvida.avif"       },
  { name: "LG",         cert: "Authorized Reseller", logo: "/logo's/LG.png"           },
  { name: "AMD",        cert: "Technology Partner",  logo: "/logo's/amd.jpg"          },
  { name: "Dell",       cert: "Gold Partner",        logo: "/logo's/dell.jpg"         },
  { name: "Samsung",    cert: "Business Partner",    logo: "/logo's/samsung.webp"     },
  { name: "Epson",      cert: "Premium Partner",     logo: "/logo's/epson.png"        },
  { name: "CP Plus",    cert: "Authorized Partner",  logo: null, domain: "cpplus.com"      },
  { name: "Canon",      cert: "Authorized Reseller", logo: "/logo's/canon.webp"       },
  { name: "Lenovo",     cert: "Platinum Partner",    logo: "/logo's/lenvo.png"        },
  { name: "Tally",      cert: "Authorized Partner",  logo: null, domain: "tallysolutions.com" },
  { name: "Honeywell",  cert: "Authorized Reseller", logo: null, domain: "honeywell.com"    },
  { name: "Brother",    cert: "Authorized Reseller", logo: null, domain: "brother.com"      },
];

const STATS = [
  { value: "20+",  label: "OEM Partners",       sub: "Tier-1 global brands"        },
  { value: "25+",  label: "Years Experience",   sub: "Since 2000"                  },
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
      className="pt-16 pb-10 lg:py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 50%, #f5f0f2 85%, #ffffff 100%)" }}
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
              25+ Years of{" "}
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
              <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="font-display font-extrabold text-2xl leading-none mb-1" style={{ color: "#5C0F26" }}>{value}</p>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{label}</p>
                <p className="text-[11px] text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
            Trusted Technology Partners
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Partner cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {PARTNERS.map(({ name, cert, logo, domain }) => (
            <div
              key={name}
              className="group rounded-2xl border border-gray-100 bg-white p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-3">
                <PartnerLogo name={name} logo={logo} domain={domain} />
              </div>
              <p className="font-display font-bold text-sm text-gray-900 leading-none mb-1.5">{name}</p>
              <p className="text-[10px] text-gray-400 leading-tight">{cert}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
