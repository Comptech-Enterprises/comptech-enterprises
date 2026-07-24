import { google } from "googleapis";

export interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  requirements: string;
  downloadProfile: boolean;
  source: string;
}

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google service account credentials are not configured");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export interface CareerApplication {
  name: string;
  email: string;
  domain: string;
  resumeUrl: string;
}

export async function appendCareerApplication(data: CareerApplication) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  const sheets = google.sheets({ version: "v4", auth: getAuth() });
  const tab = process.env.GOOGLE_CAREERS_SHEET_TAB || "Careers";

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tab}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date().toISOString(), data.name, data.email, data.domain, data.resumeUrl]],
    },
  });
}

export async function appendContactSubmission(data: ContactSubmission) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  const sheets = google.sheets({ version: "v4", auth: getAuth() });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.firstName,
          data.lastName,
          data.email,
          data.company,
          data.phone,
          data.service,
          data.requirements,
          data.downloadProfile ? "Yes" : "No",
          data.source,
        ],
      ],
    },
  });
}
