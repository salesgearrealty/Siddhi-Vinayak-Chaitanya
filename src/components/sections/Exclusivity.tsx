"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.05 
    } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const Exclusivity = () => {
  const assets = [
    { title: "One Floor. One Family.", desc: "Total floor ownership for unrivaled seclusion." },
    { title: "No Shared Walls.", desc: "Architectural independence for acoustic purity." },
    { title: "Private Access.", desc: "An elevator that knows only you." },
    { title: "2 Car Parking.", desc: "Two explicitly reserved bays for your fleet.", highlight: true },
    { title: "Ready Possession.", desc: "Skip the timelines. Your masterpiece is complete.", highlight: true }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={containerVariants} 
        className="container mx-auto px-6 relative z-10 text-center"
      >
        {/* Compact '05' Badge layout */}
        <motion.div variants={itemVariants} className="mb-2 inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFE3A8] via-[#C5A059] to-[#8A6A2F] text-6xl md:text-8xl mountains-out-of-molehills font-serif font-bold tracking-tight drop-shadow-[0_0_30px_rgba(197,160,89,0.2)]">
            05
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-6xl text-white mb-6 tracking-tighter">
          Five Residences. No More. Ever.
        </motion.h2>

        {/* Reduced margin below the deck text */}
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-white text-base md:text-xl font-light mb-14 leading-relaxed selection:bg-[#C5A059]/30">
          In a city of <span className="text-white/40 line-through decoration-white/20">crowded towers</span>, this is a <span className="text-[#C5A059] font-medium selection:text-black">rare address</span> reserved for a select few.
        </motion.p>

        {/* Grid Container with streamlined py-10 padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 max-w-7xl mx-auto border-y border-white/10 py-10 bg-gradient-to-b from-white/[0.01] to-transparent">
          {assets.map((point, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="flex flex-col items-center"
            >
              <h3 className={`text-base md:text-lg font-semibold mb-2 tracking-wide ${
                point.highlight 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#EAD09D]" 
                  : "text-white"
              }`}>
                {point.title}
              </h3>
              <p className={`text-xs uppercase tracking-widest font-medium max-w-[200px] ${
                point.highlight ? "text-[#C5A059]/70" : "text-white/40"
              }`}>
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brought the Editorial Signature box much closer (mt-14) */}
        <motion.div 
          variants={itemVariants} 
          className="mt-14 max-w-3xl mx-auto relative px-8 py-10 rounded-2xl border border-white/5 bg-gradient-to-b from-[#111] to-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
          
          <div className="mb-4 flex flex-wrap justify-center gap-3 mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-black">
              <span className="w-1 h-1 rounded-full bg-[#C5A059] animate-pulse" />
              Ready Possession
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.25em] text-white/60 font-black">
              2 Reserved Car Parks
            </div>
          </div>

          <span className="absolute -top-4 left-6 text-9xl font-serif text-white/[0.02] pointer-events-none select-none">“</span>
          
          <p className="text-white font-serif text-xl md:text-3xl tracking-wide leading-snug relative z-10">
            “Ownership here isn’t purchased. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#EAD09D] font-bold">It’s granted.</span>”
          </p>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-6" />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Exclusivity;