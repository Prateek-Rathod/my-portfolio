import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { motion } from "framer-motion";

import ecommerceImg from "../assets/projects/ecommerce.png";
import coffeeImg from "../assets/projects/coffee.png";
import clothesImg from "../assets/projects/clothes.png";
import rpaImg from "../assets/projects/rpa.png";

const AnimatedSection = motion.section;
const AnimatedArticle = motion.article;
const eCommerceArchitecture = [
  {
    label: "React UI",
    details: "The React frontend provides the shopping experience and admin dashboard.",
  },
  {
    label: "Node.js + Express",
    details: "The Node.js and Express backend supports the full-stack application.",
  },
  {
    label: "JWT authentication",
    details: "JWT is used for user authentication.",
  },
  {
    label: "MongoDB",
    details: "MongoDB stores the application data.",
  },
  {
    label: "Razorpay",
    details: "Razorpay provides online payment processing, alongside cash on delivery.",
  },
];

const projects = [
  {
    title: "Full-Stack MERN E-commerce",
    image: ecommerceImg,
    alt: "E-commerce website project preview",
    description:
      "A full-stack shopping experience with secure accounts, payments, and tools for managing products and orders.",
    problem:
      "Bring product discovery, checkout, order management, and store administration together in one shopping platform.",
    contribution:
      "Built a responsive MERN application with JWT authentication, shopping cart and order management, Razorpay and cash-on-delivery checkout, and an admin dashboard.",
    features: ["JWT authentication", "Razorpay & cash on delivery", "Admin dashboard"],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay"],
    demo: "https://prateek-rathod.github.io/Ecommerce",
    demoLabel: "Live demo",
    architecture: eCommerceArchitecture,
  },
  {
    title: "Coffee Shop Android App",
    image: coffeeImg,
    alt: "Coffee shop mobile application project preview",
    description:
      "An Android app for browsing and ordering coffee, with custom orders, QR payments, and product ratings.",
    problem:
      "Make it straightforward for customers to browse coffee, customize an order, and complete payment in a mobile app.",
    contribution:
      "Built the Android app with order customization, QR-code payment, product ratings, and layouts including RecyclerView, ConstraintLayout, and ScrollView.",
    features: ["Order customization", "QR code payment", "Product ratings"],
    tech: ["Android Studio", "Java", "Kotlin", "Firebase"],
  },
  {
    title: "Clothes Shop Microservices",
    image: clothesImg,
    alt: "Clothes shop microservices project preview",
    description:
      "A modular clothes-shop application separating core commerce functionality into services.",
    problem:
      "Structure clothes-shop ordering and payment functionality as separate services.",
    contribution:
      "Developed the shop using a microservices approach with Docker and service-oriented architecture.",
    features: ["Ordering and payment services", "Docker", "REST APIs"],
    tech: ["Docker", "Microservices", "SOA"],
    github: "https://github.com/Prateek-Rathod/soa",
  },
  {
    title: "Offer Letter Generator",
    image: rpaImg,
    alt: "Automated offer letter generation project preview",
    description:
      "An RPA workflow for automating offer-letter creation and document handling.",
    problem:
      "Automate offer-letter document preparation and handling in an HR workflow.",
    contribution:
      "Implemented form handling, Word-to-PDF conversion, and UiPath Orchestrator integration.",
    features: ["Form handling", "Word-to-PDF conversion", "Orchestrator integration"],
    tech: ["UiPath", "RPA", "PDF"],
    github: "https://github.com/Prateek-Rathod/RPA",
  },
];

