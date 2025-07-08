import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-poppins transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <CustomCursor />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <hr className={`my-3 transition-colors duration-500 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-300'
      }`} />

      <main>
        <Hero isDarkMode={isDarkMode} />
        <hr className={`my-6 transition-colors duration-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-300'
        }`} />
        <Education isDarkMode={isDarkMode} />
        <hr className={`my-6 transition-colors duration-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-300'
        }`} />
        <Skills isDarkMode={isDarkMode} />
        <hr className={`my-6 transition-colors duration-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-300'
        }`} />
        <Projects isDarkMode={isDarkMode} />
        <hr className={`my-6 transition-colors duration-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-300'
        }`} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
