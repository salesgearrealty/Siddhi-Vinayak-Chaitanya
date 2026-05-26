"use client";

import React, { useState } from "react"; // 1. Added React import
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ModalForm from "@/components/ui/ModalForm";

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", buttonText: "" });

  const openModal = (title: string, buttonText: string) => {
    setModalConfig({ title, buttonText });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  // 2. Correct usage of React.Children.map
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { openModal } as any);
    }
    return child;
  });

  return (
    <>
      <Navbar onCTA={() => openModal("Request Your Private Invitation", "Request Invitation")} />
      
      {childrenWithProps}
      
      <Footer />
      <WhatsAppFloat />
      
      <ModalForm 
        isOpen={isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        buttonText={modalConfig.buttonText} 
      />
    </>
  );
}