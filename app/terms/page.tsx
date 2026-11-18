import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/constants";
import { pageAlternates } from "@/lib/seo";

const DESCRIPTION =
  "The terms that apply when you use comptech.in and enquire about Comptech Enterprises' IT, AI agent, GEO, and training services.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: DESCRIPTION,
  alternates: pageAlternates("/terms"),
  openGraph: {
    type: "website",
    siteName: "Comptech Enterprises",
    title: "Terms of Service | Comptech Enterprises",
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <p>
        By accessing or using comptech.in (the &ldquo;Site&rdquo;), you agree to these Terms of Service. If you do not
        agree, please do not use the Site. The Site is operated by {COMPANY.name} (&ldquo;Comptech&rdquo;), {COMPANY.address}.
      </p>
    ),
  },
  {
    id: "use-of-site",
    title: "Use of the Site",
    body: (
      <>
        <p>You agree to use the Site lawfully and not to:</p>
        <ul>
          <li>Attempt to gain unauthorised access to the Site, its servers, or related systems.</li>
          <li>Send spam, malware, or false or misleading information through our forms.</li>
          <li>Scrape, copy, or resell Site content at scale without our written permission.</li>
          <li>Interfere with the normal operation or security of the Site.</li>
        </ul>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    body: (
      <p>
        Information on the Site about IT infrastructure, AI agents, Generative Engine Optimization (GEO), and training is
        for general purposes and is not an offer. Any engagement with Comptech is governed by a separate written
        proposal, statement of work, or agreement. If those documents conflict with these terms, they take priority for
        that engagement.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The Site&rsquo;s text, graphics, logos, videos, and code are owned by Comptech or its licensors and are
        protected by intellectual property laws. Third-party names and logos, including client and partner logos, belong
        to their respective owners and are shown only to identify them. You may share links to our pages and quote
        short excerpts with attribution, but you may not otherwise reproduce Site content without permission.
      </p>
    ),
  },
  {
    id: "content-accuracy",
    title: "Content and accuracy",
    body: (
      <p>
        We work to keep the Site accurate and current, but we do not guarantee that it is complete, error-free, or
        always available. Articles, statistics, and AI-related guidance are provided for information only and are not
        professional, legal, or financial advice. Verify anything important before you rely on it.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links and services",
    body: (
      <p>
        The Site may link to or rely on third-party websites and services. We do not control them and are not
        responsible for their content, availability, or practices.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of warranties",
    body: (
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, to the
        fullest extent permitted by law.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, Comptech is not liable for any indirect, incidental, or consequential
        loss arising from your use of, or inability to use, the Site. Nothing in these terms limits liability that cannot
        be limited by law.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle personal data is described in our <a href="/privacy">Privacy Policy</a>, which forms part of
        these terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Courts in New Delhi have exclusive jurisdiction over any dispute
        arising from them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date shows the latest revision.
        Continued use of the Site after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        {COMPANY.name}, {COMPANY.address}.
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> &middot; Phone: {COMPANY.phone}
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      path="/terms"
      title="Terms of Service"
      updated="18 November 2026"
      intro="These terms explain the rules for using comptech.in and what you can expect from us when you browse the Site or contact us about our services."
      sections={sections}
    />
  );
}
