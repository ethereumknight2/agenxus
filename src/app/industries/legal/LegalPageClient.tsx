"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Building2,
  UserCheck,
  FileText,
  DollarSign,
  AlertTriangle,
  Award,
  Lock,
  Database,
  Zap,
  Target,
  Settings,
  CreditCard,
  Search,
  Gavel,
  BookOpen,
  LucideIcon,
} from "lucide-react";

interface City {
  slug: string;
  name: string;
  state: string;
  population: string;
  metro: string;
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
  shortName: string;
  description: string;
  benefits: string[];
  features: string[];
  useCases: string[];
  industries: string[];
  color: string;
  stats: Record<string, string>;
}

interface LegalData {
  industry: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: Array<{
    problem: string;
    impact: string;
    solution: string;
  }>;
  stats: Array<{
    metric: string;
    label: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
  practiceTypes: Array<{
    type: string;
    specialties: string[];
    commonNeeds: string[];
  }>;
  security: Array<{
    standard: string;
    description: string;
  }>;
  integrations: Array<{
    category: string;
    platforms: string[];
    capabilities: string[];
  }>;
}

interface LegalPageClientProps {
  legalData: LegalData;
  cities: City[];
  solutions: Solution[];
}

// Icon mapping arrays
const useCaseIcons = [
  UserCheck,
  Calendar,
  FileText,
  Database,
  DollarSign,
  AlertTriangle,
  Users,
  Target,
];
const practiceTypeIcons = [Scale, Users, Shield, Building2, FileText, Award];
const securityIcons = [Shield, Award, Lock, Database, FileText, Scale];
const integrationIcons = [Database, BookOpen, FileText, Gavel];

export default function LegalPageClient({
  legalData,
  cities,
  solutions,
}: LegalPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/industries"
              className="hover:text-white transition-colors"
            >
              Industries
            </Link>
            <span>/</span>
            <span className="text-white">Legal Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl">
                <Scale className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              {legalData.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {legalData.subtitle}
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
              {legalData.description}
            </p>

            <div className="flex justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Services ROI Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal AI Results That Build Stronger Practices
            </h2>
            <p className="text-xl text-gray-300">
              Proven outcomes for law firms and legal professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {legalData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2 text-sm">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Practice Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400">
              Transform legal practice pain points into competitive advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {challenge.problem}
                    </h3>
                    <p className="text-purple-400 mb-4 font-medium">
                      {challenge.impact}
                    </p>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Use Cases */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal AI Use Cases
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive automation for every aspect of legal practice
              operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalData.useCases.map((useCase, index) => {
              const IconComponent = useCaseIcons[index % useCaseIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {useCase.description}
                  </p>

                  <div className="space-y-2">
                    {useCase.benefits
                      .slice(0, 3)
                      .map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">
                            {benefit}
                          </span>
                        </div>
                      ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Practice Types Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Practice Types We Serve
            </h2>
            <p className="text-xl text-gray-400">
              Tailored AI solutions for every type of legal practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalData.practiceTypes.map((practice, index) => {
              const IconComponent =
                practiceTypeIcons[index % practiceTypeIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {practice.type}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">
                      SPECIALTIES:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {practice.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">
                      COMMON AUTOMATION NEEDS:
                    </h4>
                    <div className="space-y-2">
                      {practice.commonNeeds.map((need, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Security & Compliance
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade security built for legal industry requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalData.security.map((item, index) => {
              const IconComponent = securityIcons[index % securityIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-indigo-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.standard}
                  </h3>

                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal System Integrations
            </h2>
            <p className="text-xl text-gray-400">
              Seamless connectivity with your existing legal software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalData.integrations.map((integration, index) => {
              const IconComponent =
                integrationIcons[index % integrationIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-purple-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {integration.category}
                  </h3>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {integration.platforms.slice(0, 3).map((platform, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs"
                        >
                          {platform}
                        </span>
                      ))}
                      {integration.platforms.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                          +{integration.platforms.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    {integration.capabilities
                      .slice(0, 3)
                      .map((capability, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">
                            {capability}
                          </span>
                        </div>
                      ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* City-Specific Legal Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal AI Solutions by Location
            </h2>
            <p className="text-xl text-gray-400">
              Serving law firms across Illinois and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities && cities.length > 0 ? (
              cities.slice(0, 6).map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/locations/${city.slug}/legal`}
                    className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                        Legal AI in {city.name}
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-4">
                      Specialized AI solutions for {city.name} law firms and
                      legal professionals. Serving {city.localStats.businesses}{" "}
                      local businesses.
                    </p>

                    <div className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-400">
                Loading city information...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal Solutions Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Technology Integration
            </h2>
            <p className="text-xl text-gray-400">
              Seamless integration with your existing legal systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions && solutions.length > 0 ? (
              solutions.map((solution, index) => {
                // Map solution types to appropriate icons
                const solutionIcons: { [key: string]: LucideIcon } = {
                  "ai-voice-agents": Phone,
                  chatbots: MessageCircle,
                  "video-agents": Users,
                  automation: Zap,
                };

                const IconComponent = solutionIcons[solution.slug] || Phone;

                return (
                  <motion.div
                    key={solution.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group text-center"
                  >
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {solution.name} for Legal
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {solution.description}
                    </p>

                    <div className="space-y-1">
                      {Object.entries(solution.stats).map(([key, value], i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors"
                        >
                          <span className="text-sm font-medium">{value}</span>
                          <span className="text-xs text-gray-500 capitalize">
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-4 text-center text-gray-400">
                Loading legal solutions...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal FAQ */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about AI automation in legal services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do AI voice agents help law firms?",
                answer:
                  "AI voice agents provide 24/7 client intake, handle legal inquiries, schedule consultations, and ensure no potential client call goes unanswered. They can reduce intake time by 50% and increase consultations by 40% while maintaining attorney-client privilege.",
              },
              {
                question:
                  "Are AI solutions secure for attorney-client communications?",
                answer:
                  "Yes, all our legal AI solutions maintain attorney-client privilege with end-to-end encryption, secure data handling, and compliance with bar association requirements. All communications are protected and confidential.",
              },
              {
                question:
                  "Can AI integrate with legal practice management software?",
                answer:
                  "Yes, our AI solutions integrate seamlessly with popular legal practice management platforms including Clio, MyCase, PracticePanther, and others. This ensures client data synchronization and case management workflow integration.",
              },
              {
                question: "How does AI client intake work for law firms?",
                answer:
                  "AI automatically collects client information, assesses case merit, checks for conflicts, determines practice area fit, and schedules consultations. Only qualified, conflict-free cases are forwarded to attorneys, improving efficiency by 30%.",
              },
              {
                question: "What types of law firms benefit from AI automation?",
                answer:
                  "All types of law firms benefit including personal injury, family law, criminal defense, corporate law, immigration, estate planning, and more. Solutions are customized for each practice area's specific needs and compliance requirements.",
              },
              {
                question: "What ROI can law firms expect from AI automation?",
                answer:
                  "Law firms typically see 50% faster client intake, 40% more consultations, 65% less admin work, and 30% higher conversion rates. Most firms see full ROI within 2-3 months of implementation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of law firms using AI to streamline client intake
              and improve case management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="tel:+18722778841"
                className="inline-flex items-center px-8 py-4 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-all duration-300 border border-purple-700"
              >
                Call (872) 277-8841
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <p className="text-purple-200 mt-4 text-sm">
              Free consultation • Attorney-client privilege protected • 30-day
              money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
