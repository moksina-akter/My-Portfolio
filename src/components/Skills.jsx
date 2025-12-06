import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  "Database & Models": [
    {
      name: "MongoDB",
      icon: "https://i.ibb.co.com/1fxSyvKG/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.jpg",
      level: "Expert"
    },
  ],

  "Design & Graphics": [
    {
      name: "Photoshop",
      icon: "https://i.ibb.co.com/xtvVP2fn/Adobe-Photoshop-CC-icon-svg.png",
      level: "Intermediate"
    },
    {
      name: "Illustrator",
      icon: "https://i.ibb.co.com/v4xHqHhc/Adobe-Illustrator-CC-icon-svg.png",
      level: "Intermediate"
    },
    {
      name: "Figma",
      icon: "https://i.ibb.co.com/DDzDj3Jb/images-3.png",
      level: "Expert"
    },
  ],

  "Deployment": [
    {
      name: "Firebase",
      icon: "https://i.ibb.co.com/dwv0vbr3/firebase.png",
      level: "Expert"
    },
    {
      name: "Netlify",
      icon: "https://i.ibb.co.com/fzcN9SSR/images-4.png",
      level: "Expert"
    },
    {
      name: "Vercel",
      icon: "https://i.ibb.co.com/G39Y0f5d/images-5.png",
      level: "Expert"
    },
  ],
  "CSS & Frameworks": [
    {
      name: "Daisy UI",
      icon: "https://avatars.githubusercontent.com/u/85596512?s=200&v=4", // Updated link to a more stable one if possible, or kept original if valid. DaisyUI logo.
      level: "Expert"
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png", // Using a cleaner icon URL
      level: "Expert"
    },
  ],

  "JavaScript & Libraries": [
    {
      name: "Express.js",
      icon: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png", // Cleaner icon
      level: "Expert"
    },
    {
      name: "Next.js",
      icon: "https://i.ibb.co.com/yBQCdfD7/images-3.jpg", // Cleaner icon
      level: "Intermediate"
    },
    {
      name: "React.js",
      icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png", // Cleaner icon
      level: "Expert"
    },
  ],


  "Core Languages": [
    {
      name: "HTML5",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
      level: "Expert"
    },
    {
      name: "CSS3",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png",
      level: "Expert"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
      level: "Expert"
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
      level: "Expert"
    },
    {
      name: "GitHub",
      icon: "https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png",
      level: "Expert"
    },
    {
      name: "VS Code",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
      level: "Expert"
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 150 } },
};

function Skills() {
  return (
    <section id="skills" className="py-10 relative bg-black relative dark:bg-gray-900 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20 -z-10 animate-pulse delay-1000"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Expertise</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Skills</span>
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-200 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                {category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="group relative bg-gray-900 dark:bg-gray-800 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-800 dark:border-gray-700 flex items-center gap-3 cursor-default"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                    <div className="relative z-10 w-10 h-10 p-2 bg-gray-800 dark:bg-gray-700 rounded-lg group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors shadow-sm flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col">
                      <h4 className="text-sm font-bold text-gray-200 dark:text-gray-200 group-hover:text-indigo-400 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-medium text-gray-400 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
