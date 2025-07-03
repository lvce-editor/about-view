import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ShowAboutDefault from '../src/parts/ShowAboutDefault/ShowAboutDefault.ts'

test('showAboutDefault - opens About widget', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: readonly any[]) => {
      if (method === 'Viewlet.openWidget' && params[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected call')
    },
  })
  RendererWorker.set(mockRpc)
  await ShowAboutDefault.showAboutDefault()
})

test('showAboutDefault - handles error', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {
      throw new Error('Failed to open widget')
    },
  })
  RendererWorker.set(mockRpc)
  await expect(ShowAboutDefault.showAboutDefault()).rejects.toThrow('Failed to open widget')
})
