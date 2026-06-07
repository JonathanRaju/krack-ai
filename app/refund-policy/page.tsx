import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Krack-AI",
  description:
    "Read Krack-AI's refund policy for subscriptions, minutes, and digital services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#fafafa] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#020826]">
            Refund{" "}
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
              At Krack-AI, we strive to provide a high-quality AI-powered
              interview assistance experience. This Refund Policy explains
              when refunds may or may not be available for purchases made
              through our platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              1. Digital Services
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI provides digital products and services, including
              interview assistance minutes, subscriptions, premium features,
              and AI-powered tools. Once these services have been delivered
              or activated, they are generally non-refundable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              2. Eligible Refund Cases
            </h2>

            <p className="text-slate-600 mb-4">
              Refund requests may be considered under the following situations:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Duplicate payment was made accidentally.</li>
              <li>Payment was successful but minutes were not credited.</li>
              <li>Technical issues prevented service activation.</li>
              <li>Incorrect charge due to a system error.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              3. Non-Refundable Cases
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Minutes have already been used.</li>
              <li>Subscription benefits have been accessed.</li>
              <li>Change of mind after purchase.</li>
              <li>User purchased the wrong plan.</li>
              <li>User no longer wishes to use the service.</li>
              <li>Issues caused by internet connectivity or user device limitations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              4. Refund Request Window
            </h2>

            <p className="text-slate-600 leading-8">
              Refund requests must be submitted within 7 days of the original
              payment date. Requests submitted after this period may not be
              eligible for review.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              5. Processing Time
            </h2>

            <p className="text-slate-600 leading-8">
              Approved refunds are typically processed within 5–10 business
              days. Actual credit timelines depend on your payment provider
              and financial institution.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              6. Fraud Prevention
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI reserves the right to deny refund requests that appear
              fraudulent, abusive, or intended to exploit the platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#020826] mb-4">
              7. Contact Us
            </h2>

            <div className="space-y-3 text-slate-600">
              <p>
                For refund-related questions, please contact:
              </p>

              <p>Email: support@krack-ai.com</p>

              <p>Website: https://krack-ai.com</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}