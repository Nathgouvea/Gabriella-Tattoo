import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "figma:asset": "./src/assets",
    },
  },
  base: "/Gabriella-Tattoo/",
});
