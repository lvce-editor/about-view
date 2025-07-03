import { expect, test } from '@jest/globals'
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
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'Focus.setFocus' && args[0] === 4) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toBe(state)
  expect(called).toEqual({ method: 'Focus.setFocus', args: [4] })
})

test('handleFocusIn - when focusId is None', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.None,
    uid: 1,
  }
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'Focus.setFocus' && args[0] === 4) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toEqual({
    ...state,
    focusId: AboutFocusId.Ok,
  })
  expect(called).toEqual({ method: 'Focus.setFocus', args: [4] })
})

test('handleFocusIn - when focusId is Copy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: AboutFocusId.Copy,
    uid: 1,
  }
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'Focus.setFocus' && args[0] === 4) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(newState).toBe(state)
  expect(called).toEqual({ method: 'Focus.setFocus', args: [4] })
})
