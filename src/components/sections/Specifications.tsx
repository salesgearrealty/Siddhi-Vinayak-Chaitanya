"use client";

import { motion, Variants } from "framer-motion";
import { FiClock, FiMapPin, FiLayers, FiCheckCircle } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5"; // Premium luxury asset icon

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Specifications = () => {
  const connectivity = [
    { destination: "Market Yard", time: "10 Mins", type: "Commercial Hub" },
    { destination: "Pune Camp", time: "12 Mins", type: "Business & Lifestyle" },
    { destination: "Swargate", time: "15 Mins", type: "Transit Terminal" },
    { destination: "Katraj Zoo", time: "15 Mins", type: "Nature & Leisure" },
    { destination: "Hadapsar Gadital", time: "18 Mins", type: "Industrial Corridor" },
    { destination: "Kothrud", time: "25 Mins", type: "Cultural Center" }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Radial Ambiance */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Column: Configuration & Core Blueprint Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-3 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-black">
                Spatial Blueprint
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-5 leading-tight"
            >
              The Luxury of <br />
              Pure Proportion.
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-white/60 font-light text-sm md:text-base mb-8 leading-relaxed"
            >
              An uncompromising footprint built for legacy. Every square inch is balanced intentionally to separate hosting spaces from absolute internal privacy.
            </motion.p>

            {/* Core Spec Metric Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                variants={itemVariants}
                className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 backdrop-blur-sm"
              >
                <FiLayers className="text-[#C5A059] mb-3" size={18} />
                <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Configuration</div>
                <div className="text-white text-xl font-serif font-medium">3 BHK Elite</div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 backdrop-blur-sm"
              >
                <div className="text-[#C5A059] font-mono text-xs font-bold mb-[14px]">SQFT</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Carpet Area</div>
                <div className="text-white text-xl font-serif font-medium">1,250 Sq Ft</div>
              </motion.div>

              {/* Extraordinary Indulgence Asset Block */}
              <motion.div 
                variants={itemVariants}
                className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <IoDiamondOutline className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1.5">Extraordinary Indulgence</div>
                    <ul className="text-white text-sm font-serif font-medium space-y-1 list-none">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C5A059] rounded-full" /> 24/7 Power Backup System
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C5A059] rounded-full" /> Top-Terrace Amenities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C5A059] rounded-full" /> Ample Parking Space
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Ready Possession Highlight Feature Block */}
              <motion.div 
                variants={itemVariants}
                className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-[#C5A059]/10 via-[#C5A059]/5 to-transparent border border-[#C5A059]/30 relative overflow-hidden group shadow-[0_10px_30px_rgba(197,160,89,0.05)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/[0.02] rounded-full blur-xl group-hover:bg-[#C5A059]/[0.05] transition-all duration-700" />
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="text-[#C5A059] text-[9px] uppercase tracking-[0.25em] font-black mb-1 flex items-center gap-2">
                      Status Verified <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
                    </div>
                    <h4 className="text-white text-base font-semibold tracking-wide mb-0.5">Ready Possession Available</h4>
                    <p className="text-white/50 text-xs leading-relaxed max-w-sm">
                      Skip execution delay risks. The structural geometry is complete and open for immediate walkthroughs and keys deployment.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: High-Value Core Infrastructure Connectivity Network */}
          <div className="lg:col-span-7 w-full lg:mt-2">
            <motion.div variants={itemVariants} className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#C5A059]" size={16} />
                <h3 className="text-white text-lg font-medium tracking-wide">Prime Connectivity</h3>
              </div>
              <span className="text-white/30 text-[9px] uppercase tracking-widest font-mono">Radial Drive-Times</span>
            </motion.div>

            {/* Seamless Grid-List Timeline Matrix for Destinations */}
            <div className="flex flex-col gap-2.5">
              {connectivity.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.02)" }}
                  className="flex items-center justify-between p-4 rounded-xl border border-white/[0.03] bg-gradient-to-r from-white/[0.01] to-transparent transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/40 group-hover:border-[#C5A059]/30 group-hover:text-[#C5A059] transition-colors duration-300 font-mono text-xs">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm md:text-base group-hover:text-[#C5A059] transition-colors duration-300">
                        {item.destination}
                      </h4>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider font-light mt-0.5">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-[#C5A059]/20 transition-all duration-300">
                    <FiClock className="text-[#C5A059]/70 group-hover:text-[#C5A059] transition-colors" size={12} />
                    <span className="text-white text-xs font-semibold tracking-wide font-mono">
                      {item.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Micro Map-Marker Disclaimer Note */}
            <motion.p variants={itemVariants} className="text-white/20 text-[10px] font-light mt-4 text-right italic">
              *Drive metrics mapped via central arterials during standard conditions.
            </motion.p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Specifications;