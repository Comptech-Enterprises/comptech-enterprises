import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/constants";
import { pageAlternates } from "@/lib/seo";

const DESCRIPTION =
  "How Comptech Enterprises collects, uses, and protects personal data submitted through comptech.in, including contact forms, job applications, and analytics.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: pageAlternates("/privacy"),
  openGraph: {
    type: "website",
    siteName: "Comptech Enterprises",
    title: "Privacy Policy | Comptech Enterprises",
    description: DESCRIPTION,
    images: [{ url: "/images/logo.webp" }],
  },
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        {COMPANY.name} (&ldquo;Comptech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an IT and AI solutions company based at{" "}
        {COMPANY.address}. GSTIN: {COMPANY.gstin}. This policy explains how we handle personal data collected through
        comptech.in (the &ldquo;Site&rdquo;).
      </p>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect only what is needed to respond to you and to run the Site:</p>
        <ul>
          <li>
            <strong>Contact and audit forms:</strong> your name, email address, phone number, company, the service you
            are interested in, and the message you write.
          </li>
          <li>
            <strong>Job applications (Careers):</strong> your name, contact details, the role you apply for, and the
            resume or other files you upload.
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, approximate location, device and browser type, and how you
            interact with the Site, collected through analytics tools (see &ldquo;Cookies and analytics&rdquo;).
          </li>
        </ul>
        <p>We do not knowingly collect personal data from children under 18.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <ul>
        <li>To reply to enquiries, schedule demos or audits, and provide the services you request.</li>
        <li>To review job applications and contact candidates.</li>
        <li>To understand how the Site is used and improve its content, speed, and reliability.</li>
        <li>To keep the Site secure and prevent spam or abuse.</li>
        <li>To meet legal, tax, and accounting obligations.</li>
      </ul>
    ),
  },
  {
    id: "service-providers",
    title: "Who we share it with",
    body: (
      <>
        <p>We do not sell your personal data. We share it only with service providers that help us run the Site:</p>
        <ul>
          <li>Google (Google Sheets to store form submissions, Google Analytics for usage statistics).</li>
          <li>Amazon Web Services (hosting and secure storage of uploaded resumes).</li>
          <li>Microsoft (Clarity, for anonymised session and heatmap analytics).</li>
          <li>An email provider, to send us notifications of your form submission.</li>
        </ul>
        <p>
          These providers process data on our behalf and may store it on servers outside India. We may also disclose
          information when required by law or to protect our rights.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <p>
        The Site uses Google Analytics 4 and Microsoft Clarity, which set cookies or similar identifiers to measure
        traffic and understand how visitors use the Site. You can block or delete cookies in your browser settings, or
        use the Google Analytics opt-out browser add-on. Blocking cookies will not stop you from using the Site.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <p>
        We keep enquiry data for as long as needed to respond and for a reasonable period afterwards for follow-up and
        record keeping. Job applications are kept for up to 12 months unless you ask us to delete them sooner. Analytics
        data is retained according to the settings of each analytics provider.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organisational measures, including encrypted connections (HTTPS) and access
        controls, to protect your data. No method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Under applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to access,
          correct, or delete the personal data we hold about you, and withdraw consent you have given us. To make a
          request, email us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will respond within a
          reasonable time.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: (
      <p>
        The Site may link to other websites. We are not responsible for their privacy practices, so please read their
        policies before sharing personal data with them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it
        last changed. Continued use of the Site after an update means you accept the revised policy.
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

export default function PrivacyPage() {
  return (
    <LegalPage
      path="/privacy"
      title="Privacy Policy"
      updated="18 November 2026"
      intro="Your privacy matters to us. This policy describes what personal data we collect on comptech.in, why we collect it, and the choices you have."
      sections={sections}
    />
  );
}
