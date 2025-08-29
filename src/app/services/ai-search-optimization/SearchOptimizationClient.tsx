"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  TrendingUp,
  Phone,
  Zap,
  Target,
  Brain,
  Layers,
  ShieldCheck,
  Globe,
  Cpu,
} from "lucide-react";

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

export default function SearchOptimizationClient() {
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
            <span className="text-white">AI Search Optimization</span>
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
                <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl">
                  <Search className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-semibold text-lg">
                  AI Search Optimization
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">Get Cited by ChatGPT &</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI Search Engines
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Be the brand AI engines cite—not just the one that ranks. We
                optimize your content for ChatGPT, Perplexity, and Google AI
                Overviews while building lightning-fast websites that score 95+
                on PageSpeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  Get Free AEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">+250%</div>
                  <div className="text-sm text-gray-400">AI Citations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">95+</div>
                  <div className="text-sm text-gray-400">PageSpeed Score</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">3x</div>
                  <div className="text-sm text-gray-400">Higher Conversion</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">+180%</div>
                  <div className="text-sm text-gray-400">AI Visibility</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is AI Search Optimization */}
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
                What Is Answer Engine Optimization (AEO)?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Traditional SEO targets Google&apos;s old algorithm. But
                today&apos;s users ask ChatGPT, Perplexity, and AI Overviews for
                direct answers. AEO ensures your brand becomes the cited source
                AI engines reference when answering user questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg flex-shrink-0">
                    <Brain className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      AI Engine Citations
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Get referenced by ChatGPT, Perplexity, Claude, and
                      Google&apos;s AI Overviews as the authoritative source
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg flex-shrink-0">
                    <Layers className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Structured Data & Schema
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Implement schema.org markup, FAQ structures, and semantic
                      entities that AI engines prioritize
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Lightning-Fast Websites
                    </h4>
                    <p className="text-gray-300 text-sm">
                      React/Next.js development with 95+ PageSpeed scores that
                      convert AI traffic effectively
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
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Traditional SEO vs AEO
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Traditional SEO
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xl font-bold text-red-400 mb-1">
                        Keyword Focus
                      </div>
                      <div className="text-xs text-gray-400">Page rankings</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Answer Engine Optimization
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xl font-bold text-green-400 mb-1">
                        Question Focus
                      </div>
                      <div className="text-xs text-gray-400">AI citations</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xl font-bold text-red-400 mb-1">
                        0% AI Traffic
                      </div>
                      <div className="text-xs text-gray-400">
                        Invisible to AI
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xl font-bold text-green-400 mb-1">
                        +180% Citations
                      </div>
                      <div className="text-xs text-gray-400">
                        AI-first visibility
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-400/20">
                  <div className="text-lg font-bold text-emerald-400 mb-1">
                    Future-Proof Your Search Strategy
                  </div>
                  <div className="text-sm text-gray-300">
                    Be visible where search is heading
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
              Common Use Cases for AI Search Optimization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses use AEO to dominate AI search results and build
              authority in intelligent engines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Brand Authority Building",
                description:
                  "Become the go-to source that AI engines consistently cite for your industry expertise and thought leadership.",
                benefits: [
                  "Consistent AI mentions",
                  "Industry authority status",
                  "Thought leadership recognition",
                ],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Local Business Visibility",
                description:
                  "Capture local searches through AI engines with optimized business profiles and location-based content.",
                benefits: [
                  "Local AI search dominance",
                  "Geographic relevance",
                  "Community authority",
                ],
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Product Positioning",
                description:
                  "Ensure AI engines recommend your solutions when prospects ask for comparisons or recommendations.",
                benefits: [
                  "Competitive advantage",
                  "Product recommendation priority",
                  "Purchase influence",
                ],
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Google AI Overview Ready",
                description:
                  "Structure content to be selected for AI-generated summaries at the top of Google search results.",
                benefits: [
                  "Featured in AI summaries",
                  "Zero-click optimization",
                  "Search result dominance",
                ],
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Website Performance",
                description:
                  "Lightning-fast React/Next.js sites that convert AI traffic with 95+ PageSpeed scores.",
                benefits: [
                  "95+ PageSpeed score",
                  "Higher conversion rates",
                  "Better user experience",
                ],
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Automated SEO",
                description:
                  "Reduce manual work with automated structured data implementation across your entire site.",
                benefits: [
                  "Automated optimization",
                  "Scalable implementation",
                  "Consistent markup",
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
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-emerald-950/30 to-teal-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries Using AI Search Optimization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AEO is critical for businesses where trust, expertise, and
              credibility drive customer decisions and search behavior.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare & Medical",
                description:
                  "Get cited for medical expertise, treatment information, and health advice by AI engines.",
                stats: "300% more authority citations",
              },
              {
                industry: "Legal Services",
                description:
                  "Establish thought leadership in legal topics and get referenced for legal expertise.",
                stats: "250% increase in expert mentions",
              },
              {
                industry: "Technology & SaaS",
                description:
                  "Dominate technical discussions and product comparisons in AI search results.",
                stats: "180% more product recommendations",
              },
              {
                industry: "Professional Services",
                description:
                  "Build authority in consulting, finance, and business services through AI citations.",
                stats: "220% boost in credibility signals",
              },
              {
                industry: "Real Estate",
                description:
                  "Get featured in location-based searches and market analysis by AI engines.",
                stats: "190% local search improvement",
              },
              {
                industry: "Manufacturing",
                description:
                  "Establish expertise in industrial topics and B2B solutions through AI visibility.",
                stats: "160% industry authority growth",
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
              How AI Search Optimization Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process to get your business cited by AI engines and
              dominate the future of search.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "AI Audit & Analysis",
                description:
                  "Comprehensive analysis of your current AI search visibility and competitive landscape to identify optimization opportunities.",
              },
              {
                step: "2",
                title: "Content & Schema Optimization",
                description:
                  "Implement structured data, optimize content for AI understanding, and create question-focused content that gets cited.",
              },
              {
                step: "3",
                title: "Website Performance",
                description:
                  "Build lightning-fast React/Next.js sites with 95+ PageSpeed scores that convert AI traffic effectively.",
              },
              {
                step: "4",
                title: "Monitor & Optimize",
                description:
                  "Track AI citations, monitor performance, and continuously optimize for better visibility across all AI engines.",
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
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
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

      {/* Technology Stack */}
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
              Technology & Implementation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern tools and technologies we use to optimize your content for
              AI engines and build high-performance websites.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                AI Optimization
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Schema & Structured Data
                  </div>
                  <div className="text-gray-300 text-sm">
                    Schema.org • JSON-LD • FAQ Markup
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Entity Optimization
                  </div>
                  <div className="text-gray-300 text-sm">
                    Knowledge Graphs • Entity Mapping • Semantic SEO
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Website Development
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Modern Frameworks
                  </div>
                  <div className="text-gray-300 text-sm">
                    React • Next.js • TypeScript
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Performance
                  </div>
                  <div className="text-gray-300 text-sm">
                    95+ PageSpeed • Core Web Vitals • CDN
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Monitoring & Analytics
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    AI Citation Tracking
                  </div>
                  <div className="text-gray-300 text-sm">
                    ChatGPT • Perplexity • Claude Mentions
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Performance Analytics
                  </div>
                  <div className="text-gray-300 text-sm">
                    Traffic Quality • Conversion Tracking • ROI
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
              AI Search Optimization ROI
            </h2>
            <p className="text-xl text-gray-300">
              See the potential return on investment from AI search
              optimization.
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$8,500</div>
                <div className="text-lg text-gray-300 mb-1">
                  Traditional SEO Spend
                </div>
                <div className="text-sm text-gray-400">
                  For minimal AI visibility
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  $3,000
                </div>
                <div className="text-lg text-gray-300 mb-1">AEO Investment</div>
                <div className="text-sm text-gray-400">
                  Full AI optimization
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  $12,000
                </div>
                <div className="text-lg text-gray-300 mb-1">Monthly Value</div>
                <div className="text-sm text-gray-400">
                  Increased visibility + leads
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg text-emerald-400 font-semibold mb-4">
                ROI: 400% in the first 6 months
              </div>
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all hover:scale-105 shadow-lg"
              >
                Calculate Your AEO ROI
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
              AI Search Optimization FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about AEO and getting cited by AI engines.
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem
              question="How do you get my business cited by ChatGPT and AI engines?"
              answer="We optimize your content structure, implement semantic markup, and create authoritative content that AI engines recognize as trustworthy sources. This includes schema.org markup, entity optimization, and question-focused content formatting."
            />
            <FAQItem
              question="What is Answer Engine Optimization (AEO)?"
              answer="AEO is the practice of optimizing content to be referenced in AI-generated answers rather than just traditional search rankings. It focuses on helping AI engines understand and cite your content when answering user questions."
            />
            <FAQItem
              question="How is this different from traditional SEO?"
              answer="Traditional SEO focuses on ranking web pages for keywords. AEO focuses on getting your content cited in AI-generated responses. We combine both approaches plus high-performance web development for comprehensive search domination."
            />
            <FAQItem
              question="How quickly can I see results from AI search optimization?"
              answer="Most clients see initial AI citations within 4-6 weeks. Full optimization benefits typically appear within 2-3 months as AI engines index and recognize your improved content structure."
            />
            <FAQItem
              question="Do you track AI citations and performance?"
              answer="Yes, we monitor your brand mentions across ChatGPT, Perplexity, Google AI, and other platforms. You receive detailed reports showing citation frequency, context, and traffic quality from AI search sources."
            />
            <FAQItem
              question="Can this replace my current SEO strategy?"
              answer="AEO complements traditional SEO rather than replacing it. However, as AI search grows, businesses without AI optimization become increasingly invisible to modern users who rely on AI for answers."
            />
            <FAQItem
              question="What makes your AEO approach different?"
              answer="We combine AI optimization with high-performance website development. Our React/Next.js sites score 95+ on PageSpeed Insights and are optimized for both AI engines and human users, maximizing conversion rates."
            />
            <FAQItem
              question="How much does AI search optimization cost?"
              answer="Our AEO packages typically start at $2,500 and include comprehensive auditing, optimization implementation, structured data markup, and ongoing monitoring. Enterprise solutions are available for larger organizations."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Dominate AI Search Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking businesses already getting cited by ChatGPT,
              Perplexity, and Google AI. Get your free AEO audit and start
              building AI search authority today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all hover:scale-105 shadow-lg"
              >
                Book Free AEO Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Free audit • Custom strategy • 4-6 week implementation
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
