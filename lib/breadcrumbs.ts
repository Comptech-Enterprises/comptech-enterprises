import { absoluteUrl } from "@/lib/seo";

export interface Crumb {
  label: string;
  href: string;
}

const HOME: Crumb = { label: "Home", href: "/" };
const AI_SOLUTIONS: Crumb = { label: "AI Solutions", href: "/ai-solutions" };
const SERVICES: Crumb = { label: "IT Services", href: "/services" };
const BLOG: Crumb = { label: "Blog", href: "/blog" };

/** Breadcrumb trail per route. The last crumb is the current page. */
export const BREADCRUMB_TRAILS: Record<string, Crumb[]> = {
  "/ai-solutions": [HOME, { label: "AI Solutions", href: "/ai-solutions" }],
  "/geo": [HOME, { label: "GEO Services", href: "/geo" }],
  "/services": [HOME, { label: "IT Services", href: "/services" }],
  "/ai-agents": [HOME, AI_SOLUTIONS, { label: "AI Agents", href: "/ai-agents" }],
  "/social-media-ai-agent": [HOME, AI_SOLUTIONS, { label: "Social Media AI Agent", href: "/social-media-ai-agent" }],
  "/hardware": [HOME, SERVICES, { label: "Hardware", href: "/hardware" }],
  "/blog": [HOME, { label: "Blog", href: "/blog" }],
  "/case-studies": [HOME, { label: "Case Studies", href: "/case-studies" }],
  "/contact": [HOME, { label: "Contact", href: "/contact" }],
  "/ai-training": [HOME, AI_SOLUTIONS, { label: "AI Training", href: "/ai-training" }],
  "/careers": [HOME, { label: "Careers", href: "/careers" }],
  "/partners": [HOME, { label: "Partners", href: "/partners" }],
  "/faq": [HOME, { label: "FAQs", href: "/faq" }],
  "/about": [HOME, { label: "About", href: "/about" }],
  "/privacy": [HOME, { label: "Privacy Policy", href: "/privacy" }],
  "/terms": [HOME, { label: "Terms of Service", href: "/terms" }],
};

export function blogPostTrail(slug: string, title: string): Crumb[] {
  return [HOME, BLOG, { label: title, href: `/blog/${slug}` }];
}

export function breadcrumbJsonLd(trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}
