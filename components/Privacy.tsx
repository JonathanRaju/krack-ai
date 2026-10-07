import { Check, Shield, Lock, EyeOff } from "lucide-react";

export default function Privacy() {
  return (
    <section
      id="privacy"
      className="py-20 md:py-24 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            {/* Label */}
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
              <Shield size={15} />
              Privacy First
            </div>

            {/* Heading */}
            <h2
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-950
              "
            >
              Your interviews.
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                "
              >
                Your privacy.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-lg
                md:text-xl
                leading-relaxed
                text-slate-500
                max-w-xl
              "
            >
              Krack-AI is built to keep your interview sessions
              private. We only use the information needed to
              provide the service.
            </p>

            {/* Privacy Points */}
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

                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-blue-50
                      border
                      border-blue-100
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Check
                      size={17}
                      strokeWidth={2.5}
                      className="text-blue-600"
                    />
                  </div>

                  <span
                    className="
                      text-lg
                      md:text-xl
                      font-medium
                      text-slate-800
                    "
                  >
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>

          {/* Right Privacy Card */}
          <div className="relative">

            <div
              className="
                relative
                min-h-[460px]
                rounded-3xl
                bg-slate-950
                overflow-hidden
                flex
                items-center
                justify-center
                shadow-2xl
                shadow-slate-300/40
              "
            >

              {/* Subtle background elements */}
              <div
                className="
                  absolute
                  -top-32
                  -right-32
                  w-80
                  h-80
                  rounded-full
                  bg-blue-600/20
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-32
                  -left-32
                  w-80
                  h-80
                  rounded-full
                  bg-indigo-600/20
                  blur-3xl
                "
              />

              {/* Main Shield */}
              <div className="relative flex flex-col items-center">

                <div
                  className="
                    w-32
                    h-32
                    rounded-3xl
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    shadow-blue-600/30
                  "
                >
                  <Shield
                    size={68}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Privacy by Design
                </h3>

                <p
                  className="
                    mt-3
                    text-center
                    text-slate-400
                    max-w-xs
                    leading-relaxed
                  "
                >
                  Your interview experience stays
                  focused, private, and secure.
                </p>

                {/* Security indicators */}
                <div className="flex items-center gap-3 mt-8">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-white/5
                      border
                      border-white/10
                    "
                  >
                    <Lock
                      size={15}
                      className="text-blue-400"
                    />

                    <span className="text-sm text-slate-300">
                      Secure
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-white/5
                      border
                      border-white/10
                    "
                  >
                    <EyeOff
                      size={15}
                      className="text-blue-400"
                    />

                    <span className="text-sm text-slate-300">
                      Private
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
