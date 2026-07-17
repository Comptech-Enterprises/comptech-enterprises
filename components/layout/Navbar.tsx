"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, X, Menu, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

interface NavbarProps {
  transparent?: boolean;
}

type NavLink = {
  label: string;
  href: string;
  groups?: { label: string; items: { label: string; href: string }[] }[];
  children?: { label: string; href: string }[];
};

export function Navbar({ transparent = false }: NavbarProps) {
  const [solid, setSolid] = useState(!transparent);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll(); // sync to current scroll position on mount (e.g. reloading mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setHoveredGroup(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setHoveredGroup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = transparent && !solid;
  const textColor = isTransparent ? "text-white/90" : "text-gray-700";
  const logoTextColor = isTransparent ? "text-white" : "text-gray-900";
  const activeColor = isTransparent ? "text-white font-semibold" : "text-[#5C0F26] font-semibold";
  const hoverBg = isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100";

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] transition-all duration-500",
          // While the mobile panel is open, drop the solid white bar so it doesn't cover
          // the panel's own header, and let clicks fall through to the panel.
          solid && !mobileOpen ? "navbar-solid" : "navbar-transparent",
          mobileOpen && "pointer-events-none",
        )}
        style={{ height: "var(--nav-height)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between gap-8">
          {/* Logo — hidden while the mobile menu is open so it doesn't overlap the panel's own logo */}
          <Link
            href="/"
            className={clsx(
              "flex items-center gap-2 sm:gap-2.5 min-w-0 shrink transition-opacity duration-200",
              mobileOpen && "opacity-0 pointer-events-none",
            )}
          >
            <Logo className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 shrink-0" />
            <span
              className={clsx(
                "font-display font-extrabold text-base sm:text-xl lg:text-2xl leading-none tracking-tight transition-colors duration-300 truncate",
                logoTextColor,
              )}
            >
              Comptech Enterprises
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {(NAV_LINKS as NavLink[]).map((link) =>
              link.groups ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => {
                      const next = !dropdownOpen;
                      setDropdownOpen(next);
                      setHoveredGroup(next ? link.groups![0].label : null);
                    }}
                    className={clsx(
                      `flex items-center gap-1 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${hoverBg}`,
                      textColor,
                      pathname.startsWith(link.href) && activeColor,
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={clsx("transition-transform duration-200", dropdownOpen && "rotate-180")}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 flex overflow-hidden min-w-[480px]">
                      {/* Group list */}
                      <div className="w-44 border-r border-gray-100 py-2">
                        {link.groups.map((group) => (
                          <button
                            key={group.label}
                            onMouseEnter={() => setHoveredGroup(group.label)}
                            className={clsx(
                              "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors duration-150",
                              hoveredGroup === group.label
                                ? "bg-[#FDF4F6] text-[#5C0F26]"
                                : "text-gray-700 hover:bg-gray-50",
                            )}
                          >
                            {group.label}
                            <ChevronRight size={14} className="text-gray-400" />
                          </button>
                        ))}
                      </div>

                      {/* Items panel */}
                      <div className="flex-1 py-2">
                        {link.groups.map((group) =>
                          hoveredGroup === group.label ? (
                            <div key={group.label}>
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={clsx(
                                    "flex items-center gap-2 px-5 py-3 text-sm text-gray-700 hover:bg-[#FDF4F6] hover:text-[#5C0F26] transition-colors duration-150",
                                    pathname === item.href && "text-[#5C0F26] font-semibold bg-[#FDF4F6]",
                                  )}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C0F26]/30 flex-shrink-0" />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ) : null,
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    `px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${hoverBg}`,
                    textColor,
                    pathname === link.href && activeColor,
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className={clsx(
                "text-sm font-semibold px-5 py-2.5 rounded-xl border transition-all duration-200",
                isTransparent
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-gray-200 text-gray-700 hover:border-[#5C0F26]/30 hover:text-[#5C0F26]",
              )}
            >
              Talk to an Expert
            </Link>
            <Link
              href="/contact#quote"
              className="btn-accent btn btn-sm text-sm px-5 py-2.5 !bg-[#5C0F26] hover:!bg-[#3F0A1A]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle — hidden once open; the panel's own header provides the close button */}
          <button
            className={clsx(
              "lg:hidden p-2 rounded-lg transition-colors shrink-0",
              textColor,
              hoverBg,
              mobileOpen && "hidden",
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={clsx("mobile-nav", mobileOpen && "open")} aria-hidden={!mobileOpen}>
        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Logo className="w-10 h-10" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <div className="px-6 pt-6 pb-4 flex flex-col gap-1">
          {(NAV_LINKS as NavLink[]).map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "flex items-center justify-between w-full px-5 py-4 rounded-2xl text-[17px] font-semibold transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-[#5C0F26] bg-[#FDF4F6]"
                    : "text-gray-800 hover:bg-gray-50",
                )}
              >
                {link.label}
                <ArrowRight
                  size={17}
                  className={clsx(
                    "shrink-0",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-[#5C0F26]"
                      : "text-gray-400",
                  )}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="px-6 pt-2 pb-10 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-4 rounded-2xl border-2 border-[#5C0F26] text-[#5C0F26] text-[15px] font-bold text-center hover:bg-[#FDF4F6] transition-colors"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/contact#quote"
            onClick={() => setMobileOpen(false)}
            className="w-full py-4 rounded-2xl bg-[#5C0F26] hover:bg-[#3F0A1A] text-white text-[15px] font-bold text-center transition-colors flex items-center justify-center gap-2"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
