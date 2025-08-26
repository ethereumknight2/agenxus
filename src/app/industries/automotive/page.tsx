import { Metadata } from "next";
import AutomotivePageClient from "./AutomotivePageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for automotive industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Automotive Dealerships | Voice Agents, Lead Generation & CRM Integration | Agenxus";
  const description =
    "Transform your car dealership with AI voice agents, automated lead qualification, and seamless CRM integration. Increase qualified leads by 40%, reduce response time by 75%, and never miss a potential customer call.";

  return {
    title,
    description,
    keywords: [
      "AI for automotive dealerships",
      "car dealership automation",
      "automotive AI voice agents",
      "dealership chatbots",
      "automotive lead generation",
      "car dealership AI solutions",
      "automotive customer service AI",
      "dealership process automation",
      "automotive sales automation",
      "car dealership phone system",
      "automotive AI receptionist",
      "dealership lead qualification",
      "automotive appointment scheduling",
      "car sales automation",
      "dealership efficiency tools",
      "automotive AI assistant",
      "DMS integration",
      "automotive CRM automation",
      "car dealership lead management",
      "automotive service scheduling",
      "dealership inventory inquiries",
      "automotive test drive booking",
      "car dealership follow-up automation",
      "automotive trade-in evaluation",
      "dealership parts department AI",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/automotive",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/automotive-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Automotive Dealerships",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/automotive-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/automotive",
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
export default function AutomotivePage() {
  // Automotive-specific data
  const automotiveData = {
    industry: "Automotive",
    title: "AI Automation for Automotive Dealerships",
    subtitle: "Transform Your Dealership with Intelligent Customer Engagement",
    description:
      "Increase qualified leads, accelerate sales cycles, and never miss a potential customer with AI solutions designed specifically for automotive dealerships and service centers.",

    // Automotive-specific pain points and solutions
    challenges: [
      {
        problem: "Missed Sales Opportunities",
        impact:
          "Average dealership loses 35% of potential customers to unanswered calls during peak hours",
        solution:
          "24/7 AI voice agents qualify leads instantly and schedule appointments even after hours",
      },
      {
        problem: "Slow Lead Response Time",
        impact:
          "75% of automotive leads go to competitors when response time exceeds 5 minutes",
        solution:
          "AI responds to inquiries within seconds, capturing hot leads before competitors",
      },
      {
        problem: "Unqualified Lead Waste",
        impact:
          "Sales teams spend 60% of time on unqualified prospects, reducing actual sales activity",
        solution:
          "AI pre-qualifies leads by budget, timeline, and buying intent before handoff",
      },
      {
        problem: "Service Department Bottlenecks",
        impact:
          "Service scheduling delays result in $50,000+ monthly revenue loss for average dealership",
        solution:
          "Automated service scheduling and appointment management increase capacity by 40%",
      },
      {
        problem: "Inventory Inquiry Overload",
        impact:
          "Sales staff spend 4+ hours daily answering basic inventory and pricing questions",
        solution:
          "AI handles routine inquiries, freeing sales team for actual selling activities",
      },
      {
        problem: "Poor Follow-up Consistency",
        impact:
          "70% of automotive leads never receive proper follow-up, resulting in lost sales",
        solution:
          "Automated follow-up sequences nurture leads through entire sales funnel",
      },
    ],

    // Automotive ROI statistics
    stats: [
      {
        metric: "40%",
        label: "More Qualified Leads",
        description: "Increase in pre-qualified prospects",
      },
      {
        metric: "75%",
        label: "Faster Response Time",
        description: "From hours to seconds for lead response",
      },
      {
        metric: "30%",
        label: "Higher Conversion Rate",
        description: "More leads converted to sales",
      },
      {
        metric: "24/7",
        label: "Lead Capture Coverage",
        description: "Never miss another opportunity",
      },
      {
        metric: "60%",
        label: "Reduced Admin Time",
        description: "Less time on paperwork, more on selling",
      },
      {
        metric: "35%",
        label: "Service Revenue Increase",
        description: "More appointments scheduled efficiently",
      },
    ],

    // Automotive-specific use cases
    useCases: [
      {
        title: "Lead Qualification & Scoring",
        description:
          "Automatically qualify incoming leads by budget, timeline, trade-in status, and buying intent",
        benefits: [
          "Budget verification",
          "Timeline assessment",
          "Trade-in evaluation",
          "Credit pre-screening",
          "Buying intent scoring",
          "Hot lead prioritization",
        ],
      },
      {
        title: "Inventory & Pricing Inquiries",
        description:
          "Handle vehicle availability, pricing, and specification questions 24/7",
        benefits: [
          "Real-time inventory checks",
          "Pricing information",
          "Vehicle comparisons",
          "Feature explanations",
          "Availability updates",
          "Competitive analysis",
        ],
      },
      {
        title: "Test Drive Scheduling",
        description:
          "Streamline test drive appointments with automatic calendar integration",
        benefits: [
          "Appointment scheduling",
          "Calendar synchronization",
          "Customer preparation",
          "Sales rep assignment",
          "Reminder notifications",
          "Rescheduling management",
        ],
      },
      {
        title: "Service Department Automation",
        description:
          "Automate service appointments, maintenance reminders, and repair updates",
        benefits: [
          "Service scheduling",
          "Maintenance alerts",
          "Repair status updates",
          "Parts availability",
          "Warranty information",
          "Pickup notifications",
        ],
      },
      {
        title: "Finance & Insurance Processing",
        description:
          "Streamline F&I processes with automated document collection and pre-approval",
        benefits: [
          "Document collection",
          "Credit applications",
          "Insurance quotes",
          "Financing options",
          "Pre-approval process",
          "Compliance tracking",
        ],
      },
      {
        title: "Customer Follow-up Sequences",
        description:
          "Automated nurturing campaigns for leads, customers, and service clients",
        benefits: [
          "Lead nurturing",
          "Sales follow-up",
          "Service reminders",
          "Loyalty programs",
          "Referral requests",
          "Satisfaction surveys",
        ],
      },
      {
        title: "Trade-in Evaluations",
        description:
          "Collect trade-in information and provide preliminary valuations",
        benefits: [
          "Vehicle information collection",
          "Condition assessment",
          "Market value estimates",
          "Appraisal scheduling",
          "Trade-in processing",
          "Documentation management",
        ],
      },
      {
        title: "Parts Department Support",
        description:
          "Handle parts inquiries, orders, and availability checks automatically",
        benefits: [
          "Parts lookup",
          "Availability checking",
          "Order processing",
          "Delivery scheduling",
          "Installation appointments",
          "Warranty coverage",
        ],
      },
    ],

    // Dealership types served
    dealershipTypes: [
      {
        type: "New Car Dealerships",
        brands: [
          "Ford",
          "Chevrolet",
          "Toyota",
          "Honda",
          "BMW",
          "Mercedes-Benz",
          "Audi",
          "Lexus",
        ],
        commonNeeds: [
          "Lead qualification",
          "Inventory inquiries",
          "Test drive scheduling",
          "Sales follow-up",
          "Service appointments",
        ],
      },
      {
        type: "Used Car Dealers",
        brands: ["Multi-brand", "Certified Pre-owned", "Independent Lots"],
        commonNeeds: [
          "Inventory management",
          "Trade-in processing",
          "Finance assistance",
          "Warranty inquiries",
          "Quality assurance",
        ],
      },
      {
        type: "Luxury Dealerships",
        brands: [
          "BMW",
          "Mercedes-Benz",
          "Audi",
          "Lexus",
          "Porsche",
          "Jaguar",
          "Land Rover",
        ],
        commonNeeds: [
          "Concierge service",
          "Premium experience",
          "Personal shopping",
          "Exclusive events",
          "VIP treatment",
        ],
      },
      {
        type: "Commercial Vehicle Dealers",
        brands: [
          "Ford Commercial",
          "Chevrolet Fleet",
          "Ram Commercial",
          "Isuzu",
          "Freightliner",
        ],
        commonNeeds: [
          "Fleet management",
          "Business financing",
          "Upfit coordination",
          "Service scheduling",
          "Parts availability",
        ],
      },
      {
        type: "Motorcycle Dealerships",
        brands: [
          "Harley-Davidson",
          "Honda",
          "Yamaha",
          "Kawasaki",
          "Suzuki",
          "Ducati",
        ],
        commonNeeds: [
          "Seasonal inquiries",
          "Service appointments",
          "Parts ordering",
          "Accessory sales",
          "Event coordination",
        ],
      },
      {
        type: "RV & Recreational Vehicle Dealers",
        brands: ["Thor", "Forest River", "Winnebago", "Jayco", "Keystone"],
        commonNeeds: [
          "Product education",
          "Financing assistance",
          "Service scheduling",
          "Warranty support",
          "Rental coordination",
        ],
      },
    ],

    // Integration capabilities
    integrations: [
      {
        category: "Dealer Management Systems (DMS)",
        platforms: [
          "Reynolds & Reynolds",
          "CDK Global",
          "Dealertrack",
          "Auto/Mate",
          "PBS Systems",
          "Frazer Computing",
        ],
        capabilities: [
          "Customer data sync",
          "Inventory management",
          "Sales tracking",
          "Service scheduling",
          "Parts ordering",
          "Financial reporting",
        ],
      },
      {
        category: "CRM Systems",
        platforms: [
          "VinSolutions",
          "DealerSocket",
          "Automotive CRM",
          "ProMax",
          "DealerCenter",
        ],
        capabilities: [
          "Lead management",
          "Customer communication",
          "Follow-up automation",
          "Pipeline tracking",
          "ROI analysis",
          "Performance metrics",
        ],
      },
      {
        category: "Marketing Platforms",
        platforms: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "Facebook Automotive",
          "Google Automotive",
        ],
        capabilities: [
          "Lead attribution",
          "Campaign tracking",
          "Cost per lead analysis",
          "Conversion optimization",
          "Multi-channel integration",
          "Performance reporting",
        ],
      },
      {
        category: "Financial Services",
        platforms: [
          "RouteOne",
          "DealerTrack",
          "LightStream",
          "Capital One Auto Finance",
        ],
        capabilities: [
          "Credit applications",
          "Financing options",
          "Approval processing",
          "Rate comparison",
          "Document management",
          "Compliance tracking",
        ],
      },
    ],
  };

  // Schema.org structured data for automotive industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/automotive/",
        url: "https://agenxus.com/industries/automotive/",
        name: "AI Automation for Automotive Dealerships | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "AI automation solutions for automotive dealerships. Voice agents, lead qualification, and CRM integration to increase qualified leads and accelerate sales.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/automotive/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/automotive/#breadcrumb",
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
            name: "Automotive AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/automotive/#service",
        name: "AI Automation for Automotive Dealerships",
        description:
          "AI voice agents, lead qualification, and process automation for car dealerships and automotive service centers",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Automotive AI Automation",
        category: "Automotive Technology",
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
          name: "Automotive Dealerships and Service Centers",
          audienceType: [
            "Car Dealerships",
            "Automotive Service Centers",
            "Used Car Dealers",
            "Luxury Dealerships",
            "Commercial Vehicle Dealers",
            "Motorcycle Dealerships",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Automotive AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "AI Voice Agents for Dealerships",
              description: "24/7 lead qualification and customer communication",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Automotive Chatbots",
              description:
                "Website automation for inventory and pricing inquiries",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "DMS Integration",
              description:
                "Seamless integration with dealer management systems",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Lead Qualification Automation",
              description: "Automated lead scoring and qualification",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "89",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/automotive/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do AI voice agents help automotive dealerships?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI voice agents provide 24/7 lead qualification, handle inventory inquiries, schedule test drives and service appointments, and ensure no potential customer call goes unanswered. They can increase qualified leads by 40% and reduce response time by 75%.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI integrate with our existing DMS system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate seamlessly with popular Dealer Management Systems including Reynolds & Reynolds, CDK Global, Dealertrack, Auto/Mate, and others. This ensures real-time inventory access and customer data synchronization.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI lead qualification work for car dealerships?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI automatically qualifies leads by asking about budget, timeline, trade-in status, financing needs, and buying intent. Only pre-qualified, sales-ready prospects are forwarded to your sales team, increasing conversion rates by 30%.",
            },
          },
          {
            "@type": "Question",
            name: "What types of automotive businesses benefit from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All automotive businesses benefit including new car dealerships, used car dealers, luxury dealerships, commercial vehicle dealers, motorcycle dealerships, and RV dealers. The solutions are customized for each type of automotive business.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can automotive AI solutions be implemented?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most automotive AI implementations are completed within 1-3 weeks, including DMS integration, CRM connection, and staff training. We provide dedicated automotive implementation specialists familiar with dealership operations.",
            },
          },
          {
            "@type": "Question",
            name: "What ROI can automotive dealerships expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Automotive dealerships typically see 40% more qualified leads, 75% faster response time, 30% higher conversion rate, and 35% increase in service revenue. Most dealerships see full ROI within 2-4 months of implementation.",
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
      <AutomotivePageClient
        automotiveData={automotiveData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
