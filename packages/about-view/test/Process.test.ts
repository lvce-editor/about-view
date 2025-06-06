import { expect, test } from '@jest/globals'
import { beforeEach, jest } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke = jest.fn()

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const Process = await import('../src/parts/Process/Process.ts')

test('version', () => {
  expect(Process.version).toBe('0.0.0-dev')
})

test('commit', () => {
  expect(Process.commit).toBe('unknown commit')
})

test('date', () => {
  expect(Process.date).toBe('')
})

test('getElectronVersion', async () => {
  // @ts-ignore
  mockInvoke.mockResolvedValue('')
  expect(await Process.getElectronVersion()).toBe('')
})

test('getNodeVersion', async () => {
  // @ts-ignore
  mockInvoke.mockResolvedValue('')
  expect(await Process.getNodeVersion()).toBe('')
})

test('getChromeVersion', async () => {
  // @ts-ignore
  mockInvoke.mockResolvedValue('')
  expect(await Process.getChromeVersion()).toBe('')
})

test('getVersion', () => {
  expect(Process.getVersion()).toBe('0.0.0-dev')
})

test('getCommit', () => {
  expect(Process.getCommit()).toBe('unknown commit')
})

test('getV8Version', async () => {
  expect(await Process.getV8Version()).toBe(undefined)
})

test('getDate', () => {
  expect(Process.getDate()).toBe('')
})

test('productNameLong', () => {
  expect(Process.productNameLong).toBe('Lvce Editor - OSS')
})
