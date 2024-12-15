import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockWriteText = jest.fn()

jest.unstable_mockModule('../src/parts/ClipBoard/ClipBoard.ts', () => {
  return {
    writeText: mockWriteText,
  }
})

const HandleClickCopy = await import('../src/parts/HandleClickCopy/HandleClickCopy.ts')

test('handleClickCopy', async () => {
  const state = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
  }
  // @ts-expect-error
  mockWriteText.mockResolvedValue(undefined)
  const newState = await HandleClickCopy.handleClickCopy(state)
  expect(mockWriteText).toHaveBeenCalledWith('Version: 1.0.0\nCommit: abc')
  expect(newState).toBe(state)
})

test('handleClickCopy - error', async () => {
  const state = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
  }
  const error = new Error('Failed to copy to clipboard')
  // @ts-expect-error
  mockWriteText.mockRejectedValue(error)
  await expect(HandleClickCopy.handleClickCopy(state)).rejects.toThrow('Failed to copy to clipboard')
})
