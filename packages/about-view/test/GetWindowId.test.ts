import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetWindowId from '../src/parts/GetWindowId/GetWindowId.ts'

test('getWindowId - calls RendererWorker.invoke with correct arguments', async () => {
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'GetWindowId.getWindowId') {
        return 1
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const result = await GetWindowId.getWindowId()
  expect(called).toEqual({ method: 'GetWindowId.getWindowId', args: [] })
  expect(result).toBe(1)
})

test('getWindowId - handles error from RendererWorker', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {
      throw new Error('Failed to get window id')
    },
  })
  RendererWorker.set(mockRpc)
  await expect(GetWindowId.getWindowId()).rejects.toThrow('Failed to get window id')
})
