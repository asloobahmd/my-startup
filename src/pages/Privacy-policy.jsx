const PrivacyPolicy = () => {
  return (
    <main className="min-h-[calc(100vh-90px)] pt-16 md:pt-36 bg-white">
      {/* Blue box for stylish heading */}
      <div className="bg-accent-dark h-[200px] smm:h-[255px] pt-[110px] smm:pt-36">
        <h1 className="container p-3 text-3xl smm:text-4xl font-bold text-accenttext">
          Privacy Policy
        </h1>
      </div>

      {/* Main content */}
      <div className="container p-3 mt-5 sm:mt-10 text-black">
        {/* Effective Date */}
        <p className="mb-4">
          <strong>Effective Date:</strong> [2024-12-01]
        </p>

        {/* Introduction */}
        <section className="mb-6">
          <p className="text-gray-700">
            At Axient Labs, your privacy is a priority. This Privacy Policy
            outlines how we collect, use, and protect your personal information
            when you interact with our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-3">
            We collect personal information only when you choose to interact
            with our website by filling out our Contact Form. The information
            you provide helps us respond to your inquiries and requests
            effectively.
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>
              <strong>Name:</strong> To address you personally.
            </li>
            <li>
              <strong>Email Address:</strong> To respond to your queries and
              provide requested information.
            </li>
            <li>
              <strong>Subject:</strong> To understand the nature of your
              inquiry.
            </li>
            <li>
              <strong>Message:</strong> To address your specific concerns or
              requests.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-3">
            We use the information you provide exclusively for:
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Responding to your inquiries.</li>
            <li>
              Offering relevant services or project details based on your
              request.
            </li>
          </ul>
          <p className="text-gray-700">
            We do not share, sell, or use your personal information for any
            purpose other than what you’ve consented to.
          </p>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Newsletter Subscription (Upcoming Feature)
          </h2>
          <p className="text-gray-700">
            While we’re preparing to launch our newsletter in the future, it’s
            not active yet. Once it becomes available, you’ll have the option to
            subscribe by entering your email address in the newsletter input
            field. If you choose to provide your email, you’re giving us
            permission to send you newsletters and updates. We will use your
            email address exclusively for this purpose, and you’ll always have
            control over your subscription.
          </p>
        </section>

        {/* Data Protection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
          <p className="text-gray-700">
            We take appropriate measures to safeguard your personal information
            against unauthorized access, disclosure, or misuse. Our systems and
            procedures are designed with security in mind to protect your data.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Access the personal information you’ve shared with us.</li>
            <li>
              Request corrections to your personal information if it is
              inaccurate or incomplete.
            </li>
            <li>
              Request the deletion of your data, subject to applicable legal
              requirements.
            </li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at:
          </p>
          <p className="text-gray-700 mt-3">
            <strong>Email:</strong> axientlabs@gmail.com
          </p>
        </section>

        {/* Updates to This Privacy Policy */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Updates to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal obligations. Please review this
            page periodically for the latest information.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
