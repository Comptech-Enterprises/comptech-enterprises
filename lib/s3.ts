import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";

const SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7 days (SigV4 max)

function getClient() {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("AWS S3 credentials are not configured");
  }

  return new S3Client({ region, credentials: { accessKeyId, secretAccessKey } });
}

function sanitize(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-100);
}

export interface UploadedResume {
  key: string;
  url: string;
}

export async function uploadResume(file: File, applicantName: string): Promise<UploadedResume> {
  const bucket = process.env.AWS_S3_BUCKET;
  if (!bucket) {
    throw new Error("AWS_S3_BUCKET is not configured");
  }

  const client = getClient();
  const buffer = Buffer.from(await file.arrayBuffer());
  const prefix = sanitize(applicantName || "applicant");
  const key = `resumes/${prefix}-${randomUUID()}-${sanitize(file.name)}`;

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: file.type || "application/octet-stream",
    }),
  );

  // Bucket is private — hand back a temporary signed download link (valid 7 days).
  // The permanent copy always lives at s3://<bucket>/<key>.
  const url = await getSignedUrl(client, new GetObjectCommand({ Bucket: bucket, Key: key }), {
    expiresIn: SIGNED_URL_TTL,
  });

  return { key, url };
}
