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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://comptech.in"),
  title: {
    default: "Comptech Enterprises | AI Services, AI Trainings & Software Development",
    template: "%s | Comptech Enterprises",
  },
  description:
    "Comptech Enterprises delivers AI Services, corporate AI Trainings, and custom Software Development for MSMEs and enterprises across India, alongside enterprise IT infrastructure.",
  keywords: [
    "AI Services", "AI Services India", "AI Services Delhi",
    "AI Trainings", "AI Trainings India", "corporate AI Trainings", "AI workshops Delhi",
    "Software Development", "Software Development India", "custom software development company",
    "AI adoption for MSMEs India", "Corporate AI solutions Delhi", "AI agent development Delhi",
    "enterprise IT Delhi", "IT AMC New Delhi", "servers", "Dell partner Delhi", "HP partner Delhi", "Lenovo partner Delhi"
  ],
  authors: [{ name: "Comptech Enterprises" }],
  creator: "Comptech Enterprises",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Comptech Enterprises | AI Services, AI Trainings & Software Development",
    description: "AI Services, corporate AI Trainings, and custom Software Development for MSMEs and enterprises across India.",
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
