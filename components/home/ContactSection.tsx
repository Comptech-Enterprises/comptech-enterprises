"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const inputClass =
  "w-full rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
  + " bg-white/40 backdrop-blur-md border border-white/50 focus:border-blue-400 focus:bg-white/60";

const CONTACT_METHODS = [
  { Icon: Phone,         label: "Call Us",   value: COMPANY.phone,        sub: "Mon–Sat, 9am–7pm"  },
  { Icon: Mail,          label: "Email",     value: COMPANY.email,        sub: "Response in 2 hrs" },
  { Icon: MessageCircle, label: "WhatsApp",  value: "+91 8595073837",    sub: "Quick queries"     },
  { Icon: MapPin,        label: "Office",    value: COMPANY.address,      sub: "Schedule a visit"  },
];

const BOOKING_PATHS = [
  {
    id: "ai",
    label: "AI Project",
    name: "Paawan",
    role: "AI Solutions Lead",
    desc: "Building AI agents, automation, or want an AI audit? Book time directly on Paawan's calendar.",
    cta: "Talk to an AI Expert",
    href: "https://calendly.com/comptech-ai",
    email: "paawan@comptech.in",
  },
  {
    id: "it",
    label: "IT Infrastructure",
    name: "Mohit",
    role: "IT Solutions Lead",
    desc: "Need servers, networking, CCTV, or an AMC? Book time directly on Mohit's calendar.",
    cta: "Talk to an IT Expert",
    href: "https://calendly.com/comptech-it",
    email: COMPANY.email,
  },
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
    <section id="contact" className="relative py-16 lg:py-20 overflow-hidden" aria-labelledby="contact-title">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            id="contact-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Let&apos;s build your{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
              AI advantage.
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl leading-relaxed">
            Pick the right person and grab a slot directly on their calendar — no forms, no waiting.
          </p>
        </div>

        {/* Primary action: two Calendly-first booking paths */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14 lg:mb-16">
          {BOOKING_PATHS.map((p) => (
            <div
              key={p.id}
              className="glass-panel-strong rounded-3xl p-6 lg:p-7 flex flex-col"
            >
              <span
                className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: p.id === "ai" ? "#FDF4F6" : "#EFF6FF", color: p.id === "ai" ? "#5C0F26" : "#1D4ED8" }}
              >
                {p.label}
              </span>
              <h3 className="font-display font-extrabold text-xl text-gray-900 mb-1">{p.name}</h3>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{p.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{p.desc}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                style={{
                  background: p.id === "ai" ? "linear-gradient(135deg, #5C0F26, #E8435A)" : "linear-gradient(135deg, #1E3A8A, #1D4ED8)",
                }}
              >
                <Calendar size={15} />
                {p.cta}
              </a>
              <a href={`mailto:${p.email}`} className="text-xs text-gray-400 text-center mt-3 hover:text-gray-600 transition-colors">
                or email {p.email}
              </a>
            </div>
          ))}
        </div>

        {/* Secondary: contact methods + form */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left — contact methods */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Other Ways to Reach Us</p>
            <div className="flex flex-col gap-3">
              {CONTACT_METHODS.map(({ Icon, label, value, sub }) => (
                <div key={label} className="glass-card flex items-center gap-4 p-4 rounded-2xl">
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
          </div>

          {/* Right — secondary form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 rounded-3xl glass-panel-strong">
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
              className="glass-panel-strong rounded-3xl p-5 sm:p-8"
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Prefer to write instead?</p>
              <h3 className="font-display font-extrabold text-lg text-gray-900 mb-5">Send us your requirements</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label>
                  <input
                    id="contact-first-name"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name *</label>
                  <input
                    id="contact-last-name"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>

              {[
                { label: "Work Email *",    key: "email",   type: "email", placeholder: "john@company.com", auto: "email" },
                { label: "Company Name *",  key: "company", type: "text",  placeholder: "Your company",      auto: "organization" },
                { label: "Phone Number",    key: "phone",   type: "tel",   placeholder: "Phone number",      auto: "tel" },
              ].map(({ label, key, type, placeholder, auto }) => (
                <div key={key} className="mb-4">
                  <label htmlFor={`contact-${key}`} className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
                  <input
                    id={`contact-${key}`}
                    name={key}
                    type={type}
                    required={label.includes("*")}
                    autoComplete={auto}
                    className={inputClass}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}

              <div className="mb-4">
                <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-600 mb-1.5">Service Required *</label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {["AI Audit","Custom AI Agents","AI Automation","AI Training & Workshops","Enterprise Infrastructure","End User Computing","Networking & CCTV","Cloud Solutions","AMC","Multiple Services"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Requirements *</label>
                <textarea required rows={4} className={`${inputClass} resize-none`}
                  placeholder="Describe what you need, your current setup, and your goals..."
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
