// src/data/solutions.ts - Enhanced Solution Data Structure

export interface Solution {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  useCases: Array<{
    title: string;
    description: string;
    industry: string;
  }>;
  industries: string[];
  color: string;
  stats: Record<string, string>;
  marketInsights: string;
  competitiveAdvantage: string;
  roi: {
    timeToValue: string;
    efficiency: string;
    costSavings: string;
  };
  technical: {
    integration: string;
    setup: string;
    maintenance: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  pricing: {
    model: string;
    startingPrice: string;
    enterprise: boolean;
  };
  cta: string;
}

export const solutions: Solution[] = [
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    shortName: "Voice Agents",
    tagline: "Human-like phone assistants that never miss a call",
    description:
      "AI phone agents that answer calls instantly, qualify leads, book appointments, and integrate with your CRM - capturing the 76% of customers who prefer voice over chat.",
    longDescription:
      "Transform your phone system with AI voice agents that provide human-like conversations, intelligent call routing, and seamless CRM integration. Handle unlimited calls simultaneously while maintaining personalized customer experiences that drive conversions.",
    benefits: [
      "Never miss a call, even during peak hours",
      "Qualify leads instantly with intelligent questioning",
      "Book appointments directly into your calendar",
      "Handle multiple languages and accents",
      "Reduce staffing costs by up to 70%",
      "Scale customer service without hiring",
      "Provide 24/7 availability for global customers",
      "Generate detailed call analytics and insights",
    ],
    features: [
      "Natural conversation flow with emotional intelligence",
      "Real-time CRM integration and data sync",
      "Smart call routing based on intent and priority",
      "Live call transcription and sentiment analysis",
      "Custom voice training for brand consistency",
      "Advanced analytics dashboard with ROI tracking",
      "Seamless human handoff when needed",
      "Multi-language support with native accents",
    ],
    useCases: [
      {
        title: "24/7 Lead Qualification",
        description:
          "Capture and qualify leads around the clock, even when your team is offline",
        industry: "Real Estate, Legal, Healthcare",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Book consultations, service calls, and meetings directly into staff calendars",
        industry: "Medical, Professional Services, Home Services",
      },
      {
        title: "Customer Support Triage",
        description:
          "Handle common inquiries and route complex issues to appropriate specialists",
        industry: "Technology, E-commerce, SaaS",
      },
      {
        title: "Sales Order Processing",
        description:
          "Process orders, handle product inquiries, and manage customer accounts",
        industry: "Retail, Manufacturing, Automotive",
      },
    ],
    industries: [
      "Healthcare & Medical",
      "Automotive Dealerships",
      "Legal Services",
      "Real Estate",
      "Home Services",
      "Professional Services",
      "Technology",
      "Financial Services",
    ],
    color: "from-blue-500 to-cyan-500",
    stats: {
      "Lead Capture": "+45%",
      "Call Answer Rate": "99.9%",
      "Response Time": "< 2 seconds",
      "Customer Satisfaction": "4.8/5",
      "Cost Reduction": "70%",
    },
    marketInsights:
      "Voice AI market growing at 34.8% CAGR, reaching $47.5B by 2034. 76% of consumers prefer voice interactions over text for complex inquiries, with 90% finding voice search easier than typing.",
    competitiveAdvantage:
      "While competitors offer basic call routing, our AI agents understand context, emotion, and intent - providing human-like conversations that build trust and drive conversions at scale.",
    roi: {
      timeToValue: "2-3 weeks",
      efficiency: "85% improvement",
      costSavings: "$15,000+ monthly",
    },
    technical: {
      integration: "Native CRM, calendar, and telephony integrations",
      setup: "White-glove setup with custom training",
      maintenance: "Automated with continuous learning",
    },
    faqs: [
      {
        question: "How realistic do the AI voices sound?",
        answer:
          "Our AI voices are virtually indistinguishable from humans, with natural conversation flow, emotional intelligence, and the ability to handle interruptions and complex scenarios.",
      },
      {
        question: "Can the AI handle complex sales conversations?",
        answer:
          "Yes, our AI agents are trained on your products, pricing, and sales processes. They can handle objections, provide detailed information, and know when to transfer to human specialists.",
      },
      {
        question: "What happens if the AI can't answer a question?",
        answer:
          "The AI seamlessly transfers calls to your team with full context and conversation history, ensuring customers never have to repeat themselves.",
      },
      {
        question: "How quickly can we get this set up?",
        answer:
          "Most implementations are live within 2-3 weeks, including custom voice training, CRM integration, and staff onboarding.",
      },
    ],
    pricing: {
      model: "Per-minute usage",
      startingPrice: "$299/month",
      enterprise: true,
    },
    cta: "Get Your AI Voice Agent Demo",
  },

