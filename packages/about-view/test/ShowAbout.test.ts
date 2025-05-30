import { beforeEach, expect, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'

beforeEach(() => {
  const mockRpc = {
    invoke: async (method: string, ...params: readonly any[]) => {
      if (method === 'Viewlet.openWidget' && params[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected call')
    },
  } as any
  ParentRpc.set(mockRpc)
})

const ShowAbout = await import('../src/parts/ShowAbout/ShowAbout.ts')

test('showAbout - web platform', async () => {
  await ShowAbout.showAbout(PlatformType.Web)
})

test('showAbout - electron platform', async () => {
  const mockRpc = {
    invoke: async (method: string, ...params: readonly any[]) => {
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
  } as any
  ParentRpc.set(mockRpc)
  await ShowAbout.showAbout(PlatformType.Electron)
})

test('showAbout - error', async () => {
  const mockRpc = {
    invoke: () => {
      throw new Error('Failed to show about')
    },
  } as any
  ParentRpc.set(mockRpc)
  await expect(ShowAbout.showAbout(PlatformType.Web)).rejects.toThrow('Failed to show about')
})
