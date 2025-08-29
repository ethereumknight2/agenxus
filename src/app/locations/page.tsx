import { Metadata } from "next";
import ServiceAreasClient from "./ServiceAreasClient";

export const metadata: Metadata = {
  title: "Service Areas - AI Automation for Businesses Nationwide | Agenxus",
  description:
    "Agenxus provides AI voice agents, chatbots, video agents, and process automation to businesses across major cities nationwide with local market expertise.",
  keywords: [
    "AI automation service areas",
    "local AI solutions",
    "AI voice agents nationwide",
    "business automation locations",
    "AI services Chicago",
    "AI automation Illinois",
    "chatbots service areas",
    "process automation locations",
    "AI solutions by city",
    "local business automation",
  ],
  openGraph: {
    title: "Service Areas - AI Automation Nationwide | Agenxus",
    description:
      "AI automation solutions for businesses across major metropolitan areas with local market expertise and 24/7 support.",
    type: "website",
    url: "https://agenxus.com/locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas - AI Automation Nationwide | Agenxus",
    description:
      "AI automation solutions for businesses across major metropolitan areas with local market expertise and 24/7 support.",
  },
  alternates: {
    canonical: "https://agenxus.com/locations",
  },
};

// Schema.org structured data for service areas
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  description:
    "AI voice agents, chatbots, video agents, and process automation for businesses nationwide",
  provider: {
    "@type": "Organization",
    name: "Agenxus",
    url: "https://agenxus.com",
    telephone: "+18722778841",
    address: {
      "@type": "PostalAddress",
      streetAddress: "218 S. Main Street",
      addressLocality: "Naperville",
      addressRegion: "IL",
      postalCode: "60540",
      addressCountry: "US",
    },
  },
  serviceType: "AI Business Automation",
  category: "Business Software Solutions",
  areaServed: [
    {
      "@type": "City",
      name: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Naperville",
      addressRegion: "IL",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Schaumburg",
      addressRegion: "IL",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Aurora",
      addressRegion: "IL",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Rockford",
      addressRegion: "IL",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Peoria",
      addressRegion: "IL",
      addressCountry: "US",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Voice Agents",
          description:
            "24/7 phone automation and call handling for businesses nationwide",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots",
          description:
            "Website automation and lead capture across all service areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Video Agents",
          description:
            "Personalized video automation for businesses in major metropolitan areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Automation",
          description:
            "Workflow automation and business process optimization nationwide",
        },
      },
    ],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServiceAreasClient />
    </>
  );
}
