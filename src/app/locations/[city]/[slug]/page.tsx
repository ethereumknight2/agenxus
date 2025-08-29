import { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPageClient from "./SolutionPageClient";
import CityIndustryClient from "./CityIndustryClient";
import { CITIES, INDUSTRIES, CityKey, IndustryKey } from "../../registry";
import { getCityBySlug } from "@/data/cities";
import {
  solutions,
  getSolutionBySlug,
  getAllSolutionSlugs,
} from "@/data/solutions";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agenxus.com";
const BRAND = "Agenxus";

// Solution title/description functions
function solutionTitleFor(city: string, state: string, solutionName: string) {
  return `${solutionName} in ${city}, ${state} | Local AI Automation Services | ${BRAND}`;
}

function solutionDescriptionFor(
  city: string,
  solutionName: string,
  solutionDescription: string
) {
  return `Professional ${solutionName.toLowerCase()} services for ${city} businesses. ${solutionDescription} Expert setup and local support.`;
}

// Industry title/description functions
function industryTitleFor(city: string, state: string, industry: string) {
  return `AI Solutions for ${industry} in ${city}, ${state} | Complete Automation Suite | ${BRAND}`;
}

function industryDescriptionFor(city: string, industry: string) {
  return `Complete AI automation suite for ${industry.toLowerCase()} businesses in ${city}. Voice agents, chatbots, video agents, and process automation designed for your industry.`;
}

// Generate static params for all city + slug combinations
export async function generateStaticParams() {
  const params: { city: string; slug: string }[] = [];

  // Add solution pages (all cities × all solutions) - DYNAMICALLY from solutions data
  Object.keys(CITIES).forEach((cityKey) => {
    getAllSolutionSlugs().forEach((solutionSlug) => {
      params.push({
        city: cityKey,
        slug: solutionSlug,
      });
    });
  });

  // Add industry pages (all cities × published industries only)
  Object.entries(INDUSTRIES).forEach(([industryKey, industry]) => {
    if (industry.published) {
      Object.keys(CITIES).forEach((cityKey) => {
        params.push({
          city: cityKey,
          slug: industryKey,
        });
      });
    }
  });

  // Add unpublished industry pages for "coming soon" content
  Object.entries(INDUSTRIES).forEach(([industryKey, industry]) => {
    if (!industry.published) {
      Object.keys(CITIES).forEach((cityKey) => {
        params.push({
          city: cityKey,
          slug: industryKey,
        });
      });
    }
  });

  return params;
}

// Generate metadata based on slug type (solution vs industry)
export async function generateMetadata({
  params,
}: {
  params: { city: CityKey; slug: string };
}): Promise<Metadata> {
  const cityInfo = CITIES[params.city];
  const city = getCityBySlug(params.city);

  if (!cityInfo || !city) {
    return {
      title: "Page Not Found | Agenxus",
      description: "The requested page could not be found.",
    };
  }

  const url = `${SITE_URL}/locations/${params.city}/${params.slug}`;

  // Check if it's a solution
  const solution = getSolutionBySlug(params.slug);
  if (solution) {
    const title = solutionTitleFor(
      cityInfo.name,
      cityInfo.state,
      solution.name
    );
    const description = solutionDescriptionFor(
      cityInfo.name,
      solution.name,
      solution.description
    );

    return {
      title,
      description,
      keywords: [
        `${solution.name} ${cityInfo.name}`,
        `${solution.shortName} ${cityInfo.state}`,
        `AI automation ${cityInfo.name}`,
        `${solution.slug.replace("-", " ")} ${cityInfo.name}`,
        `${cityInfo.name} ${solution.name}`,
        `automated ${solution.shortName} ${cityInfo.name}`,
        ...solution.industries
          .slice(0, 3)
          .map((industry) => `${solution.name} ${industry} ${cityInfo.name}`),
      ].join(", "),
      alternates: { canonical: url },
      robots: { index: true, follow: true },
      openGraph: {
        title,
        description,
        url,
        siteName: BRAND,
        type: "website",
        images: [
          {
            url: `${SITE_URL}/images/${solution.slug}-${params.city}.jpg`,
            width: 1200,
            height: 630,
            alt: `${solution.name} for ${cityInfo.name} businesses`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@agenxus",
        site: "@agenxus",
        images: [`${SITE_URL}/images/${solution.slug}-${params.city}.jpg`],
      },
      other: {
        "geo.region": `US-${cityInfo.state}`,
        "geo.placename": cityInfo.name,
      },
    };
  }

  // Check if it's an industry
  const industry = INDUSTRIES[params.slug as IndustryKey];
  if (industry) {
    if (!industry.published) {
      // Coming soon industry - noindex
      return {
        title: `${industry.name} AI in ${cityInfo.name}, ${cityInfo.state} — Coming Soon | ${BRAND}`,
        description: `AI solutions for ${industry.name.toLowerCase()} businesses in ${
          cityInfo.name
        } coming soon. Explore our other services or contact us directly.`,
        alternates: { canonical: url },
        robots: { index: false, follow: false }, // noindex for coming soon
        openGraph: {
          title: `${industry.name} AI in ${cityInfo.name} — Coming Soon`,
          description: `AI solutions for ${industry.name.toLowerCase()} businesses in ${
            cityInfo.name
          } coming soon.`,
          url,
          siteName: BRAND,
          type: "website",
        },
      };
    }

    // Published industry page
    const title = industryTitleFor(
      cityInfo.name,
      cityInfo.state,
      industry.name
    );
    const description = industryDescriptionFor(cityInfo.name, industry.name);

    return {
      title,
      description,
      keywords: [
        `AI solutions ${industry.name} ${cityInfo.name}`,
        `${industry.name} automation ${cityInfo.name}`,
        `AI ${industry.name} ${cityInfo.state}`,
        `business automation ${industry.name} ${cityInfo.name}`,
        `${industry.name} AI technology ${cityInfo.name}`,
        `automated systems ${industry.name} ${cityInfo.name}`,
        `${cityInfo.name} ${industry.name} AI solutions`,
      ].join(", "),
      alternates: { canonical: url },
      robots: { index: true, follow: true },
      openGraph: {
        title,
        description,
        url,
        siteName: BRAND,
        type: "website",
        images: [
          {
            url: `${SITE_URL}/images/${params.slug}-solutions-${params.city}.jpg`,
            width: 1200,
            height: 630,
            alt: `AI solutions for ${industry.name} businesses in ${cityInfo.name}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@agenxus",
        site: "@agenxus",
        images: [
          `${SITE_URL}/images/${params.slug}-solutions-${params.city}.jpg`,
        ],
      },
      other: {
        "geo.region": `US-${cityInfo.state}`,
        "geo.placename": cityInfo.name,
      },
    };
  }

  // Unknown slug
  return {
    title: "Page Not Found | Agenxus",
    description: "The requested page could not be found.",
  };
}
// Main server component
export default function CitySlugPage({
  params,
}: {
  params: { city: CityKey; slug: string };
}) {
  const cityInfo = CITIES[params.city];
  const city = getCityBySlug(params.city);

  if (!cityInfo || !city) {
    notFound();
  }

  // Handle solution pages (e.g., /locations/naperville/automation)
  const solution = getSolutionBySlug(params.slug);
  if (solution) {
    // Schema.org structured data for solution pages
    const solutionStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/locations/${params.city}/${params.slug}/`,
          url: `${SITE_URL}/locations/${params.city}/${params.slug}/`,
          name: `${solution.name} in ${cityInfo.name}, ${cityInfo.state} | ${BRAND}`,
          description: `${solution.description} Professional services for ${cityInfo.name} businesses.`,
          inLanguage: "en-US",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString(),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Locations",
              item: `${SITE_URL}/locations/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: cityInfo.name,
              item: `${SITE_URL}/locations/${params.city}/`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: solution.name,
            },
          ],
        },
        {
          "@type": "Service",
          name: `${solution.name} in ${cityInfo.name}`,
          description: solution.description,
          provider: {
            "@type": "Organization",
            name: BRAND,
            telephone: "+18722778841",
            email: "contact@agenxus.com",
            url: SITE_URL,
          },
          serviceType: solution.name,
          category: "AI Automation Services",
          areaServed: [
            {
              "@type": "State",
              name: cityInfo.state,
            },
            {
              "@type": "City",
              name: cityInfo.name,
            },
          ],
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(solutionStructuredData),
          }}
        />
        <SolutionPageClient
          city={city}
          solution={solution}
          allSolutions={solutions}
        />
      </>
    );
  }

  // Handle industry pages (e.g., /locations/naperville/automotive)
  const industry = INDUSTRIES[params.slug as IndustryKey];
  if (industry) {
    if (!industry.published) {
      // Coming soon page with noindex
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-3xl mx-auto px-4 py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {industry.name} AI in {cityInfo.name}, {cityInfo.state}
            </h1>
            <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-8">
              Coming Soon
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We&apos;re finalizing our AI automation solutions for{" "}
              {industry.name.toLowerCase()}
              businesses in {cityInfo.name}. In the meantime, explore our other
              services or contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${SITE_URL}/locations/${params.city}`}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Explore All Solutions in {cityInfo.name}
              </a>
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Published industry page with full content
    const industryStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/locations/${params.city}/${params.slug}/`,
          url: `${SITE_URL}/locations/${params.city}/${params.slug}/`,
          name: `AI Solutions for ${industry.name} in ${cityInfo.name}, ${cityInfo.state} | ${BRAND}`,
          description: `Complete AI automation suite for ${industry.name.toLowerCase()} businesses in ${
            cityInfo.name
          }. Voice agents, chatbots, video agents, and process automation.`,
          inLanguage: "en-US",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString(),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Locations",
              item: `${SITE_URL}/locations/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: cityInfo.name,
              item: `${SITE_URL}/locations/${params.city}/`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: `${industry.name} AI Solutions`,
            },
          ],
        },
        {
          "@type": "Service",
          name: `AI Solutions for ${industry.name} in ${cityInfo.name}`,
          description: `Complete AI automation suite for ${industry.name.toLowerCase()} businesses including voice agents, chatbots, video agents, and process automation.`,
          provider: {
            "@type": "Organization",
            name: BRAND,
            telephone: "+18722778841",
            email: "contact@agenxus.com",
            url: SITE_URL,
          },
          serviceType: "AI Automation Suite",
          category: `${industry.name} AI Solutions`,
          areaServed: [
            {
              "@type": "State",
              name: cityInfo.state,
            },
            {
              "@type": "City",
              name: cityInfo.name,
            },
          ],
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(industryStructuredData),
          }}
        />
        <CityIndustryClient
          city={city}
          industry={params.slug}
          industryName={industry.name}
          solutions={solutions}
        />
      </>
    );
  }

  // If slug doesn't match solutions or industries, return 404
  notFound();
}
