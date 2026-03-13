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
  Shield,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Zap,
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

          {/* Trust Level */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-5 flex items-center gap-2.5"
            >
              <Shield className="h-5 w-5 text-accent" />
              <h2
                className="text-xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Booking Autonomy
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.65 }}
              className="glass rounded-xl p-5"
            >
              {/* Trust meter */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Level 2</span>
                </div>
                <span className="text-xs text-muted">of 4</span>
                <div className="flex-1 h-2 rounded-full bg-border-medium overflow-hidden">
                  <div className="h-full rounded-full w-1/2" style={{ background: "linear-gradient(90deg, var(--accent), #00a3ff)" }} />
                </div>
              </div>

              {/* Trust tiers */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { level: 1, label: "Browse", desc: "View & compare", active: true, icon: Shield },
                  { level: 2, label: "Assisted", desc: "Auto-book under $200", active: true, icon: ShieldCheck },
                  { level: 3, label: "Trusted", desc: "Book full itineraries", active: false, icon: ShieldCheck },
                  { level: 4, label: "Autonomous", desc: "Rebook & adjust live", active: false, icon: ShieldAlert },
                ].map((tier) => {
                  const TierIcon = tier.icon;
                  return (
                    <div
                      key={tier.level}
                      className={`rounded-lg border p-3 text-center transition-colors ${
                        tier.active
                          ? "border-accent/30 bg-accent/8"
                          : "border-border-medium bg-surface opacity-50"
                      }`}
                    >
                      <TierIcon className={`mx-auto h-4 w-4 mb-1.5 ${tier.active ? "text-accent" : "text-dimmed"}`} />
                      <p className={`text-xs font-semibold ${tier.active ? "text-foreground" : "text-muted"}`}>{tier.label}</p>
                      <p className="text-[10px] text-dimmed mt-0.5">{tier.desc}</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-xs text-muted">
                Items under $200 will be auto-booked. Larger purchases require your confirmation.
                Complete 3 more trips to unlock Level 3.
              </p>
            </motion.div>
          </section>

          {/* Card Upsell */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 rounded-xl border border-[#a855f7]/25 p-5"
            style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(0,212,170,0.04) 100%)" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/15">
                <Zap className="h-5 w-5 text-[#a855f7]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">
                  You could save an extra $340 on this trip
                </p>
                <p className="mt-1 text-xs text-muted">
                  The <span className="font-medium text-foreground">Amex Platinum</span> earns 5x on flights booked directly — that&apos;s 1,720 more MR points on your Tokyo flights, plus access to Centurion Lounges at JFK.
                </p>
                <button className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-2 text-xs font-medium text-[#a855f7] transition-colors hover:bg-[#a855f7]/20 cursor-pointer">
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </button>
                <span className="ml-3 text-[10px] text-dimmed">Sponsored</span>
              </div>
            </div>
          </motion.div>

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
