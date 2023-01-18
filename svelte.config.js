import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { env } from "process";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    })
  ],
  onwarn: (warning, handler) => {
    if (warning.code === "css-unused-selector") return;
    handler(warning);
  },
  kit: {
    paths: {
      base: env.BASE_PATH ? env.BASE_PATH : "",
    },
    adapter: adapter({
      pages: env.BUILD_OUT_DIR ? env.BUILD_OUT_DIR : "build",
      assets: env.BUILD_OUT_DIR ? env.BUILD_OUT_DIR : "build",
      fallback: "404.html",
      precompress: env.PRECOMPRESS === "true",
    }),
  },
};

export default config;
