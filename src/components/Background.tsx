import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../theme";
import { beatPump } from "../beat";

/**
 * Minimalist tech backdrop: radial base, a beat-reactive center bloom,
 * a faint engineering grid, and a vignette. All pulses lock to the kick.
 */
export const Background: React.FC<{ frame: number; accent?: string }> = ({
  frame,
  accent = C.coral,
}) => {
  const pump = beatPump(frame, 4);
  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 44%, ${C.bg2} 0%, ${C.bg} 64%)`,
        }}
      />
      {/* beat bloom */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent} 0%, transparent 42%)`,
          opacity: 0.05 + pump * 0.08,
          transform: `scale(${1 + pump * 0.05})`,
        }}
      />
      {/* engineering grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.faint} 1px, transparent 1px), linear-gradient(90deg, ${C.faint} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          backgroundPosition: "center",
          opacity: 0.05 + pump * 0.03,
          maskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 78%)",
        }}
      />
      {/* vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 52%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
