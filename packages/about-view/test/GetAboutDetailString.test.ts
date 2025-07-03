import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAboutDetailString from '../src/parts/GetAboutDetailString/GetAboutDetailString.ts'

test('getDetailStringWeb', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Process.getElectronVersion') {
        return '0.0.0-dev'
      }
      if (method === 'Process.getNodeVersion') {
        return '0.0.0-dev'
      }
      if (method === 'Process.getChromeVersion') {
        return '0.0.0-dev'
      }
      if (method === 'Process.getVersion') {
        return '0.0.0-dev'
      }
      if (method === 'Process.getCommit') {
        return 'abc'
      }
      if (method === 'Process.getV8Version') {
        return '0.0.0-dev'
      }
      if (method === 'Process.getDate') {
        return 'n/a'
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
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
