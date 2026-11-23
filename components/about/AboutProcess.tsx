import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FreeAuditButton } from "@/components/ui/FreeAuditButton";
import { PROCESS_STEPS, CERTIFIED } from "@/components/about/data";

export function AboutProcess() {
  return (
    <>
      {/* 4-step process */}
      <section className="about-grid-bg relative overflow-hidden py-16 text-white lg:py-20" aria-labelledby="about-process">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="about-process"
              className="mx-auto max-w-3xl font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.025em] lg:text-5xl"
            >
              Before we build anything, we start with a free audit.
            </h2>
            <p className="mt-3 text-base text-[#C9CCD3]">Four steps, clear deliverables, no surprises.</p>
          </div>

          <ol className="relative mt-12 grid gap-5 md:grid-cols-4">
            {/* connecting line (desktop) */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-[#B91C1C] to-[#F2A7B0] md:block" />
            {PROCESS_STEPS.map(({ step, title, desc, badge, icon: Icon }, i) => (
              <li key={title} className="relative flex flex-col">
                <span
                  className={`relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border ${
                    i === 0 ? "border-[#F2A7B0] bg-[#B91C1C]" : "border-[#5C2630] bg-[#3A0F18]"
                  } text-white`}
                >
                  <Icon size={24} />
                </span>
                <div
                  className={`flex flex-1 flex-col rounded-2xl border p-5 ${
                    i === 0 ? "border-[#B91C1C] bg-[#1F0D12]" : "border-white/10 bg-[#170B0F]"
                  }`}
                >
                  <p className="text-[11px] font-medium text-[#F2A7B0]">{step}</p>
                  <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#C9CCD3]">{desc}</p>
                  <span
                    className={`mt-4 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                      i === 0 ? "bg-[#B91C1C] text-white" : "bg-white/10 text-[#E6E8EC]"
                    }`}
                  >
                    {badge}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <FreeAuditButton
              source="About Page - Process"
              className="inline-flex items-center gap-2 rounded-full bg-[#B91C1C] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#9F1818]"
            >
              Book a free AI audit <ArrowRight size={16} />
            </FreeAuditButton>
            <p className="mt-3 text-xs text-[#9CA0A9]">Free to start. Takes one call to begin.</p>
          </div>
        </div>
      </section>

      {/* Certified with */}
      <section className="bg-white py-10" aria-labelledby="about-certified">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <h2 id="about-certified" className="text-sm font-medium text-gray-500">
            Certified with
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {CERTIFIED.map((c) => (
              <li
                key={c.name}
                className="flex flex-col items-center gap-2 rounded-xl border border-[#F0C9D0] bg-white px-3 py-4 transition-all hover:-translate-y-0.5 hover:border-[#B91C1C] hover:shadow-[0_12px_28px_rgba(107,15,26,0.14)]"
              >
                <Image src={c.logo} alt="" width={26} height={26} className="h-6 w-6" unoptimized />
                <span className="text-xs font-medium text-[#12161C]">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
