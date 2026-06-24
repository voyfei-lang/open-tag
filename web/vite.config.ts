import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load ports and proxy target from the root .env so parallel worktrees can use distinct ports.
// Vite runs from web/, and loadEnvFile intentionally preserves values already exported by the shell.
try { (process as { loadEnvFile?: (p?: string) => void }).loadEnvFile?.("../.env"); } catch { /* use defaults when .env is absent */ }
const API = `http://localhost:${process.env.PORT ?? 7777}`;
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.VITE_PORT ?? 5273),
    proxy: {
      "/api": { target: API, changeOrigin: true },
      "/socket.io": { target: API, ws: true, changeOrigin: true },
    },
  },
  build: { outDir: "dist", emptyOutDir: true },
});
