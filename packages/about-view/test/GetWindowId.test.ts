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

const GetWindowId = await import('../src/parts/GetWindowId/GetWindowId.ts')

test('getWindowId - calls RendererWorker.invoke with correct arguments', async () => {
  mockInvoke.mockResolvedValue(1)
  const result = await GetWindowId.getWindowId()
  expect(mockInvoke).toHaveBeenCalledWith('GetWindowId.getWindowId')
  expect(result).toBe(1)
})

test('getWindowId - handles error from RendererWorker', async () => {
  mockInvoke.mockRejectedValue(new Error('Failed to get window id'))
  await expect(GetWindowId.getWindowId()).rejects.toThrow('Failed to get window id')
})
