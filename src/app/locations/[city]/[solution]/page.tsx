import { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPageClient from "./SolutionPageClient";
import {
  cities,
  solutions,
  getCityBySlug,
  getSolutionBySlug,
  getAllCitySlugs,
  getAllSolutionSlugs,
} from "@/data/cities";
import type { City, Solution } from "@/data/cities";

// Generate static params for all city+solution combinations
export async function generateStaticParams() {
  const combinations: Array<{ city: string; solution: string }> = [];

  getAllCitySlugs().forEach((citySlug) => {
    getAllSolutionSlugs().forEach((solutionSlug) => {
      combinations.push({
        city: citySlug,
        solution: solutionSlug,
      });
    });
  });

  return combinations;
}

// Generate metadata for each solution page
export async function generateMetadata({
  params,
}: {
  params: { city: string; solution: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const solution = getSolutionBySlug(params.solution);

  if (!city || !solution) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  const title = `${solution.name} in ${city.name}, ${city.state} | AI Automation Services | Agenxus`;
  const description = `${
    solution.description
  } Professional ${solution.name.toLowerCase()} services for ${
    city.name
  } businesses. ${Object.values(solution.stats).join(
    " • "
  )} performance. Get started today.`;

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
}

// Main server component
export default function SolutionPage({
  params,
}: {
  params: { city: string; solution: string };
}) {
  const city = getCityBySlug(params.city);
  const solution = getSolutionBySlug(params.solution);

  if (!city || !solution) {
    notFound();
  }

  // Enhanced Schema.org structured data for solution pages
  const structuredData = {
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
        author: {
          "@id": "https://agenxus.com/#organization",
        },
        publisher: {
          "@id": "https://agenxus.com/#organization",
        },
        mainEntity: {
          "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#service`,
        },
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
        offers: {
          "@type": "Offer",
          name: `${solution.name} for ${city.name} Businesses`,
          description: `Professional ${solution.name.toLowerCase()} implementation and support for ${
            city.name
          } area businesses`,
          priceCurrency: "USD",
          priceRange: "$$-$$$",
          availability: "https://schema.org/InStock",
          validFrom: "2025-01-01",
          url: `https://agenxus.com/locations/${city.slug}/${solution.slug}`,
          seller: {
            "@id": "https://agenxus.com/#organization",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${solution.name} Features`,
          itemListElement: solution.features.map((feature, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: feature,
            category: solution.name,
          })),
        },
        audience: {
          "@type": "BusinessAudience",
          name: `${city.name} ${solution.industries.join(", ")} Businesses`,
          audienceType: solution.industries,
          geographicArea: {
            "@type": "City",
            name: city.name,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `How do ${solution.name.toLowerCase()} work for ${
              city.name
            } businesses?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${solution.name} for ${
                city.name
              } businesses ${solution.description.toLowerCase()} Our solution integrates with your existing systems and can be customized for ${
                city.name
              }'s specific business environment.`,
            },
          },
          {
            "@type": "Question",
            name: `What industries in ${
              city.name
            } benefit most from ${solution.name.toLowerCase()}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${
                solution.name
              } are particularly effective for ${solution.industries
                .slice(0, 3)
                .join(", ")} businesses in ${
                city.name
              }. However, any business that handles customer communications can benefit from our AI automation solutions.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly can ${solution.name.toLowerCase()} be implemented in ${
              city.name
            }?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Most ${
                city.name
              } businesses can have ${solution.name.toLowerCase()} operational within 48-72 hours for basic implementations. Custom integrations typically take 1-2 weeks depending on complexity.`,
            },
          },
          {
            "@type": "Question",
            name: `What kind of results can ${
              city.name
            } businesses expect from ${solution.name.toLowerCase()}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${
                city.name
              } businesses using our ${solution.name.toLowerCase()} typically see ${Object.values(
                solution.stats
              ).join(", ")} performance improvements. ${
                solution.marketInsights
              }`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Additional SEO meta tags */}
      <meta name="geo.region" content={city.state} />
      <meta name="geo.placename" content={city.name} />
      <meta name="geo.position" content={`${city.lat};${city.lng}`} />
      <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />

      {/* Solution-specific meta tags */}
      <meta name="solution.type" content={solution.slug} />
      <meta name="solution.name" content={solution.name} />
      <meta name="solution.category" content="AI Automation" />

      {/* Pass all data to client component */}
      <SolutionPageClient
        city={city}
        solution={solution}
        allSolutions={solutions}
      />
    </>
  );
}
