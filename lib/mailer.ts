import nodemailer from "nodemailer";
import type { ContactSubmission } from "./googleSheets";

const AI_INBOX = process.env.CONTACT_EMAIL_AI || "paawan@comptech.in";
const IT_INBOX = process.env.CONTACT_EMAIL_IT || "mohit@comptech.in";

function resolveRecipients(service: string): string[] {
  if (service === "Multiple Services") return [AI_INBOX, IT_INBOX];
  // Covers every AI dropdown value across both forms: "AI Audit",
  // "Custom AI Agents", "AI Automation", "AI Training & Workshops",
  // "AI Development", "AI tools usage".
  if (/\bai\b/i.test(service)) return [AI_INBOX];
  return [IT_INBOX];
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not configured");
  }

  const port = Number(process.env.SMTP_PORT) || 587;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(data: ContactSubmission) {
  const rows: [string, string][] = [
    ["Name", `${data.firstName} ${data.lastName}`.trim()],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone || "—"],
    ["Service", data.service],
    ["Requirements", data.requirements],
    ["Wants Company Profile", data.downloadProfile ? "Yes" : "No"],
    ["Source", data.source],
  ];

  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#8a8f9a;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;font-size:14px;color:#1f2430;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f5f3f0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e6e2dd;">
      <div style="background:#5C0F26;padding:20px 24px;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.12em;color:#f0c9d4;text-transform:uppercase;">Comptech Enterprises</p>
        <h1 style="margin:4px 0 0;font-size:20px;color:#fff;font-weight:700;">New Contact Enquiry</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">${cells}</table>
      <div style="padding:16px 24px;background:#faf8f6;">
        <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;padding:10px 20px;background:#5C0F26;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">Reply to ${escapeHtml(data.firstName || "sender")}</a>
      </div>
    </div>
  </body>
</html>`;
}

function buildText(data: ContactSubmission) {
  return [
    "New Contact Enquiry — Comptech Enterprises",
    "",
    `Name: ${data.firstName} ${data.lastName}`.trim(),
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone || "—"}`,
    `Service: ${data.service}`,
    `Requirements: ${data.requirements}`,
    `Wants Company Profile: ${data.downloadProfile ? "Yes" : "No"}`,
    `Source: ${data.source}`,
  ].join("\n");
}

export async function sendContactNotification(data: ContactSubmission) {
  const recipients = resolveRecipients(data.service);
  const transport = getTransport();

  await transport.sendMail({
    from: process.env.SMTP_FROM || `"Comptech Website" <${process.env.SMTP_USER}>`,
    to: recipients,
    replyTo: data.email,
    subject: `New enquiry: ${data.service} — ${data.company}`,
    text: buildText(data),
    html: buildHtml(data),
  });
}
