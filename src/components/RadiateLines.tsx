import React from "react";
import { C } from "../theme";
import { beatPump } from "../beat";

/** Radial burst of lines that expands on each beat — pure SVG, no assets. */
export const RadiateLines: React.FC<{
  frame: number;
  count?: number;
  color?: string;
  radius?: number;
  cx?: number;
  cy?: number;
}> = ({ frame, count = 48, color = C.coral, radius = 520, cx = 640, cy = 360 }) => {
  const pump = beatPump(frame, 3);
  const rot = frame * 0.12;
  const lines = [];
  for (let i = 0; i < count; i++) {
    const ang = (i / count) * Math.PI * 2 + (rot * Math.PI) / 180;
    const inner = radius * 0.42;
    const outer = radius * (0.62 + pump * 0.34);
    const x1 = cx + Math.cos(ang) * inner;
    const y1 = cy + Math.sin(ang) * inner;
    const x2 = cx + Math.cos(ang) * outer;
    const y2 = cy + Math.sin(ang) * outer;
    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={i % 4 === 0 ? 3 : 1.4}
        strokeLinecap="round"
        opacity={0.12 + pump * 0.5}
      />
    );
  }
  return (
    <svg
      width={1280}
      height={720}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    >
      {lines}
    </svg>
  );
};
