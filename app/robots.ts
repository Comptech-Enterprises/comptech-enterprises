import type { MetadataRoute } from "next";

const BASE_URL = "https://comptech.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Do not disallow /_next/: it serves the JS, CSS and image URLs Google needs to render pages.
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
