import { expect, test, beforeAll } from '@jest/globals'
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
  RendererWorker.registerMockRpc({})
  AboutStates.clear()

  const uid = 1
  const oldState: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: ['old line'],
    productName: 'Old Name',
    uid: 1,
  }
  AboutStates.set(uid, oldState, oldState)

  const newState = LoadContent2.loadContent2(oldState)

  expect(newState).toEqual({
    focusId: AboutFocusId.Ok,
    lines: ['Version: 0.0.0-dev', 'Commit: unknown commit', 'Date: unknown', 'Browser: Test'],
    productName: 'Lvce Editor - OSS',
    uid: 1,
  })
})
