"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  PlaneTakeoff,
  Calendar,
  Users,
  DollarSign,
  Plane,
  Footprints,
  Moon,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Minus,
  Plus,
} from "lucide-react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { PageTransition } from "@/components/PageTransition";

const preferences = [
  { label: "Nonstop flights", icon: Plane },
  { label: "Walkable hotel", icon: Footprints },
  { label: "No redeyes", icon: Moon },
  { label: "Near Shibuya", icon: MapPin },
];

function Field({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function PlanPage() {
  const [dreamTrip, setDreamTrip] = useState(
    "A 5-night trip to Tokyo for two — mix of culture, food, and shopping. Want to maximize our credit card points and stay somewhere walkable near Shibuya."
  );
  const [departure, setDeparture] = useState("New York, NY (JFK)");
  const [destination, setDestination] = useState("Tokyo, Japan");
  const [departDate, setDepartDate] = useState("2026-04-12");
  const [returnDate, setReturnDate] = useState("2026-04-17");
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(4000);
  const [activePrefs, setActivePrefs] = useState<Set<string>>(
    new Set(preferences.map((p) => p.label))
  );

  const togglePref = (label: string) => {
    setActivePrefs((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  // Calculate nights between dates
  const nights = Math.max(
    0,
    Math.round(
      (new Date(returnDate).getTime() - new Date(departDate).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  // Budget slider percentage (range 1000–10000)
  const budgetPct = ((budget - 1000) / (10000 - 1000)) * 100;

  return (
    <PageTransition>
      <div className="pt-24 px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <ProgressStepper currentStep={3} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-center"
          >
            <h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Plan Your Trip
            </h1>
            <p
              className="mt-3 text-lg text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tell us what you&apos;re looking for
            </p>
          </motion.div>

          {/* Form Card */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5">
            {/* Dream Trip */}
            <Field index={0}>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-muted">
                <MessageSquare className="h-4 w-4 text-accent" />
                Describe your dream trip
              </label>
              <textarea
                value={dreamTrip}
                onChange={(e) => setDreamTrip(e.target.value)}
                rows={3}
                placeholder="e.g. A week in Bali for our anniversary — beaches, temples, great food..."
                className="w-full rounded-xl border border-border-medium bg-surface px-4 py-3.5 text-foreground placeholder:text-dimmed focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 resize-none transition-colors"
              />
            </Field>

            {/* From / To */}
            <Field index={1}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                From
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-border-medium bg-surface px-4 py-3.5 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/50 transition-colors">
                <PlaneTakeoff className="h-5 w-5 shrink-0 text-accent" />
                <input
                  type="text"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  placeholder="Departure city or airport"
                  className="flex-1 bg-transparent text-foreground placeholder:text-dimmed focus:outline-none"
                />
              </div>
            </Field>

            <Field index={2}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                To
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-border-medium bg-surface px-4 py-3.5 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/50 transition-colors">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="flex-1 bg-transparent text-foreground placeholder:text-dimmed focus:outline-none"
                />
              </div>
            </Field>

            {/* Dates */}
            <Field index={3}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                Dates
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-border-medium bg-surface px-4 py-3.5 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/50 transition-colors">
                  <Calendar className="h-5 w-5 shrink-0 text-accent" />
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="flex-1 bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
                  />
                </div>
                <span className="shrink-0 self-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {nights} night{nights !== 1 ? "s" : ""}
                </span>
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-border-medium bg-surface px-4 py-3.5 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/50 transition-colors">
                  <Calendar className="h-5 w-5 shrink-0 text-accent" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="flex-1 bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
                  />
                </div>
              </div>
            </Field>

            {/* Travelers */}
            <Field index={4}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                Travelers
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-border-medium bg-surface px-4 py-3.5">
                <Users className="h-5 w-5 shrink-0 text-accent" />
                <span className="flex-1 text-foreground">
                  {travelers}{" "}
                  <span className="text-muted">
                    Adult{travelers !== 1 ? "s" : ""}
                  </span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-medium bg-surface-raised text-muted transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/30 active:scale-95"
                    aria-label="Remove traveler"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTravelers((t) => Math.min(10, t + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-medium bg-surface-raised text-muted transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/30 active:scale-95"
                    aria-label="Add traveler"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Field>

            {/* Budget */}
            <Field index={5}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                Budget
              </label>
              <div className="rounded-xl border border-border-medium bg-surface px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground font-medium">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                {/* Interactive slider */}
                <div className="relative mt-3">
                  <input
                    type="range"
                    min={1000}
                    max={10000}
                    step={100}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="budget-slider w-full cursor-pointer"
                    style={
                      {
                        "--budget-pct": `${budgetPct}%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div className="mt-1.5 flex justify-between text-xs text-dimmed">
                  <span>$1,000</span>
                  <span>$10,000</span>
                </div>
              </div>
            </Field>

            {/* Preferences */}
            <Field index={6}>
              <label className="mb-1.5 block text-sm font-medium text-muted">
                Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {preferences.map((pref) => {
                  const Icon = pref.icon;
                  const isActive = activePrefs.has(pref.label);
                  return (
                    <button
                      key={pref.label}
                      type="button"
                      onClick={() => togglePref(pref.label)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium border transition-all duration-200 active:scale-95 cursor-pointer ${
                        isActive
                          ? "bg-accent/15 text-accent border-accent/25"
                          : "bg-surface text-dimmed border-border-medium hover:text-muted hover:border-border-medium/80"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {pref.label}
                    </button>
                  );
                })}
              </div>
            </Field>

          </div>

          {/* CTA row — outside the form card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex items-center gap-3"
          >
            <Link
              href="/loyalty"
              className="group flex items-center gap-2 rounded-xl border border-border-medium bg-surface px-5 py-4 text-sm font-semibold text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground hover:border-border-medium/80"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
            <Link
              href="/options"
              className="group flex flex-1 items-center justify-center gap-2.5 rounded-xl py-4 text-base font-semibold text-[#0A0A0F] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,170,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #00a3ff 100%)",
              }}
            >
              <Sparkles className="h-5 w-5" />
              Find My Options
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Budget slider styles */}
      <style jsx global>{`
        .budget-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            var(--accent) 0%,
            #00a3ff var(--budget-pct),
            var(--border-subtle) var(--budget-pct),
            var(--border-subtle) 100%
          );
          outline: none;
        }
        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--accent);
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0, 212, 170, 0.3);
          transition: box-shadow 0.2s;
        }
        .budget-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 16px rgba(0, 212, 170, 0.5);
        }
        .budget-slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--accent);
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0, 212, 170, 0.3);
        }
        .budget-slider::-moz-range-track {
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            var(--accent) 0%,
            #00a3ff var(--budget-pct),
            var(--border-subtle) var(--budget-pct),
            var(--border-subtle) 100%
          );
        }
      `}</style>
    </PageTransition>
  );
}
