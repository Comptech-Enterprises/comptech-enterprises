"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const inputClass =
  "w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-0 outline-none transition-all";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Contact Us</p>
            <h2
              id="contact-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Got a project in mind?<br />
              <span style={{ color: "#1D4ED8" }}>Let's talk.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-sm">
              Tell us about your requirements and our certified engineers will prepare a proposal within 24 hours.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { Icon: Phone,         label: "Call Us",   value: COMPANY.phone },
                { Icon: Mail,          label: "Email",     value: COMPANY.email },
                { Icon: MessageCircle, label: "WhatsApp",  value: "+91 98765 43210" },
                { Icon: MapPin,        label: "Office",    value: COMPANY.address },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "#EFF6FF" }}
                  >
                    <Icon size={18} style={{ color: "#1D4ED8" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: "#EFF6FF" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm">We'll get back to you within 2 business hours.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                  <input type="text" required className={inputClass} placeholder="John Doe"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Work Email *</label>
                  <input type="email" required className={inputClass} placeholder="john@company.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company *</label>
                  <input type="text" required className={inputClass} placeholder="Your company"
                    value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Service</label>
                  <select className={inputClass} value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service</option>
                    {["Enterprise Infrastructure","End User Computing","AI Solutions","Data Centre","Networking","CCTV & Security","Cloud Solutions","AMC"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message *</label>
                <textarea required rows={4} className={`${inputClass} resize-none`}
                  placeholder="Tell us about your IT requirements..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-gray-400">We respond within 2 business hours.</p>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "#1D4ED8" }}
                >
                  Send Message <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
