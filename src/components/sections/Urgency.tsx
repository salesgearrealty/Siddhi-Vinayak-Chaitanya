"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

interface UrgencyProps {
  onCTA: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Urgency = ({ onCTA }: UrgencyProps) => {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,160,89,0.05)_0%,transparent_70%)]" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div variants={itemVariants} className="mb-12 flex justify-center items-center gap-4">
          <div className="h-px w-8 bg-[#C5A059]/40" />
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">Limited Availability</span>
          <div className="h-px w-8 bg-[#C5A059]/40" />
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-6xl text-white mb-8 tracking-tight">
          Only a Few Will Ever Call This Home.
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-white/50 text-lg font-light mb-12 leading-relaxed">
          With just five residences, availability is disappearing faster than expected. This is a singular opportunity for the discerning few.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20">
          <div className="text-center">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="block text-[#C5A059] text-5xl font-serif mb-2">03</motion.span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Residences Reserved</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <span className="block text-white text-5xl font-serif mb-2">02</span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Final Invitations Left</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
          <MagneticButton onClick={onCTA}>
            <span className="px-14 py-5 border border-[#C5A059] text-[#C5A059] font-medium tracking-widest uppercase text-xs transition-all duration-500 hover:bg-[#C5A059] hover:text-black rounded-full inline-block">
              Secure Your Invitation
            </span>
          </MagneticButton>
          <p className="text-white/40 text-xs italic font-serif">Private viewings are now strictly limited.</p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
    </section>
  );
};

export default Urgency;