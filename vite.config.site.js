import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Production build for the demo/docs SPA (Vercel, etc.).
 * Library builds use the default vite.config.js (npm publish).
 */
export default defineConfig(({ mode }) => ({
  plugins: [react({ jsxRuntime: "automatic" })],
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
  },
  build: {
    outDir: "dist-site",
    emptyOutDir: true,
  },
}));
