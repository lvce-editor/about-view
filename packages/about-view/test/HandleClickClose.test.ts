import { beforeEach, expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke = jest.fn()

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const HandleClickClose = await import('../src/parts/HandleClickClose/HandleClickClose.ts')

test('handleClickClose', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0'],
    focusId: 1,
    uid: 1,
  }
  // @ts-expect-error
  mockInvoke.mockResolvedValue(undefined)
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
  // @ts-expect-error
  mockInvoke.mockRejectedValue(error)
  await expect(HandleClickClose.handleClickClose(state)).rejects.toThrow('Failed to close widget')
})
