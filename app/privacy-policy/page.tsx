import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Krack-AI",
  description:
    "Learn how Krack-AI collects, uses, and protects your information while providing AI-powered interview assistance.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fafafa] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#020826]">
            Privacy{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">

          <section className="mb-10">
            <p className="text-lg text-slate-600 leading-8">
              Welcome to Krack-AI ("Krack-AI", "we", "our", or "us").
              Your privacy is important to us. This Privacy Policy
              explains how we collect, use, store, and protect your
              information when you use our website, applications,
              and services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              Account Information
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Technology Stack</li>
              <li>Coding Languages</li>
              <li>Professional Experience</li>
              <li>Project Information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              Usage Information
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Login activity</li>
              <li>Subscription status</li>
              <li>Minutes usage</li>
              <li>Browser information</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Error logs</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Create and manage your account</li>
              <li>Provide AI-powered interview assistance</li>
              <li>Process subscriptions and payments</li>
              <li>Verify your identity</li>
              <li>Improve platform performance</li>
              <li>Provide customer support</li>
              <li>Prevent abuse and fraud</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              3. AI Processing & Interview Data
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI is built with privacy in mind. We do not
              permanently store live interview audio, recordings,
              transcriptions, or generated responses. Some temporary
              processing may occur to provide requested functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              4. Payment Information
            </h2>

            <p className="text-slate-600 leading-8">
              Payments are processed through trusted third-party
              payment providers. Krack-AI does not store credit card
              numbers, debit card information, banking credentials,
              or UPI PINs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              5. Data Security
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Secure HTTPS connections</li>
              <li>Password hashing</li>
              <li>Authentication protections</li>
              <li>Encrypted communication channels</li>
              <li>Access control mechanisms</li>
            </ul>

            <p className="text-slate-600 mt-4">
              While we take reasonable measures to protect your data,
              no internet transmission is completely secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              6. Cookies
            </h2>

            <p className="text-slate-600 leading-8">
              We use cookies and similar technologies to maintain
              login sessions, improve user experience, analyze
              platform usage, and remember preferences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              7. Third-Party Services
            </h2>

            <p className="text-slate-600 leading-8">
              We may use third-party providers for payments,
              analytics, email delivery, cloud hosting, and customer
              support. These providers only receive information
              necessary to perform their services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              8. Account Deletion
            </h2>

            <p className="text-slate-600 leading-8">
              You may request deletion of your account at any time.
              We will remove your personal information unless
              retention is required by law or for fraud prevention.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              9. Children's Privacy
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI is not intended for individuals under the age
              of 13, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              10. Changes To This Policy
            </h2>

            <p className="text-slate-600 leading-8">
              We may update this Privacy Policy from time to time.
              Changes become effective immediately upon publication
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              11. Contact Us
            </h2>

            <div className="space-y-3 text-slate-600">
              <p>Email: support@krack-ai.com</p>
              <p>Website: https://krack-ai.com</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}