import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../assets/logo.png";
import resumePDF from "../assets/Prateek_Rathod_Resume.pdf";

const educationItems = [
  {
    type: "BE",
    title: "BACHELOR OF ENGINEERING",
    details: [
      "🔹 Pursuing Engineering at BMS College of Engineering, Bangalore.",
      "🔹 Gained strong fundamentals in programming, web development, and software design.",
      "🔹 Worked on multiple projects and participated in technical events and hackathons.",
    ],
    logo,
    buttonText: "View Resume",
    buttonLink: resumePDF,
  },
  {
    type: "PUC",
    title: "PUC / 12ᵗʰ",
    details: [
      "🔹 Completed 12ᵗʰ from Narayana Junior College, Hyderabad.",
      "🔹 Secured an aggregate of 95.8%.",
      "🔹 Focused on core science subjects and entrance preparation.",
    ],
    logo,
    buttonText: null,
    buttonLink: null,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [glowTrailIndex, setGlowTrailIndex] = useState(-1);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      if (!animationDone) {
        let i = 0;
        const interval = setInterval(() => {
          setGlowTrailIndex(i);
          i++;
          if (i >= educationItems.length) {
            clearInterval(interval);
            setTimeout(() => {
              setAnimationDone(true);
              setGlowTrailIndex(-1);
            }, 300);
          }
        }, 400);
      }
    }
  }, [inView, animationDone, controls]);

  return (
    <motion.section
      id="second"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4  text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Education</h1>

      <div className="max-w-3xl mx-auto flex">
        {/* Timeline Line & Dots */}
        <div className="relative w-16">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2" />
          {educationItems.map((_, index) => {
            const isHovered = hoveredIndex === index;
            const isTrail = glowTrailIndex === index;

            return (
              <div
                key={index}
                className={`absolute left-1/2 w-4 h-4 rounded-full border-2 border-black transform -translate-x-1/2 transition-all duration-300 ${
                  isHovered || isTrail
                    ? "bg-green-400 shadow-[0_0_12px_6px_rgba(34,197,94,0.5)]"
                    : "bg-white"
                }`}
                style={{ top: `${index * 200 + 32}px` }}
              />
            );
          })}
        </div>

        {/* Card List */}
        <motion.div
          className="bg-[#121212] rounded-xl p-8 border border-gray-700 flex-1"
          variants={containerVariants}
        >
          <div className="flex flex-col gap-16">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start hover:bg-gray-800 p-4 rounded-lg transition"
                variants={itemVariants}
                onMouseEnter={() => animationDone && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-20 h-20 rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {item.title}
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-1 mb-3">
                    {item.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {item.buttonLink && (
                    <a
                      href={item.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-500 text-white rounded-lg transition-all duration-300 group"
                    >
                      <span className="w-2 h-2 rounded-full transition-all duration-300 bg-red-500 group-hover:bg-green-400 group-hover:shadow-[0_0_10px_3px_rgba(34,197,94,0.8)]" />
                      {item.buttonText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
