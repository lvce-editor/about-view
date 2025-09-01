import { expect, test } from '@jest/globals'
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
  RendererWorker.registerMockRpc({
    'Process.getElectronVersion'(): string {
      return ''
    },
  })
  expect(await Process.getElectronVersion()).toBe('')
})

test('getNodeVersion', async () => {
  RendererWorker.registerMockRpc({
    'Process.getNodeVersion'(): string {
      return ''
    },
  })
  expect(await Process.getNodeVersion()).toBe('')
})

test('getChromeVersion', async () => {
  RendererWorker.registerMockRpc({
    'Process.getChromeVersion'(): string {
      return ''
    },
  })
  expect(await Process.getChromeVersion()).toBe('')
})

test('getVersion', () => {
  expect(Process.getVersion()).toBe('0.0.0-dev')
})

test('getCommit', () => {
  expect(Process.getCommit()).toBe('unknown commit')
})

test('getV8Version', async () => {
  RendererWorker.registerMockRpc({
    'Process.getV8Version'(): undefined {
      return undefined
    },
  })
  expect(await Process.getV8Version()).toBe(undefined)
})

test('getDate', () => {
  expect(Process.getDate()).toBe('')
})

test('productNameLong', () => {
  expect(Process.productNameLong).toBe('Lvce Editor - OSS')
})
