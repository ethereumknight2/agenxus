import { Metadata } from "next";
import HomeServicesPageClient from "./HomeServicesPageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for home services industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Home Services | Contractors, Plumbers, HVAC & Electricians | Agenxus";
  const description =
    "Transform your home services business with AI voice agents, automated scheduling, and emergency dispatch. Increase service bookings by 55%, reduce no-shows by 40%, and provide 24/7 customer availability for contractors, plumbers, HVAC, and electricians.";

  return {
    title,
    description,
    keywords: [
      "AI for home services",
      "contractor automation",
      "home services AI",
      "plumber AI automation",
      "HVAC AI solutions",
      "electrician automation",
      "service call automation",
      "emergency dispatch AI",
      "contractor scheduling automation",
      "home services customer service AI",
      "service business automation",
      "contractor AI assistant",
      "home improvement automation",
      "trade services AI",
      "maintenance company automation",
      "repair services AI",
      "service appointment scheduling",
      "contractor lead generation",
      "home services CRM automation",
      "field service management AI",
      "contractor quote automation",
      "service follow-up automation",
      "home services billing AI",
      "contractor communication automation",
      "emergency repair automation",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/home-services",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/home-services-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Home Services Contractors",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/home-services-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/home-services",
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
export default function HomeServicesPage() {
  // Home services-specific data
  const homeServicesData = {
    industry: "Home Services",
    title: "AI Automation for Home Services & Contractors",
    subtitle: "Streamline Service Calls and Emergency Dispatch with Smart AI",
    description:
      "Increase service bookings, reduce no-shows, and provide 24/7 availability with AI solutions designed specifically for contractors, plumbers, HVAC technicians, and home service professionals.",

    // Home services-specific pain points and solutions
    challenges: [
      {
        problem: "Missed Emergency Service Calls",
        impact:
          "Home service businesses lose 42% of emergency calls due to unavailability during off-hours",
        solution:
          "AI provides 24/7 emergency dispatch with priority routing and immediate customer notification",
      },
      {
        problem: "High No-Show Rates",
        impact:
          "Service appointments have 25-30% no-show rates, wasting technician time and fuel costs",
        solution:
          "Automated reminders and confirmation systems reduce no-shows by 40%",
      },
      {
        problem: "Quote Request Management",
        impact:
          "Contractors spend 15+ hours weekly on quote requests that don't convert to jobs",
        solution:
          "AI pre-qualifies quote requests and collects detailed project information before handoff",
      },
      {
        problem: "Scheduling Chaos",
        impact:
          "Manual scheduling leads to double bookings, travel inefficiencies, and customer frustration",
        solution:
          "Intelligent scheduling considers location, technician skills, and job complexity",
      },
      {
        problem: "Payment Collection Delays",
        impact:
          "Home service businesses wait 30+ days for payment on completed work",
        solution:
          "Automated invoicing and payment reminders accelerate collection by 45%",
      },
      {
        problem: "Customer Follow-up Gaps",
        impact:
          "Poor follow-up results in missed repeat business and referral opportunities",
        solution:
          "Systematic follow-up campaigns increase customer retention by 35%",
      },
    ],

    // Home services ROI statistics
    stats: [
      {
        metric: "55%",
        label: "More Service Calls",
        description: "Increase in booked appointments",
      },
      {
        metric: "70%",
        label: "Faster Emergency Response",
        description: "Reduced response time for urgent calls",
      },
      {
        metric: "40%",
        label: "Fewer No-Shows",
        description: "Reduction in appointment cancellations",
      },
      {
        metric: "24/7",
        label: "Customer Availability",
        description: "Round-the-clock service booking",
      },
      {
        metric: "45%",
        label: "Faster Payment Collection",
        description: "Improved cash flow timeline",
      },
      {
        metric: "35%",
        label: "Higher Customer Retention",
        description: "Improved repeat business rates",
      },
    ],

    // Home services-specific use cases
    useCases: [
      {
        title: "Emergency Service Dispatch",
        description:
          "24/7 emergency call handling with priority routing and immediate response coordination",
        benefits: [
          "Emergency triage system",
          "Priority routing protocols",
          "Immediate customer notification",
          "Technician dispatch coordination",
          "Status update automation",
          "Follow-up scheduling",
        ],
      },
      {
        title: "Service Appointment Scheduling",
        description:
          "Intelligent scheduling system considering location, skills, and job requirements",
        benefits: [
          "Availability checking",
          "Geographic optimization",
          "Skill-based matching",
          "Equipment coordination",
          "Customer confirmation",
          "Reminder notifications",
        ],
      },
      {
        title: "Quote Request Management",
        description:
          "Automated collection of project details and customer qualification for accurate quoting",
        benefits: [
          "Project scope collection",
          "Photo and measurement requests",
          "Budget qualification",
          "Timeline determination",
          "Material specification",
          "Estimate delivery",
        ],
      },
      {
        title: "Customer Service & Support",
        description:
          "Handle service inquiries, warranty questions, and maintenance scheduling",
        benefits: [
          "Service history access",
          "Warranty verification",
          "Maintenance reminders",
          "Troubleshooting guidance",
          "Part availability checking",
          "Technician referrals",
        ],
      },
      {
        title: "Payment & Billing Automation",
        description:
          "Streamlined invoicing, payment collection, and account management",
        benefits: [
          "Automatic invoice generation",
          "Payment processing",
          "Overdue notifications",
          "Payment plan setup",
          "Account status updates",
          "Receipt distribution",
        ],
      },
      {
        title: "Customer Follow-up & Retention",
        description:
          "Systematic follow-up campaigns and satisfaction monitoring",
        benefits: [
          "Service completion surveys",
          "Satisfaction tracking",
          "Referral requests",
          "Maintenance scheduling",
          "Seasonal reminders",
          "Loyalty program management",
        ],
      },
      {
        title: "Lead Qualification & Conversion",
        description:
          "Pre-qualify potential customers and convert inquiries into booked services",
        benefits: [
          "Service area verification",
          "Budget assessment",
          "Project timeline",
          "Decision maker identification",
          "Competition analysis",
          "Conversion optimization",
        ],
      },
      {
        title: "Seasonal Service Management",
        description:
          "Manage seasonal demand fluctuations and proactive service offerings",
        benefits: [
          "Seasonal reminders",
          "Capacity planning",
          "Preventive maintenance",
          "Weather-based outreach",
          "Equipment preparation",
          "Service bundling",
        ],
      },
    ],

    // Home services business types
    serviceTypes: [
      {
        type: "HVAC Contractors",
        specialties: [
          "AC Repair",
          "Furnace Installation",
          "Duct Cleaning",
          "Commercial HVAC",
        ],
        commonNeeds: [
          "Emergency service dispatch",
          "Seasonal maintenance scheduling",
          "Equipment replacement quotes",
          "System diagnostic support",
          "Warranty claim processing",
        ],
      },
      {
        type: "Plumbing Services",
        specialties: [
          "Emergency Repairs",
          "Drain Cleaning",
          "Water Heater Service",
          "Pipe Installation",
        ],
        commonNeeds: [
          "24/7 emergency availability",
          "Service call prioritization",
          "Parts inventory checking",
          "Permit coordination",
          "Customer education",
        ],
      },
      {
        type: "Electrical Contractors",
        specialties: [
          "Residential Wiring",
          "Commercial Electrical",
          "Panel Upgrades",
          "Generator Installation",
        ],
        commonNeeds: [
          "Safety compliance verification",
          "Permit application assistance",
          "Code requirement guidance",
          "Emergency power restoration",
          "Load calculation support",
        ],
      },
      {
        type: "Roofing Companies",
        specialties: [
          "Roof Repair",
          "New Installation",
          "Storm Damage",
          "Gutter Services",
        ],
        commonNeeds: [
          "Insurance claim coordination",
          "Weather damage assessment",
          "Material cost estimation",
          "Permit processing",
          "Safety protocol management",
        ],
      },
      {
        type: "Landscaping & Lawn Care",
        specialties: [
          "Lawn Maintenance",
          "Landscape Design",
          "Tree Services",
          "Irrigation Systems",
        ],
        commonNeeds: [
          "Seasonal service scheduling",
          "Weather-dependent rescheduling",
          "Property assessment coordination",
          "Chemical application tracking",
          "Equipment maintenance alerts",
        ],
      },
      {
        type: "General Contractors",
        specialties: [
          "Home Renovations",
          "Kitchen Remodeling",
          "Bathroom Upgrades",
          "Basement Finishing",
        ],
        commonNeeds: [
          "Project timeline coordination",
          "Subcontractor scheduling",
          "Material delivery tracking",
          "Permit status monitoring",
          "Progress update communication",
        ],
      },
    ],

    // Compliance & licensing features
    compliance: [
      {
        standard: "License Verification",
        description:
          "Automatic verification of contractor licenses and certifications with state and local authorities",
      },
      {
        standard: "Insurance Integration",
        description:
          "Real-time insurance verification and coverage confirmation for all service appointments",
      },
      {
        standard: "Permit Tracking",
        description:
          "Automated permit application status tracking and compliance monitoring for all projects",
      },
      {
        standard: "Safety Compliance",
        description:
          "Built-in safety protocol reminders and OSHA compliance tracking for all field operations",
      },
      {
        standard: "Bonding Verification",
        description:
          "Automatic bonding status verification and customer notification of coverage details",
      },
      {
        standard: "Regulatory Updates",
        description:
          "Automatic updates on local building codes, licensing requirements, and regulatory changes",
      },
    ],

    // Integration capabilities
    integrations: [
      {
        category: "Field Service Management",
        platforms: [
          "ServiceTitan",
          "Housecall Pro",
          "Jobber",
          "FieldEdge",
          "ServiceMax",
          "Workiz",
        ],
        capabilities: [
          "Job scheduling sync",
          "Customer data integration",
          "Invoice automation",
          "Technician dispatch",
          "Parts inventory tracking",
          "Service history access",
        ],
      },
      {
        category: "Accounting & Billing",
        platforms: [
          "QuickBooks",
          "Xero",
          "FreshBooks",
          "Sage",
          "Wave Accounting",
        ],
        capabilities: [
          "Automated invoicing",
          "Payment processing",
          "Expense tracking",
          "Tax preparation",
          "Financial reporting",
          "Cash flow management",
        ],
      },
      {
        category: "Customer Relationship Management",
        platforms: [
          "Salesforce",
          "HubSpot",
          "Pipedrive",
          "Zoho CRM",
          "Service CRM",
        ],
        capabilities: [
          "Lead management",
          "Customer communication",
          "Sales pipeline tracking",
          "Marketing automation",
          "Customer segmentation",
          "Performance analytics",
        ],
      },
      {
        category: "Marketing & Lead Generation",
        platforms: [
          "Google Ads",
          "Facebook Marketing",
          "Angie's List",
          "HomeAdvisor",
          "Thumbtack",
        ],
        capabilities: [
          "Lead capture automation",
          "Ad performance tracking",
          "Review management",
          "Local SEO optimization",
          "Social media integration",
          "Referral tracking",
        ],
      },
    ],
  };

  // Schema.org structured data for home services industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/home-services/",
        url: "https://agenxus.com/industries/home-services/",
        name: "AI Automation for Home Services | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "AI automation solutions for home service contractors. Voice agents, emergency dispatch, and service scheduling to improve efficiency and customer satisfaction.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/home-services/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/home-services/#breadcrumb",
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
            name: "Home Services AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/home-services/#service",
        name: "AI Automation for Home Services",
        description:
          "AI voice agents, emergency dispatch, and service scheduling for contractors and home service businesses",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Home Services AI Automation",
        category: "Contractor Technology",
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
          name: "Home Service Contractors",
          audienceType: [
            "HVAC Contractors",
            "Plumbers",
            "Electricians",
            "Roofers",
            "Landscapers",
            "General Contractors",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Services AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Emergency Dispatch AI",
              description:
                "24/7 emergency call handling and technician dispatch",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Service Scheduling Automation",
              description:
                "Intelligent appointment scheduling with route optimization",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Quote Management System",
              description:
                "Automated quote request processing and customer qualification",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Customer Service AI",
              description:
                "AI-powered customer support and service inquiry handling",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "189",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/home-services/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does AI help home service contractors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI provides 24/7 emergency dispatch, intelligent scheduling, quote management, and customer service automation. This increases service bookings by 55%, reduces no-shows by 40%, and improves customer satisfaction while reducing operational overhead.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI handle emergency service calls?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, AI can triage emergency calls, assess urgency levels, dispatch appropriate technicians, and provide immediate customer updates. The system operates 24/7 and can reduce emergency response times by 70%.",
            },
          },
          {
            "@type": "Question",
            name: "Does AI integrate with field service management software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate with popular field service platforms including ServiceTitan, Housecall Pro, Jobber, FieldEdge, and others. This ensures seamless scheduling, customer data sync, and workflow integration.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI scheduling work for contractors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI considers technician availability, skills, location, travel time, and job requirements to optimize scheduling. It automatically books appointments, sends confirmations, and provides route optimization to maximize efficiency.",
            },
          },
          {
            "@type": "Question",
            name: "What types of home service businesses benefit from AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All home service contractors benefit including HVAC, plumbing, electrical, roofing, landscaping, and general contractors. Solutions are customized for each trade's specific workflows and requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What ROI can contractors expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Home service contractors typically see 55% more service calls, 40% fewer no-shows, 45% faster payment collection, and 35% higher customer retention. Most see full ROI within 2-3 months of implementation.",
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
      <HomeServicesPageClient
        homeServicesData={homeServicesData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
