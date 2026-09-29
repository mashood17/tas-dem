"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  MapPin,
  User,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } =
    useCart();

  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState<"Pickup" | "Delivery">("Delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (cart.length === 0) {
      setValidationError("Your cart is empty. Please add dishes to order.");
      return;
    }

    if (!customerName.trim()) {
      setValidationError("Please enter your name.");
      return;
    }

    if (orderType === "Delivery" && !deliveryAddress.trim()) {
      setValidationError("Please enter your delivery address in Bengaluru.");
      return;
    }

    // Build the formatted order items list
    const orderItemsText = cart
      .map(
        (ci, idx) =>
          `${idx + 1}. ${ci.item.name} × ${ci.quantity} — ₹${ci.item.price * ci.quantity}`
      )
      .join("\n");

    let message = `Hello Tasty Restaurant! I would like to place an order.\n\n`;
    message += `Name: ${customerName.trim()}\n`;
    message += `Order Type: ${orderType}\n\n`;
    message += `Order:\n${orderItemsText}\n\n`;
    message += `Subtotal: ₹${subtotal}\n`;

    if (orderType === "Delivery") {
      message += `Address: ${deliveryAddress.trim()}\n`;
    }

    if (specialInstructions.trim()) {
      message += `Special Instructions: ${specialInstructions.trim()}\n`;
    }

    message += `\nPlease confirm availability, delivery (if applicable), and final amount. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#1A1510] border-l border-[#6B4F24]/50 text-[#F8F1E1] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#3B2E1F] flex items-center justify-between bg-[#2A2217]/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#B89B43]/20 flex items-center justify-center text-[#E7D28A]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#F8F1E1]">Your Order Cart</h3>
                    <p className="text-[11px] text-[#C9B68C] font-sans">
                      {totalItems} {totalItems === 1 ? "item" : "items"} selected
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-[#C9B68C] hover:text-red-400 p-1.5 transition-colors font-sans"
                      title="Clear Cart"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 text-[#E7D28A] hover:text-white rounded-lg bg-[#3B2E1F]/60 border border-[#6B4F24]/40"
                    aria-label="Close cart"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {cart.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#2A2217] border border-[#6B4F24]/40 mx-auto flex items-center justify-center text-[#B89B43]">
                      <ShoppingBag className="w-8 h-8 opacity-60" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-serif text-lg font-bold text-[#F8F1E1]">Your Cart is Empty</p>
                      <p className="text-xs text-[#C9B68C] max-w-xs mx-auto">
                        Explore our delicious Mandi, Tandoori, Breads, and curries and add your favourites.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="gold-btn-gradient px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-lg"
                    >
                      <span>Browse Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Cart Items List */}
                    <div className="space-y-3">
                      {cart.map((ci) => (
                        <div
                          key={ci.item.id}
                          className="p-3.5 rounded-xl bg-[#2A2217]/60 border border-[#6B4F24]/30 flex items-center justify-between gap-3 group hover:border-[#B89B43]/40 transition-colors"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#6B4F24]/40">
                            <Image
                              src={ci.item.image}
                              alt={ci.item.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-2.5 h-2.5 rounded-full border ${
                                  ci.item.isVeg
                                    ? "bg-emerald-500 border-emerald-400"
                                    : "bg-red-500 border-red-400"
                                }`}
                              />
                              <h4 className="font-serif text-xs font-bold text-[#F8F1E1] truncate">
                                {ci.item.name}
                              </h4>
                            </div>
                            <p className="text-xs text-[#E7D28A] font-sans font-semibold mt-0.5">
                              ₹{ci.item.price}{" "}
                              <span className="text-[10px] text-[#C9B68C]/70 font-normal">
                                × {ci.quantity} = ₹{ci.item.price * ci.quantity}
                              </span>
                            </p>
                          </div>

                          {/* Stepper Controls */}
                          <div className="flex items-center gap-1 bg-[#1A1510] border border-[#6B4F24]/50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(ci.item.id, -1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-[#C9B68C] hover:text-[#F8F1E1] hover:bg-[#3B2E1F] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-[#F8F1E1]">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(ci.item.id, 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-[#C9B68C] hover:text-[#F8F1E1] hover:bg-[#3B2E1F] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(ci.item.id)}
                            className="text-[#C9B68C] hover:text-red-400 p-1.5 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Customer Details Form */}
                    <form onSubmit={handleWhatsAppOrder} className="space-y-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#2A2217]/50 border border-[#6B4F24]/30 space-y-3">
                        <p className="text-xs uppercase tracking-wider text-[#B89B43] font-bold font-sans">
                          Order Details
                        </p>

                        {/* Customer Name */}
                        <div>
                          <label className="block text-[11px] text-[#C9B68C] mb-1 font-sans">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-[#B89B43] absolute left-3 top-2.5 pointer-events-none" />
                            <input
                              type="text"
                              value={customerName}
                              onChange={(e) => setCustomerName(e.target.value)}
                              placeholder="e.g. Ramesh Kumar"
                              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#1A1510] border border-[#6B4F24]/50 text-xs text-[#F8F1E1] placeholder-[#C9B68C]/50 focus:outline-none focus:border-[#E7D28A] focus:ring-2 focus:ring-[#B89B43]/30 transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        {/* Order Type Toggle */}
                        <div>
                          <label className="block text-[11px] text-[#C9B68C] mb-1 font-sans">
                            Order Type <span className="text-red-400">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setOrderType("Delivery")}
                              className={`py-2 px-3 rounded-lg text-xs font-semibold font-sans border transition-all ${
                                orderType === "Delivery"
                                  ? "bg-[#B89B43] text-[#1A1510] border-[#B89B43]"
                                  : "bg-[#1A1510] text-[#C9B68C] border-[#6B4F24]/50 hover:border-[#B89B43]"
                              }`}
                            >
                              Home Delivery
                            </button>
                            <button
                              type="button"
                              onClick={() => setOrderType("Pickup")}
                              className={`py-2 px-3 rounded-lg text-xs font-semibold font-sans border transition-all ${
                                orderType === "Pickup"
                                  ? "bg-[#B89B43] text-[#1A1510] border-[#B89B43]"
                                  : "bg-[#1A1510] text-[#C9B68C] border-[#6B4F24]/50 hover:border-[#B89B43]"
                              }`}
                            >
                              Takeaway / Pickup
                            </button>
                          </div>
                        </div>

                        {/* Delivery Address if Delivery Selected */}
                        {orderType === "Delivery" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <label className="block text-[11px] text-[#C9B68C] mb-1 font-sans">
                              Delivery Address in Bengaluru <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                              <MapPin className="w-4 h-4 text-[#B89B43] absolute left-3 top-2.5 pointer-events-none" />
                              <textarea
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                                placeholder="House / Flat No, Street, Landmark, BTM Layout / area"
                                rows={2}
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#1A1510] border border-[#6B4F24]/50 text-xs text-[#F8F1E1] placeholder-[#C9B68C]/50 focus:outline-none focus:border-[#E7D28A] focus:ring-2 focus:ring-[#B89B43]/30 transition-all duration-200"
                                required
                              />
                            </div>
                          </motion.div>
                        )}

                        {/* Special Instructions */}
                        <div>
                          <label className="block text-[11px] text-[#C9B68C] mb-1 font-sans">
                            Special Instructions (Optional)
                          </label>
                          <input
                            type="text"
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            placeholder="e.g. Less spicy, extra salsa, no onions"
                            className="w-full px-3 py-2 rounded-lg bg-[#1A1510] border border-[#6B4F24]/50 text-xs text-[#F8F1E1] placeholder-[#C9B68C]/50 focus:outline-none focus:border-[#E7D28A] focus:ring-2 focus:ring-[#B89B43]/30 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Validation Error Banner */}
                      {validationError && (
                        <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{validationError}</span>
                        </div>
                      )}
                    </form>
                  </>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-[#3B2E1F] bg-[#2A2217]/90 space-y-3">
                  <div className="space-y-1.5 text-xs text-[#C9B68C]">
                    <div className="flex items-center justify-between">
                      <span>Total Items</span>
                      <span className="font-semibold text-[#F8F1E1]">{totalItems}</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-bold text-[#F8F1E1]">
                      <span>Order Subtotal</span>
                      <span className="text-[#E7D28A] font-serif text-xl">₹{subtotal}</span>
                    </div>
                    <p className="text-[10px] text-[#C9B68C]/80 italic pt-1">
                      * Please note: Orders are not final until Tasty Restaurant confirms item availability and total amount on WhatsApp.
                    </p>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all shadow-emerald-950/40"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp (+91 89045 16291)</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
