import React from "react";
import { CERTIFICATIONS } from "../constants"; // Import the certifications from constants.js
import { motion } from "framer-motion";

// Animation settings
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        className="certifications-title mb-12 mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <motion.div
        className="certifications-container mx-auto flex flex-col items-start px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-item mb-8 flex items-center"
            variants={itemVariants}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mr-4"> {/* Make the logo clickable */}
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                <img
                  src={cert.icon}
                  alt={`${cert.name} logo`}
                  className="cert-logo w-12 h-12 lg:w-16 lg:h-16"
                />
              </motion.div>
            </a>
            <div className="text-left">
              <h3 className="text-xl lg:text-2xl font-bold">{cert.name}</h3>
              <p className="text-md text-gray-400">
                {cert.issuingOrganization}
              </p>
              <p className="text-sm italic text-gray-500">{cert.issueDate}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
