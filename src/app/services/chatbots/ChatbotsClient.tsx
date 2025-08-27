// /app/services/chatbots/ChatbotsClient.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  MessageSquare,
  Bot,
  UserCheck,
  BarChart3,
  Settings,
  Headphones,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  MousePointer,
  Eye,
  Target,
} from "lucide-react";
import Link from "next/link";

// FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 rounded-xl border border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <h3 className="font-semibold text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ChatbotsClient() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services"
              className="hover:text-cyan-400 transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">AI Chatbots</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-pink-400" />
                </div>
                <span className="text-pink-400 font-semibold text-lg">
                  AI Chatbots
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">
                  Capture Every Website Visitor
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  With AI Chatbots
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Intelligent chatbots that engage website visitors, answer
                questions instantly, and convert casual browsers into qualified
                leads—24/7 without human intervention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Get Chatbot Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-pink-400/50 hover:text-pink-400 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">78%</div>
                  <div className="text-sm text-gray-400">Engagement Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">3x</div>
                  <div className="text-sm text-gray-400">Faster Responses</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">45%+</div>
                  <div className="text-sm text-gray-400">More Conversions</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Website Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are AI Chatbots */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                What Are AI Chatbots?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                AI chatbots are intelligent conversational interfaces that
                engage website visitors through natural chat interactions. They
                understand context, learn from conversations, and provide
                personalized responses that feel human-like.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex-shrink-0">
                    <Bot className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Intelligent Conversations
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Handle complex queries with contextual understanding and
                      natural language processing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Lead Qualification
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Automatically qualify visitors and route high-value
                      prospects to your sales team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Instant Responses
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Provide immediate answers to questions, reducing bounce
                      rates and improving user experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Traditional Live Chat vs AI Chatbots
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Human Chat Agents
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        Business Hours
                      </div>
                      <div className="text-xs text-gray-400">
                        Limited availability
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      AI Chatbots
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">Always online</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        1-2 min
                      </div>
                      <div className="text-xs text-gray-400">Response time</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        Instant
                      </div>
                      <div className="text-xs text-gray-400">Response time</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        3-5
                      </div>
                      <div className="text-xs text-gray-400">
                        Concurrent chats
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        Unlimited
                      </div>
                      <div className="text-xs text-gray-400">
                        Concurrent chats
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    70% Cost Reduction
                  </div>
                  <div className="text-sm text-gray-300">
                    With better availability
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How Businesses Use AI Chatbots
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From lead capture to customer support, AI chatbots transform how
              you engage with website visitors and convert them into customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Lead Capture",
                description:
                  "Engage visitors immediately with personalized greetings and capture contact information through natural conversations.",
                benefits: [
                  "65% higher capture rate",
                  "Instant follow-up triggers",
                  "Qualified lead scoring",
                ],
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Customer Support",
                description:
                  "Provide instant answers to frequently asked questions, troubleshoot issues, and route complex queries to human agents.",
                benefits: [
                  "80% of queries resolved",
                  "24/7 availability",
                  "Reduced support costs",
                ],
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Appointment Booking",
                description:
                  "Allow visitors to schedule consultations, demos, or service appointments directly through chat interface.",
                benefits: [
                  "40% more bookings",
                  "Automatic calendar sync",
                  "Confirmation reminders",
                ],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Sales Qualification",
                description:
                  "Ask qualifying questions to identify high-value prospects and route them to the appropriate sales team member.",
                benefits: [
                  "50% better lead quality",
                  "Automated scoring",
                  "Priority routing",
                ],
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Product Recommendations",
                description:
                  "Guide visitors to relevant products or services based on their needs and preferences through interactive chat.",
                benefits: [
                  "30% higher engagement",
                  "Personalized suggestions",
                  "Increased conversions",
                ],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-language Support",
                description:
                  "Engage international visitors in their preferred language, expanding your market reach automatically.",
                benefits: [
                  "Global accessibility",
                  "Automatic detection",
                  "Cultural adaptation",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all group"
              >
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-r from-purple-950/30 to-pink-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries Using AI Chatbots
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI chatbots excel for businesses that need to engage website
              visitors, capture leads, and provide instant customer support
              online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "E-commerce & Retail",
                description:
                  "Product recommendations, order tracking, customer support, and abandoned cart recovery through intelligent chat.",
                stats: "50% increase in conversions",
              },
              {
                industry: "SaaS & Technology",
                description:
                  "Demo scheduling, feature explanations, technical support, and trial-to-paid conversions for software companies.",
                stats: "40% more qualified demos",
              },
              {
                industry: "Real Estate",
                description:
                  "Property inquiries, virtual tour bookings, mortgage pre-qualification, and buyer/seller lead capture.",
                stats: "60% faster lead response",
              },
              {
                industry: "Healthcare & Wellness",
                description:
                  "Appointment scheduling, symptom pre-screening, insurance verification, and patient support resources.",
                stats: "65% fewer phone calls",
              },
              {
                industry: "Professional Services",
                description:
                  "Consultation booking, service inquiries, proposal requests, and client onboarding for agencies and consultants.",
                stats: "45% more consultations",
              },
              {
                industry: "Education & Training",
                description:
                  "Course enrollment, student support, program information, and admission inquiries for schools and training providers.",
                stats: "55% higher engagement",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.industry}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-pink-400 font-semibold">{item.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Deploy AI Chatbots
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to launch, here&apos;s our proven process for
              implementing AI chatbots that convert visitors into customers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Website Analysis",
                description:
                  "Analyze your website traffic, visitor behavior, and conversion funnel to identify optimal chatbot placement and conversation flows.",
              },
              {
                step: "2",
                title: "Custom Training",
                description:
                  "Train the AI on your products, services, FAQs, and brand voice. Create conversation flows that match your sales process.",
              },
              {
                step: "3",
                title: "Integration & Testing",
                description:
                  "Integrate with your website, CRM, and marketing tools. Test all conversation paths and lead capture workflows.",
              },
              {
                step: "4",
                title: "Launch & Optimize",
                description:
                  "Deploy your chatbot with real-time monitoring. Continuously optimize based on conversation analytics and conversion data.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Platform Integrations */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Website Platform Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbots integrate seamlessly with popular website
              platforms, CRM systems, and marketing automation tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Website Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Content Management
                  </div>
                  <div className="text-gray-300 text-sm">
                    WordPress • Webflow • Squarespace
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    E-commerce
                  </div>
                  <div className="text-gray-300 text-sm">
                    Shopify • WooCommerce • BigCommerce
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Custom Sites
                  </div>
                  <div className="text-gray-300 text-sm">
                    React • Next.js • HTML/JavaScript
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">
                CRM & Marketing
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    CRM Systems
                  </div>
                  <div className="text-gray-300 text-sm">
                    Salesforce • HubSpot • Pipedrive
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Email Marketing
                  </div>
                  <div className="text-gray-300 text-sm">
                    Mailchimp • ActiveCampaign • Klaviyo
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Analytics</div>
                  <div className="text-gray-300 text-sm">
                    Google Analytics • Mixpanel • Hotjar
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Live Chat Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Chat Widgets
                  </div>
                  <div className="text-gray-300 text-sm">
                    Intercom • Crisp • Tawk.to
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Messaging</div>
                  <div className="text-gray-300 text-sm">
                    Facebook Messenger • WhatsApp
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Custom Solutions
                  </div>
                  <div className="text-gray-300 text-sm">
                    API Integration • Custom UI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Chatbot Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbots include sophisticated features that go beyond
              basic Q&A to deliver meaningful business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Intelligent Features
              </h3>
              <div className="space-y-4">
                {[
                  "Natural language understanding and context awareness",
                  "Sentiment analysis and emotion detection",
                  "Multi-turn conversations with memory",
                  "Dynamic response personalization",
                  "Intent recognition and classification",
                  "Conversation flow management",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Business Integration
              </h3>
              <div className="space-y-4">
                {[
                  "Real-time CRM data synchronization",
                  "Automatic lead scoring and routing",
                  "Calendar integration for booking",
                  "Payment processing capabilities",
                  "Multi-language and timezone support",
                  "Detailed analytics and reporting",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Chatbot FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about implementing AI chatbots on your website.
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem
              question="How do visitors know they're chatting with AI?"
              answer="We recommend transparency about AI usage. Our chatbots can introduce themselves as AI assistants, or you can include a disclaimer. Many visitors actually prefer AI because they get instant responses without waiting for human agents to become available."
            />
            <FAQItem
              question="Can the chatbot handle complex product questions?"
              answer="Yes, our AI chatbots are trained on your specific products, services, pricing, and policies. They can handle detailed questions, compare options, and provide personalized recommendations. For very complex technical issues, they can seamlessly handoff to human agents."
            />
            <FAQItem
              question="How quickly can a chatbot be added to our website?"
              answer="Basic chatbot implementation typically takes 24-48 hours. More complex integrations with CRM systems, custom workflows, or e-commerce platforms may take 1-2 weeks depending on your requirements."
            />
            <FAQItem
              question="Do chatbots work on mobile devices?"
              answer="Absolutely. Our chatbots are fully responsive and optimized for mobile devices. They provide the same intelligent conversations whether visitors are on desktop, tablet, or smartphone."
            />
            <FAQItem
              question="Can the chatbot capture leads even if visitors don't ask questions?"
              answer="Yes, chatbots can proactively engage visitors with personalized greetings based on their behavior, time on page, or referral source. This significantly increases engagement and lead capture rates compared to passive chat widgets."
            />
            <FAQItem
              question="How do you measure chatbot performance?"
              answer="We provide comprehensive analytics including conversation volume, engagement rates, lead capture rates, conversion tracking, common question themes, and customer satisfaction scores. All metrics integrate with your existing analytics tools."
            />
            <FAQItem
              question="What happens when the chatbot can't answer a question?"
              answer="Chatbots are programmed to recognize their limitations. They can escalate to human agents, collect contact information for follow-up, schedule callbacks, or direct visitors to relevant resources. The handoff process is seamless and maintains conversation context."
            />
            <FAQItem
              question="Can we customize the chatbot's appearance and personality?"
              answer="Yes, chatbots can be fully customized to match your brand including colors, fonts, avatar, and conversation style. We also train the AI on your brand voice and tone to ensure consistent messaging across all interactions."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Capture Every Website Visitor?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI chatbots to engage visitors,
              capture leads, and provide instant customer support 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg"
              >
                Get Chatbot Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-pink-400/50 hover:text-pink-400 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free consultation • Custom demo • 24-48 hour setup
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
