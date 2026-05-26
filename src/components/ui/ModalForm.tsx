"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiX } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;        // Added
  buttonText: string;   // Added
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

const ModalForm = ({ isOpen, onClose, title, buttonText }: ModalFormProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={overlayVariants} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={onClose} />
          
          <motion.div variants={modalVariants} className="relative w-full max-w-lg bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent pointer-events-none" />
            
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
              <FiX size={24} />
            </button>

            <div className="relative text-center mb-10">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-4xl text-white mb-4">
                {title}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white/50 text-sm font-light">Enter your details to receive exclusive access.</motion.p>
            </div>

            <form className="relative space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={itemVariants}>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/[0.08] transition-all duration-500" />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/[0.08] transition-all duration-500" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/[0.08] transition-all duration-500" />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 flex justify-center">
                <MagneticButton>
                  <button type="submit" className="px-14 py-5 bg-[#C5A059] text-black font-semibold tracking-[0.2em] uppercase text-[10px] rounded-full transition-all duration-500 hover:bg-white hover:scale-105">
                    {buttonText}
                  </button>
                </MagneticButton>
              </motion.div>
            </form>

            <motion.p variants={itemVariants} className="relative mt-10 text-white/20 text-[10px] uppercase tracking-widest font-light text-center">
              We respect your privacy. Your details remain confidential.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;