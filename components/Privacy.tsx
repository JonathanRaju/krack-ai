import { Check, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
              Your privacy is
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                non-negotiable
              </span>
            </h2>

            <p className="mt-8 text-2xl leading-relaxed text-slate-500 max-w-xl">
              Audio is processed on your device. We never
              store recordings or transcripts of your
              interviews. Your edge — your data.
            </p>

            <div className="mt-12 space-y-6">
              {[
                "End-to-end encrypted",
                "No recordings stored",
                "Undetectable to interviewers",
                "GDPR & SOC2 ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <Check
                    size={24}
                    className="text-pink-500"
                  />

                  <span className="text-2xl font-medium text-[#020826]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div
              className="
                h-[600px]
                rounded-[40px]
                bg-gradient-to-br
                from-pink-500
                via-orange-400
                to-amber-300
                flex
                items-center
                justify-center
                shadow-xl
              "
            >
              <Shield
                size={140}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}