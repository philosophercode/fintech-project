"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const steps = [
  { label: "Cards", href: "/cards" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Plan", href: "/plan" },
  { label: "Options", href: "/options" },
  { label: "Review", href: "/trip" },
  { label: "Book", href: "/book" },
];

interface ProgressStepperProps {
  currentStep: number; // 1-indexed
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <>
      {/* Mobile: compact pill with dots */}
      <div className="mb-8 flex flex-col items-center gap-3 sm:hidden">
        <p className="text-sm font-medium text-foreground">
          <span className="text-accent">{steps[currentStep - 1]?.label}</span>
          <span className="text-muted"> — Step {currentStep} of {steps.length}</span>
        </p>
        <div className="flex items-center gap-2">
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            return (
              <Link
                key={step.label}
                href={step.href}
                className={`block rounded-full transition-all duration-300 ${
                  isCurrent
                    ? "h-2.5 w-2.5 bg-accent glow-accent"
                    : isCompleted
                      ? "h-2 w-2 bg-accent/60"
                      : "h-2 w-2 bg-border-medium"
                }`}
                aria-label={`Go to ${step.label}`}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop: full horizontal stepper */}
      <div className="mx-auto mb-10 hidden w-full max-w-2xl items-center justify-between sm:flex">
        {steps.map((step, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={step.label} className="flex items-center">
              <Link href={step.href} className="flex flex-col items-center gap-1.5 group">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-110 ${
                    isCompleted
                      ? "bg-[var(--accent)] text-[#0A0A0F]"
                      : isCurrent
                        ? "bg-[var(--accent)] text-[#0A0A0F] glow-accent"
                        : "border border-[var(--border-medium)] bg-transparent text-[var(--text-muted)] group-hover:border-[var(--accent)]/50 group-hover:text-[var(--accent)]"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" strokeWidth={3} />
                  ) : (
                    stepNum
                  )}
                </div>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    isCurrent
                      ? "text-[var(--text-primary)] font-medium"
                      : isCompleted
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {step.label}
                </span>
              </Link>

              {i < steps.length - 1 && (
                <div
                  className={`mx-3 h-px w-12 transition-colors duration-300 lg:w-20 ${
                    stepNum < currentStep
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--border-subtle)]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
