"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "919000000000"; 
  const message = encodeURIComponent("I’m interested in the luxury residences at Siddhi Vinayak Chaitanya. Please share details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 }} 
      /* 
          On Mobile: bottom-36 (Moved higher from bottom-28)
          On Desktop: md:bottom-12 (Slightly higher for visual balance)
      */
      className="fixed bottom-36 right-6 md:bottom-12 md:right-10 z-[999] flex items-center group pointer-events-none"
    >
      {/* Concierge Label */}
      <div className="hidden sm:block mr-4 px-4 py-2 bg-white/95 backdrop-blur-md border border-[#C5A059]/20 rounded-sm text-black text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform translate-x-2 group-hover:translate-x-0 border-l-2 border-l-[#C5A059]">
        Connect with Concierge
      </div>

      <motion.a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        animate={{ y: [0, -8, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
        className="pointer-events-auto w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,211,102,0.5)] transition-transform hover:bg-[#20ba5a]"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloat;