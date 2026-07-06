"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Calendar, Building2 } from "lucide-react";

const CONTACT_METHODS = [
  { Icon: Phone, title: "Call Us", value: "+91 8595073837", sub: "Mon–Sat, 9am–7pm" },
  { Icon: Mail, title: "Email Us", value: "mohit@comptech.in", sub: "Response in 2 hrs" },
  { Icon: MessageCircle, title: "WhatsApp", value: "+91 8595073837", sub: "Quick queries" },
  { Icon: MapPin, title: "Visit Us", value: "Janakpuri, New Delhi", sub: "Schedule a visit" },
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all bg-white";

export default function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    requirements: "",
    downloadProfile: false,
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Contact Us"
          title="Let's Talk Enterprise IT"
          subtitle="Get a custom proposal, schedule a demo, or speak to a certified engineer — we respond within 2 business hours."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          backgroundImage="/images/contact_banner.jpg"
        />

        {/* Contact Methods */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {CONTACT_METHODS.map(({ Icon, title, value, sub }) => (
                <RevealWrapper key={title}>
                  <div className="card-lift bg-gray-50 border border-gray-200 rounded-3xl p-7 text-center">
                    <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-blue-700 font-semibold text-sm mb-1">{value}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <RevealWrapper>
                <SectionLabel>Get a Quote</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Request a Custom IT Proposal
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Share your requirements and our certified engineers will prepare a detailed, no-obligation proposal
                  within 24 hours.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: Building2, text: "OEM-certified Dell, HP, Lenovo solutions" },
                    { icon: Phone, text: "Dedicated account manager assigned" },
                    { icon: Calendar, text: "Free site assessment available" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-blue-700" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                {quoteSubmitted ? (
                  <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Inquiry Received!</h3>
                    <p className="text-gray-500 text-sm">We&apos;ll get back to you within 2 business hours.</p>
                  </div>
                ) : (
                  <form
                    className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setQuoteSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          value={quoteForm.firstName}
                          onChange={(e) => setQuoteForm({ ...quoteForm, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          value={quoteForm.lastName}
                          onChange={(e) => setQuoteForm({ ...quoteForm, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    {[
                      { label: "Work Email *", key: "email", type: "email" },
                      { label: "Company Name *", key: "company", type: "text" },
                      { label: "Phone Number", key: "phone", type: "tel" },
                    ].map(({ label, key, type }) => (
                      <div key={key} className="mb-4">
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
                        <input
                          type={type}
                          required={label.includes("*")}
                          className={inputClass}
                          value={quoteForm[key as keyof typeof quoteForm] as string}
                          onChange={(e) => setQuoteForm({ ...quoteForm, [key]: e.target.value })}
                        />
                      </div>
                    ))}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Required *</label>
                      <select
                        required
                        className={inputClass}
                        value={quoteForm.service}
                        onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        {[
                          "Enterprise Infrastructure",
                          "End User Computing",
                          "AI Solutions",
                          "Data Centre",
                          "Networking",
                          "CCTV & Security",
                          "Cloud Solutions",
                          "AMC",
                          "Multiple Services",
                        ].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Estimated Budget</label>
                      <select
                        className={inputClass}
                        value={quoteForm.budget}
                        onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })}
                      >
                        <option value="">Select budget range</option>
                        {["Under ₹5L", "₹5L–20L", "₹20L–1Cr", "₹1Cr+", "Prefer to discuss"].map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Requirements *</label>
                      <textarea
                        required
                        rows={4}
                        className={`${inputClass} resize-none min-h-32`}
                        placeholder="Describe your IT requirements, existing setup, and goals..."
                        value={quoteForm.requirements}
                        onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                      />
                    </div>
                    <label className="flex items-center gap-3 mb-6 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500"
                        checked={quoteForm.downloadProfile}
                        onChange={(e) => setQuoteForm({ ...quoteForm, downloadProfile: e.target.checked })}
                      />
                      <span className="text-sm text-gray-600">I&apos;d like to download the Company Profile PDF</span>
                    </label>
                    <button type="submit" className="btn-accent btn btn-lg w-full">
                      Send Inquiry <ArrowRight size={18} className="btn-arrow" />
                    </button>
                  </form>
                )}
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-12">
              <SectionLabel className="justify-center">Our Location</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">Find Us in Delhi</h2>
            </RevealWrapper>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <RevealWrapper className="lg:col-span-2">
                <div className="rounded-3xl overflow-hidden h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8162.161356476114!2d77.08226761405187!3d28.63043314304227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05cc68aaffd9%3A0x706a637432a46983!2sComptech%20Enterprises!5e1!3m2!1sen!2sin!4v1783152683613!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Comptech Enterprises location"
                  />
                </div>
              </RevealWrapper>
              <RevealWrapper delay={150} className="flex flex-col gap-5">
                {[
                  { Icon: MapPin, label: "Address", value: "207, DDA-1, District Center, JanakPuri, New Delhi, India" },
                  { Icon: Phone, label: "Phone", value: "+91 8595073837" },
                  { Icon: Mail, label: "Email", value: "mohit@comptech.in" },
                  { Icon: Calendar, label: "Office Hours", value: "Mon–Sat, 9:00am – 7:00pm IST" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 mb-0.5">{label}</div>
                      <div className="text-sm font-medium text-gray-800">{value}</div>
                    </div>
                  </div>
                ))}
              </RevealWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
