import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
//import { sortUserPlugins } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  optimizeDeps: { exclude: ["fsevents"] },
});

/*export const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
export const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;*/
