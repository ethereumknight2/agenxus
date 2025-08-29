import { MetadataRoute } from "next";
import { cities, solutions } from "@/data/cities";
import { INDUSTRIES } from "./locations/registry";
import { POSTS } from "./blog/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://agenxus.com";

// Dates
const TODAY = new Date();
const LEGAL_LAST_MODIFIED = "2025-08-01";

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

  // 2) Services pillar - Main landing page for all services
  const servicesPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 3) Individual service pages - Now includes AI Search Optimization
  const serviceDetailPages: MetadataRoute.Sitemap = solutions.map(
    (solution) => ({
      url: `${SITE_URL}/services/${solution.slug}`,
      lastModified: TODAY,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // 4) City pillar pages - Main landing page for each city
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/locations/${city.slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 5) City + Solution pages - Now dynamically includes all solutions
  const citySolutionPages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    for (const solution of solutions) {
      citySolutionPages.push({
        url: `${SITE_URL}/locations/${city.slug}/${solution.slug}`,
        lastModified: TODAY,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    }
  }

  // 6) Industry hub pages - Published industries only
  const industryHubPages: MetadataRoute.Sitemap = Object.entries(INDUSTRIES)
    .filter(([, industry]) => industry.published)
    .map(([industryKey]) => ({
      url: `${SITE_URL}/industries/${industryKey}`,
      lastModified: TODAY,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  // 7) City + Industry pages - PUBLISHED INDUSTRIES ONLY
  const cityIndustryPages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    Object.entries(INDUSTRIES).forEach(([industryKey, industry]) => {
      if (industry.published) {
        // Only include published industries
        cityIndustryPages.push({
          url: `${SITE_URL}/locations/${city.slug}/${industryKey}`,
          lastModified: TODAY,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    });
  }

  // 8) Blog/Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  // Combine all pages
  const totalPages = [
    ...core,
    ...servicesPages,
    ...serviceDetailPages,
    ...cityPages,
    ...citySolutionPages,
    ...industryHubPages,
    ...cityIndustryPages,
    ...resourcePages,
  ];

  // Debug logging
  console.log(`Generated ${totalPages.length} pages in sitemap:`);
  console.log(`- Core pages: ${core.length}`);
  console.log(
    `- Services pages: ${servicesPages.length + serviceDetailPages.length}`
  );
  console.log(`- City pages: ${cityPages.length}`);
  console.log(`- City+Solution pages: ${citySolutionPages.length}`);
  console.log(`- Industry hub pages: ${industryHubPages.length}`);
  console.log(`- City+Industry pages: ${cityIndustryPages.length}`);
  console.log(`- Resource pages: ${resourcePages.length}`);

  return totalPages;
}

// Export helper function to validate sitemap
export function validateSitemap() {
  const sitemapData = sitemap();

  // Check for duplicates
  const urls = sitemapData.map((item) => item.url);
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);

  if (duplicates.length > 0) {
    console.error("Duplicate URLs found in sitemap:", duplicates);
  } else {
    console.log("No duplicate URLs in sitemap");
  }

  // Check for proper URL structure
  const invalidUrls = urls.filter((url) => !url.startsWith(SITE_URL));
  if (invalidUrls.length > 0) {
    console.error("Invalid URLs found:", invalidUrls);
  } else {
    console.log("All URLs have correct base URL");
  }

  return {
    totalPages: urls.length,
    duplicates: duplicates.length,
    invalidUrls: invalidUrls.length,
  };
}
