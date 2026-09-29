"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TastyLogo from "./TastyLogo";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const [contentStage, setContentStage] = useState<"enter" | "reveal" | "exit">("enter");

  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check if user has already seen splash screen in this session
    const hasSeenSplash =
      typeof window !== "undefined" &&
      sessionStorage.getItem("tasty_splash_seen");

    if (hasSeenSplash || prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    // Stage 1: Brand details reveal at 500ms
    const revealTimer = setTimeout(() => {
      setContentStage("reveal");
    }, 500);

    // Stage 2: Initiate smooth dissolve at 2100ms
    const exitTimer = setTimeout(() => {
      setContentStage("exit");
    }, 2100);

    // Stage 3: Complete transition at 2600ms
    const doneTimer = setTimeout(() => {
      setVisible(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tasty_splash_seen", "true");
      }
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {contentStage !== "exit" ? (
        <motion.div
          key="splash-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1510] pointer-events-auto select-none"
        >
          {/* Subtle Ambient Gold Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: contentStage === "reveal" ? 0.35 : 0.15,
              scale: contentStage === "reveal" ? 1.1 : 0.95,
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-radial from-[#B89B43]/25 via-[#6B4F24]/10 to-transparent blur-3xl pointer-events-none"
          />

          {/* Central Luxury Emblem & Brand Title */}
          <div className="relative flex flex-col items-center justify-center px-6 text-center max-w-md">
            {/* Logo Mark with Soft Entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-5 rounded-full border border-[#E7D28A]/25 bg-gradient-to-b from-[#2A2217]/60 to-transparent shadow-[0_0_60px_rgba(184,155,67,0.18)]"
            >
              <TastyLogo size={140} variant="gold" className="w-28 h-28 sm:w-36 sm:h-36" />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: contentStage === "reveal" ? 1 : 0,
                y: contentStage === "reveal" ? 0 : 12,
              }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 space-y-2"
            >
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#F8F1E1]">
                TASTY RESTAURANT
              </h1>

              {/* Gold Divider Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: contentStage === "reveal" ? 1 : 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#E7D28A] to-transparent"
              />

              <p className="font-serif italic text-sm text-[#E7D28A] tracking-wider pt-1">
                &ldquo;Meal Shared Is A Memory Made!&rdquo;
              </p>

              <p className="text-[10px] font-sans font-medium uppercase tracking-[0.3em] text-[#B89B43] pt-0.5">
                BTM LAYOUT · BENGALURU
              </p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
