import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  "DATABASE & MODEL": [
    {
      name: "MongoDB ( Expert )",
      icon: "https://i.ibb.co.com/1fxSyvKG/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.jpg",
    },
  ],

  "DESIGN & GRAPHICS": [
    {
      name: "Photoshop ( Intermediate )",
      icon: "https://i.ibb.co.com/xtvVP2fn/Adobe-Photoshop-CC-icon-svg.png",
    },
    {
      name: "Illustrator ( Intermediate )",
      icon: "https://i.ibb.co.com/v4xHqHhc/Adobe-Illustrator-CC-icon-svg.png",
    },
    {
      name: "Figma ( Expert )",
      icon: "https://i.ibb.co.com/DDzDj3Jb/images-3.png",
    },
  ],

  "DEPLOYMENT PLATFORM": [
    {
      name: "Firebase ( Expert )",
      icon: "https://i.ibb.co.com/dwv0vbr3/firebase.png",
    },
    {
      name: "Netlify ( Expert )",
      icon: "https://i.ibb.co.com/fzcN9SSR/images-4.png",
    },
    {
      name: "Vercel ( Expert )",
      icon: "https://i.ibb.co.com/G39Y0f5d/images-5.png",
    },
  ],
  "CSS FRAMEWORKS & LIBRARIES": [
    {
      name: "Daisy UI ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5f3F2aVQ-kxyX5m2WCdf6wnzpcOoIkPH-YpdHJZ_boe6JBmmNnbir9kRnIeZaXnTt4_R3Wkr8_jduAm2JARxIHxnhafetPFZ-rJAQ00YKO60p8_7edNS4aJiLjVP8ANxdXhdUPD_C5cuwntbX-x9gemJpElKh2EraTsr7Z4yC9dLujDRxunNjEda4RL5DpKpsKMN8f0vdfrrJsiDqkHkXFHXgGW5QZznTn6-XAB0QUJkei44xjO4pAiFYYUVtLaLJMpgUcjIyLjs",
    },
    {
      name: "Tailwind CSS ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6EMxcyvqHRlsKOSg8b-T_2yHjhwV_AkFV77Y2WWfFABk2HlLBR9ID3Pi4pb_YBh7Wpb5xZasP39_AMu1XveDvU-VUkIjSIpk6UMIjozmSH_tlnYCzyDQKGdVcpiz45UUuso4gKiLSVkiTgxbYOLCoZ4fQN4PPgagd17QSGHuocPDx5XkW9Pf5cGcs9Qvu3zSAzbgf7qZZhKTsdU8DTUrXpfFZLjLLSj1qI4ZLeRNkCEOLBWcHIzHZwHEXnmF61RfUejNXHeKvMS4",
    },
  ],

  "JAVASCRIPT FRAMEWORKS & LIBRARIES": [
    {
      name: "Express.js ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVxjLx4ARuTNYzHLX0OnHEgu-TcRJHQHrClFbdmmFPluHmhyQUHzJW4_qJywXfaa-o8n3-wULNBasBPc473ysHsLb6jF6G_wt6-NiZ6BOoaZoUSK7vg1AoaQbTyUoE0wxoDULEYtZVzSufiU9XJrwBiEZFgetH_trZ4T-nSq7JRI7vcbYX0UaksWhM0mB0oG28ed261u_s8G5eTREEd1MSiMnqxfM_su_nPFDlGIBQSAZ5izm-6jQ8sZScvf8fRblWaS58HUmPXRM",
    },
    {
      name: "Next.js ( Intermediate )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB74fJIyXesuql1NrTYxYD-hA-8vSWvjt90ze-TkTbAKawdo2MNZ4JLdJS4I44veTxgqfMNTygHsi-AmLiL0h55snSl57S6R5G7YelfG9z4nqL1K8UTdWG8JHX-yLbU8NYOmWN-BA-WyhfgNxYDrf0jb5HWvd5Q6bKzREHMuVDNkBwTmtr-1e-KX6a6a-uuCsXbwneC7yqfvpj8dCKaHMUJ_b8vM1ImMR096-dnE6JzZdUd94_M6VUfLcE_wcAqgpFzHWoFTYfnqAY",
    },
    {
      name: "React.js ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdWIAni7f2ZA-pn27r4ZXbGUmlJWL7YnaN2pP7nqBmqY0cIvuBha0mP9648pFz5PxitIDSutIxlhKGU6xdJtx9Y3Zkzt7F5Rh497k4FzwhUN9ny4w_fOcgpnlyCatrb-vD6B8Yz9IB_ecdrOSWuPIyywrRDvdaPz771Cz187V0yRDd7UopZ_utDub6HHWtFpCdzclz2J9y-Z-SQeVsX_RHD2uZk6lz7vMD1-FkOa61qQLDfGYvnKgkMCqtu6r0ExEYFX22IK7gP8Q",
    },
  ],

  LANGUAGES: [
    {
      name: "HTML ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiwW_N2lGaViNDgBwhUcWuO0fgwDXHP-IpRScn_JY9CWCSuIouRNPsk2VdUHuwhgCMrzbd-xZLQ-d1cY3aZ1gW1IfiIczKXmy68-khcZERKzNo6D_h9hHYx_ZhFmXeqcZV83VVEq5KroTU1tklWfsUZiz1TDJTfqpP6CcFiZ0unES-2nUgB8zkzB3PeIshD1JN6W5RBekEi2R9IA_f2qyFetLC4Qt2U2nEHx-kXOyrR7I99GchxuH77sAfOOnZ0q3YcADrX-aEXfA",
    },
    {
      name: "CSS ( Expert )",
      icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7TtxEpGApCFy6bqESEKuQceYZYnFrYCgolO0H95iPdcTgyH8KjFaJSxQwjnJB-_58hrqUpmfDOFcns1venN1B0TLxRyy0LnJbtI0sFTQmjA7HzfbRyab8bXGs99CFb9fJsCmPDMUwnVVQNmP6i5XH4uB3O_eX3FL8g6-B1Pe2VujtlGAiUH0BVGAQeOtoVn443TGFN8eRiBXT13jBX98Ij6KmVzEeO3g01Au3rykmIYxP7uaMqInAzI7ONzmrJDthJ2xFKlxzFQE",
    },
    {
      name: "JavaScript ( Expert )",
      icon: "https://i.ibb.co.com/j9Y2fJzM/png-clipart-javascript-logo-computer-icons-vue-js-angle-text.png",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16"
        >
          My Skills
        </motion.h1>

        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h2 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 tracking-wider uppercase border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">
                {category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-semibold text-lg">
                      {skill.name}
                    </span>
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
