import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mock = jest.fn()

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mock,
  }
})

const HandleFocusIn = await import('../src/parts/HandleFocusIn/HandleFocusIn.ts')

test('handleClickCopy', async () => {
  const state = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
  }
  // @ts-expect-error
  mock.mockResolvedValue(undefined)
  const newState = await HandleFocusIn.handleFocusIn(state)
  expect(mock).toHaveBeenCalledWith('Focus.setFocus', 4)
  expect(newState).toBe(state)
})
