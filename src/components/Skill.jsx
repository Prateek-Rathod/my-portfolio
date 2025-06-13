import React, { useState, useEffect } from "react";
import { Code, Monitor, Database, Layers } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Programming Languages",
    icon: <Code size={24} className="text-blue-500" />,
    items: "C, C++, Python, Java",
  },
  {
    title: "Web Development",
    icon: <Monitor size={24} className="text-green-500" />,
    items: "HTML, CSS, JavaScript",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={24} className="text-purple-500" />,
    items: "React",
  },
  {
    title: "Database Management",
    icon: <Database size={24} className="text-pink-500" />,
    items: "SQL, MySQL",
  },
];

const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [glowTrailIndex, setGlowTrailIndex] = useState(-1);
  const [animationDone, setAnimationDone] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      if (!animationDone) {
        let i = 0;
        const interval = setInterval(() => {
          setGlowTrailIndex(i);
          i++;
          if (i >= skills.length) {
            clearInterval(interval);
            setTimeout(() => {
              setAnimationDone(true);
              setGlowTrailIndex(-1);
            }, 300);
          }
        }, 400); // controls trail speed
      }
    }
  }, [inView, animationDone, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="third"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16  text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="max-w-4xl mx-auto px-6 flex gap-6">
        {/* Timeline */}
        <div className="relative w-16">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2" />

          {skills.map((_, index) => {
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
                style={{ top: `${index * 100 + 16}px` }}
              />
            );
          })}
        </div>

        {/* Skill List */}
        <motion.div
          className="bg-[#121212] rounded-xl p-8 border border-gray-700 flex-1"
          variants={containerVariants}
        >
          <div className="flex flex-col gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 hover:bg-gray-800 p-2 rounded-lg transition"
                onMouseEnter={() => animationDone && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="mt-1">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 cursor-pointer">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400">{skill.items}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skill;
