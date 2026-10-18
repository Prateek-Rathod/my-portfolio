import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Header = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Prateek_Rathod_Resume.pdf`;

  useEffect(() => {
    const sections = ["home", ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]) setActiveSection(visibleEntries[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      activeSection === id
        ? isDarkMode
          ? "bg-white/10 text-white"
          : "bg-gray-900/5 text-gray-950"
        : isDarkMode
          ? "text-gray-400 hover:text-white"
          : "text-gray-600 hover:text-gray-950"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDarkMode
          ? "border-white/[0.07] bg-[#080a0f]/85"
          : "border-gray-200/80 bg-white/90"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          onClick={closeMenu}
          aria-label="Prateek Rathod, home"
        >
          <span className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-bold tracking-tight ${
            isDarkMode
              ? "border-sky-300/20 bg-sky-300/10 text-sky-200"
              : "border-blue-200 bg-blue-50 text-blue-700"
          }`}>
            PR
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            Prateek Rathod
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={linkClass(id)}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              isDarkMode
                ? "border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                : "border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-950"
            }`}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={resumeUrl}
            download="Prateek_Rathod_Resume.pdf"
            className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:inline-flex ${
              isDarkMode
                ? "bg-sky-300 text-slate-950 hover:bg-sky-200"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              isDarkMode
                ? "border-white/10 text-gray-200"
                : "border-gray-200 text-gray-700"
            }`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-5 py-4 lg:hidden ${
            isDarkMode ? "border-white/[0.07] bg-[#080a0f]" : "border-gray-200 bg-white"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={linkClass(id)}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download="Prateek_Rathod_Resume.pdf"
              onClick={closeMenu}
              className={`mt-2 rounded-full px-4 py-2.5 text-center text-sm font-semibold ${
                isDarkMode ? "bg-sky-300 text-slate-950" : "bg-blue-700 text-white"
              }`}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
