import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@config": path.resolve(__dirname, "src/config"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },
});
