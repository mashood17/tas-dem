"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavoursSection from "@/components/FlavoursSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import MenuWhatsAppSection from "@/components/MenuWhatsAppSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileCartBar from "@/components/MobileCartBar";
import { MessageCircle, PhoneCall } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [splashFinished, setSplashFinished] = useState(false);
  const { totalItems } = useCart();

  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}?text=${encodeURIComponent(
    "Hello Tasty Restaurant, I would like to enquire about your menu and delivery options."
  )}`;

  return (
    <main className="relative min-h-screen bg-[#1A1510] text-[#F8F1E1] selection:bg-[#B89B43] selection:text-[#1A1510]">
      {/* Splash Screen Overlay */}
      <SplashScreen onComplete={() => setSplashFinished(true)} />

      {/* Cart Drawer & Mobile Bar */}
      <CartDrawer />
      <MobileCartBar />

      {/* Main Page Content */}
      <div className={`transition-opacity duration-700 ${splashFinished ? "opacity-100" : "opacity-90"}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FlavoursSection />
        <GallerySection />
        <ReviewsSection />
        <MenuWhatsAppSection />
        <InstagramSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating Sticky Mobile Quick Action Bar (when cart is empty or offset on desktop) */}
      <div
        className={`fixed z-30 flex flex-col gap-3 transition-all duration-300 right-5 ${
          totalItems > 0 ? "bottom-24 md:bottom-5" : "bottom-5"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-110 transition-all flex items-center justify-center group"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold font-sans uppercase">
            WhatsApp
          </span>
        </a>

        <a
          href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/\s+/g, "")}`}
          className="p-3.5 rounded-full bg-[#B89B43] text-[#1A1510] shadow-2xl hover:bg-[#E7D28A] hover:scale-110 transition-all flex items-center justify-center group"
          aria-label="Call Restaurant"
        >
          <PhoneCall className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold font-sans uppercase">
            Call Now
          </span>
        </a>
      </div>
    </main>
  );
}
