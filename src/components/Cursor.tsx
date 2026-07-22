import React from "react";
import { C } from "../theme";

/** Blinking terminal block cursor (blinks on the beat grid). */
export const Cursor: React.FC<{
  frame: number;
  color?: string;
  height?: number;
}> = ({ frame, color = C.coral, height = 46 }) => {
  const on = Math.floor(frame / 15) % 2 === 0;
  return (
    <span
      style={{
        display: "inline-block",
        width: height * 0.52,
        height,
        marginLeft: 6,
        backgroundColor: on ? color : "transparent",
        transform: "translateY(6px)",
      }}
    />
  );
};
