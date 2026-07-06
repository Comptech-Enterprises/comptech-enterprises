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
  backgroundImage?: string;
}

export function PageHero({ badge, title, subtitle, breadcrumbs, actions, dark, backgroundImage }: PageHeroProps) {
  const bgClass = dark
    ? "bg-ai-gradient"
    : "page-hero-bg";

  return (
    <section className={`${bgClass} pt-[calc(var(--nav-height)+4rem)] pb-16 lg:pb-24 relative overflow-hidden`}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          priority
          aria-hidden="true"
        />
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-white/30" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70" aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-widest mb-5">
            {badge}
          </div>
        )}

        <h1 className="font-display font-extrabold text-display-lg text-white text-balance max-w-3xl mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{subtitle}</p>
        )}

        {actions && (
          <div className="flex gap-4 flex-wrap">{actions}</div>
        )}
      </div>
    </section>
  );
}
