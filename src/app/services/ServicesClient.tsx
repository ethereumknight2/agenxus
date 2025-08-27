"use client";

// Import useState for ROI calculator
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Video,
  Cog,
  ArrowRight,
  CheckCircle,
  Settings,
  TrendingUp,
  Users,
  Shield,
  Target,
  Building,
  Heart,
  Home,
  Scale,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

// Interface definitions
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  stats: { efficiency: string; conversion: string; response: string };
  ctaText: string;
  ctaLink: string;
  gradient: string;
  delay: number;
}

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

// Helper Components
function ServiceCard({
  icon,
  title,
  description,
  features,
  stats,
  ctaText,
  ctaLink,
  gradient,
  delay,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group"
    >
      <div
        className={`text-transparent bg-gradient-to-r ${gradient} bg-clip-text mb-6`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-xl p-4 mb-6">
        <div className="grid grid-cols-1 gap-2 text-center">
          <div>
            <div className="text-lg font-bold text-cyan-400">
              {stats.efficiency}
            </div>
            <div className="text-xs text-gray-400">Efficiency</div>
          </div>
        </div>
      </div>

      <Link
        href={ctaLink}
        className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-lg group-hover:shadow-lg`}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </motion.div>
  );
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0">
        <div className="text-cyan-400">{icon}</div>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function IndustryCard({
  icon,
  title,
  description,
  link,
  delay,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Link
        href={link}
        className="block p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all group h-full"
      >
        <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        <ArrowRight className="w-4 h-4 text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, delay }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ROI Calculator Component
function ROICalculator() {
  const [salary, setSalary] = useState(43000);
  const [benefits, setBenefits] = useState(0.3);
  const [aiCost, setAiCost] = useState(6000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const totalStaffCost = salary * (1 + benefits);
  const annualSavings = totalStaffCost - aiCost;
  const roi = ((annualSavings / aiCost) * 100).toFixed(0);
  const hoursSaved = (hoursPerWeek * 52).toFixed(0);

  return (
    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">
            Calculate Your Savings
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Annual Staff Salary ($)
            </label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Benefits & Overhead (%)
            </label>
            <select
              value={benefits}
              onChange={(e) => setBenefits(Number(e.target.value))}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            >
              <option value={0.2}>20% (Minimal benefits)</option>
              <option value={0.3}>30% (Standard benefits)</option>
              <option value={0.4}>40% (Full benefits)</option>
              <option value={0.5}>50% (Premium benefits)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              AI Solution Annual Cost ($)
            </label>
            <input
              type="number"
              value={aiCost}
              onChange={(e) => setAiCost(Number(e.target.value))}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hours Per Week Automated
            </label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Your Results</h3>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">
                ${totalStaffCost.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Staff Cost</div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                ${aiCost.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">AI Solution Cost</div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 text-center border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-1">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 text-center border border-cyan-400/20">
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {roi}% ROI
              </div>
              <div className="text-sm text-gray-300">Return on Investment</div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-white mb-1">
                {hoursSaved} hours
              </div>
              <div className="text-sm text-gray-400">Automated Annually</div>
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://cal.com/agenxus/discoverycall-30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg"
            >
              Discuss Your ROI
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function ServicesClient() {
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
            <span className="text-white">Services</span>
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
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <Settings className="w-8 h-8 text-cyan-400" />
                </div>
                <span className="text-cyan-400 font-semibold text-lg">
                  AI Automation Services
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-white">Transform Your Business</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  With AI Automation
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Complete AI automation solutions that work 24/7 to engage
                customers, capture leads, and streamline operations. Scale your
                business without adding headcount.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+18722778841"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (872) 277-8841
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">85%</div>
                  <div className="text-sm text-gray-400">More Efficient</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">$37K+</div>
                  <div className="text-sm text-gray-400">Annual Savings</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">2-3 Weeks</div>
                  <div className="text-sm text-gray-400">Setup Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
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
              Our AI Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI solutions, or combine
              multiple services for complete business automation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Phone className="w-10 h-10" />}
              title="AI Voice Agents"
              description="Human-like phone assistants that answer every call, qualify leads, and book appointments 24/7 without human intervention."
              features={[
                "Never miss a call",
                "Qualify leads instantly",
                "Book appointments automatically",
                "Handle multiple languages",
                "CRM integration",
                "Natural conversation flow",
              ]}
              stats={{
                efficiency: "99%+ uptime",
                conversion: "40% more appointments",
                response: "< 2 second response time",
              }}
              ctaText="Learn More About Voice Agents"
              ctaLink="/services/ai-voice-agents"
              gradient="from-blue-500 to-cyan-500"
              delay={0.1}
            />

            <ServiceCard
              icon={<MessageCircle className="w-10 h-10" />}
              title="AI Chatbots"
              description="Intelligent website chatbots that engage visitors, answer questions, and convert leads while your team focuses on closing deals."
              features={[
                "24/7 website coverage",
                "Instant lead capture",
                "FAQ automation",
                "Seamless handoffs",
                "Multi-language support",
                "Analytics dashboard",
              ]}
              stats={{
                efficiency: "3x faster responses",
                conversion: "78% engagement rate",
                response: "24/7 availability",
              }}
              ctaText="Learn More About Chatbots"
              ctaLink="/services/chatbots"
              gradient="from-purple-500 to-pink-500"
              delay={0.2}
            />

            <ServiceCard
              icon={<Video className="w-10 h-10" />}
              title="AI Video Agents"
              description="AI-powered video assistants that deliver personalized messages, product demos, and customer onboarding at scale."
              features={[
                "Personalized video messages",
                "Scalable demonstrations",
                "Interactive onboarding",
                "Measurable engagement",
                "Custom avatar creation",
                "Multi-language videos",
              ]}
              stats={{
                efficiency: "95% watch rate",
                conversion: "85% retention improvement",
                response: "4x higher engagement",
              }}
              ctaText="Learn More About Video Agents"
              ctaLink="/services/video-agents"
              gradient="from-green-500 to-emerald-500"
              delay={0.3}
            />

            <ServiceCard
              icon={<Cog className="w-10 h-10" />}
              title="Process Automation"
              description="End-to-end workflow automation that connects your tools, eliminates manual tasks, and scales your operations efficiently."
              features={[
                "Eliminate manual work",
                "Connect existing tools",
                "Scale without hiring",
                "Reduce human error",
                "API integrations",
                "Performance monitoring",
              ]}
              stats={{
                efficiency: "15+ hours saved/week",
                conversion: "99.8% accuracy",
                response: "340% ROI",
              }}
              ctaText="Learn More About Automation"
              ctaLink="/services/automation"
              gradient="from-orange-500 to-red-500"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Businesses Choose Agenxus
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We don&apos;t just install bots—we build tailored AI systems
                that think, respond, and drive ROI for your specific business
                needs.
              </p>

              <div className="space-y-6">
                <BenefitItem
                  icon={<Target className="w-6 h-6" />}
                  title="Built for Your Business"
                  description="Custom solutions designed around your specific workflows, not one-size-fits-all templates"
                />
                <BenefitItem
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="Systems That Scale"
                  description="AI automation that grows with your business and adapts to changing needs"
                />
                <BenefitItem
                  icon={<Shield className="w-6 h-6" />}
                  title="Reliable Setup & Support"
                  description="Professional implementation with ongoing maintenance and optimization"
                />
                <BenefitItem
                  icon={<Users className="w-6 h-6" />}
                  title="Human Oversight"
                  description="Transparent processes with human oversight to ensure quality and accuracy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Complete Solution Package
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Discovery & strategy consultation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Custom AI agent development
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Integration with existing tools
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Team training & documentation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Ongoing optimization & support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20">
                <div className="text-3xl font-bold text-white mb-2">
                  2-3 Weeks
                </div>
                <div className="text-lg text-green-400 font-semibold mb-2">
                  Average Implementation
                </div>
                <div className="text-sm text-gray-300">
                  Most customers are fully operational in under a month
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-r from-blue-950/30 to-cyan-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI automation works especially well for service-driven businesses
              where customer communication drives growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              icon={<Heart className="w-8 h-8" />}
              title="Healthcare & Wellness"
              description="HIPAA-compliant appointment scheduling, patient intake, prescription reminders"
              link="/industries/healthcare"
              delay={0.1}
            />
            <IndustryCard
              icon={<Home className="w-8 h-8" />}
              title="Home Services"
              description="Emergency dispatch, service booking, technician routing, customer follow-up"
              link="/industries/home-services"
              delay={0.2}
            />
            <IndustryCard
              icon={<Scale className="w-8 h-8" />}
              title="Legal Services"
              description="Client intake automation, consultation scheduling, case status updates"
              link="/industries/legal"
              delay={0.3}
            />
            <IndustryCard
              icon={<Building className="w-8 h-8" />}
              title="Real Estate"
              description="Lead qualification, showing schedules, property inquiries, buyer follow-up"
              link="/industries/real-estate"
              delay={0.4}
            />
            <IndustryCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Automotive"
              description="Sales inquiries, service scheduling, parts ordering, customer retention"
              link="/industries/automotive"
              delay={0.5}
            />
            <IndustryCard
              icon={<Users className="w-8 h-8" />}
              title="Professional Services"
              description="Consultation booking, project inquiries, client onboarding, support"
              link="/industries"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From discovery to deployment, we handle every aspect of your AI
              automation project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            <ProcessStep
              number="1"
              title="Discovery Call"
              description="Understand your business needs, current processes, and automation goals"
              delay={0.1}
            />
            <ProcessStep
              number="2"
              title="Custom Design"
              description="Design AI agents and workflows tailored to your specific requirements"
              delay={0.2}
            />
            <ProcessStep
              number="3"
              title="Development & Testing"
              description="Build, integrate, and thoroughly test your AI automation systems"
              delay={0.3}
            />
            <ProcessStep
              number="4"
              title="Launch & Optimize"
              description="Deploy your AI agents and continuously optimize performance"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              See how much AI automation can save your business.
            </p>

            <ROICalculator />
          </motion.div>
        </div>
      </section>

      {/* Service Comparison */}
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
              Choose Your Service Combination
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mix and match our AI services for complete business automation
              coverage.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white/5 rounded-2xl border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white font-semibold">
                    Service
                  </th>
                  <th className="text-center p-6 text-white font-semibold">
                    Phone Coverage
                  </th>
                  <th className="text-center p-6 text-white font-semibold">
                    Website Engagement
                  </th>
                  <th className="text-center p-6 text-white font-semibold">
                    Visual Communication
                  </th>
                  <th className="text-center p-6 text-white font-semibold">
                    Process Automation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white font-medium">
                    AI Voice Agents
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 mx-auto"></div>
                  </td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 mx-auto"></div>
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white font-medium">AI Chatbots</td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 mx-auto"></div>
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 mx-auto"></div>
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white font-medium">
                    AI Video Agents
                  </td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 mx-auto"></div>
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-white font-medium">
                    Process Automation
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses using AI automation to capture more
              leads, improve customer service, and scale operations without
              adding headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+18722778841"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (872) 277-8841
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free consultation • No commitments • Custom solutions
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
