import { expect, test } from '@jest/globals'
import { DialogWorker, FileSystemWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import * as ShowAboutElectron from '../src/parts/ShowAboutElectron/ShowAboutElectron.ts'

const detail = 'Version: 1.2.3\nCommit: abc123\nDate: unknown\nElectron: x\nChromium: x\nNode: x\nV8: x'

const registerFileSystemMock = (): ReturnType<typeof FileSystemWorker.registerMockRpc> => {
  return FileSystemWorker.registerMockRpc({
    'FileSystem.readFile'(uri: string): string {
      expect(uri).toBe('config.json')
      return JSON.stringify({
        commit: 'abc123',
        date: '',
        productName: 'Configured Editor',
        version: '1.2.3',
      })
    },
  })
}

const registerRendererMock = (): ReturnType<typeof RendererWorker.registerMockRpc> => {
  return RendererWorker.registerMockRpc({
    'ClipBoard.writeText'(_text: string): void {},
    'GetWindowId.getWindowId'(): number {
      return 1
    },
    'PlatformPaths.getConfigJsonPath'(): string {
      return 'config.json'
    },
    'Process.getChromeVersion'(): string {
      return 'x'
    },
    'Process.getElectronVersion'(): string {
      return 'x'
    },
    'Process.getNodeVersion'(): string {
      return 'x'
    },
    'Process.getV8Version'(): string {
      return 'x'
    },
  })
}

const registerDialogMock = (buttonIndex: number): ReturnType<typeof DialogWorker.registerMockRpc> => {
  return DialogWorker.registerMockRpc({
    'ElectronDialog.showMessageBox'(_options: any): number {
      return buttonIndex
    },
  })
}

const expectedOptions = {
  buttons: ['Copy', 'Ok'],
  detail,
  message: 'Configured Editor',
  productName: 'Configured Editor',
  type: 'info',
  windowId: 1,
}

test('showAboutElectron - clicks ok button', async () => {
  using mockFileRpc = registerFileSystemMock()
  using mockRendererRpc = registerRendererMock()
  using mockDialogRpc = registerDialogMock(1)

  await ShowAboutElectron.showAboutElectron()

  expect(mockDialogRpc.invocations).toEqual([['ElectronDialog.showMessageBox', expectedOptions]])
  expect(mockFileRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
  expect(mockRendererRpc.invocations.some((invocation: readonly any[]) => invocation[0] === 'ClipBoard.writeText')).toBe(false)
})

test('showAboutElectron - clicks copy button', async () => {
  using mockFileRpc = registerFileSystemMock()
  using mockRendererRpc = registerRendererMock()
  using mockDialogRpc = registerDialogMock(0)

  await ShowAboutElectron.showAboutElectron()

  expect(mockDialogRpc.invocations).toEqual([['ElectronDialog.showMessageBox', expectedOptions]])
  expect(mockFileRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
  expect(mockRendererRpc.invocations.find((invocation: readonly any[]) => invocation[0] === 'ClipBoard.writeText')).toEqual([
    'ClipBoard.writeText',
    detail,
  ])
})
