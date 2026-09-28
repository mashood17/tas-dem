"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MobileCartBar() {
  const { totalItems, subtotal, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed bottom-5 left-4 right-4 z-30 md:hidden"
      >
        <div className="p-3.5 rounded-2xl bg-[#1A1510]/95 backdrop-blur-xl border border-[#E7D28A]/50 shadow-2xl shadow-black/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#B89B43] text-[#1A1510] flex items-center justify-center font-bold font-sans relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E7D28A] text-[#1A1510] text-[10px] flex items-center justify-center font-bold border border-[#1A1510]">
                {totalItems}
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#C9B68C] font-sans">
                {totalItems} {totalItems === 1 ? "dish" : "dishes"}
              </p>
              <p className="font-serif text-base font-bold text-[#E7D28A]">₹{subtotal}</p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="gold-btn-gradient px-4 py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md"
          >
            <span>View Cart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
