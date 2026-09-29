"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon,
  X,
  UtensilsCrossed,
  Home,
  Info,
  Sparkles,
  Image as ImageIcon,
  Star,
  Phone,
} from "lucide-react";
import TastyLogo from "./TastyLogo";

export interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/#home", icon: <Home className="w-4 h-4 text-[#B89B43]" /> },
  { name: "About", href: "/#about", icon: <Info className="w-4 h-4 text-[#B89B43]" /> },
  { name: "Flavours", href: "/#flavours", icon: <Sparkles className="w-4 h-4 text-[#B89B43]" /> },
  { name: "Gallery", href: "/#gallery", icon: <ImageIcon className="w-4 h-4 text-[#B89B43]" /> },
  { name: "Reviews", href: "/#reviews", icon: <Star className="w-4 h-4 text-[#B89B43]" /> },
  { name: "Contact", href: "/#contact", icon: <Phone className="w-4 h-4 text-[#B89B43]" /> },
  { name: "Menu", href: "/menu", icon: <UtensilsCrossed className="w-4 h-4 text-[#B89B43]" /> },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section and navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (pathname === "/") {
        const sectionIds = ["home", "about", "flavours", "gallery", "reviews", "contact"];
        const scrollPosition = window.scrollY + 180;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sectionIds[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);

    if (href === "/menu") {
      if (pathname !== "/menu") {
        e.preventDefault();
        router.push("/menu");
      }
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        if (targetId === "home") {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 30);
          window.history.pushState(null, "", "/");
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 75;
          setTimeout(() => {
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          }, 30);
          window.history.pushState(null, "", `#${targetId}`);
        }
      } else {
        e.preventDefault();
        router.push(targetId === "home" ? "/" : `/#${targetId}`);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#1A1510]/98 backdrop-blur-md border-b border-[#6B4F24]/40 py-3 shadow-xl shadow-black/40"
            : "bg-gradient-to-b from-[#1A1510]/95 via-[#1A1510]/50 to-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <TastyLogo
                size={44}
                variant="gold"
                className="w-10 h-10 md:w-11 md:h-11 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-[#F8F1E1] group-hover:text-[#E7D28A] transition-colors">
                  TASTY
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B89B43] -mt-1 font-medium font-sans">
                  RESTAURANT · BTM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Desktop Navigation">
              {navItems
                .filter((item) => item.name !== "Menu")
                .map((item) => {
                  const targetSection = item.href.replace("/#", "");
                  const isActive = pathname === "/" && activeSection === targetSection;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`relative text-sm font-medium font-sans transition-colors hover:text-[#E7D28A] py-1 cursor-pointer ${
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

              {/* Desktop Menu Link Button */}
              <Link
                href="/menu"
                className="gold-btn-gradient flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase shadow-lg group"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#1A1510] group-hover:rotate-12 transition-transform" />
                <span>Explore Menu</span>
              </Link>
            </nav>

            {/* Mobile Action: Single Hamburger Navigation Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] p-2 text-[#E7D28A] hover:text-white rounded-lg bg-[#2A2217] border border-[#6B4F24]/50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B89B43] active:bg-[#3B2E1F]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-nav-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden border-b border-[#6B4F24]/50 bg-[#1A1510] shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
            >
              <div className="px-5 py-5 space-y-2 flex flex-col" aria-label="Mobile Navigation Links">
                {navItems
                  .filter((item) => item.name !== "Menu")
                  .map((item) => {
                    const isActive = pathname === "/" && activeSection === item.href.replace("/#", "");

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`min-h-[48px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-serif tracking-wide transition-colors border cursor-pointer select-none active:bg-[#3B2E1F] ${
                          isActive
                            ? "bg-[#2A2217] text-[#E7D28A] border-[#B89B43]/50 font-bold shadow-md"
                            : "text-[#F8F1E1]/90 hover:text-[#E7D28A] hover:bg-[#2A2217]/50 border-transparent"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-[#2A2217] flex items-center justify-center border border-[#6B4F24]/40">
                            {item.icon}
                          </span>
                          <span>{item.name}</span>
                        </span>

                        {isActive ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E7D28A] shadow-sm shadow-[#E7D28A]" />
                        ) : (
                          <span className="text-xs text-[#B89B43]/60">→</span>
                        )}
                      </a>
                    );
                  })}

                {/* Single Explore Menu Action Button */}
                <div className="pt-2">
                  <a
                    href="/menu"
                    onClick={(e) => handleLinkClick(e, "/menu")}
                    className="gold-btn-gradient w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-widest shadow-lg cursor-pointer"
                  >
                    <UtensilsCrossed className="w-4 h-4 text-[#1A1510]" />
                    <span>Explore Menu</span>
                  </a>
                </div>

                <p className="text-center text-[11px] text-[#C9B68C]/70 pt-2 font-sans italic">
                  &ldquo;Meal Shared Is A Memory Made!&rdquo;
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}
