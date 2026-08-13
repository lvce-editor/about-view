import { measureMemory } from '@lvce-editor/measure-memory'
import { join } from 'node:path'
import { root } from './root.ts'

const threshold = 462_000

const instantiations = 1317

const instantiationsPath = join(root, 'packages', 'about-view')

const workerPath = join(root, '.tmp/dist/dist/aboutWorkerMain.js')

const playwrightPath = import.meta.resolve('../../../node_modules/playwright/index.mjs')

await measureMemory({
  playwrightPath,
  workerPath,
  threshold,
  instantiations,
  instantiationsPath,
})
