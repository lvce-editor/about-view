import { beforeEach, expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'

beforeEach(() => {
  AboutStates.clear()
})

test('set and get state', () => {
  const uid = 'test-uid'
  const oldState: AboutState = {
    productName: 'Test App',
    lines: ['line 1', 'line 2'],
    focusId: 0,
  }
  const newState: AboutState = {
    productName: 'Test App',
    lines: ['line 1', 'line 2', 'line 3'],
    focusId: 1,
  }

  AboutStates.set(uid, oldState, newState)
  const result = AboutStates.get(uid)

  expect(result).toEqual({
    oldState,
    newState,
  })
})

test('get non-existent state', () => {
  const result = AboutStates.get('non-existent')
  expect(result).toBeUndefined()
})

test('getKeys returns all state keys', () => {
  const uid1 = 'test-uid-1'
  const uid2 = 'test-uid-2'
  const state: AboutState = {
    productName: 'Test App',
    lines: ['line 1'],
    focusId: 0,
  }

  AboutStates.set(uid1, state, state)
  AboutStates.set(uid2, state, state)

  const keys = AboutStates.getKeys()
  expect(keys).toEqual([uid1, uid2])
})
