"use client";

import Link from "next/link";
import { Compass, Briefcase, Wallet } from "lucide-react";

export function Navbar() {
  return (
    <nav className="glass-strong fixed top-0 left-0 right-0 z-50 h-16">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/60">
            <Compass className="h-4.5 w-4.5 text-white" strokeWidth={2} />
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Voyager
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Briefcase className="h-4 w-4" />
            My Trips
          </Link>
          <Link
            href="/cards"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Wallet className="h-4 w-4" />
            Wallet
          </Link>
        </div>
      </div>
    </nav>
  );
}
