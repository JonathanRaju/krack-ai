
import {
  Gift,
  Users,
  Copy,
  Trophy,
  CheckCircle,
} from "lucide-react";

export default function ReferralProgramPage() {
  return (
    <main className="bg-[#fafafa] min-h-screen">

      {/* HERO */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">
            <Gift size={18} />
            Referral Rewards
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-[#020826]">
            Earn FREE{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
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

      {/* HOW IT WORKS */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-[#020826]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl border p-8 text-center">
              <Copy
                size={48}
                className="mx-auto text-pink-500"
              />

              <h3 className="font-bold text-2xl mt-5">
                Share Your Link
              </h3>

              <p className="text-slate-500 mt-3">
                Copy your personal referral link
                and share it with friends.
              </p>
            </div>

            <div className="bg-white rounded-3xl border p-8 text-center">
              <Users
                size={48}
                className="mx-auto text-pink-500"
              />

              <h3 className="font-bold text-2xl mt-5">
                Friend Registers
              </h3>

              <p className="text-slate-500 mt-3">
                Your friend creates an account
                using your referral link.
              </p>
            </div>

            <div className="bg-white rounded-3xl border p-8 text-center">
              <Gift
                size={48}
                className="mx-auto text-pink-500"
              />

              <h3 className="font-bold text-2xl mt-5">
                Earn Rewards
              </h3>

              <p className="text-slate-500 mt-3">
                When they purchase a plan,
                bonus minutes are instantly
                credited to your account.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REWARD TABLE */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl border overflow-hidden">

            <div className="bg-gradient-to-r from-pink-500 to-orange-300 px-8 py-6">
              <h2 className="text-3xl font-bold text-black">
                Referral Rewards
              </h2>
            </div>

            <div className="p-8">

              <div className="space-y-6">

                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-semibold">
                    Friend Purchases Any Plan
                  </span>

                  <span className="font-bold text-green-600">
                    +10 FREE Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-semibold">
                    5 Successful Referrals
                  </span>

                  <span className="font-bold text-green-600">
                    +60 FREE Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    10 Successful Referrals
                  </span>

                  <span className="font-bold text-green-600">
                    +120 FREE Minutes
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-[#020826]">
            Why Refer Friends?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Earn bonus AI interview minutes",
              "No limit on referrals",
              "Rewards are credited automatically",
              "Help friends prepare for interviews",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl border p-6 flex items-center gap-4"
              >
                <CheckCircle
                  className="text-green-500"
                  size={28}
                />

                <span className="font-medium text-lg">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

       {/* CTA */}

       <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-black">
              Start Earning Free Interview Minutes
            </h2>

            <p className="mt-4 text-black/80 text-lg">
              Share your referral link and earn
              rewards every time a friend purchases
              a Krack-AI plan.
            </p>

            <button
              className="
                mt-8
                bg-white
                text-pink-600
                px-8
                py-4
                rounded-full
                font-bold
                shadow-lg
              "
            >
              Get My Referral Link
            </button>

          </div>

        </div>
      </section>

      {/* LEADERBOARD PREVIEW */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-slate-950 rounded-3xl p-10 text-white">

            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-400" />
              <h2 className="text-3xl font-bold">
                Top Referrers
              </h2>
            </div>

            <p className="text-slate-300 mb-8">
              Coming Soon: Monthly leaderboard
              with special bonus rewards for top
              referrers.
            </p>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>#1 Santosh</span>
                <span className="text-yellow-400">
                  180 Bonus Minutes
                </span>
              </div>

              <div className="flex justify-between">
                <span>#2 Rajesh</span>
                <span>
                  120 Bonus Minutes
                </span>
              </div>

              <div className="flex justify-between">
                <span>#3 Sunil</span>
                <span>
                  100 Bonus Minutes
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

     

    </main>
  );
}