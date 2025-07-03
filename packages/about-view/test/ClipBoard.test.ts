import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ClipBoard from '../src/parts/ClipBoard/ClipBoard.ts'

test('writeText - calls RendererWorker.invoke with correct arguments', async () => {
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'ClipBoard.writeText' && args[0] === 'test text') {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText('test text')
  expect(called).toEqual({ method: 'ClipBoard.writeText', args: ['test text'] })
})

test('writeText - handles empty string', async () => {
  let called: { method: string; args: readonly any[] } | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'ClipBoard.writeText' && args[0] === '') {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText('')
  expect(called).toEqual({ method: 'ClipBoard.writeText', args: [''] })
})

test('writeText - handles long text', async () => {
  let called: { method: string; args: readonly any[] } | undefined
  const longText = 'a'.repeat(1000)
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = { method, args }
      if (method === 'ClipBoard.writeText' && args[0] === longText) {
        return undefined
      }
      throw new Error('unexpected method ' + method)
    },
  })
  RendererWorker.set(mockRpc)
  await ClipBoard.writeText(longText)
  expect(called).toEqual({ method: 'ClipBoard.writeText', args: [longText] })
})
