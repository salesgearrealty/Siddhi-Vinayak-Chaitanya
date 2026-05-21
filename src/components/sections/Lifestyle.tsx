"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
};

const Lifestyle = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col lg:flex-row items-center overflow-hidden">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageVariants} className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent hidden lg:block" />
        <img src="/api/placeholder/1200/1600" alt="Luxury Balcony View" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-20 lg:py-0 flex flex-col justify-center">
        <motion.span variants={textVariants} className="text-[#C5A059] uppercase tracking-[0.4em] text-xs mb-6 block font-medium">The Sanctuary</motion.span>
        
        <motion.h2 variants={textVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight">
          Where the Forest Meets the Floor-to-Ceiling Glass.
        </motion.h2>
        
        <motion.p variants={textVariants} className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
          NIBM’s lush greenery isn't just a view; it’s your everyday backdrop. Wake up to silence, breathe cleaner air, and experience a pace of life that the city forgot.
        </motion.p>

        <div className="space-y-8 border-l border-white/10 pl-8">
          {[
            { title: "Morning Hill Views", detail: "Panoramic vistas of the NIBM ridgeline bathed in gold." },
            { title: "Absolute Silence & Privacy", detail: "A sanctuary designed for total acoustic isolation." },
            { title: "Clean Air & Open Space", detail: "Higher elevation ensures a microclimate of pure oxygen." }
          ].map((point, i) => (
            <motion.div key={i} variants={textVariants} className="group">
              <h4 className="text-white text-lg font-medium mb-2 group-hover:text-[#C5A059] transition-colors duration-300">{point.title}</h4>
              <p className="text-white/40 text-sm font-light">{point.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Lifestyle;