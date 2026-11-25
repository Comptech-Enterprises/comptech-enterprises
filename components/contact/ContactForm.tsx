"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const TOPICS = [
  "Speak to an AI expert",
  "Free AI audit",
  "Custom AI agents or software",
  "AI training",
  "Generative Engine Optimization",
  "IT services (software, hardware, AMC)",
  "Something else",
];

const field =
  "w-full rounded-xl border border-[#E1E4EA] bg-white px-4 py-3 text-sm text-[#12161C] outline-none transition-colors focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/10";
const label = "mb-1.5 block text-xs font-semibold text-gray-600";

const EMPTY = { name: "", email: "", company: "", phone: "", topic: TOPICS[0], message: "" };

/** General enquiry form on the Contact Us page (posts to /api/contact). */
export function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [website, setWebsite] = useState(""); // honeypot
  const [renderedAt] = useState(() => Date.now());
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

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
          // The API accepts digits only.
          phone: form.phone.replace(/\D/g, "") || undefined,
          service: form.topic,
          requirements: form.message.trim() || form.topic,
          source: "Contact Us Page",
          website,
          formRenderedAt: renderedAt,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again or call us directly.");
        setState("idle");
        return;
      }
      trackEvent("contact_form_submit", { form_location: "contact_page" });
      setState("done");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      setState("idle");
    }
  };

  if (state === "done") {
    return (
      <div role="status" className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-[0_10px_40px_rgba(17,8,11,0.08)]">
        <CheckCircle2 size={44} className="mx-auto text-green-600" aria-hidden="true" />
        <p className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#12161C]">Message received</p>
        <p className="mt-2 text-sm text-gray-600">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_rgba(17,8,11,0.08)] sm:p-8"
    >
      <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name *</span>
          <input required value={form.name} onChange={set("name")} className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>Work email *</span>
          <input required type="email" value={form.email} onChange={set("email")} className={field} autoComplete="email" />
        </label>
        <label className="block">
          <span className={label}>Company *</span>
          <input required value={form.company} onChange={set("company")} className={field} autoComplete="organization" />
        </label>
        <label className="block">
          <span className={label}>Phone (optional)</span>
          <input type="tel" value={form.phone} onChange={set("phone")} className={field} autoComplete="tel" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className={label}>How can we help?</span>
        <select value={form.topic} onChange={set("topic")} className={field}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block">
        <span className={label}>Message</span>
        <textarea rows={4} value={form.message} onChange={set("message")} className={`${field} resize-none`} />
      </label>
      {error && <p role="alert" className="mt-4 text-sm text-[#B91C1C]">{error}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B91C1C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#9F1818] disabled:opacity-60"
      >
        {state === "sending" ? "Sending..." : "Send message"} <ArrowRight size={15} />
      </button>
    </form>
  );
}
