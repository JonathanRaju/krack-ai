"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type TourStep = {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  width: number;
  height: number;
  position?: "top" | "bottom" | "left" | "right";
};

const tourSteps: TourStep[] = [
  {
    id: "self-intro",
    title: "Self Intro",
    description:
      "Click Self Intro to generate a professional introduction based on your experience and technology stack.",
    x: 79.5,
    y: 7,
    width: 10.5,
    height: 5,
    position: "bottom",
  },
  {
    id: "project-explanation",
    title: "Project Explanation",
    description:
      "Use Project Explanation to generate an explanation of the selected project, including your role, responsibilities and technologies used.",
    x: 61,
    y: 7,
    width: 18,
    height: 5,
    position: "bottom",
  },
  {
    id: "listen",
    title: "Listen",
    description:
      "Click Listen to hear the interviewer's question and button renames to Get Answer. When the question is complete, click the same button which is renamed to Get Answer again to process the question and generate the answer.",
    x: 91,
    y: 7,
    width: 8,
    height: 5,
    position: "bottom",
  },
  {
    id: "hr-manager",
    title: "HR & Manager",
    description:
      "Select HR or Manager depending on your interview round. Krack-AI will tailor the answers accordingly.",
    x: 43,
    y: 7,
    width: 17,
    height: 5,
    position: "bottom",
  },
  {
    id: "project-related",
    title: "Project Related",
    description:
      "Enable Project Related when the interviewer asks a question about a specific project.",
    x: 64,
    y: 14,
    width: 16,
    height: 5,
    position: "bottom",
  },
  {
    id: "project-dropdown",
    title: "Project Selection",
    description:
      "Select the project that the interviewer is asking about. Answers will be tailored to the selected project.",
    x: 79,
    y: 14,
    width: 20,
    height: 5,
    position: "bottom",
  },
  {
    id: "technologies",
    title: "Technology Selection",
    description:
      "Select one or more technologies before generating code. For example, select React.JS and Node.JS for a full-stack coding question.",
    x: 1,
    y: 19,
    width: 47,
    height: 6,
    position: "bottom",
  },
  {
    id: "get-code",
    title: "Get Code",
    description:
      "Use Get Code to generate code for the selected technology. You can also type a coding topic into the input box and generate code directly.",
    x: 51,
    y: 19,
    width: 10,
    height: 6,
    position: "bottom",
  },
  {
    id: "explain-code",
    title: "Explain Written Code",
    description:
      "Paste existing code into the input box and click Explain Written Code to get a line-by-line explanation.",
    x: 62,
    y: 19,
    width: 18,
    height: 6,
    position: "bottom",
  },
  {
    id: "get-answer",
    title: "Get Answer",
    description:
      "Use Get Answer when you want a direct answer for a typed question, copied interview chat message, or code snippet.",
    x: 81,
    y: 19,
    width: 12,
    height: 6,
    position: "bottom",
  },
  {
    id: "input",
    title: "Question / Code Input",
    description:
      "Type a topic, question or paste code here. Then choose Get Answer, Get Code or Explain Written Code.",
    x: 51,
    y: 25,
    width: 41,
    height: 7,
    position: "bottom",
  },
  {
    id: "opacity",
    title: "Opacity",
    description:
      "Use the opacity slider to make the Krack-AI overlay more or less transparent.",
    x: 21,
    y: 7,
    width: 21,
    height: 6,
    position: "bottom",
  },
  {
    id: "remaining-time",
    title: "Remaining Time",
    description:
      "Your remaining interview-assistance time is displayed at the top-right of the overlay.",
    x: 70,
    y: 1,
    width: 22,
    height: 5,
    position: "bottom",
  },
];

