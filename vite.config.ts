import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // optimizeDeps: {
  //     include: ['@optmove/design-system'], // Garanta que a dependência local esteja otimizando.
  // },
  // resolve: {
  //   alias: {
  //     "@optmove/design-system": path.resolve(__dirname, "./node_modules/@optmove/design-system/lib"),
  //   },
  // },
  ssr: {
    noExternal: ["@optmove/design-system"],
  },
});
