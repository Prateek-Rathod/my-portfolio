import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={`scroll-mt-24 border-t px-5 py-20 transition-colors duration-500 sm:px-8 ${
        isDarkMode
          ? "border-white/[0.08] bg-[#07090e] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${
              isDarkMode ? "text-sky-300" : "text-blue-700"
            }`}>
              Contact
            </p>
            <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let’s make something useful.
            </h2>
            <p className={`mt-5 max-w-md leading-7 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Have a project, opportunity, or idea in mind? I’d be glad to hear from you.
            </p>

            <a
              href="mailto:rathodprateek2004@gmail.com"
              className={`mt-7 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDarkMode ? "text-gray-200 hover:text-sky-300" : "text-gray-700 hover:text-blue-700"
              }`}
            >
              <Mail size={17} aria-hidden="true" />
              rathodprateek2004@gmail.com
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/Prateek-Rathod"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                  isDarkMode
                    ? "border-white/10 text-gray-400 hover:border-sky-300/30 hover:text-white"
                    : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/prateek-rathod-65479a25b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                  isDarkMode
                    ? "border-white/10 text-gray-400 hover:border-sky-300/30 hover:text-white"
                    : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className={`rounded-2xl border p-5 sm:p-7 ${
            isDarkMode
              ? "border-white/[0.09] bg-white/[0.025]"
              : "border-gray-200 bg-gray-50/70"
          }`}>
            <h3 className="mb-5 text-lg font-semibold">Send me a message</h3>
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </div>

        <div className={`mt-16 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between ${
          isDarkMode ? "border-white/[0.08] text-gray-500" : "border-gray-200 text-gray-500"
        }`}>
          <a href="#home" className="font-semibold text-inherit hover:opacity-75">
            Prateek Rathod
          </a>
          <p>© {year} Prateek Rathod. All rights reserved.</p>
          <a href="#home" className="hover:opacity-75">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
