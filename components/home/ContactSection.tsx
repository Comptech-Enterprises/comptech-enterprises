"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NeuralField } from "@/components/ui/NeuralField";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all bg-white";

const CONTACT_METHODS = [
  { Icon: Phone,         label: "Call Us",   value: COMPANY.phone,        sub: "Mon–Sat, 9am–7pm"  },
  { Icon: Mail,          label: "Email",     value: COMPANY.email,        sub: "Response in 2 hrs" },
  { Icon: MessageCircle, label: "WhatsApp",  value: "+91 98765 43210",    sub: "Quick queries"     },
  { Icon: MapPin,        label: "Office",    value: COMPANY.address,      sub: "Schedule a visit"  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    phone: "", service: "", requirements: "", downloadProfile: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-20 bg-white" aria-labelledby="contact-title">
      <div className="absolute inset-0">
        <NeuralField color="92, 15, 38" opacity={0.16} density={30} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <RevealWrapper className="mb-8">
          <SectionLabel>Contact Us</SectionLabel>
          <h2
            id="contact-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Got a project in mind?{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
              Let's talk.
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl leading-relaxed">
            Share your requirements and our certified engineers will prepare a detailed, no-obligation proposal within 24 hours.
          </p>
        </RevealWrapper>

        {/* Form */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left — info + contact methods */}
          <RevealWrapper direction="left">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-3">Request a Custom IT Proposal</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-6 lg:mb-8">
              Tell us what you need and we'll get back to you within 2 business hours.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_METHODS.map(({ Icon, label, value, sub }) => (
                <div key={label} className="card-lift flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDF4F6" }}>
                    <Icon size={17} style={{ color: "#5C0F26" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What happens next */}
            <div className="mt-6 lg:mt-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">What happens next?</p>
              <div className="flex flex-col gap-4">
                {[
                  { step: "01", text: "We review your inquiry within 2 hours" },
                  { step: "02", text: "A certified engineer calls to understand your needs" },
                  { step: "03", text: "You receive a detailed, no-obligation proposal" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
                    >
                      {step}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Right form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-gray-100 bg-gray-50">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#FDF4F6" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 mb-2">Inquiry Received!</h3>
              <p className="text-gray-500 text-sm">We'll get back to you within 2 business hours.</p>
            </div>
          ) : (
            <form
              className="bg-gray-50 rounded-3xl p-5 sm:p-8 border border-gray-100"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setError("");
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, source: "Homepage Contact Section" }),
                  });
                  if (!res.ok) throw new Error("Request failed");
                  setSubmitted(true);
                } catch {
                  setError("Something went wrong. Please try again or call us directly.");
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label>
                  <input type="text" required className={inputClass} placeholder="John"
                    value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name *</label>
                  <input type="text" required className={inputClass} placeholder="Doe"
                    value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
              </div>

              {[
                { label: "Work Email *",    key: "email",   type: "email", placeholder: "john@company.com" },
                { label: "Company Name *",  key: "company", type: "text",  placeholder: "Your company"      },
                { label: "Phone Number",    key: "phone",   type: "tel",   placeholder: "+91 98765 43210"   },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
                  <input type={type} required={label.includes("*")} className={inputClass} placeholder={placeholder}
                    value={form[key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Required *</label>
                <select required className={inputClass} value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service</option>
                  {["Enterprise Infrastructure","End User Computing","AI Solutions","Data Centre","Networking","CCTV & Security","Cloud Solutions","AMC","Multiple Services"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Requirements *</label>
                <textarea required rows={4} className={`${inputClass} resize-none`}
                  placeholder="Describe your IT requirements, existing setup, and goals..."
                  value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
              </div>

              <label className="flex items-center gap-3 mb-6 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500"
                  checked={form.downloadProfile}
                  onChange={(e) => setForm({ ...form, downloadProfile: e.target.checked })} />
                <span className="text-sm text-gray-600">I'd like to download the Company Profile PDF</span>
              </label>

              {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                style={{ background: "#5C0F26" }}
              >
                {submitting ? "Sending..." : "Send Inquiry"} <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
