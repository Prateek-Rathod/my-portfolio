import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedSection = motion.section;
const AnimatedArticle = motion.article;

const education = [
  {
    institution: "BMS College of Engineering",
    location: "Bengaluru, India",
    qualification: "B.E. in Information Science",
    dates: "2022 – 2026",
    result: "CPI: 8.5",
  },
  {
    institution: "Narayana Junior College",
    location: "Hyderabad",
    qualification: "Intermediate · Central Board of Secondary Education",
    dates: "2022",
    result: "95.6%",
  },
  {
    institution: "Gnyana Sudha Vidyalaya",
    location: "Bidar",
    qualification: "High School · Central Board of Secondary Education",
    dates: "2020",
    result: "69%",
  },
];

const Education = ({ isDarkMode }) => (
  <AnimatedSection
    id="education"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
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
          Academic background
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Education
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, index) => (
          <AnimatedArticle
            key={item.institution}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode
                ? "border-white/[0.09] bg-white/[0.025] hover:border-sky-300/30 hover:bg-white/[0.04]"
                : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg"
            }`}
          >
            <div className={`mb-6 grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
              isDarkMode ? "bg-sky-300/10 text-sky-300" : "bg-blue-50 text-blue-700"
            }`}>
              <GraduationCap size={21} aria-hidden="true" />
            </div>
            <p className={`text-xs font-medium ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
              {item.dates}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-snug">{item.institution}</h3>
            <p className={`mt-1 text-sm ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
              {item.location}
            </p>
            <p className={`mt-4 min-h-10 text-sm leading-5 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              {item.qualification}
            </p>
            <p className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              isDarkMode ? "bg-sky-300/10 text-sky-200" : "bg-blue-50 text-blue-700"
            }`}>
              {item.result}
            </p>
            <span className={`absolute -bottom-10 -right-6 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${
              isDarkMode ? "bg-sky-300" : "bg-blue-500"
            }`} />
          </AnimatedArticle>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Education;
