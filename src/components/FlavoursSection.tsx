"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "mandi",
    title: "Mandi",
    description: "Aromatic rice paired with flavourful grilled favourites.",
    image: "/images/mandi_speciality.jpg",
    badge: "Signature Platter",
  },
  {
    id: "tandoori",
    title: "Tandoori Specialities",
    description: "Richly seasoned favourites inspired by the tandoor.",
    image: "/images/tandoori.jpg",
    badge: "Clay Oven Grilled",
  },
  {
    id: "indian",
    title: "Indian Classics",
    description: "Comforting curries and familiar favourites.",
    image: "/images/indian_classics.jpg",
    badge: "Rich & Creamy",
  },
  {
    id: "asian",
    title: "Asian Favourites",
    description: "A selection of contemporary Asian-inspired dishes.",
    image: "/images/asian.jpg",
    badge: "Wok Seasoned",
  },
];

export default function FlavoursSection() {
  return (
    <section id="flavours" className="py-20 md:py-32 bg-[#1A1510] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B89B43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#B89B43]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
              THE FLAVOURS
            </span>
            <span className="w-8 h-[2px] bg-[#B89B43]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1]">
            Made to Be <span className="gold-text-gradient italic font-normal">Savoured.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C9B68C]">
            Explore our crafted culinary categories, featuring traditional Indian spices, royal mandi platters, and vibrant Asian specialities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Tasty Restaurant ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510] via-[#1A1510]/30 to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1A1510]/80 backdrop-blur-md border border-[#B89B43]/40 text-[#E7D28A] text-[10px] font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#F8F1E1] group-hover:text-[#E7D28A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#C9B68C] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89B43] group-hover:text-[#E7D28A] transition-colors pt-2 border-t border-[#6B4F24]/30"
                >
                  <span>Explore Items</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89B43] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="gold-btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase shadow-xl"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#1A1510]" />
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-[#1A1510]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
