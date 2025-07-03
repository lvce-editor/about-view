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
      if (method === 'Process.getV8Version') {
        return '0.0.0-dev'
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  expect(await GetAboutDetailString.getDetailString()).toBe(
    `Version: 0.0.0-dev\nCommit: unknown commit\nDate: unknown\nElectron: 0.0.0-dev\nChromium: 0.0.0-dev\nNode: 0.0.0-dev\nV8: 0.0.0-dev`,
  )
})
