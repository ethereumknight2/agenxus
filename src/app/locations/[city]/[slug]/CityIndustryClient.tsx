// /app/locations/[city]/[slug]/CityIndustryClient.tsx - Clean Fixed Part 1
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { City } from "@/data/cities";
import type { Solution } from "@/data/solutions";
import type { LucideIcon } from "lucide-react";
import {
  Car,
  Heart,
  Scale,
  Home,
  Building,
  Phone,
  MessageCircle,
  Video,
  Cog,
  ArrowRight,
  Calendar,
  CheckCircle,
  AlertTriangle,
  UtensilsCrossed,
} from "lucide-react";

interface CityIndustryClientProps {
  city: City;
  industry: string;
  industryName: string;
  solutions: Solution[];
}

interface IndustryChallenge {
  problem: string;
  impact: string;
  solution: string;
}

interface IndustryStat {
  metric: string;
  label: string;
  improvement: string;
}

interface IndustryInfo {
  name: string;
  icon: LucideIcon;
  description: string;
  challenges: IndustryChallenge[];
  solutionBenefits: Record<string, string[]>;
  stats: IndustryStat[];
}

const INDUSTRY_DATA: Record<string, IndustryInfo> = {
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
  restaurants: {
    name: "Restaurants & Food Service",
    icon: UtensilsCrossed,
    description:
      "AI automation solutions for restaurants, cafes, and food service businesses",
    challenges: [
      {
        problem: "Missed Phone Orders During Rush",
        impact:
          "Restaurants lose 30% of phone orders during peak dining hours due to busy staff",
        solution:
          "AI handles unlimited simultaneous calls, capturing every order even during rush periods",
      },
      {
        problem: "Complex Order Management",
        impact:
          "Staff struggle with modifications, dietary restrictions, and special requests, leading to errors",
        solution:
          "AI accurately processes complex orders with modifications, allergies, and special instructions",
      },
      {
        problem: "Reservation No-Shows",
        impact:
          "25% of reservations result in no-shows, causing lost revenue and empty tables",
        solution:
          "Automated confirmation and reminder system reduces no-shows by 60%",
      },
      {
        problem: "After-Hours Customer Inquiries",
        impact:
          "Customers can't make reservations or get information outside business hours",
        solution:
          "24/7 AI availability for reservations, hours, menu questions, and basic inquiries",
      },
    ],
    solutionBenefits: {
      "ai-voice-agents": [
        "Handle phone orders with upselling",
        "Manage reservations and waitlists",
        "Process dietary restrictions accurately",
        "Coordinate delivery and pickup orders",
      ],
      chatbots: [
        "Menu information and allergen details",
        "Online ordering assistance",
        "Table availability checking",
        "Customer feedback collection",
      ],
      "video-agents": [
        "Menu item presentations",
        "Chef specials announcements",
        "Cooking technique demonstrations",
        "Restaurant ambiance showcases",
      ],
      automation: [
        "Order confirmation workflows",
        "Reservation reminder sequences",
        "Inventory reorder automation",
        "Customer loyalty programs",
      ],
    },
    stats: [
      {
        metric: "40%",
        label: "Order Volume Increase",
        improvement: "More phone orders captured",
      },
      {
        metric: "25%",
        label: "Higher Average Order",
        improvement: "Improved upselling results",
      },
      {
        metric: "90%",
        label: "Fewer Missed Calls",
        improvement: "Never miss an order again",
      },
      {
        metric: "60%",
        label: "Fewer No-Shows",
        improvement: "Better reservation management",
      },
    ],
  },
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
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
            <Building className="w-16 h-16 text-blue-400 mx-auto mb-6" />
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
              href="/locations"
              className="hover:text-white transition-colors"
            >
              Locations
            </Link>
            <span>/</span>
            <Link
              href={`/locations/${city.slug}`}
              className="hover:text-white transition-colors"
            >
              {city.name}
            </Link>
            <span>/</span>
            <span className="text-white">{industryData.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <IconComponent className="h-12 w-12 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Solutions for {industryData.name}
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete automation suite for {industryData.name.toLowerCase()}{" "}
                businesses in {city.name}
              </p>

              <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
                {industryData.description} in {city.name}. Voice agents,
                chatbots, video agents, and process automation working together.
              </p>

              <div className="flex justify-center">
                <Link
                  href="https://cal.com/agenxus/discoverycall-30min"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Industry-Specific Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-3xl mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {industryData.name} AI Results in {city.name}
              </h2>
              <p className="text-xl text-gray-300">
                Proven outcomes for {city.name}{" "}
                {industryData.name.toLowerCase()} businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industryData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white font-semibold mb-2 text-sm">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {stat.improvement}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {industryData.name} Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400">
              Transform {industryData.name.toLowerCase()} pain points into
              competitive advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {challenge.problem}
                    </h3>
                    <p className="text-blue-400 mb-4 font-medium">
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
        <section className="py-20 bg-gray-800/50 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete AI Suite for {industryData.name} in {city.name}
              </h2>
              <p className="text-xl text-gray-400">
                Four powerful solutions working together to transform your
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
                  industryData.solutionBenefits[solution.slug] || [];

                return (
                  <motion.div
                    key={solution.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/locations/${city.slug}/${solution.slug}`}
                      className="block group bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-3 bg-gradient-to-br ${solution.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {solution.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            for {industryData.name}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-white/20 rounded-2xl w-fit mx-auto mb-6">
                <IconComponent className="h-12 w-12 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your {industryData.name} Business in {city.name}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a complete AI automation solution designed specifically for{" "}
                {industryData.name.toLowerCase()} businesses in {city.name}.
                Join other local businesses already seeing results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://cal.com/agenxus/discoverycall-30min"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Industry Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="tel:+18722778841"
                  className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 border border-blue-700"
                >
                  Call (872) 277-8841
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <p className="text-blue-200 mt-4 text-sm">
                Free consultation • Industry-specific setup • Local {city.name}{" "}
                support
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
