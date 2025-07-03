import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      calls.push({ method, args })
      if (
        (method === 'ClipBoard.writeText' && args[0] === 'Version: 1.0.0\nCommit: abc') ||
        (method === 'Viewlet.closeWidget' && args[0] === 'About')
      ) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ClipBoard.writeText' && args[0] === 'Version: 1.0.0\nCommit: abc') {
        throw error
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  await expect(HandleClickCopy.handleClickCopy(state)).rejects.toThrow('Failed to copy to clipboard')
})
