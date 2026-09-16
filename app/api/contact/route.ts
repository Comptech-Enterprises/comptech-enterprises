import { NextRequest, NextResponse } from "next/server";
import { appendContactSubmission } from "@/lib/googleSheets";
import { sendContactNotification } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_TIME_MS = 2500;
const WORD_RE = /^[\p{L}][\p{L}\p{M}'-]{1,29}$/u;
const REPEAT_CHAR_RE = /(.)\1{2,}/; // e.g. "aaa", "blahblahblah" chunks

function hasErraticCasing(word: string): boolean {
  // Real names have at most one lowercase→uppercase shift mid-word (e.g.
  // "McDonald"). Bot-generated strings like "ihlBUSuOZiFsSlieDrRNPR" flip
  // into uppercase repeatedly.
  let upshifts = 0;
  for (let i = 1; i < word.length; i++) {
    const prevUpper = word[i - 1] !== word[i - 1].toLowerCase();
    const curUpper = word[i] !== word[i].toLowerCase();
    if (curUpper && !prevUpper) upshifts++;
  }
  return upshifts > 1;
}

function isValidName(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const words = trimmed.split(/\s+/);
  if (words.length < 1 || words.length > 4) return false;
  const seen = new Set<string>();
  for (const word of words) {
    if (!WORD_RE.test(word) || REPEAT_CHAR_RE.test(word.toLowerCase()) || hasErraticCasing(word)) return false;
    const lower = word.toLowerCase();
    if (seen.has(lower)) return false; // "blah blah blah" — repeated word
    seen.add(lower);
  }
  return true;
}

function isValidCompany(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 2 || trimmed.length > 100) return false;
  if (!/^[\p{L}\p{N}][\p{L}\p{M}\p{N}'.,&\-() ]{1,99}$/u.test(trimmed)) return false;
  const words = trimmed.toLowerCase().split(/\s+/);
  const seen = new Set<string>();
  let repeats = 0;
  for (const word of words) {
    if (seen.has(word)) repeats++;
    seen.add(word);
  }
  if (repeats >= 2) return false; // "blah blah blah corp" style padding
  return true;
}

function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^[0-9+\-() ]{6,20}$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return false;
  if (/^(\d)\1+$/.test(digits)) return false; // "1111111111"
  return true;
}

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

  if (!isValidName(resolvedFirstName) || (resolvedLastName && !isValidName(resolvedLastName))) {
    return NextResponse.json({ error: "Please enter a valid name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(String(email).trim())) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  }
  if (!isValidCompany(String(company))) {
    return NextResponse.json({ error: "Please enter a valid company name" }, { status: 400 });
  }
  if (phone && !isValidPhone(String(phone))) {
    return NextResponse.json({ error: "Phone number must contain only digits" }, { status: 400 });
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
