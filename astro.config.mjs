// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      apiVersion: "2024-07-24", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // If you want to access the Studio on a route
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
});
