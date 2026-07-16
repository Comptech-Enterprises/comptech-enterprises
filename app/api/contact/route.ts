import { NextRequest, NextResponse } from "next/server";
import { appendContactSubmission } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { firstName, lastName, email, company, phone, service, requirements, downloadProfile, source } = body;

  if (!firstName || !lastName || !email || !company || !service || !requirements) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await appendContactSubmission({
      firstName,
      lastName,
      email,
      company,
      phone: phone ?? "",
      service,
      requirements,
      downloadProfile: Boolean(downloadProfile),
      source: source ?? "unknown",
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to append contact submission", err);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
