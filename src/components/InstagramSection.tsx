"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const instagramPosts = [
  {
    id: 1,
    image: "/images/hero_mandi.jpg",
    likes: "1.2k",
    comments: "84",
    title: "Mandi Feast",
  },
  {
    id: 2,
    image: "/images/tandoori.jpg",
    likes: "940",
    comments: "42",
    title: "Tandoori Chicken Tikka",
  },
  {
    id: 3,
    image: "/images/indian_classics.jpg",
    likes: "1.5k",
    comments: "112",
    title: "Butter Chicken & Naan",
  },
  {
    id: 4,
    image: "/images/asian.jpg",
    likes: "810",
    comments: "35",
    title: "Asian Wok Noodles",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/tasty_restaurant_btm/";

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1510] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#B89B43]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
                FOLLOW THE FLAVOUR
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F1E1] tracking-tight">
              Stay Connected <span className="gold-text-gradient italic font-normal">with Tasty.</span>
            </h2>
            <p className="font-sans text-sm text-[#C9B68C] font-light">
              Join our food journey on Instagram <span className="text-[#E7D28A] font-medium">@tasty_restaurant_btm</span>
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-xs tracking-widest uppercase self-start md:self-auto shadow-md transition-all duration-300 hover:shadow-[#B89B43]/20"
          >
            <InstagramIcon className="w-4 h-4 text-[#E7D28A]" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E7D28A]" />
          </a>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square rounded-2xl overflow-hidden group gold-border shadow-lg cursor-pointer"
            >
              <Image
                src={post.image}
                alt={`Tasty Restaurant Instagram Post ${post.title}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-104 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1A1510]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <InstagramIcon className="w-7 h-7 text-[#E7D28A]" />
                <div className="flex items-center gap-4 text-xs font-semibold text-[#F8F1E1] font-sans">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#E7D28A] text-[#E7D28A]" /> {post.likes}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#B89B43] font-semibold font-sans">
                  View Post
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
