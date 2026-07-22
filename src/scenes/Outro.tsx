import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO } from "../theme";
import { beatPump, ease } from "../beat";
import { CrabMark } from "../components/CrabMark";
import { RadiateLines } from "../components/RadiateLines";
import { Cursor } from "../components/Cursor";

const SCENE_LEN = 180;
const CRASH_AT = 120; // bar 14 downbeat → final impact

/** Outro: logo returns, CTA, a crash flash on the last bar, fade to black. */
export const Outro: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const pump = beatPump(frame, 5);
  const inP = ease(Math.min(1, lf / 14));

  const crashLocal = lf - CRASH_AT;
  const flash = crashLocal >= 0 && crashLocal < 6 ? 1 - crashLocal / 6 : 0;
  const fade = 1 - ease(Math.max(0, (lf - (SCENE_LEN - 18)) / 18));

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <RadiateLines frame={frame} color={C.coral} radius={540} count={52} />
      <div
        style={{
          transform: `scale(${inP * (1 + pump * 0.06 + flash * 0.22)})`,
          textAlign: "center",
          opacity: fade,
        }}
      >
        <CrabMark frame={frame} size={138} />
        <div
          style={{
            fontFamily: FONT,
            fontSize: 100,
            fontWeight: 700,
            color: C.white,
            letterSpacing: -4,
            marginTop: 22,
            lineHeight: 1,
          }}
        >
          OPEN
          <span style={{ color: C.coral }}>CRABS</span>
        </div>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 44,
            color: C.cyan,
            marginTop: 30,
            letterSpacing: 1,
          }}
        >
          opencrabs.com
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 34,
            fontWeight: 500,
            color: C.dim,
            marginTop: 20,
          }}
        >
          download today
          <Cursor frame={frame} color={C.coral} height={30} />
        </div>
      </div>
      {flash > 0 && (
        <AbsoluteFill style={{ backgroundColor: C.white, opacity: flash * 0.7 }} />
      )}
    </AbsoluteFill>
  );
};
