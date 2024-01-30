import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import Schemas from "./sanity";

const config = defineConfig({
  projectId: "tqn7qqpz",
  dataset: "aman",
  apiVersion: "2021-03-25",
  plugins: [deskTool()],
  useCdn: false,
  basePath: "/admin",
  schema: {
    types: Schemas,
  },
});
export default config;
