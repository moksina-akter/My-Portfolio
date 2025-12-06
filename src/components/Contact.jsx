import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const contacts = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "msdiya01865@gmail.com",
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: "Phone",
      value: "+880 1978 718692",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "Moksina Akter",
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "Moksina Akter",
    },
  ];

  return (
    <section id="contact" className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-center py-10">
      <div className="container mx-auto w-11/12 md:w-10/12 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Contact Me
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-16 text-gray-600 dark:text-gray-300"
        >
          Let's get in touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 flex-1 w-full"
          >
            {contacts.map((contact, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100 dark:border-gray-700"
              >
                <div className="p-4 rounded-full bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 border border-gray-200 dark:border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 border border-gray-200 dark:border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 border border-gray-200 dark:border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your Message"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r text-white from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
