"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ArrowLeft, Camera, Mic, Sparkles } from "lucide-react";
import { VoicePill } from "@/components/VoicePill";

function AdjustInner() {
  const mode = useSearchParams().get("mode") || "voice";
  const router = useRouter();
  const isSnap = mode === "snap";
  const [phase, setPhase] = useState<"idle" | "capturing" | "confirm">("idle");

  return (
    <main className="px-4 pt-6">
      <Link href="/stock" className="inline-flex items-center gap-1 text-sm text-mute">
        <ArrowLeft size={16} /> Stock
      </Link>

      <h1 className="mt-4 text-xl font-semibold">
        {isSnap ? "Snap stock adjust" : "Speak stock adjust"}
      </h1>
      <p className="mt-1 text-sm text-mute">
        Proposal only — owner must accept before books change.
      </p>

      <div className="card mt-6 flex flex-col items-center p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          {isSnap ? <Camera size={32} /> : <Mic size={32} />}
        </div>

        <p className="mt-4 text-sm text-[#c5cddc]">
          {phase === "idle" &&
            (isSnap
              ? "Point at bale label or shelf mark. We’ll propose a stock line."
              : "Say e.g. add 8 bales Guipure white warehouse")}
          {phase === "capturing" &&
            (isSnap ? "Reading sample label…" : "Listening…")}
          {phase === "confirm" && "Check this before it goes to pending."}
        </p>

        {phase === "capturing" && !isSnap && (
          <div className="mt-4 w-full">
            <VoicePill label="" recording />
          </div>
        )}

        {phase === "capturing" && isSnap && (
          <div className="mt-4 w-full overflow-hidden rounded-xl border border-line bg-[#0a0d12]">
            <div className="flex h-36 items-center justify-center bg-gradient-to-b from-[#1a2230] to-[#0f131a] text-xs text-mute">
              Camera preview (demo)
            </div>
            <div className="border-t border-line px-3 py-2 text-left text-[11px] text-mute">
              OCR demo — real setup reads label / handwritten mark
            </div>
          </div>
        )}

        {phase === "confirm" && (
          <div className="mt-4 w-full rounded-xl border border-line bg-[#0f131a] p-3 text-left text-sm">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles size={14} />
              Proposed stock change
            </div>
            <p className="mt-2 font-medium">
              {isSnap
                ? "Guipure white · +4 bales · Warehouse"
                : "Guipure white · +8 bales · Warehouse"}
            </p>
            <p className="mt-1 text-xs text-mute">
              Goes to Pending · staff/owner voice optional · you Accept to apply
            </p>
          </div>
        )}

        <button
          type="button"
          className="btn btn-primary mt-6 w-full"
          onClick={() => {
            if (phase === "idle") setPhase("capturing");
            else if (phase === "capturing") setPhase("confirm");
            else router.push("/pending");
          }}
        >
          {phase === "idle" && (isSnap ? "Open camera" : "Start listening")}
          {phase === "capturing" && "Use sample result"}
          {phase === "confirm" && "Send to pending"}
        </button>

        {phase !== "idle" && (
          <button
            type="button"
            className="btn btn-ghost mt-2 w-full"
            onClick={() => setPhase("idle")}
          >
            Reset
          </button>
        )}
      </div>
    </main>
  );
}

export default function StockAdjustPage() {
  return (
    <Suspense fallback={<main className="px-4 pt-10 text-sm text-mute">Loading…</main>}>
      <AdjustInner />
    </Suspense>
  );
}
