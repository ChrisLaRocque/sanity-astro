import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";
export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    presentationTool({ resolve, previewUrl: location.origin }),
  ],
  schema,
});
