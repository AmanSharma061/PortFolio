import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'server',

  projectId: 'tqn7qqpz',
  dataset: 'aman',

  plugins: [structureTool(), visionTool()],
  basePath: '/admin',

  schema: {
    types: schemaTypes,
  },
})
