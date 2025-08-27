import { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://agenxus.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/contact",
          "/services", // NEW - Allow services pillar
          "/services/*", // NEW - Allow individual service pages
          "/locations",
          "/locations/*",
          "/industries",
          "/industries/*",
          "/dealerships",
        ],
        disallow: ["/admin/", "/api/", "/_next/", "/private/", "/.well-known/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
