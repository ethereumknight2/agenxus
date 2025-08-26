export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <p className="mb-6 text-gray-300">Effective Date: January 21, 2025</p>
      <p className="mb-8 text-gray-300 text-lg leading-relaxed">
        At Agenxus, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy explains how
        we collect, use, and protect your data when you use our AI voice agent
        services.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-gray-300">
        We collect information you provide directly to us, such as when you
        create an account, request information, or contact us for support. This
        may include:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Contact information (name, email address, phone number)</li>
        <li>Business information (company name, industry, role)</li>
        <li>Communication preferences</li>
        <li>Information provided during demo calls or consultations</li>
        <li>Interaction data when using our AI agents</li>
        <li>Voice recordings and call transcripts (with proper consent)</li>
        <li>
          Technical information (IP address, browser type, device information)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-300">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Provide, maintain, and improve our AI voice agent services</li>
        <li>Process transactions and send related information</li>
        <li>Send technical notices, updates, and support messages</li>
        <li>
          Respond to your comments, questions, and customer service requests
        </li>
        <li>Communicate with you about products, services, and events</li>
        <li>Monitor and analyze usage and trends to improve user experience</li>
        <li>Provide demo experiences of our AI agents</li>
        <li>Train and improve our AI models (with anonymized data)</li>
        <li>Confirm, reschedule, or cancel appointments</li>
        <li>Ensure security and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        3. Information Sharing
      </h2>
      <p className="mb-4 text-gray-300">
        We do not sell, trade, or otherwise transfer your personal information
        to third parties except as described in this policy:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          <strong>Service Providers:</strong> We may share information with
          trusted third-party service providers who assist us in operating our
          services (such as cloud hosting, payment processing, and analytics)
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose information if
          required by law or to protect our rights and safety
        </li>
        <li>
          <strong>Business Transfers:</strong> Information may be transferred in
          connection with a merger, acquisition, or sale of assets
        </li>
        <li>
          <strong>Consent:</strong> We may share information with your explicit
          consent
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        4. Data Security
      </h2>
      <p className="mb-6 text-gray-300">
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. These measures include
        encryption of data in transit and at rest, regular security assessments,
        access controls, and employee training on data protection practices.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        5. Your Rights
      </h2>
      <p className="mb-4 text-gray-300">
        Depending on your location, you may have certain rights regarding your
        personal information, including the right to access, correct, delete,
        restrict processing, object to processing, and data portability.
      </p>
      <p className="mb-6 text-gray-300">
        To exercise these rights, contact us at{" "}
        <a
          href="mailto:privacy@agenxus.com"
          className="text-blue-400 hover:underline"
        >
          privacy@agenxus.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        6. Contact Us
      </h2>
      <p className="text-gray-300 mb-4">
        If you have questions about this Privacy Policy or our data practices,
        please contact us:
      </p>
      <div className="bg-white/5 rounded-lg p-6 space-y-3 text-gray-300">
        <p>
          <strong>Privacy Officer</strong>
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:privacy@agenxus.com"
            className="text-blue-400 hover:underline"
          >
            privacy@agenxus.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+18722778841" className="text-blue-400 hover:underline">
            (872) 277-8841
          </a>
        </p>
        <p>
          <strong>Response Time:</strong> We aim to respond to privacy inquiries
          within 30 days
        </p>
      </div>

      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-gray-300">
          <strong>Last Updated:</strong> January 21, 2025
          <br />
          This privacy policy is effective immediately and governs our
          collection and use of personal information.
        </p>
      </div>
    </div>
  );
}
