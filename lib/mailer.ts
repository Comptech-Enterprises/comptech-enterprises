import nodemailer from "nodemailer";
import type { ContactSubmission } from "./googleSheets";

function inboxes(value: string | undefined, fallback: string[]): string[] {
  const parsed = (value ?? "").split(",").map((a) => a.trim()).filter(Boolean);
  return parsed.length ? parsed : fallback;
}

const AI_INBOX = inboxes(process.env.CONTACT_EMAIL_AI, ["paawan@comptech.in"]);
const IT_INBOX = inboxes(process.env.CONTACT_EMAIL_IT, [
  "mohit@comptech.in",
  "mohitcomp@hotmail.com",
]);

function resolveRecipients(service: string): string[] {
  if (service === "Multiple Services") return [...new Set([...AI_INBOX, ...IT_INBOX])];
  // Covers every AI dropdown value across both forms: "AI Audit",
  // "Custom AI Agents", "AI Automation", "AI Training & Workshops",
  // "AI Development", "AI tools usage".
  if (/\bai\b/i.test(service)) return AI_INBOX;
  return IT_INBOX;
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

  // Stacked label-over-value rows (not side-by-side columns) so nothing
  // gets clipped on narrow phone screens — a fixed-width table just runs
  // off the edge instead of reflowing.
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td bgcolor="#ffffff" style="padding:14px 20px 4px;border-bottom:1px solid #eee;">
            <p style="margin:0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#8a8f9a;">${escapeHtml(label)}</p>
            <p style="margin:4px 0 10px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#1f2430;word-break:break-word;">${escapeHtml(value)}</p>
          </td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <style>
      body, table, td, p { -webkit-text-size-adjust: 100%; }
      @media (max-width: 480px) {
        .container { width: 100% !important; border-radius: 0 !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f5f3f0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f5f3f0" style="background:#f5f3f0;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="width:600px;max-width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e2dd;">
            <tr>
              <td bgcolor="#5C0F26" style="background:#5C0F26;padding:20px 24px;">
                <p style="margin:0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;color:#f0c9d4;text-transform:uppercase;">Comptech Enterprises</p>
                <h1 style="margin:4px 0 0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:20px;color:#ffffff;font-weight:700;">New Contact Enquiry</h1>
              </td>
            </tr>
            ${cells}
            <tr>
              <td bgcolor="#faf8f6" style="background:#faf8f6;padding:16px 24px;">
                <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;padding:10px 20px;background:#5C0F26;color:#ffffff;text-decoration:none;border-radius:8px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;font-weight:600;">Reply to ${escapeHtml(data.firstName || "sender")}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
