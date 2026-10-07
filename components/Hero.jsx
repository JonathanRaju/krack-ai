"use client";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center text-center py-8 md:py-10">

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            border
            border-blue-100
            rounded-full
            bg-blue-50
            mb-10
          "
        >
          <span className="text-blue-600 font-semibold">
            ✦
          </span>

          <span className="font-medium text-blue-700">
            Your AI Interview Helper
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-5xl
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-slate-950
          "
        >
          <span>
            Answer Questions
          </span>

          <span
            className="
              block
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              bg-clip-text
              text-transparent
            "
          >
            with Confidence
          </span>

          <span className="block">
            in Every Interview
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            max-w-2xl
            mt-8
            text-lg
            md:text-xl
            text-slate-500
            leading-relaxed
          "
        >
          Get real-time help during your coding and technical interviews.
          Focus on the conversation while Krack-AI helps you think,
          respond, and perform with confidence.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-10">

          <button
            className="
              px-10
              py-4
              rounded-lg
              text-lg
              font-semibold
              text-white
              bg-blue-600
              hover:bg-blue-700
              shadow-lg
              shadow-blue-600/20
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            Try For Free
          </button>

          <div
            className="
              px-8
              py-4
              rounded-lg
              border
              border-slate-200
              bg-white
              text-lg
              font-medium
              text-slate-600
            "
          >
            No credit card required
          </div>

        </div>

        {/* Trust */}
        <div className="flex items-center gap-4 mt-14">

          {/* Professional user indicator */}
          <div className="flex -space-x-2">

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-blue-600
                border-4
                border-white
                flex
                items-center
                justify-center
                text-white
                text-xs
                font-semibold
              "
            >
              JD
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-indigo-600
                border-4
                border-white
                flex
                items-center
                justify-center
                text-white
                text-xs
                font-semibold
              "
            >
              SK
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-slate-700
                border-4
                border-white
                flex
                items-center
                justify-center
                text-white
                text-xs
                font-semibold
              "
            >
              AK
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-slate-500
                border-4
                border-white
                flex
                items-center
                justify-center
                text-white
                text-xs
                font-semibold
              "
            >
              +
            </div>

          </div>

          <p className="text-sm md:text-base text-slate-500">
            Built for developers who want to interview better.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;