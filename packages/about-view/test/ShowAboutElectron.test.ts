import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAboutDetailString from '../src/parts/GetAboutDetailString/GetAboutDetailString.ts'
import * as ShowAboutElectron from '../src/parts/ShowAboutElectron/ShowAboutElectron.ts'

// Ok button

test('showAboutElectron - clicks ok button', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): number {
      return 1
    },
    'GetAboutDetailString.getDetailString'(): Promise<string> | string {
      return GetAboutDetailString.getDetailString()
    },
    'ElectronDialog.showMessageBox'(options: any): number {
      return 1
    },
    'ClipBoard.writeText'(_text: string): void {},
    'Process.getElectronVersion'(): string {
      return 'x'
    },
    'Process.getNodeVersion'(): string {
      return 'x'
    },
    'Process.getChromeVersion'(): string {
      return 'x'
    },
    'Process.getV8Version'(): string {
      return 'x'
    },
    'Process.getVersion'(): string {
      return '0.0.0-dev'
    },
    'Process.getCommit'(): string {
      return 'unknown commit'
    },
    'Process.getDate'(): string {
      return 'unknown'
    },
  })

  const detail = await GetAboutDetailString.getDetailString()

  await ShowAboutElectron.showAboutElectron()

  const expectedOptions = {
    windowId: 1,
    message: 'Lvce Editor - OSS',
    productName: 'Lvce Editor - OSS',
    buttons: ['Copy', 'Ok'],
    type: 'info',
    detail,
  }
  expect(
    mockRpc.invocations.find((x: readonly any[]) => x[0] === 'ElectronDialog.showMessageBox'),
  ).toEqual(['ElectronDialog.showMessageBox', expectedOptions])
  expect(mockRpc.invocations.some((x: readonly any[]) => x[0] === 'ClipBoard.writeText')).toBe(false)
})

// Copy button

test('showAboutElectron - clicks copy button', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): number {
      return 1
    },
    'GetAboutDetailString.getDetailString'(): Promise<string> | string {
      return GetAboutDetailString.getDetailString()
    },
    'ElectronDialog.showMessageBox'(options: any): number {
      return 0
    },
    'ClipBoard.writeText'(_text: string): void {},
    'Process.getElectronVersion'(): string {
      return 'x'
    },
    'Process.getNodeVersion'(): string {
      return 'x'
    },
    'Process.getChromeVersion'(): string {
      return 'x'
    },
    'Process.getV8Version'(): string {
      return 'x'
    },
    'Process.getVersion'(): string {
      return '0.0.0-dev'
    },
    'Process.getCommit'(): string {
      return 'unknown commit'
    },
    'Process.getDate'(): string {
      return 'unknown'
    },
  })

  const detail = await GetAboutDetailString.getDetailString()

  await ShowAboutElectron.showAboutElectron()

  const expectedOptions = {
    windowId: 1,
    message: 'Lvce Editor - OSS',
    productName: 'Lvce Editor - OSS',
    buttons: ['Copy', 'Ok'],
    type: 'info',
    detail,
  }
  expect(
    mockRpc.invocations.find((x: readonly any[]) => x[0] === 'ElectronDialog.showMessageBox'),
  ).toEqual(['ElectronDialog.showMessageBox', expectedOptions])
  expect(
    mockRpc.invocations.find((x: readonly any[]) => x[0] === 'ClipBoard.writeText'),
  ).toEqual(['ClipBoard.writeText', detail])
})