  {
    slug: "chatbots",
    name: "AI Chatbots",
    shortName: "Chatbots",
    tagline: "Intelligent website assistants that convert visitors into leads",
    description:
      "Smart chatbots trained on your content that engage visitors instantly, answer questions, and convert 45% more leads than traditional contact forms.",
    longDescription:
      "Deploy intelligent chatbots that understand context, provide personalized responses, and guide visitors through your sales funnel. Integrated with your CRM and trained on your specific business knowledge for accurate, helpful interactions.",
    benefits: [
      "Convert 45% more website visitors into leads",
      "Provide instant responses 24/7",
      "Reduce bounce rates by up to 60%",
      "Qualify leads automatically",
      "Handle multiple conversations simultaneously",
      "Integrate seamlessly with existing tools",
      "Capture leads even when you're offline",
      "Provide multilingual customer support",
    ],
    features: [
      "Advanced natural language processing",
      "Custom training on your content and FAQs",
      "Lead scoring and qualification algorithms",
      "Real-time analytics and conversation insights",
      "Custom branding and personality settings",
      "Seamless CRM and marketing tool integration",
      "Human handoff with conversation history",
      "A/B testing for optimization",
    ],
    useCases: [
      {
        title: "Website Lead Generation",
        description:
          "Capture visitor information and qualify leads before they leave your site",
        industry: "All Industries",
      },
      {
        title: "Customer Support Automation",
        description:
          "Answer common questions and route complex issues to support staff",
        industry: "E-commerce, SaaS, Professional Services",
      },
      {
        title: "Product Recommendations",
        description:
          "Guide customers to the right products based on their needs and preferences",
        industry: "Retail, E-commerce, B2B Services",
      },
      {
        title: "Appointment Booking",
        description:
          "Schedule consultations, demos, or service appointments directly through chat",
        industry: "Healthcare, Professional Services, Home Services",
      },
    ],
    industries: [
      "E-commerce & Retail",
      "Professional Services",
      "Healthcare",
      "Real Estate",
      "Technology & SaaS",
      "Financial Services",
      "Education",
      "Manufacturing",
    ],
    color: "from-purple-500 to-pink-500",
    stats: {
      "Conversion Rate": "+45%",
      "Response Time": "Instant",
      "Lead Quality": "78% qualified",
      "Engagement Rate": "85%",
      "Cost Per Lead": "-60%",
    },
    marketInsights:
      "78% of consumers expect instant responses online, with chatbots handling 80% of routine inquiries. Businesses see 67% increase in lead generation and 50% reduction in customer acquisition costs.",
    competitiveAdvantage:
      "Our chatbots use advanced NLP to understand context and intent, providing personalized responses that feel human while maintaining perfect brand consistency across all interactions.",
    roi: {
      timeToValue: "1-2 weeks",
      efficiency: "80% automation rate",
      costSavings: "$8,000+ monthly",
    },
    technical: {
      integration: "Website embed, CRM sync, marketing automation",
      setup: "Custom training and brand configuration",
      maintenance: "Self-learning with periodic optimization",
    },
    faqs: [
      {
        question: "How does the chatbot know about our specific business?",
        answer:
          "We train your chatbot on your website content, FAQs, product information, and common customer questions to provide accurate, relevant responses.",
      },
      {
        question: "Can the chatbot handle complex customer inquiries?",
        answer:
          "Yes, for complex issues it can't resolve, the chatbot seamlessly hands off to your team with full conversation context and customer information.",
      },
      {
        question: "Will the chatbot sound robotic or scripted?",
        answer:
          "Our chatbots use natural language processing to have conversational, helpful interactions that match your brand voice and personality.",
      },
      {
        question: "How do we measure the chatbot's performance?",
        answer:
          "You get detailed analytics on conversations, conversion rates, lead quality, and ROI through an intuitive dashboard with actionable insights.",
      },
    ],
    pricing: {
      model: "Monthly subscription",
      startingPrice: "$199/month",
      enterprise: true,
    },
    cta: "See Your Chatbot in Action",
  },

