// src/data/cities.ts - Enhanced Cities Data Structure with AI Search Optimization

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

// Enhanced solution data with AI Search Optimization
export const solutions: Solution[] = [
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization & Development",
    shortName: "AI Search Optimization",
    description:
      "Get cited by ChatGPT, Perplexity, and Google AI with optimized entities, schema, and extractable content. Plus lightning-fast React/Next.js sites that score 95+ on PageSpeed Insights.",
    benefits: [
      "Get cited by AI search engines",
      "Lightning-fast website performance",
      "Higher quality traffic from AI",
      "Future-proof search strategy",
      "Structured data optimization",
      "First-mover advantage",
    ],
    features: [
      "Entity mapping and optimization",
      "Extractable Q&A content blocks",
      "Schema.org structured data",
      "llms.txt optimization",
      "React/Next.js development",
      "Core Web Vitals optimization",
    ],
    useCases: [
      "Brand authority building",
      "Local business visibility",
      "Product positioning",
      "Thought leadership",
      "Website performance",
      "Zero-click optimization",
    ],
    industries: [
      "Professional Services",
      "Healthcare",
      "Technology",
      "Legal Services",
      "All Industries",
    ],
    color: "from-emerald-500 to-teal-500",
    stats: {
      aiCitations: "+250%",
      pageSpeed: "95+ PSI",
      visibility: "+180%",
    },
    marketInsights:
      "57% of SERPs now feature AI Overviews. AI search traffic shows 23% lower bounce rates and higher conversion rates.",
    competitiveAdvantage:
      "While competitors focus only on traditional SEO, we optimize for the future of search—both AI engines and traditional results.",
  },
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
      "Restaurants & Food Service",
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
      "Restaurants & Food Service",
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
      "Restaurants & Food Service",
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
      "Restaurants & Food Service",
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

