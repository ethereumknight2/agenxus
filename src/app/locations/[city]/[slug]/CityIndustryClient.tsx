// /app/locations/[city]/[slug]/CityIndustryClient.tsx - Part 1
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { City, Solution } from "@/data/cities";
import {
  Car,
  Heart,
  Scale,
  Home,
  Building,
  Briefcase,
  TrendingUp,
  Cpu,
  Factory,
  ShoppingBag,
  Phone,
  MessageCircle,
  Video,
  Cog,
  ArrowRight,
  Calendar,
  CheckCircle,
  AlertTriangle,
  MapPin,
} from "lucide-react";

interface CityIndustryClientProps {
  city: City;
  industry: string;
  industryName: string;
  solutions: Solution[];
}

// Industry-specific data with challenges and solution benefits
const INDUSTRY_DATA: Record<
  string,
  {
    name: string;
    icon: any;
    description: string;
    challenges: Array<{
      problem: string;
      impact: string;
      solution: string;
    }>;
    solutionBenefits: Record<string, string[]>;
    stats: Array<{
      metric: string;
      label: string;
      improvement: string;
    }>;
  }
> = {
  automotive: {
    name: "Automotive & Dealerships",
    icon: Car,
    description:
      "Complete AI automation solutions for car dealerships, auto service centers, and automotive businesses",
    challenges: [
      {
        problem: "Missed Sales Opportunities",
        impact:
          "Average dealership loses 35% of potential customers to unanswered calls during peak hours",
        solution:
          "24/7 AI voice agents qualify leads instantly and schedule appointments even after hours",
      },
      {
        problem: "Slow Lead Response Time",
        impact:
          "75% of automotive leads go to competitors when response time exceeds 5 minutes",
        solution:
          "AI responds to inquiries within seconds, capturing hot leads before competitors",
      },
      {
        problem: "Service Department Bottlenecks",
        impact:
          "Service scheduling delays result in $50,000+ monthly revenue loss for average dealership",
        solution:
          "Automated service scheduling and appointment management increase capacity by 40%",
      },
      {
        problem: "Unqualified Lead Waste",
        impact:
          "Sales teams spend 60% of time on unqualified prospects, reducing actual sales activity",
        solution:
          "AI pre-qualifies leads by budget, timeline, and buying intent before handoff",
      },
    ],
    solutionBenefits: {
      "ai-voice-agents": [
        "Handle inventory inquiries 24/7",
        "Qualify leads by budget and timeline",
        "Schedule test drives automatically",
        "Route service calls to right department",
      ],
      chatbots: [
        "Answer pricing questions instantly",
        "Capture leads from website visitors",
        "Provide vehicle comparisons",
        "Schedule service appointments",
      ],
      "video-agents": [
        "Virtual vehicle walkarounds",
        "Personalized financing presentations",
        "Service explanation videos",
        "Customer testimonial delivery",
      ],
      automation: [
        "Follow-up sequence automation",
        "Service reminder workflows",
        "Lead scoring and routing",
        "Inventory alert systems",
      ],
    },
    stats: [
      {
        metric: "40%",
        label: "More Qualified Leads",
        improvement: "Higher conversion rates",
      },
      {
        metric: "75%",
        label: "Faster Response Time",
        improvement: "Beat competitors to leads",
      },
      {
        metric: "35%",
        label: "Service Revenue Increase",
        improvement: "More appointments booked",
      },
      {
        metric: "24/7",
        label: "Lead Capture Coverage",
        improvement: "Never miss opportunities",
      },
    ],
  },
  healthcare: {
    name: "Healthcare & Medical",
    icon: Heart,
    description:
      "HIPAA-compliant AI automation for medical practices, clinics, and healthcare facilities",
    challenges: [
      {
        problem: "Missed Appointment Scheduling",
        impact:
          "Medical practices lose $200+ per missed appointment, with 30% of calls going unanswered",
        solution:
          "AI handles appointment scheduling 24/7 with HIPAA-compliant patient verification",
      },
      {
        problem: "Patient Communication Overload",
        impact:
          "Staff spend 40% of time on routine patient communications instead of care",
        solution:
          "Automated patient intake, appointment reminders, and prescription refill requests",
      },
      {
        problem: "Emergency After-Hours Calls",
        impact: "Critical patient calls go to voicemail outside business hours",
        solution:
          "AI triages calls, routes emergencies appropriately, and schedules urgent appointments",
      },
      {
        problem: "Insurance Verification Delays",
        impact:
          "Manual insurance verification creates patient wait times and billing delays",
        solution:
          "Automated insurance verification and pre-authorization processing",
      },
    ],
    solutionBenefits: {
      "ai-voice-agents": [
        "HIPAA-compliant patient interactions",
        "Appointment scheduling and reminders",
        "Prescription refill requests",
        "Emergency call triage and routing",
      ],
      chatbots: [
        "Patient portal assistance",
        "Symptom checker integration",
        "Insurance information collection",
        "Pre-visit intake forms",
      ],
      "video-agents": [
        "Patient education videos",
        "Treatment explanation presentations",
        "Post-care instruction delivery",
        "Telehealth appointment coordination",
      ],
      automation: [
        "Appointment reminder workflows",
        "Insurance verification processing",
        "Patient follow-up sequences",
        "Billing and payment automation",
      ],
    },
    stats: [
      {
        metric: "50%",
        label: "Fewer No-Shows",
        improvement: "Automated reminders",
      },
      {
        metric: "60%",
        label: "Faster Patient Intake",
        improvement: "Streamlined processes",
      },
      {
        metric: "24/7",
        label: "Patient Access",
        improvement: "Always available",
      },
      {
        metric: "HIPAA",
        label: "Compliant",
        improvement: "Secure and private",
      },
    ],
  },
  "real-estate": {
    name: "Real Estate",
    icon: Home,
    description:
      "AI solutions for real estate agents, brokerages, and property management companies",
    challenges: [
      {
        problem: "Lead Response Speed",
        impact:
          "Real estate leads have 5-minute attention span - 78% go to fastest responder",
        solution:
          "AI responds instantly to inquiries and schedules showings within minutes",
      },
      {
        problem: "Showing Coordination Chaos",
        impact:
          "Agents spend 30% of time coordinating showings instead of selling",
        solution:
          "Automated showing schedules with calendar integration and client notifications",
      },
      {
        problem: "Unqualified Property Inquiries",
        impact:
          "60% of property inquiries are from unqualified buyers wasting agent time",
        solution:
          "AI pre-qualifies buyers by budget, timeline, and financing before agent contact",
      },
      {
        problem: "After-Hours Lead Loss",
        impact:
          "40% of real estate inquiries happen outside business hours and go unanswered",
        solution:
          "24/7 AI captures leads, provides property information, and schedules callbacks",
      },
    ],
    solutionBenefits: {
      "ai-voice-agents": [
        "Instant lead response and qualification",
        "Automated showing scheduling",
        "Property information delivery",
        "Buyer/seller intake and routing",
      ],
      chatbots: [
        "Property search assistance",
        "Mortgage calculator integration",
        "Neighborhood information delivery",
        "Lead capture from listings",
      ],
      "video-agents": [
        "Virtual property tours",
        "Market analysis presentations",
        "Buyer/seller education videos",
        "Personalized property recommendations",
      ],
      automation: [
        "Lead nurturing sequences",
        "Showing reminder workflows",
        "Market update distributions",
        "Transaction milestone tracking",
      ],
    },
    stats: [
      {
        metric: "5 min",
        label: "Response Time",
        improvement: "Beat competition",
      },
      {
        metric: "60%",
        label: "More Showings",
        improvement: "Automated scheduling",
      },
      {
        metric: "45%",
        label: "Lead Conversion",
        improvement: "Better qualification",
      },
      {
        metric: "24/7",
        label: "Availability",
        improvement: "Never miss leads",
      },
    ],
  },
  // Add more industries as needed...
};

