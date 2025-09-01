import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ClipBoard from '../src/parts/ClipBoard/ClipBoard.ts'

test('writeText - calls RendererWorker.invoke with correct arguments', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  await ClipBoard.writeText('test text')
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'test text']])
})

test('writeText - handles empty string', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })

  await ClipBoard.writeText('')
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', '']])
})

test('writeText - handles long text', async () => {
  const longText = 'a'.repeat(1000)
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  await ClipBoard.writeText(longText)
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', longText]])
})
