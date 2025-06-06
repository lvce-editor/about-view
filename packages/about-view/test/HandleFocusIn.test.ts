import { expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as HandleFocusIn from '../src/parts/HandleFocusIn/HandleFocusIn.ts'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'

const mockInvoke = jest.fn()

ParentRpc.set({
  // @ts-ignore
  invoke: mockInvoke,
  send: () => {},
  invokeAndTransfer: async () => 'ok',
})

test('handleFocusIn - when focusId exists', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toBe(state)
  expect(mockInvoke).toHaveBeenCalledWith('Focus.setFocus', 4)
})

test('handleFocusIn - when focusId is None', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.None,
    uid: 1,
  }
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toEqual({
    ...state,
    focusId: AboutFocusId.Ok,
  })
  expect(mockInvoke).toHaveBeenCalledWith('Focus.setFocus', 4)
})

test('handleFocusIn - when focusId is Copy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toBe(state)
  expect(mockInvoke).toHaveBeenCalledWith('Focus.setFocus', 4)
})
