"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Exclusivity from "@/components/sections/Exclusivity";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Pricing from "@/components/sections/Pricing";
import Urgency from "@/components/sections/Urgency";
import FinalCTA from "@/components/sections/FinalCTA";
import ModalForm from "@/components/ui/ModalForm";
import CursorGlow from "@/components/ui/CursorGlow";
import Specifications from "@/components/sections/Specifications";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className="relative w-full bg-black scroll-smooth selection:bg-[#C5A059] selection:text-black">
      {/* Global Luxury Enhancements */}
      <CursorGlow />

      {/* Hero Section - The First Impression */}
      <section id="hero">
        <Hero onCTA={openModal} />
      </section>

      {/* Narrative & Positioning Sections */}
      <section id="overview">
        <Exclusivity />
      </section>

      <Specifications />


      {/* Visual Experience */}
      <section id="gallery">
        <Gallery />
      </section>



      {/* Logical & Convenience Proof */}
      <section id="location">
        <Location onCTA={openModal} />
      </section>

      {/* Value & Investment Anchoring */}
      <section id="pricing">
        <Pricing onCTA={openModal} />
      </section>

      {/* Scarcity & Conversion Push */}
      <Urgency onCTA={openModal} />

      <section id="contact">
        <FinalCTA onCTA={openModal} />
      </section>

      {/* Global Lead Capture Overlay */}
      <ModalForm isOpen={isOpen} onClose={closeModal} />
      
      {/* Background Noise/Texture for Luxury Feel */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}