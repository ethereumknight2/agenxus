import { Metadata } from "next";
import LegalPageClient from "./LegalPageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for legal services industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Law Firms & Legal Services | Client Intake, Case Management & Secure Communications | Agenxus";
  const description =
    "Transform your law firm with AI voice agents, automated client intake, and secure case management. Reduce intake time by 50%, increase consultations by 40%, and maintain attorney-client privilege with AI solutions designed for legal professionals.";

  return {
    title,
    description,
    keywords: [
      "AI for law firms",
      "legal services automation",
      "AI voice agents legal",
      "legal chatbots",
      "law firm automation",
      "legal AI solutions",
      "attorney client intake automation",
      "legal customer service AI",
      "law firm process automation",
      "legal appointment scheduling",
      "AI legal receptionist",
      "legal lead qualification",
      "law firm efficiency tools",
      "legal AI assistant",
      "case management automation",
      "legal CRM automation",
      "attorney scheduling automation",
      "legal document automation",
      "client communication automation",
      "legal consultation booking",
      "law firm follow-up automation",
      "legal billing inquiries AI",
      "attorney-client privilege AI",
      "secure legal communications",
      "legal practice management AI",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/legal",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/legal-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Legal Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/legal-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/legal",
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
export default function LegalPage() {
  // Legal services-specific data
  const legalData = {
    industry: "Legal Services",
    title: "AI Automation for Law Firms & Legal Services",
    subtitle: "Streamline Client Intake and Case Management with Secure AI",
    description:
      "Reduce client intake time, increase consultation bookings, and maintain the highest security standards with AI solutions designed specifically for law firms and legal professionals.",

    // Legal-specific pain points and solutions
    challenges: [
      {
        problem: "Lengthy Client Intake Process",
        impact:
          "Law firms spend 45+ minutes on initial client intake, reducing billable hour capacity",
        solution:
          "AI automates intake forms and pre-screens cases, reducing intake time by 50%",
      },
      {
        problem: "Missed Consultation Opportunities",
        impact:
          "Legal practices lose 38% of potential clients to competitors due to delayed response",
        solution:
          "24/7 AI ensures immediate response to legal inquiries and consultation requests",
      },
      {
        problem: "Unqualified Lead Screening",
        impact:
          "Attorneys spend 40% of consultation time on cases outside their practice areas",
        solution:
          "AI pre-qualifies cases by practice area, urgency, and case merit before handoff",
      },
      {
        problem: "Administrative Overhead",
        impact:
          "Legal staff spend 20+ hours weekly on scheduling and routine client communications",
        solution:
          "Automated scheduling and communication reduces admin work by 65%",
      },
      {
        problem: "After-Hours Emergency Calls",
        impact:
          "Legal emergencies happen 24/7, but most firms only answer during business hours",
        solution:
          "AI triages urgent legal matters and routes true emergencies appropriately",
      },
      {
        problem: "Inconsistent Client Communication",
        impact:
          "Poor communication leads to 70% of client complaints and bar grievances",
        solution:
          "AI ensures consistent, professional client interactions with case status updates",
      },
    ],

    // Legal services ROI statistics
    stats: [
      {
        metric: "50%",
        label: "Faster Client Intake",
        description: "Reduced intake and screening time",
      },
      {
        metric: "40%",
        label: "More Consultations",
        description: "Increase in booked consultations",
      },
      {
        metric: "65%",
        label: "Less Admin Work",
        description: "Reduced administrative overhead",
      },
      {
        metric: "24/7",
        label: "Client Support",
        description: "Around-the-clock availability",
      },
      {
        metric: "30%",
        label: "Higher Conversion",
        description: "Better qualified leads to clients",
      },
      {
        metric: "85%",
        label: "Client Satisfaction",
        description: "Improved communication scores",
      },
    ],

    // Legal-specific use cases
    useCases: [
      {
        title: "Client Intake & Screening",
        description:
          "Automated initial client screening with practice area matching and case assessment",
        benefits: [
          "Practice area verification",
          "Case merit assessment",
          "Conflict checking",
          "Urgency determination",
          "Initial fact gathering",
          "Consultation scheduling",
        ],
      },
      {
        title: "Consultation Scheduling",
        description:
          "Streamlined consultation booking with attorney calendar integration",
        benefits: [
          "Attorney availability",
          "Calendar synchronization",
          "Client preparation",
          "Reminder notifications",
          "Rescheduling management",
          "Documentation collection",
        ],
      },
      {
        title: "Case Status Updates",
        description:
          "Automated client communication about case progress and milestones",
        benefits: [
          "Progress notifications",
          "Court date reminders",
          "Document requests",
          "Settlement updates",
          "Billing communications",
          "Next step explanations",
        ],
      },
      {
        title: "Document Collection & Management",
        description:
          "Secure automated collection of case documents and evidence",
        benefits: [
          "Document requests",
          "Secure uploads",
          "Completion tracking",
          "Reminder follow-ups",
          "Organization assistance",
          "Deadline management",
        ],
      },
      {
        title: "Billing & Payment Inquiries",
        description:
          "Handle billing questions, payment processing, and account inquiries",
        benefits: [
          "Invoice explanations",
          "Payment processing",
          "Account status",
          "Payment plans",
          "Trust account info",
          "Billing dispute handling",
        ],
      },
      {
        title: "Emergency Legal Triage",
        description:
          "24/7 triage of urgent legal matters with appropriate routing",
        benefits: [
          "Emergency assessment",
          "Urgency classification",
          "Attorney notification",
          "Resource coordination",
          "Crisis management",
          "Professional referrals",
        ],
      },
      {
        title: "Follow-up & Client Retention",
        description:
          "Automated follow-up campaigns and client satisfaction monitoring",
        benefits: [
          "Case conclusion follow-up",
          "Satisfaction surveys",
          "Referral requests",
          "Service reminders",
          "Annual check-ins",
          "Relationship maintenance",
        ],
      },
      {
        title: "Marketing Qualified Leads",
        description:
          "Convert website visitors and referrals into qualified legal prospects",
        benefits: [
          "Lead qualification",
          "Practice area matching",
          "Budget assessment",
          "Timeline evaluation",
          "Referral tracking",
          "Conversion optimization",
        ],
      },
    ],

    // Legal practice types served
    practiceTypes: [
      {
        type: "Personal Injury Law Firms",
        specialties: [
          "Auto Accidents",
          "Medical Malpractice",
          "Slip & Fall",
          "Workplace Injuries",
        ],
        commonNeeds: [
          "Case evaluation",
          "Medical record collection",
          "Insurance negotiations",
          "Settlement discussions",
          "Client communication",
        ],
      },
      {
        type: "Family Law Practices",
        specialties: [
          "Divorce",
          "Child Custody",
          "Adoption",
          "Domestic Relations",
        ],
        commonNeeds: [
          "Sensitive communications",
          "Court scheduling",
          "Document collection",
          "Mediation coordination",
          "Emergency situations",
        ],
      },
      {
        type: "Criminal Defense Attorneys",
        specialties: [
          "DUI Defense",
          "White Collar Crime",
          "Felony Defense",
          "Appeals",
        ],
        commonNeeds: [
          "Urgent intake",
          "Bail information",
          "Court appearances",
          "Evidence management",
          "Crisis response",
        ],
      },
      {
        type: "Corporate Law Firms",
        specialties: ["Business Formation", "Contracts", "M&A", "Securities"],
        commonNeeds: [
          "Client onboarding",
          "Document review",
          "Compliance tracking",
          "Deal coordination",
          "Regulatory updates",
        ],
      },
      {
        type: "Immigration Attorneys",
        specialties: [
          "Visa Applications",
          "Citizenship",
          "Deportation Defense",
          "Family Reunification",
        ],
        commonNeeds: [
          "Multi-language support",
          "Document collection",
          "Status updates",
          "Deadline tracking",
          "Government liaison",
        ],
      },
      {
        type: "Estate Planning Lawyers",
        specialties: ["Wills & Trusts", "Probate", "Elder Law", "Tax Planning"],
        commonNeeds: [
          "Family consultations",
          "Asset documentation",
          "Legacy planning",
          "Beneficiary communications",
          "Court procedures",
        ],
      },
    ],

    // Security & compliance features
    security: [
      {
        standard: "Attorney-Client Privilege",
        description:
          "All communications protected under attorney-client privilege with encrypted channels and secure data handling",
      },
      {
        standard: "Bar Association Compliance",
        description:
          "Meets state bar association requirements for client communication and data protection standards",
      },
      {
        standard: "End-to-End Encryption",
        description:
          "All client communications encrypted in transit and at rest with enterprise-grade security protocols",
      },
      {
        standard: "Audit Trail Logging",
        description:
          "Complete audit trails for all client interactions and document access for compliance and malpractice protection",
      },
      {
        standard: "Secure Document Handling",
        description:
          "Privileged document protection with secure transmission and storage meeting legal industry standards",
      },
      {
        standard: "Ethics Compliance",
        description:
          "Built-in safeguards for legal ethics rules including conflict checking and professional responsibility requirements",
      },
    ],

    // Integration capabilities
    integrations: [
      {
        category: "Legal Practice Management",
        platforms: [
          "Clio",
          "MyCase",
          "PracticePanther",
          "LawPay",
          "CosmoLex",
          "TimeSolv",
        ],
        capabilities: [
          "Case management",
          "Time tracking",
          "Billing integration",
          "Document management",
          "Calendar sync",
          "Client portal access",
        ],
      },
      {
        category: "Legal Research Platforms",
        platforms: [
          "Westlaw",
          "LexisNexis",
          "Bloomberg Law",
          "Fastcase",
          "Legal Research",
        ],
        capabilities: [
          "Research integration",
          "Citation checking",
          "Case law access",
          "Statute lookup",
          "Legal database sync",
          "Research automation",
        ],
      },
      {
        category: "Document Management",
        platforms: [
          "NetDocuments",
          "iManage",
          "SharePoint",
          "Dropbox Business",
          "Legal Files",
        ],
        capabilities: [
          "Document storage",
          "Version control",
          "Secure sharing",
          "Access permissions",
          "Collaboration tools",
          "Backup systems",
        ],
      },
      {
        category: "Court & Filing Systems",
        platforms: [
          "E-filing Systems",
          "PACER",
          "State Court Systems",
          "Federal Courts",
        ],
        capabilities: [
          "Filing automation",
          "Court calendars",
          "Deadline tracking",
          "Status monitoring",
          "Document retrieval",
          "Compliance checking",
        ],
      },
    ],
  };

  // Schema.org structured data for legal services industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/legal/",
        url: "https://agenxus.com/industries/legal/",
        name: "AI Automation for Legal Services | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "AI automation solutions for law firms and legal professionals. Voice agents, client intake automation, and secure case management to improve efficiency and client satisfaction.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/legal/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/legal/#breadcrumb",
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
            name: "Legal Services AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/legal/#service",
        name: "AI Automation for Legal Services",
        description:
          "AI voice agents, client intake automation, and secure case management for law firms and legal professionals",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Legal AI Automation",
        category: "Legal Technology",
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
          name: "Law Firms and Legal Professionals",
          audienceType: [
            "Law Firms",
            "Solo Practitioners",
            "Legal Clinics",
            "Corporate Legal Departments",
            "Public Interest Law",
            "Specialized Legal Services",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "AI Voice Agents for Law Firms",
              description: "24/7 client intake and consultation scheduling",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Legal Chatbots",
              description:
                "Website automation for legal inquiries and case evaluation",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Case Management Integration",
              description:
                "Seamless integration with legal practice management software",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Client Intake Automation",
              description: "Automated client screening and case evaluation",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "134",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/legal/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do AI voice agents help law firms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI voice agents provide 24/7 client intake, handle legal inquiries, schedule consultations, and ensure no potential client call goes unanswered. They can reduce intake time by 50% and increase consultations by 40% while maintaining attorney-client privilege.",
            },
          },
          {
            "@type": "Question",
            name: "Are AI solutions secure for attorney-client communications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all our legal AI solutions maintain attorney-client privilege with end-to-end encryption, secure data handling, and compliance with bar association requirements. All communications are protected and confidential.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI integrate with legal practice management software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate seamlessly with popular legal practice management platforms including Clio, MyCase, PracticePanther, and others. This ensures client data synchronization and case management workflow integration.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI client intake work for law firms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI automatically collects client information, assesses case merit, checks for conflicts, determines practice area fit, and schedules consultations. Only qualified, conflict-free cases are forwarded to attorneys, improving efficiency by 30%.",
            },
          },
          {
            "@type": "Question",
            name: "What types of law firms benefit from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All types of law firms benefit including personal injury, family law, criminal defense, corporate law, immigration, estate planning, and more. Solutions are customized for each practice area's specific needs and compliance requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What ROI can law firms expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Law firms typically see 50% faster client intake, 40% more consultations, 65% less admin work, and 30% higher conversion rates. Most firms see full ROI within 2-3 months of implementation.",
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
      <LegalPageClient
        legalData={legalData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
