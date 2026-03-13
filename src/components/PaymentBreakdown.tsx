"use client";

import Image from "next/image";
import {
  Plane,
  Train,
  Hotel,
  UtensilsCrossed,
  Camera,
  MapPin,
  ShoppingBag,
  TrendingUp,
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
                  className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-hover"
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
                    <div className="flex items-center gap-2">
                      {item.cardLogo && (
                        <Image
                          src={item.cardLogo}
                          alt=""
                          width={20}
                          height={14}
                          className="rounded-sm"
                        />
                      )}
                      <span className="text-muted">{item.card}</span>
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
