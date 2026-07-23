import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO, CAPABILITIES } from "../theme";
import { beatPump, ease } from "../beat";
import { RadiateLines } from "../components/RadiateLines";

const CARD_FRAMES = 60; // one capability per bar

/** Kinetic capability cards — one per bar, sliding in/out on the beat. */
export const Capabilities: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const idx = Math.min(CAPABILITIES.length - 1, Math.floor(lf / CARD_FRAMES));
  const local = lf - idx * CARD_FRAMES;
  const cap = CAPABILITIES[idx];
  const pump = beatPump(frame, 5);

  const inP = ease(Math.min(1, local / 12));
  const outP = ease(Math.max(0, (local - 50) / 10));
  const slideX = (1 - inP) * 140 - outP * 140;
  const scale = inP * (1 - outP * 0.85) * (1 + pump * 0.04);
  const opacity = inP * (1 - outP);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <RadiateLines frame={frame} color={cap.accent} radius={500} count={40} />

      <div
        style={{
          transform: `translateX(${slideX}px) scale(${scale})`,
          opacity,
          textAlign: "center",
          backgroundColor: C.panel,
          border: `2px solid ${cap.accent}`,
          borderRadius: 30,
          padding: "54px 86px",
          boxShadow: `0 0 90px ${cap.accent}30`,
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 92,
            fontWeight: 700,
            color: cap.accent,
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          {cap.word}
        </div>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 30,
            color: C.dim,
            marginTop: 22,
            letterSpacing: 1,
          }}
        >
          {cap.sub}
        </div>
      </div>

      {/* progress dots */}
      <div style={{ position: "absolute", bottom: 96, display: "flex", gap: 16 }}>
        {CAPABILITIES.map((c, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: i === idx ? cap.accent : C.faint,
              transform: i === idx ? `scale(${1 + pump * 0.5})` : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* index label */}
      <div
        style={{
          position: "absolute",
          top: 84,
          fontFamily: FONT_MONO,
          fontSize: 26,
          color: C.dim,
          letterSpacing: 3,
        }}
      >
        KEMAMPUAN 0{idx + 1} / 0{CAPABILITIES.length}
      </div>
    </AbsoluteFill>
  );
};
