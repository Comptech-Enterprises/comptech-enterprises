import type { Metadata } from "next";

export const SITE_URL = "https://comptech.in";

/** Absolute canonical URL for a path: https, no www, no trailing slash ("/" is the bare origin). */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/+$/, "");
}

/** hreflang values. All point at the same URL until country-specific pages exist. */
const HREFLANGS = ["en-in", "en-gb", "en-ca", "en-au", "en-ae", "en", "x-default"] as const;

/**
 * Canonical + hreflang alternates for an indexable page.
 * hreflang URLs must equal the canonical exactly, so both use absoluteUrl().
 * Do not use this for noindex pages (hreflang to a noindex URL is ignored).
 */
export function pageAlternates(path: string): NonNullable<Metadata["alternates"]> {
  const url = absoluteUrl(path);
  return {
    canonical: url,
    languages: Object.fromEntries(HREFLANGS.map((l) => [l, url])),
  };
}

/** Countries Comptech serves, shared by LocalBusiness and Service schema. */
export const SERVICE_COUNTRIES = [
  "India",
  "United Arab Emirates",
  "Canada",
  "United Kingdom",
  "Australia",
  "Europe",
];

export const PROVIDER = {
  "@type": "Organization",
  name: "Comptech Enterprises",
  url: SITE_URL,
} as const;

/** schema.org Service block for a service page. */
export function serviceJsonLd(opts: {
  serviceType: string;
  description: string;
  areaServed: string[];
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    provider: PROVIDER,
    areaServed: opts.areaServed,
    description: opts.description,
    ...(opts.url ? { url: opts.url } : {}),
  };
}
