import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAboutDetailString from '../src/parts/GetAboutDetailString/GetAboutDetailString.ts'

test('getDetailStringWeb', async () => {
  expect(await GetAboutDetailString.getDetailString()).toBe(
    `Version: 0.0.0-dev
Commit: abc
Date: Invalid Date: n/a
Electron: 0.0.0-dev
Chromium: 0.0.0-dev
Node: 0.0.0-dev
V8: 0.0.0-dev`,
  )
})
