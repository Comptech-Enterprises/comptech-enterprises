import type { Metadata } from "next";
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
  title: {
    default: "Comptech Enterprises | Enterprise IT & AI Solutions India",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Comptech Enterprises | Enterprise IT & AI Solutions India",
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
  "image": "https://comptech-enterprises.com/images/logo.png",
  "@id": "https://comptech-enterprises.com/#localbusiness",
  "url": "https://comptech-enterprises.com",
  "telephone": "+91-8595073837",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "207, DDA-1, District Center, JanakPuri",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110058",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6297,
    "longitude": 77.0782
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Delhi"
    },
    {
      "@type": "Country",
      "name": "India"
    }
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
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
