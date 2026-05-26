"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

interface PricingProps {
  onCTA: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Pricing = ({ onCTA }: PricingProps) => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.02)_0%,transparent_70%)]" />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="container mx-auto px-6 relative z-10 text-center">
        <motion.span variants={itemVariants} className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">The Investment</motion.span>
        
        <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-5xl text-white mb-5 tracking-tight">
          An Address That Reflects Its Worth
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-xl mx-auto text-white/50 text-sm md:text-base font-light mb-10 leading-relaxed">
          For those who understand that true value is measured beyond square feet
        </motion.p>

        {/* Pricing Layout: "Starting From" placed beautifully before the number */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex flex-col items-center relative">
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 font-light mb-2">
              Starting From
            </span>
            <h3 className="text-[#C5A059] text-4xl md:text-6xl font-serif tracking-tight font-medium">
              ₹2.10 Cr
            </h3>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="absolute -bottom-3 left-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          </div>
          <p className="mt-6 text-white/30 text-[10px] uppercase tracking-[0.25em] font-light">All Inclusive • Exclusive of Statutory Charges</p>
        </motion.div>

        {/* Action Callouts */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <MagneticButton onClick={onCTA}>
            <span className="px-14 py-5 border border-[#C5A059] text-[#C5A059] font-medium tracking-widest uppercase text-xs transition-all duration-500 hover:bg-[#C5A059] hover:text-black rounded-full inline-block cursor-pointer">
              Request Pricing Details
            </span>
          </MagneticButton>
          <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">Limited to just five residences.</p>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Pricing;