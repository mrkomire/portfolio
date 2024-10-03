import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

// Container variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

// Item variants for animation (applied on each project card)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Hover effect for floating and highlighting
const hoverEffect = {
  scale: 1.05, // Slightly enlarge on hover
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={hoverEffect} // Apply hover effect here
          >
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}  // Use dynamic link here
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
