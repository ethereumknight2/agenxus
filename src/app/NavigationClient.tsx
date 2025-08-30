"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavigationClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/80 via-blue-950/60 to-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/images/logo.png"
              alt="Agenxus Logo"
              width={200}
              height={80}
              className="h-20 w-auto"
              priority
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
                    href="/services/ai-search-optimization"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                  >
                    <div className="font-medium">AI Search Optimization</div>
                    <div className="text-xs text-gray-500">
                      Get cited by LLMs + fast sites
                    </div>
                  </Link>
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
                    href="/industries/restaurants"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all text-sm"
                  >
                    <div className="font-medium">Restaurants</div>
                    <div className="text-xs text-gray-500">
                      Order & reservation automation
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
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>

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

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer flex flex-col items-center justify-center w-12 h-12 bg-white/10 rounded-xl border border-white/20"
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } fixed top-24 left-0 right-0 h-[calc(100vh-6rem)] bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 border-t border-white/20 shadow-2xl overflow-y-auto`}
            >
              <div className="p-6 space-y-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
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
                      href="/services/ai-search-optimization"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      AI Search Optimization & Development
                    </Link>
                    <Link
                      href="/services/ai-voice-agents"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      AI Voice Agents
                    </Link>
                    <Link
                      href="/services/chatbots"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      AI Chatbots
                    </Link>
                    <Link
                      href="/services/video-agents"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      AI Video Agents
                    </Link>
                    <Link
                      href="/services/automation"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Process Automation
                    </Link>
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
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
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Healthcare
                    </Link>
                    <Link
                      href="/industries/automotive"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Automotive
                    </Link>
                    <Link
                      href="/industries/real-estate"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Real Estate
                    </Link>
                    <Link
                      href="/industries/restaurants"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Restaurants
                    </Link>
                    <Link
                      href="/industries/legal-services"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Legal Services
                    </Link>
                    <Link
                      href="/industries/home-services"
                      onClick={closeMobileMenu}
                      className="block text-gray-200 hover:text-cyan-400 py-2 transition-colors"
                    >
                      Home Services
                    </Link>
                    <Link
                      href="/industries"
                      onClick={closeMobileMenu}
                      className="block text-cyan-400 hover:text-cyan-300 py-2 transition-colors font-medium"
                    >
                      View All Industries →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="block text-white text-lg py-2 hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block text-white text-lg py-2 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>

                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
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
  );
}
