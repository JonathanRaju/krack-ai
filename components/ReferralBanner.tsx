import Link from "next/link";

function ReferralBanner () {

    return(
        <Link
        href="/referral-program"
        className="
          block
          border-y
          border-slate-200
          bg-slate-950
          hover:bg-slate-900
          transition
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
      
          <div className="flex items-center justify-center gap-2">
      
            <span className="text-yellow-400">
              🎁
            </span>
      
            <span className="text-white font-semibold">
              Earn FREE Interview Minutes
            </span>
      
            <span className="text-slate-400">
              for every friend who purchases a plan
            </span>
      
            <span className="text-pink-400 font-semibold">
              Learn More →
            </span>
      
          </div>
      
        </div>
      </Link>
    )
}

export default ReferralBanner