  {
    slug: "video-agents",
    name: "AI Video Agents",
    shortName: "Video Agents",
    tagline: "Personalized video experiences that engage and convert",
    description:
      "AI-powered video presenters that deliver personalized messages, product demos, and interactive experiences with 4x higher engagement than static content.",
    longDescription:
      "Create scalable video experiences with AI presenters that deliver personalized messages, interactive product demonstrations, and guided onboarding sequences that adapt to each viewer's needs and preferences.",
    benefits: [
      "Increase engagement by 4x over static content",
      "Scale personalized video experiences",
      "Reduce video production costs by 90%",
      "Deliver consistent brand messaging",
      "Create interactive, clickable experiences",
      "Generate videos in multiple languages",
      "A/B test video content automatically",
      "Integrate with marketing automation",
    ],
    features: [
      "Custom AI avatar creation and branding",
      "Dynamic content generation based on viewer data",
      "Interactive overlays and clickable elements",
      "Real-time engagement analytics and heatmaps",
      "Multi-language video generation with lip-sync",
      "Branching scenarios based on viewer choices",
      "CRM integration for personalized messaging",
      "Automated A/B testing and optimization",
    ],
    useCases: [
      {
        title: "Personalized Sales Outreach",
        description:
          "Send customized video messages to prospects with their name and specific pain points",
        industry: "B2B Sales, Real Estate, Financial Services",
      },
      {
        title: "Product Demonstrations",
        description:
          "Create interactive product tours that adapt based on viewer interests and behavior",
        industry: "SaaS, Technology, Manufacturing",
      },
      {
        title: "Customer Onboarding",
        description:
          "Guide new customers through setup and best practices with interactive video sequences",
        industry: "Software, Financial Services, Healthcare",
      },
      {
        title: "Training and Education",
        description:
          "Deliver consistent training content with interactive quizzes and progress tracking",
        industry: "Corporate Training, Education, Healthcare",
      },
    ],
    industries: [
      "Technology & SaaS",
      "Financial Services",
      "Healthcare",
      "Education & Training",
      "Real Estate",
      "Professional Services",
      "E-commerce",
      "Manufacturing",
    ],
    color: "from-green-500 to-emerald-500",
    stats: {
      "Engagement Rate": "4x higher",
      "Completion Rate": "68%",
      Retention: "85%",
      "Conversion Lift": "+35%",
      "Production Cost": "-90%",
    },
    marketInsights:
      "Video content generates 1200% more shares than text and images combined. Personalized videos show 16x higher click-through rates, with 68% completion rates compared to 25% for generic content.",
    competitiveAdvantage:
      "Unlike static video tools, our AI agents create dynamic, personalized experiences that adapt in real-time to viewer behavior and preferences, maximizing engagement and conversion.",
    roi: {
      timeToValue: "1-3 weeks",
      efficiency: "90% production cost reduction",
      costSavings: "$25,000+ annually",
    },
    technical: {
      integration: "Website embed, CRM integration, marketing platforms",
      setup: "Custom avatar creation and content training",
      maintenance: "Automated optimization with performance tracking",
    },
    faqs: [
      {
        question: "How realistic do the AI video presenters look?",
        answer:
          "Our AI avatars are photorealistic and can be customized to match your brand, including appearance, voice, and personality traits.",
      },
      {
        question: "Can we create videos in different languages?",
        answer:
          "Yes, our platform supports 40+ languages with accurate lip-sync and native pronunciation for global audiences.",
      },
      {
        question: "How do we measure video performance?",
        answer:
          "You get detailed analytics on view time, engagement, click-through rates, and conversion tracking with heatmap analysis.",
      },
      {
        question: "Can the videos be interactive?",
        answer:
          "Absolutely! Videos can include clickable buttons, forms, branching scenarios, and dynamic content that responds to viewer choices.",
      },
    ],
    pricing: {
      model: "Per video/Per view",
      startingPrice: "$399/month",
      enterprise: true,
    },
    cta: "Create Your Video Agent",
  },

