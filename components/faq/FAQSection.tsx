import { FAQList } from "@/components/faq/FAQList";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqJsonLd, type FAQItem } from "@/lib/faqs";

export interface FAQGroup {
  title: string;
  items: FAQItem[];
}

/**
 * FAQ block for the bottom of a page, with one FAQPage JSON-LD covering every question shown.
 * Pass `items` for a single list, or `groups` for several titled lists on the same page.
 */
export function FAQSection({
  items,
  groups,
  heading = "Frequently Asked Questions",
  intro,
}: {
  items?: FAQItem[];
  groups?: FAQGroup[];
  heading?: string;
  intro?: string;
}) {
  const allItems = groups ? groups.flatMap((g) => g.items) : (items ?? []);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allItems)) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <RevealWrapper className="mb-10 text-center sm:mb-12">
          <SectionLabel className="justify-center">FAQs</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              {intro}
            </p>
          )}
        </RevealWrapper>

        {groups ? (
          <div className="space-y-12">
            {groups.map((g, gi) => (
              <div key={g.title}>
                <h3 className="mb-5 font-display text-xl font-extrabold tracking-tight text-[#5C0F26] sm:text-2xl">
                  {g.title}
                </h3>
                <FAQList items={g.items} headingLevel={4} idPrefix={`faq-g${gi + 1}`} />
              </div>
            ))}
          </div>
        ) : (
          <FAQList items={items ?? []} headingLevel={3} />
        )}
      </div>
    </section>
  );
}
