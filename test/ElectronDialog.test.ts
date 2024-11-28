import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke: any = jest.fn()

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const ElectronDialog = await import('../src/parts/ElectronDialog/ElectronDialog.ts')

test('showMessageBox - calls ParentRpc.invoke with correct arguments', async () => {
  mockInvoke.mockResolvedValue(1)
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok', 'Cancel'],
    type: 'info',
    detail: 'test detail',
  }
  const result = await ElectronDialog.showMessageBox(options)
  expect(mockInvoke).toHaveBeenCalledWith('ElectronDialog.showMessageBox', options)
  expect(result).toBe(1)
})

test('showMessageBox - handles error from ParentRpc', async () => {
  mockInvoke.mockRejectedValue(new Error('Failed to show message box'))
  const options = {
    windowId: 1,
    message: 'test message',
    buttons: ['Ok'],
    type: 'info',
  }
  await expect(ElectronDialog.showMessageBox(options)).rejects.toThrow('Failed to show message box')
})
