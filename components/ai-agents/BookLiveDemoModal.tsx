"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Building2,
  Mail,
  User,
  ShieldCheck,
} from "lucide-react";

interface BookLiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookLiveDemoModal({ isOpen, onClose }: BookLiveDemoModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [website, setWebsite] = useState(""); // Honeypot
  const [formRenderedAt, setFormRenderedAt] = useState(() => Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormRenderedAt(Date.now());
      setSubmitted(false);
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          service: "Sales AI Agent",
          requirements: "Live Demo Request for Sales AI Agent",
          source: "Sales AI Agent - Book Live Demo Modal",
          website,
          formRenderedAt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit demo request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 my-8"
          >
            {/* Top Accent Gradient Bar */}
            <div
              className="h-2 w-full"
              style={{
                background: "linear-gradient(90deg, #5C0F26 0%, #E8435A 50%, #7C3AED 100%)",
              }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {submitted ? (
                /* Success Screen */
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-black text-2xl text-gray-900 mb-2">
                    Live Demo Booked!
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Thank you, <strong className="text-gray-900">{form.name}</strong>! We have received your demo request for{" "}
                    <strong className="text-gray-900">{form.company}</strong>. Our Sales AI team has been notified and will reach out to{" "}
                    <strong className="text-gray-900">{form.email}</strong> shortly to confirm your interactive walkthrough.
                  </p>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-500 mb-6 flex items-center justify-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span>Notification dispatched to dedicated Sales AI desk.</span>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-md hover:opacity-95"
                    style={{
                      background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Booking Form */
                <>
                  <div className="mb-6">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 tracking-tight">
                      Book a Live Demo
                    </h3>
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                      Experience how our Sales AI Agent qualifies prospects and automates outreach in real time.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field (hidden from real users) */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="absolute -left-[9999px] w-px h-px opacity-0"
                    />

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Rivera"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#5C0F26] focus:ring-2 focus:ring-[#5C0F26]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="FinEdge Systems"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#5C0F26] focus:ring-2 focus:ring-[#5C0F26]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@finedge.io"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#5C0F26] focus:ring-2 focus:ring-[#5C0F26]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl font-bold text-base text-white transition-all duration-200 shadow-xl hover:scale-[1.01] hover:opacity-95 disabled:opacity-60 flex items-center justify-center gap-2"
                        style={{
                          background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                          boxShadow: "0 8px 24px rgba(92, 15, 38, 0.25)",
                        }}
                      >
                        {submitting ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Booking Your Demo...
                          </>
                        ) : (
                          <>
                            Book a Live Demo <ArrowRight size={17} />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-gray-400">
                      No credit card required. We respect your inbox privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
