// /app/services/ai-voice-agents/page.tsx
import { Metadata } from "next";
import VoiceAgentsClient from "./VoiceAgentsClient";

export const metadata: Metadata = {
  title:
    "AI Voice Agents - Never Miss Another Call | 24/7 Phone Automation | Agenxus",
  description:
    "Human-like AI voice agents that answer every call, qualify leads, and book appointments 24/7. Reduce missed calls by 90%+ and capture more leads automatically.",
  keywords: [
    "AI voice agents",
    "AI phone answering service",
    "automated phone system",
    "AI receptionist",
    "voice AI for business",
    "automated call handling",
    "AI appointment booking",
    "phone automation software",
    "conversational AI phone",
    "AI customer service phone",
    "automated lead qualification",
    "AI phone assistant",
    "business phone AI",
    "voice agent technology",
    "AI call center",
    "automated phone reception",
    "AI telephone system",
    "voice automation platform",
    "AI answering service",
    "phone AI solutions",
  ],
  openGraph: {
    title: "AI Voice Agents - Never Miss Another Call | 24/7 Phone Automation",
    description:
      "Human-like AI voice agents that answer every call, qualify leads, and book appointments 24/7. Reduce missed calls by 90%+ and capture more leads automatically.",
    type: "website",
    url: "https://agenxus.com/services/ai-voice-agents",
    images: [
      {
        url: "/og-voice-agents.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents - 24/7 Phone Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents - Never Miss Another Call | 24/7 Phone Automation",
    description:
      "Human-like AI voice agents that answer every call, qualify leads, and book appointments 24/7.",
    images: ["/og-voice-agents.jpg"],
  },
  alternates: {
    canonical: "https://agenxus.com/services/ai-voice-agents",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Voice Agents",
  description:
    "Professional AI voice agents that handle phone calls, qualify leads, and book appointments 24/7 with human-like conversations.",
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
  serviceType: "AI Voice Agent Services",
  category: "Business Automation Software",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    name: "AI Voice Agent Setup",
    description:
      "Custom AI voice agent implementation with CRM integration and training",
    priceCurrency: "USD",
    priceRange: "$$-$$$",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Voice Agent Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "24/7 Call Answering",
          description:
            "AI agents answer every call instantly, no matter the time",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Qualification",
          description:
            "Automatically qualify leads and route high-value prospects",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appointment Booking",
          description:
            "Schedule appointments directly into your calendar system",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Integration",
          description:
            "Seamless integration with Salesforce, HubSpot, and other CRM systems",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1,
  },
  additionalType: [
    "https://schema.org/SoftwareApplication",
    "https://schema.org/TelecommunicationsService",
  ],
};

export default function VoiceAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VoiceAgentsClient />
    </>
  );
}
