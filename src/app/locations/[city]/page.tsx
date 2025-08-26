import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageClient from "./CityPageClient";
import {
  cities,
  solutions,
  getCityBySlug,
  getAllCitySlugs,
} from "@/data/cities";

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllCitySlugs().map((citySlug) => ({
    city: citySlug,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: "City Not Found",
      description: "The requested city page could not be found.",
    };
  }

  const title = `AI Voice Agents, Chatbots & Automation in ${city.name}, ${city.state} | Agenxus`;
  const description = `${city.description} Our AI solutions help ${city.name} businesses capture more leads, reduce missed calls, and deliver exceptional customer experiences 24/7.`;

  return {
    title,
    description,
    keywords: [
      city.keywordFocus.primary,
      ...city.keywordFocus.secondary,
      ...city.keywordFocus.longTail,
      ...city.keywordFocus.highValue,
      ...city.keywordFocus.local,
      `AI automation ${city.name}`,
      `AI voice agents ${city.name}`,
      `AI chatbot ${city.name}`,
      `business automation ${city.name}`,
      `conversational AI ${city.name}`,
      `AI customer service ${city.name}`,
      `automated phone system ${city.name}`,
      `AI receptionist ${city.name}`,
      `voice AI ${city.name}`,
      `smart automation ${city.name}`,
    ].join(", "),
    openGraph: {
      title,
      description,
      url: `https://agenxus.com/locations/${city.slug}`,
      siteName: "Agenxus",
      images: [
        {
          url: `/og-images/${city.slug}-ai-solutions.jpg`,
          width: 1200,
          height: 630,
          alt: `AI Automation Solutions in ${city.name}, ${city.state}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og-images/${city.slug}-ai-solutions.jpg`],
      creator: "@agenxus",
      site: "@agenxus",
    },
    alternates: {
      canonical: `https://agenxus.com/locations/${city.slug}`,
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
      "DC.title": title,
      "DC.creator": "Agenxus",
      "DC.subject": `AI automation, voice agents, chatbots, ${city.name}`,
      "DC.description": description,
      "DC.publisher": "Agenxus",
      "DC.contributor": "Agenxus",
      "DC.date": new Date().toISOString(),
      "DC.type": "Text",
      "DC.format": "text/html",
      "DC.identifier": `https://agenxus.com/locations/${city.slug}`,
      "DC.source": "https://agenxus.com",
      "DC.language": "en-US",
      "DC.coverage": `${city.name}, ${city.state}, United States`,
      "DC.rights": "© 2025 Agenxus",
    },
  };
}

// Main server component
export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  // Enhanced Schema.org structured data with comprehensive markup
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://agenxus.com/locations/${city.slug}/`,
        url: `https://agenxus.com/locations/${city.slug}/`,
        name: `AI Voice Agents, Chatbots & Automation in ${city.name}, ${city.state} | Agenxus`,
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        about: {
          "@id": `https://agenxus.com/locations/${city.slug}/#organization`,
        },
        description: `AI automation solutions for ${city.name} businesses. Voice agents, chatbots, video agents, and process automation. Never miss another call or lead.`,
        breadcrumb: {
          "@id": `https://agenxus.com/locations/${city.slug}/#breadcrumb`,
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`https://agenxus.com/locations/${city.slug}/`],
          },
        ],
        mainEntity: {
          "@id": `https://agenxus.com/locations/${city.slug}/#service`,
        },
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
        author: {
          "@id": "https://agenxus.com/#organization",
        },
        publisher: {
          "@id": "https://agenxus.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://agenxus.com/locations/${city.slug}/#breadcrumb`,
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
        ],
      },
      {
        "@type": "Organization",
        "@id": `https://agenxus.com/locations/${city.slug}/#organization`,
        name: "Agenxus",
        alternateName: ["Agenxus AI", "Agenxus Automation"],
        url: "https://agenxus.com",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "https://agenxus.com/#/schema/logo/image/",
          url: "https://agenxus.com/logo.png",
          contentUrl: "https://agenxus.com/logo.png",
          width: 512,
          height: 512,
          caption: "Agenxus - AI Automation Solutions",
        },
        image: {
          "@id": "https://agenxus.com/#/schema/logo/image/",
        },
        telephone: "+18722778841",
        email: "contact@agenxus.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.lat,
          longitude: city.lng,
        },
        areaServed: [
          {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: city.state === "IL" ? "Illinois" : city.state,
              containedInPlace: {
                "@type": "Country",
                name: "United States",
              },
            },
          },
          ...city.neighborhoods.map((neighborhood) => ({
            "@type": "Place",
            name: neighborhood,
            containedInPlace: {
              "@type": "City",
              name: city.name,
            },
          })),
        ],
        serviceType: [
          "AI Voice Agents",
          "AI Chatbots",
          "AI Video Agents",
          "Process Automation",
          "Business Automation",
          "Customer Service Automation",
          "Conversational AI",
          "Voice AI Solutions",
          "Automated Phone Systems",
          "AI Receptionist Services",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Voice Automation",
          "Customer Service Automation",
          "Business Process Automation",
          "Conversational AI",
          "Natural Language Processing",
          "Speech Recognition",
          "Machine Learning",
          "Chatbot Development",
          "Voice Assistant Technology",
        ],
        slogan: "AI Agents for Smarter Business",
        foundingDate: "2023",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "25-50",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `https://agenxus.com/locations/${city.slug}/#localbusiness`,
        name: `Agenxus - AI Solutions ${city.name}`,
        image: `https://agenxus.com/images/${city.slug}-office.jpg`,
        telephone: "+18722778841",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.lat,
          longitude: city.lng,
        },
        url: `https://agenxus.com/locations/${city.slug}`,
        servesCuisine: [], // Not applicable
        priceRange: "$$-$$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "16:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.8,
          reviewCount: 127,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        "@type": "Service",
        "@id": `https://agenxus.com/locations/${city.slug}/#service`,
        name: `AI Automation Services in ${city.name}`,
        description: `Professional AI voice agents, chatbots, video agents, and process automation services for ${city.name} businesses. 24/7 automated customer service, lead qualification, and appointment scheduling.`,
        provider: {
          "@id": `https://agenxus.com/locations/${city.slug}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "State",
            name: city.state === "IL" ? "Illinois" : city.state,
          },
        },
        serviceType: "AI Automation Services",
        category: [
          "Technology Services",
          "Business Automation",
          "Customer Service",
          "Artificial Intelligence",
          "Voice Technology",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `AI Solutions for ${city.name} Businesses`,
          itemListElement: solutions.map((solution, index) => ({
            "@type": "Offer",
            "@id": `https://agenxus.com/locations/${city.slug}/${solution.slug}`,
            position: index + 1,
            name: `${solution.name} in ${city.name}`,
            description: solution.description,
            category: "AI Automation Services",
            url: `https://agenxus.com/locations/${city.slug}/${solution.slug}`,
            priceCurrency: "USD",
            priceRange: "$$-$$$",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            seller: {
              "@id": `https://agenxus.com/locations/${city.slug}/#organization`,
            },
          })),
        },
        audience: {
          "@type": "BusinessAudience",
          name: `${city.name} Businesses`,
          geographicArea: {
            "@type": "City",
            name: city.name,
          },
          audienceType: [
            "Small Business",
            "Medium Business",
            "Large Enterprise",
            "Professional Services",
            "Healthcare",
            "Real Estate",
            "Legal Services",
            "Home Services",
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://agenxus.com/locations/${city.slug}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `How quickly can AI agents be deployed for ${city.name} businesses?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Most ${city.name} businesses can have AI voice agents operational within 48-72 hours. More complex integrations with existing systems typically take 1-2 weeks depending on your current setup.`,
            },
          },
          {
            "@type": "Question",
            name: `Do you provide local support in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, we provide dedicated account management and technical support for ${city.name} businesses. Our team understands local market dynamics and can provide hands-on assistance when needed.`,
            },
          },
          {
            "@type": "Question",
            name: `What's the typical ROI for ${city.name} businesses?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${city.name} businesses typically see a return on investment within 30-90 days. Common benefits include 35-60% increase in lead capture, reduced staffing costs, and improved customer satisfaction scores.`,
            },
          },
          {
            "@type": "Question",
            name: `Can AI agents handle multiple locations in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Absolutely. Our AI solutions are designed for multi-location businesses across ${city.name} and surrounding areas. We provide unified reporting, location-specific routing, and centralized management while maintaining local customization.`,
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

      {/* Local Business markup */}
      <meta name="business.hours" content="Mon-Fri 8am-6pm, Sat 9am-4pm" />
      <meta name="business.phone" content="+18722778841" />
      <meta name="business.email" content="contact@agenxus.com" />

      {/* Social media optimization */}
      <meta property="business:contact_data:locality" content={city.name} />
      <meta property="business:contact_data:region" content={city.state} />
      <meta
        property="business:contact_data:country_name"
        content="United States"
      />
      <meta property="place:location:latitude" content={city.lat.toString()} />
      <meta property="place:location:longitude" content={city.lng.toString()} />

      {/* Pass all data to client component */}
      <CityPageClient city={city} solutions={solutions} />
    </>
  );
}
