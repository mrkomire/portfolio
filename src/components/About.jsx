import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto text-center" id="about">
      <motion.h2
        className="mt-10 text-2xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.h3
        className="p-2 text-[3rem] uppercase lg:text-[4rem] mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.p
        className="pl-2 text-sm leading-relaxed mx-auto max-w-2xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text2}
      </motion.p>
    </div>
  );
};

export default About;
