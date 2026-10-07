"use client";

import { useEffect, useState } from "react";
import { Check, Sparkles } from "lucide-react";

// @ts-ignore
import { load } from "@cashfreepayments/cashfree-js";

import Snackbar from "@/components/SnackBar";
import useSnackbar from "@/hooks/useSnackbar";

interface Plan {
  active: boolean;
  badge: string;
  bonusMinutes: number;
  features: string[];
  id: string;
  minutes: number;
  name: string;
  offerPrice: number;
  originalPrice: number;
}

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [cashfree, setCashfree] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const {
    snackbar,
    showSnackbar,
  } = useSnackbar();

  useEffect(() => {
    loadPlans();
  }, []);

  useEffect(() => {
    async function init() {
      const cf = await load({
        mode: "production",
      });

      setCashfree(cf);
    }

    init();
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await fetch("/api/me");
      const data = await response.json();

      if (data.authenticated) {
        setUser({ ...data.user });
        return data.user;
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadPlans = async () => {
    try {
      const response = await fetch("/api/get-plans");
      const data: Plan[] = await response.json();

      if (data) {
        setPlans(
          data.filter((plan) => plan.active)
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section
        id="pricing"
        className="py-20 bg-slate-50"
      >
        <div className="flex flex-col items-center justify-center py-10">

          <div
            className="
              h-10
              w-10
              rounded-full
              border-4
              border-blue-100
              border-t-blue-600
              border-r-indigo-500
              animate-spin
            "
          />

          <p className="mt-4 text-sm font-medium text-slate-500">
            Loading plans...
          </p>

        </div>
      </section>
    );
  }

  const handleBuy = async (plan: Plan) => {
    let currentUser = user;

    if (!currentUser) {
      currentUser = await loadUser();
    }

    if (!currentUser) {
      showSnackbar("Please login first", "error");
      return;
    }

    try {
      const response = await fetch(
        "/api/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: currentUser.email,
            phone: currentUser.phone,
            planId: plan.id,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        showSnackbar(
          "Payment failed",
          "error"
        );
        return;
      }

      const result = await cashfree.checkout({
        paymentSessionId:
          data.paymentSessionId,
        redirectTarget: "_modal",
      });

      if (result?.paymentDetails) {
        await verifyPayment(data.orderId);
      }
    } catch (error) {
      showSnackbar(
        "Payment Error",
        "error"
      );
    }
  };

  const verifyPayment = async (
    orderId: string
  ) => {
    try {
      const response = await fetch(
        `/api/verify-payment/${orderId}`
      );

      const data = await response.json();

      if (data.status === "PAID") {
        showSnackbar(
          "Payment Successful",
          "success"
        );

        loadUser();
      } else {
        showSnackbar(
          "Payment Pending",
          "warning"
        );
      }
    } catch {
      showSnackbar(
        "Verification Failed",
        "error"
      );
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 md:py-24 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-sm
              font-semibold
              mb-6
            "
          >
            <Sparkles size={15} />
            Simple & Transparent
          </div>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              text-slate-950
            "
          >
            Simple{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              pricing
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            Choose a plan and start cracking
            interviews today.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan) => {

            const isPopular = Boolean(plan.badge);

            return (
              <div
                key={plan.id}
                className={`
                  relative
                  rounded-2xl
                  bg-white
                  p-8
                  md:p-9
                  transition-all
                  duration-300
                  flex
                  flex-col

                  ${
                    isPopular
                      ? `
                        border-2
                        border-blue-600
                        shadow-xl
                        shadow-blue-100
                        lg:-translate-y-2
                      `
                      : `
                        border
                        border-slate-200
                        hover:border-blue-200
                        hover:shadow-xl
                        hover:shadow-slate-200/60
                        hover:-translate-y-1
                      `
                  }
                `}
              >

                {/* Popular Badge */}
                {plan.badge && (
                  <div
                    className="
                      absolute
                      -top-4
                      left-1/2
                      -translate-x-1/2
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-5
                        py-2
                        rounded-full
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-white
                        bg-blue-600
                        shadow-lg
                        shadow-blue-200
                      "
                    >
                      <Sparkles size={13} />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-slate-900
                  "
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-6">

                  {plan.offerPrice < plan.originalPrice && (
                    <div
                      className="
                        text-slate-400
                        line-through
                        text-lg
                        mb-1
                      "
                    >
                      ₹{plan.originalPrice}
                    </div>
                  )}

                  <div className="flex items-end gap-2">

                    <span
                      className="
                        text-6xl
                        md:text-7xl
                        font-extrabold
                        tracking-tight
                        text-slate-950
                      "
                    >
                      ₹{plan.offerPrice}
                    </span>

                  </div>

                </div>

                {/* Minutes */}
                <div className="mt-5">

                  <div
                    className="
                      inline-flex
                      items-center
                      px-3
                      py-1.5
                      rounded-lg
                      bg-blue-50
                      text-blue-700
                      font-semibold
                    "
                  >
                    {plan.minutes} Minutes
                  </div>

                  {plan.bonusMinutes > 0 && (
                    <div
                      className="
                        text-emerald-600
                        font-semibold
                        mt-2
                      "
                    >
                      +{plan.bonusMinutes} Bonus Minutes
                    </div>
                  )}

                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 my-8" />

                {/* Features */}
                <div className="space-y-4 flex-1">

                  {plan.features.map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >

                        <div
                          className="
                            w-6
                            h-6
                            rounded-full
                            bg-blue-50
                            flex
                            items-center
                            justify-center
                            shrink-0
                            mt-0.5
                          "
                        >
                          <Check
                            size={15}
                            strokeWidth={2.5}
                            className="text-blue-600"
                          />
                        </div>

                        <span
                          className="
                            text-base
                            md:text-lg
                            text-slate-700
                            leading-relaxed
                          "
                        >
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBuy(plan)}
                  className={`
                    w-full
                    mt-10
                    py-4
                    rounded-xl
                    text-lg
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      isPopular
                        ? `
                          bg-blue-600
                          text-white
                          hover:bg-blue-700
                          shadow-lg
                          shadow-blue-200
                          hover:-translate-y-0.5
                        `
                        : `
                          border
                          border-slate-200
                          text-slate-800
                          bg-white
                          hover:border-blue-300
                          hover:bg-blue-50
                          hover:text-blue-700
                        `
                    }
                  `}
                >
                  Buy Now
                </button>

              </div>
            );
          })}

        </div>

        {/* Small reassurance */}
        <div className="flex justify-center mt-10">

          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-500
            "
          >
            <Check
              size={16}
              className="text-blue-600"
            />

            Secure payment powered by Cashfree
          </div>

        </div>

        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          type={snackbar.type}
        />

      </div>
    </section>
  );
}