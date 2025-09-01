import { expect, test, jest } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetWindowId from '../src/parts/GetWindowId/GetWindowId.ts'

test('getWindowId - calls RendererWorker.invoke with correct arguments', async () => {
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {})
  RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): number {
      mockInvoke('GetWindowId.getWindowId')
      return 1
    },
  })
  const result = await GetWindowId.getWindowId()
  expect(mockInvoke).toHaveBeenCalledWith('GetWindowId.getWindowId')
  expect(result).toBe(1)
})

test('getWindowId - handles error from RendererWorker', async () => {
  RendererWorker.registerMockRpc({
    'GetWindowId.getWindowId'(): never {
      throw new Error('Failed to get window id')
    },
  })
  await expect(GetWindowId.getWindowId()).rejects.toThrow('Failed to get window id')
})
