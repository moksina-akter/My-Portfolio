import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "https://i.ibb.co.com/BVKQZyLC/images-1.png",
    color: "#8a63d2",
    title: "Full-Stack Development",
    description:
      "End-to-end development for modern web apps from designing frontend interfaces to building scalable backend systems using React, Next.js, Node.js, MongoDB and more.",
  },
  {
    icon: "https://i.ibb.co.com/CK0D1M8R/images-2.png",
    color: "#f472b6",
    title: "Frontend Development",
    description:
      "Designing responsive, interactive UIs with React, Next.js and Tailwind CSS. Emphasis on accessibility, performance, and UX.",
  },
  {
    icon: "https://i.ibb.co.com/tTLXwm88/images.png",
    color: "#10b981",
    title: "Backend Development",
    description:
      "Creating fast, secure server-side logic using Node.js, Express.js and MongoDB. Scalable architecture and clean API design.",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center flex flex-col items-center transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
  >
    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-full">
      <img className="w-16 h-16 object-contain" src={icon} alt="" />
    </div>

    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
      {title}
    </h2>

    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 font-sans py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16"
        >
          My Services
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
