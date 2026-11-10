import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for AI Solutions & IT Support",
  description:
    "Get in touch for AI agents, custom solutions, AI training, or enterprise IT support. Free AI audit available.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Contact Us for AI Solutions & IT Support | Comptech Enterprises",
    description:
      "Get in touch for AI agents, custom solutions, AI training, or enterprise IT support. Free AI audit available.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
