"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Royal Chicken Mandi Feast",
    category: "Mandi Platter",
    src: "/images/hero_mandi.jpg",
    span: "col-span-1 lg:col-span-2 row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    id: 2,
    title: "Luxury Dining Ambience",
    category: "Interior",
    src: "/images/about_ambience.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Sizzling Tandoori Tikka",
    category: "Tandoor",
    src: "/images/tandoori.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 4,
    title: "Authentic Mutton Mandi Platter",
    category: "Mandi",
    src: "/images/mandi_speciality.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 5,
    title: "Indian Culinary Feast Spread",
    category: "Indian Classics",
    src: "/images/gallery_curry.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 6,
    title: "Live Clay Oven Tandoor Cooking",
    category: "Culinary Art",
    src: "/images/gallery_tandoor.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 7,
    title: "Saffron Gulab Jamun Dessert",
    category: "Desserts",
    src: "/images/gallery_dessert.jpg",
    span: "col-span-1 lg:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: 8,
    title: "Family Dining Experience",
    category: "Hospitality",
    src: "/images/gallery_dining.jpg",
    span: "col-span-1 lg:col-span-2 row-span-1",
    aspect: "aspect-[16/9] lg:aspect-auto lg:h-full",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#3B2E1F]/30 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B89B43]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#B89B43]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
              THE EXPERIENCE
            </span>
            <span className="w-8 h-[2px] bg-[#B89B43]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1]">
            A Feast for <span className="gold-text-gradient italic font-normal">the Eyes.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C9B68C]">
            Step into the culinary world of Tasty Restaurant. A visual celebration of our signature platters, vibrant ambience, and unforgettable dining moments.
          </p>
        </div>

        {/* Asymmetrical Desktop & Responsive Mobile Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[220px]">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(item)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group gold-border shadow-lg ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510]/90 via-[#1A1510]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-[#1A1510]/80 backdrop-blur-md border border-[#E7D28A]/40 flex items-center justify-center text-[#E7D28A]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89B43]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#F8F1E1]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1A1510] rounded-3xl border border-[#B89B43]/40 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2A2217] text-[#E7D28A] border border-[#6B4F24] hover:bg-[#B89B43] hover:text-[#1A1510] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-[#2A2217] border-t border-[#6B4F24]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89B43] font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F8F1E1]">
                    {selectedImage.title}
                  </h3>
                </div>
                <p className="text-xs text-[#C9B68C] italic font-serif">
                  Tasty Restaurant · BTM Layout
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
