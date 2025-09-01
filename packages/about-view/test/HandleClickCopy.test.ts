import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as HandleClickCopy from '../src/parts/HandleClickCopy/HandleClickCopy.ts'

test('handleClickCopy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
    uid: 1,
  }
  const calls: { method: string; args: readonly any[] }[] = []
  RendererWorker.registerMockRpc({
    'ClipBoard.writeText'(text: string): void {
      calls.push({ method: 'ClipBoard.writeText', args: [text] })
      if (text !== 'Version: 1.0.0\nCommit: abc') {
        throw new Error('unexpected method ClipBoard.writeText')
      }
    },
    'Viewlet.closeWidget'(widgetId: string): void {
      calls.push({ method: 'Viewlet.closeWidget', args: [widgetId] })
      if (widgetId !== 'About') {
        throw new Error('unexpected method Viewlet.closeWidget')
      }
    },
  })
  const newState = await HandleClickCopy.handleClickCopy(state)
  expect(calls).toEqual([
    { method: 'ClipBoard.writeText', args: ['Version: 1.0.0\nCommit: abc'] },
    { method: 'Viewlet.closeWidget', args: ['About'] },
  ])
  expect(newState).toBe(state)
})

test('handleClickCopy - error', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
    uid: 1,
  }
  const error = new Error('Failed to copy to clipboard')
  RendererWorker.registerMockRpc({
    'ClipBoard.writeText'(text: string): void {
      if (text === 'Version: 1.0.0\nCommit: abc') {
        throw error
      }
      throw new Error('unexpected method ClipBoard.writeText')
    },
  })
  await expect(HandleClickCopy.handleClickCopy(state)).rejects.toThrow('Failed to copy to clipboard')
})
