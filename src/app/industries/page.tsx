import { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

// Generate metadata for industries pillar page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation by Industry | Healthcare, Automotive, Real Estate & More | Agenxus";
  const description =
    "Discover AI automation solutions tailored for your industry. From healthcare and automotive to real estate and legal services - get AI voice agents, chatbots, and workflow automation designed for your specific business needs.";

  return {
    title,
    description,
    keywords: [
      "AI automation by industry",
      "industry specific AI solutions",
      "AI for healthcare",
      "AI for automotive",
      "AI for real estate",
      "AI for legal services",
      "AI for home services",
      "AI for restaurants",
      "AI for retail",
      "AI for construction",
      "vertical AI solutions",
      "industry AI automation",
      "business process automation",
      "AI voice agents by industry",
      "chatbots by industry",
      "workflow automation solutions",
      "custom AI solutions",
      "enterprise AI automation",
      "small business AI",
      "AI for service businesses",
      "AI for professional services",
      "industry specific chatbots",
      "vertical market automation",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/ai-automation-industries.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation Solutions for Every Industry",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/ai-automation-industries.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries",
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
export default function IndustriesPage() {
  // Industries data structure
  const industriesData = {
    title: "AI Automation Solutions by Industry",
    subtitle: "Tailored AI Solutions for Your Specific Business Needs",
    description:
      "Every industry has unique challenges, workflows, and customer expectations. Our AI automation solutions are specifically designed and customized for your industry's requirements, ensuring maximum efficiency and ROI.",

    // Industry overview stats
    overviewStats: [
      {
        metric: "12+",
        label: "Industries Served",
        description: "Specialized AI solutions across verticals",
      },
      {
        metric: "500+",
        label: "Businesses Automated",
        description: "Companies using our industry-specific AI",
      },
      {
        metric: "85%",
        label: "Average Efficiency Gain",
        description: "Improvement in operational efficiency",
      },
      {
        metric: "3.2x",
        label: "ROI Within 6 Months",
        description: "Average return on investment",
      },
    ],

    // Main industries we serve
    industries: [
      {
        slug: "healthcare",
        name: "Healthcare",
        icon: "Heart",
        shortDescription:
          "HIPAA-compliant AI for medical practices, hospitals, and healthcare systems",
        keyBenefits: [
          "35% increase in appointment bookings",
          "60% reduction in no-shows",
          "75% faster prior authorizations",
          "24/7 patient support coverage",
        ],
        commonUseCases: [
          "Appointment scheduling",
          "Patient triage",
          "Prior authorization automation",
          "Claims processing",
          "Insurance verification",
          "Prescription management",
        ],
        practiceTypes: [
          "Primary Care",
          "Specialty Clinics",
          "Dental Practices",
          "Mental Health",
          "Urgent Care",
          "Healthcare Systems",
        ],
        complianceFeatures: [
          "HIPAA Compliant",
          "SOC 2 Type II",
          "End-to-End Encryption",
        ],
        gradient: "from-blue-500 to-green-500",
      },
      {
        slug: "automotive",
        name: "Automotive",
        icon: "Car",
        shortDescription:
          "AI automation for car dealerships, service centers, and automotive businesses",
        keyBenefits: [
          "40% more qualified leads",
          "50% faster lead response time",
          "30% increase in service bookings",
          "25% improvement in customer satisfaction",
        ],
        commonUseCases: [
          "Lead qualification",
          "Service appointment scheduling",
          "Inventory inquiries",
          "Test drive coordination",
          "Follow-up communication",
          "Customer service automation",
        ],
        practiceTypes: [
          "New Car Dealerships",
          "Used Car Dealers",
          "Service Centers",
          "Auto Parts Stores",
          "Body Shops",
          "Fleet Management",
        ],
        complianceFeatures: [
          "DMS Integration",
          "CRM Connectivity",
          "Inventory Sync",
        ],
        gradient: "from-red-500 to-orange-500",
      },
      {
        slug: "real-estate",
        name: "Real Estate",
        icon: "Home",
        shortDescription:
          "AI solutions for real estate agents, brokerages, and property management",
        keyBenefits: [
          "45% more property inquiries handled",
          "60% faster lead qualification",
          "35% increase in showings scheduled",
          "24/7 buyer and seller support",
        ],
        commonUseCases: [
          "Lead qualification",
          "Property information",
          "Showing scheduling",
          "Market analysis requests",
          "Document collection",
          "Follow-up automation",
        ],
        practiceTypes: [
          "Real Estate Agents",
          "Brokerages",
          "Property Management",
          "Commercial Real Estate",
          "New Construction",
          "Investment Properties",
        ],
        complianceFeatures: [
          "MLS Integration",
          "CRM Sync",
          "Document Management",
        ],
        gradient: "from-green-500 to-teal-500",
      },
      {
        slug: "legal",
        name: "Legal Services",
        icon: "Scale",
        shortDescription:
          "Secure AI automation for law firms and legal service providers",
        keyBenefits: [
          "50% reduction in intake time",
          "40% more consultations scheduled",
          "65% improvement in client communication",
          "30% faster document processing",
        ],
        commonUseCases: [
          "Client intake automation",
          "Consultation scheduling",
          "Document collection",
          "Case status updates",
          "Billing inquiries",
          "Appointment reminders",
        ],
        practiceTypes: [
          "Personal Injury",
          "Family Law",
          "Criminal Defense",
          "Corporate Law",
          "Immigration Law",
          "Estate Planning",
        ],
        complianceFeatures: [
          "Attorney-Client Privilege",
          "Secure Communications",
          "Document Encryption",
        ],
        gradient: "from-purple-500 to-indigo-500",
      },
      {
        slug: "home-services",
        name: "Home Services",
        icon: "Wrench",
        shortDescription:
          "AI automation for contractors, plumbers, electricians, and home service businesses",
        keyBenefits: [
          "55% more service calls booked",
          "70% faster emergency response",
          "40% reduction in no-shows",
          "24/7 customer availability",
        ],
        commonUseCases: [
          "Service call scheduling",
          "Emergency dispatch",
          "Quote requests",
          "Job status updates",
          "Payment processing",
          "Customer follow-up",
        ],
        practiceTypes: [
          "HVAC Contractors",
          "Plumbers",
          "Electricians",
          "Roofers",
          "Landscapers",
          "Handyman Services",
        ],
        complianceFeatures: [
          "License Verification",
          "Insurance Integration",
          "Permit Tracking",
        ],
        gradient: "from-yellow-500 to-orange-500",
      },
      {
        slug: "restaurants",
        name: "Restaurants",
        icon: "UtensilsCrossed",
        shortDescription:
          "AI solutions for restaurants, cafes, and food service businesses",
        keyBenefits: [
          "60% more reservations",
          "45% reduction in wait times",
          "30% increase in takeout orders",
          "24/7 ordering availability",
        ],
        commonUseCases: [
          "Reservation management",
          "Order taking",
          "Menu inquiries",
          "Delivery coordination",
          "Wait list management",
          "Customer feedback collection",
        ],
        practiceTypes: [
          "Fine Dining",
          "Casual Restaurants",
          "Fast Casual",
          "Cafes & Coffee Shops",
          "Food Trucks",
          "Catering Services",
        ],
        complianceFeatures: [
          "POS Integration",
          "Payment Processing",
          "Inventory Sync",
        ],
        gradient: "from-pink-500 to-rose-500",
      },
    ],

    // Why industry-specific AI matters
    whyIndustrySpecific: [
      {
        title: "Industry Expertise",
        description:
          "Our AI understands your industry's terminology, regulations, and best practices",
        icon: "Brain",
      },
      {
        title: "Compliance Built-In",
        description:
          "Meet industry-specific compliance requirements automatically",
        icon: "Shield",
      },
      {
        title: "Workflow Integration",
        description:
          "Seamlessly integrate with your existing industry-standard tools and systems",
        icon: "Workflow",
      },
      {
        title: "Proven Results",
        description:
          "ROI metrics and success stories from businesses just like yours",
        icon: "TrendingUp",
      },
    ],

    // Common automation areas across industries
    commonAutomationAreas: [
      {
        area: "Customer Communication",
        description:
          "24/7 phone answering, inquiry handling, and customer support",
        applicableIndustries: ["All Industries"],
        averageImprovement: "40% better customer satisfaction",
      },
      {
        area: "Appointment Scheduling",
        description: "Automated booking, rescheduling, and reminder systems",
        applicableIndustries: [
          "Healthcare",
          "Legal",
          "Home Services",
          "Automotive",
        ],
        averageImprovement: "60% reduction in scheduling errors",
      },
      {
        area: "Lead Qualification",
        description:
          "Intelligent lead scoring and qualification before human handoff",
        applicableIndustries: [
          "Real Estate",
          "Automotive",
          "Legal",
          "Home Services",
        ],
        averageImprovement: "50% increase in qualified leads",
      },
      {
        area: "Payment Processing",
        description:
          "Automated payment collection, billing, and invoice management",
        applicableIndustries: [
          "Healthcare",
          "Legal",
          "Home Services",
          "Restaurants",
        ],
        averageImprovement: "30% faster payment collection",
      },
      {
        area: "Documentation",
        description:
          "Automated form filling, document collection, and processing",
        applicableIndustries: [
          "Healthcare",
          "Legal",
          "Real Estate",
          "Automotive",
        ],
        averageImprovement: "70% reduction in paperwork time",
      },
      {
        area: "Follow-up Automation",
        description: "Systematic follow-up campaigns and customer retention",
        applicableIndustries: ["All Industries"],
        averageImprovement: "35% improvement in retention",
      },
    ],
  };

  // Schema.org structured data for industries pillar page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/",
        url: "https://agenxus.com/industries/",
        name: "AI Automation Solutions by Industry | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "Discover AI automation solutions tailored for your industry. Healthcare, automotive, real estate, legal services, and more - get industry-specific AI voice agents and chatbots.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/#breadcrumb",
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
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/#service",
        name: "Industry-Specific AI Automation",
        description:
          "Tailored AI automation solutions for healthcare, automotive, real estate, legal services, home services, restaurants, and more",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Industry-Specific AI Automation",
        category: [
          "Healthcare AI",
          "Automotive AI",
          "Real Estate AI",
          "Legal AI",
          "Home Services AI",
          "Restaurant AI",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Industry AI Solutions",
          itemListElement: industriesData.industries.map((industry) => ({
            "@type": "Offer",
            name: `AI Automation for ${industry.name}`,
            description: industry.shortDescription,
            url: `https://agenxus.com/industries/${industry.slug}`,
            price: "Custom pricing",
            priceCurrency: "USD",
          })),
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why do I need industry-specific AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Industry-specific AI automation understands your unique terminology, workflows, compliance requirements, and customer expectations. This results in better accuracy, faster implementation, and higher ROI compared to generic solutions.",
            },
          },
          {
            "@type": "Question",
            name: "Which industries do you serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve healthcare, automotive, real estate, legal services, home services, restaurants, retail, construction, and many other industries. Each solution is customized for industry-specific needs and compliance requirements.",
            },
          },
          {
            "@type": "Question",
            name: "How do you ensure compliance for regulated industries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We build compliance into every industry solution - HIPAA for healthcare, attorney-client privilege for legal, licensing requirements for contractors, and more. All solutions include necessary security measures and audit trails.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI automation integrate with industry-specific software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate with industry-standard software including EHR systems, CRM platforms, DMS for automotive, MLS for real estate, practice management software, and many other vertical-specific tools.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of ROI can I expect from industry-specific AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most businesses see 3.2x ROI within 6 months, with industry-specific improvements like 35% more appointments (healthcare), 40% more qualified leads (automotive), or 55% more service calls (home services).",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://agenxus.com/#organization",
        name: "Agenxus",
        url: "https://agenxus.com",
        telephone: "+18722778841",
        email: "contact@agenxus.com",
        logo: {
          "@type": "ImageObject",
          url: "https://agenxus.com/images/agenxus-logo.png",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "1234 Main Street",
          addressLocality: "Chicago",
          addressRegion: "IL",
          postalCode: "60601",
          addressCountry: "US",
        },
        sameAs: [
          "https://linkedin.com/company/agenxus",
          "https://twitter.com/agenxus",
        ],
        foundingDate: "2024",
        numberOfEmployees: "25-50",
        knowsAbout: [
          "Healthcare AI Automation",
          "Automotive AI Solutions",
          "Real Estate AI Tools",
          "Legal AI Automation",
          "Home Services AI",
          "Restaurant AI Solutions",
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
      <IndustriesPageClient industriesData={industriesData} />
    </>
  );
}
