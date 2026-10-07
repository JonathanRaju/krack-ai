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
    <section
      id="features"
      className="bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        {/* Heading */}
        <div className="text-center mb-16">

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
            <Sparkles size={15} />
            Built for better interviews
          </div>

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
            Everything you need
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
              for your interview
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              md:text-xl
              text-slate-500
              leading-relaxed
            "
          >
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
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  p-8
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-xl
                  hover:shadow-slate-200/60
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-blue-50
                    border
                    border-blue-100
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-blue-600
                    group-hover:border-blue-600
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="
                      text-blue-600
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-slate-900
                    mb-3
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-base
                    md:text-lg
                    text-slate-500
                    leading-relaxed
                  "
                >
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