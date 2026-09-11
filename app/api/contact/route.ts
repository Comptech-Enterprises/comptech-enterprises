import { NextRequest, NextResponse } from "next/server";
import { appendContactSubmission } from "@/lib/googleSheets";
import { sendContactNotification } from "@/lib/mailer";

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
  } = body;

  const resolvedFirstName = firstName || (name ? name.split(" ")[0] : "");
  const resolvedLastName = lastName || (name ? name.split(" ").slice(1).join(" ") : "");
  const resolvedService = useCase || service || "AI Training";
  const resolvedRequirements =
    requirements || (employees ? `Employees: ${employees} | Use Case: ${useCase || "N/A"}` : "AI Training Inquiry");

  if ((!resolvedFirstName && !name) || !email || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