export default function CityIndustryClient({
  city,
  industry,
  industryName,
  solutions,
}: CityIndustryClientProps) {
  const industryData = INDUSTRY_DATA[industry];

  // Fallback for industries not in our data
  if (!industryData) {
    const IconComponent = Building;
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto">
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
            <span className="text-white">{industryName}</span>
          </nav>

          <div className="text-center py-20">
            <IconComponent className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              AI Solutions for {industryName} in {city.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete automation solutions coming soon for{" "}
              {industryName.toLowerCase()} businesses in {city.name}.
            </p>
            <Link
              href="https://cal.com/agenxus/discoverycall-30min"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = industryData.icon;

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
          <span className="text-white">{industryData.name}</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl">
                <IconComponent className="h-12 w-12 text-white" />
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-cyan-300">
                  {city.name}, {city.state}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                AI Solutions for {industryData.name}
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                in {city.name}, {city.state}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {industryData.description} in {city.name}. Complete automation
              with AI voice agents, chatbots, video agents, and process
              automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Industry-Specific Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Industry Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2 text-sm">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs">{stat.improvement}</div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Industry Challenges */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {industryData.name} Challenges in {city.name}
            </h2>
            <p className="text-xl text-gray-300">
              Common pain points we solve for {industryData.name.toLowerCase()}{" "}
              businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/30"
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
        </section>

        {/* Solutions for This Industry */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete AI Solution Suite for {industryData.name} in {city.name}
            </h2>
            <p className="text-xl text-gray-300">
              Every solution working together to transform your business
              operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const solutionIcons = {
                "ai-voice-agents": Phone,
                chatbots: MessageCircle,
                "video-agents": Video,
                automation: Cog,
              };

              const IconComp =
                solutionIcons[solution.slug as keyof typeof solutionIcons] ||
                Phone;
              const benefits =
                industryData.solutionBenefits[
                  solution.slug as keyof typeof industryData.solutionBenefits
                ] || [];

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
                    className="block group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComp className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          for {industryData.name}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Implementation Process for {city.name} {industryData.name}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fast, collaborative setup designed specifically for{" "}
                {industryData.name.toLowerCase()} businesses
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Industry Analysis",
                  description: `Deep dive into your ${industryData.name.toLowerCase()} business needs, workflows, and customer journey in ${
                    city.name
                  }.`,
                },
                {
                  step: "2",
                  title: "Custom Development",
                  description: `Build AI solutions trained on ${industryData.name.toLowerCase()}-specific terminology, processes, and compliance requirements.`,
                },
                {
                  step: "3",
                  title: "Integration & Testing",
                  description: `Connect with your existing systems, test all workflows, and train your team on the new AI tools.`,
                },
                {
                  step: "4",
                  title: "Launch & Optimize",
                  description: `Go live with full support, monitor performance, and continuously optimize for your industry metrics.`,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
          </motion.div>
        </section>

        {/* Success Stories Preview */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-3xl p-12 border border-green-500/30 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real Results from {city.name} {industryData.name} Businesses
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {industryData.stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.improvement}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 mb-8">
              Join other {city.name} {industryData.name.toLowerCase()}{" "}
              businesses already seeing these results with our AI automation
              solutions.
            </p>

            <Link
              href="https://cal.com/agenxus/discoverycall-30min"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
            >
              See How It Works for Your Business
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {industryData.name} AI Automation FAQs
            </h2>
            <p className="text-xl text-gray-300">
              Common questions from {city.name}{" "}
              {industryData.name.toLowerCase()} businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: `How do AI solutions work specifically for ${industryData.name.toLowerCase()} in ${
                  city.name
                }?`,
                answer: `Our AI solutions are trained on ${industryData.name.toLowerCase()}-specific terminology, processes, and compliance requirements. They understand the unique challenges facing ${industryData.name.toLowerCase()} businesses in ${
                  city.name
                } and provide targeted automation.`,
              },
              {
                question: `What&apos;s the implementation timeline for ${industryData.name.toLowerCase()} businesses?`,
                answer: `Most ${
                  city.name
                } ${industryData.name.toLowerCase()} businesses can have basic AI solutions operational within 1-2 weeks. More complex industry-specific integrations typically take 2-4 weeks depending on your current systems.`,
              },
              {
                question: `Are the AI solutions compliant with ${industryData.name.toLowerCase()} regulations?`,
                answer: `Yes, we ensure all AI solutions meet industry-specific compliance requirements. For healthcare, we&apos;re HIPAA compliant. For automotive, we follow dealer regulations. We handle all compliance considerations for your industry.`,
              },
              {
                question: `How do you measure success for ${industryData.name.toLowerCase()} businesses?`,
                answer: `We track industry-specific KPIs like ${industryData.stats
                  .map((s) => s.label.toLowerCase())
                  .slice(0, 3)
                  .join(
                    ", "
                  )}, and provide detailed reporting on ROI, efficiency gains, and customer satisfaction improvements.`,
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

        {/* Final CTA Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-3xl p-12 border border-blue-500/30"
          >
            <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl w-fit mx-auto mb-6">
              <IconComponent className="h-12 w-12 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your {industryData.name} Business in {city.name}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a complete AI automation solution designed specifically for{" "}
              {industryData.name.toLowerCase()} businesses in {city.name}. Join
              other local businesses already seeing results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="group bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg py-5 px-10 rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Industry Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

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
                <span>Industry-specific setup</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Compliance guaranteed</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Local {city.name} support</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
