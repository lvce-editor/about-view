import { expect, test } from '@jest/globals'
import * as GetConfigJsonPath from '../src/parts/GetConfigJsonPath/GetConfigJsonPath.ts'

test('getConfigJsonPath', async () => {
  expect(await GetConfigJsonPath.getConfigJsonPath()).toBe('config.json')
})
