import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO, STATS } from "../theme";
import { beatPump, ease } from "../beat";

/** Stats flex: numbers count up in sync, pumping on each beat. */
export const Stats: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const pump = beatPump(frame, 5);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          top: 120,
          fontFamily: FONT_MONO,
          fontSize: 30,
          color: C.dim,
          letterSpacing: 4,
          opacity: ease(Math.min(1, lf / 12)),
        }}
      >
        EM NÚMEROS
      </div>
      <div style={{ display: "flex", gap: 12, transform: "scale(0.9)" }}>
        {STATS.map((s, i) => {
          const delay = 6 + i * 7;
          const inP = ease(Math.max(0, Math.min(1, (lf - delay) / 14)));
          const countP = ease(Math.max(0, Math.min(1, (lf - delay) / 45)));
          const val = Math.round(s.to * countP);
          return (
            <div
              key={i}
              style={{
                textAlign: "center",
                transform: `translateY(${(1 - inP) * 46}px) scale(${inP * (1 + pump * 0.04)})`,
                opacity: inP,
                minWidth: 185,
                padding: "30px 8px",
                borderTop: `3px solid ${s.accent}`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 100,
                  fontWeight: 700,
                  color: s.accent,
                  letterSpacing: -4,
                  lineHeight: 1,
                }}
              >
                {val}
                {s.suffix}
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 21,
                  color: C.dim,
                  marginTop: 18,
                  letterSpacing: 2,
                }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
