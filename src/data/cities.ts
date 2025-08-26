// src/data/cities.ts - Complete Enhanced Cities Data Structure with Restaurants - Part 1

export interface City {
  slug: string;
  name: string;
  state: string;
  population: string;
  metro: string;
  description: string;
  businessContext: string;
  competitiveContext: string;
  neighborhoods: string[];
  industries: string[];
  industryTrends: string[];
  keywordFocus: {
    primary: string;
    secondary: string[];
    longTail: string[];
    highValue: string[];
    local: string[];
    voiceSearch: string[];
  };
  localStats: {
    businesses: string;
    avgResponse: string;
    marketGrowth: string;
    phoneVolume: string;
    aiAdoption?: string;
    techSpending?: string;
  };
  lat: number;
  lng: number;
}

export interface Solution {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
  features: string[];
  useCases: string[];
  industries: string[];
  color: string;
  stats: Record<string, string>;
  marketInsights?: string;
  competitiveAdvantage?: string;
}

// Enhanced solution data with proper stats including restaurants
export const solutions: Solution[] = [
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    shortName: "Voice Agents",
    description:
      "Human-like phone assistants that answer every call, qualify leads, and book appointments 24/7 - capturing the 76% of customers who prefer voice interactions over chat.",
    benefits: [
      "Never miss a call",
      "Qualify leads instantly",
      "Book appointments automatically",
      "Handle multiple languages",
      "Reduce staffing costs",
      "Scale without hiring",
    ],
    features: [
      "Natural conversation flow",
      "CRM integration",
      "Smart call routing",
      "Real-time transcription",
      "Custom voice training",
      "Analytics dashboard",
    ],
    useCases: [
      "After-hours coverage",
      "Overflow call handling",
      "Lead qualification",
      "Appointment scheduling",
      "Customer support",
      "Sales inquiries",
    ],
    industries: [
      "Healthcare",
      "Automotive",
      "Legal Services",
      "Home Services",
      "Real Estate",
      "Restaurants &amp; Food Service",
    ],
    color: "from-blue-500 to-cyan-500",
    stats: {
      efficiency: "85%",
      leadCapture: "+35% leads",
      response: "&lt; 2 seconds",
    },
    marketInsights:
      "Voice AI market growing at 34.8% CAGR, with 85% efficiency rates and 4.7/5 customer satisfaction scores.",
    competitiveAdvantage:
      "While competitors offer basic chatbots, our voice agents handle complex conversations with human-like emotional intelligence.",
  },
  {
    slug: "chatbots",
    name: "AI Chatbots",
    shortName: "Chatbots",
    description:
      "Intelligent website chatbots that engage visitors instantly, answer questions, and convert 45% more leads than traditional forms.",
    benefits: [
      "24/7 website coverage",
      "Instant lead capture",
      "FAQ automation",
      "Seamless handoffs",
      "Multi-language support",
      "Higher conversion rates",
    ],
    features: [
      "Natural language processing",
      "Multi-language support",
      "Lead scoring",
      "Analytics dashboard",
      "Custom branding",
      "Integration ready",
    ],
    useCases: [
      "Website visitor engagement",
      "Lead qualification",
      "Customer support",
      "Product recommendations",
      "Appointment booking",
      "FAQ automation",
    ],
    industries: [
      "E-commerce",
      "Real Estate",
      "Professional Services",
      "Healthcare",
      "SaaS",
      "Restaurants &amp; Food Service",
    ],
    color: "from-purple-500 to-pink-500",
    stats: {
      conversion: "45%",
      engagement: "78%",
      response: "Instant",
    },
    marketInsights:
      "78% engagement rates with instant response times, converting 25% of website visitors into qualified leads.",
    competitiveAdvantage:
      "Advanced NLP understands context and intent, providing personalized responses that feel human, not robotic.",
  },
  {
    slug: "video-agents",
    name: "AI Video Agents",
    shortName: "Video Agents",
    description:
      "AI-powered video assistants delivering personalized messages with 4x higher engagement than text-based communications.",
    benefits: [
      "Personalized video messages",
      "Scalable demonstrations",
      "Interactive onboarding",
      "Measurable engagement",
      "Cost-effective scaling",
      "Brand consistency",
    ],
    features: [
      "Custom avatar creation",
      "Dynamic content generation",
      "Engagement analytics",
      "Multi-language videos",
      "Brand customization",
      "API integration",
    ],
    useCases: [
      "Customer onboarding",
      "Product demonstrations",
      "Training videos",
      "Marketing campaigns",
      "Sales presentations",
      "Support tutorials",
    ],
    industries: [
      "Technology",
      "Education",
      "Healthcare",
      "Financial Services",
      "SaaS",
      "Restaurants &amp; Food Service",
    ],
    color: "from-green-500 to-emerald-500",
    stats: {
      completion: "68%",
      retention: "85%",
      engagement: "4x higher",
    },
    marketInsights:
      "68% completion rates and 85% retention, revolutionizing customer onboarding and product demonstrations.",
    competitiveAdvantage:
      "Custom avatars and dynamic content generation create scalable, personalized video experiences impossible with human resources.",
  },
  {
    slug: "automation",
    name: "Process Automation",
    shortName: "Automation",
    description:
      "End-to-end workflow automation connecting your tools, eliminating 15+ hours of manual work weekly with 99.8% accuracy.",
    benefits: [
      "Eliminate manual work",
      "Connect existing tools",
      "Scale without hiring",
      "Reduce human error",
      "Improve efficiency",
      "Real-time monitoring",
    ],
    features: [
      "Workflow builder",
      "API integrations",
      "Trigger-based actions",
      "Performance monitoring",
      "Custom workflows",
      "Error handling",
    ],
    useCases: [
      "Data synchronization",
      "Appointment reminders",
      "Follow-up sequences",
      "Report generation",
      "Lead nurturing",
      "Customer onboarding",
    ],
    industries: [
      "All Industries",
      "Multi-location businesses",
      "Service providers",
      "E-commerce",
      "Restaurants &amp; Food Service",
    ],
    color: "from-orange-500 to-red-500",
    stats: {
      timeSaved: "15+ hours/week",
      accuracy: "99.8%",
      roi: "340%",
    },
    marketInsights:
      "340% average ROI with businesses saving $15,000+ monthly through intelligent automation of routine tasks.",
    competitiveAdvantage:
      "Unlike simple automation tools, our AI learns and adapts to your business processes, handling exceptions intelligently.",
  },
];

