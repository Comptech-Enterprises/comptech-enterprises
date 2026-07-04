"use client";

const PARTNERS = [
  { name: "Dell",      cert: "Gold Partner"       },
  { name: "HP",        cert: "Authorized Partner"  },
  { name: "Lenovo",    cert: "Platinum Partner"    },
  { name: "Microsoft", cert: "CSP Partner"         },
  { name: "Intel",     cert: "Technology Partner"  },
  { name: "NVIDIA",    cert: "Elite Partner"       },
  { name: "Canon",     cert: "Authorized Reseller" },
  { name: "Samsung",   cert: "Business Partner"    },
  { name: "Epson",     cert: "Premium Partner"     },
  { name: "Sony",      cert: "Authorized Partner"  },
];

const STATS = [
  { value: "10+",  label: "OEM Partners",      sub: "Tier-1 global brands"       },
  { value: "15+",  label: "Years Experience",  sub: "Since 2008"                 },
  { value: "200+", label: "Clients Served",    sub: "Across India"               },
  { value: "50+",  label: "Certified Engineers",sub: "OEM certified professionals"},
];

export function PartnersStrip() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 40%, #f5f0f2 80%, #ffffff 100%)" }}
      aria-label="Technology partners"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top: Heading left + Stats right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 mb-16">

          {/* Left heading */}
          <div className="lg:w-2/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#5C0F26" }}>
              Certified & Trusted
            </p>
            <h2 className="font-display font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              15+ Years of{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
                OEM Excellence
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Authorized partner for the world's leading technology brands — bringing certified expertise to every project we deliver.
            </p>
          </div>

          {/* Right stats grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {STATS.map(({ value, label, sub }) => (
              <div key={label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="font-display font-extrabold text-2xl leading-none mb-1"
                  style={{ color: "#5C0F26" }}>{value}</p>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PARTNERS.map(({ name, cert }) => (
            <div
              key={name}
              className="group rounded-2xl border border-gray-100 bg-white p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
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
