import React from "react";
import { FONT, C } from "../theme";
import { beatPump } from "../beat";

/** Bold kinetic headline that pumps (scale pulse) on every beat. */
export const BeatText: React.FC<{
  frame: number;
  text: string;
  size?: number;
  color?: string;
  weight?: number;
  pumpAmt?: number;
  letterSpacing?: number;
  mono?: boolean;
  style?: React.CSSProperties;
}> = ({
  frame,
  text,
  size = 120,
  color = C.white,
  weight = 700,
  pumpAmt = 0.05,
  letterSpacing = -3,
  mono = false,
  style,
}) => {
  const pump = beatPump(frame, 5);
  return (
    <div
      style={{
        fontFamily: mono ? undefined : FONT,
        fontSize: size,
        fontWeight: weight,
        color,
        letterSpacing,
        lineHeight: 1,
        transform: `scale(${1 + pump * pumpAmt})`,
        textAlign: "center",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
