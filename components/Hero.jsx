"use client"
const Hero = () => {
    return( <section className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center text-center py-14">
    
              {/* Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  border
                  border-gray-200
                  rounded-full
                  bg-white
                  shadow-sm
                  mb-10
                "
              >
                <span className="text-pink-500 text-lg">✦</span>
                <span className="font-medium text-slate-800">
                  Full Coding Interview Support
                </span>
              </div>
    
              {/* Heading */}
              <h1
                className="
                  max-w-5xl
                  text-6xl
                  md:text-8xl
                  font-extrabold
                  leading-none
                  tracking-tight
                "
              >
                <span className="text-[#020826]">
                  Your
                </span>
    
                <span
                  className="
                    bg-gradient-to-r
                    from-pink-500
                    via-orange-400
                    to-orange-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  Real-Time AI
                </span>
    
                <br />
    
                <span className="text-[#020826]">
                  Interview Assistant
                </span>
              </h1>
    
              {/* Description */}
              <p
                className="
                  max-w-3xl
                  mt-10
                  text-2xl
                  text-slate-500
                  leading-relaxed
                "
              >
                Automatically get an answer to every interview
                question with advanced AI. An interview copilot
                that's real-time and completely private.
              </p>
    
              {/* CTA */}
              <div className="flex flex-col md:flex-row gap-5 mt-12">
                <button
                  className="
                    px-14
                    py-5
                    rounded-full
                    text-xl
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
    
                <button
                  className="
                    px-14
                    py-5
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-xl
                    font-semibold
                    text-slate-900
                  "
                >
                  No Credit Card Required
                </button>
              </div>
    
              {/* Users */}
              <div id="reviews" className="flex items-center gap-5 mt-16 flex-wrap justify-center">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-pink-500 border-4 border-white" />
                  <div className="w-12 h-12 rounded-full bg-orange-400 border-4 border-white" />
                  <div className="w-12 h-12 rounded-full bg-orange-300 border-4 border-white" />
                  <div className="w-12 h-12 rounded-full bg-amber-300 border-4 border-white" />
                </div>
    
                <p className="text-xl text-slate-500">
                  <span className="font-bold text-slate-900">
                    1,534,135+
                  </span>{" "}
                  users •{" "}
                  <span className="font-bold text-slate-900">
                    4.86 ⭐
                  </span>{" "}
                  from 340,066+ reviews
                </p>
              </div>
            </div>
          </section>)
    
}

export default Hero