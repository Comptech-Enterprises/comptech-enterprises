import { Plus } from "lucide-react";
import { ABOUT_FAQS } from "@/components/about/data";
import { faqJsonLd } from "@/lib/faqs";

/** Simple FAQ rows (native <details>) plus FAQPage JSON-LD. */
export function AboutFAQ({ schema = true }: { schema?: boolean }) {
  return (
    <section className="bg-[#F6F7FA] py-16 lg:py-20" aria-labelledby="about-faq">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ABOUT_FAQS.map((f) => ({ q: f.q, a: f.a })))) }}
        />
      )}
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="about-faq"
          className="text-center font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.025em] text-[#12161C] lg:text-5xl"
        >
          FAQs
        </h2>
        <div className="mt-10 border-t border-[#E1E4EA]">
          {ABOUT_FAQS.map((f) => (
            <details key={f.q} className="group border-b border-[#E1E4EA]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-semibold text-[#12161C] [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={18} className="about-plus shrink-0 text-[#B91C1C] transition-transform" aria-hidden="true" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
