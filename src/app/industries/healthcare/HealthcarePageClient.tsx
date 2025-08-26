"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
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
  Stethoscope,
  Building2,
  UserCheck,
  FileText,
  Pill,
  AlertTriangle,
  MapPin,
  Award,
  Lock,
  Database,
  Zap,
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

interface HealthcareData {
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
  compliance: Array<{
    standard: string;
    description: string;
  }>;
  practiceTypes: Array<{
    type: string;
    specialties: string[];
    commonNeeds: string[];
  }>;
}

interface HealthcarePageClientProps {
  healthcareData: HealthcareData;
  cities: City[];
  solutions: Solution[];
}

// Icon mapping arrays
const useCaseIcons = [
  Calendar,
  Stethoscope,
  FileText,
  Pill,
  Heart,
  AlertTriangle,
];
const practiceTypeIcons = [Building2, Heart, Users, UserCheck, Clock, Database];
const complianceIcons = [Shield, Award, Lock, Database];

export default function HealthcarePageClient({
  healthcareData,
  cities,
  solutions,
}: HealthcarePageClientProps) {
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
            <span className="text-white">Healthcare</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6">
              {healthcareData.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {healthcareData.subtitle}
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
              {healthcareData.description}
            </p>

            <div className="flex justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare ROI Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-green-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare AI Results That Matter
            </h2>
            <p className="text-xl text-gray-300">
              Proven outcomes for medical practices nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {healthcareData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
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

      {/* Healthcare Challenges & Solutions */}
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
              Healthcare Practice Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400">
              Transform common healthcare pain points into competitive
              advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcareData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-500/20 rounded-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {challenge.problem}
                    </h3>
                    <p className="text-red-400 mb-4 font-medium">
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

      {/* Healthcare Use Cases */}
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
              Healthcare AI Use Cases
            </h2>
            <p className="text-xl text-gray-400">
              Specialized automation for every aspect of patient care and
              administration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareData.useCases.map((useCase, index) => {
              const IconComponent = useCaseIcons[index % useCaseIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{useCase.description}</p>

                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Administrative Automation Section */}
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
              Healthcare Administrative Automation
            </h2>
            <p className="text-xl text-gray-400">
              Automate complex healthcare workflows and reduce administrative
              overhead
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prior Authorizations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                Prior Authorizations
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                Automate prior auth requests and follow-ups with insurance
                companies
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Auto-submit requests
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Track approval status
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Appeal denials automatically
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-blue-500/20">
                <div className="text-blue-400 font-bold text-lg">75%</div>
                <div className="text-gray-400 text-xs">Faster approvals</div>
              </div>
            </motion.div>

            {/* Referral Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-xl p-6 border border-green-500/30 hover:border-green-400 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                Referral Management
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                Streamline specialist referrals and coordinate patient care
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Find specialist availability
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Send medical records
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Follow up on appointments
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-green-500/20">
                <div className="text-green-400 font-bold text-lg">90%</div>
                <div className="text-gray-400 text-xs">
                  Successful connections
                </div>
              </div>
            </motion.div>

            {/* Claims Processing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-6 border border-orange-500/30 hover:border-orange-400 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                Claims Processing
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                Automate insurance claims and reduce payment delays
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Submit clean claims
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Track claim status
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Resubmit rejections
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-orange-500/20">
                <div className="text-orange-400 font-bold text-lg">95%</div>
                <div className="text-gray-400 text-xs">First-pass rate</div>
              </div>
            </motion.div>

            {/* Eligibility Verification */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                Eligibility Verification
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                Verify insurance coverage before appointments automatically
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Real-time verification
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Benefits breakdown
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs">
                    Patient notifications
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-purple-500/20">
                <div className="text-purple-400 font-bold text-lg">85%</div>
                <div className="text-gray-400 text-xs">Fewer denials</div>
              </div>
            </motion.div>
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
              Healthcare Practice Types We Serve
            </h2>
            <p className="text-xl text-gray-400">
              Tailored AI solutions for every type of healthcare practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareData.practiceTypes.map((practice, index) => {
              const IconComponent =
                practiceTypeIcons[index % practiceTypeIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {practice.type}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      SPECIALTIES:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {practice.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">
                      COMMON AUTOMATION NEEDS:
                    </h4>
                    <div className="space-y-2">
                      {practice.commonNeeds.map((need, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
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

      {/* HIPAA Compliance Section */}
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade security built for healthcare regulations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcareData.compliance.map((item, index) => {
              const IconComponent =
                complianceIcons[index % complianceIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30 hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.standard}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* City-Specific Healthcare Services */}
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
              Healthcare AI Solutions by Location
            </h2>
            <p className="text-xl text-gray-400">
              Serving medical practices across Illinois and beyond
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
                    href={`/locations/${city.slug}/healthcare`}
                    className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Healthcare AI in {city.name}
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-4">
                      Specialized AI solutions for {city.name} medical
                      practices, clinics, and healthcare systems. Serving{" "}
                      {city.localStats.businesses} local businesses.
                    </p>

                    <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
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

      {/* Healthcare Solutions Integration */}
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
              Healthcare Technology Integration
            </h2>
            <p className="text-xl text-gray-400">
              Seamless integration with your existing healthcare systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions && solutions.length > 0 ? (
              solutions.map((solution, index) => {
                // Map solution types to appropriate icons since your data uses colors instead
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
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group text-center"
                  >
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {solution.name} for Healthcare
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {solution.description}
                    </p>

                    {/* Display stats from your data structure */}
                    <div className="space-y-1">
                      {Object.entries(solution.stats).map(([key, value], i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors"
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
                Loading healthcare solutions...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Healthcare FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare AI Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about AI automation in healthcare
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Are your AI solutions HIPAA compliant?",
                answer:
                  "Yes, all our healthcare AI solutions are fully HIPAA compliant with end-to-end encryption, audit trails, and secure data handling to protect patient information.",
              },
              {
                question:
                  "How do AI voice agents improve healthcare practices?",
                answer:
                  "AI voice agents provide 24/7 patient support, automate appointment scheduling, reduce no-shows through intelligent reminders, and free up staff to focus on patient care instead of administrative tasks.",
              },
              {
                question:
                  "Can AI agents integrate with existing healthcare systems?",
                answer:
                  "Yes, our AI solutions integrate seamlessly with popular EHR systems, practice management software, and healthcare communication platforms commonly used by medical practices.",
              },
              {
                question:
                  "What types of healthcare practices benefit most from AI automation?",
                answer:
                  "All types of healthcare practices benefit, including primary care, specialty clinics, dental practices, mental health providers, and urgent care centers. High-volume practices see the greatest impact on efficiency.",
              },
              {
                question:
                  "How quickly can healthcare AI solutions be implemented?",
                answer:
                  "Most healthcare AI implementations are completed within 2-4 weeks, including system integration, staff training, and HIPAA compliance setup. We provide full onboarding support.",
              },
              {
                question: "What kind of ROI can healthcare practices expect?",
                answer:
                  "Healthcare practices typically see 35% more appointments booked, 60% reduction in no-shows, and 45% less time spent on administrative tasks, leading to significant revenue increases and cost savings.",
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of healthcare practices using AI to improve patient
              care and reduce administrative burden.
            </p>

            <div className="flex justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <p className="text-blue-200 mt-4 text-sm">
              HIPAA-compliant consultation • No setup fees • 30-day money-back
              guarantee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
