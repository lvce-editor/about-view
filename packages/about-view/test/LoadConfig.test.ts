import { expect, test } from '@jest/globals'
import { FileSystemWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as LoadConfig from '../src/parts/LoadConfig/LoadConfig.ts'

test('loadConfig', async () => {
  using rendererRpc = RendererWorker.registerMockRpc({
    'ProcessPaths.getConfigJsonPath'(): string {
      return 'config.json'
    },
  })
  using fileSystemRpc = FileSystemWorker.registerMockRpc({
    'FileSystem.readFile'(): string {
      return JSON.stringify({
        commit: 'abc123',
        date: '2026-06-29',
        version: '1.2.3',
      })
    },
  })
  const state: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: [],
    productName: '',
    uid: 1,
  }

  expect(await LoadConfig.loadConfig(state)).toEqual({
    commit: 'abc123',
    date: '2026-06-29',
    version: '1.2.3',
  })
  expect(rendererRpc.invocations).toEqual([['ProcessPaths.getConfigJsonPath']])
  expect(fileSystemRpc.invocations).toEqual([['FileSystem.readFile', 'config.json']])
})
