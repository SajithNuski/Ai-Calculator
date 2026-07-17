import { useState } from "react";
import { explainExpression } from "../lib/ai.js";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [aiMessage, setAiMessage] = useState(
    "Enter an expression and calculate it to unlock the AI insight.",
  );
  const [loading, setLoading] = useState(false);

  const handleClick = (value) => {
    setExpression((previousExpression) => previousExpression + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
    setAiMessage(
      "Enter an expression and calculate it to unlock the AI insight.",
    );
    setLoading(false);
  };

  const handleDelete = () => {
    setExpression((previousExpression) => previousExpression.slice(0, -1));
    setResult("");
    setAiMessage(
      "Enter an expression and calculate it to unlock the AI insight.",
    );
    setLoading(false);
  };

  const handleEqual = async () => {
    if (!expression.trim()) {
      setResult("");
      setAiMessage("Add a number or operator first.");
      return;
    }

    setLoading(true);
    setAiMessage("Calculating with precision...");

    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
      setAiMessage(
        `Computed ${expression} = ${calculatedResult}. Ask AI for a refined breakdown of the result.`,
      );
    } catch (error) {
      setResult("Error");
      setAiMessage(`Unable to evaluate the expression: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAskAi = async () => {
    if (!expression.trim()) {
      setAiMessage("Enter an expression before asking for an AI breakdown.");
      return;
    }

    setLoading(true);
    setAiMessage("Generating a luxury-grade explanation...");

    try {
      const text = await explainExpression(expression, result);
      setAiMessage(text);
    } catch (error) {
      setAiMessage(`AI insight failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="luxury-shell min-h-screen text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-[-6rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-32 right-[-5rem] h-80 w-80 rounded-full bg-amber-200/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="luxury-frame w-full rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-3xl sm:p-6 lg:p-8">
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
                Luxury Glass Calculator
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                A premium AI calculator with a polished glassmorphism finish.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Compute with clarity, then ask for an elegant explanation when
                you want the reasoning behind the result.
              </p>
            </div>

            <div className="grid gap-3 text-right text-xs uppercase tracking-[0.3em] text-white/45 sm:grid-cols-2 lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-black/20">
                <div className="text-white/35">Expression</div>
                <div className="mt-2 text-sm tracking-normal text-white/85 normal-case">
                  {expression || "0"}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-black/20">
                <div className="text-white/35">Result</div>
                <div className="mt-2 text-lg tracking-normal text-amber-100 normal-case">
                  {result || "0"}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6">
              <div className="mb-5 grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-5 py-4 shadow-inner shadow-black/30">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                    Current Expression
                  </div>
                  <div className="mt-3 min-h-[72px] text-3xl font-light tracking-tight text-white sm:text-4xl">
                    {expression || "0"}
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-amber-200/20 bg-gradient-to-br from-amber-200/15 via-white/5 to-cyan-300/10 px-5 py-4 shadow-inner shadow-black/20">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-amber-50/55">
                    Luxury Result
                  </div>
                  <div className="mt-3 min-h-[72px] text-3xl font-semibold tracking-tight text-amber-50 sm:text-4xl">
                    {result || "0"}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <button
                  className="keypad-btn keypad-muted"
                  onClick={handleClear}
                >
                  C
                </button>
                <button
                  className="keypad-btn keypad-muted"
                  onClick={handleDelete}
                >
                  DEL
                </button>
                <button
                  className="keypad-btn keypad-muted"
                  onClick={() => handleClick("%")}
                >
                  %
                </button>
                <button
                  className="keypad-btn keypad-accent"
                  onClick={() => handleClick("/")}
                >
                  ÷
                </button>
                <button className="keypad-btn" onClick={() => handleClick("7")}>
                  7
                </button>
                <button className="keypad-btn" onClick={() => handleClick("8")}>
                  8
                </button>
                <button className="keypad-btn" onClick={() => handleClick("9")}>
                  9
                </button>
                <button
                  className="keypad-btn keypad-accent"
                  onClick={() => handleClick("*")}
                >
                  ×
                </button>
                <button className="keypad-btn" onClick={() => handleClick("4")}>
                  4
                </button>
                <button className="keypad-btn" onClick={() => handleClick("5")}>
                  5
                </button>
                <button className="keypad-btn" onClick={() => handleClick("6")}>
                  6
                </button>
                <button
                  className="keypad-btn keypad-accent"
                  onClick={() => handleClick("-")}
                >
                  −
                </button>
                <button className="keypad-btn" onClick={() => handleClick("1")}>
                  1
                </button>
                <button className="keypad-btn" onClick={() => handleClick("2")}>
                  2
                </button>
                <button className="keypad-btn" onClick={() => handleClick("3")}>
                  3
                </button>
                <button
                  className="keypad-btn keypad-accent"
                  onClick={() => handleClick("+")}
                >
                  +
                </button>
                <button
                  className="keypad-btn col-span-2"
                  onClick={() => handleClick("0")}
                >
                  0
                </button>
                <button className="keypad-btn" onClick={() => handleClick(".")}>
                  .
                </button>
                <button
                  className="keypad-btn keypad-gold col-span-1 sm:col-span-2"
                  onClick={handleEqual}
                >
                  {loading ? "Working" : "="}
                </button>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                    AI Insight
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Elegant breakdown
                  </h2>
                </div>
                <button
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/85 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleAskAi}
                  disabled={loading}
                >
                  {loading ? "Thinking" : "Ask AI"}
                </button>
              </div>

              <div className="mt-6 min-h-[260px] rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-5 text-sm leading-7 text-white/75 shadow-inner shadow-black/30 sm:text-base">
                <p className="text-white/90">{aiMessage}</p>
                <div className="mt-6 grid gap-3 text-[11px] uppercase tracking-[0.3em] text-white/40 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    Safe UI flow
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    Glassmorphism styling
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-5 text-white/35">
                Privacy note: the AI helper only receives the current expression
                and computed result when you press Ask AI.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
