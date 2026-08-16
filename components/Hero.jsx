"use client";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center text-center py-14">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full bg-white shadow-sm mb-10">
          <span className="text-pink-500">✦</span>
          <span className="font-medium text-slate-700">
            Your AI interview helper
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-6xl md:text-8xl font-extrabold leading-none tracking-tight">
          <span className="text-[#020826]">
            Answer Questions
          </span>

          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
            {" "}with Confidence
          </span>

          <br />

          <span className="text-[#020826]">
            in Every Interview
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mt-8 text-xl md:text-2xl text-slate-500 leading-relaxed">
          Get real-time help during your coding and technical interviews.
          Focus on the conversation while Krack-AI helps with the answers.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <button
            className="
              px-12
              py-4
              rounded-full
              text-lg
              font-semibold
              text-white
              bg-gradient-to-r
              from-pink-500
              to-orange-300
              hover:scale-105
              transition
            "
          >
            Try For Free
          </button>

          <div
            className="
              px-8
              py-4
              rounded-full
              border
              border-gray-200
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
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-pink-400 border-4 border-white" />
            <div className="w-10 h-10 rounded-full bg-orange-400 border-4 border-white" />
            <div className="w-10 h-10 rounded-full bg-yellow-300 border-4 border-white" />
            <div className="w-10 h-10 rounded-full bg-pink-300 border-4 border-white" />
          </div>

          <p className="text-base text-slate-500">
            Built for developers who want to interview better.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;