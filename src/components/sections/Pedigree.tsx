"use client";

import { motion, Variants } from "framer-motion";
import { FiShield, FiPenTool, FiCompass, FiCheckCircle } from "react-icons/fi";

const pedigreeItems = [
  { icon: <FiPenTool />, title: "Lead Architect", desc: "Visionary design prioritizing light, air, and structural elegance." },
  { icon: <FiCompass />, title: "Structural Consultant", desc: "Seismic-resistant engineering meeting global safety benchmarks." },
  { icon: <FiCheckCircle />, title: "MahaRERA Registered", desc: "Complete compliance for absolute peace of mind. ID: A52100029799." },
  { icon: <FiShield />, title: "Zero-Debt Project", desc: "A secure asset backed by self-funded institutional stability." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Pedigree = () => {
  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight">A Legacy of Precision.</motion.h2>
          <motion.p variants={itemVariants} className="max-w-xl mx-auto text-white/50 font-light leading-relaxed">Crafted by experts. Engineered for permanence. Designed for those who value what lasts.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pedigreeItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6 flex items-center justify-center text-[#C5A059] text-2xl border border-white/10 rounded-full group-hover:border-[#C5A059]/50 transition-colors duration-500">{item.icon}</div>
              <h3 className="text-white text-lg font-medium mb-3 tracking-wide">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C5A059]/30 to-transparent" />
    </section>
  );
};

export default Pedigree;