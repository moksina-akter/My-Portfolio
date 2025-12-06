import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const blogs = [
  {
    title:
      "Enhancing Your Application with a Robust Backend and Secure Database",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJrWfRP-UFDEd6lO6W5BcV2O1fQN91Plmw1HsxNPeqmKBDLUsX8CCZ8JjvQjIzLk2D72_YU_lxF8RnNDwreOnO2OsZg4urRKHA7pc2oFiaPRESaeQw0DTUaCQ1oHGaVrkA5S7DmZm2ZeB7i6II8MOTUFwChoUgtHVZpWdW0EAAfSemtWS_Q4PbikHSPaMKomxx9py91hZ9JSI2DlfTerkYIB-xCHTW3Puxk3DWL3unNVqMJThT2IBCZ85KsYATgevDdOJi3RzhEXE",
  },
  {
    title: "Exploring the MERN Stack",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlWF3RHYVlmvlGeWz0uf-Tgm3n3-_o-pCzlUUrbKx7CwOXWzcDluSyUWxrrjcmdI7amSfg7VbSx5K_G1pZd2gma_9a_a_lxqHuYMwGK-rF8SphopNjQ2W1aGcLvgiBcR1Sn8UjHu6qD4BSWQyySJdBvPB7LvpOV0Wkjj4yGkNSfZKusjINr3Kf8a0Sn8nUBcUsYKo5Fx3WkxO8qEVykJktuK8_4C50CWQ2QYpdVwGwj2oywlrAFAsuoZ8IyCjvHI0F0pOfrclNY9s",
  },
  {
    title: "10 Essential Browser Extensions For Web Developers",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4GJE64aD5kSljtDjaMxXGGwiBep_mqhFW8iHBfJg4MVAd4ze5pVnf_M9YBpPgjxhEYjaycU7hflqcWbvoJWhKve4tcMnxNw22yqSjOK1qYMx0txnG2DmxlS0o4JcG_QcUngJRMJXVsnWJJj76L7gca_DnS4FHuAg5JVvSxCN79KgPu2RWl0Fp67q4rEZVsDcEa_V0hiLlZvG2U-SUlCc8slr7Qlgl1z3Wba5g0bN_zm_Oq7YCV98aEVzWV-DwA-q72ZM66Cug3A",
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

function Blogs() {
  return (
    <section id="blogs" className="bg-white dark:bg-gray-900 font-sans py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16"
        >
          My Recent Blogs
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-shadow hover:shadow-2xl flex flex-col h-full"
            >
              <div className="overflow-hidden h-52">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-snug flex-grow">
                  {blog.title}
                </h2>

                <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md flex items-center justify-center gap-2 group">
                  Read Blog
                  <span className="group-hover:translate-x-1 transition-transform">
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg text-lg font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all shadow-sm">
            View More Blogs
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Blogs;
