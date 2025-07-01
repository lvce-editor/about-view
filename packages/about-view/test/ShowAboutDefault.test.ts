import { beforeEach, expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

beforeEach(() => {
  const mockRpc = {
    invoke: async (method: string, ...params: readonly any[]) => {
      if (method === 'Viewlet.openWidget' && params[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected call')
    },
  } as any
  RendererWorker.set(mockRpc)
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
  RendererWorker.set(mockRpc)
  await expect(ShowAboutDefault.showAboutDefault()).rejects.toThrow('Failed to open widget')
})
