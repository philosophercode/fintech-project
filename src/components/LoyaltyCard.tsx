"use client";

import { motion } from "motion/react";
import type { LoyaltyProgram } from "@/data/loyalty";

interface LoyaltyCardProps {
  program: LoyaltyProgram;
}

export function LoyaltyCard({ program }: LoyaltyCardProps) {
  const formattedBalance = program.balance.toLocaleString();
  const formattedValue = program.estimatedValue.toLocaleString();

  return (
    <motion.div
      whileHover={{
        boxShadow: `0 0 24px ${program.color}20, 0 0 48px ${program.color}10`,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-2xl bg-[var(--bg-surface)] p-5 sm:p-6 cursor-default"
      style={{ borderLeft: `3px solid ${program.color}` }}
    >
      {/* Top row: logo + name + badge */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={program.logo}
          alt={program.name}
          className="h-5 sm:h-6 shrink-0 opacity-90"
        />
        <div className="min-w-0 flex-1">
          <h3
            className="text-sm sm:text-base font-semibold text-[var(--text-primary)] truncate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {program.name}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {program.provider}
          </p>
        </div>
        <span
          className="shrink-0 rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium"
          style={{
            border: `1px solid ${program.color}`,
            color: "#f0f0f5",
          }}
        >
          {program.centsPerPoint}&cent;/pt
        </span>
      </div>

      {/* Bottom row: balance + value */}
      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-[var(--text-primary)]">
          <span
            className="text-xl sm:text-2xl font-bold tabular-nums"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {formattedBalance}
          </span>{" "}
          <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {program.unit}
          </span>
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          &asymp; ${formattedValue} value
        </p>
      </div>
    </motion.div>
  );
}
