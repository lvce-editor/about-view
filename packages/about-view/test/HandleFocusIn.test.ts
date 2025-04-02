import { beforeEach, expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mock = jest.fn()

// TODO don't mock

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mock,
  }
})

const HandleFocusIn = await import('../src/parts/HandleFocusIn/HandleFocusIn.ts')

test('handleFocusIn - when focusId exists', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  // @ts-expect-error
  mock.mockResolvedValue(undefined)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(mock).toHaveBeenCalledWith('Focus.setFocus', 4)
  expect(newState).toBe(state)
})

test('handleFocusIn - when focusId is None', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.None,
    uid: 1,
  }
  // @ts-expect-error
  mock.mockResolvedValue(undefined)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(mock).toHaveBeenCalledWith('Focus.setFocus', 4)
  expect(newState).toEqual({
    ...state,
    focusId: AboutFocusId.Ok,
  })
})

test('handleFocusIn - when focusId is Copy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  // @ts-expect-error
  mock.mockResolvedValue(undefined)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(mock).toHaveBeenCalledWith('Focus.setFocus', 4)
  expect(newState).toBe(state)
})
