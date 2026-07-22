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
  { word: "ÉCRIT DU CODE", sub: "prompt → pull request", accent: C.coral },
  { word: "LIVRE DES FEATURES", sub: "commits atomiques · historique propre", accent: C.cyan },
  { word: "GÈRE L'INFRA", sub: "serveurs · cron · déploiements", accent: C.amber },
  { word: "NAVIGUE SUR LE WEB", sub: "chrome headless · recherche approfondie · scraping", accent: C.violet },
  { word: "VOIX", sub: "écouter · parler · STT/TTS hors ligne", accent: C.green },
  { word: "5 CANAUX", sub: "telegram · discord · slack · whatsapp · trello", accent: C.coral },
  { word: "GÉNÈRE DES MÉDIAS", sub: "images · documents · analyse vidéo", accent: C.cyan },
  { word: "MULTI-AGENT", sub: "crée une équipe · délègue", accent: C.amber },
  { word: "S'AUTO-AMÉLIORE", sub: "apprend à chaque session", accent: C.green },
];

export type Stat = { to: number; suffix: string; label: string; accent: string };

export const STATS: Stat[] = [
  { to: 500, suffix: "+", label: "MODÈLES ROUTÉS", accent: C.coral },
  { to: 75, suffix: "+", label: "OUTILS INTÉGRÉS", accent: C.cyan },
  { to: 16, suffix: "", label: "SKILLS", accent: C.violet },
  { to: 24, suffix: "/7", label: "TOUJOURS ACTIF", accent: C.amber },
  { to: 100, suffix: "%", label: "S'AUTO-AMÉLIORE", accent: C.green },
];
