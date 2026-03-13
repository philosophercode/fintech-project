"use client";

import {
  Plane,
  Train,
  Hotel,
  UtensilsCrossed,
  Camera,
  MapPin,
  ShoppingBag,
  TrendingUp,
  Info,
} from "lucide-react";
import { paymentBreakdown, paymentSummary } from "@/data/trip";
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

export function PaymentBreakdown() {
  return (
    <div className="space-y-6">
      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-medium uppercase tracking-wider text-muted">
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Card</th>
              <th className="px-5 py-3">Points Earned</th>
              <th className="px-5 py-3">Savings</th>
            </tr>
          </thead>
          <tbody>
            {paymentBreakdown.map((item, i) => {
              const Icon = iconMap[item.icon] ?? MapPin;
              return (
                <tr
                  key={i}
                  className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-hover group/row"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="font-medium text-foreground">
                        {item.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-foreground">
                    {item.amount}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        {item.cardLogo && (
                          <img
                            src={item.cardLogo}
                            alt=""
                            className="h-3.5 w-5 rounded-sm object-contain"
                          />
                        )}
                        <span className="text-muted">{item.card}</span>
                        {item.whyThisCard && item.cardLogo && (
                          <span className="relative group/tip">
                            <Info className="h-3.5 w-3.5 text-dimmed cursor-help transition-colors group-hover/tip:text-accent" />
                            <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-normal w-56 rounded-lg border border-border-medium px-3 py-2 text-xs text-muted shadow-lg opacity-0 transition-opacity group-hover/tip:opacity-100" style={{ backgroundColor: "#1a1a24" }}>
                              {item.whyThisCard}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {item.pointsEarned}
                  </td>
                  <td className="px-5 py-3.5">
                    {item.savings ? (
                      <span className="font-medium text-[var(--green)]">
                        {item.savings}
                      </span>
                    ) : (
                      <span className="text-dimmed">&mdash;</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card optimization callout */}
      <div className="rounded-xl border border-accent/20 bg-accent/5 px-5 py-4">
        <div className="flex items-start gap-3">
          <Info className="h-4 w-4 shrink-0 text-accent mt-0.5" />
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">Smart card routing: </span>
            We matched each expense to your highest-earning card.
            Hover the <Info className="inline h-3 w-3 text-dimmed" /> icons above to see why each card was selected.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="glass-strong rounded-xl border-l-4 border-l-accent p-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Total Cash
            </p>
            <p className="mt-1 text-2xl font-bold text-accent">
              ${paymentSummary.totalCash}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Points Used
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {paymentSummary.pointsUsed}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Points Earned
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {paymentSummary.pointsEarned}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              You Saved
            </p>
            <div className="mt-1 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[var(--green)]" />
              <p className="text-2xl font-bold text-[var(--green)]">
                ${paymentSummary.totalSaved.toLocaleString()}
              </p>
              <span className="text-xs text-muted">vs. all-cash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
