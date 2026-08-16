"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      // Keep the tour available but don't automatically open it.
      setTourActive(false);
    }
  }, []);

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
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      {/* Header */}
      

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          Getting Started
        </div>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          How to Use Krack-AI
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          Learn how to use every Krack-AI feature with this quick
          interactive walkthrough.
        </p>

        <div className="mt-8 flex flex-col items-center">
  <button
    onClick={startTour}
    className="
      group
      relative
      rounded-xl
      bg-slate-900
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      transition
      hover:-translate-y-0.5
      hover:bg-slate-800
      hover:shadow-xl
    "
  >
    <span className="flex items-center gap-2">
      Start Interactive Tour
      <span className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </span>

    {/* Highlight */}
    <span className="absolute -right-2 -top-2 flex h-5 w-5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
      <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500" />
    </span>
  </button>

  <p className="mt-3 text-sm text-slate-500">
    👆 Click here to take a step-by-step tour of Krack-AI
  </p>
</div>
      </section>

      {/* Screenshot */}
      <section className="mx-auto max-w-7xl px-6">
  <div
    id="krack-ai-screenshot"
    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl"
  >
    <div className="relative overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src="/krack-ai.png"
        alt="Krack-AI desktop overlay"
        width={1500}
        height={1000}
        className="block h-auto w-full"
        priority
      />

      {/* Spotlight */}
      {tourActive && step && (
        <div
          className="pointer-events-none absolute z-50 rounded-xl border-[3px] border-blue-500 bg-gray-400/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.65)] transition-all duration-500 ease-in-out"
          style={{
            left: `${step.x}%`,
            top: `${step.y}%`,
            width: `${step.width}%`,
            height: `${step.height}%`,
          }}
        />
      )}
    </div>
  </div>

  <p className="mt-5 text-center text-sm text-slate-500">
    Click <b>Start Quick Tour</b> above to learn each feature.
  </p>
</section>

      {/* Quick Start */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Quick Start
          </span>

          <h3 className="mt-2 text-3xl font-bold">
            Get started in four steps
          </h3>
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

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Features
            </span>

            <h3 className="mt-2 text-3xl font-bold">
              Everything you need during an interview
            </h3>

            <p className="mt-3 max-w-2xl text-slate-500">
              Quickly understand what each Krack-AI control does.
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

      {/* Workflows */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Common Workflows
          </span>

          <h3 className="mt-2 text-3xl font-bold">
            Use Krack-AI the right way
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <WorkflowCard
            title="Technical Question"
            steps={[
              "Click Listen",
              "Let the interviewer finish",
              "Click Listen again",
              "Read the generated answer",
            ]}
          />

          <WorkflowCard
            title="Coding Question"
            steps={[
              "Select technology",
              "Click Listen",
              "Let the interviewer ask the question",
              "Click Get Code",
            ]}
          />

          <WorkflowCard
            title="Project Question"
            steps={[
              "Enable Project Related",
              "Select your project",
              "Listen to the question",
              "Get the project-specific answer",
            ]}
          />

          <WorkflowCard
            title="Typed Question"
            steps={[
              "Type or paste the question",
              "Select the required action",
              "Click Get Answer / Get Code",
              "Review the response",
            ]}
          />
        </div>
      </section>

      {/* Keyboard shortcuts */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Power Feature
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Automatic Code Typing
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Generated code can be automatically typed into your active
            code editor.
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


      {/* Tour overlay */}
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 text-3xl font-bold text-blue-600">
        {number}
      </div>

      <h4 className="text-lg font-bold">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

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
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
        {icon}
      </div>

      <h4 className="text-lg font-bold">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function WorkflowCard({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <h4 className="text-xl font-bold">{title}</h4>

      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {index + 1}
            </div>

            <span className="text-sm text-slate-600">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShortcutCard({
  title,
  shortcut,
}: {
  title: string;
  shortcut: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-7">
      <p className="text-sm text-slate-400">{title}</p>

      <div className="mt-4 rounded-xl bg-slate-950 px-4 py-4 font-mono text-lg font-bold">
        {shortcut}
      </div>
    </div>
  );
}

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
    return (
      <div className="fixed inset-0 z-[9999]">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
  
        {/* Tour Card */}
        <div
          className="
            fixed z-10
            w-[calc(100vw-32px)] max-w-[380px]
            rounded-2xl bg-white p-6 shadow-2xl
            transition-all duration-300
  
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
  
            md:left-auto
            md:right-8
            md:top-1/4
            md:-translate-x-0
            md:-translate-y-1/2
          "
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              Step {currentStep + 1} of {totalSteps}
            </span>
  
            <button
              onClick={onClose}
              className="text-xl text-slate-400 transition hover:text-slate-700"
              aria-label="Close tour"
            >
              ×
            </button>
          </div>
  
          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900">
            {step.title}
          </h3>
  
          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {step.description}
          </p>
  
          {/* Progress */}
          <div className="mt-5 flex gap-1">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  index <= currentStep
                    ? "bg-blue-600"
                    : "bg-slate-200"
                }`}
              />
            ))}
          </div>
  
          {/* Buttons */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={onPrevious}
              disabled={currentStep === 0}
              className="
                rounded-lg
                border border-slate-200
                px-4 py-2
                text-sm font-medium text-slate-700
                transition
                hover:bg-slate-50
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              ← Back
            </button>
  
            <button
              onClick={onNext}
              className="
                rounded-lg
                bg-blue-600
                px-5 py-2
                text-sm font-semibold text-white
                transition
                hover:bg-blue-700
              "
            >
              {currentStep === totalSteps - 1
                ? "Finish"
                : "Next →"}
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
                className="h-4 w-4 rounded"
              />
  
              Don't show this tutorial again
            </label>
          )}
        </div>
      </div>
    );
  }