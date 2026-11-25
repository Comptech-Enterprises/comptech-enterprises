import type { Metadata } from "next";
import Link from "next/link";
import { Sora, Instrument_Sans } from "next/font/google";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/faq/FAQSection";
import { CONTACT_FAQS } from "@/lib/faqs";
import { pageAlternates } from "@/lib/seo";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

const TITLE = "Contact Us for AI Solutions & IT Support";
const DESCRIPTION =
  "Get in touch for AI agents, custom solutions, AI training, or enterprise IT support. Free AI audit available.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: pageAlternates("/contact"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: `${TITLE} | Comptech Enterprises`,
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

const DETAILS = [
  { Icon: Phone, label: "Phone", value: "+91 8595073837", href: "tel:+918595073837" },
  { Icon: Mail, label: "Email", value: "mohit@comptech.in", href: "mailto:mohit@comptech.in" },
  { Icon: MapPin, label: "Address", value: "207, DDA-1, District Center, Janakpuri, New Delhi, India" },
  { Icon: Calendar, label: "Office hours", value: "Mon–Sat, 9:00am – 7:00pm IST" },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8162.161356476114!2d77.08226761405187!3d28.63043314304227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05cc68aaffd9%3A0x706a637432a46983!2sComptech%20Enterprises!5e1!3m2!1sen!2sin!4v1783152683613!5m2!1sen!2sin";

export default function ContactPage() {
  return (
    <div className={`${sora.variable} ${instrument.variable} font-[family-name:var(--font-instrument)]`}>
      <Navbar />
      <Breadcrumbs path="/contact" />
      <main>
        <section id="quote" className="bg-[#F6F7FA] pb-12 pt-[calc(var(--nav-height)+3.5rem)] lg:pb-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
            <div>
              <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.03em] text-[#12161C] lg:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
                Speak to an AI expert. Tell us what is eating your team&apos;s time and we will show you what we would build.
              </p>
              <ul className="mt-8 space-y-4">
                {DETAILS.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#B91C1C] ring-1 ring-[#E5E7EB]">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-gray-500">{label}</span>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-[#12161C] hover:text-[#B91C1C]">{value}</a>
                      ) : (
                        <span className="text-sm font-medium text-[#12161C]">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/ai-training" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B91C1C]">
                Looking for team training? Book an AI workshop <ArrowRight size={15} />
              </Link>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20" aria-labelledby="contact-map">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 id="contact-map" className="text-center font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.025em] text-[#12161C]">
              Find us in Delhi
            </h2>
            <div className="mt-8 h-80 overflow-hidden rounded-3xl">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Comptech Enterprises location"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="glass-mesh-page">
        <FAQSection
          items={CONTACT_FAQS}
          intro="Booking a workshop, where we are, how fast we reply, and what to prepare before you get in touch."
        />
      </div>
      <Footer />
    </div>
  );
}
