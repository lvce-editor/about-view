import { expect, test, jest } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as HandleClickClose from '../src/parts/HandleClickClose/HandleClickClose.ts'

test('handleClickClose', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {})
  RendererWorker.registerMockRpc({
    'Viewlet.closeWidget'(widgetId: string): void {
      mockInvoke('Viewlet.closeWidget', widgetId)
      if (widgetId !== 'About') {
        throw new Error('unexpected method Viewlet.closeWidget')
      }
    },
  })
  const newState = await HandleClickClose.handleClickClose(state)
  expect(mockInvoke).toHaveBeenCalledWith('Viewlet.closeWidget', 'About')
  expect(newState).toBe(state)
})

test('handleClickClose - error', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  const error = new Error('Failed to close widget')
  RendererWorker.registerMockRpc({
    'Viewlet.closeWidget'(widgetId: string): never {
      if (widgetId === 'About') {
        throw error
      }
      throw new Error('unexpected method Viewlet.closeWidget')
    },
  })
  await expect(HandleClickClose.handleClickClose(state)).rejects.toThrow('Failed to close widget')
})
