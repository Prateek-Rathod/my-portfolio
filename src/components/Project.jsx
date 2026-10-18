import React from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import ecommerceImg from "../assets/projects/ecommerce.png";
import coffeeImg from "../assets/projects/coffee.png";
import clothesImg from "../assets/projects/clothes.png";
import rpaImg from "../assets/projects/rpa.png";

const AnimatedSection = motion.section;
const AnimatedArticle = motion.article;

const projects = [
  {
    title: "Full-Stack MERN E-commerce",
    image: ecommerceImg,
    alt: "E-commerce website project preview",
    description:
      "A full-stack shopping experience with secure accounts, payments, and tools for managing products and orders.",
    features: ["JWT authentication", "Razorpay & cash on delivery", "Admin dashboard"],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: "https://prateek-rathod.github.io/Ecommerce",
    demoLabel: "Live demo",
  },
  {
    title: "Coffee Shop Android App",
    image: coffeeImg,
    alt: "Coffee shop mobile application project preview",
    description:
      "An Android app for browsing and ordering coffee, with custom orders, QR payments, and product ratings.",
    features: ["Order customization", "QR code payment", "Product ratings"],
    tech: ["Android Studio", "Java", "Kotlin", "Firebase"],
  },
  {
    title: "Clothes Shop Microservices",
    image: clothesImg,
    alt: "Clothes shop microservices project preview",
    description:
      "A modular clothes-shop application separating core commerce functionality into services.",
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
    features: ["Form handling", "Word-to-PDF conversion", "Orchestrator integration"],
    tech: ["UiPath", "RPA", "PDF"],
    github: "https://github.com/Prateek-Rathod/RPA",
  },
];

const Projects = ({ isDarkMode }) => (
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

              {(project.demo || project.github) && (
                <div className={`mt-auto flex gap-4 border-t pt-4 ${
                  isDarkMode ? "border-white/[0.08]" : "border-gray-100"
                }`}>
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
              )}
            </div>
          </AnimatedArticle>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
