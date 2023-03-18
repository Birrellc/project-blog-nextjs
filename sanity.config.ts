import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  // basepath = render location
  basePath: '/studio',
  name: 'Content_studio',
  title: 'Content studio',

  projectId,
  dataset,

  // visionTool = groc query testing
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
