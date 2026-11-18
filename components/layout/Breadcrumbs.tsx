import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BREADCRUMB_TRAILS, breadcrumbJsonLd, type Crumb } from "@/lib/breadcrumbs";

interface BreadcrumbsProps {
  /** Route key from BREADCRUMB_TRAILS (e.g. "/geo"). Ignored when `trail` is given. */
  path?: string;
  /** Explicit trail, for dynamic pages such as blog posts. */
  trail?: Crumb[];
}

/**
 * Visible breadcrumb strip plus BreadcrumbList JSON-LD, from a single source.
 * Positioned just under the fixed header (absolute, scrolls with the page).
 * Render it right after <Navbar />. Not used on the homepage.
 */
export function Breadcrumbs({ path, trail }: BreadcrumbsProps) {
  const items = trail ?? (path ? BREADCRUMB_TRAILS[path] : undefined);
  if (!items || items.length < 2) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="pointer-events-none absolute inset-x-0 top-[calc(var(--nav-height)+0.5rem)] z-30 px-5 sm:px-10"
      >
        <div className="mx-auto max-w-7xl lg:px-3">
          <ol className="pointer-events-auto inline-flex max-w-full items-center gap-1 overflow-x-auto whitespace-nowrap rounded-full border border-black/10 bg-white/85 px-3 py-1 text-xs text-gray-600 shadow-sm backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((crumb, i) => {
              const last = i === items.length - 1;
              return (
                <li key={crumb.href} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight size={12} className="shrink-0 text-gray-400" aria-hidden />}
                  {last ? (
                    <span aria-current="page" className="max-w-[60vw] truncate font-medium text-gray-900 sm:max-w-none">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-[#5C0F26] hover:underline">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
