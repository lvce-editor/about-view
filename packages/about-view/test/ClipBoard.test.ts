import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockInvoke = jest.fn()

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const ClipBoard = await import('../src/parts/ClipBoard/ClipBoard.ts')

test('writeText - calls ParentRpc.invoke with correct arguments', async () => {
  await ClipBoard.writeText('test text')
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', 'test text')
})

test('writeText - handles empty string', async () => {
  await ClipBoard.writeText('')
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', '')
})

test('writeText - handles long text', async () => {
  const longText = 'a'.repeat(1000)
  await ClipBoard.writeText(longText)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', longText)
})
