"use client";

import { motion, Variants } from "framer-motion";
import { FiMapPin, FiClock, FiCoffee, FiBriefcase, FiArrowRight } from "react-icons/fi";

const locations = [
  { icon: <FiClock />, title: "The Education Hub", desc: "Walking distance to VIBGYOR High and 5 mins from Delhi Public School (DPS)." },
  { icon: <FiCoffee />, title: "Lifestyle & Socials", desc: "3 Mins to The Corinthian Club and the premium Dorabjee’s Heritage Mall." },
  { icon: <FiMapPin />, title: "Central Proximity", desc: "15 Mins to MG Road/Camp and swift access to Hadapsar and Wanowrie." },
  { icon: <FiBriefcase />, title: "IT & Business", desc: "20 Mins to Magarpatta City and SP Infocity via the elevated corridor." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Location = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="w-full lg:w-5/12">
            <motion.span variants={itemVariants} className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] mb-6 block font-bold">NIBM Annexe, Pune</motion.span>
            
            <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight tracking-tight">
              A Legacy Address. <br />Connected to Everything.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Perched on the highest point of NIBM Annexe, this sanctuary offers a rare equilibrium—surrounded by protected forest greens yet minutes away from Pune’s elite social infrastructure.
            </motion.p>

            <div className="space-y-10">
              {locations.map((loc, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-[#C5A059] text-xl transition-all duration-500 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/30">
                    {loc.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium mb-1">{loc.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{loc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-16">
              <a 
                href="/Brochure.pdf" 
                download="Brochure.pdf"
                className="inline-flex items-center gap-4 px-8 py-4 border border-white/10 rounded-full text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all duration-500 group"
              >
                Download Brochure <FiArrowRight className="group-hover:translate-x-2 transition-transform text-sm" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="w-full lg:w-7/12 relative group h-[400px] lg:h-[600px] rounded-sm overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_100%)] z-10 pointer-events-none" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.657579893976!2d73.896695!3d18.476251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e695e1e4ef%3A0xc07c34b17f8589f5!2sNIBM%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
              className="w-full h-full grayscale invert-[0.9] opacity-60 contrast-125 group-hover:opacity-80 transition-all duration-700"
              loading="lazy"
              style={{ border: 0 }}
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-4 h-4 bg-[#C5A059] rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-[#C5A059] rounded-full relative shadow-[0_0_20px_rgba(197,160,89,0.8)]" />
              <div className="mt-4 px-4 py-2 bg-black/90 backdrop-blur-md border border-[#C5A059]/30 text-white text-[10px] tracking-[0.3em] uppercase font-bold">NIBM Annexe</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;