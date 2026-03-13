"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  ChevronDown,
  ChevronUp,
  Plane,
  Hotel,
  ArrowRight,
  Sparkles,
  Check,
  X,
} from "lucide-react";
import type { ItineraryOption as ItineraryOptionType } from "@/data/itineraries";

interface ItineraryOptionProps {
  option: ItineraryOptionType;
  index: number;
}

export function ItineraryOption({ option, index }: ItineraryOptionProps) {
  const [whyOpen, setWhyOpen] = useState(false);

  const { flight, hotel } = option;

  const flightPrice = flight.pricePerPerson
    ? `$${flight.pricePerPerson.toLocaleString()}/person`
    : `${(flight.pointsCost! / 1000).toFixed(0)}K ${flight.pointsUnit} + $${flight.taxesPerPerson} taxes/person`;

  const hotelPrice = hotel.pricePerNight
    ? `$${hotel.pricePerNight.toLocaleString()}/night`
    : `${(hotel.pointsPerNight! / 1000).toFixed(0)}K ${hotel.pointsUnit}/night`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`glass relative flex flex-col rounded-2xl p-6 ${
        option.recommended
          ? "scale-[1.02] border-[var(--accent)]/40 shadow-[0_0_32px_rgba(0,212,170,0.12)]"
          : ""
      }`}
      style={
        option.recommended
          ? {
              borderColor: "rgba(0,212,170,0.4)",
              boxShadow: "0 0 32px rgba(0,212,170,0.10)",
            }
          : undefined
      }
    >
      {/* Tag pill */}
      <div className="mb-4 flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            backgroundColor: `${option.tagColor}18`,
            color: option.tagColor,
            border: `1px solid ${option.tagColor}30`,
          }}
        >
          {option.recommended && <Sparkles className="h-3 w-3" />}
          {option.tag}
        </span>
      </div>

      {/* Option name */}
      <h3
        className="mb-5 text-xl font-bold text-[var(--text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {option.name}
      </h3>

      {/* ── Flight section ── */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          <Plane className="h-3.5 w-3.5" />
          Flight
        </div>
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] p-4">
          <div className="mb-2 flex items-center gap-2">
            <img
              src={flight.airlineLogo}
              alt={flight.airline}
              className="h-[18px] w-auto"
            />
            <span className="text-sm font-medium text-[var(--text-primary)]">
              {flight.airline}
            </span>
            <span className="text-xs text-[var(--text-secondary)]">
              {flight.class}
            </span>
          </div>
          <div className="mb-1 text-sm font-semibold text-[var(--text-primary)]">
            {flight.route}
          </div>
          <div className="mb-2 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span>{flight.stops}</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>
              {flight.departTime} → {flight.arriveTime}
            </span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>{flight.duration}</span>
          </div>
          <div className="text-sm font-semibold text-[var(--accent)]">
            {flightPrice}
          </div>
        </div>
      </div>

      {/* ── Hotel section ── */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          <Hotel className="h-3.5 w-3.5" />
          Hotel — {hotel.nights} nights
        </div>
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] p-4">
          <div className="mb-2 flex items-center gap-2">
            <img
              src={hotel.brandLogo}
              alt={hotel.brand}
              className="h-[18px] w-auto"
            />
            <span className="text-sm font-medium text-[var(--text-primary)]">
              {hotel.brand}
            </span>
          </div>
          <div className="mb-1 text-sm font-semibold text-[var(--text-primary)]">
            {hotel.name}
          </div>
          <div className="mb-2 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>{hotel.location}</span>
          </div>
          <div className="text-sm font-semibold text-[var(--accent)]">
            {hotelPrice}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="my-3 h-px bg-[var(--border-subtle)]" />

      {/* ── Totals area ── */}
      <div className="mb-3 space-y-1">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
            Total cash
          </span>
          <span
            className="text-2xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ${option.totalCash.toLocaleString()}
          </span>
        </div>
        {option.pointsUsed && (
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              Points used
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              {option.pointsUsed}
            </span>
          </div>
        )}
        {option.pointsValue && (
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              Points value
            </span>
            <span className="text-sm font-medium text-[var(--accent)]">
              {option.pointsValue}
            </span>
          </div>
        )}
      </div>

      {/* ── Best card badge ── */}
      <div className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-2">
        <img
          src={option.bestCardLogo}
          alt={option.bestCard}
          className="h-4 w-auto"
        />
        <span className="text-xs font-medium text-[var(--text-secondary)]">
          Best card:
        </span>
        <span className="text-xs font-semibold text-[var(--text-primary)]">
          {option.bestCard}
        </span>
      </div>

      {/* ── "Why this?" accordion ── */}
      <button
        onClick={() => setWhyOpen(!whyOpen)}
        className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-lg px-1 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
      >
        <span>Why this option?</span>
        {whyOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {whyOpen && (
          <motion.div
            key="why-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="mb-4 rounded-lg bg-[var(--surface-hover)] px-4 py-3 space-y-2.5">
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {option.whyThis}
              </p>
              {option.tradeOffs && option.tradeOffs.length > 0 && (
                <div className="space-y-1.5 border-t border-[var(--border-subtle)] pt-2.5">
                  {option.tradeOffs.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      {t.positive ? (
                        <Check className="h-3.5 w-3.5 shrink-0 text-[var(--green)] mt-0.5" />
                      ) : (
                        <X className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)] mt-0.5" />
                      )}
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">{t.label}: </span>
                        {t.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Select button ── */}
      <div className="mt-auto">
        <Link
          href="/trip"
          className={`group flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
            option.recommended
              ? "bg-[var(--accent)] text-[#0A0A0F] hover:shadow-[0_0_28px_rgba(0,212,170,0.35)]"
              : "border border-[var(--border-medium)] text-[var(--text-primary)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
          }`}
        >
          Select
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
