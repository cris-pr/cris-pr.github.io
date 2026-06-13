import { X } from "lucide-react";
import { useEffect } from "react";

import { CalculatorGame } from "./CalculatorGame";

export type CalculatorLabels = {
  title: string;
  open: string;
};

type CalculatorModalProps = {
  isOpen: boolean;
  labels: CalculatorLabels;
  onClose: () => void;
};

export function CalculatorModal({ isOpen, labels, onClose }: CalculatorModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="calculator-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={labels.title}
    >
      <button
        type="button"
        className="calculator-modal-backdrop absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
        aria-label="Close calculator"
        onClick={onClose}
      />

      <div className="calculator-modal-panel relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-slate-950/60">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Archive project</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{labels.title}</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-300/60 hover:text-cyan-700"
            aria-label="Close calculator"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative px-5 py-6 sm:px-6">
          <CalculatorGame />
        </div>
      </div>
    </div>
  );
}
