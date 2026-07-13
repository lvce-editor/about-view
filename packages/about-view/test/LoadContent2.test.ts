import { beforeAll, expect, test } from '@jest/globals'
import { FileSystemWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as LoadContent2 from '../src/parts/LoadContent2/LoadContent2.ts'

beforeAll(() => {
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: {
      userAgent: 'Test',
    },
  })
})

const registerConfigJsonPathMock = (): ReturnType<typeof RendererWorker.registerMockRpc> => {
  return RendererWorker.registerMockRpc({
    'PlatformPaths.getConfigJsonPath'(): string {
      return 'config.json'
    },
  })
}

const oldState: AboutState = {
  focusId: AboutFocusId.Ok,
  lines: ['old line'],
  productName: 'Old Name',
  uid: 1,
}

test('loadContent2 loads metadata from config.json', async () => {
  using mockRendererRpc = registerConfigJsonPathMock()
  using mockFileSystemRpc = FileSystemWorker.registerMockRpc({
    'FileSystem.readFile'(uri: string): string {
      expect(uri).toBe('config.json')
      return JSON.stringify({
        commit: 'abc123',
        date: 'config-date',
        productName: 'Configured Editor',
        version: '1.2.3',
      })
    },
  })

  const newState = await LoadContent2.loadContent2(oldState)

  expect(newState).toEqual({
    focusId: AboutFocusId.Ok,
    lines: ['Version: 1.2.3', 'Commit: abc123', 'Date: Invalid Date: config-date', 'Browser: Test'],
    productName: 'Configured Editor',
    uid: 1,
  })
  expect(mockRendererRpc.invocations).toEqual([['PlatformPaths.getConfigJsonPath']])
  expect(mockFileSystemRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
})

test('loadContent2 does not fall back to hardcoded metadata', async () => {
  using mockRendererRpc = registerConfigJsonPathMock()
  using mockFileSystemRpc = FileSystemWorker.registerMockRpc({
    'FileSystem.readFile'(): string {
      return JSON.stringify({})
    },
  })

  const newState = await LoadContent2.loadContent2(oldState)

  expect(newState).toEqual({
    focusId: AboutFocusId.Ok,
    lines: ['Version: ', 'Commit: ', 'Date: unknown', 'Browser: Test'],
    productName: '',
    uid: 1,
  })
  expect(mockRendererRpc.invocations).toEqual([['PlatformPaths.getConfigJsonPath']])
  expect(mockFileSystemRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
})

test('loadContent2 rejects invalid config.json', async () => {
  using mockRendererRpc = registerConfigJsonPathMock()
  using mockFileSystemRpc = FileSystemWorker.registerMockRpc({
    'FileSystem.readFile'(): string {
      return '{'
    },
  })

  await expect(LoadContent2.loadContent2(oldState)).rejects.toThrow(SyntaxError)
  expect(mockRendererRpc.invocations).toEqual([['PlatformPaths.getConfigJsonPath']])
  expect(mockFileSystemRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
})
