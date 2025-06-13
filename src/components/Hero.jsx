import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  const typedRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Designer", "Coder"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-10  text-white font-poppins space-y-12"
    >
      {/* Text Section */}
      <motion.div
        variants={textVariants}
        className="text-center space-y-6 px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Hi, I'm{" "}
          <span className="text-yellow-400 font-kaushan">
            Prateek Rathod 👋
          </span>
        </h1>

        <div className="text-2xl md:text-3xl font-bold text-cyan-400">
          <span ref={typedRef}></span>
        </div>

        <p className="text-gray-300 max-w-lg mx-auto text-base md:text-lg">
          Building smooth web experiences one line of code at a time.
        </p>

        <div className="pt-2">
          <a
            href="#footer"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Canvas Section with Centered Glow */}
      <div className="relative w-full max-w-3xl h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,_#00ffae,_transparent_70%)]" />
        </div>

        {/* Canvas in Foreground */}
        <div className="relative w-full h-full z-10 flex items-center justify-center">
          <ComputersCanvas />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
