import { expect, test, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as HandleClickOk from '../src/parts/HandleClickOk/HandleClickOk.ts'

test('handleClickOk', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'Viewlet.closeWidget' && args[0] === 'About') {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleClickOk.handleClickOk(state)
  expect(mockInvoke).toHaveBeenCalledWith('Viewlet.closeWidget', 'About')
  expect(newState).toBe(state)
})

test('handleClickOk - error', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  const error = new Error('Failed to close widget')
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'Viewlet.closeWidget' && args[0] === 'About') {
        throw error
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  await expect(HandleClickOk.handleClickOk(state)).rejects.toThrow('Failed to close widget')
})
