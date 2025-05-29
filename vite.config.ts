// vite.config.ts
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ["@optmove/design-system"],
  },
  resolve: {
    alias: {
      "@optmoves": path.resolve(__dirname, "./src/lib"),
    },
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },
});
