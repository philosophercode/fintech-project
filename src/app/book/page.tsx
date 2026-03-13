"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle,
  Circle,
  Plane,
  Hotel,
  Camera,
  Train,
  Calendar,
  Share2,
  Sparkles,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { PageTransition } from "@/components/PageTransition";

interface BookingItem {
  id: string;
  label: string;
  detail: string;
  amount: string;
  icon: typeof Plane;
  autoBooked: boolean;
}

const bookingItems: BookingItem[] = [
  {
    id: "activities",
    label: "Activities & Tickets",
    detail: "TeamLab Borderless, Hakone Pass, Shibuya Sky, Gonpachi dinner",
    amount: "$180",
    icon: Camera,
    autoBooked: true,
  },
  {
    id: "transport",
    label: "Ground Transport",
    detail: "Narita Express × 2, Shinkansen to Hakone, local transit",
    amount: "$95",
    icon: Train,
    autoBooked: true,
  },
  {
    id: "flights",
    label: "Flights — United UA 79/78",
    detail: "JFK → NRT nonstop · 2 pax · 140K United miles",
    amount: "140K + $172",
    icon: Plane,
    autoBooked: false,
  },
  {
    id: "hotel",
    label: "Hotel — Tokyo Marriott",
    detail: "Deluxe Room · 5 nights · 200K Bonvoy pts",
    amount: "200K pts",
    icon: Hotel,
    autoBooked: false,
  },
];

const confirmations = [
  { label: "United Airlines", code: "CONF-UA79X2K" },
  { label: "Tokyo Marriott", code: "CONF-MBV892L" },
  { label: "Activities", code: "CONF-TL2026A" },
];

export default function BookPage() {
  const [autoBookedIds, setAutoBookedIds] = useState<Set<string>>(new Set());
  const [confirmedIds, setConfirmedIds] = useState<Set<string>>(new Set());
  const [allDone, setAllDone] = useState(false);

  // Auto-book items under $200 with staggered animation
  useEffect(() => {
    const autoItems = bookingItems.filter((item) => item.autoBooked);
    autoItems.forEach((item, i) => {
      setTimeout(() => {
        setAutoBookedIds((prev) => new Set(prev).add(item.id));
      }, 800 + i * 600);
    });
  }, []);

  const manualItems = bookingItems.filter((item) => !item.autoBooked);
  const autoItems = bookingItems.filter((item) => item.autoBooked);
  const allManualConfirmed = manualItems.every((item) => confirmedIds.has(item.id));

  const handleConfirm = (id: string) => {
    setConfirmedIds((prev) => new Set(prev).add(id));
  };

  // Trigger celebration when all manual items confirmed
  useEffect(() => {
    if (allManualConfirmed && confirmedIds.size > 0) {
      const timer = setTimeout(() => setAllDone(true), 500);
      return () => clearTimeout(timer);
    }
  }, [allManualConfirmed, confirmedIds.size]);

  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <ProgressStepper currentStep={6} />

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
              Confirm Your Booking
            </h1>
            <p
              className="mt-3 text-lg text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Apr 12&ndash;17, 2026 &middot; Tokyo &middot; 2 travelers
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!allDone ? (
              <motion.div
                key="booking-flow"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Auto-booked section */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <Shield className="h-5 w-5 text-accent" />
                    <h2 className="text-base font-semibold text-foreground">
                      Auto-Booked
                    </h2>
                    <span className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      Level 2 — items under $200
                    </span>
                  </div>

                  <div className="space-y-3">
                    {autoItems.map((item) => {
                      const Icon = item.icon;
                      const isBooked = autoBookedIds.has(item.id);
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
                            isBooked
                              ? "border-[var(--green)]/30 bg-[var(--green)]/5"
                              : "border-border-medium bg-surface"
                          }`}
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                            isBooked ? "bg-[var(--green)]/15" : "bg-surface-hover"
                          }`}>
                            <Icon className={`h-5 w-5 transition-colors duration-500 ${isBooked ? "text-[var(--green)]" : "text-muted"}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{item.label}</p>
                            <p className="text-xs text-muted truncate">{item.detail}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-semibold text-foreground">{item.amount}</p>
                          </div>
                          <div className="shrink-0 w-6">
                            <AnimatePresence mode="wait">
                              {isBooked ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0, rotate: -90 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                  <CheckCircle className="h-5 w-5 text-[var(--green)]" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="pending"
                                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <Circle className="h-5 w-5 text-dimmed" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Manual confirmation section */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <h2 className="text-base font-semibold text-foreground">
                      Needs Your Approval
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {manualItems.map((item) => {
                      const Icon = item.icon;
                      const isConfirmed = confirmedIds.has(item.id);
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className={`rounded-xl border p-4 transition-all duration-500 ${
                            isConfirmed
                              ? "border-[var(--green)]/30 bg-[var(--green)]/5"
                              : "border-border-medium bg-surface"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                              isConfirmed ? "bg-[var(--green)]/15" : "bg-surface-hover"
                            }`}>
                              <Icon className={`h-5 w-5 transition-colors duration-500 ${isConfirmed ? "text-[var(--green)]" : "text-muted"}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                              <p className="text-xs text-muted truncate">{item.detail}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-sm font-semibold text-foreground whitespace-nowrap">{item.amount}</p>
                            </div>
                            <div className="shrink-0">
                              <AnimatePresence mode="wait">
                                {isConfirmed ? (
                                  <motion.div
                                    key="confirmed"
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  >
                                    <CheckCircle className="h-5 w-5 text-[var(--green)]" />
                                  </motion.div>
                                ) : (
                                  <motion.button
                                    key="btn"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => handleConfirm(item.id)}
                                    className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/20 cursor-pointer whitespace-nowrap"
                                  >
                                    Confirm
                                  </motion.button>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Back button */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/trip"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    Back
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="celebration"
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
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="text-muted"
                  >
                    4 items booked &middot; $447 cash &middot; $3,588 saved vs. all-cash
                  </motion.p>
                </div>

                {/* Confirmation cards */}
                <div className="grid gap-3 sm:grid-cols-3">
                  {confirmations.map((conf, i) => (
                    <motion.div
                      key={conf.code}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
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
                  transition={{ delay: 0.75, duration: 0.35 }}
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
                  transition={{ delay: 0.9, duration: 0.4 }}
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
        </div>
      </div>
    </PageTransition>
  );
}
