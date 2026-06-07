import {
  Mic,
  Brain,
  Shield,
  Zap,
  Monitor,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description:
      "Captures every question instantly with crystal-clear accuracy.",
  },
  {
    icon: Brain,
    title: "Smart AI Answers",
    description:
      "Generates thoughtful, tailored answers within seconds.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Runs locally on your device. Nothing is shared or recorded.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Sub-second response times — never miss a beat.",
  },
  {
    icon: Monitor,
    title: "Works Everywhere",
    description:
      "Zoom, Meet, Teams, phone calls — any interview platform.",
  },
  {
    icon: Sparkles,
    title: "Custom Personas",
    description:
      "Tune the AI to match your background and voice.",
  },
];

export default function Features() {
  return (
    <section id="features" className=" bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              ace
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              the interview
            </span>
          </h2>

          <p className="mt-8 text-2xl text-slate-500">
            Built to feel invisible to the interviewer and
            indispensable to you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[32px]
                  p-10
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-300
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#020826] mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-xl leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}