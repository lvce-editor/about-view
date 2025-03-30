import { beforeEach, expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as Render2 from '../src/parts/Render2/Render2.ts'

beforeEach(() => {
  AboutStates.clear()
})

test('render - no changes', () => {
  const uid = 1
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  AboutStates.set(uid, state, state)
  expect(Render2.doRender(uid, [])).toEqual([])
})
