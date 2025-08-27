// /app/services/chatbots/page.tsx
import { Metadata } from "next";
import ChatbotsClient from "./ChatbotsClient";

export const metadata: Metadata = {
  title: "AI Chatbots - 24/7 Website Lead Capture & Customer Support | Agenxus",
  description:
    "Intelligent AI chatbots that engage website visitors, capture leads, and provide instant support 24/7. Increase conversions by 45% with automated chat engagement.",
  keywords: [
    "AI chatbots",
    "website chatbot",
    "conversational AI",
    "AI customer support",
    "automated chat",
    "lead capture chatbot",
    "business chatbot",
    "AI chat assistant",
    "website automation",
    "customer service chatbot",
    "sales chatbot",
    "live chat AI",
    "chatbot for business",
    "AI messaging",
    "automated customer service",
    "website AI assistant",
    "chatbot platform",
    "intelligent chatbot",
    "AI support bot",
    "customer engagement chatbot",
  ],
  openGraph: {
    title: "AI Chatbots - 24/7 Website Lead Capture & Customer Support",
    description:
      "Intelligent AI chatbots that engage website visitors, capture leads, and provide instant support 24/7. Increase conversions by 45% with automated chat engagement.",
    type: "website",
    url: "https://agenxus.com/services/chatbots",
    images: [
      {
        url: "/og-chatbots.jpg",
        width: 1200,
        height: 630,
        alt: "AI Chatbots - 24/7 Website Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots - 24/7 Website Lead Capture & Customer Support",
    description:
      "Intelligent AI chatbots that engage website visitors, capture leads, and provide instant support 24/7.",
    images: ["/og-chatbots.jpg"],
  },
  alternates: {
    canonical: "https://agenxus.com/services/chatbots",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbots",
  description:
    "Professional AI chatbots for websites that engage visitors, capture leads, and provide automated customer support 24/7.",
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
  serviceType: "AI Chatbot Services",
  category: "Website Automation Software",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    name: "AI Chatbot Implementation",
    description:
      "Custom AI chatbot development with lead capture and CRM integration",
    priceCurrency: "USD",
    priceRange: "$$-$$$",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Chatbot Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Capture Automation",
          description:
            "Automatically capture and qualify website visitors as leads",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "24/7 Customer Support",
          description:
            "Provide instant answers to common questions around the clock",
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
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-language Support",
          description:
            "Engage visitors in their preferred language automatically",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 95,
    bestRating: 5,
    worstRating: 1,
  },
  additionalType: [
    "https://schema.org/SoftwareApplication",
    "https://schema.org/CustomerService",
  ],
};

export default function ChatbotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ChatbotsClient />
    </>
  );
}
