"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div style={{ x: smoothX, y: smoothY, opacity: isVisible ? 1 : 0 }} className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-[9999] transition-opacity duration-1000">
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.15)_0%,rgba(197,160,89,0.05)_40%,transparent_70%)] blur-3xl mix-blend-screen" />
    </motion.div>
  );
};

export default CursorGlow;