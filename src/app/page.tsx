"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Clock, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Hours",
    description:
      "Replace 12+ browser tabs with one guided conversation",
  },
  {
    icon: CreditCard,
    title: "Maximize Rewards",
    description:
      "Optimize across your cards and loyalty points automatically",
  },
  {
    icon: ShieldCheck,
    title: "Stay in Control",
    description:
      "You approve every booking. Start small, build trust.",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="mesh-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Travel-themed decorative line art */}
        {/* Airplane */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "8%", left: "6%", opacity: 0.045, transform: "rotate(-15deg)" }}
          width="160"
          height="160"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M56 8L28 36M56 8l-8 48-12-20M56 8L8 20l20 12M28 36l-4 20 8-12" />
        </svg>
        {/* Globe */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "12%", right: "8%", opacity: 0.04 }}
          width="180"
          height="180"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="32" cy="32" r="28" />
          <ellipse cx="32" cy="32" rx="12" ry="28" />
          <path d="M6 22h52M6 42h52M4 32h56" />
        </svg>
        {/* Compass */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ bottom: "18%", left: "10%", opacity: 0.04 }}
          width="140"
          height="140"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="32" cy="32" r="28" />
          <circle cx="32" cy="32" r="3" />
          <path d="M32 4v8M32 52v8M4 32h8M52 32h8" />
          <polygon points="24,24 32,14 40,24 32,34" />
          <polygon points="24,40 32,50 40,40 32,30" />
        </svg>
        {/* Suitcase */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "35%", right: "5%", opacity: 0.035, transform: "rotate(8deg)" }}
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="10" y="20" width="44" height="34" rx="4" />
          <path d="M22 20V14a4 4 0 014-4h12a4 4 0 014 4v6" />
          <line x1="10" y1="34" x2="54" y2="34" />
          <line x1="28" y1="28" x2="36" y2="28" />
          <line x1="28" y1="40" x2="36" y2="40" />
        </svg>
        {/* Palm tree */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ bottom: "12%", right: "14%", opacity: 0.04, transform: "rotate(5deg)" }}
          width="150"
          height="150"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 58V28" />
          <path d="M32 28c-6-10-20-10-24-6 8-2 16 0 24 6z" />
          <path d="M32 28c6-10 20-10 24-6-8-2-16 0-24 6z" />
          <path d="M32 24c-2-12-14-16-20-14 6 2 14 6 20 14z" />
          <path d="M32 24c2-12 14-16 20-14-6 2-14 6-20 14z" />
          <path d="M26 58h12" />
        </svg>
        {/* Map pin */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "55%", left: "4%", opacity: 0.035 }}
          width="100"
          height="100"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 56S12 36 12 24a20 20 0 1140 0c0 12-20 32-20 32z" />
          <circle cx="32" cy="24" r="8" />
        </svg>
        {/* Sun */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "5%", left: "42%", opacity: 0.035 }}
          width="100"
          height="100"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="32" cy="32" r="12" />
          <line x1="32" y1="4" x2="32" y2="14" />
          <line x1="32" y1="50" x2="32" y2="60" />
          <line x1="4" y1="32" x2="14" y2="32" />
          <line x1="50" y1="32" x2="60" y2="32" />
          <line x1="12.2" y1="12.2" x2="19.3" y2="19.3" />
          <line x1="44.7" y1="44.7" x2="51.8" y2="51.8" />
          <line x1="12.2" y1="51.8" x2="19.3" y2="44.7" />
          <line x1="44.7" y1="19.3" x2="51.8" y2="12.2" />
        </svg>
        {/* Waves */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ bottom: "6%", left: "30%", opacity: 0.04 }}
          width="200"
          height="80"
          viewBox="0 0 100 40"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 20c10-10 20 0 30-10s20 0 30-10 20 0 30-10" />
          <path d="M0 30c10-10 20 0 30-10s20 0 30-10 20 0 30-10" />
          <path d="M0 40c10-10 20 0 30-10s20 0 30-10 20 0 30-10" />
        </svg>
        {/* Passport */}
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{ top: "22%", left: "18%", opacity: 0.03, transform: "rotate(-8deg)" }}
          width="90"
          height="90"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12" y="6" width="40" height="52" rx="4" />
          <circle cx="32" cy="28" r="10" />
          <line x1="22" y1="28" x2="42" y2="28" />
          <ellipse cx="32" cy="28" rx="5" ry="10" />
          <line x1="20" y1="46" x2="44" y2="46" />
        </svg>

        {/* Decorative orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,170,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(0,163,255,0.15) 0%, transparent 70%)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-text relative z-10 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your AI Travel Agent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="relative z-10 mt-6 max-w-xl text-lg text-muted sm:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Smarter trips. Better rewards. One conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 mt-10"
        >
          <Link
            href="/cards"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_28px_rgba(0,212,170,0.35)]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border-2 border-muted/40 flex items-start justify-center pt-1.5"
          >
            <div className="h-1.5 w-1 rounded-full bg-muted/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 0 32px rgba(0,212,170,0.10)",
                }}
                className="glass group cursor-default rounded-2xl p-8 transition-colors duration-200 hover:border-accent/30"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
