"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const SERVICES = [
  { label: "Enterprise Infrastructure", href: "/services/infrastructure" },
  { label: "End User Computing",        href: "/services/euc" },
  { label: "AI Solutions",              href: "/ai-solutions" },
  { label: "Data Centre Solutions",     href: "/services/datacenter" },
  { label: "Networking",                href: "/services/networking" },
  { label: "CCTV & Security",           href: "/services/security" },
  { label: "Cloud Solutions",           href: "/services/cloud" },
  { label: "AMC",                       href: "/services/amc" },
];

const COMPANY_LINKS = [
  { label: "About Us",     href: "/about" },
  { label: "Partners",     href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog",         href: "/blog" },
  { label: "Careers",      href: "#" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter,  href: "#", label: "Twitter" },
  { Icon: Youtube,  href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] text-white" role="contentinfo">

      {/* Big brand display */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
          Enterprise IT Solutions — Since 2008
        </p>
        <h2
          className="font-display font-extrabold text-white leading-none tracking-tighter"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          Comptech
          <span style={{ color: "#5C0F26" }}>.</span>
        </h2>
        <p className="mt-4 text-white/40 text-base max-w-md leading-relaxed">
          India's trusted enterprise IT partner. Certified Dell, HP, Lenovo, Microsoft, and NVIDIA partner serving 200+ organizations.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.07]" />

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Services */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Services</h3>
            <nav className="flex flex-col gap-2.5">
              {SERVICES.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Company</h3>
            <nav className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Contact</h3>
            <div className="flex flex-col gap-3.5">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors">
                <Phone size={14} className="shrink-0" style={{ color: "#1D4ED8" }} />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors">
                <Mail size={14} className="shrink-0" style={{ color: "#1D4ED8" }} />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#1D4ED8" }} />
                {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-150 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <Icon size={15} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
