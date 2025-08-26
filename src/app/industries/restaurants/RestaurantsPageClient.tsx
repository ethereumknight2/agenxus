"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Phone,
  Calendar,
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
  Shield,
  Database,
  Zap,
  Target,
  Settings,
  CreditCard,
  ShoppingCart,
  Truck,
  Coffee,
  Pizza,
  Wine,
  ChefHat,
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

interface RestaurantData {
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
  restaurantTypes: Array<{
    type: string;
    specialties: string[];
    commonNeeds: string[];
  }>;
  integrations: Array<{
    category: string;
    platforms: string[];
    capabilities: string[];
  }>;
}

interface RestaurantsPageClientProps {
  restaurantData: RestaurantData;
  cities: City[];
  solutions: Solution[];
}

// Icon mapping arrays
const useCaseIcons = [
  Phone,
  Calendar,
  Truck,
  MessageCircle,
  ChefHat,
  Award,
  Database,
  Target,
];
const restaurantTypeIcons = [
  Coffee,
  UtensilsCrossed,
  Wine,
  Pizza,
  Building2,
  Settings,
];
const integrationIcons = [CreditCard, Calendar, Truck, MessageCircle];

export default function RestaurantsPageClient({
  restaurantData,
  cities,
  solutions,
}: RestaurantsPageClientProps) {
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
            <span className="text-white">Restaurants & Food Service</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                <UtensilsCrossed className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              {restaurantData.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {restaurantData.subtitle}
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
              {restaurantData.description}
            </p>

            <div className="flex justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Restaurant ROI Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Restaurant AI Results That Drive Revenue
            </h2>
            <p className="text-xl text-gray-300">
              Proven outcomes for restaurants and food service businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {restaurantData.stats.map((stat, index) => (
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
                <div className="text-gray-400 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Challenges & Solutions */}
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
              Restaurant Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400">
              Transform restaurant pain points into revenue opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {restaurantData.challenges.map((challenge, index) => (
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
        </div>
      </section>

      {/* Restaurant Use Cases */}
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
              Restaurant AI Use Cases
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive automation for every aspect of restaurant operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantData.useCases.map((useCase, index) => {
              const IconComponent = useCaseIcons[index % useCaseIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
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
      {/* Restaurant Types Served */}
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
              Restaurant Types We Serve
            </h2>
            <p className="text-xl text-gray-400">
              Tailored AI solutions for every style of restaurant operation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantData.restaurantTypes.map((restaurant, index) => {
              const IconComponent =
                restaurantTypeIcons[index % restaurantTypeIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {restaurant.type}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      SPECIALTIES:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
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
                      {restaurant.commonNeeds.map((need, i) => (
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

      {/* Integration Capabilities */}
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
              Restaurant System Integrations
            </h2>
            <p className="text-xl text-gray-400">
              Seamless connectivity with your existing restaurant technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantData.integrations.map((integration, index) => {
              const IconComponent =
                integrationIcons[index % integrationIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {integration.category}
                  </h3>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {integration.platforms.slice(0, 3).map((platform, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
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

      {/* City-Specific Restaurant Services */}
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
              Restaurant AI Solutions by Location
            </h2>
            <p className="text-xl text-gray-400">
              Serving restaurants across Illinois and beyond
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
                    href={`/locations/${city.slug}/restaurants`}
                    className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Restaurant AI in {city.name}
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-4">
                      Specialized AI solutions for {city.name} restaurants and
                      food service businesses. Serving{" "}
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

      {/* Restaurant Solutions Integration */}
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
              Restaurant Technology Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Complete AI automation suite for restaurant operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions && solutions.length > 0 ? (
              solutions.map((solution, index) => {
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
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {solution.name} for Restaurants
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {solution.description}
                    </p>

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
                Loading restaurant solutions...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Restaurant FAQ */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about AI automation for restaurants
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do AI phone ordering systems help restaurants?",
                answer:
                  "AI phone ordering systems handle unlimited simultaneous calls, process complex orders with modifications, automatically upsell items, and integrate directly with POS systems. Restaurants typically see 40% more orders and 25% higher average order values.",
              },
              {
                question:
                  "Can AI handle complex restaurant orders with modifications?",
                answer:
                  "Yes, our AI can handle substitutions, allergies, cooking preferences, special instructions, and complex multi-item orders with 99% accuracy. It&apos;s trained specifically on restaurant operations and menu management.",
              },
              {
                question:
                  "Does restaurant AI integrate with existing POS systems?",
                answer:
                  "Yes, we integrate with major restaurant POS systems including Toast, Square, Clover, TouchBistro, Lightspeed, and NCR Aloha. Orders flow directly into your existing workflow without disruption.",
              },
              {
                question:
                  "What types of restaurants benefit from AI automation?",
                answer:
                  "All restaurant types benefit including quick service, casual dining, fine dining, pizza delivery, bars, and multi-location chains. Solutions are customized for each restaurant type&apos;s specific operational needs.",
              },
              {
                question: "What ROI can restaurants expect from AI automation?",
                answer:
                  "Restaurants typically see 40% more orders, 25% higher average order value, 90% fewer missed calls, and 60% fewer no-shows. Most restaurants see full ROI within 2-3 months of implementation.",
              },
              {
                question: "How does AI reservation management work?",
                answer:
                  "AI manages table availability in real-time, books reservations, sends confirmations and reminders, handles waitlists, and tracks special occasions. It integrates with OpenTable, Resy, and other reservation platforms.",
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Restaurant?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of restaurants using AI to increase orders, improve
              service, and reduce staff workload. Most see results within the
              first week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/agenxus/discoverycall-30min"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
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
              Free consultation &bull; Restaurant-specific demo &bull; Most
              restaurants see ROI within 60 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
