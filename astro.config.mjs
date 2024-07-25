import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      apiVersion: "2023-07-24", // insert the current date to access the latest version of the API
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
