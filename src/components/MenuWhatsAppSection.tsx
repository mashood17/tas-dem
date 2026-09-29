"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Utensils, MessageCircle, ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

const WHATSAPP_URL = `https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}?text=${encodeURIComponent(
  "Hello Tasty Restaurant, I would like to enquire about your menu and delivery options."
)}`;

export default function MenuWhatsAppSection() {
  return (
    <section className="py-20 md:py-28 bg-[#3B2E1F]/50 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#B89B43]/15 via-[#6B4F24]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-[#2A2217] via-[#1A1510] to-[#2A2217] border border-[#E7D28A]/40 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E7D28A]" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E7D28A]" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#E7D28A]" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E7D28A]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B2E1F] border border-[#B89B43]/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E7D28A]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E7D28A] font-sans">
              ONLINE MENU &amp; DIRECT ENQUIRY
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1] leading-tight max-w-2xl mx-auto tracking-tight">
            Your Next Favourite <span className="gold-text-gradient italic font-normal">Meal Awaits.</span>
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-[#C9B68C] max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Explore our complete menu online or connect directly with our restaurant team on WhatsApp for daily specials and group catering enquiries.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/menu"
              className="gold-btn-gradient w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl group transition-all duration-300 hover:shadow-[#B89B43]/20"
            >
              <Utensils className="w-4 h-4 text-[#1A1510] group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4 text-[#1A1510] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 bg-emerald-600/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30 hover:border-emerald-400 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Enquire on WhatsApp (+91 89045 16291)</span>
            </a>
          </div>

          {/* WhatsApp Direct Line Reference */}
          <div className="mt-8 pt-6 border-t border-[#6B4F24]/30 flex flex-wrap items-center justify-center gap-6 text-xs text-[#C9B68C] font-sans">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#B89B43]" />
              <span>Official WhatsApp: +91 89045 16291</span>
            </div>
            <div className="hidden sm:block text-[#6B4F24]">·</div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#B89B43]" />
              <span>Order Line: +91 7711006608 / +91 7711006609</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
