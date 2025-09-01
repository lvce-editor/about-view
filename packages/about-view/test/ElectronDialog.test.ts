import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ElectronDialog from '../src/parts/ElectronDialog/ElectronDialog.ts'

test('showMessageBox - calls RendererWorker.invoke with correct arguments', async () => {
  const calls: { method: string; args: readonly any[] }[] = []
  RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): number {
      calls.push({ method: 'GetWindowId.getWindowId', args: [] })
      return 1
    },
    'ElectronDialog.showMessageBox'(options: any): number {
      calls.push({ method: 'ElectronDialog.showMessageBox', args: [options] })
      return 1
    },
  })
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok', 'Cancel'],
    type: 'info',
    detail: 'test detail',
    productName: 'Lvce Editor - OSS',
  }
  const result = await ElectronDialog.showMessageBox(options)
  expect(calls).toContainEqual({ method: 'ElectronDialog.showMessageBox', args: [options] })
  expect(result).toBe(1)
})

test('showMessageBox - handles error from RendererWorker', async () => {
  RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): number {
      return 1
    },
    'ElectronDialog.showMessageBox'(): never {
      throw new Error('Failed to show message box')
    },
  })
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok'],
    type: 'info',
    productName: 'Lvce Editor - OSS',
  }
  await expect(ElectronDialog.showMessageBox(options)).rejects.toThrow('Failed to show message box')
})
