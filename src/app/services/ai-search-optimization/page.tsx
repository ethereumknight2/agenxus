// /app/services/ai-search-optimization/page.tsx
import { Metadata } from "next";
import SearchOptimizationClient from "./SearchOptimizationClient";

export const metadata: Metadata = {
  title: "AI Search Optimization - Boost SEO & Conversions | Agenxus",
  description:
    "AI-powered search optimization to rank higher, convert more, and improve user experience across your site. Smart content, structured data, and on-page enhancements with zero effort.",
  keywords: [
    "AI search optimization",
    "SEO automation",
    "structured data SEO",
    "on-page AI optimization",
    "semantic search optimization",
    "AI website SEO tools",
    "search engine AI enhancements",
    "conversational SEO",
    "AI for search ranking",
    "SEO with generative AI",
    "AI content optimization",
    "metadata automation",
    "rich snippets AI",
    "search intent AI",
  ],
  openGraph: {
    title: "AI Search Optimization - Boost SEO & Conversions | Agenxus",
    description:
      "Rank higher and convert more with AI-powered search optimization. Automatic structured data, semantic content, and rich snippets.",
    type: "website",
    url: "https://agenxus.com/services/ai-search-optimization",
    images: [
      {
        url: "/og-search-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "AI Search Optimization - SEO Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization - Boost SEO & Conversions | Agenxus",
    description:
      "AI-powered SEO tools that improve rankings, UX, and conversions with automatic on-page optimization.",
    images: ["/og-search-optimization.jpg"],
  },
  alternates: {
    canonical: "https://agenxus.com/services/ai-search-optimization",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Optimization",
  description:
    "AI-powered optimization of websites for search engines using semantic markup, structured data, and generative content strategies.",
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
  serviceType: "AI SEO Automation",
  category: "Marketing Automation",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    name: "AI SEO Package",
    description:
      "Automated SEO enhancement with structured data, metadata generation, content scoring, and search experience improvements.",
    priceCurrency: "USD",
    priceRange: "$$-$$$",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Search Optimization Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Semantic Tagging",
          description:
            "Enhance site relevance with entity-level understanding for better Google comprehension",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rich Snippet Automation",
          description:
            "Auto-generate JSON-LD structured data for featured snippets and knowledge panels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Optimization",
          description:
            "Optimize existing content for user intent, readability, and NLP scoring",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 94,
    bestRating: 5,
    worstRating: 1,
  },
  additionalType: ["https://schema.org/SEOService"],
};

export default function SearchOptimizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SearchOptimizationClient />
    </>
  );
}
