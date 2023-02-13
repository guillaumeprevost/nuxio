import { defineConfig } from "vitest/config";
// import { alias } from "./alias";

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    // environment: "jsdom",
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  }
})