"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, HeartHandshake, ShieldCheck, Utensils } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#3B2E1F]/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B89B43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden gold-border-glow shadow-2xl group">
              <Image
                src="/images/about_ambience.jpg"
                alt="Tasty Restaurant Dining Ambience in BTM Layout"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1510]/80 backdrop-blur-md border border-[#B89B43]/40 text-[#E7D28A] text-xs font-sans font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#B89B43]" />
                  <span>BTM Layout · Maruthi Nagar · Bengaluru</span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#2A2217] border border-[#B89B43]/40 p-5 rounded-2xl shadow-2xl items-center gap-4 max-w-xs backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-[#B89B43]/20 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-[#E7D28A]" />
              </div>
              <div>
                <p className="text-sm font-serif font-bold text-[#F8F1E1]">Warm Hospitality</p>
                <p className="text-xs text-[#C9B68C] font-sans">Crafted for friends &amp; family gatherings</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#B89B43]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
                OUR STORY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1] leading-tight">
              Good Food. Great Company. <br />
              <span className="gold-text-gradient italic font-normal">Lasting Memories.</span>
            </h2>

            {/* Gold Hairline Divider */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#B89B43] to-transparent" />

            {/* Paragraph Body */}
            <p className="font-sans text-base text-[#C9B68C] leading-relaxed font-normal">
              At Tasty Restaurant, every meal is an opportunity to bring people together. From flavourful Indian favourites to aromatic mandi and tandoori specialities, discover food made for sharing and moments worth remembering.
            </p>

            {/* Brand Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#2A2217]/60 border border-[#6B4F24]/30 flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#E7D28A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#F8F1E1]">Authentic Mandi</h3>
                  <p className="text-xs text-[#C9B68C]/80 mt-0.5">Slow-cooked fragrant rice &amp; succulent roast chicken</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#2A2217]/60 border border-[#6B4F24]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E7D28A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#F8F1E1]">Tandoori &amp; Curries</h3>
                  <p className="text-xs text-[#C9B68C]/80 mt-0.5">Fresh ingredients, authentic spices &amp; signature recipes</p>
                </div>
              </div>
            </div>

            {/* Location Address Badge */}
            <div className="pt-2 text-xs font-sans text-[#E7D28A]/90 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B89B43]" />
              <span>Location: 104/2, 20th Main, Maruthi Nagar Main Road, BTM 1st Stage, Bengaluru</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
