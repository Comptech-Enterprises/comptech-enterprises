import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://comptech.in"),
  title: {
    default: "Comptech Enterprises | AI Agents, Solutions & Training for Business",
    template: "%s | Comptech Enterprises",
  },
  description:
    "Empowering MSMEs and Corporates across India to adopt practical AI. Certified experts in AI agent development, corporate AI workshops, custom RAG/LLMs, and enterprise IT infrastructure.",
  keywords: [
    "AI adoption for MSMEs India", "Corporate AI solutions Delhi", "AI services New Delhi",
    "AI trainings India", "AI agent development Delhi", "corporate AI workshops NCR",
    "enterprise IT Delhi", "IT AMC New Delhi", "servers", "Dell partner Delhi", "HP partner Delhi", "Lenovo partner Delhi"
  ],
  authors: [{ name: "Comptech Enterprises" }],
  creator: "Comptech Enterprises",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Comptech Enterprises | AI Agents, Solutions & Training for Business",
    description: "Empowering MSMEs and Corporates across India to adopt practical AI.",
    images: [{ url: "/images/logo.webp" }],
  },
  icons: {
    icon: [
      { url: "/images/logo.ico", type: "image/x-icon" },
      { url: "/images/logo.webp", type: "image/webp" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Comptech Enterprises",
  "image": "https://comptech.in/images/logo.webp",
  "@id": "https://comptech.in/#localbusiness",
  "url": "https://comptech.in",
  "telephone": "+91-9811010102",
  "sameAs": [
    "https://www.linkedin.com/company/comptech-enterprises1",
    "https://www.instagram.com/comptechenterprises"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "207, DDA Building-1, District Centre, Janakpuri",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110058",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6297,
    "longitude": 77.0782
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "AdministrativeArea", "name": "Europe" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Enterprise Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Adoption & Automation for MSMEs in India"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate AI Trainings & Executive Workshops in Delhi NCR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Enterprise AI Agent Development & RAG"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Readiness Audits & Infrastructure Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development"
        }
      }
    ]
  }
};

// Organization + WebSite entities (complements the LocalBusiness block above).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://comptech.in/#organization",
  name: "Comptech Enterprises",
  legalName: "Comptech Enterprises",
  url: "https://comptech.in",
  logo: {
    "@type": "ImageObject",
    url: "https://comptech.in/images/logo.webp",
    width: 210,
    height: 123,
  },
  description:
    "Custom AI agents, Generative Engine Optimization (GEO), AI training, and enterprise IT infrastructure for businesses in India and worldwide.",
  foundingDate: "1996",
  email: "mohit@comptech.in",
  telephone: "+91-9811010102",
  address: {
    "@type": "PostalAddress",
    streetAddress: "207, DDA Building-1, District Centre, Janakpuri",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110058",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-9811010102",
      email: "mohit@comptech.in",
      areaServed: ["IN", "AE", "CA", "GB", "AU", "DE"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/comptech-enterprises1",
    "https://www.instagram.com/comptechenterprises",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://comptech.in/#website",
  url: "https://comptech.in",
  name: "Comptech Enterprises",
  inLanguage: "en",
  publisher: { "@id": "https://comptech.in/#organization" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        {/* gtag.js (~180 KB) loads when idle. Events queue in dataLayer (see ga4 snippet) and are flushed on load. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZXLEG612KN"
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZXLEG612KN');`}
        </Script>
        <Script id="ms-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ygirdfadfi");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
        {children}
      </body>
    </html>
  );
}
