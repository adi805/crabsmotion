// Cyrillic-capable faces for the RU branch: Exo 2 (display) + JetBrains Mono.
// Space Grotesk / Space Mono are Latin-only and fall back to a mismatched serif.
import { loadFont as loadDisplay } from "@remotion/google-fonts/Exo2";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily: display } = loadDisplay("normal", {
  weights: ["400", "500", "600", "700"],
});
const { fontFamily: mono } = loadMono("normal", { weights: ["400", "700"] });

export const FONT = display;
export const FONT_MONO = mono;

// ---- palette: minimalist tech, monochrome + crab-coral accent ----
export const C = {
  bg: "#08080B",
  bg2: "#0D0D14",
  panel: "#12121B",
  white: "#FFFFFF",
  dim: "#8A8A96",
  faint: "#3A3A46",
  coral: "#FF5A3C",
  cyan: "#38E1FF",
  amber: "#FFB43C",
  violet: "#A78BFF",
  green: "#5CFF9B",
};

// ---- timing: single 120 BPM grid shared with the audio score ----
export const FPS = 30;
export const BPM = 120;
export const BEAT_FRAMES = 15; // 0.5s
export const BAR_FRAMES = 60; // 2.0s
export const DURATION_FRAMES = 1080; // 36s
export const WIDTH = 1280;
export const HEIGHT = 720;

export type Capability = { word: string; sub: string; accent: string };

export const CAPABILITIES: Capability[] = [
  { word: "ПИШЕТ КОД", sub: "промпт → pull request", accent: C.coral },
  { word: "ВЫПУСКАЕТ ФИЧИ", sub: "атомарные коммиты · чистая история", accent: C.cyan },
  { word: "ВЕДЁТ ИНФРУ", sub: "серверы · cron · деплои", accent: C.amber },
  { word: "СЁРФИТ ВЕБ", sub: "headless chrome · глубокий ресёрч · скрапинг", accent: C.violet },
  { word: "ГОЛОС", sub: "слышит · говорит · офлайн STT/TTS", accent: C.green },
  { word: "5 КАНАЛОВ", sub: "telegram · discord · slack · whatsapp · trello", accent: C.coral },
  { word: "ГЕНЕРИТ МЕДИА", sub: "картинки · документы · анализ видео", accent: C.cyan },
  { word: "МУЛЬТИ-АГЕНТ", sub: "создаёт команду · делегирует", accent: C.amber },
  { word: "САМОУЛУЧШАЕТСЯ", sub: "учится на каждой сессии", accent: C.green },
];

export type Stat = { to: number; suffix: string; label: string; accent: string };

export const STATS: Stat[] = [
  { to: 500, suffix: "+", label: "РОУТИНГ МОДЕЛЕЙ", accent: C.coral },
  { to: 75, suffix: "+", label: "ВСТРОЕННЫХ ИНСТРУМЕНТОВ", accent: C.cyan },
  { to: 16, suffix: "", label: "СКИЛЛОВ", accent: C.violet },
  { to: 24, suffix: "/7", label: "ВСЕГДА АКТИВЕН", accent: C.amber },
  { to: 100, suffix: "%", label: "САМОУЛУЧШЕНИЕ", accent: C.green },
];
