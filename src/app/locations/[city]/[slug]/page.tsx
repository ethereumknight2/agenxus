import { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPageClient from "./SolutionPageClient";
import CityIndustryClient from "./CityIndustryClient";
import { cities, getCityBySlug, getAllCitySlugs } from "@/data/cities";
import {
  solutions,
  getSolutionBySlug,
  getAllSolutionSlugs,
} from "@/data/solutions";
import type { City } from "@/data/cities";
import type { Solution } from "@/data/solutions";

const SOLUTION_SLUGS = [
  "ai-voice-agents",
  "chatbots",
  "video-agents",
  "automation",
];
const INDUSTRY_SLUGS = [
  "automotive",
  "healthcare",
  "legal-services",
  "real-estate",
  "home-services",
  "professional-services",
  "financial-services",
  "technology",
  "manufacturing",
  "retail",
];

// Generate static params for all city+slug combinations
export async function generateStaticParams() {
  const combinations: Array<{ city: string; slug: string }> = [];

  getAllCitySlugs().forEach((citySlug) => {
    // Add solution pages
    SOLUTION_SLUGS.forEach((solutionSlug) => {
      combinations.push({
        city: citySlug,
        slug: solutionSlug,
      });
    });

    // Add industry pages
    INDUSTRY_SLUGS.forEach((industrySlug) => {
      combinations.push({
        city: citySlug,
        slug: industrySlug,
      });
    });
  });

  return combinations;
}

// Generate metadata for each page type
export async function generateMetadata({
  params,
}: {
  params: { city: string; slug: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  if (SOLUTION_SLUGS.includes(params.slug)) {
    // City + Solution page metadata
    const solution = getSolutionBySlug(params.slug);
    if (!solution) {
      return {
        title: "Solution Not Found",
        description: "The requested solution could not be found.",
      };
    }

    const title = `${solution.name} in ${city.name}, ${city.state} | Local ${solution.shortName} Services | Agenxus`;
    const description = `Professional ${solution.name.toLowerCase()} services for ${
      city.name
    } businesses. ${solution.description} Local setup and support available.`;

    return {
      title,
      description,
      keywords: [
        `${solution.name.toLowerCase()} ${city.name}`,
        `${solution.shortName.toLowerCase()} ${city.name}`,
        `AI ${solution.shortName.toLowerCase()} ${city.name}`,
        `${city.name} ${solution.name.toLowerCase()}`,
        `${city.name} AI automation`,
        `${city.name} business automation`,
        `automated ${solution.shortName.toLowerCase()} ${city.name}`,
        `${solution.name.toLowerCase()} services ${city.name}`,
        `${city.name} ${city.state} ${solution.name.toLowerCase()}`,
        `${solution.name.toLowerCase()} ${city.name} ${city.state}`,
        // Industry-specific keywords
        ...solution.industries.map(
          (industry) =>
            `${solution.name.toLowerCase()} ${industry.toLowerCase()} ${
              city.name
            }`
        ),
        // Local variations
        ...city.neighborhoods
          .slice(0, 3)
          .map(
            (neighborhood) => `${solution.name.toLowerCase()} ${neighborhood}`
          ),
      ].join(", "),
      openGraph: {
        title,
        description,
        url: `https://agenxus.com/locations/${city.slug}/${solution.slug}`,
        siteName: "Agenxus",
        images: [
          {
            url: `/og-images/${city.slug}-${solution.slug}.jpg`,
            width: 1200,
            height: 630,
            alt: `${solution.name} services in ${city.name}, ${city.state}`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`/og-images/${city.slug}-${solution.slug}.jpg`],
        creator: "@agenxus",
        site: "@agenxus",
      },
      alternates: {
        canonical: `https://agenxus.com/locations/${city.slug}/${solution.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      other: {
        "geo.region": city.state,
        "geo.placename": city.name,
        "geo.position": `${city.lat};${city.lng}`,
        ICBM: `${city.lat}, ${city.lng}`,
      },
    };
  } else if (INDUSTRY_SLUGS.includes(params.slug)) {
    // City + Industry page metadata
    const industryNames: Record<string, string> = {
      automotive: "Automotive & Dealership",
      healthcare: "Healthcare & Medical",
      "legal-services": "Legal Services",
      "real-estate": "Real Estate",
      "home-services": "Home Services",
      "professional-services": "Professional Services",
      "financial-services": "Financial Services",
      technology: "Technology",
      manufacturing: "Manufacturing",
      retail: "Retail",
    };

    const industryName = industryNames[params.slug] || params.slug;
    const title = `AI Solutions for ${industryName} in ${city.name}, ${city.state} | Complete Automation Suite | Agenxus`;
    const description = `Complete AI automation solutions for ${industryName.toLowerCase()} businesses in ${
      city.name
    }. Voice agents, chatbots, video agents, and process automation designed for your industry.`;

    return {
      title,
      description,
      keywords: [
        `AI solutions ${industryName.toLowerCase()} ${city.name}`,
        `${industryName.toLowerCase()} automation ${city.name}`,
        `${city.name} ${industryName.toLowerCase()} AI`,
        `business automation ${industryName.toLowerCase()} ${city.name}`,
        `AI voice agents ${industryName.toLowerCase()} ${city.name}`,
        `chatbots ${industryName.toLowerCase()} ${city.name}`,
        `process automation ${industryName.toLowerCase()} ${city.name}`,
        `${city.name} ${city.state} ${industryName.toLowerCase()} AI`,
        `${industryName.toLowerCase()} technology ${city.name}`,
        `automated systems ${industryName.toLowerCase()} ${city.name}`,
      ].join(", "),
      openGraph: {
        title,
        description,
        url: `https://agenxus.com/locations/${city.slug}/${params.slug}`,
        siteName: "Agenxus",
        images: [
          {
            url: `/og-images/${city.slug}-${params.slug}-industry.jpg`,
            width: 1200,
            height: 630,
            alt: `AI Solutions for ${industryName} in ${city.name}, ${city.state}`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`/og-images/${city.slug}-${params.slug}-industry.jpg`],
        creator: "@agenxus",
        site: "@agenxus",
      },
      alternates: {
        canonical: `https://agenxus.com/locations/${city.slug}/${params.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      other: {
        "geo.region": city.state,
        "geo.placename": city.name,
        "geo.position": `${city.lat};${city.lng}`,
        ICBM: `${city.lat}, ${city.lng}`,
      },
    };
  }

  return {
    title: "Page Not Found",
    description: "The requested page could not be found.",
  };
}
// /app/locations/[city]/[slug]/page.tsx - Part 2

// Main server component
export default function CitySlugPage({
  params,
}: {
  params: { city: string; slug: string };
}) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  if (SOLUTION_SLUGS.includes(params.slug)) {
    // City + Solution page - Use existing SolutionPageClient
    const solution = getSolutionBySlug(params.slug);
    if (!solution) notFound();

    // Enhanced Schema.org structured data for solution pages
    const solutionStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/`,
          url: `https://agenxus.com/locations/${city.slug}/${solution.slug}/`,
          name: `${solution.name} in ${city.name}, ${city.state} | Agenxus`,
          isPartOf: {
            "@id": "https://agenxus.com/#website",
          },
          about: {
            "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#service`,
          },
          description: `Professional ${solution.name.toLowerCase()} services for ${
            city.name
          } businesses. ${solution.description}`,
          breadcrumb: {
            "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#breadcrumb`,
          },
          inLanguage: "en-US",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString(),
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://agenxus.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Service Areas",
              item: "https://agenxus.com/locations/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${city.name} AI Solutions`,
              item: `https://agenxus.com/locations/${city.slug}/`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: `${solution.name}`,
              item: `https://agenxus.com/locations/${city.slug}/${solution.slug}/`,
            },
          ],
        },
        {
          "@type": "Service",
          "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#service`,
          name: `${solution.name} in ${city.name}`,
          description: solution.description,
          provider: {
            "@type": "Organization",
            "@id": "https://agenxus.com/#organization",
            name: "Agenxus",
            telephone: "+18722778841",
            email: "contact@agenxus.com",
            url: "https://agenxus.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.state,
              addressCountry: "US",
            },
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: city.state === "IL" ? "Illinois" : city.state,
            },
          },
          serviceType: solution.name,
          category: "AI Automation Services",
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
        <meta name="geo.region" content={city.state} />
        <meta name="geo.placename" content={city.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <meta name="solution.type" content={solution.slug} />
        <meta name="solution.name" content={solution.name} />
        <meta name="solution.category" content="AI Automation" />

        <SolutionPageClient
          city={city}
          solution={solution}
          allSolutions={solutions}
        />
      </>
    );
  } else if (INDUSTRY_SLUGS.includes(params.slug)) {
    // City + Industry page - Use new CityIndustryClient
    const industryNames: Record<string, string> = {
      automotive: "Automotive & Dealership",
      healthcare: "Healthcare & Medical",
      "legal-services": "Legal Services",
      "real-estate": "Real Estate",
      "home-services": "Home Services",
      "professional-services": "Professional Services",
      "financial-services": "Financial Services",
      technology: "Technology",
      manufacturing: "Manufacturing",
      retail: "Retail",
    };

    const industryName = industryNames[params.slug] || params.slug;

    // Enhanced Schema.org structured data for industry pages
    const industryStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `https://agenxus.com/locations/${city.slug}/${params.slug}/`,
          url: `https://agenxus.com/locations/${city.slug}/${params.slug}/`,
          name: `AI Solutions for ${industryName} in ${city.name}, ${city.state} | Agenxus`,
          isPartOf: {
            "@id": "https://agenxus.com/#website",
          },
          description: `Complete AI automation solutions for ${industryName.toLowerCase()} businesses in ${
            city.name
          }. Voice agents, chatbots, video agents, and process automation.`,
          breadcrumb: {
            "@id": `https://agenxus.com/locations/${city.slug}/${params.slug}/#breadcrumb`,
          },
          inLanguage: "en-US",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString(),
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://agenxus.com/locations/${city.slug}/${params.slug}/#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://agenxus.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Service Areas",
              item: "https://agenxus.com/locations/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${city.name} AI Solutions`,
              item: `https://agenxus.com/locations/${city.slug}/`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: `${industryName} Solutions`,
              item: `https://agenxus.com/locations/${city.slug}/${params.slug}/`,
            },
          ],
        },
        {
          "@type": "Service",
          "@id": `https://agenxus.com/locations/${city.slug}/${params.slug}/#service`,
          name: `AI Solutions for ${industryName} in ${city.name}`,
          description: `Complete AI automation suite for ${industryName.toLowerCase()} businesses in ${
            city.name
          } including voice agents, chatbots, video agents, and process automation.`,
          provider: {
            "@type": "Organization",
            "@id": "https://agenxus.com/#organization",
            name: "Agenxus",
            telephone: "+18722778841",
            email: "contact@agenxus.com",
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: city.state === "IL" ? "Illinois" : city.state,
            },
          },
          serviceType: `AI Automation for ${industryName}`,
          category: "Industry-Specific AI Solutions",
          audience: {
            "@type": "BusinessAudience",
            name: `${city.name} ${industryName} Businesses`,
            audienceType: [industryName],
            geographicArea: {
              "@type": "City",
              name: city.name,
            },
          },
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
        <meta name="geo.region" content={city.state} />
        <meta name="geo.placename" content={city.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <meta name="industry.type" content={params.slug} />
        <meta name="industry.name" content={industryName} />
        <meta name="industry.category" content="AI Automation" />

        <CityIndustryClient
          city={city}
          industry={params.slug}
          industryName={industryName}
          solutions={solutions}
        />
      </>
    );
  }

  // If slug doesn't match either solutions or industries, return 404
  notFound();
}
