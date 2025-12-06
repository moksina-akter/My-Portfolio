import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "GameHub",
    description:
      "An engaging online library for discovering indie games. Browse a vast collection, view detailed insights, and manage your wishlist with ease.",
    image: "https://i.ibb.co.com/Vc213qLT/Screenshot-2025-12-06-140244.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    links: {
      live: "https://illustrious-dolphin-1c8486.netlify.app/",
      repo: "https://github.com/moksina-akter/GameHub",
      backend: null
    }
  },
  {
    title: "HERO.IO",
    description:
      "A fully responsive AppStore UI featuring app discovery, installation management, and analytics. Includes live search, sorting, and persistent local storage states.",
    image:
      "https://i.ibb.co.com/KjJ7VGNH/Screenshot-2025-12-06-140123.png",
    tags: ["Tailwind CSS", "React", "Framer motion"],
    links: {
      live: "https://mellow-naiad-91c8d6.netlify.app/",
      repo: "https://github.com/moksina-akter/Ph-Assignment-08",
      backend: "#"
    }
  },
  {
    title: "Import-Export Hub",
    description:
      "A comprehensive platform for global product trading. Features secure authentication, real-time inventory management, and a seamless dashboard for tracking imports.",
    image:
      "https://i.ibb.co.com/23D9bkrt/Screenshot-2025-12-06-140152.png",
    tags: ["Express", "Firebase", "React", "MongoDB", "Tailwind CSS", "JWT"],
    links: {
      live: "https://wondrous-pastelito-a54025.netlify.app/",
      repo: "https://github.com/moksina-akter/Ph-Assignment-10--Client-",
      backend: "https://github.com/moksina-akter/Ph-Assignment-10-Server"
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Projects() {
  return (
    <section
      id="projects"
      className="py-10 relative bg-gray-100 dark:bg-gray-800 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Portfolio</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-52 group">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                  {/* Overlay Buttons */}
                  {project.links.live && project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.links.repo && project.links.repo !== '#' && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                      title="GitHub Repo"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links (Visible on mobile or fallback) */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.links.backend && project.links.backend !== '#' && project.links.backend !== null ? (
                      <>
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <FaGithub className="text-lg" /> Client
                        </a>
                        <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <FaCode className="text-lg" /> Server
                        </a>
                      </>
                    ) : (
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaGithub className="text-lg" /> Code
                      </a>
                    )}
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <FaExternalLinkAlt className="text-sm" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
