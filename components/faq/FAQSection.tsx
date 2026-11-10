import { FAQList } from "@/components/faq/FAQList";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqJsonLd, type FAQItem } from "@/lib/faqs";

/** FAQ block for the bottom of a page, with matching FAQPage JSON-LD. */
export function FAQSection({
  items,
  heading = "Frequently Asked Questions",
  intro,
}: {
  items: FAQItem[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
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
        <FAQList items={items} />
      </div>
    </section>
  );
}
