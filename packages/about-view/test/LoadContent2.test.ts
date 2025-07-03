import { expect, test, beforeAll } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as LoadContent2 from '../src/parts/LoadContent2/LoadContent2.ts'

beforeAll(() => {
  // @ts-expect-error
  globalThis.navigator = {
    userAgent: 'Test',
  }
})

test('loadContent2', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  AboutStates.clear()

  const uid = 1
  const oldState: AboutState = {
    productName: 'Old Name',
    lines: ['old line'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  }
  AboutStates.set(uid, oldState, oldState)

  LoadContent2.loadContent2(uid)

  const { newState } = AboutStates.get(uid)
  expect(newState).toEqual({
    productName: 'Lvce Editor - OSS',
    lines: ['Version: 0.0.0-dev', 'Commit: unknown commit', 'Date: unknown', 'Browser: Test'],
    focusId: AboutFocusId.Ok,
    uid: 1,
  })
})
