import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const ParentRpc = await import('../src/parts/ParentRpc/ParentRpc.ts')

const mockRpc: any = {
  invoke: jest.fn(),
}

test('invoke - calls rpc.invoke with correct arguments', async () => {
  mockRpc.invoke.mockResolvedValue(42)
  ParentRpc.setRpc(mockRpc)
  const result = await ParentRpc.invoke('test.method', 1, 'abc')
  expect(mockRpc.invoke).toHaveBeenCalledWith('test.method', 1, 'abc')
  expect(result).toBe(42)
})

test('invoke - handles error from rpc', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('test error'))
  ParentRpc.setRpc(mockRpc)
  await expect(ParentRpc.invoke('test.method')).rejects.toThrow('test error')
})

test('invoke - throws if rpc is not set', async () => {
  ParentRpc.setRpc(undefined)
  await expect(ParentRpc.invoke('test.method')).rejects.toThrow()
})

test('setRpc - sets rpc instance', () => {
  ParentRpc.setRpc(mockRpc)
  expect(ParentRpc.invoke('test')).resolves.not.toThrow()
})
