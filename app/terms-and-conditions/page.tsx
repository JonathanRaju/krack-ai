import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Krack-AI",
  description:
    "Read the Terms & Conditions governing the use of Krack-AI and its AI-powered interview assistance services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#fafafa] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#020826]">
            Terms &{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Conditions
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
              Welcome to Krack-AI. These Terms & Conditions govern
              your access to and use of our website, applications,
              and services. By using Krack-AI, you agree to comply
              with these terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-slate-600 leading-8">
              By creating an account, purchasing a subscription,
              or using Krack-AI services, you agree to these
              Terms & Conditions and our Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              2. Eligibility
            </h2>

            <p className="text-slate-600 leading-8">
              You must be at least 18 years old or have the consent
              of a parent or guardian to use Krack-AI.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              3. User Accounts
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>You are responsible for maintaining account security.</li>
              <li>You must provide accurate information.</li>
              <li>You are responsible for activities performed using your account.</li>
              <li>You must notify us immediately of unauthorized access.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              4. Subscription & Payments
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Paid plans provide additional usage minutes and features.</li>
              <li>Prices are subject to change without notice.</li>
              <li>Payments are processed through third-party providers.</li>
              <li>You agree to pay all applicable charges associated with your plan.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              5. Refund Policy
            </h2>

            <p className="text-slate-600 leading-8">
              Due to the digital nature of our services, purchases
              may not be refundable after successful delivery of
              credits, minutes, or premium features unless required
              by applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              6. Acceptable Use
            </h2>

            <p className="text-slate-600 mb-4">
              You agree not to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Use the service for unlawful purposes.</li>
              <li>Attempt to reverse engineer the platform.</li>
              <li>Interfere with platform security.</li>
              <li>Abuse system resources.</li>
              <li>Share accounts with multiple users.</li>
              <li>Use automated tools to exploit the service.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              7. AI Disclaimer
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI provides AI-generated suggestions and
              interview assistance. While we strive for accuracy,
              responses may contain inaccuracies or incomplete
              information. Users are responsible for verifying
              outputs before relying on them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              8. Intellectual Property
            </h2>

            <p className="text-slate-600 leading-8">
              All software, branding, logos, designs, content,
              and technology associated with Krack-AI remain the
              exclusive property of Krack-AI and its licensors.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              9. Service Availability
            </h2>

            <p className="text-slate-600 leading-8">
              We may modify, suspend, or discontinue any part of
              the service at any time without prior notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              10. Account Suspension
            </h2>

            <p className="text-slate-600 leading-8">
              We reserve the right to suspend or terminate accounts
              that violate these terms or engage in activities that
              may harm the platform or its users.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              11. Limitation of Liability
            </h2>

            <p className="text-slate-600 leading-8">
              To the maximum extent permitted by law, Krack-AI shall
              not be liable for indirect, incidental, consequential,
              or special damages arising from your use of the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              12. Changes to Terms
            </h2>

            <p className="text-slate-600 leading-8">
              We may update these Terms & Conditions periodically.
              Continued use of Krack-AI after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              13. Contact Us
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