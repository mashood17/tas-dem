"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, MapPin, ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 bg-[#1A1510] overflow-hidden bg-hero-glow"
    >
      {/* Background Decorative Gold Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-radial from-[#B89B43]/15 via-[#3B2E1F]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#6B4F24_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B2E1F]/80 border border-[#B89B43]/40 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#E7D28A]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E7D28A] font-sans">
                AN EXPERIENCE WORTH SHARING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F8F1E1] leading-[1.12] tracking-tight">
              Where Every Meal <br className="hidden sm:inline" />
              <span className="gold-text-gradient italic font-normal">Becomes a Memory.</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#C9B68C] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover rich flavours, freshly prepared favourites, and memorable moments at Tasty Restaurant, BTM Layout. Authentic Mandi, Tandoori delicacies &amp; classic Indian cuisine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/menu"
                className="gold-btn-gradient w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl group"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#1A1510] group-hover:rotate-12 transition-transform" />
                <span>Explore Our Menu</span>
              </Link>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="gold-outline-btn w-full sm:w-auto px-8 py-4 rounded-full font-sans font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#E7D28A]" />
                <span>Find Us</span>
              </a>
            </div>

            {/* Small Brand Tagline */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-[#C9B68C]/80 italic font-serif">
              <span className="h-[1px] w-8 bg-[#6B4F24]" />
              <span>&ldquo;Meal Shared Is A Memory Made!&rdquo;</span>
              <span className="h-[1px] w-8 bg-[#6B4F24]" />
            </div>
          </motion.div>

          {/* Right Column: Hero Food Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outer Decorative Ring Frame */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl p-3 bg-gradient-to-br from-[#6B4F24]/50 via-[#3B2E1F]/30 to-[#1A1510] border border-[#B89B43]/30 shadow-2xl shadow-black/80 group">
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/hero_mandi.jpg"
                  alt="Tasty Restaurant Signature Mandi Feast Platter"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl glass-card backdrop-blur-md border border-[#E7D28A]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#B89B43] font-semibold">Signature Dish</p>
                    <p className="text-sm font-serif font-bold text-[#F8F1E1]">Royal Chicken Mandi Feast</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#B89B43]/20 border border-[#B89B43]/40 text-[#E7D28A] text-[10px] font-bold uppercase tracking-wider">
                    Bestseller
                  </span>
                </div>
              </div>

              {/* Corner Gold Accent Frames */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#E7D28A]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#E7D28A]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#E7D28A]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#E7D28A]" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="text-[#E7D28A]">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
