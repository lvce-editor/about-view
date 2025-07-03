import { expect, test, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as HandleFocusIn from '../src/parts/HandleFocusIn/HandleFocusIn.ts'

test('handleFocusIn - when focusId exists', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'Focus.setFocus' && args[0] === 4) {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
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
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'Focus.setFocus' && args[0] === 4) {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
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
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'Focus.setFocus' && args[0] === 4) {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toBe(state)
  expect(mockInvoke).toHaveBeenCalledWith('Focus.setFocus', 4)
})
