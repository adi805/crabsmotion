import { BEAT_FRAMES, BAR_FRAMES } from "./theme";

/** Floating-point beat position for a frame. */
export const beatFloat = (frame: number) => frame / BEAT_FRAMES;

/** Integer beat index since t=0. */
export const beatIndex = (frame: number) => Math.floor(frame / BEAT_FRAMES);

/** Phase within the current beat, 0..1. */
export const beatPhase = (frame: number) => {
  const bf = frame / BEAT_FRAMES;
  return bf - Math.floor(bf);
};

/** Integer bar index since t=0. */
export const barIndex = (frame: number) => Math.floor(frame / BAR_FRAMES);

/**
 * A 0..1 "pump" that spikes to 1 on each beat and decays exponentially.
 * Use it to scale/flash elements in sync with the kick drum.
 */
export const beatPump = (frame: number, decay = 5) =>
  Math.exp(-beatPhase(frame) * decay);

/** Pump that fires once per bar (downbeat) — for bigger transitions. */
export const barPump = (frame: number, decay = 3) => {
  const phase = (frame % BAR_FRAMES) / BAR_FRAMES;
  return Math.exp(-phase * decay);
};

/** Smooth 0..1 progress across a local frame window with easing. */
export const ease = (t: number) => {
  const x = Math.max(0, Math.min(1, t));
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
