import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'
import * as ShowAbout from '../src/parts/ShowAbout/ShowAbout.ts'

test('showAbout - web platform', async () => {
  RendererWorker.registerMockRpc({
    'Viewlet.openWidget'(widgetId: string): void {
      if (widgetId !== 'About') {
        throw new Error('unexpected call')
      }
    },
  })
  await ShowAbout.showAbout(PlatformType.Web)
})

test('showAbout - electron platform', async () => {
  RendererWorker.registerMockRpc({
    'ElectronDialog.showMessageBox'(): number {
      return 1
    },
    'GetWindowId.getWindowId'(): number {
      return 1
    },
    'Process.getElectronVersion'(): string {
      return '1.0.0'
    },
    'Process.getChromeVersion'(): string {
      return '123.0.0'
    },
    'Process.getNodeVersion'(): string {
      return '22.0.0'
    },
    'Process.getV8Version'(): string {
      return '10.0.0'
    },
  })
  await ShowAbout.showAbout(PlatformType.Electron)
})

test('showAbout - error', async () => {
  RendererWorker.registerMockRpc({
    'Viewlet.openWidget'(): never {
      throw new Error('Failed to show about')
    },
  })
  await expect(ShowAbout.showAbout(PlatformType.Web)).rejects.toThrow('Failed to show about')
})
