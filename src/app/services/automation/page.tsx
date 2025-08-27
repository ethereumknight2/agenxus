// /app/services/automation/page.tsx
import { Metadata } from "next";
import AutomationClient from "./AutomationClient";

export const metadata: Metadata = {
  title:
    "Process Automation - Eliminate Manual Work & Scale Operations | Agenxus",
  description:
    "End-to-end workflow automation that connects your business tools, eliminates manual tasks, and scales operations efficiently. Save 15+ hours per week with 99.8% accuracy.",
  keywords: [
    "process automation",
    "workflow automation",
    "business process automation",
    "automated workflows",
    "business automation software",
    "workflow management automation",
    "process optimization",
    "automated business processes",
    "workflow automation platform",
    "business workflow software",
    "process automation tools",
    "automated task management",
    "business process optimization",
    "workflow automation solution",
    "automated data entry",
    "business workflow optimization",
    "process automation consulting",
    "workflow integration",
    "automated reporting",
    "business efficiency automation",
  ],
  openGraph: {
    title: "Process Automation - Eliminate Manual Work & Scale Operations",
    description:
      "End-to-end workflow automation that connects your business tools, eliminates manual tasks, and scales operations efficiently. Save 15+ hours per week with 99.8% accuracy.",
    type: "website",
    url: "https://agenxus.com/services/automation",
    images: [
      {
        url: "/og-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Process Automation - Business Workflow Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Process Automation - Eliminate Manual Work & Scale Operations",
    description:
      "End-to-end workflow automation that connects your business tools, eliminates manual tasks, and scales operations efficiently.",
    images: ["/og-automation.jpg"],
  },
  alternates: {
    canonical: "https://agenxus.com/services/automation",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Process Automation",
  description:
    "Professional business process automation that connects tools, eliminates manual tasks, and optimizes workflows for maximum efficiency.",
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
  serviceType: "Process Automation Services",
  category: "Business Workflow Software",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    name: "Process Automation Implementation",
    description:
      "Custom workflow automation with tool integration and process optimization",
    priceCurrency: "USD",
    priceRange: "$$-$$$",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Process Automation Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Automation",
          description:
            "Automate repetitive business processes and eliminate manual tasks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tool Integration",
          description:
            "Connect your existing business tools and create seamless data flow",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Processing",
          description:
            "Automated data entry, validation, and reporting across systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Monitoring",
          description:
            "Real-time monitoring and optimization of automated processes",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 112,
    bestRating: 5,
    worstRating: 1,
  },
  additionalType: [
    "https://schema.org/SoftwareApplication",
    "https://schema.org/BusinessFunction",
  ],
};

export default function AutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AutomationClient />
    </>
  );
}
