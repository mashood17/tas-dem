"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ExternalLink, UtensilsCrossed } from "lucide-react";
import TastyLogo from "./TastyLogo";

const EXTERNAL_MENU_URL = "https://business.google.com/site/l/06531287537201736397?hl=en-GB";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Flavours", href: "#flavours" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy for active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1510]/90 backdrop-blur-md border-b border-[#6B4F24]/30 py-3 shadow-xl shadow-black/40"
          : "bg-gradient-to-b from-[#1A1510]/90 via-[#1A1510]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <TastyLogo size={44} variant="gold" className="w-10 h-10 md:w-11 md:h-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-[#F8F1E1] group-hover:text-[#E7D28A] transition-colors">
                TASTY
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#B89B43] -mt-1 font-medium font-sans">
                RESTAURANT · BTM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative text-sm font-medium font-sans transition-colors hover:text-[#E7D28A] py-1 ${
                    isActive ? "text-[#E7D28A]" : "text-[#F8F1E1]/80"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89B43] via-[#E7D28A] to-[#B89B43] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Menu External Button */}
            <a
              href={EXTERNAL_MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn-gradient flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase shadow-lg group"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#1A1510] group-hover:rotate-12 transition-transform" />
              <span>Explore Menu</span>
              <ExternalLink className="w-3 h-3 text-[#1A1510] opacity-80" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={EXTERNAL_MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn-gradient px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Menu</span>
              <ExternalLink className="w-3 h-3 text-[#1A1510]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E7D28A] hover:text-white rounded-lg bg-[#2A2217] border border-[#6B4F24]/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#1A1510]/98 backdrop-blur-xl border-b border-[#6B4F24]/50 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-lg font-serif tracking-wide py-2 border-b border-[#3B2E1F]/60 flex items-center justify-between ${
                      isActive ? "text-[#E7D28A] font-bold" : "text-[#F8F1E1]/80"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#B89B43]" />}
                  </a>
                );
              })}

              <a
                href={EXTERNAL_MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="gold-btn-gradient w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest mt-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#1A1510]" />
                <span>Explore Full Menu</span>
                <ExternalLink className="w-4 h-4 text-[#1A1510]" />
              </a>

              <p className="text-center text-xs text-[#C9B68C]/70 pt-2 font-sans italic">
                &ldquo;Meal Shared Is A Memory Made!&rdquo;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
