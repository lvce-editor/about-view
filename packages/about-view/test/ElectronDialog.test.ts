import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ElectronDialog from '../src/parts/ElectronDialog/ElectronDialog.ts'

test('showMessageBox - calls RendererWorker.invoke with correct arguments', async () => {
  const calls: { method: string; args: readonly any[] }[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      calls.push({ method, args })
      if (method === 'GetWindowId.getWindowId') {
        return 1
      }
      if (method === 'ElectronDialog.showMessageBox') {
        return 1
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {
      throw new Error('Failed to show message box')
    },
  })
  RendererWorker.set(mockRpc)
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok'],
    type: 'info',
    productName: 'Lvce Editor - OSS',
  }
  await expect(ElectronDialog.showMessageBox(options)).rejects.toThrow('Failed to show message box')
})
