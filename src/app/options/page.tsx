"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { ProgressStepper } from "@/components/ProgressStepper";
import { ItineraryOption } from "@/components/ItineraryOption";
import { itineraryOptions } from "@/data/itineraries";

export default function OptionsPage() {
  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <ProgressStepper currentStep={4} />

          {/* Title */}
          <div className="mb-10 text-center">
            <h1
              className="mb-3 text-4xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Options
            </h1>
            <p
              className="text-base text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We found 3 ways to do Tokyo — optimized for your cards and points
            </p>
          </div>

          {/* Itinerary cards grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {itineraryOptions.map((option, i) => (
              <ItineraryOption key={option.id} option={option} index={i} />
            ))}
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-3"
          >
            <Link
              href="/plan"
              className="group flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
