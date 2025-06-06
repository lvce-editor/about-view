import { beforeEach, expect, jest, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockWriteText = jest.fn()
const mockClose = jest.fn()

jest.unstable_mockModule('../src/parts/ClipBoard/ClipBoard.ts', () => {
  return {
    writeText: mockWriteText,
  }
})
jest.unstable_mockModule('../src/parts/Close/Close.ts', () => {
  return {
    close: mockClose,
  }
})

const HandleClickCopy = await import('../src/parts/HandleClickCopy/HandleClickCopy.ts')

test('handleClickCopy', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
    uid: 1,
  }
  // @ts-expect-error
  mockWriteText.mockResolvedValue(undefined)
  const newState = await HandleClickCopy.handleClickCopy(state)
  expect(mockWriteText).toHaveBeenCalledWith('Version: 1.0.0\nCommit: abc')
  expect(mockClose).toHaveBeenCalledTimes(1)
  expect(newState).toBe(state)
})

test('handleClickCopy - error', async () => {
  const state: AboutState = {
    productName: 'Test Editor',
    lines: ['Version: 1.0.0', 'Commit: abc'],
    focusId: 1,
    uid: 1,
  }
  const error = new Error('Failed to copy to clipboard')
  // @ts-expect-error
  mockWriteText.mockRejectedValue(error)
  await expect(HandleClickCopy.handleClickCopy(state)).rejects.toThrow('Failed to copy to clipboard')
})
