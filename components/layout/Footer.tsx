"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Logo className="w-11 h-11" />
              <span className="font-display font-extrabold text-xl text-white leading-none tracking-tight">
                Comptech<span className="text-[#5C0F26]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's trusted enterprise IT solutions partner since 2008. Certified Dell, HP, Lenovo, and Microsoft partner.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#5C0F26] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Services</h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Enterprise Infrastructure", href: "/services/infrastructure" },
                { label: "End User Computing",        href: "/services/euc" },
                { label: "AI Solutions",              href: "/ai-solutions" },
                { label: "Data Centre Solutions",     href: "/services/datacenter" },
                { label: "Networking",                href: "/services/networking" },
                { label: "CCTV & Security",           href: "/services/security" },
                { label: "Cloud Solutions",           href: "/services/cloud" },
                { label: "AMC",                       href: "/services/amc" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-[#5C0F26] transition-all duration-200 overflow-hidden" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Company</h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us",       href: "/about" },
                { label: "Partners",       href: "/partners" },
                { label: "Case Studies",   href: "/case-studies" },
                { label: "Blog",           href: "/blog" },
                { label: "Careers",        href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Use",   href: "#" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-[#5C0F26] transition-all duration-200 overflow-hidden" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Contact</h3>
            <div className="flex flex-col gap-3 mb-8">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={15} className="text-[#5C0F26] shrink-0" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={15} className="text-[#5C0F26] shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-[#5C0F26] shrink-0 mt-0.5" />
                {COMPANY.address}
              </div>
            </div>

            {/* Newsletter */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Work email"
                required
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5C0F26] transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-[#5C0F26] rounded-xl flex items-center justify-center hover:bg-[#3F0A1A] transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">OEM Partners</span>
            {["Dell", "HP", "Lenovo", "Microsoft", "Intel", "NVIDIA", "Canon"].map((name) => (
              <span key={name} className="text-sm font-bold text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
