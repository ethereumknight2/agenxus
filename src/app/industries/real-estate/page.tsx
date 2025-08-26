import { Metadata } from "next";
import RealEstatePageClient from "./RealEstatePageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for real estate industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Real Estate Agents & Brokerages | Lead Qualification, MLS Integration & Client Management | Agenxus";
  const description =
    "Transform your real estate business with AI voice agents, automated lead qualification, and seamless MLS integration. Increase property inquiries by 45%, qualify leads faster, and never miss a potential buyer or seller call.";

  return {
    title,
    description,
    keywords: [
      "AI for real estate agents",
      "real estate automation",
      "real estate AI voice agents",
      "real estate chatbots",
      "real estate lead generation",
      "real estate AI solutions",
      "real estate customer service AI",
      "real estate process automation",
      "real estate sales automation",
      "real estate phone system",
      "real estate AI receptionist",
      "real estate lead qualification",
      "real estate appointment scheduling",
      "property showing automation",
      "real estate efficiency tools",
      "real estate AI assistant",
      "MLS integration",
      "real estate CRM automation",
      "real estate lead management",
      "property inquiry automation",
      "real estate showing scheduling",
      "real estate follow-up automation",
      "property valuation requests",
      "real estate market analysis",
      "buyer seller matching AI",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/real-estate",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/real-estate-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Real Estate",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/real-estate-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/real-estate",
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
      "geo.region": "US-IL",
      "geo.placename": "Chicago",
      "geo.position": "41.8781;-87.6298",
      ICBM: "41.8781, -87.6298",
    },
  };
}

