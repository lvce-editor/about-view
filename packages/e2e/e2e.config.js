import { defineConfig } from '@lvce-editor/test-with-playwright'

export default defineConfig({
  reusePage: true,
  coverageTarget: 'aboutWorkerMain.js',
  coverageInclude: 'packages/about-view/src/',
  coverageThreshold: 90,
  serverPath: '../server/src/server.js',
  testPath: '.',
})
