// /app/services/video-agents/page.tsx
import { Metadata } from "next";
import VideoAgentsClient from "./VideoAgentsClient";

export const metadata: Metadata = {
  title: "AI Video Agents - Personalized Video Automation at Scale | Agenxus",
  description:
    "AI-powered video agents that deliver personalized messages, product demos, and customer onboarding at scale. Increase engagement by 4x with automated video communication.",
  keywords: [
    "AI video agents",
    "personalized video automation",
    "AI video messaging",
    "automated video demos",
    "video AI assistant",
    "personalized video marketing",
    "AI video communication",
    "automated video onboarding",
    "video personalization platform",
    "AI avatar videos",
    "digital video assistant",
    "scalable video messaging",
    "AI-generated videos",
    "automated video content",
    "personalized video sales",
    "video automation software",
    "AI video platform",
    "custom video agents",
    "automated video responses",
    "interactive video AI",
  ],
  openGraph: {
    title: "AI Video Agents - Personalized Video Automation at Scale",
    description:
      "AI-powered video agents that deliver personalized messages, product demos, and customer onboarding at scale. Increase engagement by 4x with automated video communication.",
    type: "website",
    url: "https://agenxus.com/services/video-agents",
    images: [
      {
        url: "/og-video-agents.jpg",
        width: 1200,
        height: 630,
        alt: "AI Video Agents - Personalized Video Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Agents - Personalized Video Automation at Scale",
    description:
      "AI-powered video agents that deliver personalized messages, product demos, and customer onboarding at scale.",
    images: ["/og-video-agents.jpg"],
  },
  alternates: {
    canonical: "https://agenxus.com/services/video-agents",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Video Agents",
  description:
    "Professional AI video agents that create personalized videos, product demonstrations, and customer onboarding experiences at scale.",
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
  serviceType: "AI Video Agent Services",
  category: "Video Automation Software",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    name: "AI Video Agent Implementation",
    description:
      "Custom AI video agent development with personalization and automation capabilities",
    priceCurrency: "USD",
    priceRange: "$$-$$$",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Video Agent Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personalized Video Messages",
          description:
            "Create custom video messages for each prospect or customer automatically",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automated Product Demos",
          description: "Generate personalized product demonstrations at scale",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Video Onboarding",
          description:
            "Automate customer onboarding with personalized video experiences",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interactive Video AI",
          description:
            "Create interactive video experiences that respond to user input",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 78,
    bestRating: 5,
    worstRating: 1,
  },
  additionalType: [
    "https://schema.org/SoftwareApplication",
    "https://schema.org/VideoObject",
  ],
};

export default function VideoAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VideoAgentsClient />
    </>
  );
}
