"use client";

import React from "react";

interface TastyLogoProps {
  className?: string;
  variant?: "white" | "gold";
  size?: number;
}

export default function TastyLogo({
  className = "w-10 h-10",
  variant = "gold",
  size = 120,
}: TastyLogoProps) {
  const isGold = variant === "gold";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className="w-full h-full object-contain filter drop-shadow-md"
      >
        <defs>
          <linearGradient id="logoGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8F1E1" />
            <stop offset="35%" stopColor="#E7D28A" />
            <stop offset="70%" stopColor="#B89B43" />
            <stop offset="100%" stopColor="#6B4F24" />
          </linearGradient>

          <path id="logoTopArc" d="M 65,250 A 185,185 0 1,1 435,250" fill="none" />
          <path id="logoBottomArc" d="M 425,250 A 175,175 0 0,1 75,250" fill="none" />
        </defs>

        <g
          id="logo-vector-root"
          fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
          stroke={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
        >
          {/* Outer Ring */}
          <circle cx="250" cy="250" r="235" fill="none" strokeWidth="4" opacity="0.9" />
          <circle cx="250" cy="250" r="227" fill="none" strokeWidth="1.5" opacity="0.6" />

          {/* Inner Ring */}
          <circle cx="250" cy="250" r="162" fill="none" strokeWidth="3" opacity="0.8" />
          <circle cx="250" cy="250" r="156" fill="none" strokeWidth="1" opacity="0.5" />

          {/* Arc Text: TASTY RESTAURANT */}
          <text
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="28"
            fontWeight="700"
            fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
            stroke="none"
            letterSpacing="9.5"
          >
            <textPath href="#logoTopArc" startOffset="50%" textAnchor="middle">
              TASTY RESTAURANT
            </textPath>
          </text>

          {/* Arc Text: SINCE 2003 */}
          <text
            fontFamily="'Manrope', sans-serif"
            fontSize="20"
            fontWeight="500"
            fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
            stroke="none"
            letterSpacing="7"
          >
            <textPath href="#logoBottomArc" startOffset="50%" textAnchor="middle">
              SINCE 2003
            </textPath>
          </text>

          {/* Monogram TR with Knife & Spoon */}
          <g transform="translate(115, 105)">
            {/* Outer Crescent Arc */}
            <path
              d="M 125 25 C 40 25, -5 90, 10 170 C 20 220, 70 260, 135 260 C 185 260, 220 235, 235 200"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Knife Silhouette */}
            <path
              d="M 68, 70 L 68, 230 C 68, 235 64, 238 60, 235 C 57, 215 54, 150 56, 110 C 58, 85 64, 75 68, 70 Z"
              fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
              stroke="none"
            />

            {/* T Horizontal Bar */}
            <path
              d="M 45 70 C 45 65, 80 62, 195 62 C 200 62, 202 68, 195 72 C 170 82, 150 78, 130 78 L 85 78 L 85 235 C 85 240, 78 240, 78 235 L 78 78 L 45 78 Z"
              fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
              stroke="none"
            />

            {/* Spoon Silhouette inside R loop */}
            <ellipse
              cx="148"
              cy="120"
              rx="14"
              ry="24"
              fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
              stroke="none"
            />
            <path
              d="M 146 142 L 146 220 C 146 223 150 223 150 220 L 150 142 Z"
              fill={isGold ? "url(#logoGoldGradient)" : "#F8F1E1"}
              stroke="none"
            />

            {/* R Loop & Flourish Tail */}
            <path
              d="M 105 85 C 150 78, 205 95, 200 145 C 195 185, 145 190, 105 185"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 130 185 C 155 185, 195 210, 230 235 C 242 243, 252 245, 260 242"
              fill="none"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
