"use client";

import { motion } from "motion/react";
import type { CreditCard as CreditCardType } from "@/data/cards";

interface CreditCardProps {
  card: CreditCardType;
  pointsBalance?: string;
}

export function CreditCard({ card, pointsBalance }: CreditCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Card visual */}
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative cursor-default overflow-hidden rounded-2xl p-6 flex flex-col"
        style={{
          background: card.color,
          aspectRatio: "1.586 / 1",
          color: card.textColor,
        }}
      >
        {/* Top row: logo + annual fee */}
        <div className="flex items-start justify-between">
          <img
            src={card.logo}
            alt={card.issuer}
            className="h-10 opacity-90"
            style={{ filter: card.textColor === "#ffffff" ? "brightness(10)" : "none" }}
          />
          <span className="text-xs opacity-50 whitespace-nowrap">
            {card.annualFee}/yr
          </span>
        </div>

        {/* Card name */}
        <p
          className="mt-2 text-sm font-medium tracking-wide opacity-80"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {card.name}
        </p>

        {/* Chip + contactless */}
        <div className="mt-4 flex items-center gap-3">
          <div className="card-chip" />
          {/* Contactless icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          >
            <path d="M8.5 16.5a5 5 0 0 1 0-9" />
            <path d="M12 19a9 9 0 0 1 0-14" />
            <path d="M15.5 16.5a5 5 0 0 0 0-9" />
          </svg>
        </div>

        {/* Bottom row: card number + points balance */}
        <div className="mt-auto flex items-end justify-between">
          <p
            className="text-base tracking-[0.2em] opacity-90"
            style={{ fontFamily: "monospace" }}
          >
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {card.lastFour}
          </p>
          {pointsBalance && (
            <span className="text-xs font-medium opacity-70 whitespace-nowrap">
              {pointsBalance}
            </span>
          )}
        </div>
      </motion.div>

      {/* Perks */}
      <div className="flex flex-wrap gap-2">
        {card.perks.map((perk) => (
          <span
            key={perk}
            className="rounded-full border border-[var(--border-medium)] bg-[var(--bg-surface)] px-3 py-1 text-xs text-[var(--text-secondary)]"
          >
            {perk}
          </span>
        ))}
      </div>

      {/* Earning rates */}
      <div className="flex flex-wrap gap-1.5">
        {card.earningRates.map((rate) => (
          <span
            key={rate.category}
            className="rounded-md bg-[var(--accent)]/10 px-2 py-0.5 text-xs font-medium text-[var(--accent)]"
          >
            {rate.multiplier} {rate.category}
          </span>
        ))}
      </div>
    </div>
  );
}
