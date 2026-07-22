import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO, STATS } from "../theme";
import { beatPump, ease } from "../beat";

/** Stats grid: 3×2 layout (3 on top, 2 centered below), numbers count up in sync. */
export const Stats: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const pump = beatPump(frame, 5);

  const indexed = STATS.map((s, i) => ({ s, i }));
  const rows = [indexed.slice(0, 3), indexed.slice(3)];

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          top: 64,
          fontFamily: FONT_MONO,
          fontSize: 30,
          color: C.dim,
          letterSpacing: 4,
          opacity: ease(Math.min(1, lf / 12)),
        }}
      >
        EN CHIFFRES
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {rows.map((row, ri) => (
          <div
            key={ri}
            style={{ display: "flex", gap: 60, justifyContent: "center" }}
          >
            {row.map(({ s, i }) => {
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
                    minWidth: 260,
                    padding: "34px 16px",
                    borderTop: `3px solid ${s.accent}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: 116,
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
                      fontSize: 25,
                      color: C.dim,
                      marginTop: 20,
                      letterSpacing: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
