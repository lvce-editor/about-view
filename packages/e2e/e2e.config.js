import { defineConfig } from '@lvce-editor/test-with-playwright'

export default defineConfig({
  reusePage: true,
  serverPath: '../server/src/server.js',
  testPath: '.',
})
