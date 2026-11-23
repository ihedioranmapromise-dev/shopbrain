"use client";

import { useState } from "react";
import { Mic, Sparkles } from "lucide-react";
import { VoicePill } from "@/components/VoicePill";

export default function InstructPage() {
  const [phase, setPhase] = useState<"idle" | "listening" | "confirm">("idle");

  return (
    <main className="px-4 pt-6">
      <h1 className="text-xl font-semibold">Instruct ShopBrain</h1>
      <p className="mt-1 text-sm text-mute">
        Speak like you message staff. Confirm before it saves.
      </p>

      <div className="card mt-6 flex flex-col items-center p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <Mic size={32} />
        </div>
        <p className="mt-4 text-sm text-[#c5cddc]">
          {phase === "idle" && "Hold the button and say what you want recorded."}
          {phase === "listening" && "Listening… e.g. deposit 50k for Chinedu Shop A"}
          {phase === "confirm" && "We heard this — confirm to post."}
        </p>

        {phase === "listening" && (
          <div className="mt-4 w-full">
            <VoicePill label="" recording />
          </div>
        )}

        {phase === "confirm" && (
          <div className="mt-4 w-full rounded-xl border border-line bg-[#0f131a] p-3 text-left text-sm">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles size={14} />
              Proposed action
            </div>
            <p className="mt-2 font-medium">Deposit ₦50,000 — Chinedu Okeke · Shop A</p>
            <p className="mt-1 text-xs text-mute">Balance after: ₦30,000 · owner confirmed</p>
          </div>
        )}

        <button
          type="button"
          className="btn btn-primary mt-6 w-full"
          onMouseDown={() => setPhase("listening")}
          onMouseUp={() => setPhase("confirm")}
          onTouchStart={() => setPhase("listening")}
          onTouchEnd={() => setPhase("confirm")}
          onClick={() => {
            if (phase === "confirm") setPhase("idle");
          }}
        >
          {phase === "confirm" ? "Confirm action" : "Hold to speak"}
        </button>
        {phase === "confirm" && (
          <button type="button" className="btn btn-ghost mt-2 w-full" onClick={() => setPhase("idle")}>
            Discard
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-[11px] text-mute">
        Demo simulates voice → action. Real setup wires device mic + confirm card.
      </p>
    </main>
  );
}
