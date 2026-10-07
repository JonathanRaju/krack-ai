import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Krack-AI",
  description:
    "Read the Terms & Conditions governing the use of Krack-AI and its AI-powered interview assistance services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-5 rounded-lg bg-blue-50 border border-blue-100">
            <span className="text-sm font-semibold text-blue-700">
              Legal Information
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950">
            Terms &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm">

          {/* Introduction */}
          <section className="mb-10">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-base md:text-lg text-slate-700 leading-8">
                Welcome to Krack-AI. These Terms & Conditions govern
                your access to and use of our website, applications,
                and services. By using Krack-AI, you agree to comply
                with these terms.
              </p>
            </div>
          </section>

          {/* 1 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-slate-600 leading-8">
              By creating an account, purchasing a subscription,
              or using Krack-AI services, you agree to these
              Terms & Conditions and our Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              2. Eligibility
            </h2>

            <p className="text-slate-600 leading-8">
              You must be at least 18 years old or have the consent
              of a parent or guardian to use Krack-AI.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              3. User Accounts
            </h2>

            <ul className="space-y-3 text-slate-600">
              {[
                "You are responsible for maintaining account security.",
                "You must provide accurate information.",
                "You are responsible for activities performed using your account.",
                "You must notify us immediately of unauthorized access.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              4. Subscription & Payments
            </h2>

            <ul className="space-y-3 text-slate-600">
              {[
                "Paid plans provide additional usage minutes and features.",
                "Prices are subject to change without notice.",
                "Payments are processed through third-party providers.",
                "You agree to pay all applicable charges associated with your plan.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              5. Refund Policy
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="text-slate-600 leading-8">
                Due to the digital nature of our services, purchases
                may not be refundable after successful delivery of
                credits, minutes, or premium features unless required
                by applicable law.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              6. Acceptable Use
            </h2>

            <p className="text-slate-600 mb-4">
              You agree not to:
            </p>

            <ul className="space-y-3 text-slate-600">
              {[
                "Use the service for unlawful purposes.",
                "Attempt to reverse engineer the platform.",
                "Interfere with platform security.",
                "Abuse system resources.",
                "Share accounts with multiple users.",
                "Use automated tools to exploit the service.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              7. AI Disclaimer
            </h2>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
              <p className="text-slate-700 leading-8">
                Krack-AI provides AI-generated suggestions and
                interview assistance. While we strive for accuracy,
                responses may contain inaccuracies or incomplete
                information. Users are responsible for verifying
                outputs before relying on them.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              8. Intellectual Property
            </h2>

            <p className="text-slate-600 leading-8">
              All software, branding, logos, designs, content,
              and technology associated with Krack-AI remain the
              exclusive property of Krack-AI and its licensors.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              9. Service Availability
            </h2>

            <p className="text-slate-600 leading-8">
              We may modify, suspend, or discontinue any part of
              the service at any time without prior notice.
            </p>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              10. Account Suspension
            </h2>

            <p className="text-slate-600 leading-8">
              We reserve the right to suspend or terminate accounts
              that violate these terms or engage in activities that
              may harm the platform or its users.
            </p>
          </section>

          {/* 11 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              11. Limitation of Liability
            </h2>

            <p className="text-slate-600 leading-8">
              To the maximum extent permitted by law, Krack-AI shall
              not be liable for indirect, incidental, consequential,
              or special damages arising from your use of the service.
            </p>
          </section>

          {/* 12 */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              12. Changes to Terms
            </h2>

            <p className="text-slate-600 leading-8">
              We may update these Terms & Conditions periodically.
              Continued use of Krack-AI after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
              13. Contact Us
            </h2>

            <div className="bg-slate-950 rounded-xl p-6">
              <div className="space-y-3">
                <p className="text-slate-300">
                  Email:{" "}
                  <a
                    href="mailto:support@krack-ai.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    support@krack-ai.com
                  </a>
                </p>

                <p className="text-slate-300">
                  Website:{" "}
                  <a
                    href="https://krack-ai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    krack-ai.com
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Krack-AI. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}