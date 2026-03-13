"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Map,
  CreditCard,
  CheckCircle,
  Calendar,
  Share2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { PageTransition } from "@/components/PageTransition";
import { DayAccordion } from "@/components/DayAccordion";
import { PaymentBreakdown } from "@/components/PaymentBreakdown";
import { tripDays } from "@/data/trip";

const confirmations = [
  { label: "United Airlines", code: "CONF-UA79X2K" },
  { label: "Tokyo Marriott", code: "CONF-MBV892L" },
  { label: "Activities", code: "CONF-TL2026A" },
];

export default function TripPage() {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <ProgressStepper currentStep={5} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Tokyo Trip
            </h1>
            <p
              className="mt-3 text-lg text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Apr 12&ndash;17, 2026 &middot; 2 travelers
            </p>
          </motion.div>

          {/* A - Itinerary */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-5 flex items-center gap-2.5"
            >
              <Map className="h-5 w-5 text-accent" />
              <h2
                className="text-xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Itinerary
              </h2>
            </motion.div>

            <div className="space-y-3">
              {tripDays.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <DayAccordion
                    day={day}
                    defaultOpen={day.day === 1}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* B - Payment */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-5 flex items-center gap-2.5"
            >
              <CreditCard className="h-5 w-5 text-accent" />
              <h2
                className="text-xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Payment Optimization
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
            >
              <PaymentBreakdown />
            </motion.div>
          </section>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/options"
              className="group inline-flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
          </motion.div>

          {/* C - Booking */}
          <section>
            <AnimatePresence mode="wait">
              {!isBooked ? (
                <motion.div
                  key="book-btn"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                >
                  <button
                    onClick={() => setIsBooked(true)}
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,170,0.3)] cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent) 0%, #00a3ff 100%)",
                    }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    Confirm &amp; Book
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Animated checkmark */}
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                      }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--green)]/15"
                    >
                      <CheckCircle className="h-10 w-10 text-[var(--green)]" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-3xl font-bold text-foreground sm:text-4xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Trip Booked!
                    </motion.h2>
                  </div>

                  {/* Confirmation cards */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    {confirmations.map((conf, i) => (
                      <motion.div
                        key={conf.code}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
                        className="rounded-xl border border-border bg-surface p-4 text-center"
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-muted">
                          {conf.label}
                        </p>
                        <p className="mt-1.5 font-mono text-sm font-semibold text-accent">
                          {conf.code}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.35 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <button className="flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover cursor-pointer">
                      <Calendar className="h-4 w-4 text-accent" />
                      Add to Calendar
                    </button>
                    <button className="flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover cursor-pointer">
                      <Share2 className="h-4 w-4 text-accent" />
                      Share Itinerary
                    </button>
                  </motion.div>

                  {/* Concierge nudge */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="glass rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" aria-hidden>
                        🌸
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          Cherry Blossom Festival peaks during your trip &mdash;
                          want to add Ueno Park + a guided walking tour?
                        </p>
                        <button className="mt-3 flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 cursor-pointer">
                          <Sparkles className="h-3.5 w-3.5" />
                          Add to Itinerary
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