// Complete cities data with AI Search Optimization keywords
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
      "Professional Services",
      "Technology",
      "Healthcare & Medical",
      "Legal Services",
      "Financial Services",
      "Real Estate",
      "Restaurants & Food Service",
      "Automotive Dealerships",
      "Home Services",
      "Manufacturing",
      "Logistics",
    ],
    industryTrends: [
      "Professional services firms adopting AI search optimization to get cited by ChatGPT and Perplexity for industry expertise",
      "Technology companies implementing AEO to position themselves as thought leaders in AI-generated answers",
      "Healthcare providers using AI search optimization for medical expertise visibility in AI engines",
      "Restaurant chains adopting AI for phone ordering and customer service automation",
      "Legal firms using AI for document review and client consultation automation",
      "Financial services implementing fraud detection AI and chatbot customer support",
      "Real estate agencies deploying AI lead qualification and property search automation",
    ],
    keywordFocus: {
      primary: "AI search optimization Chicago",
      secondary: [
        "Chicago AI automation",
        "AI voice agents Chicago",
        "answer engine optimization Chicago",
        "Chicago AEO services",
        "get cited by ChatGPT Chicago",
        "Chicago business automation",
      ],
      longTail: [
        "AI search optimization Chicago businesses",
        "get cited by Perplexity Chicago",
        "answer engine optimization Chicago companies",
        "Chicago AI website development",
        "AI search visibility Chicago",
        "ChatGPT optimization Chicago",
        "Google AI citation Chicago",
        "Chicago AI marketing services",
      ],
      highValue: [
        "AI search optimization Chicago IL",
        "Chicago answer engine optimization",
        "get cited by AI engines Chicago",
        "Chicago AEO consultant",
        "AI search visibility Chicago",
        "Chicago AI website optimization",
        "ChatGPT citation Chicago",
        "Perplexity optimization Chicago",
      ],
      local: [
        "AI search optimization near me Chicago",
        "AEO services Chicago IL",
        "Chicago area AI search optimization",
        "Chicagoland answer engine optimization",
        "AI search consultant downtown Chicago",
        "Loop AI search optimization",
        "River North AEO services",
        "West Loop AI optimization",
      ],
      voiceSearch: [
        "best AI search optimization in Chicago",
        "AI search optimization services near me",
        "answer engine optimization Chicago Illinois",
        "get cited by ChatGPT Chicago area",
        "AI search visibility services Chicago",
        "business AI search optimization Chicago",
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
      "Professional Services",
      "Healthcare & Wellness",
      "Technology",
      "Legal Services",
      "Financial Services",
      "Real Estate",
      "Restaurants & Food Service",
      "Home Services",
    ],
    industryTrends: [
      "Professional services implementing AI search optimization to become the cited authority in their specialty areas",
      "Healthcare practices using AEO to get referenced by AI engines for medical information and treatment options",
      "Technology consultants adopting answer engine optimization to position expertise in AI search results",
      "Fine dining restaurants adopting AI for reservation management and customer preferences",
      "Healthcare practices adopting AI scheduling systems and patient communication automation",
      "Professional services automating client intake and consultation booking",
      "Home service companies using AI for estimate requests and customer follow-up",
    ],
    keywordFocus: {
      primary: "AI search optimization Naperville",
      secondary: [
        "Naperville AI automation",
        "answer engine optimization Naperville",
        "AEO services Naperville",
        "get cited by AI Naperville",
        "Naperville AI website development",
      ],
      longTail: [
        "AI search optimization Naperville businesses",
        "answer engine optimization Naperville companies",
        "get cited by ChatGPT Naperville",
        "Naperville AI search visibility",
        "AEO consultant Naperville IL",
        "AI search optimization west suburbs",
      ],
      highValue: [
        "AI search optimization Naperville Illinois",
        "Naperville answer engine optimization",
        "get cited by Perplexity Naperville",
        "AEO services Naperville IL",
        "AI search visibility Naperville",
        "Naperville AI marketing services",
      ],
      local: [
        "AI search optimization near Naperville",
        "AEO services Naperville area",
        "DuPage County AI search optimization",
        "AI search consultant Naperville IL",
        "west suburbs answer engine optimization",
        "downtown Naperville AI services",
      ],
      voiceSearch: [
        "best AI search optimization in Naperville",
        "answer engine optimization services Naperville",
        "get cited by ChatGPT Naperville Illinois",
        "AI search visibility consultant Naperville",
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

  // Continue with other cities following the same pattern...
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
      "Technology",
      "Professional Services",
      "Healthcare",
      "Manufacturing",
      "Corporate Services",
      "Restaurants & Food Service",
      "Retail",
      "Insurance",
      "Telecommunications",
    ],
    industryTrends: [
      "Technology companies implementing AI search optimization to establish thought leadership in AI engine results",
      "Corporate services adopting answer engine optimization to get cited for business expertise",
      "Healthcare systems using AEO to become the referenced authority for medical information",
      "Corporate dining facilities implementing AI for employee ordering and dietary tracking",
      "Technology companies integrating AI into products and internal operations",
      "Manufacturing firms using AI for supply chain optimization and quality control",
      "Corporate services adopting AI-powered customer support and consultation booking",
    ],
    keywordFocus: {
      primary: "AI search optimization Schaumburg",
      secondary: [
        "Schaumburg AI automation",
        "answer engine optimization Schaumburg",
        "AEO services Schaumburg",
        "get cited by AI Schaumburg",
        "Schaumburg AI consulting",
      ],
      longTail: [
        "AI search optimization Schaumburg Illinois",
        "answer engine optimization Schaumburg companies",
        "get cited by ChatGPT Schaumburg",
        "Schaumburg AI search visibility",
        "AEO consultant Schaumburg IL",
      ],
      highValue: [
        "AI search optimization Schaumburg IL",
        "Schaumburg answer engine optimization",
        "enterprise AI search optimization Schaumburg",
        "get cited by Perplexity Schaumburg",
        "AEO services northwest suburbs",
      ],
      local: [
        "AI search optimization near Schaumburg",
        "northwest suburbs AEO services",
        "Cook County AI search optimization",
        "Woodfield area AI search services",
        "Schaumburg area answer engine optimization",
      ],
      voiceSearch: [
        "best AI search optimization in Schaumburg",
        "answer engine optimization Schaumburg Illinois",
        "enterprise AI search services Schaumburg",
        "get cited by AI engines Schaumburg",
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

  // Continue with remaining cities following the same pattern with AI Search Optimization integration...
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
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Transportation",
      "Technology",
      "Restaurants & Food Service",
      "Home Services",
      "Logistics",
      "Construction",
    ],
    industryTrends: [
      "Manufacturing companies adopting AI search optimization to get cited for industrial expertise and best practices",
      "Healthcare facilities using AEO to become the referenced source for medical information and patient care",
      "Professional services implementing answer engine optimization to establish thought leadership",
      "Transportation firms implementing AI dispatch systems and route optimization",
      "Healthcare facilities using AI for patient communications and appointment scheduling",
      "Professional services automating client onboarding and consultation management",
    ],
    keywordFocus: {
      primary: "AI search optimization Aurora IL",
      secondary: [
        "Aurora AI automation",
        "answer engine optimization Aurora",
        "AEO services Aurora Illinois",
        "get cited by AI Aurora",
        "Aurora AI consulting",
      ],
      longTail: [
        "AI search optimization Aurora Illinois businesses",
        "answer engine optimization Aurora companies",
        "get cited by ChatGPT Aurora",
        "Aurora AI search visibility services",
        "AEO consultant Aurora IL",
      ],
      highValue: [
        "AI search optimization Aurora Illinois",
        "Aurora answer engine optimization",
        "get cited by Perplexity Aurora",
        "AEO services Fox Valley",
        "AI search visibility Aurora",
      ],
      local: [
        "AI search optimization near Aurora",
        "Fox Valley AEO services",
        "Kane County AI search optimization",
        "Aurora area answer engine optimization",
        "west suburbs AI search services",
      ],
      voiceSearch: [
        "best AI search optimization in Aurora Illinois",
        "answer engine optimization Aurora IL",
        "get cited by AI engines Aurora",
        "AI search visibility services Aurora",
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
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Technology",
      "Agriculture",
      "Transportation",
      "Restaurants & Food Service",
      "Home Services",
      "Aerospace",
    ],
    industryTrends: [
      "Manufacturing companies implementing AI search optimization to get cited for industrial innovations and best practices",
      "Healthcare systems adopting AEO to become the referenced authority for medical information in AI search results",
      "Professional services using answer engine optimization to establish expertise in AI-generated responses",
      "Manufacturing firms using AI for predictive maintenance and quality control systems",
      "Healthcare systems adopting AI patient scheduling and communication automation",
      "Agricultural businesses implementing AI logistics and supply chain optimization",
    ],
    keywordFocus: {
      primary: "AI search optimization Rockford",
      secondary: [
        "Rockford AI automation",
        "answer engine optimization Rockford",
        "AEO services Rockford Illinois",
        "get cited by AI Rockford",
        "Rockford AI consulting",
      ],
      longTail: [
        "AI search optimization Rockford Illinois",
        "answer engine optimization Rockford companies",
        "get cited by ChatGPT Rockford",
        "manufacturing AI search optimization Rockford",
        "Rockford AI search visibility",
      ],
      highValue: [
        "AI search optimization Rockford IL",
        "Rockford answer engine optimization",
        "manufacturing AI optimization Rockford",
        "get cited by Perplexity Rockford",
        "AEO services northern Illinois",
      ],
      local: [
        "AI search optimization near Rockford",
        "northern Illinois AEO services",
        "Winnebago County AI search optimization",
        "Rockford area answer engine optimization",
        "stateline AI search services",
      ],
      voiceSearch: [
        "best AI search optimization in Rockford",
        "answer engine optimization northern Illinois",
        "manufacturing AI optimization Rockford",
        "get cited by AI engines Rockford",
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
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Education",
      "Technology",
      "Agriculture",
      "Restaurants & Food Service",
      "Financial Services",
    ],
    industryTrends: [
      "Manufacturing companies like Caterpillar exploring AI search optimization to get cited for industrial expertise",
      "Healthcare systems implementing AEO to become the referenced source for medical information and patient care",
      "Professional services adopting answer engine optimization to establish thought leadership in AI search results",
      "Educational institutions using AI for student services and administrative automation",
      "Healthcare systems implementing AI patient communications and scheduling optimization",
      "Agricultural businesses using AI for logistics optimization and supply chain management",
    ],
    keywordFocus: {
      primary: "AI search optimization Peoria",
      secondary: [
        "Peoria AI automation",
        "answer engine optimization Peoria",
        "AEO services Peoria Illinois",
        "get cited by AI Peoria",
        "Peoria AI consulting",
      ],
      longTail: [
        "AI search optimization Peoria Illinois",
        "answer engine optimization central Illinois",
        "get cited by ChatGPT Peoria",
        "manufacturing AI optimization Peoria",
        "Peoria AI search visibility",
      ],
      highValue: [
        "AI search optimization Peoria IL",
        "Peoria answer engine optimization",
        "manufacturing AI optimization Peoria",
        "get cited by Perplexity Peoria",
        "AEO services central Illinois",
      ],
      local: [
        "AI search optimization near Peoria",
        "central Illinois AEO services",
        "Peoria County AI search optimization",
        "tri-county answer engine optimization",
        "Peoria area AI search services",
      ],
      voiceSearch: [
        "best AI search optimization in Peoria",
        "answer engine optimization central Illinois",
        "manufacturing AI optimization Peoria",
        "get cited by AI engines Peoria",
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
  return solutions.find((solution) => solution.slug === slug);
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
