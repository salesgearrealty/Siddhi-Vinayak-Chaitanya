"use client";

import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const RevealText = ({ text, className = "" }: RevealTextProps) => {
  const words = text.split(" ");

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default RevealText;