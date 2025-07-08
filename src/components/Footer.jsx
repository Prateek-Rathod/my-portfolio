import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-10 transition-colors duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      <div id="footer" className="max-w-6xl mx-auto px-4">
        {/* Name / Branding */}
        <div className="text-center mb-8">
          <a
            href="#"
            className={`text-4xl pt-6 font-alex font-bold text-gradient bg-clip-text text-transparent hover:opacity-80 transition duration-300 ${
              isDarkMode ? 'bg-white' : 'bg-gray-900'
            }`}
          >
            Prateek Rathod
          </a>
        </div>

        {/* Contact Intro Text */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Connect!
          </h2>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm currently pursuing my Bachelor's in Information Science and Engineering
            at BMS College of Engineering. Feel free to reach out if you're interested in
            collaborating, offering an internship opportunity, or just want to chat!
          </p>
        </div>

        {/* Contact Form with Glow */}
        <div className="relative">
          <div className={`absolute -inset-2 z-0 rounded-xl blur-2xl opacity-40 pointer-events-none ${
            isDarkMode 
              ? 'bg-[radial-gradient(circle_at_center,_#00ffae,_transparent_70%)]' 
              : 'bg-[radial-gradient(circle_at_center,_#3b82f6,_transparent_70%)]'
          }`} />
          <div className="relative z-10">
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Social Icons */}
        <div className={`flex justify-center gap-6 mt-10 text-2xl ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <a
            href="https://www.instagram.com/prateek.rathod_?igsh=MTEzemk1ZTFhN3k4aw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/prateek-rathod-65479a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className={`text-center text-sm mt-6 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          &copy; <span>{currentYear}</span> Prateek Rathod / All Rights Reserved
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
