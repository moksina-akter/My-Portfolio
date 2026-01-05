import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black/90 text-white py-8 border-t border-gray-800"
    >
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            Moksina Akter
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Junior MERN Stack Developer passionate about creating beautiful,
            functional web applications.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Contact Us
          </h2>
          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-3 hover:text-white transition-colors">
              <MdOutlineEmail className="text-purple-500 text-xl" />
              msdiya01865@gmail.com
            </p>
            <p className="flex items-center gap-3 hover:text-white transition-colors">
              <FaPhoneAlt className="text-purple-500 text-xl" />
              +880 1978 718692
            </p>
            <p className="flex items-center gap-3 hover:text-white transition-colors">
              <FaMapMarkerAlt className="text-purple-500 text-xl" />
              Kishoreganj, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Follow Us
          </h2>
          <div className="flex gap-4 mt-2">
            {[
              { icon: FaGithub, link: "#" },
              { icon: FaFacebookF, link: "#" },
              { icon: MdOutlineEmail, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
