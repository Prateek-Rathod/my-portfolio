import React from "react";
import { motion } from "framer-motion";
import logoIcon from "../assets/icon.png";

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        w-full sticky top-0 z-50
        px-6 py-3
        backdrop-blur-md backdrop-saturate-150
        transition-all duration-300
        ${isDarkMode
          ? "bg-black/40 border-b border-white/10"
          : "bg-white/60 border-b border-black/10"}
      `}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <a href={import.meta.env.BASE_URL}>
            <img
              src={logoIcon}
              alt="Prateek Rathod Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium">
            {[
              { label: "Home", link: "/" },
              { label: "Education", link: "#second" },
              { label: "Skills", link: "#third" },
              { label: "Projects", link: "#projects" },
              { label: "Contact Me", link: "#footer" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  className={`transition-all duration-300 cursor-none hover:text-xl ${
                    isDarkMode
                      ? "text-white hover:text-yellow-400"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 cursor-none ${
              isDarkMode
                ? "bg-gray-800/70 hover:bg-gray-700/70 text-yellow-400"
                : "bg-gray-100/70 hover:bg-gray-200/70 text-blue-600"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Theme Toggle */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 cursor-none ${
              isDarkMode
                ? "bg-gray-800/70 hover:bg-gray-700/70 text-yellow-400"
                : "bg-gray-100/70 hover:bg-gray-200/70 text-blue-600"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
