import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    title: "Flat Mate Finder",
    description:
      "A platform that connects individuals seeking shared accommodations with an advanced search, booking, and role-based dashboard system.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAYtuI5maNFt8OIN35XWpJX407SLblZx2zN9ZuM2jzrt2ukkDySMNvldYMVXe0j1_TXloKq1AcFRkmThbIFNG7o2EvJ4FoSLcQFA8waK9t6c4iZka8R3lOqYuV3AJP1SjGE8ub7ITyaNvYkRExI06Z1z_dMmSnFTyLQCmVTr2SgqjDkcWBBaztnCeI-apsH-WNsQNwqVveL0doTz1NtDls0sf66XmV2AS5IPmb30S4TDBOJdWuONel1etjHbDURORwJIQlU9KoGok",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Gift Shop Management Dashboard",
    description:
      "A dashboard to manage gift items, seller roles, inventory, and sales tracking with filtering and secure access.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdLv2c9KbRVM9-U2X_x9RAxf4wQP4ZjOrrvwwMCZbpXbVrbsxZvljf2ft2xq8ZI0jE788loNS5m3Ll7MCaW5UyDbLGaJ_emqEmk0Og8hyfp7tsMveTbOpuMJ97QgGt49xMbeFi8LZmNn1OdVeRzboeO_s8UiqJw9P4v_NKtCUv6qbU485ZjDA_HahD3hZX_OHHy3PGXGeh_hbszPvASi5K1IrX8USqsAkzV0WPMxAEC07NoUJb-vkdkLYFf2A2fjXaHJgm93dfQYE",
    tags: ["React", "Redux", "Express", "JWT"],
  },
  {
    title: "Toy Sparkle",
    description:
      "A MERN stack toy marketplace with user authentication and full CRUD features for managing products.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChhgyo5sqOY-C0DSQMI3vrE8czf_9V5qmIP_ZiIry1PylRX3ihWFQNA_DBppvVnsOV-vQODTyIQAKDNEfLkYC81nlTbswQ8-krHnGzMT6HUgmySECLoxR79lA5nwlB_jW6Fj6nrQ7NeE1fgslBah8CYrFvTHYS_eOfawhfqYMr45k_vhLsxlzbH2omaYocF2LeyhMSR9qGc_UEBjLBzb4YXU4Pu-tneupcxDHpheSbSB8mqiAlKo-CkRj6-zCT-WATuFKNyQ7GrKA",
    tags: ["MERN", "Firebase", "Node.js", "MongoDB"],
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900 font-sans"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden h-56">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <a href="#" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <span className="material-icons-outlined text-base">code</span>
                  Frontend
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <span className="material-icons-outlined text-base">dns</span>
                  Backend
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <span className="material-icons-outlined text-base">open_in_new</span>
                  Live Demo
                </a>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md flex items-center justify-center gap-2 group">
                View Details
                <span className="group-hover:translate-x-1 transition-transform">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
