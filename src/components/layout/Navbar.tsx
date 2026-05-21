"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { FiHome, FiMapPin, FiTag, FiPhone } from "react-icons/fi";

interface NavbarProps {
  onCTA: () => void;
}

const Navbar = ({ onCTA }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Mandatory: Must match the number in your Google Ads Call Extension exactly
  const phoneNumber = "+91 90000 00000"; 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview", icon: <FiHome /> },
    { name: "Location", href: "#location", icon: <FiMapPin /> },
    { name: "Pricing", href: "#pricing", icon: <FiTag /> },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 ${
          isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Aligned with SalesGear Realty branding for Ads Safety */}
          <div className="flex items-center gap-4">
            <div className="text-white font-serif text-xl md:text-2xl tracking-tighter cursor-pointer flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#C5A059] mb-1 font-bold">
                Siddhi Vinayak
              </span>
              CHAITANYA
              <span className="text-[7px] uppercase tracking-[0.2em] text-white/40 mt-1 font-sans font-bold">
                Authorised Developer
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {/* Click-to-Call: Critical Trust Signal for Google Bot */}
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
              className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-all">
                <FiPhone size={13} className="text-[#C5A059]" />
              </div>
              <span className="text-[11px] tracking-[0.1em] font-bold">{phoneNumber}</span>
            </a>

            <div className="h-4 w-px bg-white/10" />

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white/60 hover:text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            <MagneticButton onClick={onCTA}>
              <button className="px-8 py-3 bg-[#C5A059] text-black text-[10px] uppercase tracking-[0.2em] font-extrabold rounded-full transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                Enquire Now
              </button>
            </MagneticButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Nav - Optimized for Lead Retention */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="bg-[#111]/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-around py-3 px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex flex-col items-center gap-1.5 text-white/40 hover:text-[#C5A059] transition-colors"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold">{link.name}</span>
            </a>
          ))}
          
          <button 
            onClick={onCTA}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-12 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-90 transition-all">
              <FiPhone className="text-xl" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">Connect</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;