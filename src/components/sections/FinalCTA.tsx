"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

interface FinalCTAProps {
  onCTA: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const FinalCTA = ({ onCTA }: FinalCTAProps) => {
  return (
    <section className="relative w-full py-32 md:py-48 bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C5A059]/5 to-transparent pointer-events-none" />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="container mx-auto px-6 relative z-10 text-center">
        <motion.span variants={itemVariants} className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] mb-6 block font-bold">The Final Threshold</motion.span>
        
        <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-6xl text-white mb-8 tracking-tight">
          This Is Not Open to Everyone.
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-xl mx-auto text-white/50 text-lg font-light mb-16 leading-relaxed">
          Request your private invitation to explore one of the five residences. Our team will contact you to curate your experience.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center">
          <MagneticButton onClick={onCTA}>
            <button className="px-20 py-6 bg-[#C5A059] text-black font-semibold tracking-[0.2em] uppercase text-[11px] rounded-full transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(197,160,89,0.2)]">
              Request Invitation
            </button>
          </MagneticButton>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-12 text-white/20 text-[10px] uppercase tracking-widest font-light text-center">
          Private viewing by appointment only.
        </motion.p>
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C5A059]/40 to-transparent" />
    </section>
  );
};

export default FinalCTA;