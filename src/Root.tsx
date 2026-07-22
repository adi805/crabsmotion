import React from "react";
import { Composition } from "remotion";
import { CrabMotion } from "./CrabMotion";
import { FPS, DURATION_FRAMES, WIDTH, HEIGHT } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CrabMotion"
      component={CrabMotion}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
