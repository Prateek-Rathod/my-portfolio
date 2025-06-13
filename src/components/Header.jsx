import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full px-6 py-4 ${
        isDark ? "bg-black" : "bg-black"
      } shadow-md sticky top-0 z-50 transition-colors duration-500`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <div className="flex items-center mt-1 ml-1">
          <a
            href="/"
            className={`text-2xl font-semibold tracking-wide transition duration-200 ${
              isDark
                ? "text-white hover:text-yellow-400"
                : "text-black hover:text-yellow-600"
            }`}
          >
            Prateek Rathod
          </a>
        </div>

        {/* Desktop Navigation and Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <ul
            className={`flex space-x-6 font-medium ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 text-l hover:text-xl rounded transition-all duration-300 cursor-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#second"
                className="hover:text-yellow-400 text-l hover:text-xl rounded transition-all duration-300 cursor-none"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#third"
                className="hover:text-yellow-400 text-l hover:text-xl rounded transition-all duration-300 cursor-none"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="hover:text-yellow-400 text-l hover:text-xl rounded transition-all duration-300 cursor-none"
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full border ${
              isDark
                ? "border-gray-600 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-200"
            } transition-all duration-300`}
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Nav Placeholder */}
        <div className="md:hidden">{/* Add mobile nav toggle here */}</div>
      </nav>
    </motion.header>
  );
};

export default Header;
