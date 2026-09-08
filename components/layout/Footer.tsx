"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const AI_SERVICES = [
  { label: "Custom AI Agents",        href: "/ai-solutions#agents" },
  { label: "AI Automation",           href: "/ai-solutions#automation" },
  { label: "AI Audits",               href: "/ai-solutions#audit" },
  { label: "AI Training & Workshops", href: "/ai-solutions#training" },
];

const IT_SERVICES = [
  { label: "Enterprise Infrastructure", href: "/services#infrastructure" },
  { label: "Networking & Security",     href: "/services#security" },
  { label: "Cloud Solutions",           href: "/services#cloud" },
  { label: "AMC",                       href: "/services#amc" },
];

const COMPANY_LINKS = [
  { label: "Partners",     href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog",         href: "/blog" },
  { label: "Careers",      href: "/careers" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/comptech-enterprises1", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/comptechenterprises", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#e8e8e8] text-gray-900" role="contentinfo">

      {/* Big brand display */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
                <p className="font-display font-extrabold text-2xl tracking-tight mb-4" style={{ color: "#5C0F26" }}>
          Comptech Enterprises
        </p>
        <p className="text-gray-600 text-base max-w-md leading-relaxed">
          Custom AI solutions built around how your business works. For IT infrastructure enquiries: mohit@comptech.in
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Links grid + Map */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* AI Services */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">AI Services</h3>
              <nav className="flex flex-col gap-2.5">
                {AI_SERVICES.map(({ label, href }) => (
                  <Link key={href} href={href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-150">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">IT Services</h3>
              <nav className="flex flex-col gap-2.5">
                {IT_SERVICES.map(({ label, href }) => (
                  <Link key={href} href={href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-150">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Company</h3>
              <nav className="flex flex-col gap-2.5">
                {COMPANY_LINKS.map(({ label, href }) => (
                  <Link key={label} href={href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-150">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact + Socials */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:paawan@comptech.in" className="flex items-start gap-2.5 group">
                    <Mail size={14} className="shrink-0 mt-0.5 text-gray-900" />
                    <span className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">AI Solutions</span>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">paawan@comptech.in</span>
                    </span>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2.5 group">
                    <Mail size={14} className="shrink-0 mt-0.5 text-gray-900" />
                    <span className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">IT Services</span>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{COMPANY.email}</span>
                    </span>
                  </a>
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    <Phone size={14} className="shrink-0 text-gray-900" />
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Follow Us</h3>
                <div className="flex flex-col gap-3">
                  {SOCIALS.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-150 group">
                      <div className="w-8 h-8 rounded-lg bg-gray-300 group-hover:bg-gray-400 flex items-center justify-center transition-colors">
                        <Icon size={15} className="text-gray-900" />
                      </div>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right — Office (minimised, no embedded map) */}
          <div className="lg:w-[280px] shrink-0">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Office</h3>
            <a
              href="https://maps.google.com/?q=Comptech+Enterprises+Janakpuri+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              <MapPin size={14} className="shrink-0 mt-0.5 text-gray-900" />
              <span>{COMPANY.address}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
