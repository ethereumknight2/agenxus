"use client";

import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Video,
  Cog,
  Calendar,
  CheckCircle,
} from "lucide-react";

// Since this is a client component, we'll need to move metadata to layout or use dynamic metadata
// For now, we'll focus on the component functionality

const cities = [
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    population: "2.7M",
    description:
      "The Windy City is home to thousands of businesses that can benefit from AI automation.",
    industries: [
      "Healthcare",
      "Professional Services",
      "Real Estate",
      "Legal",
      "Home Services",
      "Auto Dealerships",
    ],
  },
  {
    slug: "naperville",
    name: "Naperville",
    state: "IL",
    population: "148K",
    description:
      "A thriving suburban business community with growing automation needs.",
    industries: [
      "Healthcare",
      "Professional Services",
      "Home Services",
      "Legal",
      "Real Estate",
    ],
  },
  {
    slug: "schaumburg",
    name: "Schaumburg",
    state: "IL",
    population: "74K",
    description:
      "Major business hub in northwest Chicago suburbs with diverse industries.",
    industries: [
      "Technology",
      "Healthcare",
      "Professional Services",
      "Manufacturing",
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    state: "IL",
    population: "200K",
    description:
      "Illinois&apos; second-largest city with a growing business landscape.",
    industries: [
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Transportation",
    ],
  },
  {
    slug: "rockford",
    name: "Rockford",
    state: "IL",
    population: "147K",
    description: "Major industrial and business center in northern Illinois.",
    industries: [
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Agriculture",
    ],
  },
  {
    slug: "peoria",
    name: "Peoria",
    state: "IL",
    population: "113K",
    description: "Central Illinois business hub with diverse economic base.",
    industries: [
      "Manufacturing",
      "Healthcare",
      "Professional Services",
      "Agriculture",
      "Technology",
    ],
  },
];

const solutions = [
  {
    name: "AI Voice Agents",
    icon: Phone,
    description:
      "Human-like phone assistants that handle calls, qualify leads, and book appointments 24/7.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI Chatbots",
    icon: MessageCircle,
    description:
      "Intelligent chatbots for your website that engage visitors and convert leads.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "AI Video Agents",
    icon: Video,
    description:
      "AI-generated video assistants for personalized customer interactions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Process Automation",
    icon: Cog,
    description:
      "Streamlined workflows that connect your tools and eliminate manual tasks.",
    color: "from-orange-500 to-red-500",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Service Areas
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Agenxus provides AI voice agents, chatbots, video agents, and
              process automation to businesses nationwide, with specialized
              local market expertise.
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
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="border-2 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-3"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-5xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Industries We Specialize In
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🏠 Home Services</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🏥 Healthcare & Wellness</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🏢 Real Estate</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">⚖️ Legal Services</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🚗 Auto Dealerships</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🍽️ Restaurants</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">💼 Professional Services</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="font-semibold">🎓 Education & Coaching</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">AI Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">States & Growing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$15K+</div>
              <div className="text-gray-400 text-sm">Avg Monthly Boost</div>
            </div>
          </motion.div>
        </div>

        {/* Solutions Overview */}
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
                Our AI Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions designed to help businesses
              capture more leads, improve customer service, and scale operations
              efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cities Grid */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cities We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Providing AI automation solutions to businesses across major
              metropolitan areas nationwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">
                      {city.name}
                    </h3>
                  </div>

                  <div className="text-gray-400 mb-4 flex items-center justify-between">
                    <span>
                      {city.state} • Population: {city.population}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {city.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Industries:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {city.industries.slice(0, 4).map((industry, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                      {city.industries.length > 4 && (
                        <span className="text-xs text-gray-400">
                          +{city.industries.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">
                      View AI Solutions
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Agenxus for Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don&apos;t just provide AI tools—we deliver complete
                automation solutions tailored to your industry and location.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Market Knowledge",
                  description:
                    "Understanding of local business needs and customer expectations in each city we serve.",
                  icon: "🌍",
                },
                {
                  title: "24/7 AI Coverage",
                  description:
                    "Never miss a lead with round-the-clock AI agents handling calls, chats, and appointments.",
                  icon: "🕐",
                },
                {
                  title: "Industry-Specific Training",
                  description:
                    "AI agents trained on your specific industry terminology, processes, and customer journey.",
                  icon: "🎯",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Works with your existing CRM, scheduling, and communication tools without disruption.",
                  icon: "🔗",
                },
                {
                  title: "Proven ROI",
                  description:
                    "Average 35% increase in lead capture and $15,000+ monthly revenue boost for clients.",
                  icon: "📈",
                },
                {
                  title: "Local Support Team",
                  description:
                    "Dedicated account managers who understand your market and can provide hands-on assistance.",
                  icon: "👥",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don&apos;t See Your City?
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with businesses nationwide. Contact us to discuss your AI
              automation needs, no matter where you&apos;re located.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-5 px-10 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Free Discovery Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="border-2 border-white/30 text-white font-bold text-lg py-5 px-10 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-3"
              >
                <span>Contact Us</span>
              </Link>
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
                <span>30-day ROI guarantee</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
