import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as Process from '../src/parts/Process/Process.ts'

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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Process.getElectronVersion') {
        return ''
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  expect(await Process.getElectronVersion()).toBe('')
})

test('getNodeVersion', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Process.getNodeVersion') {
        return ''
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  expect(await Process.getNodeVersion()).toBe('')
})

test('getChromeVersion', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Process.getChromeVersion') {
        return ''
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  expect(await Process.getChromeVersion()).toBe('')
})

test('getVersion', () => {
  expect(Process.getVersion()).toBe('0.0.0-dev')
})

test('getCommit', () => {
  expect(Process.getCommit()).toBe('unknown commit')
})

test('getV8Version', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Process.getV8Version') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  expect(await Process.getV8Version()).toBe(undefined)
})

test('getDate', () => {
  expect(Process.getDate()).toBe('')
})

test('productNameLong', () => {
  expect(Process.productNameLong).toBe('Lvce Editor - OSS')
})
