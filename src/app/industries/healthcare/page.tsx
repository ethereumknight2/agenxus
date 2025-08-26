import { Metadata } from "next";
import HealthcarePageClient from "./HealthcarePageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for healthcare industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Healthcare Industry | Voice Agents, Chatbots & Process Automation | Agenxus";
  const description =
    "Transform your healthcare practice with AI voice agents, chatbots, and automation. Reduce administrative burden, improve patient satisfaction, and increase appointment bookings by 35%. HIPAA-compliant solutions for medical practices, clinics, and healthcare systems.";

  return {
    title,
    description,
    keywords: [
      "AI for healthcare",
      "healthcare automation",
      "AI voice agents healthcare",
      "healthcare chatbots",
      "medical practice automation",
      "healthcare AI solutions",
      "HIPAA compliant AI",
      "medical office automation",
      "healthcare customer service AI",
      "patient scheduling automation",
      "healthcare process automation",
      "AI receptionist medical office",
      "healthcare appointment booking",
      "medical practice efficiency",
      "healthcare business automation",
      "AI for medical practices",
      "healthcare workflow automation",
      "medical office AI assistant",
      "prior authorization automation",
      "medical claims processing AI",
      "healthcare referral management",
      "insurance verification automation",
      "medical records automation",
      "patient portal AI",
      "healthcare administrative automation",
      "medical billing automation",
      "prescription refill automation",
      "patient triage AI",
      "healthcare compliance automation",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/healthcare",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/healthcare-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Healthcare - HIPAA Compliant Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/healthcare-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/healthcare",
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
export default function HealthcarePage() {
  // Healthcare-specific data
  const healthcareData = {
    industry: "Healthcare",
    title: "AI Automation for Healthcare Industry",
    subtitle: "Transform Patient Care with Intelligent Automation",
    description:
      "Reduce administrative burden, improve patient satisfaction, and increase appointment bookings with HIPAA-compliant AI solutions designed specifically for healthcare practices.",

    // Healthcare-specific pain points and solutions
    challenges: [
      {
        problem: "Missed Calls & Lost Patients",
        impact:
          "Average medical practice loses 12% of potential patients to unanswered calls",
        solution:
          "24/7 AI voice agents ensure every patient call is answered immediately",
      },
      {
        problem: "Administrative Overwhelm",
        impact:
          "Healthcare staff spend 16+ hours weekly on appointment scheduling alone",
        solution:
          "Automated scheduling reduces admin work by 80% while improving accuracy",
      },
      {
        problem: "No-Show Appointments",
        impact: "Healthcare practices lose $200-300 per missed appointment",
        solution:
          "Intelligent reminders and rescheduling reduce no-shows by 45%",
      },
      {
        problem: "Patient Communication Gaps",
        impact:
          "Poor communication leads to 89% of patient dissatisfaction cases",
        solution:
          "AI ensures consistent, professional patient interactions 24/7",
      },
      {
        problem: "Prior Authorization Delays",
        impact:
          "Prior auth delays cost practices $11,000+ per provider annually",
        solution:
          "Automated prior auth submissions and tracking reduce approval times by 75%",
      },
      {
        problem: "Claims Processing Errors",
        impact: "Clean claim rate averages only 75%, causing payment delays",
        solution:
          "AI-powered claims processing achieves 95% first-pass acceptance rate",
      },
    ],

    // Healthcare ROI statistics
    stats: [
      {
        metric: "35%",
        label: "Increase in Appointment Bookings",
        description: "More patients scheduled through automated systems",
      },
      {
        metric: "60%",
        label: "Reduction in No-Shows",
        description: "Intelligent reminders and confirmations",
      },
      {
        metric: "24/7",
        label: "Patient Support Coverage",
        description: "Never miss a call, even after hours",
      },
      {
        metric: "45%",
        label: "Less Administrative Time",
        description: "Staff focus on patient care, not paperwork",
      },
      {
        metric: "75%",
        label: "Faster Prior Authorizations",
        description: "Automated submission and tracking",
      },
      {
        metric: "95%",
        label: "Claims First-Pass Rate",
        description: "Clean claims processing automation",
      },
    ],

    // Healthcare-specific use cases
    useCases: [
      {
        title: "Appointment Scheduling & Management",
        description:
          "Comprehensive automated booking system with intelligent scheduling optimization",
        benefits: [
          "24/7 availability",
          "Insurance verification",
          "Calendar integration",
          "Automated reminders",
          "No-show reduction",
          "Waitlist management",
        ],
      },
      {
        title: "Patient Triage & Assessment",
        description:
          "AI-powered symptom assessment and care level determination",
        benefits: [
          "Symptom assessment",
          "Urgency prioritization",
          "Provider matching",
          "Medical history collection",
          "Protocol compliance",
          "Emergency routing",
        ],
      },
      {
        title: "Prior Authorization Automation",
        description:
          "Streamlined prior auth requests and insurance approval tracking",
        benefits: [
          "Auto-submit requests",
          "Real-time status tracking",
          "Appeal management",
          "Insurance integration",
          "Compliance documentation",
          "Approval notifications",
        ],
      },
      {
        title: "Claims Processing & Management",
        description:
          "Intelligent claims submission with error detection and correction",
        benefits: [
          "Clean claim validation",
          "Auto-correction",
          "Submission tracking",
          "Rejection handling",
          "Resubmission automation",
          "Payment reconciliation",
        ],
      },
      {
        title: "Referral Coordination",
        description:
          "Automated specialist referrals and appointment coordination",
        benefits: [
          "Specialist matching",
          "Availability checking",
          "Record transfer",
          "Appointment scheduling",
          "Follow-up tracking",
          "Patient notifications",
        ],
      },
      {
        title: "Insurance Verification",
        description:
          "Real-time eligibility verification and benefits breakdown",
        benefits: [
          "Eligibility checking",
          "Benefits verification",
          "Co-pay calculation",
          "Deductible tracking",
          "Coverage alerts",
          "Patient notifications",
        ],
      },
      {
        title: "Prescription Management",
        description: "Automated prescription refills and pharmacy coordination",
        benefits: [
          "Refill automation",
          "Pharmacy coordination",
          "Dosage verification",
          "Doctor approval workflow",
          "Patient reminders",
          "Insurance coverage",
        ],
      },
      {
        title: "Medical Records Management",
        description:
          "Automated medical record requests and secure transfer coordination",
        benefits: [
          "Record requests",
          "Transfer coordination",
          "Digital conversion",
          "Compliance tracking",
          "Patient consent",
          "Secure transmission",
        ],
      },
      {
        title: "Patient Portal Support",
        description:
          "Automated assistance with patient portal navigation and support",
        benefits: [
          "Account setup",
          "Login assistance",
          "Feature guidance",
          "Document upload help",
          "Test result notifications",
          "Bill payment support",
        ],
      },
      {
        title: "Post-Care Follow-up",
        description:
          "Comprehensive automated patient check-ins and care coordination",
        benefits: [
          "Recovery monitoring",
          "Satisfaction surveys",
          "Complication detection",
          "Care coordination",
          "Medication adherence",
          "Next appointment scheduling",
        ],
      },
    ],

    // Healthcare compliance and security
    compliance: [
      {
        standard: "HIPAA Compliant",
        description:
          "Full compliance with healthcare privacy regulations and patient data protection including BAA agreements",
      },
      {
        standard: "SOC 2 Type II",
        description:
          "Enterprise-grade security controls and independent audit certifications for data handling",
      },
      {
        standard: "HITECH Compliant",
        description:
          "Advanced security measures for electronic health information with breach notification protocols",
      },
      {
        standard: "End-to-End Encryption",
        description:
          "All patient communications encrypted in transit and at rest with 256-bit AES encryption",
      },
      {
        standard: "FHIR Integration",
        description:
          "Seamless integration with EHR systems using HL7 FHIR standards for interoperability",
      },
      {
        standard: "Audit Trail Logging",
        description:
          "Complete audit trails for all patient data access and system interactions for compliance reporting",
      },
    ],

    // Practice types served
    practiceTypes: [
      {
        type: "Primary Care Practices",
        specialties: [
          "Family Medicine",
          "Internal Medicine",
          "Pediatrics",
          "Geriatric Medicine",
        ],
        commonNeeds: [
          "High call volume",
          "Appointment scheduling",
          "Patient triage",
          "Preventive care reminders",
          "Chronic care management",
        ],
      },
      {
        type: "Specialty Clinics",
        specialties: [
          "Cardiology",
          "Dermatology",
          "Orthopedics",
          "Gastroenterology",
          "Endocrinology",
          "Neurology",
        ],
        commonNeeds: [
          "Complex scheduling",
          "Insurance verification",
          "Referral management",
          "Prior authorizations",
          "Procedure coordination",
        ],
      },
      {
        type: "Dental Practices",
        specialties: [
          "General Dentistry",
          "Orthodontics",
          "Oral Surgery",
          "Periodontics",
          "Endodontics",
        ],
        commonNeeds: [
          "Appointment reminders",
          "Insurance verification",
          "Treatment coordination",
          "Follow-up care",
          "Payment processing",
        ],
      },
      {
        type: "Mental Health Practices",
        specialties: [
          "Psychiatry",
          "Psychology",
          "Counseling",
          "Therapy",
          "Addiction Treatment",
        ],
        commonNeeds: [
          "Crisis support",
          "Appointment scheduling",
          "Patient privacy",
          "Medication management",
          "Treatment compliance",
        ],
      },
      {
        type: "Urgent Care Centers",
        specialties: [
          "Walk-in Care",
          "Emergency Medicine",
          "Occupational Health",
          "Travel Medicine",
        ],
        commonNeeds: [
          "Triage automation",
          "Insurance verification",
          "Wait time management",
          "Discharge instructions",
          "Follow-up coordination",
        ],
      },
      {
        type: "Healthcare Systems",
        specialties: [
          "Multi-location",
          "Hospital Networks",
          "Integrated Health Systems",
          "ACO Organizations",
        ],
        commonNeeds: [
          "Centralized scheduling",
          "Department routing",
          "Enterprise integration",
          "Population health",
          "Quality reporting",
        ],
      },
      {
        type: "Surgical Centers",
        specialties: [
          "Outpatient Surgery",
          "ASC Management",
          "Pre/Post Op Care",
          "Anesthesia Coordination",
        ],
        commonNeeds: [
          "Surgical scheduling",
          "Pre-op instructions",
          "Insurance authorization",
          "Post-op follow-up",
          "Complications monitoring",
        ],
      },
      {
        type: "Rehabilitation Centers",
        specialties: [
          "Physical Therapy",
          "Occupational Therapy",
          "Speech Therapy",
          "Cardiac Rehab",
        ],
        commonNeeds: [
          "Treatment scheduling",
          "Progress tracking",
          "Insurance verification",
          "Compliance monitoring",
          "Outcome reporting",
        ],
      },
    ],

    // Administrative automation workflows
    adminWorkflows: [
      {
        title: "Revenue Cycle Management",
        description: "End-to-end automation of billing and revenue processes",
        processes: [
          "Patient registration",
          "Insurance verification",
          "Charge capture",
          "Claims submission",
          "Payment posting",
          "Denial management",
        ],
      },
      {
        title: "Quality Reporting",
        description:
          "Automated quality measure reporting and compliance tracking",
        processes: [
          "HEDIS reporting",
          "MIPS submissions",
          "Quality metrics",
          "Patient outcomes",
          "Performance dashboards",
          "Regulatory compliance",
        ],
      },
      {
        title: "Population Health Management",
        description: "Proactive patient outreach and care gap identification",
        processes: [
          "Care gap alerts",
          "Preventive reminders",
          "Chronic care management",
          "Risk stratification",
          "Outreach campaigns",
          "Health screenings",
        ],
      },
    ],
  };

  // Schema.org structured data for healthcare industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/healthcare/",
        url: "https://agenxus.com/industries/healthcare/",
        name: "AI Automation for Healthcare Industry | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "HIPAA-compliant AI automation solutions for healthcare practices. Voice agents, chatbots, and process automation to improve patient care and reduce administrative burden.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/healthcare/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/healthcare/#breadcrumb",
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
            name: "Healthcare AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/healthcare/#service",
        name: "AI Automation for Healthcare",
        description:
          "HIPAA-compliant AI voice agents, chatbots, and process automation for medical practices and healthcare systems",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1234 Main Street",
            addressLocality: "Chicago",
            addressRegion: "IL",
            postalCode: "60601",
            addressCountry: "US",
          },
        },
        serviceType: "Healthcare AI Automation",
        category: "Healthcare Technology",
        areaServed: [
          {
            "@type": "State",
            name: "Illinois",
          },
          {
            "@type": "City",
            name: "Chicago",
          },
          {
            "@type": "City",
            name: "Naperville",
          },
          {
            "@type": "City",
            name: "Schaumburg",
          },
        ],
        audience: {
          "@type": "BusinessAudience",
          name: "Healthcare Practices and Medical Facilities",
          audienceType: [
            "Medical Practices",
            "Dental Clinics",
            "Healthcare Systems",
            "Specialty Clinics",
            "Urgent Care Centers",
            "Surgical Centers",
            "Rehabilitation Centers",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Healthcare AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "AI Voice Agents for Healthcare",
              description:
                "24/7 patient communication and appointment scheduling",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Healthcare Chatbots",
              description:
                "Website automation for patient inquiries and triage",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Medical Practice Automation",
              description: "Workflow automation for administrative tasks",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Prior Authorization Automation",
              description:
                "Automated insurance prior auth requests and tracking",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Claims Processing Automation",
              description: "Intelligent claims submission and management",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/healthcare/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are your AI solutions HIPAA compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all our healthcare AI solutions are fully HIPAA compliant with end-to-end encryption, audit trails, and secure data handling to protect patient information. We provide Business Associate Agreements (BAA) and maintain SOC 2 Type II certification.",
            },
          },
          {
            "@type": "Question",
            name: "How do AI voice agents improve healthcare practices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI voice agents provide 24/7 patient support, automate appointment scheduling, reduce no-shows through intelligent reminders, and free up staff to focus on patient care instead of administrative tasks. They can increase appointment bookings by 35% and reduce no-shows by 60%.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI agents automate prior authorizations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI can automate prior authorization requests by submitting them directly to insurance companies, tracking approval status in real-time, and managing appeals. This reduces approval times by 75% and eliminates manual paperwork.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI improve medical claims processing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI analyzes claims before submission to ensure they meet payer requirements, reducing rejections. Our system achieves a 95% first-pass acceptance rate compared to the industry average of 75%, resulting in faster payments and reduced administrative costs.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI agents integrate with existing EHR systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI solutions integrate seamlessly with popular EHR systems like Epic, Cerner, Allscripts, and athenahealth using HL7 FHIR standards. This ensures smooth data flow and maintains existing workflows.",
            },
          },
          {
            "@type": "Question",
            name: "What types of healthcare practices benefit most from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All types of healthcare practices benefit, including primary care, specialty clinics, dental practices, mental health providers, urgent care centers, and healthcare systems. High-volume practices with complex scheduling and administrative needs see the greatest efficiency improvements.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can healthcare AI solutions be implemented?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most healthcare AI implementations are completed within 2-4 weeks, including system integration, HIPAA compliance setup, staff training, and testing. We provide dedicated healthcare implementation specialists to ensure a smooth transition.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of ROI can healthcare practices expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Healthcare practices typically see 35% increase in appointments, 60% reduction in no-shows, 45% less administrative time, and 75% faster prior authorizations. Most practices see full ROI within 3-6 months of implementation.",
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
          "Healthcare AI",
          "Medical Practice Automation",
          "HIPAA Compliance",
          "Prior Authorization Automation",
          "Claims Processing",
          "Patient Communication",
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
      <HealthcarePageClient
        healthcareData={healthcareData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
