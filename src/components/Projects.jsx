import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "GameHub",
    description:
      "An engaging online library for discovering indie games. Browse a vast collection, view detailed insights, and manage your wishlist with ease.",
    image: "https://i.ibb.co.com/Vc213qLT/Screenshot-2025-12-06-140244.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    mainStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    links: {
      live: "https://illustrious-dolphin-1c8486.netlify.app/",
      repo: "https://github.com/moksina-akter/GameHub",
      backend: null
    },
    challenges: "Handling real-time updates for the wishlist and optimizing image loading for a large collection of games.",
    improvements: "Implementing a user review system and adding more advanced filtering options based on game genres and ratings."
  },
  {
    title: "HERO.IO",
    description:
      "A fully responsive AppStore UI featuring app discovery, installation management, and analytics. Includes live search, sorting, and persistent local storage states.",
    image:
      "https://i.ibb.co.com/KjJ7VGNH/Screenshot-2025-12-06-140123.png",
    tags: ["Tailwind CSS", "React", "Framer motion"],
    mainStack: "React, Tailwind CSS",
    links: {
      live: "https://mellow-naiad-91c8d6.netlify.app/",
      repo: "https://github.com/moksina-akter/Ph-Assignment-08",
      backend: "#"
    },
    challenges: "Managing complex state for app installation progress and ensuring smooth animations across different devices.",
    improvements: "Adding a backend to store user preferences and app usage statistics permanently."
  },
  {
    title: "Import-Export Hub",
    description:
      "A comprehensive platform for global product trading. Features secure authentication, real-time inventory management, and a seamless dashboard for tracking imports.",
    image:
      "https://i.ibb.co.com/23D9bkrt/Screenshot-2025-12-06-140152.png",
    tags: ["Express", "Firebase", "React", "MongoDB", "Tailwind CSS", "JWT"],
    mainStack: "MERN Stack",
    links: {
      live: "https://wondrous-pastelito-a54025.netlify.app/",
      repo: "https://github.com/moksina-akter/Ph-Assignment-10--Client-",
      backend: "https://github.com/moksina-akter/Ph-Assignment-10-Server"
    },
    challenges: "Implementing secure authentication with JWT and ensuring real-time updates for inventory levels.",
    improvements: " integrating a payment gateway for premium features and adding multi-language support."
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
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

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
              <div className="relative overflow-hidden h-52 group">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(project)}
                  className="w-full mt-auto py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  View More / Details <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors z-10"
              >
                <FaTimes size={20} />
              </button>

              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white p-6 sm:p-8">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technolgies</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {selectedProject.mainStack}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenges Faced</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Potential Improvements</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {selectedProject.improvements}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Project
                  </a>
                  <a
                    href={selectedProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-colors"
                  >
                    <FaGithub /> Client Code
                  </a>
                  {selectedProject.links.backend && (
                    <a
                      href={selectedProject.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-colors"
                    >
                      <FaCode /> Server Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
