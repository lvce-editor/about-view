import { expect, test, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetWindowId from '../src/parts/GetWindowId/GetWindowId.ts'

test('getWindowId - calls RendererWorker.invoke with correct arguments', async () => {
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'GetWindowId.getWindowId') {
      return 1
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  const result = await GetWindowId.getWindowId()
  expect(mockInvoke).toHaveBeenCalledWith('GetWindowId.getWindowId')
  expect(result).toBe(1)
})

test('getWindowId - handles error from RendererWorker', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {
      throw new Error('Failed to get window id')
    },
  })
  RendererWorker.set(mockRpc)
  await expect(GetWindowId.getWindowId()).rejects.toThrow('Failed to get window id')
})
