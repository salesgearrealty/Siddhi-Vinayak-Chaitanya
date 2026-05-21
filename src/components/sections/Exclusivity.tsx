"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const Exclusivity = () => {
  return (
    <section className="relative w-full py-32 md:py-48 bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_70%)]" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div variants={itemVariants} className="mb-4 inline-block">
          <span className="text-[#C5A059] text-6xl md:text-8xl font-serif opacity-40">05</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-7xl text-white mb-8 tracking-tighter">
          Five Residences. No More. Ever.
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light mb-20 leading-relaxed">
          In a city of crowded towers, this is a rare address reserved for a select few.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto border-y border-white/5 py-16">
          {[
            { title: "One Floor. One Family.", desc: "Total floor ownership for unrivaled seclusion." },
            { title: "No Shared Walls.", desc: "Architectural independence for acoustic purity." },
            { title: "Private Access.", desc: "An elevator that knows only you." }
          ].map((point, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <h3 className="text-white text-xl md:text-2xl font-medium mb-4 tracking-wide">{point.title}</h3>
              <p className="text-white/30 text-sm uppercase tracking-widest font-light">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-20 italic">
          <p className="text-white/40 text-lg font-serif">
            “Ownership here isn’t purchased. It’s granted.”
          </p>
          <div className="w-12 h-px bg-[#C5A059]/40 mx-auto mt-6" />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Exclusivity;