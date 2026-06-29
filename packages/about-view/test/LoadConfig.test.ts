import { expect, test } from '@jest/globals'
import type { AboutState } from '../src/parts/AboutState/AboutState.ts'
import * as AboutFocusId from '../src/parts/AboutFocusId/AboutFocusId.ts'
import * as LoadConfig from '../src/parts/LoadConfig/LoadConfig.ts'

test('loadConfig', async () => {
  const state: AboutState = {
    focusId: AboutFocusId.Ok,
    lines: [],
    productName: '',
    uid: 1,
  }

  expect(await LoadConfig.loadConfig(state)).toEqual({
    commit: '',
    date: '',
    version: '',
  })
})
