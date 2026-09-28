"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, ThumbsUp, Award } from "lucide-react";

const platformRatings = [
  {
    platform: "Swiggy",
    rating: "4.0",
    max: "5",
    count: "2,400+ reviews",
    badgeColor: "from-orange-600/30 to-amber-700/20",
    borderColor: "border-orange-500/40",
  },
  {
    platform: "Zomato",
    rating: "3.9",
    max: "5",
    count: "6,182+ votes",
    badgeColor: "from-red-600/30 to-rose-800/20",
    borderColor: "border-rose-500/40",
  },
  {
    platform: "Facebook",
    rating: "5.0",
    max: "5",
    count: "5 recommendations",
    badgeColor: "from-blue-600/30 to-indigo-800/20",
    borderColor: "border-blue-500/40",
  },
];

const customerReviews = [
  {
    id: 1,
    name: "Arjun K.",
    source: "Swiggy Verified Diner",
    rating: 5,
    text: "The Arabian Chicken Mandi is easily one of the best in BTM Layout! The rice is amazingly fragrant and tender roast chicken served with salsa makes it unforgettable.",
    tag: "Chicken Mandi",
  },
  {
    id: 2,
    name: "Meera R.",
    source: "Zomato Diner",
    rating: 4,
    text: "Great atmosphere for family dining in Maruthi Nagar. The butter chicken and garlic naan were fresh, piping hot, and full of flavour. Highly recommended!",
    tag: "Butter Chicken & Naan",
  },
  {
    id: 3,
    name: "Syed H.",
    source: "Google Reviewer",
    rating: 5,
    text: "Sensational Tandoori specialities! The charcoal smoke flavour in the chicken tikka was spot on. Fast delivery and generous portions every time.",
    tag: "Tandoori Tikka",
  },
];

const EXTERNAL_REVIEWS_URL = "https://business.google.com/site/l/06531287537201736397?hl=en-GB";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#1A1510] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#6B4F24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#B89B43]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
              WHAT GUESTS SAY
            </span>
            <span className="w-8 h-[2px] bg-[#B89B43]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1]">
            Moments Worth <span className="gold-text-gradient italic font-normal">Remembering.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C9B68C]">
            Here is what food lovers in Bengaluru say about their dining experience with Tasty Restaurant.
          </p>
        </div>

        {/* Platform Rating Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {platformRatings.map((item, idx) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.badgeColor} border ${item.borderColor} backdrop-blur-md flex items-center justify-between shadow-xl`}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-[#F8F1E1]/70 font-semibold font-sans">
                  {item.platform} Rating
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl font-bold text-[#F8F1E1]">{item.rating}</span>
                  <span className="text-xs text-[#C9B68C]">/ {item.max}</span>
                </div>
                <p className="text-[11px] text-[#E7D28A] mt-1 font-sans">{item.count}</p>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 text-[#B89B43]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(parseFloat(item.rating))
                          ? "fill-[#B89B43] text-[#B89B43]"
                          : "fill-none text-[#6B4F24]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9B68C]/70">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-[#6B4F24]/30 relative flex flex-col justify-between glass-card-hover"
            >
              <Quote className="w-10 h-10 text-[#B89B43]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#B89B43]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B89B43] text-[#B89B43]" />
                  ))}
                </div>

                <p className="font-sans text-sm text-[#F8F1E1]/90 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#6B4F24]/30 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#F8F1E1]">{item.name}</h3>
                  <p className="text-[11px] text-[#C9B68C]">{item.source}</p>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#B89B43]/15 border border-[#B89B43]/30 text-[#E7D28A] text-[10px] font-medium font-sans">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href={EXTERNAL_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-outline-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase shadow-lg"
          >
            <ThumbsUp className="w-4 h-4 text-[#E7D28A]" />
            <span>Read Guest Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E7D28A]" />
          </a>
        </div>

      </div>
    </section>
  );
}
