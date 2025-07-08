import React from "react";
import { motion } from "framer-motion";

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full px-6 py-4 shadow-md sticky top-0 z-50 transition-colors duration-500 ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <div className="flex items-center mt-1 ml-1">
          <a
            href="/"
            className={`text-2xl font-semibold tracking-wide transition duration-200 ${
              isDarkMode 
                ? 'text-white hover:text-yellow-400' 
                : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            Prateek Rathod
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium">
            <li>
              <a
                href="/"
                className={`hover:text-xl rounded transition-all duration-300 cursor-none ${
                  isDarkMode 
                    ? 'text-white hover:text-yellow-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#second"
                className={`hover:text-xl rounded transition-all duration-300 cursor-none ${
                  isDarkMode 
                    ? 'text-white hover:text-yellow-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#third"
                className={`hover:text-xl rounded transition-all duration-300 cursor-none ${
                  isDarkMode 
                    ? 'text-white hover:text-yellow-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:text-xl rounded transition-all duration-300 cursor-none ${
                  isDarkMode 
                    ? 'text-white hover:text-yellow-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className={`hover:text-xl rounded transition-all duration-300 cursor-none ${
                  isDarkMode 
                    ? 'text-white hover:text-yellow-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 cursor-none ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun icon for dark mode
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                  clipRule="evenodd" 
                />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Nav Placeholder */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 cursor-none ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                  clipRule="evenodd" 
                />
              </svg>
            ) : (
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
