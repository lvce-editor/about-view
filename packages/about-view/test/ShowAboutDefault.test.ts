import { beforeEach, expect, test } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

beforeEach(() => {
  const mockRpc = {
    invoke: async (method: string, ...params: readonly any[]) => {
      if (method === 'Viewlet.openWidget' && params[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected call')
    },
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
})

const ShowAboutDefault = await import('../src/parts/ShowAboutDefault/ShowAboutDefault.ts')

test('showAboutDefault - opens About widget', async () => {
  await ShowAboutDefault.showAboutDefault()
})

test('showAboutDefault - handles error', async () => {
  const mockRpc = {
    invoke: () => {
      throw new Error('Failed to open widget')
    },
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  await expect(ShowAboutDefault.showAboutDefault()).rejects.toThrow('Failed to open widget')
})
