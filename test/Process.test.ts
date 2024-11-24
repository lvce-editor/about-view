import { expect, test } from '@jest/globals'
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

test('getElectronVersion', () => {
  expect(Process.getElectronVersion()).toBe('')
})

test('getNodeVersion', () => {
  expect(Process.getNodeVersion()).toBe('')
})

test('getChromeVersion', () => {
  expect(Process.getChromeVersion()).toBe('')
})

test('getVersion', () => {
  expect(Process.getVersion()).toBe('0.0.0-dev')
})

test('getCommit', () => {
  expect(Process.getCommit()).toBe('unknown commit')
})

test('getV8Version', () => {
  expect(Process.getV8Version()).toBe('')
})

test('getDate', () => {
  expect(Process.getDate()).toBe('')
})

test('productNameLong', () => {
  expect(Process.productNameLong).toBe('Lvce Editor - OSS')
})
