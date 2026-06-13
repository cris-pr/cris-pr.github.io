import { useReducer } from "react";

import {
  addNumber,
  clearCalculator,
  createInitialCalculatorState,
  pushOperator,
  type Operator,
} from "../lib/calculatorLogic";

type CalculatorAction =
  | { type: "clear" }
  | { type: "digit"; digit: string }
  | { type: "operator"; operator: Operator | "=" };

function calculatorReducer(state: ReturnType<typeof createInitialCalculatorState>, action: CalculatorAction) {
  switch (action.type) {
    case "clear":
      return clearCalculator();
    case "digit":
      return addNumber(state, action.digit);
    case "operator":
      return pushOperator(state, action.operator);
    default:
      return state;
  }
}

const BUTTONS: { label: string; action?: CalculatorAction; variant?: "clear" | "operator" }[] = [
  { label: "C", action: { type: "clear" }, variant: "clear" },
  { label: "()" },
  { label: "%" },
  { label: "/", action: { type: "operator", operator: "/" }, variant: "operator" },
  { label: "7", action: { type: "digit", digit: "7" } },
  { label: "8", action: { type: "digit", digit: "8" } },
  { label: "9", action: { type: "digit", digit: "9" } },
  { label: "x", action: { type: "operator", operator: "x" }, variant: "operator" },
  { label: "4", action: { type: "digit", digit: "4" } },
  { label: "5", action: { type: "digit", digit: "5" } },
  { label: "6", action: { type: "digit", digit: "6" } },
  { label: "-", action: { type: "operator", operator: "-" }, variant: "operator" },
  { label: "1", action: { type: "digit", digit: "1" } },
  { label: "2", action: { type: "digit", digit: "2" } },
  { label: "3", action: { type: "digit", digit: "3" } },
  { label: "+", action: { type: "operator", operator: "+" }, variant: "operator" },
  { label: "+/-" },
  { label: "0", action: { type: "digit", digit: "0" } },
  { label: "." },
  { label: "=", action: { type: "operator", operator: "=" }, variant: "operator" },
];

function getButtonClassName(variant?: "clear" | "operator") {
  if (variant === "clear") {
    return "border-2 border-black border-b-red-950 border-r-red-950 border-l-red-300/50 border-t-red-300/50 bg-red-500 text-white hover:bg-red-400";
  }

  if (variant === "operator") {
    return "bg-slate-300 hover:bg-slate-200";
  }

  return "bg-slate-300 hover:bg-slate-200";
}

export function CalculatorGame() {
  const [state, dispatch] = useReducer(calculatorReducer, undefined, createInitialCalculatorState);

  return (
    <div className="calculator-game mx-auto w-full max-w-[400px] rounded-[10px] bg-black p-2.5 pb-5 shadow-[inset_2px_2px_0px_rgba(255,255,255,0.2),1px_1px_0px_rgba(255,255,255,0.5)]">
      <div
        className="calculator-screen mx-2.5 mb-5 mt-5 min-h-[45px] rounded-[3px] bg-lime-300 px-2.5 py-1 text-right font-mono text-[35px] leading-none text-black shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5),1px_1px_0px_rgba(255,255,255,0.5)]"
        aria-live="polite"
      >
        {state.display}
      </div>

      <div className="grid grid-cols-4 gap-x-2 gap-y-2.5 px-3">
        {BUTTONS.map((button) => (
          <button
            key={button.label}
            type="button"
            className={`calculator-button h-[50px] w-[65px] rounded-[3px] text-base font-medium transition disabled:cursor-default disabled:opacity-70 ${getButtonClassName(button.variant)}`}
            disabled={!button.action}
            onClick={() => button.action && dispatch(button.action)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
