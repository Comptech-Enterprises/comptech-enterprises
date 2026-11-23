import Link from "next/link";
import { WHY_CARDS, MISSION_STATS, TEAM } from "@/components/about/data";

const HEAD = "font-[family-name:var(--font-sora)] font-semibold tracking-[-0.025em] text-[#12161C]";

/** "Why choose Comptech" + the About block (mission, stats, team). */
export function AboutWho() {
  return (
    <>
      <section className="bg-[#F1F3F8] py-16 lg:py-20" aria-labelledby="about-why">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 id="about-why" className={`${HEAD} text-4xl lg:text-5xl`}>
              Why choose Comptech
            </h2>
            <p className="mt-3 text-base text-gray-600">Thirty years of delivery, now applied to AI that works in the real world.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
            <div className="relative flex min-h-[260px] flex-col justify-center overflow-hidden rounded-2xl bg-[#6B0F1A] p-8 text-white">
              <p className="font-[family-name:var(--font-sora)] text-6xl font-semibold">30+</p>
              <p className="mt-3 text-lg font-semibold leading-snug">years of delivering technology before we ever said AI.</p>
              <p className="mt-2 text-sm text-white/80">Now building AI agents, software and automation for businesses in 12+ countries.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {WHY_CARDS.map(({ title, body, icon: Icon }) => (
                <li key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FDF4F6] text-[#B91C1C]">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#12161C]">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about-comptech" className="bg-white py-16 lg:py-20" aria-labelledby="about-partners">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="about-partners" className={`${HEAD} text-4xl lg:text-5xl`}>
              AI Partners for Ambitious Businesses
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Comptech Enterprises builds custom AI, trains your teams and runs the infrastructure behind it, for ambitious
              businesses in India, the USA, Canada, Europe, Australia and the UAE.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="about-grid-bg flex flex-col justify-between rounded-2xl p-7 text-white">
              <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold leading-snug">
                Our mission: make AI work for your business, not the other way round.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#B91C1C] pt-5">
                {MISSION_STATS.map((s) => (
                  <div key={s.l}>
                    <dt className="font-[family-name:var(--font-sora)] text-3xl font-semibold">{s.v}</dt>
                    <dd className="text-xs text-[#C9CCD3]">{s.l}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit rounded-full bg-[#B91C1C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F1818]"
              >
                About Comptech
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {TEAM.map((m) => (
                <li key={m.name} className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6B0F1A] text-sm font-semibold text-white" aria-hidden="true">
                      {m.initial}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#12161C]">{m.name}</h3>
                      <p className="text-xs text-gray-500">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
