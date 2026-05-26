"use client";

import { motion, Variants } from "framer-motion";
import { FiMapPin, FiClock, FiCoffee, FiBriefcase, FiArrowRight } from "react-icons/fi";

interface LocationProps {
  onCTA: () => void;
}

const locations = [
  { icon: <FiClock />, title: "The Education Hub", desc: "Walking distance to VIBGYOR High and 5 mins from Delhi Public School (DPS)." },
  { icon: <FiCoffee />, title: "Lifestyle & Socials", desc: "3 Mins to The Corinthian Club and the premium Dorabjee’s Heritage Mall." },
  { icon: <FiMapPin />, title: "Central Proximity", desc: "15 Mins to MG Road/Camp and swift access to Hadapsar and Wanowrie." },
  { icon: <FiBriefcase />, title: "IT & Business", desc: "20 Mins to Magarpatta City and SP Infocity via the elevated corridor." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Location = ({ onCTA }: LocationProps) => {
  return (
    <section className="w-full py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Content Column */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={containerVariants} 
            className="w-full lg:w-5/12"
          >
            
            <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tight font-medium">
              A Legacy Address <br />Connected to Everything
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-white/77 text-lg md:text-xl font-normal leading-relaxed mb-12">
              Perched on the highest point of NIBM Annexe, this sanctuary offers a rare equilibrium—surrounded by protected forest greens yet minutes away from Pune’s elite social infrastructure
            </motion.p>

            <div className="space-y-10">
              {locations.map((loc, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-white/20 rounded-full text-[#C5A059] text-2xl transition-all duration-500 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/50">
                    {loc.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-2 tracking-wide">{loc.title}</h4>
                    <p className="text-white/60 text-base font-normal leading-relaxed">{loc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            className="w-full lg:w-7/12 relative h-[450px] lg:h-[650px] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.657579893976!2d73.896695!3d18.476251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e695e1e4ef%3A0xc07c34b17f8589f5!2sNIBM%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-6 h-6 bg-[#C5A059] rounded-full animate-ping absolute opacity-75" />
              <div className="w-5 h-5 bg-[#C5A059] rounded-full relative shadow-[0_0_25px_rgba(197,160,89,1)] border-2 border-white" />
              
              {/* Updated Label Section */}
              <div className="mt-3 px-3 py-1.5 bg-black text-white text-[9px] tracking-[0.2em] uppercase font-bold border border-[#C5A059] shadow-xl text-center leading-tight">
                SiddhiVinayak<br/>
                Chaitanya
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;