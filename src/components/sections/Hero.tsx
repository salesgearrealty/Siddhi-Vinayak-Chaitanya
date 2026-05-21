"use client";

import { motion, Transition } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { FiDownload } from "react-icons/fi";

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
            alt="Siddhi Vinayak Chaitanya - NIBM Pune" 
            className="w-full h-full object-cover" 
          />
        </picture>
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Compliance Tag: Establishes Location & Identity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
            Boutique Residences • NIBM, Pune
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.2 }} 
          className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tight"
        >
          The Rarity of Five.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.4 }} 
          className="max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12"
        >
          A private sanctuary in the heart of NIBM. Designed for those who have nothing left to prove.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ ...transition, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <MagneticButton onClick={onCTA}>
            <span className="px-12 py-5 bg-[#C5A059] text-black font-bold tracking-[0.2em] uppercase text-[10px] transition-all hover:bg-white rounded-full inline-block">
              Request an Invitation
            </span>
          </MagneticButton>

          {/* Mandatory for Ads: High-intent conversion trigger */}
          <a 
            href="/Brochure.pdf" 
            target="_blank"
            className="flex items-center gap-2 text-white/40 hover:text-[#C5A059] transition-colors group"
          >
            <FiDownload size={14} className="group-hover:translate-y-0.5 transition-transform" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-1">
              Official Brochure
            </span>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }} 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;