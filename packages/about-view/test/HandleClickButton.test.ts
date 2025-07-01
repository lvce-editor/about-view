import { beforeEach, expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke = jest.fn()

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const HandleClickButton = await import('../src/parts/HandleClickButton/HandleClickButton.ts')

test('handleClickButton - ok', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  // @ts-expect-error
  mockInvoke.mockResolvedValue(undefined)
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
  // @ts-expect-error
  mockInvoke.mockResolvedValue(undefined)
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
  // @ts-expect-error
  mockInvoke.mockResolvedValue(undefined)
  const newState = await HandleClickButton.handleClickButton(state, InputName.Copy)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', 'Version: 1.0.0')
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
