import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke: any = jest.fn()

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const ElectronDialog = await import('../src/parts/ElectronDialog/ElectronDialog.ts')

test('showMessageBox - calls RendererWorker.invoke with correct arguments', async () => {
  mockInvoke.mockResolvedValue(1)
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok', 'Cancel'],
    type: 'info',
    detail: 'test detail',
    productName: 'Lvce Editor - OSS',
  }
  const result = await ElectronDialog.showMessageBox(options)
  expect(mockInvoke).toHaveBeenCalledWith('ElectronDialog.showMessageBox', options)
  expect(result).toBe(1)
})

test('showMessageBox - handles error from RendererWorker', async () => {
  mockInvoke.mockRejectedValue(new Error('Failed to show message box'))
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok'],
    type: 'info',
    productName: 'Lvce Editor - OSS',
  }
  await expect(ElectronDialog.showMessageBox(options)).rejects.toThrow('Failed to show message box')
})
