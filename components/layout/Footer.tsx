"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
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
          India's trusted enterprise IT partner. Certified Dell, HP, Lenovo, Microsoft, and NVIDIA partner serving 200+ organizations.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Links grid + Map */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10">

            {/* Services */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Services</h3>
              <nav className="flex flex-col gap-2.5">
                {SERVICES.map(({ label, href }) => (
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
                <div className="flex flex-col gap-3.5">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    <Phone size={14} className="shrink-0 text-gray-900" />
                    {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    <Mail size={14} className="shrink-0 text-gray-900" />
                    {COMPANY.email}
                  </a>
                  <div className="flex items-start gap-2.5 text-sm text-gray-700">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-gray-900" />
                    {COMPANY.address}
                  </div>
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

          {/* Right — Map */}
          <div className="lg:w-[380px] shrink-0">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-5">Our Location</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-300" style={{ height: 280 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8162.161356476114!2d77.08226761405187!3d28.63043314304227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05cc68aaffd9%3A0x706a637432a46983!2sComptech%20Enterprises!5e1!3m2!1sen!2sin!4v1783152683613!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Comptech Enterprises location"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
