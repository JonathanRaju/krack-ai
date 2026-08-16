import { Check, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-14 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
              Your interviews.
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Your privacy.
              </span>
            </h2>

            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-500 max-w-xl">
              Krack-AI is built to keep your interview sessions
              private. We only use the information needed to
              provide the service.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Your sessions stay private",
                "No unnecessary data collection",
                "No interview recordings stored",
                "Built with privacy in mind",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center">
                    <Check
                      size={18}
                      className="text-pink-500"
                    />
                  </div>

                  <span className="text-xl font-medium text-[#020826]">
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
                h-[500px]
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
              <div className="w-36 h-36 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Shield
                  size={90}
                  strokeWidth={1.5}
                  className="text-white"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}