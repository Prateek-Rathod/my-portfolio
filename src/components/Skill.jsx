import React, { useState, useEffect } from "react";
import { Code, Monitor, Database, Layers, Camera } from "lucide-react";
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
  {
    title: "Video & Photo Editing",
    icon: <Camera size={24} className="text-yellow-400" />,
    items: "Adobe Premiere Pro, Photoshop, Canva, CapCut",
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
        }, 400);
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
      className="py-16 text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="bg-[#121212] rounded-xl p-8 border border-gray-700"
          variants={containerVariants}
        >
          <div className="flex flex-col gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 hover:bg-gray-800 p-3 rounded-lg transition"
                onMouseEnter={() => animationDone && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot beside title */}
                <div className="relative pt-1">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-black transition-all duration-300
                      ${hoveredIndex === index || glowTrailIndex === index
                        ? "bg-green-400 shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]"
                        : "bg-white"}`}
                  />
                </div>

                {/* Skill icon, title and description */}
                <div>
                  <div className="flex items-center gap-2">
                    <div>{skill.icon}</div>
                    <h3 className="text-lg font-semibold cursor-pointer">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 ml-7">{skill.items}</p>
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
