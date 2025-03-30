import { beforeEach, expect, test } from '@jest/globals'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as Create from '../src/parts/Create/Create.ts'

beforeEach(() => {
  AboutStates.clear()
})

test('create initializes state with default values', () => {
  const uid = 123
  Create.create(uid, 0, 0, 100, 100)
  const result = AboutStates.get(uid)

  expect(result).toEqual({
    oldState: {
      productName: '',
      lines: [],
      focusId: 0,
    },
    newState: {
      productName: '',
      lines: [],
      focusId: 0,
    },
  })
})
