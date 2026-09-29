"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ShoppingBag,
  Search,
  Plus,
  Minus,
  Check,
  Sparkles,
  Flame,
  ChevronDown,
  MessageCircle,
  X,
  Menu as MenuIcon,
  Home,
  Info,
  Image as ImageIcon,
  Star,
  Phone,
  PhoneCall,
  UtensilsCrossed,
} from "lucide-react";
import TastyLogo from "@/components/TastyLogo";
import CartDrawer from "@/components/CartDrawer";
import MobileCartBar from "@/components/MobileCartBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import {
  MENU_ITEMS,
  MENU_CATEGORIES,
  MenuCategory,
  MenuItem,
} from "@/data/menuData";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

export default function MenuPage() {
  const { cart, addToCart, updateQuantity, setIsCartOpen, totalItems, subtotal } =
    useCart();

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter === "veg" && !item.isVeg) {
        return false;
      }
      if (dietaryFilter === "non-veg" && item.isVeg) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item, 1);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  const getCartItemQuantity = (id: string) => {
    const found = cart.find((ci) => ci.item.id === id);
    return found ? found.quantity : 0;
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("menu-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1510] text-[#F8F1E1] flex flex-col selection:bg-[#B89B43] selection:text-[#1A1510]">
      <CartDrawer />
      <MobileCartBar />

      {/* ================= STICKY MENU NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-[#1A1510]/95 backdrop-blur-md border-b border-[#6B4F24]/40 py-3.5 shadow-xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Back to Home & Brand Logo */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9B68C] hover:text-[#E7D28A] transition-colors py-1 px-2.5 rounded-lg bg-[#2A2217] border border-[#6B4F24]/50"
                title="Return to Homepage"
              >
                <ArrowLeft className="w-4 h-4 text-[#B89B43]" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>

              <Link href="/" className="flex items-center gap-2.5 group">
                <TastyLogo size={36} variant="gold" className="w-8 h-8 group-hover:scale-105 transition-transform" />
                <div className="hidden xs:flex flex-col">
                  <span className="font-serif text-base font-bold tracking-wider text-[#F8F1E1]">
                    TASTY RESTAURANT
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B89B43] -mt-1 font-medium font-sans">
                    Digital Menu
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Actions: WhatsApp Order & Cart Drawer Trigger */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}?text=${encodeURIComponent(
                  "Hello Tasty Restaurant! I am browsing your digital menu and have a question regarding an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="gold-btn-gradient px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg relative group"
                aria-label="View Order Cart"
              >
                <ShoppingBag className="w-4 h-4 text-[#1A1510] group-hover:scale-105 transition-transform duration-200" />
                <span className="font-sans">Cart</span>
                {totalItems > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-[#1A1510] text-[#E7D28A] text-[10px] font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Navigation Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden min-w-[42px] min-h-[42px] p-2 text-[#E7D28A] hover:text-white rounded-lg bg-[#2A2217] border border-[#6B4F24]/50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B89B43] active:bg-[#3B2E1F]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer for Menu Page */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="menu-mobile-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden border-b border-[#6B4F24]/50 bg-[#1A1510] shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
            >
              <div className="px-5 py-5 space-y-2 flex flex-col" aria-label="Mobile Navigation Links">
                {[
                  { name: "Home", href: "/#home", icon: <Home className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "About", href: "/#about", icon: <Info className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "Flavours", href: "/#flavours", icon: <Sparkles className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "Gallery", href: "/#gallery", icon: <ImageIcon className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "Reviews", href: "/#reviews", icon: <Star className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "Contact", href: "/#contact", icon: <Phone className="w-4 h-4 text-[#B89B43]" /> },
                  { name: "Explore Menu", href: "/menu", icon: <UtensilsCrossed className="w-4 h-4 text-[#B89B43]" /> },
                ].map((item) => {
                  const isCurrent = item.href === "/menu";
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[48px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-serif tracking-wide transition-colors border cursor-pointer select-none active:bg-[#3B2E1F] ${
                        isCurrent
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

                      {isCurrent ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E7D28A] shadow-sm shadow-[#E7D28A]" />
                      ) : (
                        <span className="text-xs text-[#B89B43]/60">→</span>
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#1A1510] via-[#2A2217] to-[#1A1510] border-b border-[#3B2E1F] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B89B43]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#6B4F24]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-4 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B2E1F]/80 border border-[#B89B43]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#E7D28A]" />
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E7D28A] font-sans">
                  DISCOVER OUR MENU
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8F1E1] leading-tight tracking-tight">
                Every Meal <br />
                <span className="gold-text-gradient italic font-normal">Tells a Story.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#C9B68C] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Explore flavours made for sharing, savouring, and remembering. From Arabian mandi platters and tandoori charcoal grills to traditional Indian breads and spicy wok noodles.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToCatalog}
                  className="gold-btn-gradient px-8 py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl group transition-all duration-300 hover:shadow-[#B89B43]/20"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#1A1510] group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore the Menu</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#1A1510] group-hover:translate-y-0.5 transition-transform duration-300" />
                </button>

                <p className="text-xs text-[#C9B68C]/70 italic font-serif">
                  &ldquo;Meal Shared Is A Memory Made!&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex lg:col-span-5 relative justify-center"
            >
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden gold-border-glow shadow-2xl group">
                <Image
                  src="/images/hero_mandi.jpg"
                  alt="Tasty Restaurant Signature Dishes"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-104 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card backdrop-blur-md border border-[#E7D28A]/30">
                  <p className="text-[10px] uppercase tracking-wider text-[#B89B43] font-semibold">Speciality Dish</p>
                  <p className="text-sm font-serif font-bold text-[#F8F1E1]">Authentic Arabian Chicken Mandi</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SEARCH & CATEGORIES CONTROLS ================= */}
      <section id="menu-catalog" className="sticky top-[61px] z-30 bg-[#1A1510]/98 backdrop-blur-md border-b border-[#3B2E1F] py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Search bar & Dietary toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-[#B89B43] absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Butter Naan, Mandi, Dal Tadka)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#2A2217] border border-[#6B4F24]/50 text-xs text-[#F8F1E1] placeholder-[#C9B68C]/60 focus:outline-none focus:border-[#E7D28A] focus:ring-2 focus:ring-[#B89B43]/30 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-[#C9B68C] hover:text-[#F8F1E1]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#2A2217] border border-[#6B4F24]/40 self-stretch sm:self-auto justify-center">
              <button
                onClick={() => setDietaryFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans transition-all ${
                  dietaryFilter === "all"
                    ? "bg-[#B89B43] text-[#1A1510] shadow"
                    : "text-[#C9B68C] hover:text-[#F8F1E1]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter("veg")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans flex items-center gap-1.5 transition-all ${
                  dietaryFilter === "veg"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-emerald-400 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter("non-veg")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans flex items-center gap-1.5 transition-all ${
                  dietaryFilter === "non-veg"
                    ? "bg-red-700 text-white shadow"
                    : "text-red-400 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Category Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap font-sans transition-all shrink-0 ${
                    isActive
                      ? "gold-btn-gradient text-[#1A1510] shadow-md font-bold"
                      : "bg-[#2A2217] text-[#C9B68C] border border-[#6B4F24]/40 hover:border-[#B89B43] hover:text-[#F8F1E1]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= DISHES CATALOG GRID ================= */}
      <main className="flex-1 py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Results Counter & Active Category Subhead */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-[#3B2E1F]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#F8F1E1]">
              {selectedCategory === "All" ? "Full Digital Menu" : selectedCategory}
            </h2>
            <p className="text-xs text-[#C9B68C] mt-0.5">
              Showing {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {searchQuery || selectedCategory !== "All" || dietaryFilter !== "all" ? (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setDietaryFilter("all");
              }}
              className="text-xs text-[#E7D28A] hover:underline self-start sm:self-auto font-sans"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2A2217] border border-[#6B4F24]/40 mx-auto flex items-center justify-center text-[#B89B43]">
              <Search className="w-8 h-8 opacity-60" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#F8F1E1]">No dishes found</h3>
              <p className="text-xs text-[#C9B68C] max-w-sm mx-auto">
                We couldn&apos;t find any items matching your search or filters. Try adjusting your keywords or category.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setDietaryFilter("all");
              }}
              className="gold-btn-gradient px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => {
              const qty = getCartItemQuantity(dish.id);
              const isJustAdded = justAddedId === dish.id;

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden border border-[#6B4F24]/30 hover:border-[#B89B43]/60 hover:shadow-2xl hover:shadow-[#B89B43]/5 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  {/* Image Container - Hidden on mobile view, visible on sm and desktop */}
                  <div className="hidden sm:block relative aspect-[16/10] overflow-hidden bg-[#2A2217]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1510] via-transparent to-transparent opacity-70" />

                    {/* Dietary Marker (Veg / Non-Veg dot inside square) */}
                    <div className="absolute top-3 left-3">
                      <div
                        className={`w-5 h-5 rounded bg-[#1A1510]/90 backdrop-blur-md p-0.5 border flex items-center justify-center ${
                          dish.isVeg ? "border-emerald-500" : "border-red-500"
                        }`}
                        title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            dish.isVeg ? "bg-emerald-500" : "bg-red-500"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Bestseller / Speciality Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                      {dish.isBestseller && (
                        <span className="px-2 py-0.5 rounded-full bg-[#B89B43] text-[#1A1510] text-[9px] font-bold uppercase tracking-wider shadow">
                          Bestseller
                        </span>
                      )}
                      {dish.isSpeciality && (
                        <span className="px-2 py-0.5 rounded-full bg-[#3B2E1F]/90 backdrop-blur-md border border-[#E7D28A]/40 text-[#E7D28A] text-[9px] font-bold uppercase tracking-wider">
                          Chef Special
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    {/* Mobile-only Dietary marker & Badges */}
                    <div className="sm:hidden flex items-center justify-between gap-2 pb-1 border-b border-[#3B2E1F]/50">
                      <div
                        className={`w-4 h-4 rounded bg-[#1A1510] p-0.5 border flex items-center justify-center ${
                          dish.isVeg ? "border-emerald-500" : "border-red-500"
                        }`}
                        title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            dish.isVeg ? "bg-emerald-500" : "bg-red-500"
                          }`}
                        />
                      </div>

                      <div className="flex items-center gap-1.5">
                        {dish.isBestseller && (
                          <span className="px-2 py-0.5 rounded-full bg-[#B89B43] text-[#1A1510] text-[9px] font-bold uppercase tracking-wider shadow">
                            Bestseller
                          </span>
                        )}
                        {dish.isSpeciality && (
                          <span className="px-2 py-0.5 rounded-full bg-[#3B2E1F] border border-[#E7D28A]/40 text-[#E7D28A] text-[9px] font-bold uppercase tracking-wider">
                            Chef Special
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base font-bold text-[#F8F1E1] group-hover:text-[#E7D28A] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="font-sans text-xs text-[#C9B68C] leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    {/* Price and Add to Order Button */}
                    <div className="pt-3 border-t border-[#6B4F24]/30 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-[#C9B68C] uppercase tracking-wider block font-sans">
                          Price
                        </span>
                        <span className="font-serif text-xl font-bold text-[#E7D28A]">
                          ₹{dish.price}
                        </span>
                      </div>

                      {/* Add Button or Stepper Controls */}
                      {qty === 0 ? (
                        <button
                          onClick={() => handleAddToCart(dish)}
                          className="gold-btn-gradient px-4 py-2 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md group/btn"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#1A1510]" />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 bg-[#2A2217] border border-[#B89B43]/50 rounded-xl p-1 shadow">
                          <button
                            onClick={() => updateQuantity(dish.id, -1)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#C9B68C] hover:text-[#F8F1E1] hover:bg-[#3B2E1F] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#E7D28A]">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity(dish.id, 1)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#C9B68C] hover:text-[#F8F1E1] hover:bg-[#3B2E1F] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* ================= ORDER NOTICE CALLOUT ================= */}
      <section className="bg-[#2A2217]/60 border-t border-[#6B4F24]/30 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89B43]">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Need Assistance with Group Orders or Special Catering?</span>
          </div>
          <p className="text-xs text-[#C9B68C] font-sans leading-relaxed">
            Connect directly with Tasty Restaurant, BTM Layout on WhatsApp at{" "}
            <a
              href={`https://wa.me/${RESTAURANT_CONFIG.activeWhatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7D28A] underline font-semibold"
            >
              +91 89045 16291
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/\s+/g, "")}`}
              className="text-[#E7D28A] underline font-semibold"
            >
              {RESTAURANT_CONFIG.primaryPhone}
            </a>
            . We prepare party mandi platters and fresh tandoori orders on request.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
