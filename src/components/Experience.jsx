import React from "react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import experience from "../data/experience";

const AnimatedSection = motion.section;
const AnimatedArticle = motion.article;

const Experience = ({ isDarkMode }) => (
  <AnimatedSection
    id="experience"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55 }}
    className={`scroll-mt-24 py-20 px-5 sm:px-8 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}
  >
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.24em] ${
          isDarkMode ? "text-sky-300" : "text-blue-700"
        }`}>
          Career journey
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h2>
      </div>

      <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[13px] before:top-8 before:w-px before:bg-gradient-to-b before:from-sky-400/70 before:via-sky-400/20 before:to-transparent sm:space-y-6">
        {experience.map((role, index) => (
          <AnimatedArticle
            key={`${role.company}-${role.role}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={`group relative ml-0 rounded-2xl border p-5 pl-11 transition-all duration-300 hover:-translate-y-1 sm:p-7 sm:pl-14 ${
              isDarkMode
                ? "border-white/[0.09] bg-white/[0.025] hover:border-sky-300/30 hover:bg-white/[0.04] hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
                : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            }`}
          >
            <span className={`absolute left-1 top-7 grid h-7 w-7 place-items-center rounded-full border-4 sm:left-0 ${
              isDarkMode
                ? "border-[#090c12] bg-sky-300 text-slate-950"
                : "border-gray-50 bg-blue-700 text-white"
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
            </span>

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold sm:text-2xl">{role.company}</h3>
                  {role.current && (
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      isDarkMode
                        ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300"
                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                    }`}>
                      Current
                    </span>
                  )}
                </div>
                <p className={`mt-1 font-medium ${
                  isDarkMode ? "text-sky-300" : "text-blue-700"
                }`}>
                  {role.role}
                  <span className={`font-normal ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {" "}· {role.type}
                  </span>
                </p>
              </div>

              <div className={`flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 text-sm md:flex-col md:items-end ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                <span>{role.dates}</span>
                {role.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    {role.location}
                  </span>
                )}
              </div>
            </div>

            <div className={`mt-6 border-t pt-5 ${
              isDarkMode ? "border-white/[0.08]" : "border-gray-100"
            }`}>
              {role.highlights?.length > 0 && (
                <ul className={`mb-5 space-y-2.5 text-sm leading-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className={`mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                        isDarkMode ? "bg-sky-300" : "bg-blue-600"
                      }`} aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                isDarkMode ? "text-gray-500" : "text-gray-500"
              }`}>
                Tools & technologies
              </p>
              <div className="flex flex-wrap gap-2">
              {role.technologies.map((technology) => (
                <span
                  key={technology}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isDarkMode
                      ? "border-sky-300/10 bg-sky-300/[0.04] text-gray-300 group-hover:border-sky-300/25"
                      : "border-blue-100 bg-blue-50/70 text-gray-600 group-hover:border-blue-200"
                  }`}
                >
                  {technology}
                </span>
              ))}
              </div>
            </div>
            <BriefcaseBusiness
              size={80}
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-4 right-5 hidden transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 md:block ${
                isDarkMode ? "text-white/[0.025]" : "text-blue-900/[0.035]"
              }`}
            />
          </AnimatedArticle>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;
