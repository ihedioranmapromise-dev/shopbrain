"use client";

import { useState } from "react";
import { Pause, Play, Mic } from "lucide-react";

export function VoicePill({
  label,
  recording,
}: {
  label: string;
  recording?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  if (recording) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <Mic size={14} />
        Listening… release to save
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying((p) => !p)}
      className="flex w-full items-center gap-3 rounded-xl border border-line bg-[#0f131a] px-3 py-2.5 text-left text-sm"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] text-[#e8ecf4]">{label}</span>
        <span className="text-[11px] text-mute">
          {playing ? "Playing sample voice note…" : "Tap to play voice note"}
        </span>
      </span>
    </button>
  );
}
