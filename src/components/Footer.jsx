import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/1.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img src={logo} width={200} className="mb-2" alt="Company Logo" />
          <div className="mb-10 h-3 w-12 bg-yellow-400" />
        </motion.figure>
      </div>

      {/* Social Media Links Section */}
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 * index }}
            className="hover:scale-105 transition-transform duration-200"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
