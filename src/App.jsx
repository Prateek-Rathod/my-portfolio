import React, { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className={`min-h-screen overflow-x-clip font-manrope transition-colors duration-500 ${
        isDarkMode ? "bg-[#090c12] text-white" : "bg-[#f8fafc] text-slate-950"
      }`}>
        <CustomCursor />
        <a
          href="#main-content"
          className={`sr-only fixed left-4 top-4 z-[60] rounded-lg px-4 py-2 focus:not-sr-only ${
            isDarkMode ? "bg-white text-slate-950" : "bg-slate-950 text-white"
          }`}
        >
          Skip to content
        </a>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main id="main-content">
          <Hero isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Education isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </MotionConfig>
  );
};

export default App;
