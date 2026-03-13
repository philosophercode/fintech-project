"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { ProgressStepper } from "@/components/ProgressStepper";
import { LoyaltyCard } from "@/components/LoyaltyCard";
import { loyaltyPrograms } from "@/data/loyalty";

export default function LoyaltyPage() {
  const totalValue = loyaltyPrograms.reduce(
    (sum, p) => sum + p.estimatedValue,
    0,
  );
  const totalPoints = loyaltyPrograms.reduce(
    (sum, p) => sum + p.balance,
    0,
  );

  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <ProgressStepper currentStep={2} />

          {/* Header */}
          <div className="mb-10">
            <h1
              className="text-4xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Loyalty Programs
            </h1>
            <p className="mt-2 text-lg text-[var(--text-secondary)]">
              We&apos;ll find the best redemption opportunities
            </p>
          </div>

          {/* Loyalty cards */}
          <div className="flex flex-col gap-4">
            {loyaltyPrograms.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <LoyaltyCard program={program} />
              </motion.div>
            ))}
          </div>

          {/* Total portfolio summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 rounded-xl border border-[var(--border-medium)] bg-[var(--accent)]/5 px-6 py-4"
          >
            <p className="text-sm text-[var(--text-secondary)]">
              Total estimated value:{" "}
              <span className="font-semibold text-[var(--accent)]">
                ${totalValue.toLocaleString()}
              </span>{" "}
              across{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                {totalPoints.toLocaleString()} points &amp; miles
              </span>
            </p>
          </motion.div>

          {/* Add Program ghost button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--border-medium)] py-5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--text-secondary)]"
          >
            <Plus className="h-4 w-4" />
            Add Program
          </motion.button>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex items-center gap-3"
          >
            <Link
              href="/cards"
              className="group flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
            <Link
              href="/plan"
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,170,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #00a3ff 100%)",
              }}
            >
              Start Planning
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
