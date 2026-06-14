import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-resume",
      closeBundle() {
        const resumeSource = resolve(__dirname, "resume");

        if (existsSync(resumeSource)) {
          cpSync(resumeSource, resolve(__dirname, "dist", "resume"), { recursive: true });
        }
      },
    },
  ],
});
