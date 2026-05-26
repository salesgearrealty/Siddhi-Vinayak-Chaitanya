"use client";

import { motion, Transition } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

interface HeroProps {
  onCTA: () => void;
}

const Hero = ({ onCTA }: HeroProps) => {
  const transition: Transition = { 
    duration: 1.5, 
    ease: [0.16, 1, 0.3, 1] 
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        initial={{ scale: 1.1 }} 
        animate={{ scale: 1 }} 
        transition={transition} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_100%)]" />
        
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/m-hero.avif" />
          <img 
            src="/assets/d-hero.avif" 
            alt="SiddhiVinayak Chaitanya - NIBM Pune" 
            className="w-full h-full object-cover" 
          />
        </picture>
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Ready Possession Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.8 }}
          className="mb-8 relative flex items-center gap-3 bg-linear-to-r from-[#C5A059]/20 via-[#C5A059]/5 to-[#C5A059]/20 border border-[#C5A059] px-6 py-2.5 rounded-full shadow-[0_0_30px_rgba(197,160,89,0.15)] backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]"></span>
          </span>
          <span className="text-white text-[11px] md:text-xs font-black uppercase tracking-[0.3em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Exclusive Perk Ready Possession
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.2 }} 
          className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tight font-medium"
        >
          The Rarity of Five
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.4 }} 
          className="max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12"
        >
          A private sanctuary in the heart of NIBM Designed for those who have nothing left to prove
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <MagneticButton onClick={onCTA}>
            <button className="px-12 py-5 bg-[#C5A059] text-black font-black tracking-[0.2em] uppercase text-[11px] transition-all duration-500 hover:bg-white hover:scale-105 rounded-full shadow-[0_15px_30px_rgba(197,160,89,0.2)]">
              Request an Invitation
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;