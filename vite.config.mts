import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    netlifyPlugin(),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
});
