import React from "react";
import {
  Braces,
  Database,
  Monitor,
  PanelsTopLeft,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const AnimatedSection = motion.section;
const AnimatedCard = motion.article;

const skillGroups = [
  {
    title: "Programming",
    icon: <Braces size={19} aria-hidden="true" />,
    skills: ["C++", "C", "Python", "SQL"],
  },
  {
    title: "Web development",
    icon: <Monitor size={19} aria-hidden="true" />,
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Data & machine learning",
    icon: <Sparkles size={19} aria-hidden="true" />,
    skills: ["NumPy", "Pandas", "scikit-learn", "AI/ML basics"],
  },
  {
    title: "Databases",
    icon: <Database size={19} aria-hidden="true" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & platforms",
    icon: <Wrench size={19} aria-hidden="true" />,
    skills: ["GitHub", "Postman", "Android Studio"],
  },
  {
    title: "Foundations & creative",
    icon: <PanelsTopLeft size={19} aria-hidden="true" />,
    skills: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Video Editing", "Photography"],
  },
];

const Skill = ({ isDarkMode }) => (
  <AnimatedSection
    id="skills"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55 }}
    className={`scroll-mt-24 py-20 px-5 sm:px-8 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.24em] ${
          isDarkMode ? "text-sky-300" : "text-blue-700"
        }`}>
          Tools I work with
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon, skills }, index) => (
          <AnimatedCard
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode
                ? "border-white/[0.08] bg-white/[0.025] hover:border-sky-300/30 hover:bg-white/[0.045]"
                : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
                isDarkMode
                  ? "bg-sky-300/10 text-sky-300 group-hover:bg-sky-300/15"
                  : "bg-blue-50 text-blue-700 group-hover:bg-blue-100"
              }`}>
                {icon}
              </span>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${
                    isDarkMode
                      ? "border-white/[0.08] bg-black/20 text-gray-300 group-hover:border-white/[0.12]"
                      : "border-gray-200 bg-gray-50 text-gray-600 group-hover:border-blue-100"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Skill;
