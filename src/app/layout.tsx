import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://agenxus.com"
      : "http://localhost:3000"
  ),
  title: {
    default: "Agenxus - AI Agents for Smarter Business",
    template: "%s | Agenxus",
  },
  description:
    "AI voice agents, chatbots, video agents, and process automation for modern businesses. Never miss another call or lead with 24/7 AI automation.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white min-h-screen overflow-x-hidden`}
      >
        {/* Background orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-24 left-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/80 via-blue-950/60 to-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Agenxus Logo"
                  className="h-20 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Services
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      <Link
                        href="/services/ai-voice-agents"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">AI Voice Agents</div>
                        <div className="text-xs text-gray-500">
                          24/7 phone automation
                        </div>
                      </Link>
                      <Link
                        href="/services/chatbots"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">AI Chatbots</div>
                        <div className="text-xs text-gray-500">
                          Website automation
                        </div>
                      </Link>
                      <Link
                        href="/services/video-agents"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">AI Video Agents</div>
                        <div className="text-xs text-gray-500">
                          Personalized video messages
                        </div>
                      </Link>
                      <Link
                        href="/services/automation"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Process Automation</div>
                        <div className="text-xs text-gray-500">
                          Workflow automation
                        </div>
                      </Link>
                      <div className="border-t border-gray-700 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industries Dropdown */}
                <div className="relative group">
                  <Link
                    href="/industries"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Industries
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      <Link
                        href="/industries/healthcare"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Healthcare</div>
                        <div className="text-xs text-gray-500">
                          HIPAA-compliant AI solutions
                        </div>
                      </Link>
                      <Link
                        href="/industries/automotive"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Automotive</div>
                        <div className="text-xs text-gray-500">
                          Dealership automation
                        </div>
                      </Link>
                      <Link
                        href="/industries/real-estate"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Real Estate</div>
                        <div className="text-xs text-gray-500">
                          Lead qualification & MLS
                        </div>
                      </Link>
                      <Link
                        href="/industries/legal-services"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Legal Services</div>
                        <div className="text-xs text-gray-500">
                          Client intake automation
                        </div>
                      </Link>
                      <Link
                        href="/industries/home-services"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Home Services</div>
                        <div className="text-xs text-gray-500">
                          Service call automation
                        </div>
                      </Link>
                      <Link
                        href="/industries/professional-services"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                      >
                        <div className="font-medium">Professional Services</div>
                        <div className="text-xs text-gray-500">
                          Client management AI
                        </div>
                      </Link>
                      <div className="border-t border-gray-700 mt-2 pt-2">
                        <Link
                          href="/industries"
                          className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-6 rounded-full text-sm hover:scale-105 transition-transform"
                >
                  Book Call
                </a>
              </nav>

              {/* MOBILE MENU - FIXED SCROLLING */}
              <div className="md:hidden">
                <input
                  id="menu-toggle"
                  type="checkbox"
                  className="hidden peer"
                />

                {/* Hamburger Button */}
                <label
                  htmlFor="menu-toggle"
                  className="cursor-pointer flex flex-col items-center justify-center w-12 h-12 bg-white/10 rounded-xl border border-white/20"
                >
                  <span className="block w-6 h-0.5 bg-white mb-1"></span>
                  <span className="block w-6 h-0.5 bg-white mb-1"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </label>

                {/* Mobile Dropdown - FIXED WITH PROPER SCROLLING */}
                <div className="hidden peer-checked:block fixed top-24 left-0 right-0 h-[calc(100vh-6rem)] bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 border-t border-white/20 shadow-2xl overflow-y-auto">
                  <div className="p-6 space-y-6">
                    <Link
                      href="/"
                      className="block text-white text-lg py-2 hover:text-cyan-400 transition-colors"
                    >
                      Home
                    </Link>

                    <div>
                      <h3 className="text-white font-semibold mb-3 text-lg">
                        Services
                      </h3>
                      <div className="pl-4 space-y-3">
                        <Link
                          href="/services/ai-voice-agents"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          AI Voice Agents
                        </Link>
                        <Link
                          href="/services/chatbots"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          AI Chatbots
                        </Link>
                        <Link
                          href="/services/video-agents"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          AI Video Agents
                        </Link>
                        <Link
                          href="/services/automation"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Process Automation
                        </Link>
                        <Link
                          href="/services"
                          className="block text-cyan-400 hover:text-cyan-300 py-2 transition-colors font-medium"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3 text-lg">
                        Industries
                      </h3>
                      <div className="pl-4 space-y-3">
                        <Link
                          href="/industries/healthcare"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Healthcare
                        </Link>
                        <Link
                          href="/industries/automotive"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Automotive
                        </Link>
                        <Link
                          href="/industries/real-estate"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Real Estate
                        </Link>
                        <Link
                          href="/industries/legal-services"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Legal Services
                        </Link>
                        <Link
                          href="/industries/home-services"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Home Services
                        </Link>
                        <Link
                          href="/industries/professional-services"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Professional Services
                        </Link>
                        <Link
                          href="/industries/financial-services"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Financial Services
                        </Link>
                        <Link
                          href="/industries/technology"
                          className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                        >
                          Technology
                        </Link>
                        <Link
                          href="/industries"
                          className="block text-cyan-400 hover:text-cyan-300 py-2 transition-colors font-medium"
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block text-white text-lg py-2 hover:text-cyan-400 transition-colors"
                    >
                      Contact
                    </Link>

                    <Link
                      href="/locations"
                      className="block text-white text-lg py-2 hover:text-cyan-400 transition-colors"
                    >
                      Service Areas
                    </Link>

                    <a
                      href="https://cal.com/agenxus/discoverycall-30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl mt-6 hover:from-blue-600 hover:to-cyan-600 transition-all"
                    >
                      Book Discovery Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative pt-24">{children}</main>

        {/* Footer - Updated with proper service links */}
        <footer className="py-16 px-6 bg-black/40 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="Agenxus Logo"
                    className="h-12 w-auto mb-4"
                  />
                </Link>
                <p className="text-gray-400 mb-6">
                  AI voice agents, chatbots, video agents, and process
                  automation for modern businesses. Scale your operations
                  without adding headcount.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">
                      218 S. Main Street, Naperville, IL 60540
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:+18722778841"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      (872) 277-8841
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@agenxus.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      info@agenxus.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Services - Updated with proper links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/services/ai-voice-agents"
                      className="hover:text-white transition-colors text-sm"
                    >
                      AI Voice Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/chatbots"
                      className="hover:text-white transition-colors text-sm"
                    >
                      AI Chatbots
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/video-agents"
                      className="hover:text-white transition-colors text-sm"
                    >
                      AI Video Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/automation"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Process Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors text-sm font-medium"
                    >
                      View All Services →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industries - Updated with proper links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Industries</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/industries/healthcare"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/automotive"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Automotive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/real-estate"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/legal-services"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Legal Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/home-services"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Home Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="hover:text-cyan-400 transition-colors text-sm font-medium"
                    >
                      View All Industries →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Service Areas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 Agenxus. All rights reserved.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-6 rounded-full text-sm hover:scale-105 transition-transform"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
