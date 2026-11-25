import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Carousel } from "@/components/about/Carousel";
import { FreeAuditButton } from "@/components/ui/FreeAuditButton";
import { SOLUTIONS, CASE_CARDS, IMPACT_STATS } from "@/components/about/data";

const HEAD = "font-[family-name:var(--font-sora)] font-semibold tracking-[-0.025em] text-[#12161C]";

export function AboutSolutions() {
  return (
    <>
      {/* Solutions */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="about-solutions">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="about-solutions" className={`${HEAD} text-4xl lg:text-5xl`}>
            Our AI solutions
          </h2>
          <p className="mt-3 text-base text-gray-600">
            From a single AI agent to a full automation stack, built around how your team already works.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-[1500px]">
          <Carousel label="AI solutions">
            {SOLUTIONS.map(({ id, title, desc, href, icon: Icon, image }) => (
              <article
                key={id}
                className="about-snap group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all hover:-translate-y-0.5 hover:border-[#B91C1C] hover:shadow-[0_14px_34px_rgba(107,15,26,0.12)] sm:w-[300px]"
              >
                {image ? (
                  <div className="relative h-[160px]">
                    <Image src={image} alt="" fill sizes="300px" className="object-cover" />
                  </div>
                ) : (
                  <div className="about-grid-bg flex h-[120px] items-center justify-center" aria-hidden="true">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#1A0F12] text-[#F2A7B0]">
                      <Icon size={26} />
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-semibold text-[#12161C]">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{desc}</p>
                  <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#B91C1C]">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 rounded-full bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#9F1818]"
          >
            Explore all our AI solutions <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Audit strip */}
      <section className="bg-[#6B0F1A] py-9 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 lg:px-8">
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold">Not sure where to start?</h2>
            <p className="mt-1 text-sm text-white/80">Our free AI audit ranks what is worth doing first.</p>
          </div>
          <FreeAuditButton
            source="About Page - Audit Strip"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#12161C] transition-colors hover:bg-gray-100"
          >
            Book a free AI audit <ArrowRight size={15} />
          </FreeAuditButton>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="about-cases">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="about-cases" className={`${HEAD} text-4xl lg:text-5xl`}>
            See what AI looks like in your industry
          </h2>
          <p className="mt-3 text-base text-gray-600">Real business problems, solved with AI, by industry.</p>
        </div>
        <div className="mx-auto mt-10 max-w-[1500px]">
          <Carousel label="case studies">
            {CASE_CARDS.map(({ industry, title, label, body, icon: Icon }) => (
              <article
                key={industry}
                className="about-snap flex w-[290px] shrink-0 flex-col rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#B91C1C]/50 hover:shadow-[0_14px_34px_rgba(17,8,11,0.08)] sm:w-[310px]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FDF4F6] text-[#B91C1C]">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#12161C]">{industry}</h3>
                </div>
                <p className="mt-3 text-sm leading-snug text-[#12161C]">{title}</p>
                <div className="mt-4 flex-1 rounded-xl bg-[#F6F7FA] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                  <p className="mt-1 text-sm leading-snug text-gray-700">{body}</p>
                </div>
                <Link
                  href="/case-studies"
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#12161C] transition-colors hover:border-[#B91C1C] hover:text-[#B91C1C]"
                >
                  Read the example <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </Carousel>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-[#B91C1C] px-7 py-3 text-sm font-semibold text-[#B91C1C] transition-colors hover:bg-[#B91C1C] hover:text-white"
          >
            See all case studies <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-[#6B0F1A] py-8 text-white" aria-label="Impact">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 text-center lg:grid-cols-4">
          {IMPACT_STATS.map((s) => (
            <div key={s.l}>
              <dt className="font-[family-name:var(--font-sora)] text-3xl font-semibold lg:text-4xl">{s.v}</dt>
              <dd className="mt-1 text-xs text-white/75">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
