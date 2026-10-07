// components/Footer.tsx

import Link from "next/link";

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Vue",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "AWS",
  "Docker",
  "Kubernetes",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        bg-slate-950
        text-slate-300
        border-t
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-xl
                  shadow-lg
                  shadow-blue-600/20
                "
              >
                K
              </div>

              <h3 className="text-2xl font-bold text-white">
                Krack-AI
              </h3>

            </div>

            <p
              className="
                text-slate-400
                leading-relaxed
                max-w-xs
              "
            >
              AI-powered interview assistant helping
              developers crack coding and technical
              interviews.
            </p>

          </div>

          {/* Legal */}
          <div>

            <h4 className="font-semibold text-white text-lg mb-5">
              Legal
            </h4>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/privacy-policy"
                  className="
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  Refund Policy
                </Link>
              </li>

              <li className="pt-1">

                <span className="text-slate-500">
                  Contact Us
                </span>

                <br />

                <a
                  href="mailto:support@krack-ai.com"
                  className="
                    text-slate-300
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  support@krack-ai.com
                </a>

              </li>

            </ul>

          </div>

          {/* Interview Questions */}
          <div>

            <h4 className="font-semibold text-white text-lg mb-5">
              Interview Questions
            </h4>

            <ul className="space-y-3">

              {technologies.slice(0, 8).map((tech) => (
                <li
                  key={tech}
                  className="
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                    cursor-default
                  "
                >
                  {tech} Interview Questions
                </li>
              ))}

            </ul>

          </div>

          {/* More Technologies */}
          <div>

            <h4 className="font-semibold text-white text-lg mb-5">
              More Topics
            </h4>

            <ul className="space-y-3">

              {technologies.slice(8).map((tech) => (
                <li
                  key={tech}
                  className="
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                    cursor-default
                  "
                >
                  {tech} Interview Questions
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-slate-800
            mt-14
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Krack-AI.
            All rights reserved.
          </p>

          <p className="text-sm text-slate-600">
            Built for developers. Built for better interviews.
          </p>

        </div>

      </div>
    </footer>
  );
}