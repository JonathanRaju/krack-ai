"use client";

import React, { useState, useEffect } from "react";

import {
  Gift,
  Users,
  Copy,
  CheckCircle,
} from "lucide-react";

import Snackbar from "@/components/SnackBar";
import useSnackbar from "@/hooks/useSnackbar";

export default function ReferralProgramPage() {
  const [friendEmail, setFriendEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [referrals, setReferrals] = useState([]);
  const [referralsLoading, setReferralsLoading] = useState(false);

  const {
    snackbar,
    showSnackbar,
  } = useSnackbar();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    //@ts-ignore
    if (user?.email) {
      getReferrals();
    }
    //@ts-ignore
  }, [user?.email]);

  const loadUser = async () => {
    try {
      const response = await fetch("/api/me");
      const data = await response.json();

      if (data.authenticated) {
        setUser({ ...data.user });
        return data.user;
      } else {
        setUser({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getReferrals = async () => {
    //@ts-ignore
    if (!user?.email) return;

    try {
      setReferralsLoading(true);

      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //@ts-ignore
          email: user.email.toLowerCase(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setReferrals(data.referrals || []);
      } else {
        setReferrals([]);
      }
    } catch (err) {
      console.error("Failed to fetch referrals:", err);
      setReferrals([]);
    } finally {
      setReferralsLoading(false);
    }
  };

  const handleReferFriend = async () => {
    if (!friendEmail.trim()) {
      showSnackbar(
        "Please enter your friend's email",
        "error"
      );
      return;
    }

    try {
      setLoading(true);

      const storedUser = user;

      if (!storedUser) {
        showSnackbar(
          "Please login first",
          "error"
        );
        return;
      }
//@ts-ignore
      if (!user?.email) {
        showSnackbar(
          "Please Login",
          "error"
        );
        return;
      }

      const response = await fetch(
        "/api/referral",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //@ts-ignore
            referrerEmail: user?.email.toLowerCase(),
            referredEmail: friendEmail.trim().toLowerCase(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        showSnackbar(
          data.message ||
            "Failed to send referral",
          "error"
        );
        return;
      }

      showSnackbar(
        data.message ||
          "Referral invitation sent successfully!"
      );

      setFriendEmail("");

      // Refresh referrals
      getReferrals();

    } catch (error) {
      console.error(
        "Referral error:",
        error
      );

      showSnackbar(
        "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
            <Gift size={17} />
            Referral Rewards
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tight">
            Earn FREE{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Interview Minutes
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-500 leading-relaxed">
            Invite your friends to Krack-AI.
            When they purchase any plan using your
            referral link, you'll receive bonus AI
            interview minutes absolutely free.
          </p>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Simple Process
            </span>

            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* SHARE */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-8
                text-center
                shadow-sm
                hover:shadow-lg
                hover:border-blue-200
                transition-all
                duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-50 flex items-center justify-center">
                <Copy
                  size={30}
                  className="text-blue-600"
                />
              </div>

              <h3 className="font-bold text-2xl mt-6 text-slate-950">
                Share Your Link
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Copy your personal referral link
                and share it with friends.
              </p>

            </div>


            {/* REGISTER */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-8
                text-center
                shadow-sm
                hover:shadow-lg
                hover:border-indigo-200
                transition-all
                duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-xl bg-indigo-50 flex items-center justify-center">
                <Users
                  size={30}
                  className="text-indigo-600"
                />
              </div>

              <h3 className="font-bold text-2xl mt-6 text-slate-950">
                Friend Registers
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Your friend creates an account
                using your referral link.
              </p>

            </div>


            {/* REWARD */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-8
                text-center
                shadow-sm
                hover:shadow-lg
                hover:border-blue-200
                transition-all
                duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-50 flex items-center justify-center">
                <Gift
                  size={30}
                  className="text-blue-600"
                />
              </div>

              <h3 className="font-bold text-2xl mt-6 text-slate-950">
                Earn Rewards
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                When they purchase a plan,
                bonus minutes are instantly
                credited to your account.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          REWARD TABLE
      ===================================================== */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

            <div className="bg-slate-950 px-8 py-7">
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Gift size={20} className="text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Referral Rewards
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    Earn additional interview minutes as your referrals grow.
                  </p>
                </div>

              </div>
            </div>

            <div className="p-8">

              <div className="space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">

                  <span className="font-semibold text-slate-800">
                    Friend Purchases Any Plan
                  </span>

                  <span className="font-bold text-blue-600">
                    +10 FREE Minutes
                  </span>

                </div>


                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">

                  <span className="font-semibold text-slate-800">
                    5 Successful Referrals
                  </span>

                  <span className="font-bold text-blue-600">
                    +60 FREE Minutes
                  </span>

                </div>


                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                  <span className="font-semibold text-slate-800">
                    10 Successful Referrals
                  </span>

                  <span className="font-bold text-blue-600">
                    +120 FREE Minutes
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INVITE CTA
      ===================================================== */}

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div
            className="
              relative
              overflow-hidden
              bg-slate-950
              rounded-2xl
              p-10
              md:p-14
              text-center
              border
              border-slate-800
            "
          >

            {/* Decorative accents */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 font-semibold text-sm">
                <Gift size={16} />
                Referral Bonus
              </div>

              <h2 className="text-4xl font-bold text-white mt-6">
                Start Earning Free Interview Minutes
              </h2>

              <p className="mt-4 text-slate-400 text-lg">
                Share your referral link and earn
                rewards every time a friend purchases
                a Krack-AI plan.
              </p>

              <div className="mt-8 max-w-md mx-auto">

                <input
                  type="email"
                  value={friendEmail}
                  onChange={(e) =>
                    setFriendEmail(e.target.value)
                  }
                  placeholder="Enter friend's email"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    border
                    border-slate-700
                    outline-none
                    text-white
                    bg-slate-900
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                />

                <button
                  onClick={handleReferFriend}
                  disabled={loading}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    shadow-lg
                    shadow-blue-600/20
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    transition-all
                    duration-200
                  "
                >
                  <Gift size={18} />

                  {loading
                    ? "Sending..."
                    : "Invite Friend"}
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Benefits
            </span>

            <h2 className="text-4xl font-bold mt-3 text-slate-950">
              Why Refer Friends?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              "Earn bonus AI interview minutes",
              "No limit on referrals",
              "Rewards are credited automatically",
              "Help friends prepare for interviews",
            ].map((item) => (

              <div
                key={item}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200
                  p-6
                  flex
                  items-center
                  gap-4
                  shadow-sm
                  hover:border-blue-200
                  hover:shadow-md
                  transition-all
                  duration-200
                "
              >

                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center">

                  <CheckCircle
                    className="text-blue-600"
                    size={22}
                  />

                </div>

                <span className="font-medium text-lg text-slate-800">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          MY REFERRALS
      ===================================================== */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

            {/* HEADER */}
            <div className="px-8 py-7 border-b border-slate-200">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Users
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-950">
                      My Referrals
                    </h2>

                  </div>

                  <p className="text-slate-500 mt-3">
                    Track your invited friends and referral rewards.
                  </p>

                </div>

                <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm">
                  {referrals.length} Referrals
                </div>

              </div>

            </div>


            {/* CONTENT */}
            <div className="overflow-x-auto">

              {referralsLoading ? (

                <div className="p-12 text-center text-slate-500">

                  <div className="w-8 h-8 mx-auto mb-4 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />

                  Loading referrals...

                </div>

              ) : referrals.length === 0 ? (

                <div className="p-12 text-center">

                  <div className="w-16 h-16 mx-auto rounded-xl bg-slate-100 flex items-center justify-center">

                    <Users
                      size={32}
                      className="text-slate-400"
                    />

                  </div>

                  <p className="mt-5 text-slate-600 font-medium">
                    You haven't referred anyone yet.
                  </p>

                  <p className="text-sm text-slate-400 mt-2">
                    Invite your friends and start earning free minutes.
                  </p>

                </div>

              ) : (

                <table className="w-full min-w-[650px]">

                  <thead>

                    <tr className="bg-slate-50 text-left">

                      <th className="px-8 py-4 font-semibold text-slate-600">
                        #
                      </th>

                      <th className="px-8 py-4 font-semibold text-slate-600">
                        Friend Email
                      </th>

                      <th className="px-8 py-4 font-semibold text-slate-600">
                        Status
                      </th>

                      <th className="px-8 py-4 font-semibold text-slate-600">
                        Reward
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {referrals.map((referral, index) => (

                      <tr
                        //@ts-ignore
                        key={referral.email}
                        className="
                          border-t
                          border-slate-100
                          hover:bg-blue-50/30
                          transition
                        "
                      >

                        <td className="px-8 py-5 text-slate-500">
                          {index + 1}
                        </td>

                        <td className="px-8 py-5">

                          <span className="font-medium text-slate-800">
                            {
                            //@ts-ignore
                            referral.email
                            }
                          </span>

                        </td>

                        <td className="px-8 py-5">
                          
                          {//@ts-ignore
                          referral.status === "SUCCESS" ? (

                            <span
                              className="
                                inline-flex
                                items-center
                                gap-2
                                px-3
                                py-1.5
                                rounded-lg
                                bg-emerald-50
                                border
                                border-emerald-100
                                text-emerald-700
                                text-sm
                                font-semibold
                              "
                            >
                              <CheckCircle size={15} />
                              Successful
                            </span>

                          ) : (

                            <span
                              className="
                                inline-flex
                                items-center
                                px-3
                                py-1.5
                                rounded-lg
                                bg-amber-50
                                border
                                border-amber-100
                                text-amber-700
                                text-sm
                                font-semibold
                              "
                            >
                              Pending
                            </span>

                          )}

                        </td>

                        <td className="px-8 py-5">
                          
                          {//@ts-ignore
                          referral.rewarded ? (

                            <span className="font-bold text-blue-600">
                              +10 Minutes
                            </span>

                          ) : (

                            <span className="text-slate-400">
                              —
                            </span>

                          )}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              )}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}