const Projects = ({ isDarkMode }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const dialogRef = useRef(null);
  const text = isDarkMode ? "text-white" : "text-gray-900";

  useEffect(() => {
    if (activeProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      setSelectedComponent(activeProject.architecture?.[0] ?? null);
    }
  }, [activeProject]);

  const closeProject = () => {
    dialogRef.current?.close();
    setActiveProject(null);
    setSelectedComponent(null);
  };

  return (
  <>
  <AnimatedSection
    id="projects"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.55 }}
    className={`scroll-mt-24 py-20 px-5 sm:px-8 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.24em] ${
          isDarkMode ? "text-sky-300" : "text-blue-700"
        }`}>
          Selected work
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h2>
        <p className={`mx-auto mt-4 max-w-xl text-sm leading-6 sm:text-base ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          A few things I’ve built across web, mobile, automation, and distributed systems.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedArticle
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: index % 2 ? 0.08 : 0 }}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode
                ? "border-white/[0.09] bg-white/[0.025] hover:border-sky-300/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            }`}
          >
            <div className={`relative aspect-[16/8.5] overflow-hidden ${
              isDarkMode ? "bg-[#11151d]" : "bg-gray-100"
            }`}>
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />
              <span className={`absolute bottom-3 left-3 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur-md ${
                isDarkMode
                  ? "border-white/10 bg-black/60 text-gray-200"
                  : "border-white/60 bg-white/85 text-gray-600"
              }`}>
                Project 0{index + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {project.description}
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-xs ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      isDarkMode ? "bg-sky-300" : "bg-blue-600"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-md px-2 py-1 text-[11px] ${
                      isDarkMode
                        ? "bg-white/[0.05] text-gray-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className={`mt-auto flex flex-wrap items-center gap-4 border-t pt-4 ${
                  isDarkMode ? "border-white/[0.08]" : "border-gray-100"
                }`}>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className={`text-sm font-semibold ${
                      isDarkMode ? "text-sky-300 hover:text-sky-200" : "text-blue-700 hover:text-blue-800"
                    }`}
                  >
                    Project details
                  </button>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                        isDarkMode ? "text-sky-300 hover:text-sky-200" : "text-blue-700 hover:text-blue-800"
                      }`}
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      {project.demoLabel}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                        isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-950"
                      }`}
                    >
                      <Github size={15} aria-hidden="true" />
                      GitHub
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
              </div>
            </div>
          </AnimatedArticle>
        ))}
      </div>

    </div>
  </AnimatedSection>

  <dialog
    ref={dialogRef}
    aria-labelledby="project-dialog-title"
    onClose={() => {
      setActiveProject(null);
      setSelectedComponent(null);
    }}
    onKeyDown={(event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
      }
    }}
    onClick={(event) => {
      if (event.target === dialogRef.current) closeProject();
    }}
    className={`m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border p-0 shadow-2xl backdrop:bg-black/70 ${
      isDarkMode ? "border-white/10 bg-[#0b0f16]" : "border-gray-200 bg-white"
    } ${text}`}
  >
    {activeProject && (
      <div>
        <div className="relative">
          <img
            src={activeProject.image}
            alt={activeProject.alt}
            className="max-h-64 w-full object-cover"
          />
          <button
            type="button"
            onClick={closeProject}
            aria-label="Close project details"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5 sm:p-7">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            isDarkMode ? "text-sky-300" : "text-blue-700"
          }`}>
            Project overview
          </p>
          <h2 id="project-dialog-title" className="mt-2 text-2xl font-bold">
            {activeProject.title}
          </h2>
          <p className={`mt-3 text-sm leading-7 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {activeProject.description}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[["Problem", activeProject.problem], ["My contribution", activeProject.contribution]].map(
              ([heading, content]) => (
                <div
                  key={heading}
                  className={`rounded-xl border p-4 ${
                    isDarkMode
                      ? "border-white/[0.08] bg-white/[0.025]"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <h3 className={`text-xs font-semibold uppercase tracking-wider ${
                    isDarkMode ? "text-sky-300" : "text-blue-700"
                  }`}>
                    {heading}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {content}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Key features</h3>
              <ul className={`mt-3 space-y-2 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {activeProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                      isDarkMode ? "bg-sky-300" : "bg-blue-600"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProject.tech.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-md px-2.5 py-1.5 text-xs ${
                      isDarkMode ? "bg-white/[0.06] text-gray-300" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {activeProject.architecture && (
            <div className={`mt-7 border-t pt-6 ${
              isDarkMode ? "border-white/10" : "border-gray-100"
            }`}>
              <h3 className="text-sm font-semibold">Application architecture</h3>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {activeProject.architecture.map((component, index) => (
                  <React.Fragment key={component.label}>
                    {index > 0 && (
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className={isDarkMode ? "text-gray-600" : "text-gray-400"}
                      />
                    )}
                    <button
                      type="button"
                      aria-pressed={selectedComponent?.label === component.label}
                      onClick={() => setSelectedComponent(component)}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                        selectedComponent?.label === component.label
                          ? isDarkMode
                            ? "border-sky-300/40 bg-sky-300/10 text-sky-200"
                            : "border-blue-300 bg-blue-50 text-blue-800"
                          : isDarkMode
                            ? "border-white/10 bg-white/[0.03] text-gray-300"
                            : "border-gray-200 bg-gray-50 text-gray-600"
                      }`}
                    >
                      {component.label}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              {selectedComponent && (
                <p className={`mt-3 text-sm leading-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {selectedComponent.details}
                </p>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-4">
            {activeProject.demo && (
              <a
                href={activeProject.demo}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  isDarkMode ? "text-sky-300" : "text-blue-700"
                }`}
              >
                <ExternalLink size={15} />
                {activeProject.demoLabel}
              </a>
            )}
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Github size={15} />
                Source code
              </a>
            )}
          </div>
        </div>
      </div>
    )}
  </dialog>
  </>
  );
};

export default Projects;
