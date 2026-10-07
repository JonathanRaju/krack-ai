import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Krack-AI",
  description:
    "Learn how Krack-AI collects, uses, and protects your information while providing AI-powered interview assistance.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
            Privacy & Security
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tight">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500">
            Last Updated: June 2026
          </p>

        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-7
            md:p-12
            shadow-sm
          "
        >

          {/* INTRO */}
          <section className="mb-12">

            <div className="border-l-4 border-blue-600 bg-blue-50/50 rounded-r-xl p-6">

              <p className="text-lg text-slate-600 leading-8">
                Welcome to Krack-AI ("Krack-AI", "we", "our", or "us").
                Your privacy is important to us. This Privacy Policy
                explains how we collect, use, store, and protect your
                information when you use our website, applications,
                and services.
              </p>

            </div>

          </section>


          {/* =====================================================
              1. INFORMATION WE COLLECT
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-6">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Account Information
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-7">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Technology Stack</li>
              <li>Coding Languages</li>
              <li>Professional Experience</li>
              <li>Project Information</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">
              Usage Information
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-7">
              <li>Login activity</li>
              <li>Subscription status</li>
              <li>Minutes usage</li>
              <li>Browser information</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Error logs</li>
            </ul>

          </section>


          {/* =====================================================
              2. HOW WE USE
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-7">
              <li>Create and manage your account</li>
              <li>Provide AI-powered interview assistance</li>
              <li>Process subscriptions and payments</li>
              <li>Verify your identity</li>
              <li>Improve platform performance</li>
              <li>Provide customer support</li>
              <li>Prevent abuse and fraud</li>
            </ul>

          </section>


          {/* =====================================================
              3. AI PROCESSING
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              3. AI Processing & Interview Data
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">

              <p className="text-slate-600 leading-8">
                Krack-AI is built with privacy in mind. We do not
                permanently store live interview audio, recordings,
                transcriptions, or generated responses. Some temporary
                processing may occur to provide requested functionality.
              </p>

            </div>

          </section>


          {/* =====================================================
              4. PAYMENT
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              4. Payment Information
            </h2>

            <p className="text-slate-600 leading-8">
              Payments are processed through trusted third-party
              payment providers. Krack-AI does not store credit card
              numbers, debit card information, banking credentials,
              or UPI PINs.
            </p>

          </section>


          {/* =====================================================
              5. SECURITY
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              5. Data Security
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-7">
              <li>Secure HTTPS connections</li>
              <li>Password hashing</li>
              <li>Authentication protections</li>
              <li>Encrypted communication channels</li>
              <li>Access control mechanisms</li>
            </ul>

            <p className="text-slate-600 mt-5 leading-8">
              While we take reasonable measures to protect your data,
              no internet transmission is completely secure.
            </p>

          </section>


          {/* =====================================================
              6. COOKIES
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              6. Cookies
            </h2>

            <p className="text-slate-600 leading-8">
              We use cookies and similar technologies to maintain
              login sessions, improve user experience, analyze
              platform usage, and remember preferences.
            </p>

          </section>


          {/* =====================================================
              7. THIRD PARTY
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              7. Third-Party Services
            </h2>

            <p className="text-slate-600 leading-8">
              We may use third-party providers for payments,
              analytics, email delivery, cloud hosting, and customer
              support. These providers only receive information
              necessary to perform their services.
            </p>

          </section>


          {/* =====================================================
              8. ACCOUNT DELETION
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              8. Account Deletion
            </h2>

            <p className="text-slate-600 leading-8">
              You may request deletion of your account at any time.
              We will remove your personal information unless
              retention is required by law or for fraud prevention.
            </p>

          </section>


          {/* =====================================================
              9. CHILDREN
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              9. Children's Privacy
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI is not intended for individuals under the age
              of 13, and we do not knowingly collect personal
              information from children.
            </p>

          </section>


          {/* =====================================================
              10. CHANGES
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              10. Changes To This Policy
            </h2>

            <p className="text-slate-600 leading-8">
              We may update this Privacy Policy from time to time.
              Changes become effective immediately upon publication
              on this page.
            </p>

          </section>


          {/* =====================================================
              11. CONTACT
          ===================================================== */}

          <section>

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              11. Contact Us
            </h2>

            <div
              className="
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                p-6
                space-y-3
              "
            >

              <p className="text-slate-600">
                <span className="font-semibold text-slate-800">
                  Email:
                </span>{" "}
                <a
                  href="mailto:krack.ai.ai@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  krack.ai.ai@gmail.com
                </a>
              </p>

              <p className="text-slate-600">
                <span className="font-semibold text-slate-800">
                  Website:
                </span>{" "}
                <a
                  href="https://krack-ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  krack-ai.com
                </a>
              </p>

            </div>

          </section>

        </div>


        {/* =====================================================
            FOOTER NOTE
        ===================================================== */}

        <div className="text-center mt-8">

          <p className="text-sm text-slate-400">
            Krack-AI · Privacy & Security
          </p>

        </div>

      </div>
    </main>
  );
}