import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

const HandleClickButton = await import('../src/parts/HandleClickButton/HandleClickButton.ts')

test('handleClickButton - ok', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'Viewlet.closeWidget' && args[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleClickButton.handleClickButton(state, InputName.Ok)
  expect(called).toEqual({ method: 'Viewlet.closeWidget', args: ['About'] })
  expect(newState).toBe(state)
})

test('handleClickButton - close', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'Viewlet.closeWidget' && args[0] === 'About') {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  const newState = await HandleClickButton.handleClickButton(state, InputName.Close)
  expect(called).toEqual({ method: 'Viewlet.closeWidget', args: ['About'] })
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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      calls.push({ method, args })
      if ((method === 'ClipBoard.writeText' && args[0] === 'Version: 1.0.0') || (method === 'Viewlet.closeWidget' && args[0] === 'About')) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
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
  await expect(() => HandleClickButton.handleClickButton(state, 'abc')).rejects.toThrow('unexpected button')
})
