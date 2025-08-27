// /app/locations/[city]/[slug]/SolutionPageClient.tsx - Part 1 (Revised)
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
  PlayCircle,
  BarChart3,
  Shield,
  Headphones,
} from "lucide-react";
import type { City } from "@/data/cities";
import type { Solution } from "@/data/solutions";

interface SolutionPageClientProps {
  city: City;
  solution: Solution;
  allSolutions: Solution[];
}

export default function SolutionPageClient({
  city,
  solution,
  allSolutions,
}: SolutionPageClientProps) {
  // Get icon component for the solution
  const IconComponent =
    {
      "ai-voice-agents": Phone,
      chatbots: MessageCircle,
      "video-agents": Video,
      automation: Cog,
    }[solution.slug] || Phone;

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
          <Link
            href={`/locations/${city.slug}`}
            className="hover:text-white transition-colors"
          >
            {city.name}
          </Link>
          <span className="mx-2">→</span>
          <span className="text-white">{solution.name}</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300">
                    {city.name}, {city.state}
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {solution.name} in
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {city.name}, {city.state}
                </span>
              </h1>

              <p className="text-2xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
                {solution.description} Specifically designed for {city.name}{" "}
                businesses across {city.industries.slice(0, 3).join(", ")}, and
                other key industries.
              </p>

              {/* Performance Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {Object.entries(solution.stats).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-xl px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  <span>
                    Get {solution.shortName} for {city.name}
                  </span>
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
          </div>
        </section>

        {/* Benefits & Features Grid */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Benefits */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                Key Benefits for {city.name} Businesses
              </h2>
              <div className="space-y-4">
                {solution.benefits.map((benefit, index) => (
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

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-400" />
                Advanced Features
              </h2>
              <div className="space-y-4">
                {solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How {city.name} Businesses Use {solution.shortName}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Real-world applications tailored for {city.name}&apos;s business
              landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <PlayCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {useCase.description}
                </p>
                <div className="text-xs text-cyan-400 font-medium">
                  Popular in: {useCase.industry}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industry Focus */}
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
                {solution.name} solutions specifically optimized for {city.name}
                &apos;s key industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.industries.map((industry, index) => {
                const industryIcons = {
                  Healthcare: Heart,
                  "Healthcare & Medical": Heart,
                  Automotive: Building,
                  "Automotive Dealerships": Building,
                  "Legal Services": Scale,
                  "Home Services": Home,
                  "Real Estate": Building,
                  "E-commerce": BarChart3,
                  "E-commerce & Retail": BarChart3,
                  "Professional Services": Users,
                  Technology: Zap,
                  "Technology & SaaS": Zap,
                  Education: Users,
                  "Education & Training": Users,
                  "Financial Services": TrendingUp,
                  SaaS: Zap,
                  "All Industries": Building,
                  "Multi-location Businesses": Building,
                  "Multi-location businesses": Building,
                  "Service providers": Users,
                  Manufacturing: Building,
                };

                const IconComp =
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
                    <IconComp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">{industry}</h3>
                    <p className="text-sm text-gray-300">
                      Tailored {solution.shortName.toLowerCase()} for{" "}
                      {industry.toLowerCase()} in {city.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
        {/* Competitive Advantage */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30 text-center"
          >
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Why {city.name} Businesses Choose Our {solution.shortName}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              {solution.competitiveAdvantage}
            </p>
            <p className="text-lg text-cyan-300 font-semibold">
              {solution.marketInsights}
            </p>
          </motion.div>
        </section>

        {/* ROI Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-3xl p-12 border border-green-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                {solution.shortName} ROI for {city.name} Businesses
              </h2>
              <p className="text-xl text-gray-300">
                Proven returns on investment with our{" "}
                {solution.name.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/5 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {solution.roi.timeToValue}
                </div>
                <div className="text-white font-semibold mb-2">
                  Time to Value
                </div>
                <div className="text-gray-300 text-sm">
                  Implementation timeline
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {solution.roi.efficiency}
                </div>
                <div className="text-white font-semibold mb-2">
                  Efficiency Gain
                </div>
                <div className="text-gray-300 text-sm">
                  Performance improvement
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {solution.roi.costSavings}
                </div>
                <div className="text-white font-semibold mb-2">
                  Cost Savings
                </div>
                <div className="text-gray-300 text-sm">
                  Average monthly savings
                </div>
              </div>
            </div>
          </motion.div>
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
              {solution.shortName} FAQs for {city.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about {solution.name.toLowerCase()} from{" "}
              {city.name} businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {solution.faqs.map((faq, index) => (
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

        {/* Other Solutions in This City */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Other AI Solutions in {city.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete your {city.name} business automation with our full suite
              of AI solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {allSolutions
              .filter((s) => s.slug !== solution.slug)
              .map((otherSolution, index) => {
                const OtherIconComponent =
                  {
                    "ai-voice-agents": Phone,
                    chatbots: MessageCircle,
                    "video-agents": Video,
                    automation: Cog,
                  }[otherSolution.slug] || Phone;

                return (
                  <motion.div
                    key={otherSolution.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/locations/${city.slug}/${otherSolution.slug}`}
                      className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 h-full"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${otherSolution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <OtherIconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                            {otherSolution.name}
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-400 mt-1">
                            {Object.values(otherSolution.stats)
                              .slice(0, 2)
                              .map((stat, idx) => (
                                <span key={idx} className="text-cyan-400">
                                  {stat}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {otherSolution.description}
                      </p>

                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">
                          Get {otherSolution.shortName} in {city.name}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
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
            <div
              className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <IconComponent className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get {solution.shortName} for Your {city.name} Business?
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join other {city.name} businesses using{" "}
              {solution.name.toLowerCase()} to improve operations and customer
              service. Get started today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg py-5 px-10 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Calendar className="w-6 h-6" />
                <span>
                  Schedule {solution.shortName} Demo for {city.name}
                </span>
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
                <span>Custom {solution.shortName} setup</span>
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
