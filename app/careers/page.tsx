"use client";

import { useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, Upload, HeartHandshake, TrendingUp, Users } from "lucide-react";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all bg-white";

const DOMAINS = [
  "Accounting & Finance",
  "Sales & Marketing",
  "Enterprise Infrastructure",
  "Networking",
  "AI Solutions",
  "CCTV & Security",
  "Cloud Solutions",
  "Technical Support / Service",
  "Human Resources / Admin",
  "Other",
];

const PERKS = [
  { icon: TrendingUp, text: "Work on enterprise-scale infrastructure & AI projects" },
  { icon: Users, text: "Learn from a team of 50+ certified engineers" },
  { icon: HeartHandshake, text: "30+ years of stability and growth" },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", domain: "" });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Careers"
          title="Build Your Career With Comptech"
          subtitle="Join a team that powers enterprise IT, AI, and infrastructure across India. Send us your details and resume — we're always looking for great people."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          backgroundImage="/images/contact_banner.jpg"
        />

        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <RevealWrapper>
                <SectionLabel>Why Comptech</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Grow With a Team That Builds What Matters
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Whether you&apos;re an engineer, a sales professional, or just starting out — apply below and our
                  team will reach out when there&apos;s a fit.
                </p>
                <div className="flex flex-col gap-4">
                  {PERKS.map(({ icon: Icon, text }) => (
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
                {submitted ? (
                  <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Application Received!</h3>
                    <p className="text-gray-500 text-sm">Thanks for applying. We&apos;ll be in touch if there&apos;s a match.</p>
                  </div>
                ) : (
                  <form
                    className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!file) {
                        setError("Please attach your resume.");
                        return;
                      }
                      setSubmitting(true);
                      setError("");
                      try {
                        const data = new FormData();
                        data.append("name", form.name);
                        data.append("email", form.email);
                        data.append("domain", form.domain);
                        data.append("resume", file);
                        const res = await fetch("/api/careers", { method: "POST", body: data });
                        if (!res.ok) {
                          const body = await res.json().catch(() => ({}));
                          throw new Error(body.error || "Request failed");
                        }
                        setSubmitted(true);
                      } catch (err) {
                        setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                  >
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        className={inputClass}
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
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Domain / Position *</label>
                      <select
                        required
                        className={inputClass}
                        value={form.domain}
                        onChange={(e) => setForm({ ...form, domain: e.target.value })}
                      >
                        <option value="">Select a domain</option>
                        {DOMAINS.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Resume * (PDF or Word, max 5 MB)</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full flex items-center gap-3 border border-dashed border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-gray-700 transition-colors text-left"
                      >
                        <Upload size={16} className="text-blue-700 shrink-0" />
                        <span className="truncate">{file ? file.name : "Click to upload your resume"}</span>
                      </button>
                    </div>
                    {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
                    <button type="submit" disabled={submitting} className="btn-accent btn btn-lg w-full disabled:opacity-60">
                      {submitting ? "Submitting..." : "Submit Application"} <ArrowRight size={18} className="btn-arrow" />
                    </button>
                  </form>
                )}
              </RevealWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