export default function HowToUsePage() {
  const [tourActive, setTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const step = tourSteps[currentStep];

  useEffect(() => {
    const completed = localStorage.getItem(
      "krack-ai-tutorial-completed"
    );

    if (completed === "true") {
      setTourActive(false);
    }
  }, []);

  useEffect(() => {
    if (!tourActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTourActive(false);
      }

      if (event.key === "ArrowRight") {
        setCurrentStep((prev) =>
          prev < tourSteps.length - 1 ? prev + 1 : prev
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tourActive]);

  const startTour = () => {
    setCurrentStep(0);
    setTourActive(true);
  };

  const closeTour = () => {
    setTourActive(false);
  };

  const nextStep = () => {
    if (currentStep === tourSteps.length - 1) {
      if (dontShowAgain) {
        localStorage.setItem(
          "krack-ai-tutorial-completed",
          "true"
        );
      }

      setTourActive(false);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>

            Interactive Product Guide
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Learn Krack-AI
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              in just a few minutes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
            Explore the Krack-AI overlay interactively and learn how
            to use every feature during your interview.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <button
              onClick={startTour}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                ▶
              </span>

              <span className="relative">
                Start Interactive Tour
              </span>

              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute -right-1 -top-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-60" />
                <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-400" />
              </span>
            </button>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>⌨️</span>
              <span>Use ← → to navigate</span>
              <span className="text-slate-300">•</span>
              <span>ESC to exit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCREENSHOT ================= */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/30">

          {/* Browser-like header */}
          <div className="flex h-10 items-center gap-2 border-b border-slate-100 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

            <div className="ml-3 flex-1 rounded-md bg-slate-50 px-4 py-1.5 text-xs text-slate-400">
              Krack-AI Interview Assistant
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-slate-100">
            <Image
              src="/krack-ai.png"
              alt="Krack-AI desktop overlay"
              width={1500}
              height={1000}
              className="block h-auto w-full"
              priority
            />

            {tourActive && step && (
              <Spotlight step={step} />
            )}
          </div>

          {/* Floating tour status */}
          {tourActive && (
            <div className="absolute left-1/2 top-14 z-30 -translate-x-1/2">
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xl backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                Exploring: {step.title}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 md:flex-row">
          <span className="font-medium text-slate-700">
            Interactive preview
          </span>

          <span className="hidden text-slate-300 md:block">•</span>

          <span>
            Click Start Interactive Tour to explore every control.
          </span>
        </div>
      </section>

      {/* ================= QUICK START ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Quick Start
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Get started in four steps
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Set up your interview workflow before the first question.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <QuickStartCard
            number="01"
            title="Choose Interview Type"
            description="Select HR or Manager to tailor your answers."
          />

          <QuickStartCard
            number="02"
            title="Select Project"
            description="Enable Project Related and select your project when needed."
          />

          <QuickStartCard
            number="03"
            title="Select Technology"
            description="Choose one or more technologies for coding questions."
          />

          <QuickStartCard
            number="04"
            title="Start Interview"
            description="Use Listen, Get Answer or Get Code depending on the question."
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Features
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Everything you need during an interview
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Quickly understand what each Krack-AI control does and
              when to use it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="👤"
              title="Self Intro"
              description="Generate a professional introduction based on your experience and technology stack."
            />

            <FeatureCard
              icon="📁"
              title="Project Explanation"
              description="Explain your selected project, role, responsibilities and technology stack."
            />

            <FeatureCard
              icon="🎧"
              title="Listen"
              description="Listen to the interviewer and generate an answer without manually typing the question."
            />

            <FeatureCard
              icon="👔"
              title="HR / Manager"
              description="Tailor answers for HR, behavioral, leadership and managerial interview rounds."
            />

            <FeatureCard
              icon="📂"
              title="Project Related"
              description="Generate answers specifically based on the project selected in the dropdown."
            />

            <FeatureCard
              icon="💻"
              title="Get Code"
              description="Generate code for JavaScript, React, Node.js, SQL, Next.js and other selected technologies."
            />

            <FeatureCard
              icon="📖"
              title="Explain Written Code"
              description="Paste code and get a line-by-line explanation of how it works."
            />

            <FeatureCard
              icon="💬"
              title="Get Answer"
              description="Type or paste an interview question, meeting chat message or code and get a direct answer."
            />

            <FeatureCard
              icon="⌨️"
              title="Automatic Code Typing"
              description="Use Ctrl + Shift + C on Windows or Cmd + Shift + C on Mac to type generated code automatically."
            />

            <FeatureCard
              icon="🎚️"
              title="Opacity"
              description="Adjust the transparency of the Krack-AI overlay using the opacity slider."
            />

            <FeatureCard
              icon="⏱️"
              title="Remaining Time"
              description="See your remaining interview-assistance time at the top of the overlay."
            />
          </div>
        </div>
      </section>

      {/* ================= WORKFLOWS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Common Workflows
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Use Krack-AI the right way
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Pick the workflow that matches the question you're facing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <WorkflowCard
            title="Technical Question"
            icon="🎧"
            steps={[
              "Click Listen",
              "Let the interviewer finish",
              "Click Listen again",
              "Read the generated answer",
            ]}
          />

          <WorkflowCard
            title="Coding Question"
            icon="💻"
            steps={[
              "Select technology",
              "Click Listen",
              "Let the interviewer ask the question",
              "Click Get Code",
            ]}
          />

          <WorkflowCard
            title="Project Question"
            icon="📂"
            steps={[
              "Enable Project Related",
              "Select your project",
              "Listen to the question",
              "Get the project-specific answer",
            ]}
          />

          <WorkflowCard
            title="Typed Question"
            icon="⌨️"
            steps={[
              "Type or paste the question",
              "Select the required action",
              "Click Get Answer / Get Code",
              "Review the response",
            ]}
          />
        </div>
      </section>

      {/* ================= POWER FEATURE ================= */}
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <span className="inline-flex rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Power Feature
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Automatic Code Typing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Generated code can be automatically typed into your active
            code editor, helping you move from AI answer to implementation
            faster.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ShortcutCard
              title="Windows"
              shortcut="Ctrl + Shift + C"
            />

            <ShortcutCard
              title="Mac"
              shortcut="Cmd + Shift + C"
            />

            <ShortcutCard
              title="Stop"
              shortcut="Esc"
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-20 md:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white shadow-2xl shadow-blue-600/20 md:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-950/20 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur">
              ✦
            </div>

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Ready to use Krack-AI?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Start the interactive tour or download Krack-AI and
              get familiar with the workflow before your next interview.
            </p>

            <button
              onClick={startTour}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-50"
            >
              Restart Interactive Tour
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= TOUR ================= */}
      {tourActive && step && (
        <TourOverlay
          step={step}
          currentStep={currentStep}
          totalSteps={tourSteps.length}
          onNext={nextStep}
          onPrevious={previousStep}
          onClose={closeTour}
          dontShowAgain={dontShowAgain}
          setDontShowAgain={setDontShowAgain}
        />
      )}
    </main>
  );
}

/* =========================================================
   SPOTLIGHT
========================================================= */

function Spotlight({ step }: { step: TourStep }) {
  return (
    <>
      <div
        className="pointer-events-none absolute z-40 rounded-xl border-2 border-blue-500 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          left: `${step.x}%`,
          top: `${step.y}%`,
          width: `${step.width}%`,
          height: `${step.height}%`,
          boxShadow:
            "0 0 0 9999px rgba(2, 6, 23, 0.62), 0 0 0 5px rgba(59,130,246,0.12), 0 0 35px rgba(37,99,235,0.75)",
        }}
      />

      <div
        className="pointer-events-none absolute z-40 animate-pulse rounded-xl border border-blue-300"
        style={{
          left: `${step.x - 0.4}%`,
          top: `${step.y - 0.4}%`,
          width: `${step.width + 0.8}%`,
          height: `${step.height + 0.8}%`,
        }}
      />

      <div
        className="pointer-events-none absolute z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_25px_8px_rgba(59,130,246,0.6)]"
        style={{
          left: `${step.x + step.width / 2}%`,
          top: `${step.y + step.height / 2}%`,
        }}
      />
    </>
  );
}

/* =========================================================
   QUICK START CARD
========================================================= */

function QuickStartCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 blur-2xl transition-all group-hover:bg-blue-100" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-3xl font-extrabold tracking-tight text-blue-600">
            {number}
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
            →
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600">
          <span className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Explore feature
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   WORKFLOW CARD
========================================================= */

function WorkflowCard({
  title,
  icon,
  steps,
}: {
  title: string;
  icon: string;
  steps: string[];
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-105">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-950">
          {title}
        </h3>
      </div>

      <div className="mt-7 space-y-4">
        {steps.map((item, index) => (
          <div
            key={item}
            className="group/step flex items-center gap-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 transition-all group-hover/step:bg-blue-600 group-hover/step:text-white">
              {index + 1}
            </div>

            <span className="text-sm text-slate-600 transition-colors group-hover/step:text-slate-950">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SHORTCUT CARD
========================================================= */

function ShortcutCard({
  title,
  shortcut,
}: {
  title: string;
  shortcut: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-400">
          {title}
        </p>

        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 font-mono text-sm font-bold text-blue-300 transition-colors group-hover:border-blue-500/40 group-hover:text-blue-200 md:text-base">
        {shortcut}
      </div>
    </div>
  );
}

/* =========================================================
   TOUR OVERLAY
========================================================= */

function TourOverlay({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onClose,
  dontShowAgain,
  setDontShowAgain,
}: {
  step: TourStep;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
  dontShowAgain: boolean;
  setDontShowAgain: (value: boolean) => void;
}) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70"
        onClick={onClose}
      />

      {/* Tour Card */}
      <div
        key={step.id}
        className="fixed left-1/2 top-1/2 z-[10000] w-[calc(100vw-32px)] max-w-[430px] -translate-x-1/2 -translate-y-1/2 animate-[tourIn_.35s_ease-out] md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.35)]">

          {/* Blue top progress */}
          <div className="h-1 bg-slate-100">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 md:p-7">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  STEP {String(currentStep + 1).padStart(2, "0")}
                  <span className="text-blue-300">/</span>
                  {String(totalSteps).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                  {step.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                aria-label="Close tour"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-lg text-slate-400 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {step.description}
            </p>

            {/* Progress dots */}
            <div className="mt-6 flex gap-1.5">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    index <= currentStep
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            {/* Keyboard hint */}
            <div className="mt-5 hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <kbd className="rounded border border-slate-200 bg-slate-50 px-2 py-1 font-mono">
                ←
              </kbd>

              <kbd className="rounded border border-slate-200 bg-slate-50 px-2 py-1 font-mono">
                →
              </kbd>

              <span>Use arrow keys to navigate</span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={onPrevious}
                disabled={currentStep === 0}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Back
              </button>

              <button
                onClick={onNext}
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30"
              >
                {currentStep === totalSteps - 1
                  ? "Finish Tour"
                  : "Next"}

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Don't show again */}
            {currentStep === totalSteps - 1 && (
              <label className="mt-5 flex cursor-pointer items-center gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) =>
                    setDontShowAgain(e.target.checked)
                  }
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                Don't show this tutorial again
              </label>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes tourIn {
          from {
            opacity: 0;
            transform: translate(-50%, calc(-50% + 12px)) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @media (min-width: 768px) {
          @keyframes tourIn {
            from {
              opacity: 0;
              transform: translateY(calc(-50% + 12px)) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(-50%) scale(1);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}