import { expect, test, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ClipBoard from '../src/parts/ClipBoard/ClipBoard.ts'

test('writeText - calls RendererWorker.invoke with correct arguments', async () => {
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'ClipBoard.writeText' && args[0] === 'test text') {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText('test text')
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', 'test text')
})

test('writeText - handles empty string', async () => {
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'ClipBoard.writeText' && args[0] === '') {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText('')
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', '')
})

test('writeText - handles long text', async () => {
  const longText = 'a'.repeat(1000)
  const mockInvoke = jest.fn((method: string, ...args: readonly any[]) => {
    if (method === 'ClipBoard.writeText' && args[0] === longText) {
      return undefined
    }
    throw new Error('unexpected method ' + method)
  })
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvoke,
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText(longText)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', longText)
})
