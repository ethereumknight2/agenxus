"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Video,
  Cog,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Star,
  Zap,
  Building,
  Home,
  Heart,
  Scale,
} from "lucide-react";

// Types
interface City {
  slug: string;
  name: string;
  state: string;
  population: string;
  metro: string;
  description: string;
  businessContext: string;
  neighborhoods: string[];
  industries: string[];
  keywordFocus: {
    primary: string;
    secondary: string[];
    longTail: string[];
  };
  localStats: {
    businesses: string;
    avgResponse: string;
    marketGrowth: string;
    phoneVolume: string;
  };
}

interface Solution {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  features: string[];
  useCases: string[];
  industries: string[];
  color: string;
  stats: Record<string, string>;
}

interface CityPageClientProps {
  city: City;
  solutions: Solution[];
}

export default function CityPageClient({
  city,
  solutions,
}: CityPageClientProps) {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link
            href="/locations"
            className="hover:text-white transition-colors"
          >
            Service Areas
          </Link>
          <span className="mx-2">→</span>
          <span className="text-white">{city.name}</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-blue-400" />
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-cyan-300">
                  {city.state} • Population: {city.population}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  AI Voice Agents, Chatbots &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Automation in {city.name}
                </span>
              </h1>

              <p className="text-2xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
                {city.description} Our AI solutions help {city.name} businesses
                capture more leads, reduce missed calls, and deliver exceptional
                customer experiences 24/7.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get Started in {city.name}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+18722778841"
                  className="border-2 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>(872) 277-8841</span>
                </a>
              </div>
            </motion.div>

            {/* Local Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {city.localStats.businesses}
                </div>
                <div className="text-gray-400 text-sm">Local Businesses</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {city.localStats.marketGrowth}
                </div>
                <div className="text-gray-400 text-sm">Annual Growth</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {city.localStats.avgResponse}
                </div>
                <div className="text-gray-400 text-sm">Avg Response Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">AI Coverage</div>
              </div>
            </motion.div>

            {/* Neighborhoods Served */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-4xl mx-auto"
            >
              <h3 className="text-xl font-bold mb-4">
                Areas We Serve in {city.name}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {city.neighborhoods.map((neighborhood, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Why Local Context Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why {city.name} Businesses Choose AI Automation
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {city.businessContext}
              </p>
              <div className="space-y-4">
                {[
                  `Reduce missed calls and long hold times in ${city.name}'s competitive market`,
                  "Automate scheduling, reminders, and customer intake processes",
                  "Improve speed-to-lead and lead qualification rates",
                  "Deliver consistent, on-brand experiences across all channels",
                  "Scale operations without increasing headcount costs",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Results You Can Expect in {city.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    +35%
                  </div>
                  <div className="text-sm text-gray-400">
                    More Leads Captured
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    60%
                  </div>
                  <div className="text-sm text-gray-400">Fewer No-Shows</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    48-72h
                  </div>
                  <div className="text-sm text-gray-400">Typical Go-Live</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Based on average results from {city.name} area businesses using
                Agenxus AI solutions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Solutions for {city.name} Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI automation designed for {city.name}&apos;s
              diverse business landscape. Each solution integrates seamlessly
              with your existing tools and workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent =
                {
                  "ai-voice-agents": Phone,
                  chatbots: MessageCircle,
                  "video-agents": Video,
                  automation: Cog,
                }[solution.slug] || Phone;

              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/locations/${city.slug}/${solution.slug}`}
                    className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">
                          {solution.name}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-400 mt-1">
                          {Object.entries(solution.stats).map(
                            ([key, value]) => (
                              <span key={key} className="text-cyan-400">
                                {value}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Key Benefits:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {solution.benefits.slice(0, 4).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-sm text-gray-300">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Popular in {city.name} for:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.industries
                            .slice(0, 3)
                            .map((industry, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                              >
                                {industry}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="font-medium">
                        Learn More About {solution.name}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Industries We Serve in {city.name}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions tailored for {city.name}&apos;s key
                industries and business types.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {city.industries.map((industry, index) => {
                const industryIcons = {
                  "Automotive Dealerships": Building,
                  "Healthcare & Medical": Heart,
                  "Professional Services": Users,
                  "Real Estate": Home,
                  "Legal Services": Scale,
                  "Financial Services": TrendingUp,
                  Technology: Zap,
                  "Home Services": Home,
                  "Healthcare & Wellness": Heart,
                  Manufacturing: Building,
                  "Corporate Services": Building,
                };

                const IconComponent =
                  industryIcons[industry as keyof typeof industryIcons] ||
                  Building;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center"
                  >
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">{industry}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Specialized AI solutions for {industry.toLowerCase()} in{" "}
                      {city.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Launch AI in {city.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fast, collaborative implementation designed for {city.name}{" "}
              businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                description: `Understand your ${city.name} business needs, workflows, and customer journey to design the perfect AI solution.`,
              },
              {
                step: "2",
                title: "Custom Development",
                description:
                  "Build and train AI agents with your specific brand voice, terminology, and business processes.",
              },
              {
                step: "3",
                title: "Integration & Testing",
                description:
                  "Connect with your existing CRM, phone systems, and tools. Test everything thoroughly before going live.",
              },
              {
                step: "4",
                title: "Launch & Optimize",
                description:
                  "Go live in 48-72 hours. Monitor performance and continuously optimize for better results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* FAQ Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {city.name} Business FAQs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions from {city.name} area businesses about AI
              automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: `How quickly can AI agents be deployed for ${city.name} businesses?`,
                answer: `Most ${city.name} businesses can have AI voice agents operational within 48-72 hours. More complex integrations with existing systems typically take 1-2 weeks depending on your current setup.`,
              },
              {
                question: `Do you provide local support in ${city.name}?`,
                answer: `Yes, we provide dedicated account management and technical support for ${city.name} businesses. Our team understands local market dynamics and can provide hands-on assistance when needed.`,
              },
              {
                question: `Can AI agents handle multiple locations in ${city.name}?`,
                answer: `Absolutely. Our AI solutions are designed for multi-location businesses across ${city.name} and surrounding areas. We provide unified reporting, location-specific routing, and centralized management while maintaining local customization.`,
              },
              {
                question: `What's the typical ROI for ${city.name} businesses?`,
                answer: `${city.name} businesses typically see a return on investment within 30-90 days. Common benefits include 35-60% increase in lead capture, reduced staffing costs, and improved customer satisfaction scores.`,
              },
              {
                question: `Do the AI agents integrate with existing ${city.name} business tools?`,
                answer: `Yes, our AI agents integrate seamlessly with popular CRM systems, scheduling tools, phone systems, and other business applications commonly used by ${city.name} businesses.`,
              },
              {
                question: `How do you ensure AI agents understand ${city.name} local context?`,
                answer: `We train our AI agents with local knowledge including ${city.name} neighborhoods, business districts, local terminology, and industry-specific context relevant to your market area.`,
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="font-bold text-cyan-300 mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integrations & Technology */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/20 rounded-3xl p-12 border border-white/10"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Technology & Integrations for {city.name} Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI solutions integrate seamlessly with the tools and
                platforms {city.name} businesses already use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Voice & Phone
                </h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>Retell AI • Twilio Voice</div>
                  <div>Existing Phone Systems</div>
                  <div>VoIP Providers</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-purple-400">
                  CRM & Business Tools
                </h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>Salesforce • HubSpot • Pipedrive</div>
                  <div>Google Workspace</div>
                  <div>Microsoft 365</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  Scheduling & Automation
                </h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>Cal.com • Calendly</div>
                  <div>n8n • Make.com • Zapier</div>
                  <div>SMS & Email platforms</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Full audit trails, GDPR compliance, and enterprise-grade
                security for {city.name} businesses of all sizes.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Success Stories / Case Studies Teaser */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-blue-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Success Stories from {city.name} Area
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from {city.name} businesses using Agenxus AI
                automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  &quot;Our {city.name} practice saw a 70% reduction in missed
                  calls and 45% more appointments booked after implementing
                  Agenxus AI voice agents.&quot;
                </p>
                <div className="text-sm text-gray-500">
                  Healthcare Practice, {city.name}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  &quot;The AI chatbot on our website converts 60% more leads
                  than our previous system. {city.name} clients love getting
                  instant answers 24/7.&quot;
                </p>
                <div className="text-sm text-gray-500">
                  Real Estate Agency, {city.name} Area
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  &quot;Process automation has saved our {city.name} team 15+
                  hours per week on administrative tasks. ROI was clear within
                  the first month.&quot;
                </p>
                <div className="text-sm text-gray-500">
                  Professional Services Firm, {city.name}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your {city.name} Business?
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join other {city.name} businesses using AI to capture more leads,
              improve customer service, and scale efficiently. Get started
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-5 px-10 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Free {city.name} Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+18722778841"
                className="border-2 border-white/30 text-white font-bold text-lg py-5 px-10 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>(872) 277-8841</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free consultation & demo</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Custom solution design</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>48-72 hour implementation</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
