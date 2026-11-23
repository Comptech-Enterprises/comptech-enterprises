import Image from "next/image";
import Link from "next/link";
import { HERO_NODES, ABOUT_CLIENTS } from "@/components/about/data";

/** Dark grid hero with the "One AI partner" network, plus the client ticker. */
export function AboutHero() {
  return (
    <section className="about-grid-bg relative overflow-hidden pt-[calc(var(--nav-height)+3rem)] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-20">
        <div>
          <h1 className="font-[family-name:var(--font-sora)] text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            Tailored AI solutions, built around your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C9CCD3]">
            Not another off-the-shelf tool. AI agents and software built for your workflows, connected to your stack and owned by you.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#9F1818]"
            >
              Speak to an AI expert
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#11080B]"
            >
              See what we&apos;ve built
            </Link>
          </div>
        </div>

        {/* Network diagram (hidden on small screens) */}
        <div className="relative hidden h-[330px] lg:block" aria-hidden="true">
          <svg viewBox="0 0 520 330" className="absolute inset-0 h-full w-full" fill="none">
            <circle cx="62" cy="165" r="46" fill="#B91C1C" className="about-halo" opacity="0.4" />
            {[48, 126, 204, 282].map((y, i) => (
              <g key={y}>
                <path d={`M108 165 C 170 165, 150 ${y}, 214 ${y}`} stroke="#4A2A31" strokeWidth="1.5" />
                <path
                  d={`M108 165 C 170 165, 150 ${y}, 214 ${y}`}
                  stroke="#F2A7B0"
                  strokeWidth="2"
                  pathLength="100"
                  className="about-flow"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </g>
            ))}
          </svg>
          <div className="absolute left-[14px] top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/15 bg-[#1A0F12]">
              <Image src="/images/logo.webp" alt="" width={44} height={26} className="h-7 w-auto" />
            </div>
            <span className="text-[11px] font-medium text-[#C9CCD3]">One AI partner</span>
          </div>
          <ul className="absolute right-0 top-0 flex h-full w-[58%] flex-col justify-between">
            {HERO_NODES.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1A0F12]/90 px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[#F2A7B0]">
                  <Icon size={16} />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold leading-tight">{title}</span>
                  <span className="block text-[11px] leading-tight text-[#9CA0A9]">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Client ticker */}
      <div className="border-t border-white/10 py-6">
        <p className="mb-4 text-center text-sm font-medium text-[#C9CCD3]">Organizations working with us</p>
        <div className="about-mask overflow-hidden">
          <div className="about-marquee gap-4 py-1">
            {ABOUT_CLIENTS.concat(ABOUT_CLIENTS).map((c, i) => (
              <span
                key={`${c.name}-${i}`}
                aria-hidden={i >= ABOUT_CLIENTS.length ? true : undefined}
                className="mx-2 inline-flex h-[60px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#F4F5F8] px-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/clients/${c.file}.webp`}
                  alt={i >= ABOUT_CLIENTS.length ? "" : c.name}
                  width={c.tall ? 90 : 120}
                  height={c.tall ? 40 : 30}
                  loading="lazy"
                  draggable={false}
                  className={`${c.tall ? "h-9" : "h-6"} w-auto max-w-[120px] object-contain`}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
