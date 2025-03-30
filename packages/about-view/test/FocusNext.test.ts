import { expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as FocusNext from '../src/parts/FocusNext/FocusNext.ts'

test('focusNext - from Ok to Copy', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  })
})

test('focusNext - from Copy to Ok', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  })
})

test('focusNext - from None stays None', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
    uid: 1,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  })
})
