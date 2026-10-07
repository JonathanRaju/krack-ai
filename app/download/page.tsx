"use client";

import {
  Download,
  Monitor,
  Laptop,
  CheckCircle
} from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-6">
            <Download size={16} />
            Desktop App
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tight">
            Download{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Krack-AI
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-500 leading-relaxed">
            Realtime AI interview assistant for coding,
            technical, and system design interviews.
            Get instant guidance, coding help, and
            smart answers directly from your desktop.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

            {/* Windows */}
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
                rounded-xl
                text-white
                font-semibold
                bg-blue-600
                hover:bg-blue-700
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-200
              "
            >
              <Download size={20} />
              Download for Windows
            </a>

            {/* Mac */}
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
                rounded-xl
                border
                border-slate-300
                bg-white
                text-slate-800
                font-semibold
                hover:border-blue-300
                hover:text-blue-600
                hover:bg-blue-50/50
                transition-all
                duration-200
              "
            >
              <Download size={20} />
              Download for Mac
            </a>

          </div>

          <p className="mt-5 text-sm text-slate-400">
            Windows 10/11 · macOS Intel & Apple Silicon
          </p>

        </div>
      </section>


      {/* DOWNLOAD OPTIONS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {/* WINDOWS */}
            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-lg
                hover:border-blue-200
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                <Monitor
                  size={30}
                  className="text-blue-600"
                />
              </div>

              <h3 className="text-3xl font-bold mt-6 text-slate-950">
                Windows
              </h3>

              <p className="text-slate-500 mt-3">
                Windows 10 & 11 Supported
              </p>

              <a
                href="/api/download/windows"
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  transition-colors
                  duration-200
                "
              >
                <Download size={18} className="mr-2" />
                Download .exe
              </a>
            </div>


            {/* MAC */}
            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-lg
                hover:border-indigo-200
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Laptop
                  size={30}
                  className="text-indigo-600"
                />
              </div>

              <h3 className="text-3xl font-bold mt-6 text-slate-950">
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
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-indigo-600
                  hover:bg-indigo-700
                  transition-colors
                  duration-200
                "
              >
                <Download size={18} className="mr-2" />
                Download .dmg
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* INSTALLATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-5">
              Installation
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
              Installation Guide
            </h2>

            <p className="mt-5 text-lg text-slate-500">
              Get Krack-AI up and running in just a few steps.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-8">

            {/* WINDOWS */}
            <div
              className="
                bg-slate-50
                rounded-2xl
                border
                border-slate-200
                p-8
              "
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Monitor
                    size={24}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Windows
                  </h3>

                  <p className="text-sm text-slate-500">
                    Windows 10 & 11
                  </p>
                </div>

              </div>

              <div className="space-y-5 text-slate-600">

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <p>Download the .exe installer using Chrome Browser.</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <p>
                    Click "More Info" → "Run Anyway" if
                    Windows blocks it.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <p>Run installer as Administrator.</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <p>Grant permissions if requested.</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <p>Launch Krack-AI.</p>
                </div>

              </div>

            </div>


            {/* MAC */}
            <div
              className="
                bg-slate-50
                rounded-2xl
                border
                border-slate-200
                p-8
              "
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Laptop
                    size={24}
                    className="text-indigo-600"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    macOS
                  </h3>

                  <p className="text-sm text-slate-500">
                    Intel & Apple Silicon
                  </p>
                </div>

              </div>

              <div className="space-y-5 text-slate-600">

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <p>Download the .dmg file.</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <p>Move app to Applications.</p>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div className="space-y-3">
                    <p>
                      Open Terminal and run:
                    </p>

                    <div className="bg-slate-950 text-blue-300 p-4 rounded-xl font-mono text-sm overflow-x-auto border border-slate-800">
                      xattr -cr /Applications/Krack-AI.app
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <p>Launch the application.</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 font-medium text-sm mb-6">
            <CheckCircle size={16} />
            Ready to get started?
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Crack Your Interview?
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Download Krack-AI and get realtime AI
            assistance during technical interviews.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a
              href="/api/download/windows"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition-colors
              "
            >
              <Download size={18} />
              Windows
            </a>

            <a
              href="/api/download/mac"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
                rounded-xl
                bg-white
                hover:bg-slate-100
                text-slate-900
                font-semibold
                transition-colors
              "
            >
              <Download size={18} />
              macOS
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}