import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface Breadcrumb { label: string; href?: string }

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  actions?: ReactNode;
  dark?: boolean;
  /** Plain white background instead of the colored gradient, with dark text. */
  light?: boolean;
  backgroundImage?: string;
  children?: ReactNode;
}

export function PageHero({ badge, title, subtitle, breadcrumbs, actions, dark, light, backgroundImage, children }: PageHeroProps) {
  const bgClass = dark
    ? "bg-ai-gradient"
    : light
    ? "bg-white"
    : "page-hero-bg";

  return (
    <section className={`${bgClass} pt-[calc(var(--nav-height)+4rem)] pb-16 lg:pb-24 relative overflow-hidden`}>
      {children}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center opacity-15 mix-blend-luminosity"
          priority
          aria-hidden="true"
        />
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav
            className={`hero-anim flex items-center gap-1.5 text-sm mb-6 ${light ? "text-gray-400" : "text-white/50"}`}
            style={{ animationDelay: "0s" }}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className={light ? "text-gray-300" : "text-white/30"} />}
                {crumb.href ? (
                  <Link href={crumb.href} className={`transition-colors ${light ? "hover:text-gray-600" : "hover:text-white/80"}`}>{crumb.label}</Link>
                ) : (
                  <span className={light ? "text-gray-600" : "text-white/70"} aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div
            className={
              light
                ? "hero-anim inline-flex items-center gap-2 bg-[#FDF4F6] border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-[#5C0F26] uppercase tracking-widest mb-5"
                : "hero-anim inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-widest mb-5"
            }
            style={{ animationDelay: "0.08s" }}
          >
            {badge}
          </div>
        )}

        <h1
          className={`hero-anim font-display font-extrabold text-display-lg text-balance max-w-3xl mb-4 leading-tight ${light ? "text-gray-900" : "text-white"}`}
          style={{ animationDelay: "0.16s" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`hero-anim text-lg max-w-2xl leading-relaxed mb-8 ${light ? "text-gray-500" : "text-white/70"}`}
            style={{ animationDelay: "0.24s" }}
          >
            {subtitle}
          </p>
        )}

        {actions && (
          <div className="hero-anim flex gap-4 flex-wrap" style={{ animationDelay: "0.32s" }}>{actions}</div>
        )}
      </div>
    </section>
  );
}