// Main server component
export default function RealEstatePage() {
  // Real estate-specific data
  const realEstateData = {
    industry: "Real Estate",
    title: "AI Automation for Real Estate Professionals",
    subtitle:
      "Transform Your Real Estate Business with Intelligent Lead Management",
    description:
      "Capture more leads, qualify prospects faster, and schedule showings automatically with AI solutions designed specifically for real estate agents, brokerages, and property management companies.",

    // Real estate-specific pain points and solutions
    challenges: [
      {
        problem: "Missed Lead Opportunities",
        impact:
          "Real estate agents lose 42% of potential leads to competitors due to slow response times",
        solution:
          "AI responds to property inquiries within seconds, capturing hot leads 24/7",
      },
      {
        problem: "Unqualified Lead Waste",
        impact:
          "Agents spend 65% of time with unqualified prospects who aren't ready to buy or sell",
        solution:
          "AI pre-qualifies leads by budget, timeline, and buying intent before handoff",
      },
      {
        problem: "Showing Schedule Chaos",
        impact:
          "30% of property showings are missed or rescheduled due to poor coordination",
        solution:
          "Automated showing coordination with calendar integration and client notifications",
      },
      {
        problem: "After-Hours Inquiries Lost",
        impact:
          "60% of property inquiries happen outside business hours and go unanswered",
        solution:
          "24/7 AI availability ensures no inquiry is missed, even at midnight or weekends",
      },
      {
        problem: "Follow-up Inconsistency",
        impact:
          "80% of real estate leads never receive proper follow-up, resulting in lost commissions",
        solution:
          "Automated nurturing sequences keep prospects engaged throughout buying cycle",
      },
      {
        problem: "Market Information Overload",
        impact:
          "Agents spend 4+ hours daily answering basic market and property questions",
        solution:
          "AI handles routine inquiries, freeing agents for actual selling activities",
      },
    ],

    // Real estate ROI statistics
    stats: [
      {
        metric: "45%",
        label: "More Property Inquiries",
        description: "Increase in qualified prospect engagement",
      },
      {
        metric: "60%",
        label: "Faster Lead Qualification",
        description: "From hours to minutes for prospect screening",
      },
      {
        metric: "35%",
        label: "More Showings Scheduled",
        description: "Automated coordination increases bookings",
      },
      {
        metric: "24/7",
        label: "Lead Capture Coverage",
        description: "Never miss another inquiry",
      },
      {
        metric: "50%",
        label: "Reduced Admin Time",
        description: "Less paperwork, more selling",
      },
      {
        metric: "25%",
        label: "Higher Conversion Rate",
        description: "Better qualified leads close more deals",
      },
    ],

    // Real estate-specific use cases
    useCases: [
      {
        title: "Lead Qualification & Scoring",
        description:
          "Automatically qualify incoming leads by budget, timeline, location preference, and buying intent",
        benefits: [
          "Budget verification",
          "Timeline assessment",
          "Location matching",
          "Buying intent scoring",
          "Pre-approval status",
          "Hot lead prioritization",
        ],
      },
      {
        title: "Property Information & Inquiries",
        description:
          "Handle property details, pricing, and availability questions instantly",
        benefits: [
          "Property details",
          "Pricing information",
          "Availability status",
          "Neighborhood info",
          "School district data",
          "Market comparisons",
        ],
      },
      {
        title: "Showing Coordination",
        description:
          "Streamline property showing appointments with automatic calendar integration",
        benefits: [
          "Showing scheduling",
          "Calendar synchronization",
          "Client preparation",
          "Agent coordination",
          "Reminder notifications",
          "Rescheduling management",
        ],
      },
      {
        title: "Buyer-Seller Matching",
        description:
          "Intelligent matching of buyer preferences with available properties",
        benefits: [
          "Preference matching",
          "Property recommendations",
          "Market alerts",
          "Price range filtering",
          "Feature matching",
          "Location targeting",
        ],
      },
      {
        title: "Market Analysis Requests",
        description:
          "Automate CMA requests and provide preliminary market insights",
        benefits: [
          "CMA automation",
          "Market trends",
          "Price analysis",
          "Comparable properties",
          "Market reports",
          "Investment analysis",
        ],
      },
      {
        title: "Client Follow-up Sequences",
        description:
          "Automated nurturing campaigns for buyers, sellers, and past clients",
        benefits: [
          "Lead nurturing",
          "Client retention",
          "Referral requests",
          "Market updates",
          "Anniversary campaigns",
          "Touch-point automation",
        ],
      },
      {
        title: "Listing Management Support",
        description:
          "Automate listing inquiries, updates, and status communications",
        benefits: [
          "Listing updates",
          "Status notifications",
          "Price changes",
          "Market feedback",
          "Showing reports",
          "Activity summaries",
        ],
      },
      {
        title: "Mortgage & Financing Assistance",
        description:
          "Connect prospects with lenders and streamline financing pre-qualification",
        benefits: [
          "Lender referrals",
          "Pre-qualification",
          "Document collection",
          "Financing options",
          "Rate information",
          "Approval tracking",
        ],
      },
    ],

    // Real estate business types served
    businessTypes: [
      {
        type: "Individual Real Estate Agents",
        specialties: [
          "Residential Sales",
          "Buyer Representation",
          "Seller Representation",
        ],
        commonNeeds: [
          "Lead qualification",
          "Showing coordination",
          "Client communication",
          "Follow-up automation",
          "Market inquiries",
        ],
      },
      {
        type: "Real Estate Brokerages",
        specialties: [
          "Multi-agent Teams",
          "Franchise Operations",
          "Independent Brokerages",
        ],
        commonNeeds: [
          "Lead distribution",
          "Agent support",
          "Brand consistency",
          "Performance tracking",
          "Client management",
        ],
      },
      {
        type: "Commercial Real Estate",
        specialties: [
          "Office Buildings",
          "Retail Spaces",
          "Industrial Properties",
          "Investment Properties",
        ],
        commonNeeds: [
          "Complex inquiries",
          "Investment analysis",
          "Tenant screening",
          "Lease negotiations",
          "Market research",
        ],
      },
      {
        type: "Property Management Companies",
        specialties: [
          "Residential Rentals",
          "Commercial Properties",
          "HOA Management",
        ],
        commonNeeds: [
          "Tenant inquiries",
          "Maintenance requests",
          "Lease applications",
          "Vacancy marketing",
          "Owner communications",
        ],
      },
      {
        type: "Real Estate Investment Firms",
        specialties: ["Fix & Flip", "Buy & Hold", "Commercial Investment"],
        commonNeeds: [
          "Deal analysis",
          "Market research",
          "Investor relations",
          "Property evaluation",
          "Portfolio management",
        ],
      },
      {
        type: "New Construction & Developers",
        specialties: ["New Home Sales", "Planned Communities", "Custom Builds"],
        commonNeeds: [
          "Buyer education",
          "Design consultations",
          "Construction updates",
          "Financing coordination",
          "Move-in scheduling",
        ],
      },
    ],

    // Integration capabilities
    integrations: [
      {
        category: "MLS Systems",
        platforms: ["MRED", "NWMLS", "ARMLS", "CRMLS", "Local MLS"],
        capabilities: [
          "Property data sync",
          "Listing management",
          "Market data access",
          "Comparable analysis",
          "Status updates",
          "Photo integration",
        ],
      },
      {
        category: "CRM Platforms",
        platforms: [
          "Top Producer",
          "Chime",
          "Follow Up Boss",
          "LionDesk",
          "Wise Agent",
        ],
        capabilities: [
          "Contact management",
          "Lead tracking",
          "Communication history",
          "Pipeline management",
          "Task automation",
          "Performance analytics",
        ],
      },
      {
        category: "Transaction Management",
        platforms: [
          "DocuSign",
          "SkySlope",
          "Dotloop",
          "TransactionDesk",
          "zipForm",
        ],
        capabilities: [
          "Document management",
          "E-signature integration",
          "Transaction tracking",
          "Compliance monitoring",
          "Deadline management",
          "Client portals",
        ],
      },
      {
        category: "Marketing Platforms",
        platforms: [
          "Zillow",
          "Realtor.com",
          "Homes.com",
          "Facebook Real Estate",
          "Google Ads",
        ],
        capabilities: [
          "Lead generation",
          "Campaign tracking",
          "Cost per lead analysis",
          "Conversion optimization",
          "Multi-platform sync",
          "ROI reporting",
        ],
      },
    ],
  };

  // Schema.org structured data for real estate industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/real-estate/",
        url: "https://agenxus.com/industries/real-estate/",
        name: "AI Automation for Real Estate | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "AI automation solutions for real estate professionals. Voice agents, lead qualification, and MLS integration to increase property inquiries and accelerate sales.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/real-estate/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/real-estate/#breadcrumb",
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
            name: "Industries",
            item: "https://agenxus.com/industries/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Real Estate AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/real-estate/#service",
        name: "AI Automation for Real Estate",
        description:
          "AI voice agents, lead qualification, and process automation for real estate agents, brokerages, and property management companies",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Real Estate AI Automation",
        category: "Real Estate Technology",
        areaServed: [
          {
            "@type": "State",
            name: "Illinois",
          },
          {
            "@type": "City",
            name: "Chicago",
          },
        ],
        audience: {
          "@type": "BusinessAudience",
          name: "Real Estate Professionals",
          audienceType: [
            "Real Estate Agents",
            "Real Estate Brokerages",
            "Property Management Companies",
            "Commercial Real Estate",
            "Real Estate Investment Firms",
            "New Construction Developers",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Real Estate AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "AI Voice Agents for Real Estate",
              description:
                "24/7 lead qualification and property inquiry handling",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Real Estate Chatbots",
              description:
                "Website automation for property inquiries and lead capture",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "MLS Integration",
              description:
                "Seamless integration with MLS and real estate platforms",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Lead Qualification Automation",
              description: "Automated buyer and seller qualification",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "156",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/real-estate/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do AI voice agents help real estate professionals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI voice agents provide 24/7 lead qualification, handle property inquiries, schedule showings, and ensure no potential buyer or seller call goes unanswered. They can increase property inquiries by 45% and qualify leads 60% faster.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI integrate with MLS and real estate platforms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate seamlessly with MLS systems, real estate CRM platforms like Top Producer and Chime, and marketing platforms like Zillow and Realtor.com. This ensures real-time property data and lead synchronization.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI lead qualification work for real estate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI automatically qualifies leads by asking about budget, timeline, location preferences, buying intent, and pre-approval status. Only qualified, sales-ready prospects are forwarded to agents, increasing conversion rates by 25%.",
            },
          },
          {
            "@type": "Question",
            name: "What types of real estate businesses benefit from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All real estate professionals benefit including individual agents, brokerages, commercial real estate, property management companies, investment firms, and new construction developers. Solutions are customized for each business type.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can real estate AI solutions be implemented?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most real estate AI implementations are completed within 1-2 weeks, including MLS integration, CRM connection, and agent training. We provide dedicated real estate implementation specialists familiar with the industry.",
            },
          },
          {
            "@type": "Question",
            name: "What ROI can real estate professionals expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Real estate professionals typically see 45% more property inquiries, 60% faster lead qualification, 35% more showings scheduled, and 25% higher conversion rates. Most agents see full ROI within 1-3 months of implementation.",
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

      {/* Pass data to client component */}
      <RealEstatePageClient
        realEstateData={realEstateData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
