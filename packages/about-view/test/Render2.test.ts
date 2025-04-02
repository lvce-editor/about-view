import { beforeEach, expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.ts'
import * as Render2 from '../src/parts/Render2/Render2.ts'

beforeEach(() => {
  AboutStates.clear()
})

const uid = 1

test('render - no changes', () => {
  const oldState: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
    uid,
  }
  const newState: AboutState = {
    ...oldState,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  expect(Render2.doRender(uid, diffResult)).toEqual([])
})

test('render - content changed', () => {
  const oldState: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
    uid,
  }
  const newState: AboutState = {
    ...oldState,
    lines: ['Version: 2.0.0'],
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  expect(Render2.doRender(uid, diffResult)).toEqual([
    [
      'Viewlet.setDom2',
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
  ])
})

test('render - focus changed', () => {
  const oldState: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
    uid,
  }
  const newState: AboutState = {
    ...oldState,
    focusId: AboutFocusId.Copy,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)

  expect(Render2.doRender(uid, diffResult)).toEqual([
    ['Viewlet.focusElementByName', 'Copy'],
    ['Viewlet.setFocusContext', 4],
  ])
})

test('render - both content and focus changed', () => {
  const oldState: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: AboutFocusId.Ok,
    uid,
  }
  const newState: AboutState = {
    productName: 'Test Editor 2',
    lines: ['Version: 2.0.0'],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  expect(Render2.doRender(uid, diffResult)).toEqual([
    [
      'Viewlet.setDom2',
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
    ['Viewlet.focusElementByName', 'Copy'],
    ['Viewlet.setFocusContext', 4],
  ])
})
