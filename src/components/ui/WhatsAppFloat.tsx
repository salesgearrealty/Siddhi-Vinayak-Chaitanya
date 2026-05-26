"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactFloats = () => {
  const phoneNumber = "919000000000"; 
  const message = encodeURIComponent("I’m interested in the luxury residences at SiddhiVinayak Chaitanya. Please share details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* =========================================================================
          LEFT SIDE: PHONE CALL FLOAT
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 50 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 }} 
        className="fixed bottom-36 left-6 md:bottom-12 md:left-10 z-[999] flex items-center group pointer-events-none"
      >
        <motion.a 
          href={callUrl} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          animate={{ y: [0, -8, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} // Staggered float cycle from WhatsApp
          className="pointer-events-auto w-14 h-14 bg-[#C5A059] text-black rounded-full flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(197,160,89,0.4)] transition-transform hover:bg-white hover:text-black"
        >
          <FaPhoneAlt size={22} />
        </motion.a>

        {/* Call Concierge Label */}
        <div className="hidden sm:block ml-4 px-4 py-2 bg-white/95 backdrop-blur-md border border-[#C5A059]/20 rounded-sm text-black text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform -translate-x-2 group-hover:translate-x-0 border-r-2 border-r-[#C5A059]">
          Call Concierge
        </div>
      </motion.div>

      {/* =========================================================================
          RIGHT SIDE: WHATSAPP FLOAT
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 50 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 }} 
        className="fixed bottom-36 right-6 md:bottom-12 md:right-10 z-[999] flex items-center group pointer-events-none"
      >
        {/* Connect Label */}
        <div className="hidden sm:block mr-4 px-4 py-2 bg-white/95 backdrop-blur-md border border-[#C5A059]/20 rounded-sm text-black text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform translate-x-2 group-hover:translate-x-0 border-l-2 border-l-[#C5A059]">
          Connect via WhatsApp
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
    </>
  );
};

export default ContactFloats;