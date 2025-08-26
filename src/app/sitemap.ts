import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { solutions } from "@/data/solutions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://agenxus.com";

// Dates
const TODAY = new Date();
const LEGAL_LAST_MODIFIED = "2025-08-01"; // update when you change Privacy/Terms

export default function sitemap(): MetadataRoute.Sitemap {
  // 1) Core pages
  const core: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/dealerships`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2) City pillar pages (/locations/chicago, etc.)
  const cityPages: MetadataRoute.Sitemap = (cities || []).map((city) => ({
    url: `${SITE_URL}/locations/${city.slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3) City + Solution pages (/locations/chicago/ai-voice-agents, etc.)
  const citySolutionPages: MetadataRoute.Sitemap = [];
  const citySlugs = (cities || []).map((c) => c.slug);
  const solutionSlugs = (solutions || []).map((s) => s.slug);

  for (const city of citySlugs) {
    for (const sol of solutionSlugs) {
      citySolutionPages.push({
        url: `${SITE_URL}/locations/${city}/${sol}`,
        lastModified: TODAY,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    }
  }

  // 4) Industry hub + detail pages (/industries, /industries/healthcare, etc.)
  const industries = [
    "healthcare",
    "automotive",
    "real-estate",
    "legal-services",
    "home-services",
  ];

  const topLevelIndustryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 5) City + Industry pages (/locations/chicago/healthcare, etc.)
  const cityIndustryPages: MetadataRoute.Sitemap = [];
  for (const city of citySlugs) {
    for (const i of industries) {
      cityIndustryPages.push({
        url: `${SITE_URL}/locations/${city}/${i}`,
        lastModified: TODAY,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Combine and return
  return [
    ...core,
    ...cityPages,
    ...citySolutionPages,
    ...topLevelIndustryPages,
    ...cityIndustryPages,
  ];
}
