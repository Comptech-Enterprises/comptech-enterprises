import { NextRequest, NextResponse } from "next/server";
import { appendContactSubmission } from "@/lib/googleSheets";
import { sendContactNotification } from "@/lib/mailer";

const NAME_RE = /^[\p{L}][\p{L}\p{M}'.\- ]{1,59}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COMPANY_RE = /^[\p{L}\p{N}][\p{L}\p{M}\p{N}'.,&\-() ]{1,99}$/u;
const PHONE_RE = /^[0-9+\-() ]{6,20}$/;
const MIN_FILL_TIME_MS = 2500;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    firstName,
    lastName,
    email,
    company,
    phone,
    service,
    requirements,
    downloadProfile,
    source,
    employees,
    useCase,
    website, // honeypot — real users never see/fill this field
    formRenderedAt,
  } = body;

  // Honeypot tripped: pretend success so the bot doesn't learn to adapt.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Submitted faster than a human can fill the form.
  if (typeof formRenderedAt === "number" && Date.now() - formRenderedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ error: "Please try again" }, { status: 400 });
  }

  const resolvedFirstName = (firstName || (name ? name.split(" ")[0] : "")).trim();
  const resolvedLastName = (lastName || (name ? name.split(" ").slice(1).join(" ") : "")).trim();
  const resolvedService = useCase || service || "AI Training";
  const resolvedRequirements =
    requirements || (employees ? `Employees: ${employees} | Use Case: ${useCase || "N/A"}` : "AI Training Inquiry");

  if ((!resolvedFirstName && !name) || !email || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!NAME_RE.test(resolvedFirstName) || (resolvedLastName && !NAME_RE.test(resolvedLastName))) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(String(email).trim())) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!COMPANY_RE.test(String(company).trim())) {
    return NextResponse.json({ error: "Invalid company name" }, { status: 400 });
  }
  if (phone && !PHONE_RE.test(String(phone).trim())) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const submission = {
    firstName: resolvedFirstName || "Applicant",
    lastName: resolvedLastName,
    email,
    company,
    phone: phone ?? (employees ? `Employees: ${employees}` : ""),
    service: resolvedService,
    requirements: resolvedRequirements,
    downloadProfile: Boolean(downloadProfile),
    source: source ?? "Book an AI Training Form",
  };

  try {
    await appendContactSubmission(submission);

    // Email is a notification, not the system of record — never fail the
    // request when the Sheets row already landed.
    try {
      await sendContactNotification(submission);
    } catch (mailErr) {
      console.error("Failed to send contact notification email", mailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to append contact submission", err);
    // Return success in dev/unconfigured environment to avoid breaking user experience
    if (process.env.NODE_ENV === "development" || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      console.warn("Dev mode fallback: Google Sheets unconfigured. Returning mock success.");
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
