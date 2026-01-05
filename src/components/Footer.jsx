import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 text-center relative z-10 transition-colors duration-300">
      <p className="text-gray-600 dark:text-gray-400 font-medium flex items-center justify-center gap-2">
        Made with <FaHeart className="text-red-500 animate-pulse" /> by <span className="text-indigo-600 dark:text-indigo-400 font-bold">Moksina Akter</span>
      </p>
      <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
