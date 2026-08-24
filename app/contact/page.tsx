"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Calendar, Sparkles, Users, Cpu } from "lucide-react";

const TRAINING_CLIENTS = [
  "Anthem",
  "Foodtalk India",
  "Summit Hotels",
  "Beanly Coffee",
  "Shervani Hotels",
  "SRCC",
  "IIT Delhi",
  "Coreweave",
  "Stark Partners",
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all bg-white";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    useCase: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Responsive AI Training Storytelling Hero Video */}
        <section
          className="relative overflow-hidden"
          style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}
          aria-label="Hero"
        >
          <video
            key={isMobile ? "mobile" : "desktop"}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source src={isMobile ? "/training-bg-mobile.mp4" : "/training-bg.mp4"} type="video/mp4" />
          </video>

          {/* Gradient mesh blobs for glass depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "#5C0F26" }} />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15" style={{ background: "#1D4ED8" }} />
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 70%, #ffffff 100%)" }}
          />
        </section>

        {/* Companies Leveraging our AI Trainings Ticker (Single large line) */}
        <section className="bg-white pt-12 sm:pt-16 pb-10 sm:pb-14 overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex-1 h-px bg-gray-200" />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                Companies Leveraging our AI Trainings
              </p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="overflow-hidden py-2">
              <div
                className="flex w-max gap-3 sm:gap-4"
                style={{
                  animation: "ticker-scroll 26s linear infinite",
                }}
              >
                {TRAINING_CLIENTS.concat(TRAINING_CLIENTS).map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="shrink-0 glass-card rounded-full px-6 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-lg lg:text-xl font-bold text-gray-800 whitespace-nowrap cursor-default hover:border-[#5C0F26]/40 hover:text-[#5C0F26] transition-colors"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Training Booking Form */}
        <section id="training-form" className="bg-gray-50 py-14 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <RevealWrapper>
                <SectionLabel>Corporate AI Workshops</SectionLabel>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-5 leading-tight">
                  Upskill Your Team in Practical AI
                </h2>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Whether you want your engineering team to build custom AI agents or non-technical staff to 10x their productivity with generative AI tools, we design tailored enterprise workshops.
                </p>
                <div className="flex flex-col gap-3.5 sm:gap-4 mb-8 lg:mb-0">
                  {[
                    { icon: Sparkles, text: "Practical, project-based curriculum tailored to your industry" },
                    { icon: Users, text: "Workshops for MSMEs, startups, and enterprise teams" },
                    { icon: Cpu, text: "Led by certified AI engineers and industry practitioners" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-xs sm:text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-xl bg-[#FDF4F6] flex items-center justify-center shrink-0">
                        <Icon size={15} style={{ color: "#5C0F26" }} />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                {submitted ? (
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg text-center">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2">Training Request Received!</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Our AI training coordinator will reach out within 2 business hours with curriculum details.</p>
                  </div>
                ) : (
                  <form
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setSubmitting(true);
                      setError("");
                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: form.name,
                            email: form.email,
                            company: form.company,
                            employees: form.employees,
                            useCase: form.useCase,
                            requirements: form.notes || `Training for ${form.employees} employees (Use Case: ${form.useCase})`,
                            source: "Book an AI Training Page",
                          }),
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
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Your Company Name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Number of Employees in Training *</label>
                        <input
                          type="number"
                          min="1"
                          required
                          className={inputClass}
                          placeholder="e.g. 20"
                          value={form.employees}
                          onChange={(e) => setForm({ ...form, employees: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Use Case *</label>
                        <select
                          required
                          className={inputClass}
                          value={form.useCase}
                          onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                        >
                          <option value="">Select a use case</option>
                          <option value="AI Development">AI Development</option>
                          <option value="AI tools usage">AI tools usage</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Additional Notes / Goals (Optional)</label>
                      <textarea
                        rows={3}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about specific tools, workflows, or team objectives..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      />
                    </div>

                    {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-accent btn btn-lg w-full disabled:opacity-60 !bg-[#5C0F26] hover:!bg-[#3F0A1A]"
                    >
                      {submitting ? "Submitting..." : "Book AI Training"} <ArrowRight size={18} className="btn-arrow" />
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
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDF4F6" }}>
                      <Icon size={17} style={{ color: "#5C0F26" }} />
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
