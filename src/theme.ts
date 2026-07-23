import { loadFont as loadGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/SpaceMono";

const { fontFamily: grotesk } = loadGrotesk("normal", {
  weights: ["400", "500", "600", "700"],
});
const { fontFamily: mono } = loadMono("normal", { weights: ["400", "700"] });

export const FONT = grotesk;
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
  { word: "MENULIS KODE", sub: "prompt → pull request", accent: C.coral },
  { word: "MERILIS FITUR", sub: "commit atomik · riwayat bersih", accent: C.cyan },
  { word: "MENJALANKAN INFRA", sub: "server · cron · deploy", accent: C.amber },
  { word: "MENJELAJAHI WEB", sub: "headless chrome · riset mendalam · scraping", accent: C.violet },
  { word: "SUARA", sub: "mendengar · berbicara · STT/TTS offline", accent: C.green },
  { word: "5 KANAL", sub: "telegram · discord · slack · whatsapp · trello", accent: C.coral },
  { word: "MEMBUAT MEDIA", sub: "gambar · dokumen · analisis video", accent: C.cyan },
  { word: "MULTI-AGEN", sub: "membentuk tim · mendelegasikan", accent: C.amber },
  { word: "MEMPERBAIKI DIRI", sub: "belajar dari setiap sesi", accent: C.green },
];

export type Stat = { to: number; suffix: string; label: string; accent: string };

export const STATS: Stat[] = [
  { to: 500, suffix: "+", label: "MODEL DIRUTEKAN", accent: C.coral },
  { to: 75, suffix: "+", label: "ALAT BAWAAN", accent: C.cyan },
  { to: 16, suffix: "", label: "SKILL", accent: C.violet },
  { to: 24, suffix: "/7", label: "SELALU AKTIF", accent: C.amber },
  { to: 100, suffix: "%", label: "PERBAIKAN DIRI", accent: C.green },
];
