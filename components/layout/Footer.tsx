"use client";

import Link from "next/link";
import { Mail, MapPin, Linkedin, Instagram, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const AI_SERVICES = [
  { label: "GEO (Generative Engine Optimization)", href: "/geo" },
  { label: "Custom AI Agents", href: "/ai-solutions#agents" },
  { label: "AI Automation & Workflows", href: "/ai-solutions#automation" },
  { label: "AI Audits & Benchmarking", href: "/ai-solutions#audit" },
  { label: "Enterprise AI Training", href: "/ai-solutions#training" },
];

const IT_SERVICES = [
  { label: "Enterprise Infrastructure", href: "/services#infrastructure" },
  { label: "Networking & Cyber Security", href: "/services#security" },
  { label: "Cloud Architecture & Hosting", href: "/services#cloud" },
  { label: "Annual Maintenance Contracts (AMC)", href: "/services#amc" },
];

const COMPANY_LINKS = [
  { label: "Enterprise Partners", href: "/partners" },
  { label: "Verified Case Studies", href: "/case-studies" },
  { label: "Careers & Culture", href: "/careers" },
  { label: "About Comptech", href: "/" },
];

const SOCIALS = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/comptech-enterprises1",
    label: "LinkedIn",
    handle: "@comptech-enterprises1",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/comptechenterprises",
    label: "Instagram",
    handle: "@comptechenterprises",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#090A0F] text-white border-t border-white/10 overflow-hidden" role="contentinfo">
      {/* Ambient background glows */}
      <div
        className="absolute -top-32 right-1/4 w-96 h-96 rounded-full pointer-events-none blur-[140px] opacity-20"
        style={{ background: "#5C0F26" }}
      />
      <div
        className="absolute -bottom-32 left-10 w-80 h-80 rounded-full pointer-events-none blur-[120px] opacity-15"
        style={{ background: "#E8435A" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Links Grid */}
        <div className="py-14 sm:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission (Col 1-4) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col justify-between pr-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <Logo className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform duration-200" />
                <div>
                  <span className="font-display font-black text-lg tracking-tight text-white block leading-none group-hover:text-pink-300 transition-colors">
                    COMPTECH
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400">
                    ENTERPRISES
                  </span>
                </div>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Pioneering enterprise AI solutions, autonomous agent engineering, and Generative Engine Optimization across India and global markets.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 w-fit">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>ISO 9001:2015 Certified Enterprise</span>
            </div>
          </div>

          {/* AI Services (Col 5-6) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-5">
              AI Services
            </h3>
            <nav className="flex flex-col gap-3">
              {AI_SERVICES.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-flex items-center gap-1 group"
                >
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* IT Services (Col 7-8) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-5">
              IT Solutions
            </h3>
            <nav className="flex flex-col gap-3">
              {IT_SERVICES.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company (Col 9-10) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-5">
              Company
            </h3>
            <nav className="flex flex-col gap-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & HQ (Col 11-12) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-4">
                Headquarters
              </h3>
              <a
                href="https://maps.google.com/?q=Comptech+Enterprises+Janakpuri+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 text-xs text-gray-400 hover:text-white transition-colors leading-relaxed"
              >
                <MapPin size={14} className="shrink-0 mt-0.5 text-[#E8435A] group-hover:scale-110 transition-transform" />
                <span>{COMPANY.address}</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-3">
                Direct Contact
              </h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors mb-2"
              >
                <Mail size={13} className="text-[#E8435A]" />
                <span>{COMPANY.email}</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300 mb-3">
                Connect
              </h3>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#E8435A]/50 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
