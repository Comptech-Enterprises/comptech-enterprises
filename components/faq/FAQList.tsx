"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const GRADIENT = "linear-gradient(135deg, #5C0F26, #E8435A)";

/**
 * Accordion on every screen size, one answer open at a time (first open by default).
 * Collapsed answers stay in the HTML (hidden attribute), so the full text is still in the page source.
 */
export function FAQList({
  items,
  headingLevel = 2,
  idPrefix = "faq",
}: {
  items: { q: string; a: string }[];
  /** Heading level for each question, so the page outline stays in order. */
  headingLevel?: 2 | 3 | 4;
  /** Prefix for element ids, to keep ids unique when a page has several lists. */
  idPrefix?: string;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Quick-link anchors (#faq-3) open the matching question.
  useEffect(() => {
    const openFromHash = () => {
      const m = window.location.hash.match(new RegExp(`^#${idPrefix}-(\\d+)$`));
      if (m) {
        const idx = Number(m[1]) - 1;
        if (idx >= 0 && idx < items.length) setOpenIndex(idx);
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [items.length, idPrefix]);

  return (
    <div className="space-y-3 sm:space-y-6">
      {items.map(({ q, a }, i) => {
        const expanded = openIndex === i;
        return (
          <RevealWrapper key={q} delay={i * 60}>
            <article id={`${idPrefix}-${i + 1}`} className="glass-card scroll-mt-28 p-4 sm:p-6 lg:px-9 lg:py-7">
              <Heading className="m-0">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${idPrefix}-answer-${i + 1}`}
                  onClick={() => setOpenIndex(expanded ? null : i)}
                  className="flex w-full cursor-pointer items-center gap-3 text-left sm:gap-6"
                >
                  <span
                    className="w-9 shrink-0 font-display text-2xl font-extrabold leading-none text-transparent bg-clip-text sm:w-12 sm:text-3xl"
                    style={{ backgroundImage: GRADIENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base font-extrabold leading-snug tracking-tight text-gray-900 sm:text-xl">
                    {q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                      expanded
                        ? "rotate-45 border-transparent bg-[#5C0F26] text-white"
                        : "border-gray-200 bg-white text-[#5C0F26]"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
              </Heading>

              <div
                id={`${idPrefix}-answer-${i + 1}`}
                hidden={!expanded}
                className="pt-4 sm:pl-[4.5rem]"
              >
                <p className="border-t border-gray-200/70 pt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">
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
