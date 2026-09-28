"use client";

import React from "react";
import TastyLogo from "./TastyLogo";
import { Phone, MapPin, MessageCircle, ExternalLink, ArrowUp } from "lucide-react";

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

const EXTERNAL_MENU_URL = "https://business.google.com/site/l/06531287537201736397?hl=en-GB";
const INSTAGRAM_URL = "https://www.instagram.com/tasty_restaurant_btm/";
const WHATSAPP_URL = "https://wa.me/917711006608?text=Hello%20Tasty%20Restaurant,%20I%20would%20like%20to%20enquire%20about%20your%20menu%20and%20delivery%20options.";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1510] border-t border-[#6B4F24]/30 pt-16 pb-12 text-[#F8F1E1] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B2E1F]">
          
          {/* Brand & Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <TastyLogo size={44} variant="gold" className="w-11 h-11" />
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F8F1E1]">
                  TASTY RESTAURANT
                </span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B89B43] font-medium font-sans">
                  BTM Layout · Bengaluru
                </p>
              </div>
            </div>

            <p className="font-serif italic text-[#E7D28A]/90 text-sm">
              &ldquo;Meal Shared Is A Memory Made!&rdquo;
            </p>

            <p className="font-sans text-xs text-[#C9B68C] leading-relaxed max-w-sm">
              Serving rich Indian curries, authentic Mandi platters, tandoori delicacies, and contemporary Asian specialities in Maruthi Nagar, BTM 1st Stage.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#B89B43]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C9B68C] font-sans">
              <li>
                <a href="#home" className="hover:text-[#E7D28A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E7D28A] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#flavours" className="hover:text-[#E7D28A] transition-colors">The Flavours</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E7D28A] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E7D28A] transition-colors">Guest Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E7D28A] transition-colors">Find Us</a>
              </li>
            </ul>
          </div>

          {/* External Services Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#B89B43]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C9B68C] font-sans">
              <li>
                <a
                  href={EXTERNAL_MENU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7D28A] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Menu</span>
                  <ExternalLink className="w-3 h-3 text-[#B89B43]" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 text-emerald-400/90"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Delivery</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7D28A] transition-colors inline-flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E7D28A]" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#B89B43]">
              Location &amp; Phone
            </h4>
            <div className="space-y-2 text-xs text-[#C9B68C] font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B89B43] shrink-0 mt-0.5" />
                <span>104/2, 20th Main, Maruthi Nagar Main Road, BTM 1st Stage, Bengaluru 560029</span>
              </p>
              <p className="flex items-center gap-2 text-[#E7D28A] font-semibold">
                <Phone className="w-4 h-4 text-[#B89B43] shrink-0" />
                <span>+91 89045 16291</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9B68C]/70 font-sans">
          <p>© {new Date().getFullYear()} TASTY RESTAURANT. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#2A2217] border border-[#6B4F24] text-[#E7D28A] hover:bg-[#B89B43] hover:text-[#1A1510] transition-colors flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
