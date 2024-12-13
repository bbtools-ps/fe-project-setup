import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), viteTsConfigPaths(), netlifyPlugin()],
});
