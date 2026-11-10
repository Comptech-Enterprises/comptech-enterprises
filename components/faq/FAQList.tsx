"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const GRADIENT = "linear-gradient(135deg, #5C0F26, #E8435A)";

/**
 * Desktop (lg+): every answer is shown in a card.
 * Mobile: accordion, one answer open at a time.
 * The server render has every answer expanded, so the full text is in the HTML for crawlers.
 */
export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="space-y-3 sm:space-y-6">
      {items.map(({ q, a }, i) => {
        const expanded = isDesktop || openIndex === i;
        return (
          <RevealWrapper key={q} delay={i * 60}>
            <article id={`faq-${i + 1}`} className="glass-card scroll-mt-28 p-4 sm:p-6 lg:p-9">
              <h2 className="m-0">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-answer-${i + 1}`}
                  disabled={isDesktop}
                  onClick={() => setOpenIndex(expanded ? null : i)}
                  className="flex w-full items-start gap-3 text-left disabled:cursor-default sm:gap-6"
                >
                  <span
                    className="font-display text-2xl font-extrabold leading-none text-transparent bg-clip-text sm:text-4xl lg:text-5xl"
                    style={{ backgroundImage: GRADIENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base font-extrabold leading-snug tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                    {q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                      expanded
                        ? "rotate-45 border-transparent bg-[#5C0F26] text-white"
                        : "border-gray-200 bg-white text-[#5C0F26]"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
              </h2>

              <div
                id={`faq-answer-${i + 1}`}
                hidden={!expanded}
                className="pl-0 pt-4 sm:pl-[4.25rem] lg:pl-[5.75rem]"
              >
                <p className="border-t border-gray-200/70 pt-4 text-[15px] leading-relaxed text-gray-600 lg:border-0 lg:pt-0 lg:text-base">
                  {a}
                </p>
              </div>
            </article>
          </RevealWrapper>
        );
      })}
    </div>
  );
}
