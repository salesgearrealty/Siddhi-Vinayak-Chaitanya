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
  const [modalConfig, setModalConfig] = useState({ title: "", buttonText: "" });

  // Update the function to accept dynamic content
  const openModal = (title: string, buttonText: string) => {
    setModalConfig({ title, buttonText });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <main className="relative w-full bg-black scroll-smooth selection:bg-[#C5A059] selection:text-black">
      {/* Global Luxury Enhancements */}
      <CursorGlow />

      {/* Hero Section */}
      <section id="hero">
        <Hero onCTA={() => openModal("Request Your Private Invitation", "Request Invitation")} />
      </section>

      {/* Overview */}
      <section id="overview">
        <Exclusivity />
      </section>

      <Specifications />

      {/* Visual Experience */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Location */}
      <section id="location">
        <Location onCTA={() => openModal("Inquire About Location", "Get Directions")} />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Pricing onCTA={() => openModal("Request Detailed Pricing", "Get Pricing Details")} />
      </section>

      {/* Scarcity */}
      <Urgency onCTA={() => openModal("Secure Your Residence", "Book Now")} />

      <section id="contact">
        <FinalCTA onCTA={() => openModal("Request Your Private Invitation", "Request Invitation")} />
      </section>

      {/* Global Lead Capture Overlay */}
      <ModalForm 
        isOpen={isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        buttonText={modalConfig.buttonText} 
      />
      
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}