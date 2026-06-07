"use client"
import {
  Download,
  Monitor,
  Laptop,
  BookOpen,
  CheckCircle,
} from "lucide-react";


export default function DownloadPage() {
  return (
    <main className="bg-[#fafafa]">

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#020826]">
            Download{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Krack-AI
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-500 leading-relaxed">
            Realtime AI interview assistant for coding,
            technical, and system design interviews.
            Get instant guidance, coding help, and
            smart answers directly from your desktop.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

            <a
              href="/api/download/windows"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                text-white
                font-semibold
                bg-gradient-to-r
                from-pink-500
                to-orange-300
              "
            >
              <Download size={20} />
              Download for Windows
            </a>

            <a
              href="/api/download/mac"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                border
                bg-white
                font-semibold
              "
            >
              <Download size={20} />
              Download for Mac
            </a>

          </div>
        </div>
      </section>

      {/* DOWNLOAD OPTIONS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* WINDOWS */}
            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <Monitor
                size={50}
                className="text-pink-500"
              />

              <h3 className="text-3xl font-bold mt-5">
                Windows
              </h3>

              <p className="text-slate-500 mt-3">
                Windows 10 & 11 Supported
              </p>

              <a
                href="/api/download/windows"
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-full
                  text-white
                  bg-gradient-to-r
                  from-pink-500
                  to-orange-300
                "
              >
                Download .exe
              </a>
            </div>

            {/* MAC */}

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <Laptop
                size={50}
                className="text-pink-500"
              />

              <h3 className="text-3xl font-bold mt-5">
                macOS
              </h3>

              <p className="text-slate-500 mt-3">
                Intel & Apple Silicon
              </p>

              <a
                href="/api/download/mac"
                download
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-full
                  text-white
                  bg-gradient-to-r
                  from-pink-500
                  to-orange-300
                "
              >
                Download .dmg
              </a>
            </div>

            {/* MANUAL */}

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <BookOpen
                size={50}
                className="text-pink-500"
              />

              <h3 className="text-3xl font-bold mt-5">
                User Manual
              </h3>

              <p className="text-slate-500 mt-3">
                Installation & Usage Guide
              </p>

              <a
                href="https://github.com/JonathanRaju/overlay-ai/releases/download/v1.0.0/Krack-AI.Manual.pdf"
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-full
                  border
                  font-semibold
                "
              >
                Download PDF
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Krack-AI?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Realtime AI Support",
              "Coding Assistance",
              "Interview Guidance",
              "Auto Type in Any Editor",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-3xl p-8"
              >
                <CheckCircle
                  className="text-pink-500"
                  size={32}
                />

                <h3 className="font-bold text-xl mt-4">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INSTALLATION */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Installation Guide
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* WINDOWS */}

            <div className="bg-white rounded-3xl border p-8">

              <h3 className="text-3xl font-bold mb-8">
                Windows
              </h3>

              <div className="space-y-4 text-slate-600">

                <p>1. Download the .exe installer.</p>

                <p>
                  2. Click "More Info" →
                  "Run Anyway" if Windows blocks it.
                </p>

                <p>
                  3. Run installer as Administrator.
                </p>

                <p>
                  4. Grant permissions if requested.
                </p>

                <p>
                  5. Launch Krack-AI.
                </p>

              </div>

            </div>

            {/* MAC */}

            <div className="bg-white rounded-3xl border p-8">

              <h3 className="text-3xl font-bold mb-8">
                macOS
              </h3>

              <div className="space-y-4 text-slate-600">

                <p>1. Download the .dmg file.</p>

                <p>2. Move app to Applications.</p>

                <p>
                  3. Open Terminal and run:
                </p>

                <div className="bg-[#020826] text-green-400 p-4 rounded-xl font-mono">
                  xattr -cr
                  {" "}
                  /Applications/Krack-AI.app
                </div>

                <p>
                  4. Launch the application.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#020826]">
            Ready to Crack Your Interview?
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Download Krack-AI and get realtime AI
            assistance during technical interviews.
          </p>

          <a
            href="/api/download/windows"
            className="
              inline-block
              mt-10
              px-10
              py-5
              rounded-full
              text-white
              font-semibold
              bg-gradient-to-r
              from-pink-500
              to-orange-300
            "
          >
            Download Now
          </a>

        </div>
      </section>

    </main>
  );
}