import { expect, test } from '@jest/globals'
import * as FocusNext from '../src/parts/FocusNext/FocusNext.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'

test('focusNext - from Ok to Copy', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  })
})

test('focusNext - from Copy to Ok', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Copy,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.Ok,
  })
})

test('focusNext - from None stays None', () => {
  const state = {
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  }
  expect(FocusNext.focusNext(state)).toEqual({
    productName: 'Test Product',
    lines: [],
    focusId: AboutFocusId.None,
  })
})