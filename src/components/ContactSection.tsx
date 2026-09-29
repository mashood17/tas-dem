"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Clock,
  Navigation,
  CalendarCheck,
  MessageCircle,
  ExternalLink,
  Building2,
} from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

const PRIMARY_PHONE = RESTAURANT_CONFIG.primaryPhone;
const PHONE_1 = RESTAURANT_CONFIG.primaryPhone; // +91 89045 16291 (Official WhatsApp & Main Line)
const PHONE_2 = RESTAURANT_CONFIG.additionalPhones[0]; // +91 7711006608
const PHONE_3 = RESTAURANT_CONFIG.additionalPhones[1]; // +91 7711006609

const RESERVATION_URL = RESTAURANT_CONFIG.reservationUrl;
const MAPS_DIRECTIONS_URL = RESTAURANT_CONFIG.googleMapsDirectionsUrl;
const WHATSAPP_URL = `https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}?text=${encodeURIComponent(
  "Hello Tasty Restaurant, I would like to enquire about your menu and delivery options."
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-32 bg-[#3B2E1F]/30 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#B89B43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#B89B43]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B43] font-sans">
              FIND US
            </span>
            <span className="w-8 h-[2px] bg-[#B89B43]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F1E1] tracking-tight">
            Come, Make Yourself <span className="gold-text-gradient italic font-normal">at Home.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C9B68C] font-light max-w-xl mx-auto">
            Located in the heart of Maruthi Nagar, BTM 1st Stage, Bengaluru. We look forward to serving you!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Address Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#6B4F24]/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B89B43]/20 flex items-center justify-center text-[#E7D28A]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F8F1E1]">TASTY RESTAURANT</h3>
                  <p className="text-xs text-[#B89B43] font-semibold uppercase tracking-wider">BTM Layout · Maruthi Nagar</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 text-sm text-[#C9B68C]">
                <MapPin className="w-5 h-5 text-[#E7D28A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {RESTAURANT_CONFIG.address}
                </span>
              </div>
            </div>

            {/* Opening Hours & Phone Numbers Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone Info */}
              <div className="glass-card p-6 rounded-2xl border border-[#6B4F24]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#E7D28A]">
                  <PhoneCall className="w-4 h-4 text-[#B89B43]" />
                  <span className="text-xs uppercase tracking-wider font-semibold font-sans">Contact &amp; WhatsApp</span>
                </div>
                <div className="space-y-1 text-xs text-[#F8F1E1]">
                  <p className="font-semibold text-sm text-[#E7D28A]">{PHONE_1} (Main &amp; WhatsApp)</p>
                  <p className="text-[#C9B68C]">{PHONE_2} (Order Line)</p>
                  <p className="text-[#C9B68C]">{PHONE_3} (Order Line)</p>
                </div>
              </div>

              {/* Hours Info */}
              <div className="glass-card p-6 rounded-2xl border border-[#6B4F24]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#E7D28A]">
                  <Clock className="w-4 h-4 text-[#B89B43]" />
                  <span className="text-xs uppercase tracking-wider font-semibold font-sans">Opening Hours</span>
                </div>
                <div className="space-y-1 text-xs text-[#F8F1E1]">
                  <p className="font-semibold text-sm text-[#E7D28A]">{RESTAURANT_CONFIG.openingHours}</p>
                  <p className="text-[#C9B68C]">Open 7 Days a Week</p>
                  <p className="text-[10px] text-[#B89B43]">Late Night Dining Available</p>
                </div>
              </div>

            </div>

            {/* Action Buttons Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${PRIMARY_PHONE.replace(/\s+/g, "")}`}
                className="gold-btn-gradient py-3.5 px-5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#1A1510]" />
                <span>Call Now</span>
              </a>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-outline-btn py-3.5 px-5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#E7D28A]" />
                <span>Get Directions</span>
              </a>

              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-[#2A2217] border border-[#B89B43]/50 text-[#F8F1E1] hover:bg-[#3B2E1F] transition-colors font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#B89B43]" />
                <span>Reserve Table</span>
                <ExternalLink className="w-3 h-3 text-[#B89B43]" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-600/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30 transition-colors font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+91 89045 16291)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Location Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden gold-border-glow shadow-2xl">
              <iframe
                title="Tasty Restaurant BTM Layout Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.895521950266!2d77.6111867!3d12.9144365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f9d0c64115%3A0x8ad9e1e7fa8296a8!2sTasty%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "brightness(0.85) contrast(1.1) opacity(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card backdrop-blur-md border border-[#E7D28A]/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B89B43] font-bold">Location</p>
                  <p className="text-xs font-serif font-bold text-[#F8F1E1]">BTM 1st Stage · Maruthi Nagar</p>
                </div>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#B89B43] text-[#1A1510] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-[#E7D28A] transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
