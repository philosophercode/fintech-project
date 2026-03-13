"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plane,
  Train,
  Hotel,
  UtensilsCrossed,
  Camera,
  MapPin,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import type { TripDay } from "@/data/trip";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  train: Train,
  hotel: Hotel,
  utensils: UtensilsCrossed,
  camera: Camera,
  "map-pin": MapPin,
  "shopping-bag": ShoppingBag,
};

interface DayAccordionProps {
  day: TripDay;
  defaultOpen?: boolean;
}

export function DayAccordion({ day, defaultOpen = false }: DayAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-surface-hover"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-accent">
            Day {day.day}
          </span>
          <span className="text-sm text-muted">{day.date}</span>
          <span className="text-sm font-medium text-foreground">
            {day.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="h-4 w-4 text-muted" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 pb-4 pt-3 space-y-3">
              {day.activities.map((activity, i) => {
                const Icon = iconMap[activity.icon] ?? MapPin;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg px-2 py-2 transition-colors hover:bg-surface-hover"
                  >
                    <span className="w-20 shrink-0 pt-0.5 text-xs font-medium text-muted">
                      {activity.time}
                    </span>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {activity.title}
                      </p>
                      <p className="text-xs text-muted leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                    {activity.cost !== null && (
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          activity.cost > 0
                            ? "bg-accent/10 text-accent"
                            : "bg-[var(--border-subtle)] text-muted"
                        }`}
                      >
                        {activity.cost > 0 ? `$${activity.cost}` : "Free"}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
