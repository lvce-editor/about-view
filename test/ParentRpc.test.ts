import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockRpc: any = {
  invoke: jest.fn(),
}

test('invoke - calls rpc.invoke with correct arguments', async () => {
  mockRpc.invoke.mockResolvedValue(42)
  ParentRpc.setRpc(mockRpc)
  // @ts-ignore
  const result = await ParentRpc.invoke('test.method', 1, 'abc')
  expect(mockRpc.invoke).toHaveBeenCalledWith('test.method', 1, 'abc')
  expect(result).toBe(42)
})

test('invoke - handles error from rpc', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('test error'))
  ParentRpc.setRpc(mockRpc)
  // @ts-ignore
  await expect(ParentRpc.invoke('test.method')).rejects.toThrow('test error')
})

test('invoke - throws if rpc is not set', () => {
  ParentRpc.setRpc(undefined)
  // @ts-ignore
  expect(() => ParentRpc.invoke('test.method')).toThrow()
})

test('setRpc - sets rpc instance', () => {
  ParentRpc.setRpc(mockRpc)
  // @ts-ignore
  expect(() => ParentRpc.invoke('test')).not.toThrow()
})
