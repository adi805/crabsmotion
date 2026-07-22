import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { C } from "./theme";
import { Background } from "./components/Background";
import { Boot } from "./scenes/Boot";
import { LogoReveal } from "./scenes/LogoReveal";
import { Tagline } from "./scenes/Tagline";
import { Capabilities } from "./scenes/Capabilities";
import { Stats } from "./scenes/Stats";
import { Outro } from "./scenes/Outro";

// Global-frame timeline. Every scene locks to the shared 120 BPM grid.
const T = {
  boot: 0,
  logo: 60,
  tagline: 120,
  caps: 180,
  stats: 540,
  outro: 720,
};

const accentFor = (frame: number) => {
  if (frame < T.tagline) return C.coral;
  if (frame < T.caps) return C.cyan;
  if (frame < T.stats) return C.coral;
  if (frame < T.outro) return C.amber;
  return C.coral;
};

export const CrabMotion: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      <Audio src={staticFile("score.wav")} />
      <Background frame={frame} accent={accentFor(frame)} />

      <Sequence from={T.boot} durationInFrames={60}>
        <Boot frame={frame} start={T.boot} />
      </Sequence>
      <Sequence from={T.logo} durationInFrames={60}>
        <LogoReveal frame={frame} start={T.logo} />
      </Sequence>
      <Sequence from={T.tagline} durationInFrames={60}>
        <Tagline frame={frame} start={T.tagline} />
      </Sequence>
      <Sequence from={T.caps} durationInFrames={360}>
        <Capabilities frame={frame} start={T.caps} />
      </Sequence>
      <Sequence from={T.stats} durationInFrames={180}>
        <Stats frame={frame} start={T.stats} />
      </Sequence>
      <Sequence from={T.outro} durationInFrames={180}>
        <Outro frame={frame} start={T.outro} />
      </Sequence>
    </AbsoluteFill>
  );
};
