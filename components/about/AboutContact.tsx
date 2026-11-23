"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const field =
  "w-full rounded-xl border border-white/10 bg-[#1A0F12] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#B91C1C]";

/** Final CTA: dark grid section with the audit request form (posts to /api/contact). */
export function AboutContact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const [renderedAt] = useState(() => Date.now());
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          service: "AI Audit",
          requirements: form.message.trim() || "Free AI audit request",
          source: "About Page Contact Form",
          website,
          formRenderedAt: renderedAt,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("contact_form_submit", { form_location: "about_page" });
      setState("done");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      setState("idle");
    }
  };

  return (
    <section className="about-grid-bg py-16 text-white lg:py-24" aria-labelledby="about-cta">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 id="about-cta" className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.025em] lg:text-5xl">
            Let&apos;s build your AI-powered business.
          </h2>
          <p className="mt-4 max-w-md text-base text-[#C9CCD3]">
            Tell us what&apos;s eating your team&apos;s time. We&apos;ll show you exactly what we&apos;d build.
          </p>
        </div>
        {state === "done" ? (
          <div className="rounded-2xl border border-white/10 bg-[#170B0F] p-8 text-center">
            <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold">Request received</p>
            <p className="mt-2 text-sm text-[#C9CCD3]">We&apos;ll get back to you within 2 business hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4" noValidate>
            <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">Name</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} autoComplete="name" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">Work email</span>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} autoComplete="email" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">Company</span>
              <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={field} autoComplete="organization" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-white/80">What is eating your team&apos;s time?</span>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
            </label>
            {error && <p role="alert" className="text-sm text-[#F2A7B0]">{error}</p>}
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full rounded-full bg-[#B91C1C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#9F1818] disabled:opacity-60"
            >
              {state === "sending" ? "Sending..." : "Book my free AI audit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
