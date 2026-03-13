"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { ProgressStepper } from "@/components/ProgressStepper";
import { CreditCard } from "@/components/CreditCard";
import { cards } from "@/data/cards";

const pointsBalances: Record<string, string> = {
  "chase-sapphire-reserve": "48,200 pts",
  "amex-gold": "32,150 pts",
  "capital-one-venture-x": "18,600 pts",
};

export default function CardsPage() {
  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <ProgressStepper currentStep={1} />

          {/* Header */}
          <div className="mb-10">
            <h1
              className="text-4xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Cards
            </h1>
            <p className="mt-2 text-lg text-[var(--text-secondary)]">
              We&apos;ll optimize rewards across your portfolio
            </p>
          </div>

          {/* Card grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <CreditCard card={card} pointsBalance={pointsBalances[card.id]} />
              </motion.div>
            ))}
          </div>

          {/* Add Card ghost button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--border-medium)] py-5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--text-secondary)]"
          >
            <Plus className="h-4 w-4" />
            Add Card
          </motion.button>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex items-center gap-3"
          >
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
            <Link
              href="/loyalty"
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,170,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #00a3ff 100%)",
              }}
            >
              Next
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
