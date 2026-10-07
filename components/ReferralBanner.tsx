import Link from "next/link";

function ReferralBanner() {
  return (
    <Link
      href="/referral-program"
      className="
        block
        border-y
        border-slate-800
        bg-slate-950
        hover:bg-slate-900
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">

          <span className="text-blue-400">
            🎁
          </span>

          <span className="text-white font-semibold">
            Earn FREE Interview Minutes
          </span>

          <span className="hidden sm:inline text-slate-400">
            for every friend who purchases a plan
          </span>

          <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Learn More →
          </span>

        </div>
      </div>
    </Link>
  );
}

export default ReferralBanner;
