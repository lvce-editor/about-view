import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'
import * as ShowAbout from '../src/parts/ShowAbout/ShowAbout.ts'

test('showAbout - web platform', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: readonly any[]) => {
      if (method === 'Viewlet.openWidget' && params[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected call')
    },
  })
  RendererWorker.set(mockRpc)
  await ShowAbout.showAbout(PlatformType.Web)
})

test('showAbout - electron platform', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: readonly any[]) => {
      if (method === 'ElectronDialog.showMessageBox') {
        return 1
      }
      if (method === 'GetWindowId.getWindowId') {
        return 1
      }
      if (method === 'Process.getElectronVersion') {
        return '1.0.0'
      }
      if (method === 'Process.getChromeVersion') {
        return '123.0.0'
      }
      if (method === 'Process.getNodeVersion') {
        return '22.0.0'
      }
      if (method === 'Process.getV8Version') {
        return '10.0.0'
      }
      throw new Error('unexpected call')
    },
  })
  RendererWorker.set(mockRpc)
  await ShowAbout.showAbout(PlatformType.Electron)
})

test('showAbout - error', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {
      throw new Error('Failed to show about')
    },
  })
  RendererWorker.set(mockRpc)
  await expect(ShowAbout.showAbout(PlatformType.Web)).rejects.toThrow('Failed to show about')
})
