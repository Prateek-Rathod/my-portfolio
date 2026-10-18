import React from "react";
import { ArrowUpRight, Braces, GraduationCap, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedSection = motion.section;
const highlights = [
  {
    icon: <GraduationCap size={19} aria-hidden="true" />,
    label: "Education",
    value: "B.E. Information Science",
  },
  {
    icon: <Braces size={19} aria-hidden="true" />,
    label: "Building with",
    value: "Web, cloud & data",
  },
  {
    icon: <Lightbulb size={19} aria-hidden="true" />,
    label: "Curious about",
    value: "AI & practical software",
  },
];

const About = ({ isDarkMode }) => (
  <AnimatedSection
    id="about"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55 }}
    className={`scroll-mt-24 py-20 px-5 sm:px-8 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}
  >
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <div>
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${
          isDarkMode ? "text-sky-300" : "text-blue-700"
        }`}>
          A little about me
        </p>
        <h2 className="max-w-sm text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Engineering ideas into useful things.
        </h2>
        <a
          href="#experience"
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
            isDarkMode ? "text-sky-300 hover:text-sky-200" : "text-blue-700 hover:text-blue-800"
          }`}
        >
          Explore my experience <ArrowUpRight size={16} />
        </a>
      </div>

      <div>
        <p className={`text-lg leading-8 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          I’m an Information Science and Engineering graduate from BMS College of Engineering, Bengaluru. I enjoy building practical software—from full-stack applications to cloud automation—and exploring how AI and data can help solve real-world problems.
        </p>
        <p className={`mt-4 text-base leading-7 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          I learn by building, improving ideas through iteration, and paying attention to the details that make software dependable and clear to use.
        </p>

        <div className={`mt-8 grid gap-px overflow-hidden rounded-2xl border ${
          isDarkMode ? "border-white/10 bg-white/10" : "border-gray-200 bg-gray-200"
        } sm:grid-cols-3`}>
          {highlights.map(({ icon, label, value }) => (
            <div
              key={label}
              className={`p-4 sm:p-5 ${
                isDarkMode ? "bg-[#0a0d13]" : "bg-white"
              }`}
            >
              <span className={isDarkMode ? "text-sky-300" : "text-blue-700"}>
                {icon}
              </span>
              <p className={`mt-4 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default About;
