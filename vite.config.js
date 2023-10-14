import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sortUserPlugins } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ["fsevents"] },
});

export const REDIRECT_URI = process.env.REDIRECT_URI;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const CLIENT_ID = process.env.CLIENT_ID;
