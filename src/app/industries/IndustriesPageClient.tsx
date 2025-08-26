"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Car,
  Home,
  Scale,
  Wrench,
  UtensilsCrossed,
  Brain,
  Shield,
  Workflow,
  TrendingUp,
  Calendar,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  FileText,
  DollarSign,
  Target,
  Zap,
  Building,
  LucideIcon,
} from "lucide-react";

// Icon mapping for industries
const industryIcons: Record<string, LucideIcon> = {
  Heart,
  Car,
  Home,
  Scale,
  Wrench,
  UtensilsCrossed,
};

// Icon mapping for features
const featureIcons: Record<string, LucideIcon> = {
  Brain,
  Shield,
  Workflow,
  TrendingUp,
};

interface Industry {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  keyBenefits: string[];
  commonUseCases: string[];
  practiceTypes: string[];
  complianceFeatures: string[];
  gradient: string;
}

interface AutomationArea {
  area: string;
  description: string;
  applicableIndustries: string[];
  averageImprovement: string;
}

interface IndustriesData {
  title: string;
  subtitle: string;
  description: string;
  overviewStats: Array<{
    metric: string;
    label: string;
    description: string;
  }>;
  industries: Industry[];
  whyIndustrySpecific: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  commonAutomationAreas: AutomationArea[];
}

interface IndustriesPageClientProps {
  industriesData: IndustriesData;
}

export default function IndustriesPageClient({
  industriesData,
}: IndustriesPageClientProps) {
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
            <span className="text-white">Industries</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl">
                <Building className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {industriesData.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {industriesData.subtitle}
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
              {industriesData.description}
            </p>

            <div className="flex justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industriesData.overviewStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
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
              AI Solutions by Industry
            </h2>
            <p className="text-xl text-gray-400">
              Choose your industry for specialized automation solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.industries.map((industry, index) => {
              const IconComponent = industryIcons[industry.icon];

              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`p-4 bg-gradient-to-br ${industry.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {industry.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">
                      {industry.shortDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        KEY BENEFITS:
                      </h4>
                      <div className="space-y-2">
                        {industry.keyBenefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practice Types */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        SERVES:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.practiceTypes.slice(0, 3).map((type, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                          >
                            {type}
                          </span>
                        ))}
                        {industry.practiceTypes.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                            +{industry.practiceTypes.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="font-medium">
                        Explore {industry.name} AI
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific AI */}
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
              Why Industry-Specific AI Matters
            </h2>
            <p className="text-xl text-gray-400">
              Generic solutions can&apos;t match the precision of
              industry-tailored AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.whyIndustrySpecific.map((feature, index) => {
              const IconComponent = featureIcons[feature.icon];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Automation Areas */}
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
              Common Automation Areas
            </h2>
            <p className="text-xl text-gray-400">
              Core business processes we automate across all industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.commonAutomationAreas.map((area, index) => {
              const areaIcons = [
                Phone,
                Calendar,
                Target,
                DollarSign,
                FileText,
                Users,
              ];
              const IconComponent = areaIcons[index % areaIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {area.area}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">
                    {area.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-blue-400 mb-2">
                      APPLICABLE TO:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {area.applicableIndustries.map((industry, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">
                        {area.averageImprovement}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries FAQ */}
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
              Common questions about industry-specific automation
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Why do I need industry-specific AI automation?",
                answer:
                  "Industry-specific AI automation understands your unique terminology, workflows, compliance requirements, and customer expectations. This results in better accuracy, faster implementation, and higher ROI compared to generic solutions.",
              },
              {
                question: "Which industries do you serve?",
                answer:
                  "We serve healthcare, automotive, real estate, legal services, home services, restaurants, retail, construction, and many other industries. Each solution is customized for industry-specific needs and compliance requirements.",
              },
              {
                question:
                  "How do you ensure compliance for regulated industries?",
                answer:
                  "We build compliance into every industry solution - HIPAA for healthcare, attorney-client privilege for legal, licensing requirements for contractors, and more. All solutions include necessary security measures and audit trails.",
              },
              {
                question:
                  "Can AI automation integrate with industry-specific software?",
                answer:
                  "Yes, our AI solutions integrate with industry-standard software including EHR systems, CRM platforms, DMS for automotive, MLS for real estate, practice management software, and many other vertical-specific tools.",
              },
              {
                question:
                  "What kind of ROI can I expect from industry-specific AI?",
                answer:
                  "Most businesses see 3.2x ROI within 6 months, with industry-specific improvements like 35% more appointments (healthcare), 40% more qualified leads (automotive), or 55% more service calls (home services).",
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

      {/* Next Steps CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a customized AI solution designed specifically for your
              business type and industry requirements.
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
              Free consultation • Industry expertise • Custom implementation
              plan
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
