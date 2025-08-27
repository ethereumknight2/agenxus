// /app/services/ai-voice-agents/VoiceAgentsClient.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  MessageSquare,
  PhoneCall,
  UserCheck,
  BarChart3,
  Settings,
  Headphones,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
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

export default function VoiceAgentsClient() {
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
            <span className="text-white">AI Voice Agents</span>
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
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <span className="text-cyan-400 font-semibold text-lg">
                  AI Voice Agents
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">Never Miss Another Call</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  With AI Voice Agents
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Human-like phone assistants that answer every call, qualify
                leads, and book appointments 24/7 without human intervention.
                Capture 76% more customers who prefer voice over chat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Voice Agents Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">
                    &lt; 2 sec
                  </div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">40%+</div>
                  <div className="text-sm text-gray-400">More Appointments</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are AI Voice Agents */}
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
                What Are AI Voice Agents?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                AI voice agents are sophisticated phone assistants powered by
                advanced conversational AI. They handle calls with natural,
                human-like conversations, understanding context, tone, and
                intent to provide exceptional customer experiences.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Natural Conversations
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Handle complex calls with contextual understanding and
                      emotional intelligence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Smart Lead Qualification
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Automatically identify high-value prospects and route them
                      appropriately
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Seamless Booking
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Schedule appointments directly into your calendar while
                      still on the call
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
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Human vs AI Voice Agent
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Human Receptionist
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        40hrs/week
                      </div>
                      <div className="text-xs text-gray-400">
                        Limited availability
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      AI Voice Agent
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">
                        Always available
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        $43K+
                      </div>
                      <div className="text-xs text-gray-400">Annual cost</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        $6K
                      </div>
                      <div className="text-xs text-gray-400">Annual cost</div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    85% Cost Savings
                  </div>
                  <div className="text-sm text-gray-300">
                    Plus never miss another call
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
              Common Use Cases for AI Voice Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses use AI voice agents to capture more leads,
              improve customer service, and scale operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Lead Qualification",
                description:
                  "Automatically qualify incoming leads by asking the right questions and scoring prospects based on your criteria.",
                benefits: [
                  "40% faster qualification",
                  "Consistent screening process",
                  "Priority routing for hot leads",
                ],
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Appointment Scheduling",
                description:
                  "Book appointments directly into your calendar system while handling availability, rescheduling, and confirmations.",
                benefits: [
                  "60% fewer no-shows",
                  "Real-time calendar sync",
                  "Automated reminders",
                ],
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Customer Support",
                description:
                  "Handle common inquiries, provide account information, and escalate complex issues to human agents when needed.",
                benefits: [
                  "80% of calls resolved",
                  "Instant response times",
                  "24/7 availability",
                ],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Sales Inquiries",
                description:
                  "Capture sales inquiries, provide product information, and nurture prospects through your sales funnel.",
                benefits: [
                  "35% more leads captured",
                  "Consistent messaging",
                  "Follow-up automation",
                ],
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Information Requests",
                description:
                  "Provide business hours, location details, service information, and pricing to potential customers.",
                benefits: [
                  "Instant information access",
                  "Reduced staff workload",
                  "Improved customer satisfaction",
                ],
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "After-Hours Coverage",
                description:
                  "Ensure your business never misses calls outside business hours, capturing leads that would otherwise be lost.",
                benefits: [
                  "25% of leads after hours",
                  "Competitive advantage",
                  "Global time zone coverage",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 bg-gradient-to-r from-blue-950/30 to-cyan-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries Using AI Voice Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI voice agents work especially well for service-driven businesses
              where phone calls drive revenue and customer relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare & Medical",
                description:
                  "Appointment scheduling, patient intake, prescription reminders, and HIPAA-compliant call handling.",
                stats: "70% fewer missed appointments",
              },
              {
                industry: "Legal Services",
                description:
                  "Client intake, consultation scheduling, case updates, and emergency call routing for law firms.",
                stats: "45% more qualified leads",
              },
              {
                industry: "Real Estate",
                description:
                  "Property inquiries, showing schedules, lead qualification, and buyer/seller follow-up.",
                stats: "60% faster lead response",
              },
              {
                industry: "Home Services",
                description:
                  "Emergency dispatch, service booking, technician routing, and customer follow-up.",
                stats: "40% more bookings",
              },
              {
                industry: "Automotive Dealerships",
                description:
                  "Sales inquiries, service scheduling, parts ordering, and customer retention calls.",
                stats: "35% higher conversion",
              },
              {
                industry: "Professional Services",
                description:
                  "Consultation booking, project inquiries, client onboarding, and support requests.",
                stats: "50% less admin time",
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
                <div className="text-cyan-400 font-semibold">{item.stats}</div>
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
              How AI Voice Agents Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From setup to operation, here&apos;s how we implement AI voice
              agents for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Training",
                description:
                  "We analyze your call patterns, create custom scripts, and train the AI on your business knowledge and brand voice.",
              },
              {
                step: "2",
                title: "Integration Setup",
                description:
                  "Connect to your phone system, CRM, calendar, and other tools. Test all integrations thoroughly.",
              },
              {
                step: "3",
                title: "Go Live",
                description:
                  "Launch your AI voice agent with monitoring and optimization. Typically ready in 48-72 hours.",
              },
              {
                step: "4",
                title: "Monitor & Optimize",
                description:
                  "Continuous monitoring, performance reporting, and AI improvements based on real call data.",
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
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

      {/* Integrations */}
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
              Integrations & Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI voice agents integrate seamlessly with your existing
              business tools and phone systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Phone Systems
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Voice Platforms
                  </div>
                  <div className="text-gray-300 text-sm">
                    Retell AI • Twilio Voice • Vapi
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Existing Systems
                  </div>
                  <div className="text-gray-300 text-sm">
                    PBX • VoIP • Traditional Lines
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                CRM & Business
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
                  <div className="font-semibold text-white mb-2">Calendars</div>
                  <div className="text-gray-300 text-sm">
                    Google • Outlook • Cal.com
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Automation
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Workflow Tools
                  </div>
                  <div className="text-gray-300 text-sm">
                    n8n • Make.com • Zapier
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Communication
                  </div>
                  <div className="text-gray-300 text-sm">
                    SMS • Email • Slack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Voice Agent ROI Calculator
            </h2>
            <p className="text-xl text-gray-300">
              See how much AI voice agents can save your business.
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  $43,000
                </div>
                <div className="text-lg text-gray-300 mb-1">
                  Human Receptionist
                </div>
                <div className="text-sm text-gray-400">
                  Annual salary + benefits
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  $6,000
                </div>
                <div className="text-lg text-gray-300 mb-1">AI Voice Agent</div>
                <div className="text-sm text-gray-400">
                  Complete solution annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  $37,000
                </div>
                <div className="text-lg text-gray-300 mb-1">Annual Savings</div>
                <div className="text-sm text-gray-400">
                  Plus 24/7 availability
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg text-cyan-400 font-semibold mb-4">
                ROI: 617% in the first year
              </div>
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg"
              >
                Calculate Your Savings
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
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
              AI Voice Agent FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about implementing AI voice agents.
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem
              question="How natural do AI voice agents sound?"
              answer="Our AI voice agents use advanced text-to-speech technology and are trained on natural conversation patterns. Most callers cannot tell they're speaking with AI. We're transparent about AI usage when required by regulations or customer preference."
            />
            <FAQItem
              question="How quickly can AI voice agents be deployed?"
              answer="Most businesses can have AI voice agents operational within 48-72 hours. More complex integrations with existing systems typically take 1-2 weeks depending on your current setup and customization needs."
            />
            <FAQItem
              question="What happens if the AI can't handle a call?"
              answer="AI voice agents are programmed to recognize when they need human assistance. They can seamlessly transfer calls to your team, take detailed messages, or schedule callbacks. You maintain full control over escalation rules."
            />
            <FAQItem
              question="Do AI voice agents integrate with our existing phone system?"
              answer="Yes, our AI voice agents work with most phone systems including traditional PBX, VoIP providers, and cloud-based systems. We handle the technical integration so there's no disruption to your current setup."
            />
            <FAQItem
              question="How do you ensure call quality and accuracy?"
              answer="We continuously monitor call performance, provide detailed analytics, and optimize the AI based on real conversations. You receive regular reports and can review call recordings to ensure quality standards."
            />
            <FAQItem
              question="What's the typical ROI timeline for AI voice agents?"
              answer="Most businesses see positive ROI within 30-60 days due to reduced staffing costs and increased lead capture. The combination of cost savings and revenue improvements typically results in 300-600% annual ROI."
            />
            <FAQItem
              question="Can AI voice agents handle multiple languages?"
              answer="Yes, our AI voice agents support multiple languages and can detect the caller's preferred language automatically. This is especially valuable for businesses serving diverse communities."
            />
            <FAQItem
              question="What kind of reporting and analytics do you provide?"
              answer="You get comprehensive dashboards showing call volume, conversion rates, common topics, performance metrics, and detailed call transcripts. All data integrates with your existing CRM and business intelligence tools."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Never Miss Another Call?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses using AI voice agents to capture more
              leads, improve customer service, and scale operations without
              hiring additional staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg"
              >
                Get Voice Agents Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free consultation • Custom demo • 48-72 hour setup
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
