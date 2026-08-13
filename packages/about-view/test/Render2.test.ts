import { beforeEach, expect, jest, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as AboutStates from '../src/parts/AboutStates/AboutStates.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.ts'
import * as Render2 from '../src/parts/Render2/Render2.ts'
import * as RendererProcess from '../src/parts/RendererProcess/RendererProcess.ts'

beforeEach(() => {
  AboutStates.clear()
})

const uid = 1

test('render - no changes', async () => {
  const oldState: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: ['Version: 1.0.0'],
    productName: 'Test Editor',
    uid,
  }
  const newState: AboutState = {
    ...oldState,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  await expect(Render2.doRender(uid, diffResult)).resolves.toEqual([])
})

test('render - content changed', async () => {
  const oldState: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: ['Version: 1.0.0'],
    productName: 'Test Editor',
    uid,
  }
  const newState: AboutState = {
    ...oldState,
    lines: ['Version: 2.0.0'],
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  await expect(Render2.doRender(uid, diffResult)).resolves.toEqual([
    [
      'Viewlet.setDom2',
      uid,
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
  ])
})

test('render - focus changed', async () => {
  const oldState: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: ['Version: 1.0.0'],
    productName: 'Test Editor',
    uid,
  }
  const newState: AboutState = {
    ...oldState,
    focusId: AboutFocusId.Copy,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)

  await expect(Render2.doRender(uid, diffResult)).resolves.toEqual([
    ['Viewlet.focusSelector', uid, '[name="Copy"]'],
    ['Viewlet.setFocusContext', uid, 4],
  ])
})

test('render - both content and focus changed', async () => {
  const queueCommands = jest.fn((_uid: number, _commands: readonly unknown[]) => 17)
  RendererProcess.set(createMockRpc({ commandMap: { 'Viewlet.queueCommands': queueCommands } }))
  const oldState: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: ['Version: 1.0.0'],
    productName: 'Test Editor',
    uid,
  }
  const newState: AboutState = {
    focusId: AboutFocusId.Copy,
    lines: ['Version: 2.0.0'],
    productName: 'Test Editor 2',
    uid: 1,
  }
  AboutStates.set(uid, oldState, newState)
  const diffResult = Diff2.diff2(uid)
  await expect(Render2.doRender(uid, diffResult)).resolves.toEqual([
    ['Viewlet.setFocusContext', uid, 4],
    ['Viewlet.commitPending', uid, 17],
  ])
  expect(queueCommands).toHaveBeenCalledWith(uid, [
    [
      'Viewlet.setDom2',
      uid,
      expect.arrayContaining([
        expect.objectContaining({
          className: 'Viewlet About',
        }),
      ]),
    ],
    ['Viewlet.focusSelector', uid, '[name="Copy"]'],
  ])
})
