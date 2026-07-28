import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Resolve "toolverse" to the parent folder (the actual package)
  // so changes in src/ are immediately reflected in the playground
  resolve: {
    alias: {
      toolverse: new URL("../src/index.ts", import.meta.url).pathname,
    },
  },
});
