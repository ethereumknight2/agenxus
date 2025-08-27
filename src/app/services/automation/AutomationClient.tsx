// /app/services/automation/AutomationClient.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cog,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  Settings,
  Database,
  UserCheck,
  BarChart3,
  Link2,
  Headphones,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Monitor,
  FileText,
  Target,
  Workflow,
  RefreshCw,
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
          <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0 ml-4" />
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

export default function AutomationClient() {
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
            <span className="text-white">Process Automation</span>
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
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl">
                  <Cog className="w-8 h-8 text-indigo-400" />
                </div>
                <span className="text-indigo-400 font-semibold text-lg">
                  Process Automation
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">Eliminate Manual Work</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Scale Without Hiring
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                End-to-end workflow automation that connects your business
                tools, eliminates repetitive tasks, and scales your operations
                efficiently—saving 15+ hours per week with 99.8% accuracy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Automation Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-indigo-400/50 hover:text-indigo-400 transition-all"
                >
                  <Cog className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-400">Hours Saved/Week</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">99.8%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">340%</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Operation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Process Automation */}
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
                What Is Process Automation?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Process automation uses intelligent software to handle
                repetitive business tasks, connect disparate systems, and create
                seamless workflows that operate without human
                intervention—freeing your team to focus on strategic, high-value
                work.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg flex-shrink-0">
                    <Workflow className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Workflow Orchestration
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Connect multiple tools and systems to create end-to-end
                      automated processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg flex-shrink-0">
                    <Database className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Data Processing
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Automatically transfer, transform, and validate data
                      between systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Continuous Optimization
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Monitor and improve automated processes based on
                      performance data
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
              className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Manual Process vs Automation
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Manual Tasks
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        40+ hrs
                      </div>
                      <div className="text-xs text-gray-400">
                        Weekly overhead
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Automated</div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        0 hrs
                      </div>
                      <div className="text-xs text-gray-400">
                        Human time needed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        95%
                      </div>
                      <div className="text-xs text-gray-400">Accuracy rate</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        99.8%
                      </div>
                      <div className="text-xs text-gray-400">Accuracy rate</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        Business hrs
                      </div>
                      <div className="text-xs text-gray-400">
                        Operation time
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">
                        Always running
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    80% Time Savings
                  </div>
                  <div className="text-sm text-gray-300">
                    With improved accuracy
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
              Common Process Automation Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data entry to customer onboarding, automation transforms how
              businesses handle routine operations and scale efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Entry & Migration",
                description:
                  "Automatically transfer data between systems, validate entries, and maintain data integrity across platforms.",
                benefits: [
                  "99.8% accuracy rate",
                  "10x faster processing",
                  "Eliminate human errors",
                ],
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Document Processing",
                description:
                  "Extract data from documents, generate reports, and automatically file or distribute information.",
                benefits: [
                  "Instant processing",
                  "OCR integration",
                  "Automated filing",
                ],
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Onboarding",
                description:
                  "Automate welcome sequences, account setup, document collection, and initial training delivery.",
                benefits: [
                  "Faster time-to-value",
                  "Consistent experience",
                  "Reduced manual work",
                ],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Reporting & Analytics",
                description:
                  "Generate automated reports, send scheduled updates, and trigger alerts based on data thresholds.",
                benefits: [
                  "Real-time insights",
                  "Automated distribution",
                  "Custom dashboards",
                ],
              },
              {
                icon: <Link2 className="w-8 h-8" />,
                title: "System Integration",
                description:
                  "Connect disparate business tools and ensure seamless data flow between platforms and departments.",
                benefits: [
                  "Unified workflows",
                  "Reduced silos",
                  "Real-time sync",
                ],
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Task & Project Management",
                description:
                  "Automatically assign tasks, track progress, send reminders, and update project statuses.",
                benefits: [
                  "Improved accountability",
                  "Automatic updates",
                  "Better visibility",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all group"
              >
                <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 bg-gradient-to-r from-blue-950/30 to-indigo-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries Benefiting from Process Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Process automation delivers the highest impact for businesses with
              repetitive workflows, data processing needs, and complex
              operational procedures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Professional Services",
                description:
                  "Client onboarding, project management, time tracking, invoice generation, and reporting automation.",
                stats: "25+ hours saved per week",
              },
              {
                industry: "Manufacturing",
                description:
                  "Inventory management, quality control reporting, production scheduling, and supply chain coordination.",
                stats: "35% efficiency improvement",
              },
              {
                industry: "Financial Services",
                description:
                  "Compliance reporting, client account management, document processing, and regulatory filings.",
                stats: "90% faster processing",
              },
              {
                industry: "Healthcare",
                description:
                  "Patient data management, insurance processing, appointment scheduling, and medical records automation.",
                stats: "50% administrative reduction",
              },
              {
                industry: "E-commerce",
                description:
                  "Order processing, inventory updates, customer communications, and fulfillment coordination.",
                stats: "60% order processing speed",
              },
              {
                industry: "Human Resources",
                description:
                  "Employee onboarding, payroll processing, benefits administration, and performance tracking.",
                stats: "40% faster onboarding",
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
                <div className="text-indigo-400 font-semibold">
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
              Our Automation Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From workflow analysis to optimization, we follow a proven
              methodology that ensures maximum efficiency and ROI from your
              automation investment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Process Analysis",
                description:
                  "Map current workflows, identify bottlenecks, and prioritize automation opportunities based on impact and complexity.",
              },
              {
                step: "2",
                title: "System Architecture",
                description:
                  "Design automation workflows, select integration tools, and create detailed technical specifications for implementation.",
              },
              {
                step: "3",
                title: "Build & Test",
                description:
                  "Develop automated workflows, integrate systems, and thoroughly test all processes before deployment.",
              },
              {
                step: "4",
                title: "Deploy & Monitor",
                description:
                  "Launch automation with monitoring dashboards and continuous optimization based on performance metrics.",
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
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

      {/* Tool Integrations */}
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
              Automation Tools & Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage best-in-class automation platforms and can integrate
              with virtually any business tool through APIs and webhooks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Automation Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    No-Code/Low-Code
                  </div>
                  <div className="text-gray-300 text-sm">
                    n8n • Make.com • Zapier • Microsoft Power Automate
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Enterprise
                  </div>
                  <div className="text-gray-300 text-sm">
                    UiPath • Automation Anywhere • Blue Prism
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Custom Solutions
                  </div>
                  <div className="text-gray-300 text-sm">
                    Python • Node.js • API Integrations
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-indigo-400 mb-6">
                Business Systems
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    CRM & Sales
                  </div>
                  <div className="text-gray-300 text-sm">
                    Salesforce • HubSpot • Pipedrive • Zoho
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    ERP & Finance
                  </div>
                  <div className="text-gray-300 text-sm">
                    QuickBooks • NetSuite • SAP • Xero
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Project Management
                  </div>
                  <div className="text-gray-300 text-sm">
                    Asana • Monday.com • Jira • Trello
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Data & Analytics
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Databases</div>
                  <div className="text-gray-300 text-sm">
                    MySQL • PostgreSQL • MongoDB • Airtable
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">Analytics</div>
                  <div className="text-gray-300 text-sm">
                    Google Analytics • Mixpanel • Tableau
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">
                    Cloud Platforms
                  </div>
                  <div className="text-gray-300 text-sm">
                    AWS • Google Cloud • Azure • Heroku
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
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
              Advanced Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond basic task automation, we implement intelligent workflows
              with decision-making, error handling, and adaptive optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Intelligence & Logic
              </h3>
              <div className="space-y-4">
                {[
                  "Conditional logic and decision trees",
                  "AI-powered data classification and routing",
                  "Machine learning for process optimization",
                  "Natural language processing for document extraction",
                  "Pattern recognition for anomaly detection",
                  "Predictive analytics for workflow triggers",
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
                Reliability & Monitoring
              </h3>
              <div className="space-y-4">
                {[
                  "Error handling and automatic retry mechanisms",
                  "Real-time monitoring and alert systems",
                  "Performance tracking and optimization suggestions",
                  "Audit trails and compliance reporting",
                  "Backup and failover procedures",
                  "Scalable architecture for growing demands",
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
              Process Automation FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about implementing workflow automation in your
              business.
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem
              question="Which processes are good candidates for automation?"
              answer="The best candidates are repetitive, rule-based tasks that don't require human creativity or judgment. This includes data entry, report generation, file transfers, email notifications, appointment scheduling, and routine approvals. We help identify the highest-impact automation opportunities in your business."
            />
            <FAQItem
              question="How long does it take to implement process automation?"
              answer="Simple automations can be deployed in 1-2 weeks, while complex multi-system integrations may take 4-8 weeks. The timeline depends on the number of systems involved, data complexity, and approval processes. We provide detailed project timelines during the planning phase."
            />
            <FAQItem
              question="Will automation work with our existing software?"
              answer="Yes, we can integrate with virtually any business software through APIs, webhooks, or direct database connections. Most modern tools have built-in integration capabilities, and for legacy systems, we can create custom connectors to ensure seamless data flow."
            />
            <FAQItem
              question="What happens if an automated process encounters an error?"
              answer="We build comprehensive error handling into all automations, including automatic retries, fallback procedures, and human escalation protocols. You'll receive immediate notifications of any issues, and our monitoring systems track all process performance in real-time."
            />
            <FAQItem
              question="How do you ensure data security in automated workflows?"
              answer="We implement enterprise-grade security including encrypted data transfer, secure authentication, access controls, and audit logging. All automations comply with relevant data protection regulations, and we can work within your existing security frameworks and policies."
            />
            <FAQItem
              question="Can we modify automated processes after they're implemented?"
              answer="Absolutely. We build flexible automation architectures that can be easily modified as your business needs change. We provide training for your team and ongoing support to help you optimize and expand your automated workflows over time."
            />
            <FAQItem
              question="What kind of ROI can we expect from process automation?"
              answer="Most businesses see ROI within 3-6 months through reduced labor costs, improved accuracy, and faster processing times. Typical benefits include 15-40 hours of time savings per week, 90%+ reduction in errors, and the ability to scale operations without adding headcount."
            />
            <FAQItem
              question="Do we need technical expertise to manage automated processes?"
              answer="No technical expertise is required for day-to-day operations. We provide user-friendly dashboards for monitoring and basic configuration changes. For more complex modifications, we offer ongoing support and can train your team on the automation platforms we implement."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Eliminate Manual Work?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your operations with intelligent process automation that
              saves time, reduces errors, and scales your business without
              adding headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all hover:scale-105 shadow-lg"
              >
                Get Automation Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-indigo-400/50 hover:text-indigo-400 transition-all"
              >
                <Cog className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free consultation • Process analysis • Custom automation plan
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
