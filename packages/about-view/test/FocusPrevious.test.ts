import { expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as FocusPrevious from '../src/parts/FocusPrevious/FocusPrevious.ts'

test('focusPrevious - from Ok to Copy', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  })
})

test('focusPrevious - from Copy to Ok', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  })
})

test('focusPrevious - from None stays None', () => {
  const state: AboutState = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
    uid: 1,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  })
})
