import React from "react";
import { C } from "../theme";
import { beatPump } from "../beat";

/** Minimal monoline crab mark — pure SVG, no image assets. */
export const CrabMark: React.FC<{ frame: number; size?: number; color?: string }> = ({
  frame,
  size = 120,
  color = C.coral,
}) => {
  const pump = beatPump(frame, 5);
  const s = size * (1 + pump * 0.05);
  return (
    <svg width={s} height={s * 0.82} viewBox="0 0 100 82" style={{ overflow: "visible" }}>
      {/* claws */}
      <path d="M26 42 Q8 36 10 22" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
      <path d="M74 42 Q92 36 90 22" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
      <circle cx={9} cy={20} r={6.5} fill="none" stroke={color} strokeWidth={4} />
      <circle cx={91} cy={20} r={6.5} fill="none" stroke={color} strokeWidth={4} />
      {/* legs */}
      <path
        d="M28 56 L13 66 M31 63 L19 76 M72 56 L87 66 M69 63 L81 76"
        stroke={color}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      {/* body */}
      <ellipse cx={50} cy={48} rx={26} ry={19} fill={C.bg} stroke={color} strokeWidth={4} />
      {/* eyes */}
      <circle cx={42} cy={44} r={3.6} fill={color} />
      <circle cx={58} cy={44} r={3.6} fill={color} />
    </svg>
  );
};
