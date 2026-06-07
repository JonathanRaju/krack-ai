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
    <footer id="footer" className="bg-gradient-to-r from-pink-500 to-orange-300 text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              KrackAI
            </h3>

            <p className="text-black leading-relaxed">
              AI-powered interview assistant helping
              developers crack coding and technical
              interviews.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Legal
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-black hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-black hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="text-black hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                {/* <Link
                  href="/contact-us"
                  className="text-black hover:text-white"
                > */}
                  Contact Us : <br></br>support@krack-ai.com
                {/* </Link> */}
              </li>
            </ul>
          </div>

          {/* Interview Questions */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Interview Questions
            </h4>

            <ul className="space-y-3">
              {technologies.slice(0, 8).map((tech) => (
                <li key={tech}>
                  {/* <Link
                    href={`/interview-questions/${tech
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="text-black hover:text-white"
                  > */}
                    {tech} Interview Questions
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>

          {/* More Technologies */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              More Topics
            </h4>

            <ul className="space-y-3">
              {technologies.slice(8).map((tech) => (
                <li key={tech}>
                  {/* <Link
                    href={`/interview-questions/${tech
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="text-black hover:text-white"
                  > */}
                    {tech} Interview Questions
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 text-center text-black">
          © {new Date().getFullYear()} KrackAI.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}