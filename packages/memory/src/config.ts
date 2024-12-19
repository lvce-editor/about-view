import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 390_000

export const workerPath = join(root, '.tmp/dist/dist/aboutWorkerMain.js')
