import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NavigationClient from "./NavigationClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AI Automation - Voice Agents, Chatbots & Process Automation | Agenxus",
  description:
    "AI voice agents, chatbots, video agents, and process automation for modern businesses. Scale your operations without adding headcount.",
  metadataBase: new URL("https://agenxus.com"),
  keywords: [
    "AI automation",
    "AI voice agents",
    "AI chatbots",
    "process automation",
    "business automation",
    "conversational AI",
    "AI customer service",
    "workflow automation",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AI Automation Solutions | Agenxus",
    description:
      "Transform your business with AI voice agents, chatbots, video agents, and process automation.",
    type: "website",
    siteName: "Agenxus",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Solutions | Agenxus",
    description:
      "Transform your business with AI voice agents, chatbots, video agents, and process automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white min-h-screen overflow-x-hidden`}
      >
        {/* Background orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-24 left-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Navigation Component */}
        <NavigationClient />

        {/* Main Content */}
        <main className="relative pt-24">{children}</main>

        {/* Footer */}
        <footer className="py-16 px-6 bg-black/40 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Agenxus Logo"
                    width={120}
                    height={48}
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

              {/* Services */}
              <div>
                <h3 className="font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/services/ai-search-optimization"
                      className="hover:text-white transition-colors text-sm"
                    >
                      AI Search Optimization
                    </Link>
                  </li>
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

              {/* Industries */}
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
                      href="/industries/restaurants"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Restaurants
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
                      href="/blog"
                      className="hover:text-white transition-colors text-sm"
                    >
                      Blog
                    </Link>
                  </li>
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
      </body>
    </html>
  );
}
