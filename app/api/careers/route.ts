import { NextRequest, NextResponse } from "next/server";
import { uploadResume } from "@/lib/s3";
import { appendCareerApplication } from "@/lib/googleSheets";

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const domain = String(form.get("domain") ?? "").trim();
  const resume = form.get("resume");

  if (!name || !email || !domain || !(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (resume.size > MAX_BYTES) {
    return NextResponse.json({ error: "Resume exceeds the 5 MB limit" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(resume.type)) {
    return NextResponse.json({ error: "Resume must be a PDF or Word document" }, { status: 400 });
  }

  try {
    const { url } = await uploadResume(resume, name);
    await appendCareerApplication({ name, email, domain, resumeUrl: url });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to process career application", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
