import { beforeEach, expect, jest, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockRpc = {
  invoke: jest.fn(),
} as any

test('invoke - calls rpc.invoke with correct arguments', async () => {
  mockRpc.invoke.mockResolvedValue(42)
  RendererWorker.set(mockRpc)
  // @ts-ignore
  const result = await RendererWorker.invoke('test.method', 1, 'abc')
  expect(mockRpc.invoke).toHaveBeenCalledWith('test.method', 1, 'abc')
  expect(result).toBe(42)
})

test('invoke - handles error from rpc', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('test error'))
  RendererWorker.set(mockRpc)
  // @ts-ignore
  await expect(RendererWorker.invoke('test.method')).rejects.toThrow('test error')
})

test('invoke - throws if rpc is not set', () => {
  // @ts-ignore
  RendererWorker.set(undefined)
  // @ts-ignore
  expect(() => RendererWorker.invoke('test.method')).toThrow()
})
