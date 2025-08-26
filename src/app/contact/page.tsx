"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mrblewdv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      setSubmitMessage(
        "✓ Message sent successfully! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setSubmitMessage(
        "✗ Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        {[20, 35, 50, 65, 80, 95].map((left, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${left}%`,
              top: `${30 + i * 10}%`,
              animation: `float 8s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center px-4 pt-32 pb-16 z-30">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Let&apos;s
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI agents? Choose how
            you&apos;d like to get in touch—we&apos;re here to help you get
            started.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-16 px-4 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Book a Call */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full text-center group relative hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-blue-400 mb-6 flex justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Book a Discovery Call
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Schedule a free 30-minute consultation to discuss your AI
                  automation needs and get personalized recommendations.
                </p>
                <a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <div className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Usually available within 48 hours
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full text-center group relative hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-purple-400 mb-6 flex justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Prefer email or phone? Reach out directly and we&apos;ll get
                  back to you within a few hours.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:info@agenxus.com"
                    className="flex items-center justify-center gap-2 border border-purple-400/30 text-purple-300 hover:text-white hover:border-purple-400 py-3 px-6 rounded-full transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12H8m8 0l-4 4m4-4l-4-4M21 8l-9 6-9-6"
                      />
                    </svg>
                    info@agenxus.com
                  </a>
                  <a
                    href="tel:+18722778841"
                    className="flex items-center justify-center gap-2 border border-purple-400/30 text-purple-300 hover:text-white hover:border-purple-400 py-3 px-6 rounded-full transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h2l2 4-2 2 2 4-2 2H5a2 2 0 01-2-2V5z"
                      />
                    </svg>
                    (872) 277-8841
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Response within 4 hours
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full group relative hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-cyan-400 mb-6 flex justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Send a Message
                </h3>
                <p className="text-gray-300 mb-8 text-center leading-relaxed">
                  Have a specific question? Send us a message and we&apos;ll
                  respond personally.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>

                {submitMessage && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      submitMessage.includes("✓")
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-transparent to-gray-900/20 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Quick
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about working with Agenxus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-blue-400">
                How quickly can we get started?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We can be up and running in as little as 48 hours. Simple voice
                agent implementations often go live within a day, while complex
                integrations may take longer.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-purple-400">
                What&apos;s the typical investment?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Projects typically range from $2,500–$15,000 depending on
                complexity. We offer both one-time builds and ongoing retainer
                options.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-cyan-400">
                Do you provide ongoing support?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Yes! We offer training, maintenance, and expansion services.
                Many clients start with one agent and add more over time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-pink-400">
                What if I&apos;m not sure what I need?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                That&apos;s exactly what our discovery call is for! We&apos;ll
                analyze your business and recommend the best AI solutions for
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Ready to get started?
            </span>
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            The best way to understand how AI agents can transform your business
            is to experience them firsthand.
          </p>
          <a
            href="https://cal.com/agenxus/discoverycall-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Your Discovery Call
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <div className="mt-4 text-sm text-gray-400">
            Free consultation • No commitment required
          </div>
        </div>
      </section>

      {/* Local keyframes used by particles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
