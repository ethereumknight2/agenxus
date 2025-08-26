export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Terms & Conditions
      </h1>
      <p className="mb-6 text-gray-300">Effective Date: August 19, 2025</p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        1. Acceptance of Terms
      </h2>
      <p className="mb-6 text-gray-300">
        By accessing or using Agenxus services, you agree to be bound by these
        Terms of Service ("Terms"). If you do not agree to these Terms, do not
        use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        2. Description of Services
      </h2>
      <p className="mb-4 text-gray-300">
        Agenxus provides AI-powered voice, chat, and video agents for business
        purposes, including demo interactions for advertising and sales. Our
        services include but are not limited to:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Voice AI agents for phone call handling and customer service</li>
        <li>Chat agents and conversational AI systems</li>
        <li>Video AI agents and automated content generation</li>
        <li>Business automation and workflow integration services</li>
        <li>Custom AI training and implementation</li>
      </ul>
      <p className="mb-6 text-gray-300">
        Demos are for informational purposes only and may not represent final
        production deployments.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        3. Acceptable Use
      </h2>
      <p className="mb-4 text-gray-300">
        You agree not to use our services to:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Violate any laws, regulations, or third-party rights</li>
        <li>Transmit harmful, offensive, or illegal content</li>
        <li>Interfere with or disrupt our services or servers</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Use our services for spam, fraud, or deceptive practices</li>
        <li>Reverse engineer or attempt to extract source code</li>
        <li>Resell or redistribute our services without permission</li>
        <li>Misuse demos or attempt to interfere with their operation</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        4. AI Voice Services Specific Terms
      </h2>
      <p className="mb-4 text-gray-300">
        For our AI voice agent services, additional terms apply:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          You are responsible for ensuring compliance with call recording laws
          in your jurisdiction
        </li>
        <li>
          Call data and recordings are processed to improve AI performance and
          service quality
        </li>
        <li>
          You must obtain appropriate consent from callers when required by law
        </li>
        <li>
          AI responses are generated automatically and may require human
          oversight
        </li>
        <li>
          You remain responsible for the content and accuracy of information
          provided to the AI
        </li>
        <li>
          Demos may collect interaction data for improvement and analytics
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        5. Payment Terms
      </h2>
      <p className="mb-4 text-gray-300">
        Payment terms are specified in your service agreement:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          Fees are due according to the billing schedule in your agreement
        </li>
        <li>Setup fees are typically due upfront</li>
        <li>Late payments may result in service suspension</li>
        <li>All fees are non-refundable unless otherwise specified</li>
        <li>We may change pricing with 30 days' notice</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        6. Data and Privacy
      </h2>
      <p className="mb-4 text-gray-300">Regarding your data:</p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Your business data remains in your systems</li>
        <li>
          We store metadata and call transcripts for quality and improvement
        </li>
        <li>Data retention periods are configurable per your requirements</li>
        <li>We implement industry-standard security measures</li>
        <li>See our Privacy Policy for detailed information</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        7. Limitations of Liability
      </h2>
      <p className="mb-4 text-gray-300">
        To the maximum extent permitted by law:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          Our liability is limited to the fees paid for services in the
          preceding 12 months
        </li>
        <li>
          We are not liable for indirect, incidental, or consequential damages
        </li>
        <li>We are not responsible for third-party integrations or services</li>
        <li>AI-generated responses are provided "as is" without warranties</li>
        <li>You are responsible for backing up your data</li>
        <li>All demos are provided "as-is" without warranties of any kind</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        8. Contact Information
      </h2>
      <p className="text-gray-300">
        If you have any questions about these Terms, contact us:
      </p>
      <div className="mt-4 space-y-2 text-gray-300">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:legal@agenxus.com"
            className="text-blue-400 hover:underline"
          >
            legal@agenxus.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+18722778841" className="text-blue-400 hover:underline">
            (872) 277-8841
          </a>
        </p>
      </div>
    </div>
  );
}
