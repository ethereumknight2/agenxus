// /app/services/video-agents/VideoAgentsClient.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Video,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  Play,
  Pause,
  UserCheck,
  BarChart3,
  Settings,
  Headphones,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Monitor,
  Eye,
  Target,
  Camera,
  Film,
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

export default function VideoAgentsClient() {
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
            <span className="text-white">AI Video Agents</span>
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
                <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                  <Video className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-semibold text-lg">
                  AI Video Agents
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">Personalized Videos</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  That Scale Infinitely
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                AI-powered video agents that create personalized messages,
                product demos, and onboarding experiences for every
                customer—delivering the impact of personal video at unlimited
                scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  See Video Agents Demo
                  <Play className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-400">Watch Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">4x</div>
                  <div className="text-sm text-gray-400">Higher Engagement</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">85%+</div>
                  <div className="text-sm text-gray-400">Retention Boost</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">Unlimited</div>
                  <div className="text-sm text-gray-400">Scale</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are AI Video Agents */}
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
                What Are AI Video Agents?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                AI video agents are intelligent virtual presenters that create
                personalized video content at scale. They combine AI avatars,
                natural voice synthesis, and dynamic content generation to
                deliver tailored video experiences for every viewer.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex-shrink-0">
                    <Camera className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Custom AI Avatars
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Lifelike digital presenters that can be customized to
                      match your brand and style
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex-shrink-0">
                    <Film className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Dynamic Content
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Automatically personalize videos with viewer names,
                      company details, and relevant information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Interactive Elements
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Include clickable buttons, forms, and calls-to-action
                      directly within video content
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
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Traditional Video vs AI Video Agents
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Traditional Video
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        Static
                      </div>
                      <div className="text-xs text-gray-400">
                        One size fits all
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      AI Video Agents
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        Dynamic
                      </div>
                      <div className="text-xs text-gray-400">
                        Personalized for each viewer
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        Hours
                      </div>
                      <div className="text-xs text-gray-400">
                        Per video creation
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        Minutes
                      </div>
                      <div className="text-xs text-gray-400">
                        Per video creation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        $$$
                      </div>
                      <div className="text-xs text-gray-400">
                        High production costs
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        $
                      </div>
                      <div className="text-xs text-gray-400">
                        Scalable automation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    90% Cost Reduction
                  </div>
                  <div className="text-sm text-gray-300">
                    With infinite personalization
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
              How Businesses Use AI Video Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From sales outreach to customer onboarding, AI video agents
              transform how businesses communicate at scale with personal touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Sales Outreach",
                description:
                  "Create personalized video messages for prospects that include their name, company, and specific pain points.",
                benefits: [
                  "3x higher response rates",
                  "Personalized at scale",
                  "CRM integration",
                ],
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Product Demos",
                description:
                  "Generate custom product demonstrations that highlight features most relevant to each prospect's use case.",
                benefits: [
                  "Tailored to viewer needs",
                  "Interactive elements",
                  "Higher conversion rates",
                ],
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Onboarding",
                description:
                  "Welcome new customers with personalized video walkthroughs that guide them through setup and best practices.",
                benefits: [
                  "Faster time-to-value",
                  "Reduced support tickets",
                  "Higher retention",
                ],
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Account Management",
                description:
                  "Send regular check-in videos to existing customers with account-specific updates and recommendations.",
                benefits: [
                  "Stronger relationships",
                  "Increased engagement",
                  "Upsell opportunities",
                ],
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Event Invitations",
                description:
                  "Create personalized invitations for webinars, conferences, or meetings that feel genuinely personal.",
                benefits: [
                  "Higher attendance rates",
                  "Personal connection",
                  "Brand consistency",
                ],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Training & Education",
                description:
                  "Deliver personalized training content that adapts to each learner's role, progress, and learning style.",
                benefits: [
                  "Improved comprehension",
                  "Self-paced learning",
                  "Progress tracking",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all group"
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 bg-gradient-to-r from-green-950/30 to-emerald-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries Using AI Video Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Video agents are particularly powerful for industries where
              personal connection, demonstration, and visual communication drive
              business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "SaaS & Technology",
                description:
                  "Personalized product demos, feature walkthroughs, customer onboarding, and technical training videos.",
                stats: "60% higher trial-to-paid conversion",
              },
              {
                industry: "Real Estate",
                description:
                  "Virtual property tours, market updates, client testimonials, and personalized listing presentations.",
                stats: "45% more listing appointments",
              },
              {
                industry: "Financial Services",
                description:
                  "Investment updates, policy explanations, financial planning presentations, and regulatory compliance training.",
                stats: "70% better client retention",
              },
              {
                industry: "Education & Training",
                description:
                  "Personalized course introductions, progress updates, certification programs, and student engagement campaigns.",
                stats: "80% course completion rate",
              },
              {
                industry: "Sales & Consulting",
                description:
                  "Prospect outreach, proposal presentations, client check-ins, and service demonstration videos.",
                stats: "3x higher response rates",
              },
              {
                industry: "Healthcare",
                description:
                  "Patient education, treatment explanations, appointment reminders, and wellness program communications.",
                stats: "55% better patient compliance",
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
                <div className="text-emerald-400 font-semibold">
                  {item.stats}
                </div>
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
              How We Create AI Video Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From avatar creation to automation deployment, our proven process
              delivers personalized video experiences that scale with your
              business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Avatar & Voice Design",
                description:
                  "Create custom AI avatars and voice profiles that match your brand identity and communication style.",
              },
              {
                step: "2",
                title: "Content Strategy",
                description:
                  "Develop video templates, messaging frameworks, and personalization rules based on your customer journey.",
              },
              {
                step: "3",
                title: "Platform Integration",
                description:
                  "Connect with your CRM, marketing automation, and communication platforms for seamless video delivery.",
              },
              {
                step: "4",
                title: "Launch & Scale",
                description:
                  "Deploy your video agents with analytics tracking and continuous optimization based on engagement metrics.",
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
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

      {/* Video Platform Integrations */}
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
              Video Platform & Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI video agents integrate with leading platforms and utilize
              cutting-edge technology for maximum reach and effectiveness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Video Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Video Hosting
                  </div>
                  <div className="text-gray-300 text-sm">
                    Vimeo • Wistia • YouTube • Custom CDN
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Interactive Video
                  </div>
                  <div className="text-gray-300 text-sm">
                    HapYak • Brightcove • Kaltura
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Live Streaming
                  </div>
                  <div className="text-gray-300 text-sm">
                    Zoom • Teams • WebEx Integration
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                AI Technology
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Avatar Generation
                  </div>
                  <div className="text-gray-300 text-sm">
                    Synthesia • D-ID • Custom Models
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Voice Synthesis
                  </div>
                  <div className="text-gray-300 text-sm">
                    ElevenLabs • Murf • Azure Speech
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Video Processing
                  </div>
                  <div className="text-gray-300 text-sm">
                    FFmpeg • AWS Media Services
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Distribution
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Email & CRM
                  </div>
                  <div className="text-gray-300 text-sm">
                    HubSpot • Salesforce • Mailchimp
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Social Media
                  </div>
                  <div className="text-gray-300 text-sm">
                    LinkedIn • Twitter • Facebook
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Landing Pages
                  </div>
                  <div className="text-gray-300 text-sm">
                    Unbounce • Leadpages • Custom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
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
              Interactive Video Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Go beyond traditional video with interactive elements that engage
              viewers and drive specific actions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Engagement Features
              </h3>
              <div className="space-y-4">
                {[
                  "Clickable buttons and calls-to-action within video",
                  "Branching scenarios based on viewer choices",
                  "Interactive polls and surveys during playback",
                  "Personalized content overlays and graphics",
                  "Dynamic text insertion with viewer data",
                  "Progress tracking and completion analytics",
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
                  "Real-time CRM data for personalization",
                  "Calendar booking directly from video",
                  "Lead capture forms within video player",
                  "E-commerce product recommendations",
                  "Document downloads and resource access",
                  "Meeting scheduling and contact routing",
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
              AI Video Agent FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about implementing AI video agents for your
              business.
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem
              question="How realistic do AI avatars look and sound?"
              answer="Modern AI avatars are remarkably lifelike, using advanced deep learning to create natural facial expressions, lip sync, and voice synthesis. While viewers may notice they're AI-generated upon close inspection, the quality is professional and engaging enough for business communications."
            />
            <FAQItem
              question="Can we create avatars that look like our team members?"
              answer="Yes, we can create custom avatars based on your team members or brand representatives. This requires video recordings and voice samples to train the AI model. We also offer diverse stock avatars that can be customized to match your brand aesthetic."
            />
            <FAQItem
              question="How long does it take to create personalized videos?"
              answer="Once set up, AI video agents can generate personalized videos in 2-5 minutes depending on length and complexity. The initial setup and training process typically takes 1-2 weeks to ensure quality and brand alignment."
            />
            <FAQItem
              question="What level of personalization is possible?"
              answer="Videos can be personalized with names, company details, custom messages, product recommendations, account data, and even dynamic backgrounds. The level of personalization is limited only by the data you have available about your audience."
            />
            <FAQItem
              question="How do you ensure video quality and brand consistency?"
              answer="We use quality control checkpoints, brand guideline training, and approval workflows. All video templates are reviewed before deployment, and we monitor output quality with automated checks and periodic human review."
            />
            <FAQItem
              question="Can videos be interactive or include calls-to-action?"
              answer="Yes, videos can include clickable buttons, forms, calendar booking links, polls, and branching scenarios. Viewers can take actions directly within the video player, making it a powerful conversion tool."
            />
            <FAQItem
              question="How do you measure video performance and engagement?"
              answer="We provide detailed analytics including view rates, engagement duration, click-through rates on interactive elements, conversion tracking, and A/B testing results. All metrics can be integrated with your existing analytics platforms."
            />
            <FAQItem
              question="What are the costs compared to traditional video production?"
              answer="AI video agents typically cost 80-90% less than traditional video production while enabling unlimited personalization and instant generation. The cost savings increase dramatically as you scale to hundreds or thousands of personalized videos."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Video Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business communication with AI video agents that
              deliver personalized experiences at unlimited scale and fraction
              of traditional costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-105 shadow-lg"
              >
                See Video Agents Demo
                <Play className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
              >
                <Video className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free consultation • Custom avatar demo • 1-2 week setup
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
