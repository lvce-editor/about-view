import { beforeEach, expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.ts'

beforeEach(() => {
  AboutStates.clear()
})

test('diff2 returns diff between old and new state', () => {
  const uid = 123
  const oldState: AboutState = {
    productName: 'Test App',
    lines: ['line 1', 'line 2'],
    focusId: 0,
  }
  const newState: AboutState = {
    productName: 'Test App',
    lines: ['line 1', 'line 3'],
    focusId: 0,
  }

  AboutStates.set(uid, oldState, newState)
  const result = Diff2.diff2(uid)

  expect(result).toEqual([1])
})
