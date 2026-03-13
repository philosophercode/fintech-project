"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Map,
  CreditCard,
  Shield,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { PageTransition } from "@/components/PageTransition";
import { DayAccordion } from "@/components/DayAccordion";
import { PaymentBreakdown } from "@/components/PaymentBreakdown";
import { tripDays } from "@/data/trip";

export default function TripPage() {
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

          {/* C - Trust Level */}
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

          {/* D - Card Upsell */}
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

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <Link
              href="/options"
              className="group flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
            <Link
              href="/book"
              className="group flex flex-1 items-center justify-center gap-2.5 rounded-xl py-4 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,170,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #00a3ff 100%)",
              }}
            >
              <CheckCircle className="h-5 w-5" />
              Confirm &amp; Book
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
