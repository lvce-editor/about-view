import { expect, test, jest } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as HandleClickButton from '../src/parts/HandleClickButton/HandleClickButton.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('handleClickButton - ok', async () => {
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
  const newState = await HandleClickButton.handleClickButton(state, InputName.Ok)
  expect(mockInvoke).toHaveBeenCalledWith('Viewlet.closeWidget', 'About')
  expect(newState).toBe(state)
})

test('handleClickButton - close', async () => {
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
  const newState = await HandleClickButton.handleClickButton(state, InputName.Close)
  expect(mockInvoke).toHaveBeenCalledWith('Viewlet.closeWidget', 'About')
  expect(newState).toBe(state)
})

test('handleClickButton - copy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  const calls: { method: string; args: readonly any[] }[] = []
  RendererWorker.registerMockRpc({
    'ClipBoard.writeText'(text: string): void {
      calls.push({ method: 'ClipBoard.writeText', args: [text] })
      if (text !== 'Version: 1.0.0') {
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
  const newState = await HandleClickButton.handleClickButton(state, InputName.Copy)
  expect(calls).toEqual([
    { method: 'ClipBoard.writeText', args: ['Version: 1.0.0'] },
    { method: 'Viewlet.closeWidget', args: ['About'] },
  ])
  expect(newState).toBe(state)
})

test('handleClickButton - error', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  await expect(HandleClickButton.handleClickButton(state, 'abc')).rejects.toThrow(new Error('unexpected button'))
})
