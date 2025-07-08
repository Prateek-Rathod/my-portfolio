import React from "react";
import { motion } from "framer-motion";

import ecommerceImg from "../assets/projects/ecommerce.png";
import coffeeImg from "../assets/projects/coffee.png";
import clothesImg from "../assets/projects/clothes.png";
import rpaImg from "../assets/projects/rpa.png";

const projectData = [
  {
    title: "E-commerce Website",
    image: ecommerceImg,
    description:
      "Built a full-stack MERN platform with secure authentication, order tracking, product CRUD, and integrated Stripe/Razorpay.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Razorpay"],
    github: "",
  },
  {
    title: "Coffee Shop App",
    image: coffeeImg,
    description:
      "Android app with QR payment, smooth UI navigation using RecyclerView, ScrollView, and BottomAppBar.",
    tech: ["Android Studio", "Kotlin", "XML"],
    github: "",
  },
  {
    title: "Clothes Shop Microservices",
    image: clothesImg,
    description:
      "Microservices-based cloth shop with modular services (ordering, payment) using Docker and SOA principles.",
    tech: ["Docker", "Microservices", "SOA", "REST API"],
    github: "https://github.com/Prateek-Rathod/soa.git",
  },
  {
    title: "Offer Letter Generator (RPA)",
    image: rpaImg,
    description:
      "Automated HR workflow using UiPath with Word to PDF conversion, form handling, and Orchestrator integration.",
    tech: ["UiPath", "RPA", "Orchestrator", "PDF", "Word"],
    github: "https://github.com/Prateek-Rathod/RPA.git",
  },
];

const Projects = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`h-full rounded-2xl shadow-lg backdrop-blur-md border transition-all hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-[#121212] border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  : "bg-white border-gray-200 hover:shadow-[0_0_20px_rgba(0,0,0,0.10)]"
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Project Image */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                      {project.title}
                    </h3>

                    <p className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                            isDarkMode
                              ? "bg-gray-800 text-white border-gray-600 hover:bg-yellow-500 hover:text-black"
                              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-200 hover:text-blue-900"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold underline transition mt-auto ${
                        isDarkMode
                          ? "text-yellow-500 hover:text-yellow-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      View GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
