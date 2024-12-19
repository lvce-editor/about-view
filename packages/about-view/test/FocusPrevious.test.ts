import { expect, test } from '@jest/globals'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as FocusPrevious from '../src/parts/FocusPrevious/FocusPrevious.ts'

test('focusPrevious - from Ok to Copy', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  })
})

test('focusPrevious - from Copy to Ok', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  })
})

test('focusPrevious - from None stays None', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  }
  expect(FocusPrevious.focusPrevious(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  })
})