// Complete cities data with restaurants included in industries
export const cities: City[] = [
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    population: "2.7M",
    metro: "Chicagoland",
    description:
      "The Windy City is home to thousands of businesses across automotive, healthcare, professional services, restaurants, and fast-growing startups that need AI automation to stay competitive in America&apos;s third-largest metropolitan market.",
    businessContext:
      "Chicago&apos;s competitive business environment spans from River North startups to established Loop enterprises, all requiring instant customer response and efficient operations to thrive in this $800 billion metropolitan economy.",
    competitiveContext:
      "With 40+ AI companies and major tech investments from United Airlines, Morningstar, and JPMorgan Chase, Chicago businesses must adopt AI automation to compete with tech-forward enterprises already capturing market share.",
    neighborhoods: [
      "River North",
      "The Loop",
      "West Loop",
      "South Loop",
      "Lincoln Park",
      "Wicker Park",
      "Gold Coast",
      "Streeterville",
      "Old Town",
      "Millennium Park",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Automotive Dealerships",
      "Healthcare &amp; Medical",
      "Professional Services",
      "Real Estate",
      "Legal Services",
      "Financial Services",
      "Technology",
      "Home Services",
      "Manufacturing",
      "Logistics",
    ],
    industryTrends: [
      "Restaurant chains adopting AI for phone ordering and customer service automation",
      "Food service businesses implementing AI delivery coordination and reservation management",
      "Quick service restaurants using AI for menu upselling and order accuracy",
      "Legal firms adopting AI for document review (Relativity)",
      "Financial services implementing fraud detection AI",
      "Healthcare providers using AI for patient scheduling",
      "Real estate agencies deploying AI lead qualification",
    ],
    keywordFocus: {
      primary: "AI voice agents Chicago",
      secondary: [
        "Chicago AI automation",
        "AI chatbot Chicago",
        "conversational AI Chicago",
        "AI receptionist Chicago",
        "Chicago business automation",
      ],
      longTail: [
        "AI voice assistant Chicago businesses",
        "automated phone system Chicago",
        "AI customer service Chicago",
        "business process automation Chicago",
        "AI appointment scheduling Chicago",
        "Chicago AI call center",
        "restaurant AI Chicago",
        "AI phone ordering Chicago restaurants",
      ],
      highValue: [
        "AI voice agents Chicago",
        "Chicago AI customer service",
        "automated business solutions Chicago",
        "AI phone answering service Chicago",
        "Chicago conversational AI",
        "AI lead generation Chicago",
        "smart business automation Chicago",
        "AI-powered call handling Chicago",
        "restaurant automation Chicago",
        "AI ordering system Chicago",
      ],
      local: [
        "AI automation near me Chicago",
        "voice AI services Chicago IL",
        "Chicago area AI solutions",
        "Chicagoland business automation",
        "AI customer service downtown Chicago",
        "Loop AI services",
        "River North AI automation",
        "West Loop voice agents",
        "restaurant AI Loop Chicago",
        "AI phone system River North",
      ],
      voiceSearch: [
        "best AI voice agents in Chicago",
        "AI customer service near me",
        "automated phone system for Chicago business",
        "AI chatbot services Chicago Illinois",
        "voice AI solutions downtown Chicago",
        "business automation Chicago area",
        "restaurant AI phone system Chicago",
        "AI ordering system near me Chicago",
      ],
    },
    localStats: {
      businesses: "180,000+",
      avgResponse: "4.2 minutes",
      marketGrowth: "15%",
      phoneVolume: "2.3M daily",
      aiAdoption: "67% of businesses exploring AI",
      techSpending: "$24B annually",
    },
    lat: 41.8781,
    lng: -87.6298,
  },

  {
    slug: "naperville",
    name: "Naperville",
    state: "IL",
    population: "148K",
    metro: "Chicago Metro",
    description:
      "A thriving suburban business community where professional service firms, healthcare providers, restaurants, and home service businesses are rapidly adopting AI to enhance customer experience and operational efficiency.",
    businessContext:
      "Naperville&apos;s affluent, educated market demands premium customer service, making AI automation essential for maintaining competitive advantage in this high-expectation suburban business environment.",
    competitiveContext:
      "As a top-ranked suburb with high disposable income, Naperville businesses compete on service quality - AI automation ensures 24/7 availability and instant response times that affluent customers expect.",
    neighborhoods: [
      "Downtown Naperville",
      "North Naperville",
      "South Naperville",
      "West Naperville",
      "Hobson West",
      "White Eagle",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Healthcare &amp; Wellness",
      "Professional Services",
      "Home Services",
      "Legal Services",
      "Real Estate",
      "Financial Services",
      "Technology",
    ],
    industryTrends: [
      "Fine dining restaurants adopting AI for reservation management and customer preferences",
      "Quick service restaurants using AI for order accuracy and upselling",
      "Casual dining establishments implementing AI for waitlist management",
      "Healthcare practices adopting AI scheduling systems",
      "Professional services automating client intake",
      "Home service companies using AI for estimate requests",
      "Real estate firms implementing AI lead qualification",
    ],
    keywordFocus: {
      primary: "AI automation Naperville",
      secondary: [
        "Naperville AI voice agents",
        "AI chatbot Naperville",
        "business automation Naperville",
        "Naperville customer service AI",
      ],
      longTail: [
        "AI customer service Naperville businesses",
        "automated appointment scheduling Naperville",
        "AI receptionist Naperville",
        "Naperville business process automation",
        "restaurant AI Naperville",
        "AI phone system Naperville restaurants",
      ],
      highValue: [
        "AI voice agents Naperville IL",
        "Naperville business automation",
        "automated customer service Naperville",
        "AI scheduling Naperville",
        "voice AI solutions Naperville",
        "Naperville AI customer support",
        "restaurant automation Naperville",
        "AI ordering system Naperville",
      ],
      local: [
        "AI automation near me Naperville",
        "Naperville area AI services",
        "AI solutions downtown Naperville",
        "DuPage County AI automation",
        "AI customer service Naperville IL",
        "business automation west suburbs",
        "restaurant AI downtown Naperville",
      ],
      voiceSearch: [
        "best AI services in Naperville",
        "AI customer service near Naperville",
        "automated phone system Naperville business",
        "AI chatbot services Naperville Illinois",
        "restaurant AI system Naperville",
      ],
    },
    localStats: {
      businesses: "12,000+",
      avgResponse: "3.8 minutes",
      marketGrowth: "18%",
      phoneVolume: "145K daily",
      aiAdoption: "72% interested in AI solutions",
      techSpending: "$2.1B annually",
    },
    lat: 41.7508,
    lng: -88.1535,
  },

  {
    slug: "schaumburg",
    name: "Schaumburg",
    state: "IL",
    population: "74K",
    metro: "Chicago Metro",
    description:
      "Major corporate hub in northwest Chicago suburbs with diverse technology companies, manufacturers, restaurants, and professional services embracing AI automation for competitive advantage.",
    businessContext:
      "Schaumburg&apos;s concentration of Fortune 500 headquarters and technology firms creates a sophisticated business environment where AI adoption is accelerating across all sectors.",
    competitiveContext:
      "Home to major corporations like Motorola Solutions and Zurich Insurance, Schaumburg businesses compete in enterprise markets where AI automation capabilities are becoming table stakes.",
    neighborhoods: [
      "Woodfield",
      "Town Square",
      "Prairie Walk",
      "Weathersfield",
      "Cambridge Lakes",
      "Hoffman Estates Border",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Technology",
      "Healthcare",
      "Professional Services",
      "Manufacturing",
      "Corporate Services",
      "Retail",
      "Insurance",
      "Telecommunications",
    ],
    industryTrends: [
      "Corporate dining facilities implementing AI for employee ordering and dietary tracking",
      "Restaurant chains using AI for multi-location order coordination",
      "Food service businesses adopting AI for inventory management and ordering",
      "Technology companies integrating AI into products",
      "Manufacturing firms using AI for supply chain optimization",
      "Corporate services adopting AI-powered customer support",
      "Healthcare systems implementing AI patient engagement",
    ],
    keywordFocus: {
      primary: "AI solutions Schaumburg",
      secondary: [
        "Schaumburg AI automation",
        "AI voice agents Schaumburg",
        "business automation Schaumburg",
        "Schaumburg conversational AI",
      ],
      longTail: [
        "AI customer service Schaumburg",
        "automated systems Schaumburg businesses",
        "AI technology solutions Schaumburg",
        "Schaumburg AI implementation",
        "restaurant AI Schaumburg",
        "corporate dining AI Schaumburg",
      ],
      highValue: [
        "AI automation Schaumburg IL",
        "Schaumburg AI customer service",
        "enterprise AI solutions Schaumburg",
        "AI voice technology Schaumburg",
        "business process automation Schaumburg",
        "AI integration services Schaumburg",
        "restaurant automation Schaumburg",
        "corporate AI solutions Schaumburg",
      ],
      local: [
        "AI automation near Schaumburg",
        "northwest suburbs AI services",
        "Schaumburg area business automation",
        "Cook County AI solutions",
        "AI customer service Schaumburg IL",
        "Woodfield area AI services",
        "restaurant AI Woodfield",
      ],
      voiceSearch: [
        "best AI automation in Schaumburg",
        "AI services near Schaumburg",
        "business automation Schaumburg Illinois",
        "AI technology companies Schaumburg",
        "restaurant AI system Schaumburg",
      ],
    },
    localStats: {
      businesses: "8,500+",
      avgResponse: "3.5 minutes",
      marketGrowth: "22%",
      phoneVolume: "95K daily",
      aiAdoption: "78% actively evaluating AI",
      techSpending: "$1.8B annually",
    },
    lat: 42.0334,
    lng: -88.0834,
  },
  {
    slug: "aurora",
    name: "Aurora",
    state: "IL",
    population: "200K",
    metro: "Chicago Metro",
    description:
      "Illinois&apos; second-largest city with a diverse business landscape spanning manufacturing, healthcare, transportation, restaurants, and emerging technology sectors seeking AI automation for growth.",
    businessContext:
      "Aurora&apos;s strategic location and diverse economy create opportunities for businesses to leverage AI automation to scale efficiently while maintaining personalized customer relationships in competitive markets.",
    competitiveContext:
      "As a major suburban center competing with Chicago and Milwaukee markets, Aurora businesses need AI automation to deliver enterprise-level customer service at competitive price points.",
    neighborhoods: [
      "Downtown Aurora",
      "Far East Side",
      "West Side",
      "Montgomery Border",
      "Naperville Border",
      "Sugar Grove Area",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Transportation",
      "Home Services",
      "Technology",
      "Logistics",
      "Construction",
    ],
    industryTrends: [
      "Family restaurants implementing AI for reservation management and special event coordination",
      "Pizza delivery chains using AI for order tracking and customer communication",
      "Ethnic restaurants adopting AI with multi-language support for diverse customer base",
      "Manufacturing companies adopting AI for quality control",
      "Healthcare facilities using AI for patient communications",
      "Transportation firms implementing AI dispatch systems",
      "Professional services automating client onboarding",
    ],
    keywordFocus: {
      primary: "AI automation Aurora IL",
      secondary: [
        "Aurora AI voice agents",
        "AI chatbot Aurora Illinois",
        "business automation Aurora",
        "Aurora customer service AI",
      ],
      longTail: [
        "Aurora Illinois AI customer service",
        "automated phone system Aurora",
        "AI business solutions Aurora",
        "Aurora AI implementation services",
        "restaurant AI Aurora Illinois",
        "AI phone ordering Aurora restaurants",
      ],
      highValue: [
        "AI voice agents Aurora Illinois",
        "Aurora business automation solutions",
        "automated customer service Aurora IL",
        "AI technology Aurora",
        "business process automation Aurora",
        "AI customer support Aurora",
        "restaurant automation Aurora",
        "AI ordering system Aurora",
      ],
      local: [
        "AI automation near Aurora",
        "Fox Valley AI services",
        "Aurora area business automation",
        "Kane County AI solutions",
        "AI customer service Aurora Illinois",
        "west suburbs AI services",
        "restaurant AI downtown Aurora",
      ],
      voiceSearch: [
        "best AI automation in Aurora Illinois",
        "AI services near Aurora",
        "business automation Aurora IL",
        "AI customer service Aurora area",
        "restaurant AI system Aurora",
      ],
    },
    localStats: {
      businesses: "15,000+",
      avgResponse: "4.1 minutes",
      marketGrowth: "16%",
      phoneVolume: "180K daily",
      aiAdoption: "63% considering AI adoption",
      techSpending: "$1.4B annually",
    },
    lat: 41.7606,
    lng: -88.3201,
  },

  {
    slug: "rockford",
    name: "Rockford",
    state: "IL",
    population: "147K",
    metro: "Northern Illinois",
    description:
      "Major industrial and business center in northern Illinois with strong manufacturing, healthcare, restaurants, and professional service sectors embracing AI technology for operational efficiency and competitive advantage.",
    businessContext:
      "Rockford&apos;s industrial heritage combined with modern service businesses creates unique opportunities for AI automation to improve manufacturing processes, customer engagement, and operational efficiency.",
    competitiveContext:
      "Competing with Chicago and Milwaukee markets, Rockford businesses leverage AI automation to deliver superior customer service and operational efficiency while maintaining competitive pricing.",
    neighborhoods: [
      "Downtown Rockford",
      "East State",
      "Loves Park",
      "Cherry Valley",
      "Machesney Park",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Agriculture",
      "Transportation",
      "Home Services",
      "Aerospace",
    ],
    industryTrends: [
      "Local restaurants using AI for community event coordination and catering management",
      "Sports bar chains implementing AI for game day reservations and crowd management",
      "Food trucks adopting AI for location-based ordering and customer notifications",
      "Manufacturing firms using AI for predictive maintenance",
      "Healthcare systems adopting AI patient scheduling",
      "Agricultural businesses implementing AI logistics",
      "Aerospace companies integrating AI quality systems",
    ],
    keywordFocus: {
      primary: "AI voice agents Rockford",
      secondary: [
        "Rockford business automation",
        "AI customer service Rockford",
        "automated systems Rockford",
        "Rockford AI solutions",
      ],
      longTail: [
        "Rockford Illinois AI solutions",
        "business process automation Rockford",
        "AI receptionist Rockford businesses",
        "automated customer service Rockford",
        "restaurant AI Rockford Illinois",
        "AI phone system Rockford restaurants",
      ],
      highValue: [
        "AI automation Rockford Illinois",
        "Rockford AI customer service",
        "business automation Rockford IL",
        "AI voice technology Rockford",
        "manufacturing AI solutions Rockford",
        "healthcare AI Rockford",
        "restaurant automation Rockford",
        "AI ordering system Rockford",
      ],
      local: [
        "AI automation near Rockford",
        "northern Illinois AI services",
        "Rockford area business automation",
        "Winnebago County AI solutions",
        "AI customer service Rockford IL",
        "stateline AI services",
        "restaurant AI downtown Rockford",
      ],
      voiceSearch: [
        "best AI automation in Rockford",
        "AI services near Rockford Illinois",
        "business automation northern Illinois",
        "AI manufacturing Rockford",
        "restaurant AI system Rockford",
      ],
    },
    localStats: {
      businesses: "11,000+",
      avgResponse: "4.0 minutes",
      marketGrowth: "16%",
      phoneVolume: "125K daily",
      aiAdoption: "58% exploring AI solutions",
      techSpending: "$890M annually",
    },
    lat: 42.2711,
    lng: -89.094,
  },

  {
    slug: "peoria",
    name: "Peoria",
    state: "IL",
    population: "113K",
    metro: "Central Illinois",
    description:
      "Central Illinois business hub with diverse economic base including manufacturing, healthcare, education, restaurants, and professional services adopting AI to enhance operations and customer engagement.",
    businessContext:
      "Peoria&apos;s strategic central location and diverse business community create ideal conditions for AI automation adoption across multiple industries, from Caterpillar manufacturing to healthcare systems and local restaurants.",
    competitiveContext:
      "As central Illinois&apos; primary business center, Peoria companies use AI automation to compete effectively with larger metropolitan markets while serving diverse regional customer bases.",
    neighborhoods: [
      "Downtown Peoria",
      "West Peoria",
      "East Peoria",
      "North Peoria",
      "Dunlap",
    ],
    industries: [
      "Restaurants &amp; Food Service",
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Agriculture",
      "Technology",
      "Education",
      "Financial Services",
    ],
    industryTrends: [
      "Farm-to-table restaurants using AI for seasonal menu planning and supplier coordination",
      "University area restaurants implementing AI for student ordering patterns and dietary preferences",
      "Riverfront dining establishments adopting AI for event planning and tourist coordination",
      "Manufacturing giants like Caterpillar exploring AI applications",
      "Healthcare systems implementing AI patient communications",
      "Educational institutions adopting AI student services",
      "Agricultural businesses using AI for logistics optimization",
    ],
    keywordFocus: {
      primary: "AI automation Peoria",
      secondary: [
        "Peoria AI voice agents",
        "business automation Peoria",
        "AI chatbot Peoria",
        "Peoria customer service AI",
      ],
      longTail: [
        "Peoria Illinois AI customer service",
        "automated business solutions Peoria",
        "AI receptionist Peoria businesses",
        "Peoria AI implementation",
        "restaurant AI Peoria Illinois",
        "AI phone system Peoria restaurants",
      ],
      highValue: [
        "AI automation Peoria Illinois",
        "Peoria AI customer service",
        "business process automation Peoria",
        "AI technology Peoria IL",
        "manufacturing AI Peoria",
        "healthcare AI solutions Peoria",
        "restaurant automation Peoria",
        "AI ordering system Peoria",
      ],
      local: [
        "AI automation near Peoria",
        "central Illinois AI services",
        "Peoria area business automation",
        "Peoria County AI solutions",
        "AI customer service Peoria Illinois",
        "tri-county AI services",
        "restaurant AI downtown Peoria",
      ],
      voiceSearch: [
        "best AI automation in Peoria",
        "AI services near Peoria Illinois",
        "business automation central Illinois",
        "AI manufacturing Peoria",
        "restaurant AI system Peoria",
      ],
    },
    localStats: {
      businesses: "9,500+",
      avgResponse: "3.9 minutes",
      marketGrowth: "14%",
      phoneVolume: "105K daily",
      aiAdoption: "61% interested in AI adoption",
      techSpending: "$745M annually",
    },
    lat: 40.6936,
    lng: -89.589,
  },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === solution.slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

export function getCitiesByState(state: string): City[] {
  return cities.filter((city) => city.state === state);
}

// Generate all city + solution combinations for sitemap
export function getAllCitySolutionCombinations(): Array<{
  city: string;
  solution: string;
}> {
  const combinations: Array<{ city: string; solution: string }> = [];

  cities.forEach((city) => {
    solutions.forEach((solution) => {
      combinations.push({
        city: city.slug,
        solution: solution.slug,
      });
    });
  });

  return combinations;
}

export default { cities, solutions, getCityBySlug, getSolutionBySlug };
