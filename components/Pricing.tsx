"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
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
    const [plans, setPlans] =
        useState<Plan[]>([]);
    const [cashfree, setCashfree] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);
    const [user, setUser] = useState(null)

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
        loadUser()
        console.log(user)
    }, []);

    const loadUser = async () => {
        try {
            const response = await fetch("/api/me");

            const data = await response.json();

            if (data.authenticated) {
                console.log(data.user)
                setUser({ ...data.user });
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const loadPlans = async () => {
        try {
            const response =
                await fetch("/api/get-plans");

            const data: Plan[] =
                await response.json();

            setPlans(
                data.filter(
                    (plan) => plan.active
                )
            );
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
                className="py-20"
            >
                <div className="text-center">
                    Loading plans...
                </div>
            </section>
        );
    }

    const handleBuy = async (
        plan: Plan
    ) => {
        if (!user) {
            showSnackbar(
                "Please login first",
                "error"
            );


            return;
        }

        try {
            const response =
                await fetch(
                    "/api/create-payment",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            // @ts-ignore
                            email:user.email,
                            // @ts-ignore
                            phone:user.phone,
                            planId:
                                plan.id,
                        }),
                    }
                );

            const data =
                await response.json();

            if (!data.success) {
                showSnackbar(
                    "Payment failed",
                    "error"
                );
                return;
            }

            const result =
                await cashfree.checkout({
                    paymentSessionId:
                        data.paymentSessionId,
                    redirectTarget:
                        "_modal",
                });

            if (
                result?.paymentDetails
            ) {
                await verifyPayment(
                    data.orderId
                );
            }
        } catch (error) {
            showSnackbar(
                "Payment Error",
                "error"
            );
        }
    };

    const verifyPayment =
        async (
            orderId: string
        ) => {
            try {
                const response =
                    await fetch(
                        `/api/verify-payment/${orderId}`
                    );

                const data =
                    await response.json();

                if (
                    data.status ===
                    "PAID"
                ) {
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
            className="py-10 bg-[#fafafa]"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-[#020826]">
                        Simple{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                            pricing
                        </span>
                    </h2>

                    <p className="mt-6 text-2xl text-slate-500">
                        Choose a plan and
                        start cracking
                        interviews today.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-[32px] bg-white p-10 transition-all duration-300 ${plan.badge
                                    ? "border-2 border-orange-400 shadow-xl shadow-orange-100"
                                    : "border border-gray-200"
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span
                                        className="
                    px-6
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    text-white
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-300
                  "
                                    >
                                        {plan.badge.toUpperCase()}
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-4xl font-bold text-[#020826]">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mt-6">
                                {plan.offerPrice <
                                    plan.originalPrice && (
                                        <div className="text-slate-400 line-through text-2xl mb-2">
                                            ₹
                                            {
                                                plan.originalPrice
                                            }
                                        </div>
                                    )}

                                <div className="flex items-end">
                                    <span className="text-7xl font-extrabold text-[#020826]">
                                        ₹
                                        {
                                            plan.offerPrice
                                        }
                                    </span>
                                </div>
                            </div>

                            {/* Minutes */}
                            <div className="mt-4">
                                <div className="text-lg font-semibold text-pink-600">
                                    {plan.minutes} Minutes
                                </div>

                                {plan.bonusMinutes >
                                    0 && (
                                        <div className="text-green-600 font-medium mt-1">
                                            +
                                            {
                                                plan.bonusMinutes
                                            }{" "}
                                            Bonus Minutes
                                        </div>
                                    )}
                            </div>

                            {/* Features */}
                            <div className="mt-10 space-y-5">
                                {plan.features.map(
                                    (
                                        feature,
                                        index
                                    ) => (
                                        <div
                                            key={
                                                index
                                            }
                                            className="flex items-center gap-4"
                                        >
                                            <Check
                                                size={
                                                    22
                                                }
                                                className="text-pink-500"
                                            />

                                            <span className="text-lg text-[#020826]">
                                                {
                                                    feature
                                                }
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() =>
                                    handleBuy(plan)
                                }
                                className={`
                  w-full
                  mt-12
                  py-5
                  rounded-full
                  text-xl
                  font-semibold
                  transition
                  ${plan.badge
                                        ? "bg-gradient-to-r from-pink-500 to-orange-300 text-white hover:scale-[1.02]"
                                        : "border border-gray-200 text-[#020826] bg-white hover:bg-gray-50"
                                    }
                `}
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
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