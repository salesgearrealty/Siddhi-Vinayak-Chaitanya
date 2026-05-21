"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ModalForm from "@/components/ui/ModalForm";

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // We clone the children to inject the openModal function if needed, 
  // or simply provide a global trigger. 
  return (
    <>
      <Navbar onCTA={openModal} />
      {/* We pass the openModal trigger to children via cloneElement if needed, 
          or simply let sections accept a prop. */}
      {children}
      <Footer />
      <WhatsAppFloat />
      <ModalForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}