  {
    slug: "automation",
    name: "Process Automation",
    shortName: "Automation",
    tagline: "Eliminate manual work with intelligent workflow automation",
    description:
      "End-to-end workflow automation that connects your tools, eliminates 15+ hours of manual work weekly, and operates with 99.8% accuracy.",
    longDescription:
      "Transform your operations with intelligent automation that connects all your business tools, eliminates repetitive tasks, and scales your team's productivity without adding headcount.",
    benefits: [
      "Eliminate 15+ hours of manual work weekly",
      "Connect all your existing business tools",
      "Scale operations without hiring",
      "Reduce human errors by 99.8%",
      "Improve response times and SLAs",
      "Generate automatic reports and insights",
      "Handle complex multi-step workflows",
      "Monitor and optimize processes continuously",
    ],
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "500+ pre-built app integrations and APIs",
      "Intelligent trigger-based automation",
      "Real-time monitoring and error handling",
      "Custom logic and conditional workflows",
      "Advanced data transformation and enrichment",
      "Scalable cloud infrastructure",
      "Detailed audit logs and compliance reporting",
    ],
    useCases: [
      {
        title: "Lead Management Automation",
        description:
          "Automatically capture, qualify, route, and nurture leads across all channels",
        industry: "Sales, Marketing, Real Estate",
      },
      {
        title: "Customer Onboarding Workflows",
        description:
          "Streamline new customer setup with automated document collection and system provisioning",
        industry: "SaaS, Financial Services, Professional Services",
      },
      {
        title: "Order Processing and Fulfillment",
        description:
          "Automate order routing, inventory updates, and shipping notifications",
        industry: "E-commerce, Manufacturing, Retail",
      },
      {
        title: "HR and Employee Management",
        description:
          "Automate hiring workflows, employee onboarding, and performance tracking",
        industry: "All Industries",
      },
    ],
    industries: [
      "All Industries",
      "Multi-location Businesses",
      "Professional Services",
      "E-commerce & Retail",
      "Healthcare",
      "Financial Services",
      "Manufacturing",
      "Technology",
    ],
    color: "from-orange-500 to-red-500",
    stats: {
      "Time Saved": "15+ hours/week",
      "Accuracy Rate": "99.8%",
      ROI: "340%",
      "Process Efficiency": "+200%",
      "Error Reduction": "95%",
    },
    marketInsights:
      "Businesses using automation see 340% average ROI and save $15,000+ monthly. 73% of companies report automation as critical for competitive advantage, with 85% planning increased investment.",
    competitiveAdvantage:
      "Our AI learns and adapts to your business processes, handling exceptions intelligently while simple automation tools fail. We provide end-to-end solutions, not just task automation.",
    roi: {
      timeToValue: "2-4 weeks",
      efficiency: "200% process improvement",
      costSavings: "$15,000+ monthly",
    },
    technical: {
      integration: "Native APIs for 500+ business applications",
      setup: "Custom workflow design and implementation",
      maintenance: "Automated monitoring with intelligent optimization",
    },
    faqs: [
      {
        question: "Which business applications can you connect?",
        answer:
          "We integrate with 500+ applications including CRMs, marketing tools, accounting software, e-commerce platforms, and custom APIs.",
      },
      {
        question: "How complex can the automated workflows be?",
        answer:
          "Our platform handles multi-step workflows with conditional logic, data transformations, approval processes, and exception handling.",
      },
      {
        question: "What happens when something goes wrong?",
        answer:
          "Built-in error handling automatically retries failed actions, sends notifications, and provides detailed logs for troubleshooting.",
      },
      {
        question: "Can we modify workflows after they're set up?",
        answer:
          "Yes, you can easily modify workflows through our visual builder, and we provide ongoing optimization based on performance data.",
      },
    ],
    pricing: {
      model: "Per automation/Per month",
      startingPrice: "$499/month",
      enterprise: true,
    },
    cta: "Automate Your Workflows",
  },
];

// Helper functions
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

// Generate SEO metadata for city + solution pages
export function getSolutionSeo(cityName: string, solutionSlug: string) {
  const solution = getSolutionBySlug(solutionSlug);
  if (!solution) return null;

  const title = `${solution.name} in ${cityName} | Agenxus`;
  const description = `${solution.tagline} ${solution.description.substring(
    0,
    120
  )}... Serving ${cityName} businesses with expert setup and support.`;
  const canonical = `/locations/${cityName.toLowerCase().replace(" ", "-")}/${
    solution.slug
  }`;

  return { title, description, canonical };
}

export default {
  solutions,
  getSolutionBySlug,
  getAllSolutionSlugs,
  getSolutionSeo,
};
