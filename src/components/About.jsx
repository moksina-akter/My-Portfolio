import React from "react";
import img from "../assets/github-profile.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function About() {
  return (
    <motion.section
      id="about"
      className="bg-white dark:bg-gray-900 py-10 font-sans flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-10">
        <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
          Introduction
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Me
          </span>
        </h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        variants={imageVariants}
        className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-12"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 blur-xl opacity-30 animate-pulse"></div>
        <img
          src={img}
          alt="Moksina Akter"
          className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-900 shadow-lg"
        />
      </motion.div>

      {/* Text Content */}
      <div className="text-center max-w-2xl px-6">
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Hello, I'm{" "}
          <span className="text-purple-500 dark:text-pink-400">
            Moksina Akter
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-medium"
        >
          Passionate MERN Stack Developer & Full Stack Web Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
        >
          My journey into programming began with a curiosity about how websites
          work, which quickly turned into a passion for creating them. I enjoy
          building interactive, user-friendly applications that solve real-world
          problems.
          <br />
          <br />I really enjoy working with the{" "}
          <strong className="text-purple-600 dark:text-purple-400">
            MERN Stack (MongoDB, Express, React, NextJs, Node.js)
          </strong>{" "}
          because it allows me to handle both the front-end and back-end
          seamlessly.
          <br />
          <br />
          When I'm not coding, you can find me exploring nature, reading books,
          or experimenting with new recipes. I believe in continuous learning
          and always strive to improve my skills, one project at a time.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;
