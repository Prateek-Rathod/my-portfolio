import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));
const AnimatedSection = motion.section;
const AnimatedDiv = motion.div;
const roles = ["Software Developer", "Full-Stack Developer", "AI Enthusiast"];

const Hero = ({ isDarkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const resumeUrl = `${import.meta.env.BASE_URL}Prateek_Rathod_Resume.pdf`;

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <AnimatedSection
      id="home"
      className={`relative isolate min-h-[calc(100svh-72px)] overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "text-white" : "text-slate-950"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isDarkMode
            ? "bg-[radial-gradient(ellipse_at_75%_35%,rgba(14,165,233,0.12),transparent_36%),radial-gradient(ellipse_at_5%_80%,rgba(99,102,241,0.09),transparent_32%)]"
            : "bg-[radial-gradient(ellipse_at_75%_35%,rgba(14,165,233,0.12),transparent_36%),radial-gradient(ellipse_at_5%_80%,rgba(99,102,241,0.07),transparent_32%)]"
        }`}
      />

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:py-10">
        <div className="relative z-10 max-w-2xl">
          <AnimatedDiv
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium ${
              isDarkMode
                ? "border-white/10 bg-white/[0.04] text-gray-300"
                : "border-blue-100 bg-white/70 text-gray-600 shadow-sm"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            Information Science & Engineering
          </AnimatedDiv>

          <AnimatedDiv
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <p className={`mb-3 text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Hello, I’m
            </p>
            <h1
              aria-label="Prateek Rathod"
              className="text-5xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              Prateek
              <span className={`mt-1 block ${
                isDarkMode ? "text-sky-300" : "text-blue-700"
              }`}>
                Rathod<span className={isDarkMode ? "text-white" : "text-slate-950"}>.</span>
              </span>
            </h1>
          </AnimatedDiv>

          <div className="mt-6 flex min-h-8 items-center gap-3 text-lg font-semibold sm:text-xl">
            <span className={isDarkMode ? "text-gray-500" : "text-gray-400"} aria-hidden="true">
              /
            </span>
            <motion.span
              key={roleIndex}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={isDarkMode ? "text-sky-200" : "text-blue-700"}
            >
              {roles[roleIndex]}
            </motion.span>
          </div>

          <p className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            I build practical software experiences, from full-stack applications to cloud automation, with a growing interest in AI and data.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? "bg-sky-300 text-slate-950 hover:bg-sky-200"
                  : "bg-blue-700 text-white hover:bg-blue-800"
              }`}
            >
              View my projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resumeUrl}
              download="Prateek_Rathod_Resume.pdf"
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                isDarkMode
                  ? "border-white/15 text-gray-200 hover:border-white/30 hover:bg-white/[0.05]"
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white"
              }`}
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Prateek-Rathod"
              target="_blank"
              rel="noreferrer"
              aria-label="Prateek Rathod on GitHub"
              className={`rounded-full p-2 transition-colors ${
                isDarkMode ? "text-gray-400 hover:bg-white/10 hover:text-white" : "text-gray-500 hover:bg-gray-200 hover:text-gray-950"
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prateek-rathod-65479a25b"
              target="_blank"
              rel="noreferrer"
              aria-label="Prateek Rathod on LinkedIn"
              className={`rounded-full p-2 transition-colors ${
                isDarkMode ? "text-gray-400 hover:bg-white/10 hover:text-white" : "text-gray-500 hover:bg-gray-200 hover:text-gray-950"
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#about"
              className={`ml-2 inline-flex items-center gap-2 text-xs font-medium transition-colors ${
                isDarkMode ? "text-gray-500 hover:text-gray-200" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Scroll to explore <ArrowDown size={14} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[310px] w-full max-w-xl sm:h-[440px] lg:h-[560px]">
          <div
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] ${
              isDarkMode ? "bg-sky-500/10" : "bg-blue-400/10"
            }`}
          />
          <Suspense
            fallback={
              <div className={`absolute inset-0 rounded-[2rem] ${
                isDarkMode ? "bg-white/[0.02]" : "bg-blue-50/60"
              }`} aria-label="Loading 3D illustration" />
            }
          >
            <ComputersCanvas />
          </Suspense>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
