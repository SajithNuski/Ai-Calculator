import { useState } from "react";
import { explainExpression } from "../lib/ai.js";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [aiMessage, setAiMessage] = useState("Waiting for response ...");
  const [loading, setLoading] = useState(false);

  const handleClick = (value) => {
    setExpression((previousExpression) => previousExpression + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
    setAiMessage("Waiting for response ...");
    setLoading(false);
  };

  const handleDelete = () => {
    setExpression((previousExpression) => previousExpression.slice(0, -1));
    setResult("");
    setAiMessage("Waiting for response ...");
    setLoading(false);
  };

  const handleEqual = async () => {
    if (!expression.trim()) {
      setResult("");
      setAiMessage("Waiting for response ...");
      return;
    }

    setLoading(true);
    setAiMessage("Thinking...");

    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
      setAiMessage(
        `I calculated ${expression} and the answer is ${calculatedResult}.`,
      );
    } catch (error) {
      setResult("Error");
      setAiMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAskAi = async () => {
    if (!expression.trim()) {
      setAiMessage("Waiting for response ...");
      return;
    }

    setLoading(true);
    setAiMessage("Thinking...");

    try {
      const text = await explainExpression(expression, result);
      setAiMessage(text);
    } catch (error) {
      setAiMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="luxury-shell min-h-screen text-white">
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="luxury-frame w-full rounded-4xl border border-white/10 bg-white/6 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:p-6 lg:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              AI-Powered Smart Calculator
            </h1>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-white/10 bg-linear-to-b from-white/10 to-white/4 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6">
              <div className="mb-4 rounded-[1.35rem] border border-white/10 bg-slate-950/35 px-5 py-4 shadow-inner shadow-black/25">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Expressions
                </div>
                <div className="mt-3 min-h-12 text-3xl font-light tracking-tight text-white sm:text-4xl">
                  {expression || "0"}
                </div>
                <div className="my-3 h-px bg-white/10" />
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Result
                </div>
                <div className="mt-3 min-h-12 text-3xl font-semibold tracking-tight text-amber-100 sm:text-4xl">
                  {result || "0"}
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

            <section className="rounded-[1.75rem] border border-white/10 bg-white/6 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xs uppercase tracking-[0.35em] text-white/45">
                  Ai Explain
                </h2>
                <button
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/85 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleAskAi}
                  disabled={loading}
                >
                  {loading ? "Thinking..." : "Ask AI"}
                </button>
              </div>

              <p className="mt-4 min-h-45 rounded-[1.35rem] border border-white/10 bg-slate-950/35 p-5 text-sm leading-7 text-white/78 shadow-inner shadow-black/25 sm:text-base">
                {aiMessage}
              </p>

              <p className="mt-3 text-[11px] leading-5 text-white/35">
                Privacy: We only send the final expression and result when you
                click Ask AI.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
