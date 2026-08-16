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
    title: "Live Transcription",
    description:
      "Listen to the interview and see the questions as they are asked.",
  },
  {
    icon: Brain,
    title: "Quick Answers",
    description:
      "Get clear answers and suggestions while the interview is happening.",
  },
  {
    icon: Shield,
    title: "Private",
    description:
      "Your interview sessions stay private and are not visible to others.",
  },
  {
    icon: Zap,
    title: "Fast Responses",
    description:
      "Get answers quickly without interrupting the flow of your interview.",
  },
  {
    icon: Monitor,
    title: "Works With Your Setup",
    description:
      "Use it alongside the tools you already use for your interviews.",
  },
  {
    icon: Sparkles,
    title: "Personalized Help",
    description:
      "Give Krack-AI your experience and skills for more relevant answers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-18">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
            Everything you need
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              for your interview
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-500">
            Simple tools that help you stay prepared and
            confident throughout the interview.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[28px]
                  p-8
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-300
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={26}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#020826] mb-3">
                  {feature.title}
                </h3>

                <p className="text-lg text-slate-500 leading-relaxed">
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