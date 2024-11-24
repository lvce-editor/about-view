import { expect, test } from '@jest/globals'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as GetFocusSelector from '../src/parts/GetFocusSelector/GetFocusSelector.ts'

test('ok', () => {
  const focusId = AboutFocusId.Ok
  expect(GetFocusSelector.getFocusSelector(focusId)).toBe('.ButtonSecondary')
})

test('copy', () => {
  const focusId = AboutFocusId.Copy
  expect(GetFocusSelector.getFocusSelector(focusId)).toBe('.ButtonPrimary')
})

test('other', () => {
  const focusId = AboutFocusId.None
  expect(GetFocusSelector.getFocusSelector(focusId)).toBe('')
})
