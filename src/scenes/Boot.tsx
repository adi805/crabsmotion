import React from "react";
import { AbsoluteFill } from "remotion";
import { C, FONT, FONT_MONO } from "../theme";
import { Cursor } from "../components/Cursor";

const LINES = [
  { t: 3, text: "$ opencrabs --init", color: C.green },
  { t: 15, text: "> запуск ядра агента", color: C.dim },
  { t: 26, text: "> роутинг 500+ моделей", color: C.dim },
  { t: 37, text: "> инструменты: 75+ · 16 скиллов онлайн", color: C.dim },
  { t: 48, text: "> статус: ГОТОВ", color: C.coral },
];

/** Terminal cold-open: a boot sequence types in over the intro riser. */
export const Boot: React.FC<{ frame: number; start: number }> = ({ frame, start }) => {
  const lf = frame - start;
  const visible = LINES.map((l, i) => ({ l, i })).filter((x) => lf >= x.l.t);
  const lastIdx = visible.length ? visible[visible.length - 1].i : -1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 230,
      }}
    >
      <div style={{ fontFamily: FONT_MONO, fontSize: 34, lineHeight: 1.75 }}>
        {LINES.map((line, i) => {
          if (lf < line.t) return null;
          const chars = Math.min(line.text.length, Math.floor((lf - line.t) * 1.7));
          return (
            <div key={i} style={{ color: line.color }}>
              {line.text.slice(0, chars)}
              {i === lastIdx && <Cursor frame={frame} color={line.color} height={30} />}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: 230,
          fontFamily: FONT,
          fontSize: 22,
          color: C.faint,
          letterSpacing: 4,
        }}
      >
        OPENCRABS · ЗАГРУЗКА АГЕНТА
      </div>
    </AbsoluteFill>
  );
};
