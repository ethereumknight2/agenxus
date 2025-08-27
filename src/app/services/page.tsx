import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "AI Automation Services - Voice Agents, Chatbots & Process Automation | Agenxus",
  description:
    "Comprehensive AI automation services for modern businesses. AI voice agents, chatbots, video agents, and process automation that work 24/7 to grow your business.",
  keywords: [
    "AI automation services",
    "business automation solutions",
    "AI services for business",
    "automated business systems",
    "conversational AI solutions",
    "AI customer service automation",
    "business process automation",
    "AI technology services",
    "intelligent automation solutions",
    "AI voice and chat services",
    "customer automation platform",
    "AI workflow automation",
    "business AI solutions",
    "automated customer engagement",
    "AI communication services",
    "smart business automation",
    "AI integration services",
    "enterprise AI solutions",
    "AI phone and chat automation",
    "complete AI automation suite",
  ],
  openGraph: {
    title:
      "AI Automation Services - Transform Your Business Operations | Agenxus",
    description:
      "Complete AI automation services: voice agents, chatbots, video agents, and process automation. Scale your business without adding headcount.",
    type: "website",
    url: "https://agenxus.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Automation Services - Transform Your Business Operations | Agenxus",
    description:
      "Complete AI automation services: voice agents, chatbots, video agents, and process automation.",
  },
  alternates: {
    canonical: "https://agenxus.com/services",
  },
};

// Schema.org structured data for services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  description:
    "Comprehensive AI automation services including voice agents, chatbots, video agents, and process automation for modern businesses.",
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
  areaServed: "United States",
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
            "Human-like phone assistants that handle calls, qualify leads, and book appointments 24/7",
          url: "https://agenxus.com/services/ai-voice-agents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots",
          description:
            "Intelligent website chatbots that engage visitors and convert leads automatically",
          url: "https://agenxus.com/services/chatbots",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Video Agents",
          description:
            "Personalized video assistants for customer onboarding and demonstrations",
          url: "https://agenxus.com/services/video-agents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Automation",
          description:
            "End-to-end workflow automation connecting your business tools and eliminating manual tasks",
          url: "https://agenxus.com/services/automation",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesClient />
    </>
  );
}
