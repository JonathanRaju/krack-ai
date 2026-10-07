import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Krack-AI",
  description:
    "Read Krack-AI's refund policy for subscriptions, minutes, and digital services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
            Payments & Refunds
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tight">
            Refund{" "}
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
                At Krack-AI, we strive to provide a high-quality AI-powered
                interview assistance experience. This Refund Policy explains
                when refunds may or may not be available for purchases made
                through our platform.
              </p>

            </div>

          </section>


          {/* =====================================================
              1. DIGITAL SERVICES
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              1. Digital Services
            </h2>

            <p className="text-slate-600 leading-8">
              Krack-AI provides digital products and services, including
              interview assistance minutes, subscriptions, premium features,
              and AI-powered tools. Once these services have been delivered
              or activated, they are generally non-refundable.
            </p>

          </section>


          {/* =====================================================
              2. ELIGIBLE REFUNDS
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              2. Eligible Refund Cases
            </h2>

            <p className="text-slate-600 mb-5 leading-7">
              Refund requests may be considered under the following
              situations:
            </p>

            <div className="space-y-3">

              {[
                "Duplicate payment was made accidentally.",
                "Payment was successful but minutes were not credited.",
                "Technical issues prevented service activation.",
                "Incorrect charge due to a system error.",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
                    bg-blue-50/50
                    border
                    border-blue-100
                    rounded-xl
                    p-4
                  "
                >

                  <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 shrink-0" />

                  <p className="text-slate-600">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </section>


          {/* =====================================================
              3. NON REFUNDABLE
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              3. Non-Refundable Cases
            </h2>

            <div className="space-y-3">

              {[
                "Minutes have already been used.",
                "Subscription benefits have been accessed.",
                "Change of mind after purchase.",
                "User purchased the wrong plan.",
                "User no longer wishes to use the service.",
                "Issues caused by internet connectivity or user device limitations.",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
                    border-b
                    border-slate-100
                    pb-3
                  "
                >

                  <div className="w-2 h-2 mt-2.5 rounded-full bg-slate-400 shrink-0" />

                  <p className="text-slate-600">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </section>


          {/* =====================================================
              4. REQUEST WINDOW
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              4. Refund Request Window
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">

              <p className="text-slate-600 leading-8">
                Refund requests must be submitted within 7 days of the
                original payment date. Requests submitted after this period
                may not be eligible for review.
              </p>

            </div>

          </section>


          {/* =====================================================
              5. PROCESSING TIME
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              5. Processing Time
            </h2>

            <p className="text-slate-600 leading-8">
              Approved refunds are typically processed within 5–10 business
              days. Actual credit timelines depend on your payment provider
              and financial institution.
            </p>

          </section>


          {/* =====================================================
              6. FRAUD PREVENTION
          ===================================================== */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              6. Fraud Prevention
            </h2>

            <div className="bg-slate-950 rounded-xl p-6">

              <p className="text-slate-300 leading-8">
                Krack-AI reserves the right to deny refund requests that
                appear fraudulent, abusive, or intended to exploit the
                platform.
              </p>

            </div>

          </section>


          {/* =====================================================
              7. CONTACT
          ===================================================== */}

          <section>

            <h2 className="text-3xl font-bold text-slate-950 mb-5">
              7. Contact Us
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              For refund-related questions, please contact:
            </p>

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
                  href="mailto:support@krack-ai.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  support@krack-ai.com
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
            Krack-AI · Payments & Refunds
          </p>

        </div>

      </div>
    </main>
  );
}