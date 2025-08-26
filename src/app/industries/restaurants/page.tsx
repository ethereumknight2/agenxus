import { Metadata } from "next";
import RestaurantsPageClient from "./RestaurantsPageClient";
import { cities, solutions } from "@/data/cities";

// Generate metadata for restaurants industry page
export async function generateMetadata(): Promise<Metadata> {
  const title =
    "AI Automation for Restaurants & Food Service | Phone Ordering, Reservations & Customer Service | Agenxus";
  const description =
    "Transform your restaurant with AI phone ordering, reservation management, and customer service automation. Increase orders by 40%, reduce missed calls by 90%, and improve customer satisfaction with AI solutions designed for restaurants.";

  return {
    title,
    description,
    keywords: [
      "restaurant AI automation",
      "AI phone ordering system",
      "restaurant chatbots",
      "AI reservation management",
      "food service automation",
      "restaurant voice agents",
      "AI customer service restaurants",
      "restaurant process automation",
      "AI menu ordering",
      "restaurant delivery coordination",
      "food ordering AI",
      "restaurant efficiency tools",
      "dining automation solutions",
      "restaurant AI integration",
      "food service AI technology",
      "restaurant operations AI",
      "quick service restaurant AI",
      "casual dining automation",
      "fine dining AI solutions",
      "pizza delivery AI",
      "restaurant POS integration",
      "table reservation automation",
      "restaurant AI receptionist",
      "food service voice AI",
      "restaurant upselling AI",
    ].join(", "),
    openGraph: {
      title,
      description,
      url: "https://agenxus.com/industries/restaurants",
      siteName: "Agenxus",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://agenxus.com/images/restaurant-ai-automation.jpg",
          width: 1200,
          height: 630,
          alt: "AI Automation for Restaurants & Food Service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@agenxus",
      site: "@agenxus",
      images: ["https://agenxus.com/images/restaurant-ai-automation.jpg"],
    },
    alternates: {
      canonical: "https://agenxus.com/industries/restaurants",
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
export default function RestaurantsPage() {
  // Restaurant industry-specific data
  const restaurantData = {
    industry: "Restaurants & Food Service",
    title: "AI Automation for Restaurants & Food Service",
    subtitle: "Streamline Operations and Increase Revenue with Restaurant AI",
    description:
      "Increase orders, improve customer service, and reduce staff workload with AI solutions designed specifically for restaurants and food service businesses.",

    // Restaurant-specific pain points and solutions
    challenges: [
      {
        problem: "Missed Phone Orders During Rush",
        impact:
          "Restaurants lose 30% of phone orders during peak dining hours due to busy staff",
        solution:
          "AI handles unlimited simultaneous calls, capturing every order even during rush periods",
      },
      {
        problem: "Complex Order Management",
        impact:
          "Staff struggle with modifications, dietary restrictions, and special requests, leading to errors",
        solution:
          "AI accurately processes complex orders with modifications, allergies, and special instructions",
      },
      {
        problem: "Reservation No-Shows",
        impact:
          "25% of reservations result in no-shows, causing lost revenue and empty tables",
        solution:
          "Automated confirmation and reminder system reduces no-shows by 60%",
      },
      {
        problem: "After-Hours Customer Inquiries",
        impact:
          "Customers can't make reservations or get information outside business hours",
        solution:
          "24/7 AI availability for reservations, hours, menu questions, and basic inquiries",
      },
      {
        problem: "Delivery Coordination Chaos",
        impact:
          "Coordinating delivery times and customer communication creates staff bottlenecks",
        solution:
          "Automated delivery tracking and customer notifications with real-time updates",
      },
      {
        problem: "Inconsistent Upselling",
        impact:
          "Staff inconsistently suggest add-ons, missing revenue opportunities worth 15-25% of order value",
        solution:
          "AI consistently suggests appetizers, drinks, and desserts, increasing average order value",
      },
    ],

    // Restaurant industry ROI statistics
    stats: [
      {
        metric: "+40%",
        label: "Order Volume Increase",
        description: "More phone orders captured",
      },
      {
        metric: "25%",
        label: "Higher Average Order",
        description: "Improved upselling results",
      },
      {
        metric: "90%",
        label: "Fewer Missed Calls",
        description: "Never miss an order again",
      },
      {
        metric: "24/7",
        label: "Order Availability",
        description: "Round-the-clock service",
      },
      {
        metric: "60%",
        label: "Fewer No-Shows",
        description: "Better reservation management",
      },
      {
        metric: "85%",
        label: "Customer Satisfaction",
        description: "Improved service quality",
      },
    ],

    // Restaurant-specific use cases
    useCases: [
      {
        title: "AI Phone Ordering System",
        description:
          "Handle complex food orders with modifications, dietary restrictions, and automatic upselling",
        benefits: [
          "Order accuracy improvement",
          "Automatic upselling suggestions",
          "Multi-language support",
          "Complex modification handling",
          "Dietary restriction management",
          "POS system integration",
        ],
      },
      {
        title: "Reservation Management",
        description:
          "Automated table booking, confirmations, and waitlist management",
        benefits: [
          "Real-time table availability",
          "Automatic confirmations",
          "Waitlist coordination",
          "Special occasion tracking",
          "Party size optimization",
          "No-show reduction",
        ],
      },
      {
        title: "Delivery Coordination",
        description:
          "Streamline delivery orders with driver coordination and customer updates",
        benefits: [
          "Order status tracking",
          "Delivery time estimates",
          "Customer notifications",
          "Driver coordination",
          "Address verification",
          "Feedback collection",
        ],
      },
      {
        title: "Customer Service Automation",
        description:
          "Handle FAQs, complaints, and general inquiries professionally",
        benefits: [
          "Menu information",
          "Hours and location details",
          "Dietary restriction guidance",
          "Allergy information",
          "Pricing inquiries",
          "Special event planning",
        ],
      },
      {
        title: "Catering & Large Orders",
        description: "Manage catering requests and large party coordination",
        benefits: [
          "Catering quote generation",
          "Large order processing",
          "Event coordination",
          "Deposit collection",
          "Menu customization",
          "Delivery logistics",
        ],
      },
      {
        title: "Loyalty Program Management",
        description: "Automate loyalty point tracking and reward redemption",
        benefits: [
          "Point balance inquiries",
          "Reward redemption",
          "Promotional campaigns",
          "Birthday specials",
          "Referral programs",
          "Customer retention",
        ],
      },
      {
        title: "Inventory & Menu Updates",
        description: "Real-time menu availability and seasonal item management",
        benefits: [
          "Item availability updates",
          "Seasonal menu changes",
          "Special promotions",
          "Price adjustments",
          "Out-of-stock notifications",
          "Menu recommendations",
        ],
      },
      {
        title: "Marketing & Promotions",
        description: "Automated promotional campaigns and customer engagement",
        benefits: [
          "Promotional announcements",
          "Special event marketing",
          "Customer segmentation",
          "Feedback collection",
          "Review generation",
          "Social media integration",
        ],
      },
    ],

    // Restaurant types served
    restaurantTypes: [
      {
        type: "Quick Service Restaurants",
        specialties: ["Fast Food", "Counter Service", "Takeout", "Food Trucks"],
        commonNeeds: [
          "Speed-optimized ordering",
          "Menu upselling automation",
          "Mobile order coordination",
          "Drive-thru integration",
          "Peak hour management",
        ],
      },
      {
        type: "Casual Dining Restaurants",
        specialties: [
          "Family Restaurants",
          "Cafes",
          "Bistros",
          "Neighborhood Spots",
        ],
        commonNeeds: [
          "Reservation management",
          "Waitlist coordination",
          "Special event booking",
          "Take-out coordination",
          "Customer preference tracking",
        ],
      },
      {
        type: "Fine Dining Establishments",
        specialties: [
          "Upscale Restaurants",
          "Steakhouses",
          "Wine Bars",
          "Chef-Driven",
        ],
        commonNeeds: [
          "Premium reservation experience",
          "Dietary preference tracking",
          "VIP customer recognition",
          "Special occasion planning",
          "Sommelier coordination",
        ],
      },
      {
        type: "Pizza & Delivery Focused",
        specialties: [
          "Pizzerias",
          "Delivery Chains",
          "Ghost Kitchens",
          "Delivery-Only",
        ],
        commonNeeds: [
          "Complex order customization",
          "Delivery zone management",
          "Order tracking systems",
          "Customer communication",
          "Loyalty program integration",
        ],
      },
      {
        type: "Bars & Entertainment",
        specialties: [
          "Sports Bars",
          "Pubs",
          "Breweries",
          "Entertainment Venues",
        ],
        commonNeeds: [
          "Event reservation handling",
          "Happy hour promotions",
          "Group booking coordination",
          "Entertainment scheduling",
          "Food and drink pairing",
        ],
      },
      {
        type: "Multi-Location Chains",
        specialties: [
          "Restaurant Groups",
          "Franchises",
          "Regional Chains",
          "Corporate Dining",
        ],
        commonNeeds: [
          "Centralized AI management",
          "Location-specific routing",
          "Brand consistency",
          "Multi-location analytics",
          "Scalable implementation",
        ],
      },
    ],

    // POS and system integrations
    integrations: [
      {
        category: "Point of Sale Systems",
        platforms: [
          "Toast",
          "Square",
          "Clover",
          "TouchBistro",
          "Lightspeed",
          "NCR Aloha",
        ],
        capabilities: [
          "Order processing",
          "Menu synchronization",
          "Payment processing",
          "Inventory updates",
          "Sales reporting",
          "Staff management",
        ],
      },
      {
        category: "Reservation Systems",
        platforms: [
          "OpenTable",
          "Resy",
          "Yelp Reservations",
          "TableAgent",
          "ResDiary",
          "Hostme",
        ],
        capabilities: [
          "Table management",
          "Availability sync",
          "Customer profiles",
          "Waitlist management",
          "Special events",
          "Analytics reporting",
        ],
      },
      {
        category: "Delivery Platforms",
        platforms: [
          "DoorDash",
          "Uber Eats",
          "Grubhub",
          "Postmates",
          "ChowNow",
          "Slice",
        ],
        capabilities: [
          "Order aggregation",
          "Menu management",
          "Delivery tracking",
          "Customer communication",
          "Commission tracking",
          "Performance analytics",
        ],
      },
      {
        category: "Customer Management",
        platforms: [
          "Mailchimp",
          "Constant Contact",
          "ReviewTrackers",
          "BirdEye",
          "Podium",
          "GloriaFood",
        ],
        capabilities: [
          "Customer database",
          "Email marketing",
          "Review management",
          "Loyalty programs",
          "Feedback collection",
          "Social media integration",
        ],
      },
    ],
  };

  // Schema.org structured data for restaurant industry
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://agenxus.com/industries/restaurants/",
        url: "https://agenxus.com/industries/restaurants/",
        name: "AI Automation for Restaurants & Food Service | Agenxus",
        isPartOf: {
          "@id": "https://agenxus.com/#website",
        },
        description:
          "AI automation solutions for restaurants and food service businesses. Phone ordering, reservation management, and customer service automation to increase orders and improve efficiency.",
        breadcrumb: {
          "@id": "https://agenxus.com/industries/restaurants/#breadcrumb",
        },
        inLanguage: "en-US",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://agenxus.com/industries/restaurants/#breadcrumb",
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
            name: "Restaurant AI Solutions",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://agenxus.com/industries/restaurants/#service",
        name: "AI Automation for Restaurants & Food Service",
        description:
          "AI phone ordering, reservation management, and customer service automation for restaurants and food service businesses",
        provider: {
          "@type": "Organization",
          "@id": "https://agenxus.com/#organization",
          name: "Agenxus",
          telephone: "+18722778841",
          email: "contact@agenxus.com",
          url: "https://agenxus.com",
        },
        serviceType: "Restaurant AI Automation",
        category: "Restaurant Technology",
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
          name: "Restaurant Owners & Food Service Operators",
          audienceType: [
            "Restaurants",
            "Quick Service Restaurants",
            "Casual Dining",
            "Fine Dining",
            "Pizza Restaurants",
            "Food Service Companies",
            "Restaurant Chains",
            "Independent Restaurants",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Restaurant AI Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              name: "AI Phone Ordering System",
              description:
                "Automated phone order taking with upselling and POS integration",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Reservation Management AI",
              description: "Automated table booking and confirmation system",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Restaurant Chatbots",
              description:
                "Website automation for menu inquiries and customer service",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Delivery Coordination AI",
              description:
                "Order tracking and customer communication automation",
              price: "Custom pricing",
              priceCurrency: "USD",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "247",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenxus.com/industries/restaurants/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do AI phone ordering systems help restaurants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI phone ordering systems handle unlimited simultaneous calls, process complex orders with modifications, automatically upsell items, and integrate directly with POS systems. Restaurants typically see 40% more orders and 25% higher average order values.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI handle complex restaurant orders with modifications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI can handle substitutions, allergies, cooking preferences, special instructions, and complex multi-item orders with 99% accuracy. It's trained specifically on restaurant operations and menu management.",
            },
          },
          {
            "@type": "Question",
            name: "Does restaurant AI integrate with existing POS systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate with major restaurant POS systems including Toast, Square, Clover, TouchBistro, Lightspeed, and NCR Aloha. Orders flow directly into your existing workflow without disruption.",
            },
          },
          {
            "@type": "Question",
            name: "What types of restaurants benefit from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All restaurant types benefit including quick service, casual dining, fine dining, pizza delivery, bars, and multi-location chains. Solutions are customized for each restaurant type's specific operational needs.",
            },
          },
          {
            "@type": "Question",
            name: "What ROI can restaurants expect from AI automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Restaurants typically see 40% more orders, 25% higher average order value, 90% fewer missed calls, and 60% fewer no-shows. Most restaurants see full ROI within 2-3 months of implementation.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI reservation management work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI manages table availability in real-time, books reservations, sends confirmations and reminders, handles waitlists, and tracks special occasions. It integrates with OpenTable, Resy, and other reservation platforms.",
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
      <RestaurantsPageClient
        restaurantData={restaurantData}
        cities={cities}
        solutions={solutions}
      />
    </>
  );
}
