import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT } from "../theme";
import { beatPump, ease } from "../beat";
import { CrabMark } from "../components/CrabMark";

const WORD = "OPENCRABS";

/** Logo reveal: letters stagger up onto the first kick, CRABS in coral. */
export const LogoReveal: React.FC<{ frame: number; start: number }> = ({
  frame,
  start,
}) => {
  const lf = frame - start;
  const pump = beatPump(frame, 5);
  const markIn = ease(Math.min(1, lf / 12));

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${markIn * (1 + pump * 0.06)})`, opacity: markIn }}>
        <CrabMark frame={frame} size={132} />
      </div>
      <div style={{ display: "flex", marginTop: 26 }}>
        {WORD.split("").map((ch, i) => {
          const delay = 6 + i * 2.2;
          const e = ease(Math.max(0, Math.min(1, (lf - delay) / 10)));
          return (
            <span
              key={i}
              style={{
                fontFamily: FONT,
                fontSize: 128,
                fontWeight: 700,
                color: i >= 4 ? C.coral : C.white,
                letterSpacing: -4,
                lineHeight: 1,
                transform: `translateY(${(1 - e) * 70}px)`,
                opacity: e,
                display: "inline-block",
              }}
            >
              {ch}
            </span>
          );
        })}
      </div>
      <div
        style={{
          height: 5,
          backgroundColor: C.coral,
          marginTop: 22,
          borderRadius: 3,
          width: 780 * ease(Math.max(0, (lf - 26) / 16)),
        }}
      />
    </AbsoluteFill>
  );
};
