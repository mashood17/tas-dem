import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Tasty Restaurant | Premium Dining, Mandi & Tandoori in BTM Layout, Bengaluru",
  description:
    "Experience rich Indian flavours, authentic Mandi platters, tandoori specialities, and Asian favourites at Tasty Restaurant, BTM Layout, Maruthi Nagar, Bengaluru. Meal Shared Is A Memory Made!",
  keywords: [
    "Tasty Restaurant",
    "BTM Layout Restaurant",
    "Mandi Bengaluru",
    "Indian Fine Dining",
    "Tandoori Specialities",
    "Maruthi Nagar Restaurant",
    "Best Restaurant BTM Stage 1",
  ],
  authors: [{ name: "Tasty Restaurant" }],
  openGraph: {
    title: "Tasty Restaurant | BTM Layout, Bengaluru",
    description: "Meal Shared Is A Memory Made! Discover rich flavours and authentic Mandi & Tandoori specialities.",
    url: "https://tastyrestaurant.in",
    siteName: "Tasty Restaurant",
    images: [
      {
        url: "/images/hero_mandi.jpg",
        width: 1200,
        height: 630,
        alt: "Tasty Restaurant Mandi Feast",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1510",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased selection:bg-[#B89B43] selection:text-[#1A1510]`}
    >
      <body className="min-h-full bg-[#1A1510] text-[#F8F1E1] font-sans overflow-x-hidden">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
