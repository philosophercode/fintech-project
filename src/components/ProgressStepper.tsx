"use client";

import { Check } from "lucide-react";

const steps = ["Cards", "Loyalty", "Plan Trip", "Options", "Book"];

interface ProgressStepperProps {
  currentStep: number; // 1-indexed
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <div className="mx-auto mb-10 flex w-full max-w-2xl items-center justify-between">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                  isCompleted
                    ? "bg-[var(--accent)] text-[#0A0A0F]"
                    : isCurrent
                      ? "bg-[var(--accent)] text-[#0A0A0F] glow-accent"
                      : "border border-[var(--border-medium)] bg-transparent text-[var(--text-muted)]"
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
                      : "text-[var(--text-muted)]"
                }`}
              >
                {label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`mx-3 h-px w-12 transition-colors duration-300 sm:w-20 ${
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
  );
}
