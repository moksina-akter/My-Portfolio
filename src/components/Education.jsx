import React from "react";
import { motion } from "framer-motion";

const education = [
    {
        institution: "Gurudayal Government College",
        degree: "Bachelor of Science (Honours) – Geography & Environment",
        duration: "2023 – Present",
        desc: "Pursuing deep understanding of geographical systems and environmental science.",
    },
];

const courses = [
    {
        title: "Complete Web Development",
        provider: "Programming Hero",
        year: "July 2025 - Dec 2025",
        desc: "Comprehensive web development bootcamp covering MERN stack.",
    },
    {
        title: "Skills Development Training",
        provider: "Dokkota Unnoyon Proshikkon",
        year: "Jan 2025 - June 2025",
        desc: "Intensive skills development program focusing on technical competencies.",
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Education() {
    return (
        <section id="education" className="bg-gray-100 dark:bg-gray-800 py-10 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Education</span> & Courses
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Education Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 relative pl-8 border-l-4 border-l-indigo-600"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4">
                                        {edu.degree} &bull; {edu.duration}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {edu.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Courses Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                            Courses & Training
                        </h2>
                        <div className="space-y-8">
                            {courses.map((course, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 relative pl-8 border-l-4 border-l-purple-600"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                        {course.title}
                                    </h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-4">
                                        {course.provider} &bull; {course.year}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {course.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Education;
