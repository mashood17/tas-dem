"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TastyLogo from "./TastyLogo";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<"initial" | "glow" | "fly" | "done">("initial");

  useEffect(() => {
    // Check if user has already seen splash in this session
    const hasSeenSplash = typeof window !== "undefined" && sessionStorage.getItem("tasty_splash_seen");

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenSplash || prefersReducedMotion) {
      setStage("done");
      onComplete();
      return;
    }

    // Sequence timer: 0 -> 400ms glow -> 1400ms fly -> 1800ms done
    const glowTimer = setTimeout(() => {
      setStage("glow");
    }, 400);

    const flyTimer = setTimeout(() => {
      setStage("fly");
    }, 1300);

    const doneTimer = setTimeout(() => {
      setStage("done");
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tasty_splash_seen", "true");
      }
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(flyTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === "fly" ? 0.95 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1510] overflow-hidden"
      >
        {/* Subtle Ambient Gold Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: stage === "glow" || stage === "fly" ? 0.4 : 0,
            scale: stage === "fly" ? 1.2 : 1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-[450px] h-[450px] rounded-full bg-radial from-[#B89B43]/30 via-[#6B4F24]/10 to-transparent blur-3xl pointer-events-none"
        />

        {/* Central Logo Box with Travel Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            stage === "fly"
              ? {
                  opacity: 0,
                  scale: 0.35,
                  x: typeof window !== "undefined" && window.innerWidth >= 768 ? "-38vw" : "-35vw",
                  y: typeof window !== "undefined" ? "-44vh" : "-40vh",
                }
              : {
                  opacity: 1,
                  scale: stage === "glow" ? 1.05 : 1,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: stage === "fly" ? 0.6 : 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex flex-col items-center justify-center p-6 text-center"
        >
          {/* Subtle Outer Hairline Ring Glow */}
          <div className="relative p-4 rounded-full border border-[#E7D28A]/20 shadow-[0_0_50px_rgba(184,155,67,0.15)]">
            <TastyLogo size={180} variant="gold" className="w-36 h-36 md:w-44 md:h-44" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage === "glow" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-xs uppercase tracking-[0.35em] text-[#E7D28A] font-medium font-sans"
          >
            Meal Shared Is A Memory Made!
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
