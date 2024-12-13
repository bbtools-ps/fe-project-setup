import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), viteTsConfigPaths(), netlifyPlugin()],
});
