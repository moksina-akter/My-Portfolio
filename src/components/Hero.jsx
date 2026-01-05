import React, { useState, useEffect } from "react";
import img from "../assets/github-profile.jpg";
import { FaArrowRightLong, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Developer",
  "NextJs Developer",
  "Junior Full Stack Developer"
];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-black dark:bg-gray-900 overflow-hidden">
      {/* Background Gradient Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-12 py-24">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Hi, I am <span></span>
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
              Moksina Akter
            </span>
          </motion.h2>

          <div className="h-20 mt-4 md:h-24">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[currentRoleIndex]} // Key triggers re-animation
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
              >
                {roles[currentRoleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-md text-lg"
          >
            I build modern, responsive web applications with React, Node.js, and
            MongoDB. I focus on clean design, fast performance, and seamless
            user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 text-center"
            >
              Projects
              <FaArrowRightLong />
            </a>
            <a
              href="#skills"
              className="px-6 flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 text-center"
            >
              Skills
              <FaArrowRightLong />
            </a>
            <a
              href="https://docs.google.com/document/d/1QFfDgUodlvCqdiKhsqT7aLRVRWsBazHauLB_L6Ntpzw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 flex justify-center items-center gap-2 py-3 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 font-semibold rounded-lg backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center"
            >
              Resume
              <MdOutlineFileDownload />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex gap-6 justify-center md:justify-start"
          >
            <a href="https://github.com/moksina-akter" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/moksina-akter-2ba995315/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/moksina.akter.921" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 blur-xl animate-pulse"></div>
            <img
              src={img}
              alt="Moksina Akter"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
