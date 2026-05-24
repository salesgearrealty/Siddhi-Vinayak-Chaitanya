"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Overview", href: "/#overview", icon: <FiHome /> },
    { name: "Location", href: "/#location", icon: <FiMapPin /> },
    { name: "Pricing", href: "/#pricing", icon: <FiTag /> },
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
          {/* Logo Brand Grouping */}
          <Link href="/#hero" className="flex items-center gap-4 group">
            {/* Added bg-neutral-100 (off-white) background for transparency layouts */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-md border border-white/10 bg-neutral-100 group-hover:border-[#C5A059]/40 transition-colors duration-300">
              <Image 
                src="/Logo.avif" 
                alt="Siddhi Vinayak Chaitanya Logo" 
                fill
                priority
                className="object-contain p-1" /* object-contain ensures the full logo marks clearly over the background */
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
            
            <div className="text-white font-serif text-2xl md:text-3xl tracking-tight cursor-pointer flex flex-col leading-none selection:bg-[#C5A059]/30">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] mb-1 font-extrabold">
                Siddhi Vinayak
              </span>
              <span className="font-bold tracking-wide">CHAITANYA</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-white/50 mt-1 font-sans font-black">
                Authorised Developer
              </span>
            </div>
          </Link>

          {/* Desktop Right Actions Area */}
          <div className="hidden md:flex items-center gap-10">
            {/* Navigation Section */}
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-white/80 hover:text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Action Buttons: Enquire CTA followed by Call Extension */}
            <div className="flex items-center gap-8">
              <MagneticButton onClick={onCTA}>
                <button className="px-9 py-3.5 bg-[#C5A059] text-black text-[11px] uppercase tracking-[0.2em] font-black rounded-full transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_25px_rgba(197,160,89,0.35)]">
                  Enquire Now
                </button>
              </MagneticButton>

              <div className="h-5 w-px bg-white/20" />

              {/* Click-to-Call placed AFTER the Enquire Button */}
              <a 
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-all">
                  <FiPhone size={14} className="text-[#C5A059]" />
                </div>
                <span className="text-[13px] tracking-wider font-black whitespace-nowrap">{phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Nav - Optimized for Lead Retention */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 pt-2 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="bg-[#111]/95 backdrop-blur-2xl border border-white/15 rounded-2xl flex items-center justify-around py-3.5 px-3 shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex flex-col items-center gap-1.5 text-white/60 hover:text-[#C5A059] active:text-[#C5A059] transition-colors"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-[9px] uppercase tracking-[0.15em] font-black">{link.name}</span>
            </Link>
          ))}
          
          <button 
            onClick={onCTA}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-14 h-11 bg-[#C5A059] rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-95 transition-all">
              <FiPhone className="text-2xl" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.15em] font-black text-[#C5A059]">Connect</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;