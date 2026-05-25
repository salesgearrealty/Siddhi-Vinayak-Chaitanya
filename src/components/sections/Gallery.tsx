"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  { src: "/assets/Gallery/hill_view.avif", title: "Hill View Balcony", category: "Vistas" },
  { src: "/assets/Gallery/palatial.avif", title: "Palatial Living", category: "Interiors" },
  { src: "/assets/Gallery/Facade.avif", title: "The Facade", category: "Architecture" },
  { src: "/assets/Gallery/Master.avif", title: "Sun-Drenched Master", category: "Sanctuary" },
  { src: "/assets/Gallery/roof-top.avif", title: "Roof Top Amenities", category: "Amenities" },
  { src: "/assets/Gallery/Kitchen.avif", title: "Gourmet Kitchen", category: "Culinary" },
  { src: "/assets/Gallery/Golden_Hour.avif", title: "Golden Hour Exterior", category: "Atmosphere" },
  { src: "/assets/Gallery/parking.avif", title: "2 Reserved Car Parking", category: "Amenities" },
];

const duplicatedImages = [...images, ...images];

const Gallery = () => {
  const controls = useAnimationControls();
  const trackRef = useRef<HTMLDivElement>(null);
  
  const currentX = useRef(0);
  const isPaused = useRef(false);
  const animationDuration = 25;

  const startInfiniteAnimation = (startX: number) => {
    isPaused.current = false;
    
    const totalWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 1000;
    const currentProgress = Math.abs(startX) / totalWidth;
    const remainingTime = animationDuration * (1 - (currentProgress % 1));

    controls.start({
      x: [startX, -totalWidth],
      transition: {
        ease: "linear",
        duration: remainingTime,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      }
    });
  };

  useEffect(() => {
    startInfiniteAnimation(0);
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
    controls.stop();

    if (trackRef.current) {
      const computedStyle = window.getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      currentX.current = matrix.m41;
      controls.set({ x: currentX.current });
    }
  };

  const handleMouseLeave = () => {
    if (!isPaused.current) return;

    const totalWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 1000;
    
    let resumeX = currentX.current;
    if (Math.abs(resumeX) >= totalWidth) {
      resumeX = resumeX + totalWidth;
    }

    startInfiniteAnimation(resumeX);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 mb-10 md:mb-16">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-6">A Glimpse Into Your Future.</h2>
          <p className="text-white/50 font-light text-sm md:text-lg">Every detail designed to reflect Elegance, Class, and Peace.</p>
        </div>
      </div>

      {/* Outer Viewport Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Infinite Animating Track */}
        <motion.div 
          ref={trackRef}
          className="flex gap-3 md:gap-4 px-2 w-max"
          animate={controls}
          onUpdate={(latest) => {
            if (!isPaused.current && typeof latest.x === "number") {
              currentX.current = latest.x;
            }
          }}
        >
          {duplicatedImages.map((img, idx) => (
            <div 
              key={idx} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-[52vw] sm:w-[280px] md:w-[440px] h-[280px] sm:h-[380px] md:h-[550px] overflow-hidden rounded-sm cursor-pointer flex-shrink-0 group"
            >
              {/* Image Frame Setup */}
              <div className="relative w-full h-full">
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  priority={idx < 4} 
                  quality={90}
                  sizes="(max-width: 768px) 52vw, 440px"
                  className="object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105" 
                />
              </div>

              {/* High Contrast Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              {/* Content Label Badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-6 md:left-6 md:right-6 p-2.5 md:p-5 z-20 bg-black/60 border border-white/5 rounded-md backdrop-blur-sm transition-colors duration-300 group-hover:border-[#C5A059]/30">
                <p className="text-[#C5A059] text-[7px] md:text-[10px] uppercase tracking-widest mb-0.5 md:mb-1 font-black">
                  {img.category}
                </p>
                {/* Explicit typography and layout rules preventing clip or ellipsis cutoff strings */}
                <h3 className="text-white text-[11px] sm:text-sm md:text-lg font-serif font-medium tracking-wide leading-tight whitespace-normal break-words">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;