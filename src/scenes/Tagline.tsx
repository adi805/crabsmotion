import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO } from "../theme";
import { beatPump, ease } from "../beat";
import { RadiateLines } from "../components/RadiateLines";

/** Tagline: radiating burst + "THE AI THAT SHIPS." punching on the beat. */
export const Tagline: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const p = ease(Math.min(1, lf / 12));
  const pump = beatPump(frame, 5);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <RadiateLines frame={frame} color={C.cyan} radius={580} count={56} />
      <div
        style={{
          transform: `scale(${p * (1 + pump * 0.05)})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 104,
            fontWeight: 700,
            color: C.white,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          ИИ, КОТОРЫЙ
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 168,
            fontWeight: 700,
            color: C.coral,
            letterSpacing: -6,
            lineHeight: 0.92,
            marginTop: 2,
          }}
        >
          ВЫПУСКАЕТ.
        </div>
      </div>
      <div
        style={{
          fontFamily: FONT_MONO,
          fontSize: 30,
          color: C.dim,
          marginTop: 38,
          letterSpacing: 2,
          opacity: ease(Math.max(0, (lf - 14) / 12)),
        }}
      >
        агент-оркестратор
      </div>
    </AbsoluteFill>
  );
};
