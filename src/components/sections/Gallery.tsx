"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/assets/Gallery/hill_view.avif", title: "Hill View Balcony", category: "Vistas" },
  { src: "/assets/Gallery/palatial.avif", title: "Palatial Living", category: "Interiors" },
  { src: "/assets/Gallery/Facade.avif", title: "The Facade", category: "Architecture" },
  { src: "/assets/Gallery/Master.avif", title: "Sun-Drenched Master", category: "Sanctuary" },
  { src: "/assets/Gallery/Kitchen.avif", title: "Gourmet Kitchen", category: "Culinary" },
  { src: "/assets/Gallery/Golden_Hour.avif", title: "Golden Hour Exterior", category: "Atmosphere" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Gallery = () => {
  return (
    <section className="w-full py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4 block font-semibold">Visual Narrative</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">A Glimpse Into Your Future.</h2>
          <p className="text-white/50 font-light text-lg">Every detail designed to reflect elegance, light, and space.</p>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants} className="flex flex-col md:flex-row gap-4 px-4 h-auto md:h-[70vh]">
        {images.map((img, idx) => (
          <motion.div key={idx} variants={itemVariants} className={`relative group overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ease-in-out ${idx % 2 === 0 ? "flex-[1.2]" : "flex-[1]"} hover:flex-[2]`}>
            <div className="relative w-full h-full">
              <div className={`relative w-full h-full ${idx % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"} md:aspect-auto`}>
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  priority={idx < 2} 
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.08] group-hover:brightness-110 group-hover:contrast-105" 
                />
              </div>
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-all duration-500 bg-black/30 backdrop-blur-md rounded-lg border border-white/5">
              <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-bold">{img.category}</p>
              <h3 className="text-white text-lg md:text-xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 mt-12 flex justify-end">
        <div className="flex items-center gap-4 group cursor-pointer">
          <span className="text-white/40 text-xs uppercase tracking-widest group-hover:text-white transition-colors">View All Perspectives</span>
          <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-[#C5A059] transition-all duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;