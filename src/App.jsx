import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export const ThemeContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen font-poppins transition-colors duration-500 ${
          isDark ? "bg-black text-white" : "bg-[#0B1D3A] text-white"
        }`}
      >
        <CustomCursor />
        <Header />
        <hr className={`my-3 ${isDark ? "border-gray-700" : "border-gray-300"}`} />
        <main>
          <Hero />
          <hr className={`my-6 ${isDark ? "border-gray-700" : "border-gray-300"}`} />
          <Education />
          <hr className={`my-6 ${isDark ? "border-gray-700" : "border-gray-300"}`} />
          <Skills />
          <hr className={`my-6 ${isDark ? "border-gray-700" : "border-gray-300"}`} />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
